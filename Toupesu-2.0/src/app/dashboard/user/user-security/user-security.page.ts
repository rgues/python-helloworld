import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.page.html',
  styleUrls: ['./user-security.page.scss'],
})
export class UserSecurityPage implements OnInit {

  userSecurityForm: FormGroup;
  loading: boolean;
  errorEmail: boolean;
  errorPhone: boolean;
  validatorEmailOrPhone: boolean;
  codePin: string;
  userData: any;
  validationMessages: any;
  userPicture: string;
  fisrtLogin: boolean;

  constructor(
    private fb: FormBuilder,
    private errorService: ErrorService,
    private nav: NavController,
    private router: Router,
    private event: EventService,
    private userService: UserService,
    private authService: AuthService,
    private location: TranslateService,
    private ui: UiService,
    private localStorage: LocalStorageService
  ) {
    this.loading = false;
    this.errorEmail = false;
    this.errorPhone = false;
    this.validatorEmailOrPhone = false;
    this.userData = this.userService.getUserData();
    this.userPicture = this.userData && this.userData.picture ? `${this.userData.picture}` : null;
    this.event.subscribe('user-data', user => {
      this.userPicture = user && user.picture ? user.picture : null;
    });
    this.initMessage();
  }


  ngOnInit() {
    this.userData = this.userService.getUserData();
    if (this.localStorage.getItem('fisrt-login') === 'yes') {
      this.fisrtLogin = true;
    }else {
      this.fisrtLogin = false;
    }
    this.initPassForm();
  }

  // Form getters 
  get newPin() {
    return this.userSecurityForm.get('new_pin');
  }

  get oldPin() {
    return this.userSecurityForm.get('old_pin');
  }

  get newPinConfirm() {
    return this.userSecurityForm.get('new_pin_confirm');
  }


  // Init form message
  initMessage() {
    this.location.get(['CODE_VALIDATION_MSG', 'DIGIT_MSG_MIN','DIGIT_MSG_MAX']).subscribe(value => {
      this.validationMessages = {
        pin: [
          { type: 'required', message:  value.CODE_VALIDATION_MSG},
          { type: 'maxlength', message: value.DIGIT_MSG_MAX},
          { type: 'minlength', message: value.DIGIT_MSG_MIN}
        ]
      };
    });
  }


  // Init form 
  initPassForm() {
    const userPin = this.userService.getUserSecret();
    this.userSecurityForm = this.fb.group({
      old_pin: [this.fisrtLogin ? parseInt(userPin.password, 10) : '', Validators.compose([Validators.required,
        Validators.minLength(5),
         Validators.pattern('^[\\d]{5}$'),
        Validators.maxLength(5)
      ])],
      new_pin: ['', Validators.compose([Validators.required,
      Validators.minLength(5),
      Validators.pattern('^[\\d]{5}$'),
      Validators.maxLength(5)
    ])],
      new_pin_confirm: ['', Validators.compose([Validators.required,
        Validators.minLength(5),
       Validators.pattern('^[\\d]{5}$'),
        Validators.maxLength(5)
      ])]
    });
  }


  // Cancel the modal
  cancel() {
    this.initPassForm();
  }
  

  // Log in the user
  auth(userCredentials : any) {
    this.loading = true;
    this.authService.authentication(userCredentials).subscribe(
      (reponse: any) => {
         if (reponse && reponse.message === 'success') {
             this.location.get('USER_SECURITY_MSG4').subscribe(value => {
              this.ui.presentToast(value);
             });
             this.initPassForm();
             this.userService.setUserSecret(userCredentials);
             this.userService.setUserToken(reponse.token);
             this.userService.setUserRole(reponse.role);
             this.userService.setUserData(reponse.user);
             this.userService.setUserBadge(reponse.badge_name);
             this.event.publish('new-token', reponse.token);
             this.nav.setDirection('root');
             if (this.localStorage.getItem('fisrt-login') === 'yes') {
                this.localStorage.removeItem('fisrt-login');
                this.router.navigate(['dashboard']);
             } else {
              this.router.navigate(['dashboard/user']);
             }
         }
         this.loading = false;
      }, error => {
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
              this.location.get('ADD_SHARE_MSG3').subscribe(value => {
                this.ui.presentToast(value);
              });
            } else {
               this.errorService.manageError(error);
            }
      });
  }

  // Change the user pin
  changePin() {
    this.loading = true;
    this.userService.updateUserPin(this.userSecurityForm.value).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
        
          const credentialsData = this.userService.getUserSecret();
          const credentials = {
            email_or_phone:  credentialsData.email_or_phone,
            phone_prefix: credentialsData.phone_prefix,
            password : this.userSecurityForm.value.new_pin
           };
           this.auth(credentials);
        }
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {

          if (error.error.bad_old_pin) {
            this.location.get('BAD_OLD_PIN').subscribe(value => {
              this.ui.presentToast(value);
            });
          }

          if (error.error.remplir_tous_les_champs) {
            this.location.get('CONFIRM_PAY_CONTRIBUTION_MSG3').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
          if (error.error.user_not_found) {
            this.loading = true;
            this.errorService.renewSession().then((data: any)=> {
                if (data && data.result === "OK") {
                    this.changePin();
                } else {
                  this.loading = false;
                }
            });
          }

        } else {
          this.errorService.manageError(error);
        }
      });
  }

  
  // skip change pin step
  skipStep() {
    this.localStorage.removeItem('fisrt-login');
    this.nav.setDirection('root');
    this.router.navigateByUrl('/dashboard');
  }

}
