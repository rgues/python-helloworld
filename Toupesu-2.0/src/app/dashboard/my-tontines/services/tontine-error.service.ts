import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class TontineErrorService {

  constructor(
    private ui: UiService,
    private translate: TranslateService
  ) { }

  manageTontineError(error: any) {

    if (error && error.error && error.error.numberlot_is_greather_than_number_rest_beneficiairy) {
      this.translate.get('NB_BATCHES_ERROR_MSG').subscribe(value => {
          this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.user_not_exist) {
      this.translate.get('USER_DETAIL_MSG2').subscribe(value => {
          this.ui.presentToast(value);
      });
    }

    

    if (error && error.error && error.error.tontine_already_exist) {
      this.translate.get('TONTINE_ALREADY_EXIST').subscribe(value => {
        this.ui.presentToast(value);
      });                   
    }

    if (error && error.error && error.error.remplir_tous_les_champs_required) {
      this.translate.get('TONTINE_PENALTY_MSG3').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.tontine_not_found) {
      this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.dureesurleretard_greater_than_date_fin) {
      this.translate.get(['TONTINE_BID_ERROR1']).subscribe(value => {
        this.ui.presentToast(`${value['TONTINE_BID_ERROR1']}`);
      });
    }

    if (error && error.error && error.error.timedebutbid_less_than_timedebutseance) {
      this.translate.get(['TONTINE_BID_ERROR2']).subscribe(value => {
        this.ui.presentToast(`${value['TONTINE_BID_ERROR2']}`);
      });
    }

    if (error && error.error && error.error.timefinbid_greater_than_timefinseance) {
      this.translate.get(['TONTINE_BID_ERROR3']).subscribe(value => {
        this.ui.presentToast(`${value['TONTINE_BID_ERROR3']}`);
      });
    }

    if (error && error.error && error.error.dureeseance_greather_than_periodicite) {
      this.translate.get(['TONTINE_BID_ERROR4']).subscribe(value => {
        this.ui.presentToast(`${value['TONTINE_BID_ERROR4']}`);
      });
    }

    if (error && error.error && error.error.timedebutbid_greather_than_timefinseance) {
      this.translate.get(['TONTINE_BID_ERROR5']).subscribe(value => {
        this.ui.presentToast(`${value['TONTINE_BID_ERROR5']}`); 
      });
    }

    if (error && error.error && error.error.timedebutbid_greater_than_timefinbid) {
      this.translate.get(['TONTINE_BID_ERROR6']).subscribe(value => {
        this.ui.presentToast(`${value['TONTINE_BID_ERROR6']}`);
      });
    }

    if (error && error.error && error.error.tontine_id_not_exist) {
      this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.remplir_tous_les_champs) {
      this.translate.get('DEBT_PARAMETER_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.user_not_authorize) {
      this.translate.get('TONTINE_USERS_MSG6').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.facture_id_not_exist) {
      this.translate.get('DEBT_FACTURE_ID_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.reference_proof_not_correspond_to_traditional_banking) {
      this.translate.get('DEBT_PAYMENT_NOT_TRADI_BANKING').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.receipt_is_already_approved) {
      this.translate.get('DEBT_BILL_HAS_BEEN_ALREADY_APPROVED').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }
    
    if (error && error.error && error.error.device_id_not_exist) {
      this.translate.get('CURRENCY_REQUIRED').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.seance_id_not_exist) {
      this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.device_id_not_match_device_id_tontine) {
      this.translate.get('DEBT_CURRENCY_NOTFOUND').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.typecontribution_id_not_exist) {
      this.translate.get('TONTINE_PENALTY_MSG9').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.facture_is_already_approved_by_this_admin) {
      this.translate.get('DEBT_ALREADY_AUTHORIZE').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.user_id_not_exist) {
      this.translate.get('USER_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.date_seance_is_greater_than_today_date) {
      this.translate.get('POOL_DATE_GREAT_TODAY').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.date_seance_already_exist) {
      this.translate.get('POOL_DATE_ALREADY_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.number_lot_not_match_length_list_member) {
      this.translate.get('NB_BATCH_NOT_MATCH_BENEFICIARY').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.this_member_has_already_bouffe) {
      this.translate.get('ALREADY_JACKPOT').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.date_seance_is_equal_to_date_debut_tontine) {
      this.translate.get('POOL_DATE_EQUAL_STOKVEL_DATE').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.la_tontine_a_plus_d_une_seance) {
      this.translate.get('ADD_SHARE_MSG8').subscribe(value => {
          this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.parameter_not_found) {
      this.translate.get('ADD_SHARE_MSG3').subscribe(value => {
          this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.nbre_part_greater_than_part_max_member) {
      this.translate.get('ADD_SHARE_MSG5').subscribe(value => {
          this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.user_is_not_authorized) {
      this.translate.get('ADD_SHARE_MSG6').subscribe(value => {
          this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.user_id_not_exist) {
      this.translate.get('ADD_SHARE_MSG7').subscribe(value => {
          this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.remplir_tous_les) {
      this.translate.get('TONTINE_USERS_MSG3').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.tontine_not_exist) {
      this.translate.get('TONTINE_USERS_MSG4').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.member_not_exist) {
      this.translate.get('TONTINE_USERS_MSG5').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.user_not_authorised) {
      this.translate.get('TONTINE_USERS_MSG6').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error && error.error && error.error.number_admin_that_validates_contributions_is_greather_than_number_admin_max) {
      this.translate.get('NB_ADMIN_VALIDATORS_ERROR_MAX').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.number_admin_that_validates_contributions_is_greather_that_current_number_admin_tontine) {
      this.translate.get('NB_ADMIN_VALIDATORS_ERROR_NB_TONTINE').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }


    if (error && error.error && error.error.bouffe_id_not_exist) {
      this.translate.get('BENEFICIARY_NOT_EXIST_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.user_not_authorized) {
      this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }


    if (error && error.error && error.error.total_amount_is_greather_than_bouffe_amount) {
      this.translate.get('AMOUNT_GREATHER_THAN_JACKPOT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.this_admin_has_already_validate) {
      this.translate.get('ADMIN_ALREADY_VALIDATE').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.montant_online_is_greather_than_online_balance) {
      this.translate.get('ONLINE_AMOUNT_GREATHER_THAN_ONLINE_BALANCE').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.montant_offline_is_greather_than_bank_balance) {
      this.translate.get('OFFLINE_AMOUNT_GREATHER_THAN_OFFLINE_BALANCE').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.this_bouffe_is_already_initiated) {
      this.translate.get('JACKPOT_INITIATE_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error.error.tontine_not_found) {
      this.translate.get('TONTINE_INVITE_TEXT10').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.periodicite_less_than_duree_seance) {
      this.translate.get('PERIODICITY_MESSAGE_TEXT').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.caution_id_not_exist) {
      this.translate.get('CAUTION_NOT_EXIST_TEXT').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.cycle_id_not_exist) {
      this.translate.get('CYCLE_NOT_EXIST_TEXT').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.tontine_with_caution_option) {
      this.translate.get('TONTINE_WITH_CAUTION_OPTION').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.user_has_already_full_paid_caution) {
      this.translate.get('USER_PAID_FULL_CAUTION').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.device_not_exist) {
      this.translate.get('CURRENCY_NOT_EXIST_TEXT',{currency: error.error.monnaie_tontine}).subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.seance_not_found) {
      this.translate.get('SEANCE_NOT_FOUND_TEXT').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.device_not_exist_in_portemonnaie_user) {
      this.translate.get('DEVICE_NOT_EXIT_WALLET_TEXT').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.solde_insuffisant) {
      this.translate.get('BALANCE_INSUFFICIENT_TEXT').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.no_match_device_to_device_tontine) {
      this.translate.get('BALANCE_INSUFFICIENT_TEXT').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

  }
}
