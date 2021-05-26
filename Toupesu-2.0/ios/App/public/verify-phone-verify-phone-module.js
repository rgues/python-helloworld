(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-phone-verify-phone-module"],{

/***/ "9SVj":
/*!********************************************************!*\
  !*** ./src/app/auth/verify-phone/verify-phone.page.ts ***!
  \********************************************************/
/*! exports provided: VerifyPhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPhonePage", function() { return VerifyPhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_phone_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-phone.page.html */ "Nrj3");
/* harmony import */ var _verify_phone_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-phone.page.scss */ "Gr2S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/auth.service */ "RmnQ");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var _service_auth_error_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/auth-error.service */ "dPC7");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
















// plugin to read sms cordova-plugin-sms-receive
// declare var SMSReceive: any;
let VerifyPhonePage = class VerifyPhonePage {
    constructor(fb, userService, authservice, form, translate, authError, event, error, router, navController, localStorage, ui) {
        this.fb = fb;
        this.userService = userService;
        this.authservice = authservice;
        this.form = form;
        this.translate = translate;
        this.authError = authError;
        this.event = event;
        this.error = error;
        this.router = router;
        this.navController = navController;
        this.localStorage = localStorage;
        this.ui = ui;
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
            digit_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]{5}$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)
            ])),
            phone_prefix: [registerData.phone_prefix],
            phoneid: [this.registerData ? this.registerData.phoneid : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)
                ])],
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](registerData.phone_number, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]{6,13}$')]))
        });
    }
    // Get the code to validate the phone number
    getCode() {
        this.loading = true;
        const registerData = this.userService.getRegistrationData();
        this.authservice.sendUserCode(registerData).subscribe((data) => {
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
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Go to the next page
    gotoNext() {
        if (this.phoneValidationForm.value.avez_vous_un_compte_web === 2) {
            this.userService.setRegistrationData(this.phoneValidationForm.value);
            this.router.navigate(['/auth/verify-email']);
        }
        else {
            this.onLogin();
        }
    }
    // Format phone number
    formatPhoneNumber(phoneNumberString, prefix) {
        return this.form.formatPhoneNumber(phoneNumberString, prefix);
    }
    // Save the user device Id
    saveDevice(params) {
        this.userService.saveDevice(params);
    }
    // Log in the user
    auth(phoneValidationForm) {
        this.loadingForm = true;
        this.authservice.authentication(phoneValidationForm).subscribe((reponse) => {
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
                }
                else {
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
        this.authservice.createAccountOrSynchronise(this.phoneValidationForm.value).subscribe((reponse) => {
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
            }
            else {
                this.loadingForm = false;
            }
        }, error => {
            this.loadingForm = false;
            if (error && error.error && error.error.message === 'error') {
                this.authError.manageAuthError(error);
            }
            else {
                this.error.manageError(error);
            }
        });
    }
};
VerifyPhonePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_9__["FormUtilsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_auth_error_service__WEBPACK_IMPORTED_MODULE_14__["AuthErrorService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__["EventService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] }
];
VerifyPhonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-phone',
        template: _raw_loader_verify_phone_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_phone_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyPhonePage);



/***/ }),

/***/ "Gr2S":
/*!**********************************************************!*\
  !*** ./src/app/auth/verify-phone/verify-phone.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktcGhvbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Nrj3":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify-phone/verify-phone.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/auth/register-phone\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding ion-text-center verify-phone\">\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <form [formGroup]=\"phoneValidationForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <p>{{'REGISTER_MTEXT2' | translate}} <span class=\"usertel\">\r\n            +{{registerData.phoneid}} {{formatPhoneNumber(registerData.phone_number,registerData.phoneid)}}</span>\r\n          </p>        \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\" offset=\"3\">\r\n          <ion-item>\r\n            <ion-input type=\"tel\" formControlName=\"digit_code\" (keyup.enter)=\"gotoNext()\"></ion-input>\r\n          </ion-item> \r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.coderef\">\r\n              <div class=\"error-message\" *ngIf=\"code.hasError(validation.type) && (code.dirty || code.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <p>{{'REGISTER_MMSG2' | translate}} <a (click)=\"getCode()\"><span class=\"resend\">{{'REGISTER_MMSG3' | translate}}</span></a></p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"phoneValidationForm.value.digit_code &&phoneValidationForm.valid\">\r\n        <ion-col size=\"12\" color=\"secondary\">\r\n          <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n          <span>{{'PIN_SAVE_MSG' | translate}} \r\n          </span>        \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n    <ion-button expand=\"full\"  [disabled]=\"phoneValidationForm.invalid || loadingForm\"\r\n    color=\"warning\" \r\n    class=\"ion-text-uppercase\"\r\n    shape=\"round\" (click)=\"gotoNext()\">\r\n    {{'NEXT_TEXT' | translate}}\r\n</ion-button>\r\n<p class=\"ion-text-center\" *ngIf=\"loadingForm\">\r\n  <ion-spinner  name=\"circles\"></ion-spinner> \r\n</p>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "VFDp":
/*!**********************************************************!*\
  !*** ./src/app/auth/verify-phone/verify-phone.module.ts ***!
  \**********************************************************/
/*! exports provided: VerifyPhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPhonePageModule", function() { return VerifyPhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-phone.page */ "9SVj");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _verify_phone_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPhonePage"]
    }
];
let VerifyPhonePageModule = class VerifyPhonePageModule {
};
VerifyPhonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_verify_phone_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPhonePage"]]
    })
], VerifyPhonePageModule);



/***/ })

}]);
//# sourceMappingURL=verify-phone-verify-phone-module.js.map