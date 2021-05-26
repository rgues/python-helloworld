import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { UiService } from './ui.service';
import { LocalStorageService } from './local-storage.service';
import { EventService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private ui: UiService,
    private userService: UserService,
    private auth: AuthService,
    private translate: TranslateService,
    private event: EventService,
    private localStorage: LocalStorageService
  ) { }

  // update the user lang
  updateLang(lang: string) {
    this.userService.updateUserLang({langue_user: lang}).subscribe((data: any) => {
      // set the user lang
      if (data && data.message === "success") {
        this.userService.setCurrentUserSessionLanguage(lang);
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.renewSession().then((data: any) => {
          if (data && data.result === "OK") {
            this.updateLang(lang);
          }
        });
      } else {
        this.manageError(error);
      }
    });
  }


  // Renew the user session
  renewSession(showMessage?: boolean) {
    return new Promise((resolve) => {
      if (this.localStorage.getItem('startRefreshToken') === 'false') {
        const credentials = this.userService.getUserSecret();
        if (credentials) {
          this.localStorage.setItem('startRefreshToken', 'true');
          this.auth.authentication(credentials).subscribe(
            (reponse: any) => {
              if (reponse && reponse.message === 'success') {
                this.event.publish('new-token', reponse.token);
                setTimeout(() => {
                  this.userService.setUserToken(reponse.token);
                  this.userService.setUserRole(reponse.role);
                  this.userService.setUserData(reponse.user);
                  this.userService.setUserBadge(reponse.badge_name);

                  // Get the current user lang
                  this.userService.setCurrentUserSessionLanguage(reponse.user.langue_user ? reponse.user.langue_user : '');

                  if (showMessage) {
                    this.translate.get('TRY_AGAIN_MSG').subscribe(value => {
                      this.ui.presentToast(value);
                    });
                  }
                  this.localStorage.setItem('startRefreshToken', 'false');
                  resolve({ result: 'OK' });
                }, 4000);

              }
            }, error => {

              if (error && error.error && error.error.user_not_found) {
                this.auth.logoutMember();
              } else {
                if (error.status === 0) {
                  this.translate.get('ERROR_MGS3').subscribe(value => {
                    this.ui.presentToast(value);
                  });
                }
              }
              resolve({ result: 'ERROR' });
            });
        } else {
          this.auth.logoutMember();
          resolve({ result: 'ERROR' });
        }
      } else {
        setTimeout(() => {
          resolve({ result: 'OK' });
        }, 6000);
      }

    });

  }

  // Manage system error
  manageError(error) {
    if (error.status === 0) {
      this.translate.get('ERROR_MGS3').subscribe(value => {
        this.ui.presentToast(value);
      });
    } else if (error.status === 400) {
      this.renewSession();
    } else if (error.status === 401) {
      this.auth.logoutMember();
    } else if (error.status === 500) {
      this.translate.get('ERROR_MGS6').subscribe(value => {
        this.ui.presentToast(value);
      });
    } else {
      this.translate.get('ERROR_MGS6').subscribe(value => {
        this.ui.presentToast(value);
      });
    }
  }


}
