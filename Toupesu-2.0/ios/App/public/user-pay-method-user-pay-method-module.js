(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-pay-method-user-pay-method-module"],{

/***/ "An5W":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/user/user-pay-method/user-pay-method.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBheS1tZXRob2QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kDZa":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user/user-pay-method/user-pay-method.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/user\" slot=\"text-only\"></ion-back-button>\n    </ion-buttons>\n    <ion-avatar slot=\"start\">\n      <img src=\"{{userPicture ? userPicture : 'assets/post-img.svg'}}\" class=\"thumb-img\">\n    </ion-avatar>\n    <ion-title class=\"no-padding ion-margin-start\">\n      {{ 'USER_PROFILE_TEXT4' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\n    <ion-refresher-content\n      pullingIcon=\"reload-outline\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n  \n  <p class=\"ion-text-center\"  *ngIf=\"loadingPayment\">\n    <ion-spinner  name=\"circles\"></ion-spinner>\n  </p>\n  <form [formGroup]=\"userPayMethodForm\" *ngIf=\"paymentMethods && paymentMethods.length > 0\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-end\">\n        <ion-col size=\"4\">\n          <ion-img [src]=\"paymentMethods ? paymentMethods[userPayMethodForm.value.typePaymentIndex].logo : ''\" class=\"logooperator\"></ion-img>\n        </ion-col>\n      </ion-row>  \n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{'USER_PROFILE_TEXT4' | translate}}</ion-label>\n            <ion-select  (ionChange)=\"updatePaymentMethod(userPayMethodForm.value.typePaymentIndex)\" formControlName=\"typePaymentIndex\">\n              <ion-select-option *ngFor=\"let operator of paymentMethods; let operatorId = index\" [selected]=\"userPayMethodForm.value.typePaymentIndex === operatorId ? true : false\" [value]=\"operatorId\">{{ operator.name }}</ion-select-option>          \n            </ion-select>\n          </ion-item>    \n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{paymentMethods[userPayMethodForm.value.typePaymentIndex].placeholder}}</ion-label>\n            <ion-input (change)=\"checckEmailOrPhone(userPayMethodForm.value.numberAccount,userPayMethodForm.value.typePaymentIndex)\" type=\"text\" formControlName=\"numberAccount\"></ion-input>\n          </ion-item> \n          <div class=\"validation-errors\">\n              <div class=\"error-message\" *ngIf=\"(numberAccount.dirty ||  numberAccount.touched) && numberAccount.invalid\">\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                <span [innerHTML]=\"'REQUIRED_FIELD_TEXT' | translate\"></span>\n              </div>\n          </div>          \n        </ion-col>\n      </ion-row> \n    </ion-grid>\n  </form>\n\n  <div  *ngIf=\"paymentMethods && paymentMethods.length === 0 && !loadingPayment\">\n    <p  class=\"ion-padding ion-text-center\"> {{ 'PAYMENT_MSG' | translate }}</p>\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n  <ion-button expand=\"full\" \n        color=\"warning\" [disabled]=\"loading ||userPayMethodForm.invalid || errorEmail || errorPhone\"\n        (click)=\"savePaymentMethod()\"\n        class=\"ion-text-uppercase\"\n        shape=\"round\">\n    {{ 'SAVE_TEXT' | translate }}\n  </ion-button>\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\n</ion-footer>\n");

/***/ }),

/***/ "qMao":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/user/user-pay-method/user-pay-method.page.ts ***!
  \************************************************************************/
/*! exports provided: UserPayMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPayMethodPage", function() { return UserPayMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_pay_method_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-pay-method.page.html */ "kDZa");
/* harmony import */ var _user_pay_method_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-pay-method.page.scss */ "An5W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");













