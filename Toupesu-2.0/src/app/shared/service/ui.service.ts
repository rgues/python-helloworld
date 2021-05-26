import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/dashboard/user/service/user.service';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  isLoadingShow = false;

  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private userService: UserService,
    private translate: TranslateService,
    private router: Router,
    private platform: Platform
  ) {

  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading(messageLoading: string) {
    this.isLoadingShow = true;
    return await this.loadingController.create({
      message: messageLoading,
    }).then(a => {
      a.present().then(() => {
        const timer = setInterval(() => {
          if (!this.isLoadingShow) {
            a.dismiss().then(() => { });
            clearTimeout(timer);
          }
        }, 2000);

      });
    });
  }

  async dismissLoading() {
    this.isLoadingShow = false;
    return await this.loadingController.dismiss().then(() => { });
  }

  async presentToast(messageParam: string) {
    const toast = await this.toastController.create({
      message: messageParam,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

  // confirmation message
  async confirmationMessage(translation: string[]) {

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
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }

  // listen to back button
  hardwareBackButton() {
    this.platform.backButton.subscribe(() => {
      const url = this.router.url;
      if (url === '/auth' || url === '/dashboard' || url === '/dashboard/user/profil') {
        const messages = [];
        this.translate.get(['M_EXIT_TITLE', 'M_EXIT_MESSAGE', 'CANCEL_TEXT', 'YES_TEXT'])
          .subscribe(trans => {
            messages.push(trans.M_EXIT_TITLE);
            messages.push(trans.M_EXIT_MESSAGE);
            messages.push(trans.CANCEL_TEXT);
            messages.push(trans.YES_TEXT);
            this.confirmationMessage(messages);
          });
      }
    });
  }

  /**
  * Check the user pin and handle/cancel an action.
  * @param callBackSuccess The callback function call when the pin is correct. 
  * @param callBackCancel The callback function call when the pin is incorrect. Optionnal
  * @param paramSuccess The data param of callBackSuccess. Optionnal
  * @param paramCancel The data param of callBackCancel. Optionnal
  *
  * @returns void.
  */
  confirmPin(callBackSuccess: (data?: any) => void, callBackCancel?: (data?: any) => void, paramSuccess?: any, paramCancel?: any) {
    const translations = [];
    this.translate.get(['M_ENTER_YOUR_PIN', 'M_PIN', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translations.push(trans.M_ENTER_YOUR_PIN);
      translations.push(trans.M_PIN);
      translations.push(trans.CANCEL_TEXT);
      translations.push(trans.YES_TEXT);
      this.getUserPin(translations, callBackSuccess, callBackCancel, paramSuccess, paramCancel);
    });
  }

  // get the user pin 
  async getUserPin(translations: string[], callBackSuccess: (data?: any) => void, callBackCancel?: (data?: any) => void, paramSuccess?: any, paramCancel?: any) {
    const userPin = this.userService.getUserSecret();
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      inputs: [
        {
          name: 'pin',
          type: 'tel',
          placeholder: `${translations[1]}`,
        }
      ],
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            callBackCancel(paramCancel);
          }
        }, {
          text: `${translations[3]}`,
          handler: (ans) => {

            // Check if the pin is correct
            if (parseInt(ans.pin, 10) === parseInt(userPin.password, 10)) {
              // call function
              callBackSuccess(paramSuccess);
            } else {
              this.translate.get('M_PIN_INVALID').subscribe(trans => {
                this.presentToast(trans);
              });
            }

          }
        }
      ]
    });
    await alert.present();
  }

}
