import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { States } from 'src/app/shared/models/countries';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { Router } from '@angular/router';
import { CountriesComponent } from 'src/app/shared/countries/countries.component';
import { ModalController, NavController } from '@ionic/angular';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { UserService } from '../service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PluginService } from 'src/app/shared/service/plugin.service';
import { UserErrorService } from '../service/user-error.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.page.html',
  styleUrls: ['./user-profil.page.scss'],
})
export class UserProfilPage implements OnInit {

  states: States[];
  validationMessages: any;
  userDetailForm: FormGroup;
  user: any;
  loginTypeList: string[] = ['email', 'phone'];
  languageTranslation: any;
  errorPhone: boolean;
  errorEmail: boolean;
  errorUser: boolean;
  errorUsername: boolean;
  loading: boolean;
  typeMimeError: boolean;
  userPicture: string;
  canShowBackButton: boolean;
  counrtryApi: boolean;
  dateBirthday: any;
  currentDate: string;

  constructor(
    private fb: FormBuilder,
    private location: TranslateService,
    private navController: NavController,
    private event: EventService,
    private modatCtrl: ModalController,
    private formUtil: FormUtilsService,
    private router: Router,
    private locate: LocationService,
    private userService: UserService,
    private authService: AuthService,
    private dateService: DateserviceService,
    private errorService: ErrorService,
    private userError: UserErrorService,
    private plugin: PluginService,
    private localStorage: LocalStorageService,
    private ui: UiService
  ) {
    this.ui.hardwareBackButton();
    this.states = [];
    this.errorPhone = false;
    this.errorEmail = false;
    this.errorUser = false;
    this.typeMimeError = false;
    this.userPicture = null;
    this.canShowBackButton = true;
    this.counrtryApi = false;
    this.currentDate = this.dateService.formatDateTiret(new Date());
  }

  ngOnInit() {
    this.getWordCountries(false);
    this.initUserForm();
    this.validationMessage();
    this.showBackbutton();
  }

  // Form getters
  get userName() {
    return this.userDetailForm.get('username');
  }

  get firstName() {
    return this.userDetailForm.get('firstName');
  }

  get lastName() {
    return this.userDetailForm.get('lastName');
  }

  get loginType() {
    return this.userDetailForm.get('loginType');
  }

  get phoneError() {
    return this.userDetailForm.get('phone');
  }

  get country() {
    return this.userDetailForm.get('paysValue');
  }

  get city() {
    return this.userDetailForm.get('ville');
  }

  get occupation() {
    return this.userDetailForm.get('profession');
  }

  get emailError() {
    return this.userDetailForm.get('email');
  }

  get gender() {
    return this.userDetailForm.get('sexe');
  }

  get address() {
    return this.userDetailForm.get('address');
  }

  get birthdayError() {
    return this.userDetailForm.get('birthdayvalue');
  }

  // Validation message
  validationMessage() {
    this.location.get(['TONTINE_NEW_TEXT12', 'TONTINE_NEW_TEXT13', 'TONTINE_NEW_TEXT14',
      'TONTINE_NEW_TEXT18', 'TONTINE_EDIT_TEXT6', 'USER_DETAIL_TEXT6', 'USER_DETAIL_TEXT12',
      'USER_DETAIL_TEXT13', 'USER_DETAIL_TEXT8', 'USER_DETAIL_TEXT4', 'USER_DETAIL_TEXT7']).subscribe(trans => {
        this.validationMessages = {
          firstname: [
            { type: 'required', message: trans.TONTINE_NEW_TEXT12 }
          ],
          lastName: [
            { type: 'required', message: trans.TONTINE_NEW_TEXT13 }
          ],
          userName: [
            { type: 'required', message: trans.USER_DETAIL_TEXT4 }
          ],
          address: [
            { type: 'required', message: trans.USER_DETAIL_TEXT7 }
          ],
          birthday: [
            { type: 'required', message: trans.TONTINE_NEW_TEXT14 }
          ],
          phone: [
            { type: 'required', message: trans.TONTINE_NEW_TEXT18 }
          ],
          country: [
            { type: 'required', message: trans.TONTINE_EDIT_TEXT6 }
          ],
          city: [
            { type: 'required', message: trans.USER_DETAIL_TEXT6 }
          ],
          occupation: [
            { type: 'required', message: trans.USER_DETAIL_TEXT8 }
          ],
          email: [
            { type: 'required', message: trans.USER_DETAIL_TEXT12 },
            { type: 'invalid', message: trans.USER_DETAIL_TEXT13 }
          ]
        };
      });

  }

