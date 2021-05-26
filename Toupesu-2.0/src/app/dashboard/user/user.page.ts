import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UserService } from './service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { PluginService } from 'src/app/shared/service/plugin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userData: any;
  currentLang: any;
  defaultIndex: number;
  sessionLang: string;
  langHeader: string;
  userPicture: string;
  shareData: any[];

  constructor(
    private userService: UserService,
    private location: LocationService,
    private platform: Platform,
    private error: ErrorService,
    private ui: UiService,
    private event: EventService,
    private router: Router,
    private translate: TranslateService,
    private alertController: AlertController,
    private plugin: PluginService
  ) { 
      this.userData = this.userService.getUserData();
      this.userPicture = this.userData && this.userData.picture ? `${this.userData.picture}` : null;
      this.event.subscribe('user-data', user => {
        this.userPicture = user && user.picture ? user.picture : null;
      });
      this.currentLang = [];
      this.defaultIndex = -1;
      this.translate.get('USER_LANGUAGE').subscribe(trans => {
          this.langHeader = trans;
      });
      this.shareData = [];
  }

  ngOnInit() {
    this.getLanguages(true);
  }

  // Get the list of language of the current location
  getLanguages(refresher: boolean) {
    this.location.getLanguages(refresher).then((languagesData: any) => {
      this.currentLang = [];
      const sessionLang = this.userService.getCurrentUserSessionLanguage();
      this.sessionLang = sessionLang.toLocaleUpperCase();
      let  currentLang = this.location.getCurrentUserLanguage();
    
      currentLang = this.sessionLang ? this.sessionLang : currentLang ? currentLang.code_langue : null;
      const hasCurrentLang = currentLang  ? true : false;
      if (languagesData) {
        languagesData.forEach(data => {
          if (data && data.langue ) {
            this.currentLang.push({
              lang: data.langue.code_langue,
              name: data.langue.name,
              active: hasCurrentLang && data.langue.code_langue === currentLang ?
              true : !hasCurrentLang && data.langue.default_langue === 'yes' ? true : false,
              countryId: data.langue.country_id,
              langueData: data.langue,
              translationData: data.keywords,
              index: languagesData.indexOf(data)
            });
          }
        });
        this.currentLang.forEach(data => {
          if (data && data.active) {
            this.defaultIndex = this.currentLang.indexOf(data);
            this.location.setCurrentUserLanguage(data.langueData);
          }
        });
      } else {
        this.currentLang = [];
      }
    });
  }

  // Change the language
  changeLang(index: number) {
    this.defaultIndex = index;
    this.currentLang.forEach(lang => {
      if (lang.index === index) {
        this.currentLang[index].active = true;
        this.location.setUserCountry(this.currentLang[index].countryId);
        this.location.setCurrentUserLanguage(this.currentLang[index].langueData);
        this.location.setCurrentLanguageTranslation(this.currentLang[index].translationData);
        this.location.sendTranslation(this.currentLang[index].translationData);
        const langue = String(this.currentLang[index].lang);
        this.translate.use(langue.toLocaleLowerCase());
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
      } else {
        this.currentLang[this.currentLang.indexOf(lang)].active = false;
      }
    });
  }


  // Open the modal language
  async openModalLang() {
    const langData = [];
    let index = 0;

    this.currentLang.forEach(lang => {
      langData.push(   {
        name: 'Radio ' + (index + 1),
        type: 'radio',
        label: lang.name,
        value: index,
        checked: lang.active ? true :  false
      });
      index++;
    });
    const alert = await this.alertController.create({
      header: this.langHeader,
      inputs: langData,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, 
        {
          text: 'Ok',
          handler: (data) => {
            this.changeLang(data);
            // update the user language
            this.error.updateLang(this.currentLang[data].lang.toLocaleLowerCase());
          }
        }
      ]
    });

    await alert.present();
  }

  // Share the app with friends
  shareApp() {
    let link = '';
    if (this.platform.is('android')) {
      link = 'https://bit.ly/2Zr78Me';
    } else {
      link = 'https://apple.co/2yrfLeM';
    }
    this.translate.get(['SHARE_MESSAGE','SHARE_TITLE']).subscribe(trans => {
        this.shareData.push(trans.SHARE_MESSAGE);
        this.shareData.push(trans.SHARE_TITLE);
    });
    this.plugin.share(this.shareData[0], this.shareData[1],link);
  }

    // Get the user picture
    getPicture() {

      this.plugin.getPicture().subscribe((picture : any) => {
         // this.api.presentAlert('Image', JSON.stringify(picture));
          if (picture) {
            this.ui.presentLoading('');
            this.userService.updatePicture({picture: picture}).subscribe((reponse: any) => {
                this.ui.dismissLoading();
                if (reponse && reponse.message === "success") {
                  this.userPicture = picture;
                  this.userService.getProfileUser().subscribe((user: any) => {
                     this.event.publish('user-data', user.user);
                     this.userService.setUserData(user.user);
                  }, error => {
                     if (error.error.user_not_found) {
                      this.error.renewSession().then((data: any) => {
                        if (data && data.result === "OK") {
                            this.getPicture();
                        }
                       });
                     } else {
                       this.error.manageError(error);
                     }
                   });
                }
            }, error => {
               
                if (error && error.error && error.error.user_not_found) {
                  this.error.renewSession().then((data: any) => {
                      if (data && data.result === "OK") {
                        this.ui.dismissLoading();
                          this.getPicture();
                      } else {
                        this.ui.dismissLoading();
                      }
                  });              
                } else {
                  this.ui.dismissLoading();
                  this.error.manageError(error);
                }
            });
          } 
     });

    }
    

}
