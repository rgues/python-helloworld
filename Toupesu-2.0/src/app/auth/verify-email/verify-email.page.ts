import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { EventService } from 'src/app/shared/service/events.service';
import { AuthErrorService } from '../service/auth-error.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  emailVerificationForm: FormGroup;

  validationMessages: any;
  loadingForm: boolean;
  loadingEmail: boolean;
  isEmailValid: boolean;
  loadingPass: boolean;
  server: boolean;
  canShow: boolean;
  timeoutSession: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private error: ErrorService,
    private authError: AuthErrorService,
    private navController: NavController,
    private translate: TranslateService,
    private formUtil: FormUtilsService,
    private event: EventService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    this.timeoutSession = null;
    this.loadingForm = false;
    this.isEmailValid = false;
    this.loadingEmail = false;
    this.loadingPass = false;
    this.canShow = false;
    this.server = true;
  }


  ngOnInit() {
    this.initForm();
    this.initFormMessage();
  }


  // Getters form
  get email() {
    return this.emailVerificationForm.get('email');
  }

  get password() {
    return this.emailVerificationForm.get('password');
  }

  // Init form message
  initFormMessage() {
    this.translate.get(['USER_DETAIL_TEXT12']).subscribe(trans => {
      this.validationMessages = {
        email: [
          { type: 'required', message: trans.USER_DETAIL_TEXT12 }
        ]
      };
    });

  }

  // Init form 
  initForm() {
    const registerData = this.userService.getRegistrationData();
    this.emailVerificationForm = this.fb.group({
      email: [''],
      avez_vous_un_compte_web: [''],
      password: [''],
      prefix_country_with_plus: [registerData && registerData.prefix_country_with_plus ? registerData.prefix_country_with_plus : ''],
      phoneid: [registerData.phoneid],
      phone_prefix: [registerData.phone_prefix],
      phone_number: [registerData.phone_number],
      digit_code: [registerData.digit_code]
    });
  }

  // update the type
  updateType() {
    this.canShow = !this.canShow;
  }

  // show the account creation message
  canShowMessageAccount() {
    return !this.loadingEmail && !this.isEmailValid && this.emailVerificationForm.value.email && !this.server;
  }

  // can check login
  canCheckLogin() {
    return this.emailVerificationForm.invalid || !this.emailVerificationForm.value.password || !this.isEmailValid || this.loadingPass;
  }


  // Check the user email
  checkEmail(email: any) {
    if (this.formUtil.validateEmail(email) && !this.timeoutSession) {
      this.timeoutSession = setTimeout(() => {
        this.loadingEmail = true;
        this.isEmailValid = false;
        this.authService.checkUserEmail(this.emailVerificationForm.value).subscribe(
          (reponse: any) => {
            this.loadingEmail = false;
            this.server = false;
            if (reponse && reponse.message === 'success') {
              clearTimeout(this.timeoutSession);
              this.timeoutSession = null;
              this.localStorage.setItem('first-email', this.emailVerificationForm.value.email);
              if (reponse.email_exist) {
                this.isEmailValid = true;
              } else {
                this.onLogin(0);
              }
            }
          }, error => {
            this.loadingEmail = false;
            this.server = false;
            if (error && error.error && error.error.message === 'error') {
              this.authError.manageAuthError(error);

            } else {
              this.error.manageError(error);
            }
          });

      }, 2000);

    } else {
      // clear the existing time out and recall the checking function if email is valid
      clearTimeout(this.timeoutSession);
      this.timeoutSession = null;
      if (this.formUtil.validateEmail(email)) {
        this.checkEmail(email)
      }
    }
  }

  // Check if the password match
  checkPassword(hasAccount: number) {
    this.loadingPass = true;
    this.authService.verifyUserPassword(this.emailVerificationForm.value).subscribe(
      (reponse: any) => {
        this.loadingPass = false;
        if (reponse && reponse.message === 'success') {
          this.onLogin(hasAccount);
        }
      }, error => {
        this.loadingPass = false;
        if (error && error.error && error.error.message === 'error') {
          this.authError.manageAuthError(error);
        } else {
          this.error.manageError(error);
        }
      });
  }

  // save the user device Id
  saveDevice(params: any) {
    this.userService.saveDevice(params);
  }

  // Log in the user
  auth(credentials: any) {
    this.loadingForm = true;
    this.authService.authentication(credentials).subscribe(
      (reponse: any) => {
        this.loadingForm = false;
        if (reponse && reponse.message === 'success') {
          this.userService.setUserSecret(credentials);
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
  onLogin(hasAccount: number) {
    this.emailVerificationForm.get('avez_vous_un_compte_web').setValue(hasAccount);
    this.loadingForm = true;
    this.authService.createAccountOrSynchronise(this.emailVerificationForm.value).subscribe(
      (reponse: any) => {

        if (reponse && reponse.message === 'success') {
          this.authService.removeUserSession();
          this.loadingForm = false;
          const credentials = {
            email_or_phone: this.emailVerificationForm.value.phone_number,
            phone_prefix: this.emailVerificationForm.value.phone_prefix,
            password: this.emailVerificationForm.value.digit_code
          };
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
