import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { LoanService } from '../service/loan.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { LoanGlobalDataService } from '../service/loan-global-data.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-loans-edit',
  templateUrl: './loans-edit.component.html',
  styleUrls: ['./loans-edit.component.scss'],
})
export class LoansEditComponent implements OnInit {

  infoLoansForm: FormGroup;
  validationMessages: any;
  loadingRequest: boolean;
  currentTontine: any;
  isMaxBaseValid: boolean;
  totalMembersContribution: number;
  currentLoanData: any;

  constructor(
    private fb: FormBuilder,
    private modatCtrl: ModalController,
    private translate: TranslateService,
    private loanService: LoanService,
    private loanData: LoanGlobalDataService,
    private loanError: LoanErrorService,
    private error: ErrorService,
    private ui: UiService,
    private tontine: TontineService
  ) {
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentLoanData = this.currentTontine.tontine;
    this.isMaxBaseValid = true;
  }

  ngOnInit() {
    this.initFormMessage();
    this.initInfoLoansForm();
    this.updateCurrentUserTontine();
  }


  // Form getters
  get interestRate() {
    return this.infoLoansForm.get('interest');
  }

  get interestOfInterest() {
    return this.infoLoansForm.get('interest_of_interest');
  }

  get typeOfTarget() {
    return this.infoLoansForm.get('typeOfTarget');
  }

  get interestTargetValue() {
    return this.infoLoansForm.get('value_type_of_target');
  }
  get loanTargetValue() {
    return this.infoLoansForm.get('value_type_of_target');
  }
  get forceLoaning() {
    return this.infoLoansForm.get('share_cash_between_member');
  }
  get MaxLoanContrib() {
    return this.infoLoansForm.get('max_base_contribution');
  }
  get MaxLoanContribType() {
    return this.infoLoansForm.get('type_max_base_on_contribution');
  }
  get MaxLoanCash() {
    return this.infoLoansForm.get('max_base_on_cash_available');
  }

