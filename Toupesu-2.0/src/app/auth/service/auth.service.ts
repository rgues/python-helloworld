import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { LocationService } from 'src/app/shared/service/location.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name

  constructor(
    private platform: Platform,
    private api: ApiService,
    private location: LocationService,
    private nav: NavController,
    private translate: TranslateService,
    private alertController: AlertController,
    private localStorage: LocalStorageService,
    private storage: StorageData,
    private router: Router
  ) {
  }


  // Set the last open 
  setAppLastSession(dateOpen: number) {
    this.localStorage.setItem('last-session', String(dateOpen));
  }

  // Get the apps version
  getAppLastSession() {
    return this.localStorage.getItem('last-session');
  }

  // delete the apps
  removeAppLastSession() {
    this.localStorage.removeItem('last-session');
  }


  // Remove lang data
  public removeConfigData() {
    this.localStorage.removeItem('all-countries');
    this.localStorage.removeItem('all-country-languages');
    this.localStorage.removeItem('countries');
    this.localStorage.removeItem('country_code');
    this.localStorage.removeItem('user-country');
    this.localStorage.removeItem('user-language');
    this.localStorage.removeItem('word-countries');
    this.localStorage.removeItem('language-translation');
    this.localStorage.removeItem('current-country-languages');
    this.localStorage.removeItem('default-country-languages');
    this.localStorage.removeItem('user-device');
    this.localStorage.removeItem('user-registration-data');
    this.localStorage.removeItem('user-session-language');
    this.localStorage.removeItem('first-email');
    this.removeAppLastSession();
  }


  // Remove all user data
  public removeUserSession() {
    this.localStorage.removeItem('fisrt-login');
    this.localStorage.removeItem('user-token');
    this.localStorage.removeItem('user-data');
    this.localStorage.removeItem('user-role');
    this.localStorage.removeItem('user-badge');
    this.localStorage.removeItem('user-credentials');
    this.localStorage.removeItem('user-payment-method');
    this.localStorage.removeItem('startRefreshToken');
    this.localStorage.removeItem('type-contribution');

    this.localStorage.removeItem('debts-data');
    this.localStorage.removeItem('new-event');
    this.localStorage.removeItem('tontine-data');
    this.localStorage.removeItem('contrib-data');
    this.localStorage.removeItem('tontine-data-event');
    this.localStorage.removeItem('day-token');

    this.storage.remove('seance-data');
    this.storage.remove('swap-data');
    this.storage.remove('loan-data');
    this.storage.remove('app-notif');
    this.storage.remove('app-events');
    this.storage.remove('app-tontines');
    this.storage.remove('app-events-user');
    this.storage.remove('current-balance');
    this.storage.remove('app-wallet-trans');
    this.storage.remove('app-tontine-trans');
    this.storage.remove('app-wallet-tontines-trans');
    this.localStorage.setItem('startRefreshToken', 'false');
  }


  // Log out the user
  public logoutMember() {
    this.removeUserSession();
    this.removeConfigData();
    this.nav.setDirection('root');
    this.router.navigate(['auth']);
  }



  // Create the user account
  createAccount(user: any) {
    return this.api.post('user/account/v1/createaccount', user);
  }

  // Login to the user account
  authentication(credentials: any) {
    return this.api.post('user/account/v1/auth', credentials);
  }

  // send a code to user for registration
  sendUserCode(data: any) {
    return this.api.post('user/send/v1/digitcode', data);
  }

  // Check if the user Email exist
  checkUserEmail(data: any) {
    return this.api.post('user/check/email', data);
  }

  // Verify the user password
  verifyUserPassword(data: any) {
    return this.api.post('user/check/email/match/password', data);
  }

  // Create user account or synchonize with web
  createAccountOrSynchronise(data: any) {
    return this.api.post('user/valid/v1/digitcode/and/createAccount/mobile', data);
  }

  // Listen to back button
  showUpdateMessage() {
    const messages = [];
    this.translate.get(['M_UPDATE_TITLE', 'M_UPDATE_MESSAGE', 'IGNORE_TEXT', 'YES_TEXT'])
      .subscribe(trans => {
        messages.push(trans.M_UPDATE_TITLE);
        messages.push(trans.M_UPDATE_MESSAGE);
        messages.push(trans.IGNORE_TEXT);
        messages.push(trans.YES_TEXT);
        this.updateMessage(messages);
      });
  }

  // Update message
  async updateMessage(translation: string[]) {

    const alert = await this.alertController.create({
      header: `${translation[0]}`,
      message: `${translation[1]}`,
      buttons: [
        {
          text: `${translation[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: `${translation[3]}`,
          handler: () => {
            let link = '';
            if (this.platform.is('android')) {
              link = 'https://bit.ly/2Zr78Me';
            } else {
              link = 'https://apple.co/2yrfLeM';
            }
            window.open(link, '_system', 'location=yes');
          }
        }
      ]
    });

    await alert.present();
  }

  // Get the app version 
  getVersion() {
    const platform = this.platform.is('android') ? 'android' : this.platform.is('ios') ? 'ios' : '';

    return new Promise((resolve) => {
      this.location.checkVersion(platform).then((ans: any) => {

        if (ans && ans.version === 'DOWN') {
          let version = String(ans.data.version);

          while (version.includes('.')) {
            version = version.replace('.', '').trim();
          }

          if (ans && ans.data && ans.data.maintenance === 1) {
            this.checkStatus(1);
            resolve('OK');
          } else {
            this.checkStatus(0);

            if (ans && ans.data && parseInt(version) > 134) {
              this.showUpdateMessage();
            }
            resolve('NONE');
          }
        } else {
          this.localStorage.setItem('maintenance', 'NONE');
          resolve('NONE');
        }
      });
    });
  }

  // Check status
  checkStatus(maintenance) {
    if (maintenance === 1) {
      const message = [];
      this.translate.get(['MAINTENANCE_TITLE_TEXT', 'MAINTENANCE_MSG_TEXT', 'OK_TEXT']).subscribe(trans => {
        message.push(trans.MAINTENANCE_TITLE_TEXT);
        message.push(trans.MAINTENANCE_MSG_TEXT);
        message.push(trans.OK_TEXT);
        this.maintenanceMessage(message);
      });
      this.localStorage.setItem('maintenance', 'OK');
      this.logoutMember();
    } else {
      this.localStorage.setItem('maintenance', 'NONE');
    }
  }

  // Maintenance message
  async maintenanceMessage(translation: string[]) {

    const alert = await this.alertController.create({
      header: `${translation[0]}`,
      message: `${translation[1]}`,
      buttons: [
        {
          text: `${translation[2]}`,
          handler: () => {
            if (navigator['app']) {
              navigator['app'].exitApp();
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