  // cna show the back button
  showBackbutton() {
    const data = this.userService.getUserData();
    if (data && (!data.firstname || !data.lastname)) {
      this.canShowBackButton = false;
    }
  }

  // set The use default user country
  setUserCountry(countries: any[]) {
    const credentials = this.userService.getUserSecret();
    if (credentials && credentials.phone_prefix) {
      countries.forEach(state => {
        if (state && state.country_prefixe === credentials.phone_prefix) {
          this.userDetailForm.get('paysValue').setValue(state.country_name);
          this.userDetailForm.get('countryName').setValue(state.country_label);
          this.counrtryApi = true;
        }
      });
    }
  }

  // Get all the word countries
  getWordCountries(refresh) {
    this.locate.getWordCountries(refresh).then((countries: any) => {
      if (countries && countries.length > 0) {
        this.states = countries;
        // Set the user country with the phone prefix
        this.setUserCountry(countries);
      }
    });
  }

  // check the phone
  checkPhone(phone: string) {
    this.errorPhone = this.formUtil.validatePhone(phone);
    if (!this.errorPhone) {
      this.phoneError.setErrors({ invalid: true });
    }
  }

  // check the email
  checkEmail(email: string) {
    this.errorEmail = this.formUtil.validateEmail(email);
    if (!this.errorEmail) {
      this.emailError.setErrors({ invalid: true });
    }
  }

  // cancel the profile update
  cancel() {
    this.initUserForm();
  }

  // Log out de app
  logout() {
    this.authService.removeUserSession();
    this.authService.removeAppLastSession();
    this.navController.setDirection('root');
    this.router.navigate(['/auth']);
  }

  // Get the user picture
  getPicture() {
    this.plugin.getPicture().subscribe((picture: any) => {
      if (picture) {
        setTimeout(() => {
          this.userDetailForm.get('avatar').setValue(picture);
          this.userDetailForm.get('picture').setValue(picture);
          this.userPicture = picture;
        }, 300);
      } else {
        this.userPicture = this.user && this.user.picture ? `${this.user.picture}` : null;
      }
    });
  }

  // init the user form with his data
  initUserForm() {
    this.user = this.userService.getUserData();

    let userEmail = '';
    if (this.localStorage.getItem('first-email')) {
      const registerData = this.localStorage.getItem('first-email');
      userEmail = registerData ? registerData : '';
    }
    if (this.user.birthday) {
      const date = this.user.birthday.split('/');
      const month = (parseInt(date[1]) - 1);
      this.dateBirthday = new Date(date[2], month, date[0]);
    }

    let prefix: string = this.user && this.user.phone_with_prefix ? this.user.phone_with_prefix : '';
    prefix = prefix ? prefix.replace(this.user.phone, "") : '';

    this.userPicture = this.user && this.user.picture ? `${this.user.picture}` : null;
    this.userDetailForm = this.fb.group({
      username: [this.user.username || ''],
      sexe: [this.user.sexe || 'male', Validators.required],
      countryName: [this.user.pays || ''],
      firstName: [this.user.firstname || '', Validators.required],
      lastName: [this.user.lastname || '', Validators.required],
      loginType: [this.user.email ? 1 : 0],
      birthdayvalue: [this.user.birthday ? this.dateService.formatDateTiret(this.dateBirthday) : ''],
      birthday: [''],
      profession: [this.user.profession || ''],
      address: [this.user.address || ''],
      pays: [this.user.pays || ''],
      paysValue: [{ value: this.user.pays || '', disabled: this.user.pays ? true : false }],
      ville: [this.user.ville || ''],
      phone: [{ value: this.user.phone || '', disabled: this.user.phone ? true : false }],
      email: [{ value: this.user.email || userEmail, disabled: this.user.email ? true : false }],
      avatar: [this.user && this.user.picture ? `${this.user.picture}` : ''],
      picture: [this.user && this.user.picture ? `${this.user.picture}` : ''],
      phoneValue: [''],
      phoneId: [''],
      phone_prefix: [prefix ? prefix.trim() : ''],
      country_id: [''],
      emailValue: [this.user.email || '']
    });
  }

