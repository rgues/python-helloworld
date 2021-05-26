(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-email-verify-email-module"],{

/***/ "+Puo":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify-email/verify-email.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/auth/verify-phone\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding register-phone\">\r\n  <form [formGroup]=\"emailVerificationForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <p [innerHTML]=\"'M_CHECK_ACCOUNT_MSG' | translate\">\r\n          </p>        \r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row *ngIf=\"canShowMessageAccount()\">\r\n        <ion-col size=\"12\">\r\n            <p class=\"ion-text-center\"> \r\n              <strong>{{'USER_SECURITY_MSG2' | translate}}</strong>\r\n            </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"loadingEmail && server\">\r\n        <ion-col size=\"12\">\r\n            <p class=\"error-message ion-text-center\"> \r\n              <ion-spinner *ngIf=\"loadingEmail\" name=\"circles\"></ion-spinner>\r\n              {{'M_EMAIL_CHECKING' | translate}}\r\n            </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'M_EMAIL_MSG' | translate}}</ion-label>\r\n            <ion-input (ionChange)=\"checkEmail(emailVerificationForm.value.email)\" type=\"email\" formControlName=\"email\"></ion-input>\r\n          </ion-item>        \r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.email\">\r\n              <div class=\"error-message\" *ngIf=\"email.hasError(validation.type) && (email.dirty || email.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row  *ngIf=\"isEmailValid\">\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'PASSWORD_TEXT' | translate}}</ion-label>\r\n            <ion-input [type]=\"canShow ? 'text' : 'password'\" formControlName=\"password\"></ion-input>\r\n            <ion-icon (click)=\"updateType()\" color=\"warning\" [name]=\"canShow ? 'eye-off' : 'eye'\" slot=\"end\"></ion-icon>\r\n          </ion-item>        \r\n        </ion-col>\r\n      </ion-row>  \r\n    </ion-grid>\r\n  </form>  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='6'>\r\n        <ion-button expand=\"full\" [disabled]=\"canCheckLogin()\" \r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\" (click)=\"checkPassword(1)\">\r\n          {{'M_CHECK_LOGIN' | translate}}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size='6'>\r\n        <ion-button expand=\"full\" [disabled]=\"loadingForm\" \r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\" (click)=\"onLogin(0)\">\r\n          {{'M_SKIP' | translate}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loadingPass\">\r\n    <ion-spinner name=\"circles\"></ion-spinner> \r\n  </p>\r\n  <p class=\"ion-text-center\" *ngIf=\"loadingForm\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner> \r\n  </p>\r\n</ion-footer>");

/***/ }),

/***/ "DWAF":
/*!********************************************************!*\
  !*** ./src/app/auth/verify-email/verify-email.page.ts ***!
  \********************************************************/
/*! exports provided: VerifyEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function() { return VerifyEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-email.page.html */ "+Puo");
/* harmony import */ var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-email.page.scss */ "lOIz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/auth.service */ "RmnQ");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _service_auth_error_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/auth-error.service */ "dPC7");















let VerifyEmailPage = class VerifyEmailPage {
    constructor(fb, authService, userService, error, authError, navController, translate, formUtil, event, router, localStorage) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.error = error;
        this.authError = authError;
        this.navController = navController;
        this.translate = translate;
        this.formUtil = formUtil;
        this.event = event;
        this.router = router;
        this.localStorage = localStorage;
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
    checkEmail(email) {
        if (this.formUtil.validateEmail(email) && !this.timeoutSession) {
            this.timeoutSession = setTimeout(() => {
                this.loadingEmail = true;
                this.isEmailValid = false;
                this.authService.checkUserEmail(this.emailVerificationForm.value).subscribe((reponse) => {
                    this.loadingEmail = false;
                    this.server = false;
                    if (reponse && reponse.message === 'success') {
                        clearTimeout(this.timeoutSession);
                        this.timeoutSession = null;
                        this.localStorage.setItem('first-email', this.emailVerificationForm.value.email);
                        if (reponse.email_exist) {
                            this.isEmailValid = true;
                        }
                        else {
                            this.onLogin(0);
                        }
                    }
                }, error => {
                    this.loadingEmail = false;
                    this.server = false;
                    if (error && error.error && error.error.message === 'error') {
                        this.authError.manageAuthError(error);
                    }
                    else {
                        this.error.manageError(error);
                    }
                });
            }, 2000);
        }
        else {
            // clear the existing time out and recall the checking function if email is valid
            clearTimeout(this.timeoutSession);
            this.timeoutSession = null;
            if (this.formUtil.validateEmail(email)) {
                this.checkEmail(email);
            }
        }
    }
    // Check if the password match
    checkPassword(hasAccount) {
        this.loadingPass = true;
        this.authService.verifyUserPassword(this.emailVerificationForm.value).subscribe((reponse) => {
            this.loadingPass = false;
            if (reponse && reponse.message === 'success') {
                this.onLogin(hasAccount);
            }
        }, error => {
            this.loadingPass = false;
            if (error && error.error && error.error.message === 'error') {
                this.authError.manageAuthError(error);
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // save the user device Id
    saveDevice(params) {
        this.userService.saveDevice(params);
    }
    // Log in the user
    auth(credentials) {
        this.loadingForm = true;
        this.authService.authentication(credentials).subscribe((reponse) => {
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
    onLogin(hasAccount) {
        this.emailVerificationForm.get('avez_vous_un_compte_web').setValue(hasAccount);
        this.loadingForm = true;
        this.authService.createAccountOrSynchronise(this.emailVerificationForm.value).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.authService.removeUserSession();
                this.loadingForm = false;
                const credentials = {
                    email_or_phone: this.emailVerificationForm.value.phone_number,
                    phone_prefix: this.emailVerificationForm.value.phone_prefix,
                    password: this.emailVerificationForm.value.digit_code
                };
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
VerifyEmailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _service_auth_error_service__WEBPACK_IMPORTED_MODULE_14__["AuthErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_9__["FormUtilsService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"] }
];
VerifyEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-email',
        template: _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyEmailPage);



/***/ }),

/***/ "lOIz":
/*!**********************************************************!*\
  !*** ./src/app/auth/verify-email/verify-email.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "oroY":
/*!**********************************************************!*\
  !*** ./src/app/auth/verify-email/verify-email.module.ts ***!
  \**********************************************************/
/*! exports provided: VerifyEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function() { return VerifyEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-email.page */ "DWAF");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");







const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPage"]
    }
];
let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPage"]]
    })
], VerifyEmailPageModule);



/***/ })

}]);
//# sourceMappingURL=verify-email-verify-email-module.js.map