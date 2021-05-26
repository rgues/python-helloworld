import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from './shared/service/location.service';
import { Router, NavigationEnd } from '@angular/router';
import { ContributionService } from './dashboard/my-tontines/services/contribution.service';
import { ErrorService } from './shared/service/error.service';
import { UserService } from './dashboard/user/service/user.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AuthService } from './auth/service/auth.service';
import { LocalStorageService } from './shared/service/local-storage.service';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

interface CurrentLanguage {
  lang: string;
  name: string;
  active: boolean;
  countryId: number;
  langueData: any;
  translationData: any;
  index: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  defaultLang: string;
  countries: any;
  navLinksArray = []; // store route links as the user navigates the app
  currentLang: CurrentLanguage[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private userService: UserService,
    private googleAnalytic: GoogleAnalytics,
    private auth: AuthService,
    private contribution: ContributionService,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private location: LocationService,
    private router: Router,
    private oneSignal: OneSignal,
    private error: ErrorService,
    private localStorage: LocalStorageService
  ) {

    // set the token state
    this.localStorage.setItem('startRefreshToken', 'false');
    this.contribution.getTypeContributionTontine(true);

    // Update the current language posistion
    this.getLanguages(false);

    // set the user language
    this.setDefaultUserLang();
   
    // Subcribe routes
    this.router.events.subscribe(event => {
      const url = this.router.url
      if (url === '/dashboard') {
        this.navLinksArray = [];
      } else {
        if (event instanceof NavigationEnd) {
          const isCurrentUrlSaved = this.navLinksArray.find((item) => { return item === url });
          if (!isCurrentUrlSaved) this.navLinksArray.push(url);
        }
      }
    });
    // Listen the hardware back button
    this.hardwareBackButton();

    // Get loctation data
    this.getCountries(true);
    this.getWordCountries(true);

    // Set app sesion timer
    const currentDate = new Date();
    this.auth.removeAppLastSession();
    this.auth.setAppLastSession(currentDate.getTime());
    this.initializeApp();
    this.platform.ready().then(() => {
    
      // Register to push notification on OneSignal
      this.oneSignal.startInit('0089a799-c464-46bd-b92d-a40cd6a7d5b8', '627103336519');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });
      this.oneSignal.endInit(); 


       // add the google analytics
       this.googleAnalytic.startTrackerWithId('app-analytics-30260')
      .then(() => {
       this.googleAnalytic.trackView('Toupesu app');
       alert('Google Analytic ok');
       // Tracker is ready
       // You can now track pages or set additional information such as AppVersion or UserId
      })
      .catch(e =>{});
     
      });

  }

  // set the default user language
  setDefaultUserLang() {
    this.translate.setDefaultLang('en');
    let currentLang = this.location.getCurrentUserLanguage();
    currentLang = currentLang && currentLang.code_langue ? currentLang.code_langue.toLocaleLowerCase() : '';
    let sessionLang = '';
    sessionLang =  this.userService.getCurrentUserSessionLanguage();
    let browserLang = this.translate.getBrowserLang();
    browserLang = browserLang.toLocaleLowerCase();
    this.defaultLang = sessionLang ?  sessionLang : currentLang ? currentLang : browserLang;   
    this.translate.use(this.defaultLang && this.defaultLang.match('en|fr|en_sa') ? this.defaultLang : 'en');

    // set the default language of the user
    if (!sessionLang && this.userService.getUserToken()) {
      this.error.updateLang(this.defaultLang);
    } 
  }

  // Get the list of language of the current location
  getLanguages(refresher: boolean) {
    this.location.getLanguages(refresher).then((languagesData: any) => {
      const currentLang = this.location.getCurrentUserLanguage();
      const hasCurrentLang = currentLang && currentLang.code_langue ? true : false;
      this.currentLang = [];
      if (languagesData) {
        languagesData.forEach(data => {
          if (data && data.langue) {
            this.currentLang.push({
              lang: data.langue.code_langue,
              name: data.langue.name,
              active: hasCurrentLang && data.langue.code_langue === currentLang.code_langue ?
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
            this.location.setCurrentUserLanguage(data.langueData);
          }
        });
      } else {
        this.currentLang = [];
      }
    });
  }

  // Listen hardware back button
  hardwareBackButton() {
    this.platform.backButton.subscribe(() => {
      if (this.navLinksArray.length > 1) {
        this.navLinksArray.pop();
        const index = this.navLinksArray.length + 1;
        const url = this.navLinksArray[index];
        this.router.navigate([url])
      }
    });
  }

  // Initialize the app
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // Kill all background services when the app exit
      setTimeout(() => {
        this.updateDeviceToken();
      }, 3000);
    });
  }

  // Get the list of countries
  getCountries(refresher: boolean) {
    this.location.getAllCountries(refresher).then((countries: any) => {});
  }

  // Get all the word countries
  getWordCountries(refresh) {
    this.location.getWordCountries(refresh).then((countries: any) => {});
  }

  // update the device token if a user a connection
  updateDeviceToken() {
     if (this.userService.getUserToken()) {
      this.oneSignal.getIds().then(ids => {
        if (ids && ids.userId) {
          this.userService.saveDevice({ device_phone: ids.userId });
        }
      });
    } 
  }


}