let UserPayMethodPage = class UserPayMethodPage {
    constructor(fb, userService, paymentData, errorService, locate, location, formUtil, event, ui) {
        this.fb = fb;
        this.userService = userService;
        this.paymentData = paymentData;
        this.errorService = errorService;
        this.locate = locate;
        this.location = location;
        this.formUtil = formUtil;
        this.event = event;
        this.ui = ui;
        this.paymentMethods = [];
        this.errorPhone = false;
        this.errorEmail = false;
        this.loading = false;
        this.loadingPayment = false;
        this.userData = this.userService.getUserData();
        this.userPicture = this.userData && this.userData.picture ? `${this.userData.picture}` : null;
        this.event.subscribe('user-data', user => {
            this.userPicture = user && user.picture ? user.picture : null;
        });
    }
    get operatorName() {
        return this.userPayMethodForm.get('operatorName');
    }
    get phone() {
        return this.userPayMethodForm.get('phone');
    }
    get numberAccount() {
        return this.userPayMethodForm.get('numberAccount');
    }
    ngOnInit() {
        this.getCurrentCountry(false);
        this.getAllMethodPaymentType();
        this.initPaymentForm();
    }
    // check if emial or phone is valid
    checckEmailOrPhone(inputValue, index) {
        this.errorPhone = false;
        this.errorEmail = false;
        switch (this.paymentMethods[index].name) {
            case 'ORANGE MONEY':
                this.errorPhone = !this.formUtil.validatePhone(inputValue);
                break;
            case 'MTN MOBILE MONEY':
                this.errorPhone = !this.formUtil.validatePhone(inputValue);
                break;
            case 'PAYPAL':
                this.errorEmail = !this.formUtil.validateEmail(inputValue);
                break;
            case 'OZOW':
                this.errorEmail = !this.formUtil.validateEmail(inputValue);
                break;
            default:
                break;
        }
    }
    initPaymentForm() {
        const currentPayment = this.paymentData.getDefaultPaymentMethod();
        this.currentPaymentMethod = currentPayment;
        this.userPayMethodForm = this.fb.group({
            modepaiement_id: [currentPayment ? currentPayment.modepaiement_id : ''],
            typePayment: [currentPayment ? currentPayment.typepaiement_id : ''],
            typePaymentIndex: [0],
            numberAccount: [currentPayment ? currentPayment.numero_compte : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nameAccount: [currentPayment ? currentPayment.nametypepaiement : '']
        });
    }
    // Set the default country
    getCurrentCountry(refresher) {
        this.locate.getCurrentCountryInfo(refresher).then((country) => {
            if (country) {
                this.defaultState = country.settings;
            }
        }).catch(error => {
        });
    }
    // Refresh the list
    refreSher(event) {
        this.getCurrentCountry(false);
        this.getAllMethodPaymentType();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    // initialize the payment method
    initPaymentMethod(payment, index) {
        if (this.currentPaymentMethod && this.currentPaymentMethod.nametypepaiement === payment.name) {
            this.userPayMethodForm.get('typePaymentIndex').setValue(index);
            this.updatePaymentMethod(index);
        }
    }
    // can set payment method
    canSetPaymentMethod(payment) {
        return payment.active === 1 && (String(this.userData.pays) === String(payment.country_name)
            || (this.defaultState && this.defaultState.country_id === payment.country_id && !this.userData.pays));
    }
    // get all payment method
    getAllMethodPaymentType() {
        this.loadingPayment = true;
        this.paymentMethods = [];
        this.userService.getAllMethodPaymentType().subscribe((reponse) => {
            this.loadingPayment = false;
            if (reponse && reponse.typePayment && reponse.typePayment.length > 0) {
                let index = 0;
                reponse.typePayment.forEach(payment => {
                    // Get payment method for current user's country or default country
                    if (this.canSetPaymentMethod(payment)) {
                        switch (payment.name) {
                            case 'ORANGE MONEY':
                                this.location.get('REGISTER_MPHONE').subscribe(value => {
                                    this.paymentMethods.push({
                                        id: payment.id, logo: 'assets/orange.jpg', name: payment.name,
                                        placeholder: value
                                    });
                                });
                                this.initPaymentMethod(payment, index);
                                index++;
                                break;
                            case 'MTN MOBILE MONEY':
                                this.location.get('REGISTER_MPHONE').subscribe(value => {
                                    this.paymentMethods.push({
                                        id: payment.id, logo: 'assets/mtn.jpg', name: payment.name,
                                        placeholder: value
                                    });
                                });
                                this.initPaymentMethod(payment, index);
                                index++;
                                break;
                            case 'PAYPAL':
                                this.location.get('EMAIL_TEXT').subscribe(value => {
                                    this.paymentMethods.push({
                                        id: payment.id, logo: 'assets/paypal.jpg', name: payment.name,
                                        placeholder: value
                                    });
                                });
                                this.initPaymentMethod(payment, index);
                                index++;
                                break;
                            case 'OZOW':
                                this.location.get('EMAIL_TEXT').subscribe(value => {
                                    this.paymentMethods.push({
                                        id: payment.id, logo: 'assets/ozow.png', name: payment.name,
                                        placeholder: value
                                    });
                                });
                                this.initPaymentMethod(payment, index);
                                index++;
                                break;
                            default:
                                this.updatePaymentMethod(0);
                                index++;
                                break;
                        }
                    }
                });
                // Check if one the user method has been selected
                if (this.userPayMethodForm.value.nameAccount === '') {
                    this.updatePaymentMethod(0);
                }
            }
        }, error => {
            this.loadingPayment = false;
            if (error && error.error && error.error.user_not_found) {
                this.errorService.renewSession();
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
    // Update the payment method
    updatePaymentMethod(index) {
        if (this.paymentMethods && this.paymentMethods.length > 0) {
            this.userPayMethodForm.get('typePayment').setValue(this.paymentMethods[index].id);
            this.userPayMethodForm.get('nameAccount').setValue(this.paymentMethods[index].name);
        }
    }
    // create the payment method
    createUserPaymentMethod() {
        this.loading = true;
        this.userService.addMethodPaymentUser(this.userPayMethodForm.value).subscribe((user) => {
            this.loading = false;
            if (user && user.message === 'success') {
                this.userService.setUserPaymentMethod(user.modePayment);
                this.location.get('USER_PAYMENT_MSG1').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.userService.setUserToken(user.token);
            }
        }, error => {
            this.loading = false;
            if (error && error.error) {
                if (error.error.numberAccount_already_exist) {
                    this.location.get('USER_PAYMENT_MSG3').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                }
                if (error.error.token) {
                    this.loading = true;
                    this.errorService.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.createUserPaymentMethod();
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
    // update the payment method
    updateUserPaymentMethod() {
        this.loading = true;
        this.userService.updateMethodPaymentUser(this.userPayMethodForm.value).subscribe((user) => {
            this.loading = false;
            if (user && user.message === 'success') {
                this.userService.setUserPaymentMethod(user.modePayment);
                this.location.get('USER_PAYMENT_MSG4').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.userService.setUserToken(user.token);
            }
        }, error => {
            this.loading = false;
            if (error && error.error) {
                if (error.error.numberAccount_already_exist) {
                    this.location.get('USER_PAYMENT_TEXT1').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                }
                if (error.error.token) {
                    this.loading = true;
                    this.errorService.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updateUserPaymentMethod();
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
    // Save the payment mode
    savePaymentMethod() {
        if (this.userPayMethodForm.value.modepaiement_id) {
            this.updateUserPaymentMethod();
        }
        else {
            this.createUserPaymentMethod();
        }
    }
};
UserPayMethodPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_9__["PaymentGlobalDataService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_8__["FormUtilsService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] }
];
UserPayMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-pay-method',
        template: _raw_loader_user_pay_method_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_pay_method_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserPayMethodPage);



/***/ }),

/***/ "wXDe":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/user/user-pay-method/user-pay-method.module.ts ***!
  \**************************************************************************/
/*! exports provided: UserPayMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPayMethodPageModule", function() { return UserPayMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_pay_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-pay-method.page */ "qMao");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _user_pay_method_page__WEBPACK_IMPORTED_MODULE_6__["UserPayMethodPage"]
    }
];
let UserPayMethodPageModule = class UserPayMethodPageModule {
};
UserPayMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_pay_method_page__WEBPACK_IMPORTED_MODULE_6__["UserPayMethodPage"]]
    })
], UserPayMethodPageModule);



/***/ })

}]);
//# sourceMappingURL=user-pay-method-user-pay-method-module.js.map