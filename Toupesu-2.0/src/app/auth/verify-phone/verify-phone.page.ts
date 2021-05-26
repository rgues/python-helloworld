import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { AuthService } from '../service/auth.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { AuthErrorService } from '../service/auth-error.service';
import { EventService } from 'src/app/shared/service/events.service';
// plugin to read sms cordova-plugin-sms-receive
// declare var SMSReceive: any;

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.page.html',
  styleUrls: ['./verify-phone.page.scss'],
})
export class VerifyPhonePage implements OnInit {

  phoneValidationForm: FormGroup;
  loading: boolean;
  loadingForm: boolean;
  credentialError: boolean;
  registerData: any;
  validationMessages: any;
  current: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authservice: AuthService,
    private form: FormUtilsService,
    private translate: TranslateService,
    private authError: AuthErrorService,
    private event: EventService,
    private error: ErrorService,
    private router: Router,
    private navController: NavController,
    private localStorage: LocalStorageService,
    private ui: UiService
  ) {
    this.loading = false;
    this.credentialError = false;
    this.current = '';
    this.registerData = this.userService.getRegistrationData();

    // start watching the SMS
    // this.getSMS();
  }

  ngOnInit() {
    this.getCode();
    this.initUserLogin();
    this.initFormMessage();
  }

  /*  // stop watching SMS
   stopWatchingSMS() {
      SMSReceive.stopWatch();
   }

   ionicViewWillLeave() {
    this.stopWatchingSMS();
   }

   // Retrieve the sms
  getSMS() {
      SMSReceive.startWatch(
        () => {
          document.addEventListener('onSMSArrive', (e: any) => {
            var IncomingSMS = e.data;
            this.processSMS(IncomingSMS);
          });
        },
        () => { this.phoneValidationForm.get('digit_code').setValue(''); }
      );
   } 

   processSMS(data) {
    const message : string= data.body;
    if (message && message.indexOf('Toupesu') != -1) {
      const OTP  = /[0-9]{5}/.exec(message);
      if (OTP) {
        this.phoneValidationForm.get('digit_code').setValue(parseInt(OTP.toString(), 10));
      } else {
        this.phoneValidationForm.get('digit_code').setValue('');
      }
      this.stopWatchingSMS();
    }
  } */


  // Getters
  get code() {
    return this.phoneValidationForm.get('digit_code');
  }

  // Init the form message
  initFormMessage() {
    this.translate.get(['CODE_VALIDATION_MSG', 'DIGIT_MSG_MAX', 'DIGIT_MSG_MIN']).subscribe(value => {
      this.validationMessages = {
        coderef: [
          { type: 'required', message: value.CODE_VALIDATION_MSG },
          { type: 'maxlength', message: value.DIGIT_MSG_MAX },
          { type: 'minlength', message: value.DIGIT_MSG_MIN }
        ]
      };
    });
  }

  // Init login form
  initUserLogin() {
    const registerData = this.userService.getRegistrationData();
    this.phoneValidationForm = this.fb.group({
      country_id: [registerData.country_id],
      prefix_country_with_plus: [registerData && registerData.prefix_country_with_plus ? registerData.prefix_country_with_plus : ''],
      avez_vous_un_compte_web: [''],
      email: [''],
      password: [''],
      country_key: [registerData.country_key],
      digit_code: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[\\d]{5}$'),
        Validators.minLength(5),
        Validators.maxLength(5)
      ])),
      phone_prefix: [registerData.phone_prefix],
      phoneid: [this.registerData ? this.registerData.phoneid : '', Validators.compose([
        Validators.required,
        Validators.maxLength(5)
      ])],
      phone_number: new FormControl(registerData.phone_number,
        Validators.compose([Validators.required, Validators.pattern('^[0-9]{6,13}$')]))
    });
  }

  // Get the code to validate the phone number
  getCode() {
    this.loading = true;
    const registerData = this.userService.getRegistrationData();
    this.authservice.sendUserCode(registerData).subscribe((data: any) => {
      this.loading = false;
      if (data && data.message === 'success') {
        this.current = this.phoneValidationForm.value.digit_code;

        this.translate.get('RESEND_CODE_MSG').subscribe(value => {
          this.ui.presentToast(value);
        });
        // Write SMS reader and send 
        if (data && data.phone_number_match_email) {
          this.phoneValidationForm.get('avez_vous_un_compte_web').setValue(2);
        }
      }
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {
        this.authError.manageAuthError(error);
        if (error.error.phone_is_invalid) {
          this.router.navigate(['/auth/register-phone']);
        }
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Go to the next page
  gotoNext() {
    if (this.phoneValidationForm.value.avez_vous_un_compte_web === 2) {
      this.userService.setRegistrationData(this.phoneValidationForm.value);
      this.router.navigate(['/auth/verify-email']);
    } else {
      this.onLogin();
    }
  }

    // Format phone number
    formatPhoneNumber(phoneNumberString: any, prefix: string) {
      return this.form.formatPhoneNumber(phoneNumberString,prefix);
    }

  // Save the user device Id
  saveDevice(params: any) {
    this.userService.saveDevice(params);
  }

  // Log in the user
  auth(phoneValidationForm: any) {
    this.loadingForm = true;
    this.authservice.authentication(phoneValidationForm).subscribe(
      (reponse: any) => {
        this.loadingForm = false;
        if (reponse && reponse.message === 'success') {
          this.userService.setUserToken(reponse.token);
          this.userService.setUserRole(reponse.role);
          this.userService.setUserData(reponse.user);
          this.userService.setUserBadge(reponse.badge_name);
          // Get the current user lang
          this.userService.setCurrentUserSessionLanguage(reponse.user.langue_user ? reponse.user.langue_user : '');

           // update the user lang
           const lang = reponse.user.langue_user;
           if (lang) {
             this.translate.use(lang.toLocaleLowerCase());
           }

          this.event.publish('new-token', reponse.token);
          const deviceId = this.userService.getUserDevice();
          if (deviceId) {
            this.saveDevice({ device_phone: deviceId });
          }
          this.navController.setDirection('root');
          if (reponse && reponse.user && (!reponse.user.firstname || !reponse.user.lastname)) {
            this.localStorage.setItem('fisrt-login', 'yes');
            this.router.navigateByUrl('/dashboard/user/profil');
          } else {
            this.localStorage.setItem('fisrt-login', 'yes');
            this.router.navigateByUrl('/dashboard/user/security');
          }
        }
      }, error => {
        this.loadingForm = false;
        this.error.manageError(error);
      });
  }

  // Login the user
  onLogin() {
    this.loadingForm = true;
    this.authservice.createAccountOrSynchronise(this.phoneValidationForm.value).subscribe(
      (reponse: any) => {
        if (reponse && reponse.message === 'success') {
          this.authservice.removeUserSession();
          this.loadingForm = false;
          const credentials = {
            email_or_phone: this.phoneValidationForm.value.phone_number,
            phone_prefix: this.phoneValidationForm.value.phoneid,
            password: this.phoneValidationForm.value.digit_code
          };
          this.userService.setUserSecret(credentials);
          this.auth(credentials);
        } else {
          this.loadingForm = false;
        }
      }, error => {
        this.loadingForm = false;
        if (error && error.error && error.error.message === 'error') {
          this.authError.manageAuthError(error);
        } else {
          this.error.manageError(error);
        }
      });
  }
}
