import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoanService } from '../service/loan.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { Router } from '@angular/router';
import { LoanGlobalDataService } from '../service/loan-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-loans-request',
  templateUrl: './loans-request.component.html',
  styleUrls: ['./loans-request.component.scss'],
})
export class LoansRequestComponent implements OnInit {

  loanRequestForm: FormGroup;
  currentTontine: any;
  currentLoanRequest: any;
  loading: boolean;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  validationMessages: any;
  listParts: any;
  loadingRequest: boolean;
  currentAmountValid: boolean;
  hasContribute: boolean;
  user: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private loanService: LoanService,
    private loanData: LoanGlobalDataService,
    private loanError: LoanErrorService,
    private modatCtrl: ModalController,
    private error: ErrorService,
    private translate: TranslateService,
    private ui: UiService,
    private tontine: TontineService,
    private router: Router
  ) {
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.user = this.userService.getUserData();
    this.hasContribute = this.loanData.hasContributeSeance(this.currentTontine, this.user.id);
    this.loading = false;
    this.listParts = [];
    this.loadingRequest = false;
    this.currentAmountValid = true;
  }

  ngOnInit() {
    this.initLoanRequestForm();
    this.initFormMessage();
    this.getMemebersParts(this.currentTontine);
    this.loading = true;
    this.getLoanData(null);
  }

  get amountLoan() {
    return this.loanRequestForm.get('amount');
  }

  initFormMessage() {
    this.translate.get(['REQUIRED_FIELD_TEXT', 'PATTERN_ERROR_TEXT']).subscribe(trans => {
      this.validationMessages = {
        amountLoan: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { pattern: 'required', message: trans.PATTERN_ERROR_TEXT }
        ]
      }
    });
  }

  closeLoansRequest(result: string) {
    this.modatCtrl.dismiss(result, 'cancel');
  }

  initLoanRequestForm() {
    this.loanRequestForm = this.fb.group({
      tontine_id: new FormControl(this.currentTontine.tontine.tontine_id, Validators.required),
      seance_id: new FormControl(this.currentTontine.seance_courante.id, Validators.required),
      cycle_id: new FormControl(this.currentTontine.cycle_courant.id, Validators.required),
      numero_part: new FormControl(this.currentTontine.tontine, Validators.required),
      amount: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.required]))
    });
  }

  // Get the list of members parts
  getMemebersParts(data: any) {
    const currentUser = this.userService.getUserData();
    const listParts = [];
    if (data && data.membres && data.membres.liste_membre.length > 0) {
      const listMembers = data.membres.liste_membre;
      listMembers.forEach(member => {
        if (member && member.id === currentUser.id) {
          this.translate.get('A_SHARE_TEXT').subscribe(trans => {
            listParts.push({ share: trans, numpart: member.numero_part });
          });
        }
      });
    }
    if (listParts && listParts.length > 0) {
      this.loanRequestForm.get('numero_part').setValue(listParts[0].numpart);
    }
    this.listParts = listParts;
  }

  // Check if it is less than current maximum loan
  checkCurrentMaximumLoan(amount: number) {
    this.currentAmountValid = true;
    if (this.currentLoanRequest && this.currentLoanRequest[0] && (amount > this.currentLoanRequest[0].current_maximum_for_loan || amount > this.currentLoanRequest[0].cash_loan_available)) {
      this.currentAmountValid = false;
    }
  }

  // make a request
  makeLoanRequest(param: any) {
    this.loadingRequest = true;
    this.loanService.makeLoanRequest(param).subscribe((data: any) => {
      this.loadingRequest = false;

      if (data && data.message === "success") {
        this.translate.get('lOAN_REQUEST_SUCCESS_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.initLoanRequestForm();
        this.closeLoansRequest('success');
        if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1) {
          this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans', 'all-loans']);
        }
      }

    }, error => {
      this.loadingRequest = false;
      if (error && error.error && error.error.message === "error") {
        if (error.error.user_not_found) {
          this.loadingRequest = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.makeLoanRequest(param);
            } else {
              this.loadingRequest = false;
            }
          });
        } else {
          this.loanError.manageLoanError(error);
        }

      } else {
        this.error.manageError(error);
      }
    });

  }

  // Get the loans data
  getLoanData(event: any) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      seance_id: this.currentTontine.seance_courante.id
    };
    this.loanService.getLoansInformations(param).subscribe((data: any) => {

      if (data && data.message === 'success') {
        this.currentLoanRequest = data.loan_request;
      }
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
      this.loading = false;
    }, error => {

      this.loading = false;
      if (event) {
        event.target.complete();
      }
      if (error && error.error && error.error.message === "error") {

        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.getLoanData(event);
            } else {
              this.loading = false;
            }
          });
        } else {
          this.loanError.manageLoanError(error);
        }

      } else {
        this.error.manageError(error);
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getLoanData(event);
  }

}
