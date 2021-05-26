import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from '../../../services/tontine.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { LoanService } from '../service/loan.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss'],
})
export class ReasonComponent implements OnInit {

  @Input() requestAmount: any;
  @Input() requestOption: any;
  @Input() currency: any;
  loading: boolean;
  reason: string;
  currentTontine: any;
  memberData: any;

  constructor(
    private modatCtrl: ModalController,
    private loanService: LoanService,
    private navParams: NavParams,
    private tontine: TontineService,
    private error: ErrorService,
    private ui: UiService,
    private translate: TranslateService,
    private loanError: LoanErrorService,
    private events: EventService
  ) {
    this.loading = false;
    this.reason = '';
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.memberData = this.navParams.get('data');
  }

  ngOnInit() { }

  // close the modal
  closeValidation(ans: any) {
    this.modatCtrl.dismiss(ans, 'cancel');
  }

  // validate the member debt
  validationAdmin(action: string) {
    switch (action) {
      case 'validate':
        this.approveLoanRequest();
        break;
      case 'reject':
        this.rejectLoanRequest();
        break;
      default:
        break;
    }
  }

  // Approve the loan request
  approveLoanRequest() {
    const param = {
      loan_request_id: this.memberData.loan_request_id,
      reason: this.reason
    };
    this.loading = true;
    this.translate.get('APPROVE_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.loanService.approveLoanRequest(param).subscribe((reponse: any) => {

      this.loading = false;

      if (reponse && reponse.message === 'success') {
        this.translate.get('APPROVE_REQUEST_SUCCESS_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
        });
      }
      this.events.publish('loan-action');
      this.ui.dismissLoading();
      this.closeValidation('approve');


    }, error => {
      this.loading = false;
   
      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            this.ui.dismissLoading();
            if (data && data.result === "OK") {
              this.approveLoanRequest();
            } else {
              this.loading = false;
              this.closeValidation('exit');
            }
          });
        } else {
          this.loanError.manageLoanError(error);
          this.ui.dismissLoading();
          this.closeValidation('exit');
        }

      } else {
        this.ui.dismissLoading();
        this.closeValidation('exit');
        this.error.manageError(error);
      }
    });
  }


  // Reject loan request
  rejectLoanRequest() {
    const param = {
      loan_request_id: this.memberData.loan_request_id,
      reason: this.reason
    };
    this.loading = true;
    this.translate.get('REJECT_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.loanService.rejectLoanRequest(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('REJECT_REQUEST_SUCCESS_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
        });
      }
      this.events.publish('loan-action');
      this.ui.dismissLoading();
      this.closeValidation('reject');

    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            this.ui.dismissLoading();
            if (data && data.result === "OK") {
              this.rejectLoanRequest();
            } else {
              this.loading = false;
              this.closeValidation('exit');
            }
          });
        } else {
          this.loanError.manageLoanError(error);
          this.ui.dismissLoading();
          this.closeValidation('exit');
        }
      } else {
        this.ui.dismissLoading();
        this.closeValidation('exit');
        this.error.manageError(error);
      }
    });
  }
}
