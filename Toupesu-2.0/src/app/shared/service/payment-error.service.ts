import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentErrorService {

  constructor(
    private ui: UiService,
    private translate: TranslateService
  ) { }


  managePaymentOfflineError(error: any) {

    if (error.error.remplir_tous_les_champs) {
      this.translate.get('DEBT_PARAMETER_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.device_id_not_exist) {
      this.translate.get('CURRENCY_REQUIRED').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.seance_id_not_exist) {
      this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.device_id_not_match_device_id_tontine) {
      this.translate.get('DEBT_CURRENCY_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    } 

    if (error.error.typecontribution_id_not_exist) {
      this.translate.get('TONTINE_PENALTY_MSG9').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.total_amount_proof_is_greather_than_total_amount_receipt) {
      this.translate.get('DEBT_TOTAL_AMOUNT_PROOF_MSG').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.tontine_id_not_exist) {
      this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.bouffe_id_not_exist) {
      this.translate.get('BENEFICIARY_NOT_EXIST_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.user_not_authorize) {
      this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.total_amount_is_greather_than_bouffe_amount) {
      this.translate.get('AMOUNT_GREATHER_THAN_JACKPOT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.this_admin_has_already_validate) {
      this.translate.get('ADMIN_ALREADY_VALIDATE').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.montant_online_is_greather_than_online_balance) {
      this.translate.get('ONLINE_AMOUNT_GREATHER_THAN_ONLINE_BALANCE').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.montant_offline_is_greather_than_bank_balance) {
      this.translate.get('OFFLINE_AMOUNT_GREATHER_THAN_OFFLINE_BALANCE').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.this_bouffe_is_already_initiated) {
      this.translate.get('JACKPOT_INITIATE_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.remplir_tous_les_champs) {
      this.translate.get('DEBT_PARAMETER_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.user_not_authorized) {
      this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.total_amount_proof_is_greather_than_bouffe_amount) {
      this.translate.get('BENEFICIAL_AMOUNT_GREATHER_THAN_PROOF').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.sold_online_balance_is_insufficient) {
      this.translate.get('ONLINE_WALLET_BALANCE_INSUFFICIENT').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.typepaiement_id_not_exist) {
      this.translate.get('PAIDMODE_MSG3').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.currency_name_not_exist) {
      this.translate.get('DEBT_CURRENCY_NOTFOUND').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.type_caisse_tontine_id_not_exist) {
      this.translate.get('CAISSE_TONTINE_NOTFOUND').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    } 


    if (error.error.type_caisse_depart_id_not_exist) {
      this.translate.get('CAISSE_SOURCE_NOTFOUND').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.type_caisse_arrivee_id_not_exist) {
      this.translate.get('CAISSE_DESTINATION_NOTFOUND').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.offline_balance_insuffisant) {
      this.translate.get('BALANCE_OFFLINE_INSUFFICIENT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.online_balance_insuffisant) {
      this.translate.get('BALANCE_ONLINE_INSUFFICIENT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }
  }


  managePaymentOnlineError(error: any) {

    if (error.error.remplir_tous_les_champs) {
      this.translate.get('DEBT_PARAMETER_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.device_id_not_exist) {
      this.translate.get('CURRENCY_REQUIRED').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.seance_id_not_exist) {
      this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.seance_not_found) {
      this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.device_id_not_match_device_id_tontine) {
      this.translate.get('DEBT_CURRENCY_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    } 

    if (error.error.typecontribution_id_not_exist) {
      this.translate.get('TONTINE_PENALTY_MSG9').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.total_amount_proof_is_greather_than_total_amount_receipt) {
      this.translate.get('DEBT_TOTAL_AMOUNT_PROOF_MSG').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    } 

    if (error.error.insufficient_balance) {
      this.translate.get('INSUFFICIENT_BALANCE_MSG').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.tontine_id_not_exist) {
      this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.parameter_not_found) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG3').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.device_not_exist_for_operator) {
      this.translate.get('TOPUP_MSG1').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.device_not_exist || error.error.currency_not_exist) {
      this.translate.get('CURRENCY_DOES_NOT_EXIST').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.device_not_exist_in_portemonnaie_user) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG4').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.solde_insuffisant || error.error.solde_payeur_insuffisant) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG5').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.no_match_device_to_device_tontine) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG6').subscribe(value => {
        this.ui.presentToast(`${value} ${error.error.monnaie_tontine}`);
      });
    }

    if (error.error.montant_depasse_cout_part) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG7').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.typecontribution_not_exist) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG8').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.montant_restant_a_contribuer_grand) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG9').subscribe(value => {
        this.ui.presentToast(`${value} ${error.error.valeur_montant_restant_a_contribuer} ${error.error.monnaie_tontine ? error.error.monnaie_tontine : ''}`);
      });
    }

    if (error.error.aucune_penalite_a_payer) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG10').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.penalite_restante_a_payer_grand) {
      this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG11').subscribe(value => {
        this.ui.presentToast(`${value} ${error.error.penalite_restante_a_payer} ${error.error.monnaie_tontine ? error.error.monnaie_tontine : ''}`);
      });
    }

    if (error.error.tontine_status_inactive) {
      this.translate.get('TONTINE_EVENT_ERROR1').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.tontine_period_inactive) {
      this.translate.get('TONTINE_EVENT_ERROR3').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.device_depart_id_not_exist) {
      this.translate.get('CURRENCY_DEPART_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.device_arrivee_id_not_match_device_id_tontine) {
      this.translate.get('CURRENCY_DESTINATION_NOTMATCH_STOKVEL_CURRENCY').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.typepaiement_id_not_exist) {
      this.translate.get('PAIDMODE_MSG3').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.country_not_exist || error.error.country_id_not_exist) {
      this.translate.get('COUNTRY_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.invalid_payment) {
      this.translate.get('INVALID_DEPOSIT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.device_arrivee_id_not_exist) {
      this.translate.get('CURRENCY_DESTINATION_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.type_caisse_tontine_id_not_exist) {
      this.translate.get('CAISSE_TONTINE_NOTFOUND').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.user_not_authorize) {
      this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.pin_incorrect) {
      this.translate.get('M_PIN_INVALID').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.solde_payeur_insuffisant) {
      this.translate.get('M_INSUFFICIENT_SOLDE_ERROR').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.loan_request_id_not_exist) {
      this.translate.get('LOAN_REQUEST_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.amount_is_greater_than_rest_to_pay) {
      this.translate.get('AMOUNT_GREATHER_THAN_REST_TO_PAY').subscribe(trans => {
        this.ui.presentToast(`${trans} ${error.error.reste_a_payer}`);
      });
    }

    if (error.error.swap_request_id_not_exist) {
      this.translate.get('SWAP_REQUEST_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(`${trans}`);
      });
    }

    if (error.error.swap_request_id_is_already_completed) {
      this.translate.get('SWAP_REQUEST_ALREADY_COMPLETE',{direction :`${error.error.direction}`}).subscribe(trans => {
        this.ui.presentToast(`${trans}`);
      });
    }

    if (error.error.currency_not_match_currency_swap_request) {
      this.translate.get('CURRENCY_NOT_MATCH_CURRENCY_REQUEST').subscribe(trans => {
        this.ui.presentToast(`${trans}`);
      });
    }

  }

}
