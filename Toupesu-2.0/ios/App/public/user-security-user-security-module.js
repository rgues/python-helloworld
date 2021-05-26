(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-security-user-security-module"],{

/***/ "A2/t":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/user/user-security/user-security.page.ts ***!
  \********************************************************************/
/*! exports provided: UserSecurityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSecurityPage", function() { return UserSecurityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_security_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-security.page.html */ "vP3G");
/* harmony import */ var _user_security_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-security.page.scss */ "eAXn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "RmnQ");














let UserSecurityPage = class UserSecurityPage {
    constructor(fb, errorService, nav, router, event, userService, authService, location, ui, localStorage) {
        this.fb = fb;
        this.errorService = errorService;
        this.nav = nav;
        this.router = router;
        this.event = event;
        this.userService = userService;
        this.authService = authService;
        this.location = location;
        this.ui = ui;
        this.localStorage = localStorage;
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
        }
        else {
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
        this.location.get(['CODE_VALIDATION_MSG', 'DIGIT_MSG_MIN', 'DIGIT_MSG_MAX']).subscribe(value => {
            this.validationMessages = {
                pin: [
                    { type: 'required', message: value.CODE_VALIDATION_MSG },
                    { type: 'maxlength', message: value.DIGIT_MSG_MAX },
                    { type: 'minlength', message: value.DIGIT_MSG_MIN }
                ]
            };
        });
    }
    // Init form 
    initPassForm() {
        const userPin = this.userService.getUserSecret();
        this.userSecurityForm = this.fb.group({
            old_pin: [this.fisrtLogin ? parseInt(userPin.password, 10) : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]{5}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)
                ])],
            new_pin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]{5}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)
                ])],
            new_pin_confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]{5}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)
                ])]
        });
    }
    // Cancel the modal
    cancel() {
        this.initPassForm();
    }
    // Log in the user
    auth(userCredentials) {
        this.loading = true;
        this.authService.authentication(userCredentials).subscribe((reponse) => {
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
                }
                else {
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
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
    // Change the user pin
    changePin() {
        this.loading = true;
        this.userService.updateUserPin(this.userSecurityForm.value).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                const credentialsData = this.userService.getUserSecret();
                const credentials = {
                    email_or_phone: credentialsData.email_or_phone,
                    phone_prefix: credentialsData.phone_prefix,
                    password: this.userSecurityForm.value.new_pin
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
                    this.errorService.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.changePin();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
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
};
UserSecurityPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"] }
];
UserSecurityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-security',
        template: _raw_loader_user_security_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_security_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserSecurityPage);



/***/ }),

/***/ "B4IQ":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/user/user-security/user-security.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserSecurityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSecurityPageModule", function() { return UserSecurityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_security_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-security.page */ "A2/t");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _user_security_page__WEBPACK_IMPORTED_MODULE_6__["UserSecurityPage"]
    }
];
let UserSecurityPageModule = class UserSecurityPageModule {
};
UserSecurityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_security_page__WEBPACK_IMPORTED_MODULE_6__["UserSecurityPage"]]
    })
], UserSecurityPageModule);



/***/ }),

/***/ "eAXn":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/user/user-security/user-security.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNlY3VyaXR5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "vP3G":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user/user-security/user-security.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-back-button *ngIf=\"!fisrtLogin\" color=\"primary\" defaultHref=\"/dashboard/user\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"{{userPicture ? userPicture : 'assets/post-img.svg'}}\" class=\"thumb-img\">\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding ion-margin-start\">\r\n        {{'USER_PROFILE_TEXT3' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"userSecurityForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p> {{ 'USER_SECURITY_TEXT5' | translate }}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'M_OLD_PIN' | translate }}</ion-label>\r\n            <ion-input type=\"tel\" formControlName=\"old_pin\" required></ion-input>\r\n          </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.pin\">\r\n                <div class=\"error-message\" *ngIf=\"(oldPin.dirty || oldPin.touched) && oldPin.hasError(validation.type)\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  <span> {{ validation.message }}</span>\r\n                </div>\r\n              </ng-container>  \r\n            </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'M_NEW_PIN' | translate }}</ion-label>\r\n            <ion-input type=\"tel\" formControlName=\"new_pin\" required></ion-input>\r\n          </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.pin\">\r\n                <div class=\"error-message\" *ngIf=\"(newPin.dirty || newPin.touched) && newPin.hasError(validation.type)\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  <span> {{ validation.message }}</span>\r\n                </div>\r\n              </ng-container>  \r\n            </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'M_CONFIRM_NEW_PIN' | translate }}</ion-label>\r\n            <ion-input type=\"tel\" formControlName=\"new_pin_confirm\" required></ion-input>\r\n          </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngIf=\"(userSecurityForm.value.new_pin !== userSecurityForm.value.new_pin_confirm) && (newPinConfirm.dirty || newPinConfirm.touched) && (newPin.dirty || newPin.touched) \">\r\n                <div class=\"error-message\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  <span> {{ 'PIN_NOT_MATCH' | translate }}</span>\r\n                </div>\r\n              </ng-container>  \r\n            </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n \r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\" (click)=\"changePin()\" [disabled]=\"loading\" *ngIf=\"userSecurityForm.valid && (userSecurityForm.value.new_pin === userSecurityForm.value.new_pin_confirm)\"\r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\">\r\n    {{'SAVE_TEXT' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"full\" (click)=\"skipStep()\" *ngIf=\"userSecurityForm.invalid && fisrtLogin\"\r\n    color=\"warning\" \r\n    class=\"ion-text-uppercase\"\r\n    shape=\"round\">\r\n    {{'M_SKIP' | translate}}\r\n</ion-button>\r\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=user-security-user-security-module.js.map