  // open the countries modal
  showCountries() {
    this.modatCtrl
      .create({
        component: CountriesComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.role === 'select') {
            this.states.forEach(state => {
              if (state.code_country === ans.data) {
                this.userDetailForm.get('paysValue').setValue(state.country_name);
                this.userDetailForm.get('countryName').setValue(state.country_label);
                this.counrtryApi = false;
              }
            });
          }
        });
      });
  }

  // check if it user first login
  isUserFisrtLogin() {
    if (this.localStorage.getItem('fisrt-login') === 'yes') {
      this,localStorage.removeItem('user-registration-data');
      this.router.navigateByUrl('/dashboard/user/security');
    }
  }

  // show login Message
  showMessage() {
    if (this.localStorage.getItem('fisrt-login') !== 'yes') {
      this.location.get('USER_DETAIL_MSG1').subscribe(value => {
        this.ui.presentToast(value);
      });
    } else {
      this.location.get('PROFILE_SETUP').subscribe(value => {
        this.ui.presentToast(value);
      });
    }
  }

  // get the user profil
  getUserProfil() {
    this.loading = true;
    this.userService.getProfileUser().subscribe((user: any) => {
      this.loading = false;
      this.showMessage();
      this.userService.setUserToken(user.token);
      this.userService.setUserRole(user.role);
      this.userService.setUserData(user.user);
      this.userService.setUserBadge(user.badge_name);
      this.event.publish('user-data', user.user);
      this.canShowBackButton = true;
      if (user.modePayment) {
        this.userService.setUserPaymentMethod(user.modePayment);
      }
      this.isUserFisrtLogin();

    }, error => {
      this.loading = false;
      if (error.error.user_not_found) {
        this.loading = true;
        this.errorService.renewSession().then((data: any) => {
          if (data && data.result === "OK") {
            this.getUserProfil();
          } else {
            this.loading = false;
          }
        });
      } else {
        this.errorService.manageError(error);
      }
    });
  }

  // Create account and tontine
  updateAccount() {
    this.loading = true;

    if (this.userDetailForm.value.birthdayvalue) {
      this.userDetailForm.get('birthday').setValue(this.dateService.formatDateSplash(this.userDetailForm.value.birthdayvalue));
    }

    if (this.userDetailForm.value.paysValue) {
      this.userDetailForm.get('pays').setValue(this.userDetailForm.value.paysValue);
    }

    if (this.userDetailForm.value.emailValue) {
      this.userDetailForm.get('emailValue').setValue('');
    } else {
      this.userDetailForm.get('emailValue').setValue(this.userDetailForm.value.email);
    }

    this.userService.updateProfileUser(this.userDetailForm.value).subscribe(
      (reponse: any) => {
        if (reponse && reponse.token) {
          this.getUserProfil();
        }
      }, error => {

        if (error && error.error) {
          if (error && error.error && error.error.user_not_found) {
            this.errorService.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.updateAccount();
              } else {
                this.loading = false;
              }
            });
          } else {
            this.loading = false;
            this.userError.manageUserError(error);
          }
        } else {
          this.loading = false;
          this.errorService.manageError(error);
        }
      });
  }

}
