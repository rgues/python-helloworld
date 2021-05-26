import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class InivitationErrorService {

  constructor(
    private translate: TranslateService,
    private ui: UiService
  ) { }


  // check the invitation error action
  manageInvitationError(error: any) {


    if (error.error.tontine_event_admin_not_found) {
      this.translate.get('ADMIN_EVENT_NOT_FOUND').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.tontine_admin_not_found) {
      this.translate.get('INVITATIONS_UNAUTHORIZED').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.tontine_event_not_found) {
      this.translate.get('TONTINE_EVENT_DELETE_ERROR1').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.tontine_not_found) {
      this.translate.get('TONTINE_EVENT_DELETE_ERROR1').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.invitation_not_found) {
      this.translate.get('TONTINE_INVITE_TEXT12').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.invitation_state) {
      this.translate.get('INVITATION_STATE_CHANGE').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.code_not_found) {
      this.translate.get('USER_SECURITY_MSG6').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.code_already_used) {
      this.translate.get('USER_SECURITY_MSG9').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.code_expired) {
      this.translate.get('USER_SECURITY_MSG8').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.tontine_not_found) {
      this.translate.get('TONTINE_INVITE_TEXT10').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.invitation_code_invalid) {
      this.translate.get('TONTINE_INVITE_TEXT13').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.invitation_code_expired) {
      this.translate.get('TONTINE_INVITE_TEXT15').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.invitation_id_not_exist) {
      this.translate.get('TONTINE_INVITE_TEXT12').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.tontine_admin_not_found) {
      this.translate.get('TONTINE_INVITE_TEXT9').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.user_exist_tontine) {
      this.translate.get('USER_ALREADY_MEMBER_MSG8').subscribe(value => {
        this.ui.presentToast(value);
      });
    }

    if (error.error.phone_is_invalid) {
      this.translate.get('USER_DETAIL_TEXT11').subscribe(value => {
        this.ui.presentToast(value);
      });
    }
  }



  // check the invitation error
  manageInviteError(error: any) {

    this.manageInvitationError(error);
  
    if (error && error.error && error.error.resultat && error.error.resultat.length > 0) {
      let i = 0;
      while (i < error.error.resultat.length) {
        if (error.error.resultat[i].tontine_admin_not_found) {
          this.translate.get('TONTINE_INVITED_TEXT6').subscribe(value => {
            this.ui.presentToast(value);
          });
        }

        if (error.error.resultat[i].tontine_not_found) {
          this.translate.get('TONTINE_INVITED_TEXT7').subscribe(value => {
            this.ui.presentToast(value);
          });
        }

        if (error.error.resultat[i].user_exist_tontine) {
          this.translate.get('TONTINE_INVITED_TEXT8').subscribe(value => {
            this.ui.presentToast(value);
          });
        }

        if (error.error.resultat[i].user_unauthorized) {
          this.translate.get('TONTINE_INVITED_TEXT10').subscribe(value => {
            this.ui.presentToast(value);
          });
        }

        if (error.error.resultat[i].invitation_exist) {
          this.translate.get('TONTINE_INVITED_TEXT11').subscribe(value => {
            this.ui.presentToast(value);
          });
        }

        if (error.error.resultat[i].phone_is_invalid) {
          this.translate.get('USER_DETAIL_TEXT11').subscribe(value => {
            this.ui.presentToast(value);
          });
        }
        i++;
      }
    }

  }

}
