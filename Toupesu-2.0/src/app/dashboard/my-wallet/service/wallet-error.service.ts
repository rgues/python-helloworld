import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class WalletErrorService {

  constructor(
    private translate: TranslateService,
    private ui: UiService
  ) { }

  manageWalletError(error: any) {

   if (error.error.remplir_tous_les_champs) {
     this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG3').subscribe(trans => {
       this.ui.presentToast(trans);
     });
   }

   if (error.error.bank_name_already_exist) {
     this.translate.get('BAMK_NAME_ALREADY_EXIST').subscribe(trans => {
       this.ui.presentToast(trans);
     });
   }

   if (error.error.type_payment_not_exist) {
    this.translate.get('TOPUP_PAYMENT_NOT_EXIST').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.country_not_exist) {
    this.translate.get('TOPUP_COUNTRY_NOT_EXIST').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.device_arrivee_not_exist) {
    this.translate.get('TOPUP_DEVICE_IN_NOT_EXIST').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.device_depart_not_exist) {
    this.translate.get('TOPUP_DEVICE_OUT_NOT_EXIST').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.parameter_not_found) {
    this.translate.get('TOPUP_MSG5').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.invalid_payment) {
    this.translate.get('TOPUP_MSG6').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.no_match_type_payment_to_device) {
    this.translate.get('TOPUP_MSG3').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.confirm_payment) {
    this.translate.get('TOPUP_MSG6').subscribe(value => {
      this.ui.presentToast(value);
    });
  }

  if (error.error.user_bank_profile_id_not_exist) {
    this.translate.get('BANK_NAME_NOT_EXIST').subscribe(trans => {
      this.ui.presentToast(trans);
    });
  }

  if (error.error.method_payment_id_not_exist) {
    this.translate.get('PAYMENT_METHOD_NOT_EXIST').subscribe(trans => {
      this.ui.presentToast(trans);
    });
  }

  if (error.error.solde_wallet_insufisant) {
    this.translate.get('INSUFFICIENT_WALLET_BALANCE').subscribe(trans => {
      this.ui.presentToast(trans);
    });
  }

  if (error.error.solde_payeur_insuffisant) {
    this.translate.get('INSUFFICIENT_BUYER_BALANCE').subscribe(trans => {
      this.ui.presentToast(trans);
    });
  }

  }

}
