import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthErrorService {

  constructor(
    private translate: TranslateService,
    private ui: UiService
  ) { }

  manageAuthError(error: any){
 
    if (error.error.remplir_tous_les_champs) {
      this.translate.get('TOPUP_MSG2').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.phone_number_is_already_used) {
      this.translate.get('M_PHONE_ALREADY_USE').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.bad_digit_code) {
      this.translate.get('M_CODE_INVALID').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.password_not_match_email) {
      this.translate.get('TONTINE_NEW_TEXT24').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.country_id_not_exist) {
      this.translate.get('REGISTER_COUNTRY_MSG').subscribe(value => {
        this.ui.presentToast(value);
      });
    } 

    if (error.error.phone_number_is_already_used) {
      this.translate.get('REGISTER_MSG3').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.phone_is_invalid) {
      this.translate.get('REGISTER_PHONE_INVALID').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error && error.error.tontine_id_not_exist) {
      this.translate.get('TONTINE_INVITE_TEXT10').subscribe(data => {
        this.ui.presentToast(data);
      });
    }

  
    if (error.error.username_exist_already) {
      this.translate.get('USER_DETAIL_MSG3').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.phone_exist_already) {
      this.translate.get('M_PHONE_ALREDY_EXIST').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.email_exist_already) {
      this.translate.get('M_EMAIL_ALREADY_EXIST').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

  }
}