  // Form init form
  initFormMessage() {
    this.translate.get(['REQUIRED_FIELD_TEXT']).subscribe(trans => {
      this.validationMessages = {
        interestRate: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
        ],
        interestOfInterest: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
        ],
        interestTargetValue: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
        ],
        loanTargetValue: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
        ],
        forceLoaning: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
        ],
        MaxLoanContrib: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
        ],
        MaxLoanCash: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
        ]
      };

    });
  }

  // Init the form
  initInfoLoansForm() {
    this.infoLoansForm = this.fb.group({
      tontine_id: [this.currentTontine.tontine.tontine_id],
      interest: [this.currentLoanData && this.currentLoanData.interest ? this.currentLoanData.interest : '', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.max(100), Validators.required])],
      interest_of_interest: [this.currentLoanData && this.currentLoanData.interest_of_interest ? this.currentLoanData.interest_of_interest : '', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.max(100), Validators.required])],
      typeOfTarget: [this.currentLoanData && this.currentLoanData.type_of_target_interest ? 1 : this.currentLoanData && this.currentLoanData.type_of_target_loan ? 2 : 0],
      type_of_target_interest: [this.currentLoanData && this.currentLoanData.type_of_target_interest ? this.currentLoanData.type_of_target_interest : 0],
      type_of_target_loan: [this.currentLoanData && this.currentLoanData.type_of_target_loan ? this.currentLoanData.type_of_target_loan : 0],
      value_type_of_target: [this.currentLoanData && this.currentLoanData.value_type_of_target ? this.currentLoanData.value_type_of_target : 0],
      share_cash_between_member: [this.currentLoanData && this.currentLoanData.lend_full_cash_available_at_each_session ? true : false],
      max_base_contribution: [this.currentLoanData && this.currentLoanData.max_base_on_contribution ? this.currentLoanData.max_base_on_contribution : 0, Validators.compose([Validators.pattern('^[0-9]+$')])],
      max_base_on_cash_available: [this.currentLoanData && this.currentLoanData.max_base_on_cash_available ? this.currentLoanData.max_base_on_cash_available : 0, Validators.compose([Validators.pattern('^[0-9]+$'), Validators.max(100)])],
      type_max_base_on_contribution: [this.currentLoanData && this.currentLoanData.type_max_base_on_contribution ? this.currentLoanData.type_max_base_on_contribution : 'currency_name']
    });
    this.checkMaxBaseContribution(this.infoLoansForm.value.type_max_base_on_contribution);
  }

  // Close the menu
  closeLoansEdit(result: string) {
    this.modatCtrl.dismiss(result, 'cancel');
  }

  // Get numbers members
  getNbMembres() {
    return this.loanData.getNbMembres(this.currentTontine.membres.liste_membre);
  }

  // Check member contribution per coutshare
  checkPerCoutShare() {
    const membres = this.getNbMembres();
    const totalContribution = membres * this.currentTontine.tontine.coutshare;
    this.totalMembersContribution = totalContribution;
    const maxBase = this.infoLoansForm.value.max_base_contribution * this.currentTontine.tontine.coutshare;
    if (maxBase <= totalContribution) {
      this.isMaxBaseValid = true;
    } else {
      this.isMaxBaseValid = false;
    }
  }

  // Check member contribution per currency amount
  checkPerCurrencyAmount() {
    const membres = this.getNbMembres();
    const totalContribution = membres * this.currentTontine.tontine.coutshare;
    this.totalMembersContribution = totalContribution;
    const maxBase = this.infoLoansForm.value.max_base_contribution;
    if (maxBase <= totalContribution) {
      this.isMaxBaseValid = true;
    } else {
      this.isMaxBaseValid = false;
    }
  }

  // Check the max base contribution value
  checkMaxBaseContribution(type: string) {
    // It should be greathest than 100% or sum of member contribution
    switch (type) {
      case 'currency_name':
        this.checkPerCurrencyAmount();
        break;

      case 'member_contribution':
        this.checkPerCoutShare();
        break;

      default:
        break;
    }
  }


  // Update the loan type
  updateLoanType(type: number) {
    switch (type) {
      case 0:
        this.infoLoansForm.get('type_of_target_interest').setValue(0);
        this.infoLoansForm.get('type_of_target_loan').setValue(0);
        break;

      case 1:
        this.infoLoansForm.get('type_of_target_interest').setValue(1);
        this.infoLoansForm.get('type_of_target_loan').setValue(0);
        break;

      case 2:
        this.infoLoansForm.get('type_of_target_interest').setValue(0);
        this.infoLoansForm.get('type_of_target_loan').setValue(1);
        break;

      default:
        break;
    }
  }

  // Update the current user tontine
  updateCurrentUserTontine() {
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData && tontineData.tontine) {
      this.tontine.getTontineDetail(tontineData.tontine.tontine_id).subscribe((reponse: any) => {
        if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
          this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
          this.currentTontine = reponse.infos_tontine[0];
          this.currentLoanData = this.currentTontine.tontine;
          this.initInfoLoansForm();
        }
      }, error => {
        if (error && error.error && error.error.bad_token) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.updateCurrentUserTontine();
            }
          });
        } else {
          this.error.manageError(error);
        }
      });
    }
  }

  // Can edit a loan request 
  canEditLoanRequest() {
    let formData = this.tontine.getCurrentTontineData();
    const currentTontine = formData;
    const currentSeance = formData.seance_courante;
    const previousSeance = formData.avant_derniere_seance;
    let canEdit = false;
    if (((!currentSeance && currentTontine.tontine.active === 0) || (!currentSeance && !previousSeance && currentTontine.tontine.active === 1) ||
      (currentSeance && currentSeance.numero_seance < 1 && currentTontine.tontine.active === 1)) && currentTontine.tontine.administrator === 1) {
      canEdit = true;
    }
    return canEdit
  }


  // Make a request
  editLoanRequest(param: any) {
    this.loadingRequest = true;
    const paramData = param;
    paramData.share_cash_between_member ?
      paramData.share_cash_between_member = 1 :
      paramData.share_cash_between_member = 0;

    this.loanService.editLoanRequest(paramData).subscribe((data: any) => {
      this.loadingRequest = false;
      if (data && data.message === "success") {
        this.translate.get('lOAN_EDIT_SUCCESS_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.updateCurrentUserTontine();
        this.closeLoansEdit('success');
      }

    }, error => {
      this.loadingRequest = false;
      if (error && error.error && error.error.message === "error") {

        if (error.error.user_not_found) {
          this.loadingRequest = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.editLoanRequest(param);
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


}
