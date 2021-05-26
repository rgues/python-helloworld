import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class WalletTontineErrorService {

  constructor(
    private translate: TranslateService,
    private ui: UiService
  ) { }

   // Manage wallet tontine error 
   manageWalletTontineError(error: any) {
    if(error && error.error && error.error.remplir_tous_les_champs) {
        this.translate.get('ERROR_FUFILLS_ALL_FIELDS').subscribe(trans => {
            this.ui.presentToast(trans);
        });
    }

    if (error.error.reference_transaction_not_exist) {
      this.translate.get('REFERENCE_NOT_EXIST_TEXT').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.user_not_authorize) {
      this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.tontine_bank_profile_id_not_exist) {
      this.translate.get('ERROR_BANK_PROFILE_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.method_payment_id_not_exist) {
      this.translate.get('ERROR_BANK_PAYMENT_METHOD_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.solde_wallet_insufisant) {
      this.translate.get('ERROR_BANK_WALLET_BALANCE').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.user_bank_profile_id_not_exist) {
      this.translate.get('ERROR_BANK_PROFILE_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.type_caisse_tontine_not_exist) {
      this.translate.get('ERROR_TYPE_CAISSE_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.user_not_tontine_admin) {
      this.translate.get('ERROR_NOT_ADMIN').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }
    
    if(error && error.error && error.error.bank_name_already_exist) {
      this.translate.get('ERROR_BANKNAME_ALREADY_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.tontine_id_not_exist) {
      this.translate.get('ERROR_TONTINE_NOT_EXIST').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if(error && error.error && error.error.withdraw_request_id_not_found) {
      this.translate.get('ERROR_WITHDRAWAL_REQUEST_NOT_FOUND').subscribe(trans => {
          this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.user_not_authorized) {
      this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

     if (error && error.error && error.error.seance_id_not_exist) {
      this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
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
