import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class LoanErrorService {

  constructor(
    private translate: TranslateService,
    private ui: UiService
  ) { }

  manageLoanError(error: any) {

    if (error && error.error && error.error.tontine_not_found) { 
      this.translate.get('ADD_SHARE_MSG4').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.user_not_authorize) { 
      this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.remplir_tous_les_champs) { 
      this.translate.get('TOPUP_MSG2').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.seance_id_not_exist) { 
      this.translate.get('SEANCE_NOT_FOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.cycle_id_not_exist) { 
      this.translate.get('CYCLE_NOT_FOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.max_base_on_cash_available_greater_than_one_hundred_percent) { 
      this.translate.get('MAX_BASE_ON_CASH_GREAT_100').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.amount_is_greater_than_cash_loan_available) { 
      this.translate.get('AMOUNT_GREAT_CASH_LOAN_AVAILABLE').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.amount_is_greater_than_current_amount_maximum_for_a_loan) { 
      this.translate.get('AMOUNT_GREAT_CURRENT_CASH_LOAN_AVAILABLE').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.loan_request_id_not_exist) {
      this.translate.get('LOAN_REQUEST_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

    
    if (error && error.error && error.error.this_user_has_already_validated_request) {
      this.translate.get('USER_HAS_ALREADY_VALIDATE_REQUEST').subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

    if (error && error.error && error.error.this_user_has_already_rejected_request) {
      this.translate.get('USER_HAS_ALREADY_REJECT_REQUEST').subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

    if (error && error.error && error.error.amount_is_greater_than_rest_to_pay) {
      this.translate.get(`AMOUNT_GREATHER_THAN_REST ${error.error.reste_a_payer}`).subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

    if (error && error.error && error.error.total_amount_proof_is_greather_than_montant_total) {
      this.translate.get(`ITEM_AMOUNT_GREATHER_THAN_TOTAL_AMOUNT`).subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

    if (error && error.error && error.error.total_amount_proof_is_greather_than_montant_total) {
      this.translate.get(`ITEM_AMOUNT_GREATHER_THAN_TOTAL_AMOUNT`).subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

    if (error && error.error && error.error.loan_payback_user_id_not_exist) {
      this.translate.get(`LOAN_REFUND_ID_NOT_EXIST`).subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

    if (error && error.error && error.error.interest_request_payment_id_not_exist) {
      this.translate.get(`LOAN_INTEREST_ID_NOT_EXIST`).subscribe(trans => {
        this.ui.presentToast(trans);
      })
    }

  }

}
