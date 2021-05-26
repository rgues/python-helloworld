import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class SwapErrorService {

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

    if (error.error.user_not_exist) {
      this.translate.get('USER_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.currency_from_not_exist) {
      this.translate.get('CURRENCY_FROM_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.currency_to_not_exist) {
      this.translate.get('CURRENCY_TO_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.type_swap_id_not_exist) {
      this.translate.get('TYPE_SWAP_TO_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.solde_wallet_is_not_sufficient) {
      this.translate.get('SOLDE_WALLET_IS_NOT_SUFFICIENT').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.swap_request_id_not_exist) {
      this.translate.get('SWAP_REQUEST_ID_NOT_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.swap_request_id_already_matched) {
      this.translate.get('SWAP_REQUEST_ALREADY_MATCHED').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.insufficient_balance) {
      this.translate.get('SWAP_INSUFFICIENT_BALANCE',{amount: error.error.amount_to_recharge, currency: error.error.currency}).subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error.error.swap_request_id_is_still_pending) {
      this.translate.get('CAN_ARCHIVE_SWAP_TEXT').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    

  }

}
