(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-withdrawal-withdrawal-module"],{

/***/ "3G7+":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/add-bank-profil/add-bank-profil.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'ADD_BANK_PROFIL_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"addBankForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"> {{ 'WITHDRAWAL_TEXT7' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_name\" required></ion-input>\r\n          </ion-item> \r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"bank.invalid && (bank.dirty || bank.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'BANK_NAME_REQUIRED' | translate }}\r\n            </div>\r\n          </div>       \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item >\r\n            <ion-label position=\"floating\">{{ 'BRANCH_NAME' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"branch_name\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"branchName.invalid && (branchName.dirty || branchName.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'BRANCH_NAME_REQUIRED' | translate }}\r\n            </div>\r\n          </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item >\r\n            <ion-label position=\"floating\">{{ 'BRANCH_CODE' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"branch_code\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"branchCode.invalid && (branchCode.dirty || branchCode.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'BRANCH_CODE_REQUIRED' | translate }}\r\n            </div>\r\n          </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"> {{ 'WALLET_ACCOUNT_HOLDER_NAME' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"nom_proprietaire\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"proprietaryName.invalid && (proprietaryName.dirty || proprietaryName.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ACCOUNT_HOLDER_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'WALLET_ACCOUNT_NAME' | translate}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"account_name\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"accountName.invalid && (accountName.dirty || accountName.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ACCOUNT_NAME_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'WALLET_ACCOUNT_NUMBER' | translate}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"account_number\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"accountNber.invalid && (accountNber.dirty || accountNber.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ACCOUNT_NUMBER_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"> {{'ADDRESS_TEXT' | translate}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"address\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"address.invalid && (address.dirty || address.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ADDRESS_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>      \r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n    <ion-grid>\r\n      <ion-row>   \r\n        <ion-col>\r\n            <ion-button expand=\"full\" \r\n                  color=\"warning\" [disabled]=\"addBankForm.invalid || loading\"\r\n                  class=\"ion-text-uppercase\"\r\n                  shape=\"round\" (click)=\"addAccount()\">\r\n                  {{'SAVE_TEXT' | translate }}\r\n            </ion-button>\r\n        </ion-col>   \r\n        <ion-col>\r\n            <ion-button expand=\"full\" \r\n                  fill=\"outline\"\r\n                  color=\"warning\" \r\n                  class=\"ion-text-uppercase\"\r\n                  shape=\"round\" (click)=\"closeAddBank('cancel')\">\r\n              {{'CANCEL_TEXT' | translate }}\r\n            </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <p class=\"ion-text-center\" *ngIf=\"loading\"> \r\n        <ion-spinner  name=\"circles\"></ion-spinner>\r\n      </p>\r\n    </ion-grid>\r\n  </ion-footer>");

/***/ }),

/***/ "5CdL":
/*!******************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/update-bank-profil/update-bank-profil.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYmFuay1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "IFYy":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/withdrawal/withdrawal.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: WithdrawalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawalPageModule", function() { return WithdrawalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _withdrawal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withdrawal.page */ "SOgs");
/* harmony import */ var _add_bank_profil_add_bank_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-bank-profil/add-bank-profil.component */ "WP3x");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../update-bank-profil/update-bank-profil.component */ "bUPR");









const routes = [
    {
        path: '',
        component: _withdrawal_page__WEBPACK_IMPORTED_MODULE_5__["WithdrawalPage"]
    }
];
let WithdrawalPageModule = class WithdrawalPageModule {
};
WithdrawalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _withdrawal_page__WEBPACK_IMPORTED_MODULE_5__["WithdrawalPage"],
            _add_bank_profil_add_bank_profil_component__WEBPACK_IMPORTED_MODULE_6__["AddBankProfilComponent"],
            _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_8__["UpdateBankProfilComponent"]
        ],
        entryComponents: [
            _add_bank_profil_add_bank_profil_component__WEBPACK_IMPORTED_MODULE_6__["AddBankProfilComponent"],
            _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_8__["UpdateBankProfilComponent"]
        ]
    })
], WithdrawalPageModule);



/***/ }),

/***/ "Imt6":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/withdrawal/withdrawal.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + currentTontine.tontine.tontine_id + '/wallet'\" slot=\"text-only\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n      <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'WALLET_TEXT' | translate }}: <ion-text color=\"primary\" class=\"ion-text-capitalize\">{{ 'WITHDRAWAL_TEXT0' | translate }}</ion-text></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"withdrawal\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-card class=\"block-1\">\r\n            <ion-card-content class=\"ion-text-center\">\r\n              <ion-row>\r\n                <ion-col size=\"auto\" class=\"align-self-center\">\r\n                  <span class=\"desc\">{{ 'WALLET_TEXT2' | translate }} </span>\r\n                </ion-col>\r\n                <ion-col class=\"col-button\">\r\n                  <div class=\"menu-amount\">\r\n                    <span *ngFor=\"let balance of currentBalance; let i = index\">  {{balance.total_balance ? balance.total_balance : 0}}\r\n                      {{balance.currency_name ? balance.currency_name : ''}} <span *ngIf=\"currentBalance[i+1]\"> | </span></span>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <form [formGroup]=\"withdrawal\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle>\r\n                {{ 'M_WALLET_SELECT_TEXT' | translate }}\r\n                <ion-item>\r\n                  <ion-label>{{ 'M_PAY_BY' | translate }}</ion-label>\r\n                  <ion-select (ionChange)=\"updatePayment(withdrawal.value.method_payment_id)\"\r\n                    formControlName=\"method_payment_id\">\r\n                    <ion-select-option *ngFor=\"let operator of paymentMethods; let m=index\" [selected]=\"m===0\" [value]=\"operator.id\">{{ operator.label }}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-card-subtitle>\r\n              <ion-card-content>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-item>\r\n                      <ion-label>{{ 'SOURCE_FOUND_TEXT' | translate }}</ion-label>\r\n                      <ion-select formControlName=\"type_caisse_tontine\">\r\n                        <ion-select-option *ngFor=\"let checkout of typesCaisses\" [value]=\"checkout.id\">{{ checkout.name }}</ion-select-option>          \r\n                      </ion-select>\r\n                    </ion-item>     \r\n                  </ion-col>\r\n                </ion-row>\r\n                <div *ngIf=\"withdrawal.value.method_payment_id === 0; then bankTransfer else mobilTransfer\"></div>\r\n                <ng-template #bankTransfer>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-text color=\"warning\">\r\n                        {{ 'WITHDRAWAL_TEXT10' | translate }}\r\n                      </ion-text>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0\">\r\n                        <ion-label>{{ 'TONTINE_DETAIL_TEXT2' | translate }}</ion-label>\r\n                        <ion-select (ionChange)=\"checkAmount(withdrawal.value.amount)\" formControlName=\"device_name\">\r\n                          <ion-select-option *ngFor=\"let currency of currentBalance\" [value]=\"currency.device_name\">\r\n                            {{ currency.device_name }}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"devise.invalid && (devise.dirty || devise.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{ 'CURRENCY_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col *ngIf=\"bankList && bankList.length > 0\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{'WALLET_AMOUNT_WITHDRAWAL' | translate}} \r\n                          <span *ngIf=\"withdrawal.value.device_name\">({{withdrawal.value.device_name}})</span></ion-label>\r\n                        <ion-input (ionChange)=\"checkAmount(withdrawal.value.amount)\" type=\"number\"\r\n                          formControlName=\"amount\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'AMOUNT_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"error-message\" *ngIf=\"!amounValid\">\r\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                        {{amountErrorMessage}}\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0\">\r\n                        <ion-label>{{ 'WITHDRAWAL_TEXT7' | translate }}</ion-label>\r\n                        <ion-select (ionChange)=\"getBankdetail(withdrawal.value.tontine_bank_profile_id)\"\r\n                          formControlName=\"tontine_bank_profile_id\">\r\n                          <ion-select-option *ngFor=\"let bank of bankList\" [value]=\"bank.id\">{{ bank.bank_name }}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\"  *ngIf=\"bankList && bankList.length > 0\">\r\n                        <div class=\"error-message\" *ngIf=\"bank.invalid && (bank.dirty || bank.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{ 'BANK_NAME_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                      <ion-text class=\"ion-float-right\"><a\r\n                          (click)=\"openAddBank($event)\">{{ 'WITHDRAWAL_TEXT9' | translate }}</a></ion-text>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.nom_proprietaire\">\r\n                        <ion-label position=\"floating\">{{ 'WALLET_ACCOUNT_HOLDER_NAME' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"nom_proprietaire\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\"\r\n                          *ngIf=\"proprietaryName.invalid && (proprietaryName.dirty || proprietaryName.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'ACCOUNT_HOLDER_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.branch_name\">\r\n                        <ion-label position=\"floating\">{{ 'BRANCH_NAME' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"branch_name\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.branch_code\">\r\n                        <ion-label position=\"floating\">{{ 'BRANCH_CODE' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"branch_code\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.account_name\">\r\n                        <ion-label position=\"floating\">{{'WALLET_ACCOUNT_NAME' | translate}}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"account_name\" required></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"accountName.invalid && (accountName.dirty || accountName.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{ 'ACCOUNT_NAME_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>        \r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.account_number\">\r\n                        <ion-label position=\"floating\">{{ 'WALLET_ACCOUNT_NUMBER' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"account_number\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\"\r\n                          *ngIf=\"accountNber.invalid && (accountNber.dirty || accountNber.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'ACCOUNT_NUMBER_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.address\">\r\n                        <ion-label position=\"floating\">{{ 'ADDRESS_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"address\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"address.invalid && (address.dirty || address.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'ACCOUNT_NUMBER_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row *ngIf=\"bankList && bankList.length > 0\">   \r\n                    <ion-col size=\"6\">\r\n                        <ion-button \r\n                              color=\"warning\"  size=\"small\" [disabled]=\"!withdrawal.value\"\r\n                              class=\"ion-text-lowercase\"\r\n                              shape=\"round\" (click)=\"openUpdateBank(withdrawal.value)\">\r\n                              {{'M_UPDATE' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>   \r\n                    <ion-col size=\"6\">\r\n                        <ion-button   [disabled]=\"!withdrawal.value.tontine_bank_profile_id\"\r\n                              class=\"ion-text-lowercase\"\r\n                              fill=\"outline\"  size=\"small\"\r\n                              color=\"warning\" \r\n                              shape=\"round\" (click)=\"confirmDeleteAccount(withdrawal.value.tontine_bank_profile_id)\">\r\n                          {{'TEXT_DELETE' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ng-template>\r\n                <ng-template #mobilTransfer>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item>\r\n                        <ion-label>{{ 'TONTINE_DETAIL_TEXT1' | translate }}</ion-label>\r\n                        <ion-select (ionChange)=\"updateCountryPrefix(withdrawal.value.country_id)\"\r\n                          formControlName=\"country_id\">\r\n                          <ion-select-option *ngFor=\"let state of states\" [value]=\"state.country_id\">\r\n                            {{ state.country_label }}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"countryId.invalid && (countryId.dirty || countryId.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'REQUIRED_FIELD_TEXT' | translate\"></span>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-row class=\"ion-justify-content-end\">\r\n                        <ion-col size=\"4\">\r\n                          <ion-img\r\n                            [src]=\"paymentMethods&&paymentMethods[currentIndex] ? paymentMethods[currentIndex].logo : ' '\"\r\n                            class=\"logooperator\"></ion-img>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row   *ngIf=\"!isPayPal()\">\r\n                    <ion-col size=\"4\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">+</ion-label>\r\n                        <ion-input type=\"text\" placeholder=\"{{withdrawal.value.phoneid}}\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'PHONE_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"tel\" (ionChange)=\"removeSpace1();checkPhone(withdrawal.value.phoneNumber)\" formControlName=\"phoneNumber\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\"  *ngIf=\"phone.invalid && (phone.dirty || phone.touched) || errorPhone\">\r\n                      <div class=\"validation-errors\" >\r\n                          <div class=\"error-message\">\r\n                            <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                           <span  [innerHTML]=\"'REGISTER_PHONE_INVALID' | translate\"></span>\r\n                          </div>\r\n                      </div>    \r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row *ngIf=\"isOperator()\">\r\n                    <ion-col size=\"12\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'BENEFICIARY_ACCOUNT_NAME_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"text\"  formControlName=\"nom_beneficiaire\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"beneficiary.invalid && (beneficiary.dirty || beneficiary.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'BENEFICARY_NAME_ERROR_TEXT' | translate: {maxLength: 100}\"></span>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row *ngIf=\"isPayPal()\">\r\n                    <ion-col size=\"12\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'EMAIL_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"email\" (ionChange)=\"checkEmail(withdrawal.value.email)\" formControlName=\"email\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\" *ngIf=\"email.invalid && (email.dirty || email.touched) || errorEmail\">\r\n                        <div class=\"error-message\" >\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'TONTINE_NEW_TEXT23' | translate\"></span>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'AMOUNT_TEXT' | translate }}({{withdrawal.value.device_name}})</ion-label>\r\n                        <ion-input (ionChange)=\"checkAmount(withdrawal.value.amount)\" type=\"number\"\r\n                          formControlName=\"amount\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'AMOUNT_REQUIRED' | translate\"></span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"error-message\" style=\"color: red;\" *ngIf=\"!amounValid\">\r\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                        {{amountErrorMessage}}\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ng-template>\r\n\r\n              </ion-card-content>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\"\r\n    [disabled]=\"canPay()\"\r\n    color=\"warning\" class=\"ion-text-uppercase\" (click)=\"checkNumberAndPin()\" shape=\"round\">\r\n    {{ 'WITHDRAWAL_TEXT8' | translate }}\r\n  </ion-button>\r\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n</ion-footer>");

/***/ }),

/***/ "MOJC":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/update-bank-profil/update-bank-profil.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'ADD_BANK_PROFIL_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"addBankForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"> {{ 'WITHDRAWAL_TEXT7' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_name\" required></ion-input>\r\n          </ion-item> \r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"bank.invalid && (bank.dirty || bank.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'BANK_NAME_REQUIRED' | translate }}\r\n            </div>\r\n          </div>       \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item >\r\n            <ion-label position=\"floating\">{{ 'BRANCH_NAME' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"branch_name\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"branchName.invalid && (branchName.dirty || branchName.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'BRANCH_NAME_REQUIRED' | translate }}\r\n            </div>\r\n          </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item >\r\n            <ion-label position=\"floating\">{{ 'BRANCH_CODE' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"branch_code\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"branchCode.invalid && (branchCode.dirty || branchCode.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'BRANCH_CODE_REQUIRED' | translate }}\r\n            </div>\r\n          </div>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"> {{ 'WALLET_ACCOUNT_HOLDER_NAME' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"nom_proprietaire\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"proprietaryName.invalid && (proprietaryName.dirty || proprietaryName.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ACCOUNT_HOLDER_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'WALLET_ACCOUNT_NAME' | translate}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"account_name\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"accountName.invalid && (accountName.dirty || accountName.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ACCOUNT_NAME_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'WALLET_ACCOUNT_NUMBER' | translate}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"account_number\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"accountNber.invalid && (accountNber.dirty || accountNber.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ACCOUNT_NUMBER_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"> {{'ADDRESS_TEXT' | translate}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"address\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"address.invalid && (address.dirty || address.touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{ 'ADDRESS_REQUIRED' | translate }}\r\n            </div>\r\n          </div>        \r\n        </ion-col>\r\n      </ion-row>      \r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n    <ion-grid>\r\n      <ion-row>   \r\n        <ion-col>\r\n            <ion-button expand=\"full\" \r\n                  color=\"warning\" [disabled]=\"addBankForm.invalid || loading\"\r\n                  class=\"ion-text-uppercase\"\r\n                  shape=\"round\" (click)=\"confirmUpdateAccount()\">\r\n                  {{'M_UPDATE' | translate }}\r\n            </ion-button>\r\n        </ion-col>   \r\n        <ion-col>\r\n            <ion-button expand=\"full\" \r\n                  fill=\"outline\"\r\n                  color=\"warning\" \r\n                  class=\"ion-text-uppercase\"\r\n                  shape=\"round\" (click)=\"closeAddBank('cancel')\">\r\n              {{'CANCEL_TEXT' | translate }}\r\n            </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <p class=\"ion-text-center\" *ngIf=\"loading\"> \r\n        <ion-spinner  name=\"circles\"></ion-spinner>\r\n      </p>\r\n    </ion-grid>\r\n  </ion-footer>");

/***/ }),

/***/ "NxUC":
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/add-bank-profil/add-bank-profil.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYmFuay1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "SOgs":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/withdrawal/withdrawal.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: WithdrawalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawalPage", function() { return WithdrawalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_withdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./withdrawal.page.html */ "Imt6");
/* harmony import */ var _withdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withdrawal.page.scss */ "ht1O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_bank_profil_add_bank_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-bank-profil/add-bank-profil.component */ "WP3x");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../update-bank-profil/update-bank-profil.component */ "bUPR");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/wallet-tontine.service */ "0g9v");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/wallet-tontine-error.service */ "aZHn");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");





















let WithdrawalPage = class WithdrawalPage {
    constructor(walletError, storage, modatCtrl, walletTontine, paymentData, zone, navcontroler, tontine, translate, ui, event, fb, router, error, userService, formUtil, location, alertController) {
        this.walletError = walletError;
        this.storage = storage;
        this.modatCtrl = modatCtrl;
        this.walletTontine = walletTontine;
        this.paymentData = paymentData;
        this.zone = zone;
        this.navcontroler = navcontroler;
        this.tontine = tontine;
        this.translate = translate;
        this.ui = ui;
        this.event = event;
        this.fb = fb;
        this.router = router;
        this.error = error;
        this.userService = userService;
        this.formUtil = formUtil;
        this.location = location;
        this.alertController = alertController;
        this.states = [];
        this.typesCaisses = [];
        this.bankList = [];
        this.currentIndex = 0;
        this.maxAmount = 0;
        this.currencyList = [];
        this.listOfcountries = [];
        this.loading = false;
        this.amountErrorMessage = '';
        this.amounValid = true;
        this.paymentMethods = [];
        this.errorEmail = false;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.token = this.userService.getUserToken();
        this.event.subscribe('new-token', token => {
            this.token = token;
        });
        this.typesCaisses = [];
        this.errorPhone = false;
    }
    ngOnInit() {
        this.initForm();
        this.getBankList();
        this.getCurrentBalance();
        this.getCountries(false);
    }
    // Form getters
    get phoneId() {
        return this.withdrawal.get('phoneid');
    }
    get beneficiary() {
        return this.withdrawal.get('nom_beneficiaire');
    }
    get countryId() {
        return this.withdrawal.get('country_id');
    }
    get operatortype() {
        return this.withdrawal.get('method_payment_id');
    }
    get devise() {
        return this.withdrawal.get('device_name');
    }
    get amount() {
        return this.withdrawal.get('amount');
    }
    get bank() {
        return this.withdrawal.get('bank_name');
    }
    get branchCode() {
        return this.withdrawal.get('branch_code');
    }
    get branchName() {
        return this.withdrawal.get('branch_name');
    }
    get proprietaryName() {
        return this.withdrawal.get('nom_proprietaire');
    }
    get accountNber() {
        return this.withdrawal.get('account_number');
    }
    get accountName() {
        return this.withdrawal.get('account_name');
    }
    get address() {
        return this.withdrawal.get('address');
    }
    get phone() {
        return this.withdrawal.get('phoneNumber');
    }
    get email() {
        return this.withdrawal.get('email');
    }
    get checkoutName() {
        return this.withdrawal.get('type_caisse_tontine');
    }
    // Init the form
    initForm() {
        const currentUser = this.userService.getUserData();
        this.withdrawal = this.fb.group({
            token: [this.token],
            tontine_id: [this.currentTontine ? this.currentTontine.tontine.tontine_id : ''],
            method_payment_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            device_name: [''],
            nom_beneficiaire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)])],
            direct_transfert_to_bank_account: [''],
            tontine_bank_profile_id: [0],
            type_caisse_tontine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_offline_withdraw: [0],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            bank_name: [''],
            account_name: [''],
            nom_proprietaire: [''],
            account_number: [''],
            branch_code: [''],
            branch_name: [''],
            address: [''],
            phone_number: [''],
            email: [currentUser && currentUser.email && this.formUtil.validateEmail(currentUser.email) ? currentUser.email : ''],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]{6,13}$')])],
            phoneid: [''],
            country_id: ['']
        });
    }
    // check Email address
    checkEmail(email) {
        this.errorEmail = !this.formUtil.validateEmail(email);
    }
    // check phone
    checkPhone(phone) {
        this.errorPhone = !this.formUtil.validatePhone(phone);
    }
    // Remove space
    removeSpace() {
        this.withdrawal.get('amount').setValue(this.paymentData.removeInputSpace(this.withdrawal.value.amount));
    }
    // Remove space
    removeSpace1() {
        this.withdrawal.get('phoneNumber').setValue(this.paymentData.removeInputSpace(this.withdrawal.value.phoneNumber));
    }
    // Refresh the list
    refreSher(event) {
        this.getBankList();
        this.getCurrentBalance();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    // Get the list of the bank
    getBankList() {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            token: this.token
        };
        if (this.currentTontine.tontine.administrator === 1) {
            this.walletTontine.getAllBankProfile(param).subscribe((reponse) => {
                if (reponse && reponse.message === 'success') {
                    this.bankList = [];
                    reponse.data.forEach(bank => {
                        if (bank && bank.active === 1) {
                            this.bankList.push(bank);
                        }
                    });
                    if (this.bankList && this.bankList.length > 0) {
                        this.getBankdetail(this.bankList[0].id);
                    }
                }
            }, error => {
                if (error && error.error && error.error.message === 'error') {
                    if (error.error.user_not_found) {
                        this.error.renewSession().then((data) => {
                            if (data && data.result === 'OK') {
                                this.getBankList();
                            }
                        });
                    }
                    else {
                        this.walletError.manageWalletTontineError(error);
                    }
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
    }
    getCurrentBalance() {
        const param = { tontine_id: this.currentTontine.tontine.tontine_id };
        this.walletTontine.getTontineWallet(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.currentBalance = reponse.infos_wallet;
                this.storage.set(`tontine-wallet${param.tontine_id}`, { solde: this.currentBalance, caisse: reponse.detail_caisse });
                this.typesCaisses = [];
                let index = 0;
                reponse.detail_caisse.forEach(caise => {
                    if (caise && caise.online_balance && caise.online_balance > 0) {
                        this.translate.get(caise.caisse_name).subscribe(trans => {
                            this.typesCaisses.push({
                                index: index, id: caise.type_caisse_tontine_id, name: trans, tontine_id: caise.tontine_id,
                                currency: this.currentTontine.tontine.monnaie, country_id: 0
                            });
                        });
                        index++;
                    }
                });
                this.getAllMethodPaymentType();
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.tontine_id_not_exist) {
                    this.translate.get('ADD_SHARE_MSG4').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getCurrentBalance();
                        }
                        else {
                            this.loading = false;
                            this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                                this.currentBalance = walletData ? walletData.solde : [];
                            });
                        }
                    });
                }
                else {
                    this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                        this.currentBalance = walletData ? walletData.solde : [];
                    });
                }
            }
            else {
                this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                    this.currentBalance = walletData ? walletData.solde : [];
                });
                this.error.manageError(error);
            }
        });
    }
    // Check the amount
    checkAmount(amount) {
        this.removeSpace();
        this.amounValid = true;
        this.loading = false;
        if (amount) {
            this.currentBalance.forEach(wallet => {
                if (wallet && wallet.device_name === this.withdrawal.value.device_name) {
                    this.maxAmount = parseFloat(wallet.solde_device);
                    parseFloat(amount) <= parseFloat(wallet.solde_device) ? this.amounValid = true : this.amounValid = false;
                    this.translate.get('MAX_AMOUNT_MESSAGE').subscribe(trans => {
                        this.amountErrorMessage = `${trans} ${this.maxAmount} ${wallet.device_name}`;
                    });
                }
            });
        }
    }
    // ccheck if operator
    isOperator() {
        return this.paymentMethods && this.paymentMethods[this.currentIndex]
            && (this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY');
    }
    // check if it paypal
    isPayPal() {
        return this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name === 'PAYPAL';
    }
    // can make withdrawal
    canPay() {
        return !this.amounValid || (this.withdrawal.value.method_payment_id !== 0
            && !this.withdrawal.value.phoneNumber && this.paymentMethods && this.paymentMethods[this.currentIndex]
            && (this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY' || this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY'))
            || this.loading || this.withdrawal.invalid || (this.errorEmail && this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name === 'PAYPAL')
            || (this.errorPhone && this.paymentMethods && this.paymentMethods[this.currentIndex]
                && (this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY'));
    }
    // Get the list of countries
    getCountries(refresher) {
        this.states = [];
        this.location.getAllCountries(refresher).then((countries) => {
            countries.forEach(country => {
                if (country && country.active === 1) {
                    this.listOfcountries.push(country.country_id);
                    if (country.default_country === 'yes') {
                        this.defautCountry = country.country_id;
                    }
                }
            });
            this.states = this.paymentData.formatCountriesData(countries);
            this.getCurrentCountry(false);
        });
    }
    // Set defaulft country parameter
    setDefaultCountry(prefix, phone) {
        // Get the list of country
        let countryExist = false;
        this.listOfcountries.forEach(countryId => {
            if (countryId === this.withdrawal.value.country_id) {
                this.updateCountryPrefix(this.withdrawal.value.country_id);
                countryExist = true;
            }
        });
        // We set the default country
        if (!countryExist) {
            this.updateCountryPrefix(this.defautCountry);
        }
    }
    // Set the default country
    getCurrentCountry(refresher) {
        const userCountry = this.location.getCurrentUserCountry();
        if (userCountry) {
            if (userCountry.active === 1) {
                this.updateCountryPrefix(userCountry.country_id);
            }
            else {
                this.setDefaultCountry();
            }
        }
        else {
            this.location.getCurrentCountryInfo(refresher).then((country) => {
                if (country) {
                    if (country.settings.active === 1) {
                        this.updateCountryPrefix(country.settings.country_id);
                    }
                    else {
                        this.setDefaultCountry();
                    }
                }
                else {
                    this.setDefaultCountry();
                }
            }).catch(error => {
            });
        }
    }
    // Update the country
    updateCountryPrefix(currentCountry) {
        this.states.forEach(state => {
            if (state.country_id === currentCountry) {
                this.withdrawal.get('phoneid').setValue(state.country_prefixe);
                this.withdrawal.get('country_id').setValue(state.country_id);
            }
        });
    }
    // update the payment device
    updatePayment(paymentId) {
        let index = 0;
        this.paymentMethods.forEach(payment => {
            if (payment.id === paymentId && paymentId !== 0) {
                this.currentIndex = index;
                if (payment.name === 'PAYPAL') {
                    this.errorPhone = false;
                    this.checkEmail(this.withdrawal.value.email);
                }
                else {
                    this.errorEmail = false;
                    this.checkPhone(this.withdrawal.value.phoneNumber);
                }
                this.withdrawal.get('device_name').setValue(payment.currency);
            }
            else if (paymentId === 0) {
                this.currentIndex = index;
                this.errorEmail = false;
                this.errorPhone = false;
            }
            index++;
        });
    }
    // Get a bank detail informations
    getBankdetail(bankId) {
        this.withdrawal.get('tontine_bank_profile_id').setValue(bankId);
        this.bankList.forEach(bank => {
            if (bank.id === bankId) {
                this.withdrawal.get('bank_name').setValue(bank.bank_name);
                this.withdrawal.get('branch_name').setValue(bank.branch_name ? bank.branch_name : '');
                this.withdrawal.get('branch_code').setValue(bank.branch_code ? bank.branch_code : '');
                this.withdrawal.get('address').setValue(bank.address);
                this.withdrawal.get('account_name').setValue(bank.account_name);
                this.withdrawal.get('nom_proprietaire').setValue(bank.name_proprietaire);
                this.withdrawal.get('account_number').setValue(bank.account_number);
            }
        });
    }
    // get all payment method
    getAllMethodPaymentType() {
        this.userService.getAllMethodPaymentType().subscribe((reponse) => {
            this.paymentMethods = [];
            const paymentList = this.paymentData.filterPaymentMethodByDevise(reponse.typePayment, this.currentBalance);
            if (paymentList && paymentList.length > 0) {
                this.paymentMethods = this.paymentData.formatWithdrawData(paymentList);
            }
            this.translate.get('BANK_TRANSFER').subscribe(trans => {
                this.paymentMethods.push({
                    id: 0, country_id: 0,
                    logo: 'assets/wallet-icon.svg', name: trans, label: trans, currency: ''
                });
            });
            this.zone.run(() => {
                this.paymentMethods = this.paymentMethods;
            });
            // By default Select the fisrt element
            setTimeout(() => {
                this.withdrawal.get('method_payment_id').setValue(0);
                this.currentIndex = 0;
            }, 200);
            this.updatePayment(0);
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getAllMethodPaymentType();
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // check the number 
    checkNumberAndPin() {
        const user = this.userService.getUserSecret();
        if (this.withdrawal.value.phoneNumber === user.email_or_phone) {
            this.sendBankRequest();
        }
        else {
            this.ui.confirmPin(this.sendBankRequest);
        }
    }
    // Add a new account
    sendBankRequest() {
        this.loading = true;
        if (this.withdrawal.value.method_payment_id === 0) {
            this.withdrawal.get('direct_transfert_to_bank_account').setValue(1);
        }
        else {
            this.withdrawal.get('direct_transfert_to_bank_account').setValue(0);
            this.withdrawal.get('phone_number').setValue(this.withdrawal.value.phoneid + this.withdrawal.value.phoneNumber);
        }
        this.walletTontine.newWithdrawalRequest(this.withdrawal.value)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get(['BANK_REQUEST_SUBMIT', 'WITHDRAWAL_TEXT0', 'WITHDRAWAL_DEBIT_ORDER']).subscribe(trans => {
                    this.ui.presentAlert(trans.WITHDRAWAL_TEXT0, `${trans.BANK_REQUEST_SUBMIT} ${trans.WITHDRAWAL_DEBIT_ORDER} ${this.withdrawal.value.amount} ${this.withdrawal.value.device_name}`);
                });
                this.event.publish('wallet-withdrawal');
                this.getBankList();
                this.getCurrentBalance();
                this.initForm();
                this.getCountries(false);
                this.getCurrentCountry(false);
                this.navcontroler.setDirection('root');
                this.router.navigate(['dashboard', 'tontine', this.currentTontine.tontine.tontine_id, 'wallet']);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.sendBankRequest();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.walletError.manageWalletTontineError(error);
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Open add bank profile Modal
    openAddBank() {
        this.modatCtrl
            .create({
            component: _add_bank_profil_add_bank_profil_component__WEBPACK_IMPORTED_MODULE_6__["AddBankProfilComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                this.getBankList();
            });
        });
    }
    // Open update bank profile Modal
    openUpdateBank(param) {
        this.modatCtrl
            .create({
            component: _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_11__["UpdateBankProfilComponent"],
            componentProps: {
                data: param
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                this.getBankList();
            });
        });
    }
    // Confirm the delete message
    confirmDeleteAccount(bankId) {
        const translations = [];
        this.translate.get(['DELETE_BANK_INFO', 'DELETE_ACCOUNT_CONFIRMATION', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
            translations.push(trans.DELETE_BANK_INFO);
            translations.push(trans.DELETE_ACCOUNT_CONFIRMATION);
            translations.push(trans.CANCEL_TEXT);
            translations.push(trans.YES_TEXT);
            this.confirmMessage(translations, bankId);
        });
    }
    // Delete message
    confirmMessage(translations, bankId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `${translations[0]}`,
                message: `${translations[1]}`,
                buttons: [
                    {
                        text: `${translations[2]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: `${translations[3]}`,
                        handler: () => {
                            this.deleteAccount(bankId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Delete a new account
    deleteAccount(bankId) {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            tontine_bank_profile_id: bankId,
            token: this.token
        };
        this.loading = true;
        this.walletTontine.deleteTontineBankProfile(param)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('BANK_DELETE_SUCCESS_MESSAGE').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.getBankList();
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.deleteAccount(bankId);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.walletError.manageWalletTontineError(error);
                }
            }
            else {
                this.loading = false;
                this.error.manageError(error);
            }
        });
    }
};
WithdrawalPage.ctorParameters = () => [
    { type: _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_19__["WalletTontineErrorService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_13__["WalletTontineService"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_16__["PaymentGlobalDataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_12__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_17__["UiService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_20__["EventService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_14__["FormUtilsService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
WithdrawalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-withdrawal',
        template: _raw_loader_withdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_withdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WithdrawalPage);



/***/ }),

/***/ "WP3x":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/add-bank-profil/add-bank-profil.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddBankProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBankProfilComponent", function() { return AddBankProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-bank-profil.component.html */ "3G7+");
/* harmony import */ var _add_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-bank-profil.component.scss */ "NxUC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/wallet-tontine.service */ "0g9v");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/wallet-tontine-error.service */ "aZHn");














let AddBankProfilComponent = class AddBankProfilComponent {
    constructor(fb, translate, event, userService, tontine, error, ui, walletTontine, modatCtrl, walletError) {
        this.fb = fb;
        this.translate = translate;
        this.event = event;
        this.userService = userService;
        this.tontine = tontine;
        this.error = error;
        this.ui = ui;
        this.walletTontine = walletTontine;
        this.modatCtrl = modatCtrl;
        this.walletError = walletError;
        this.loading = false;
        this.token = this.userService.getUserToken();
        this.event.subscribe('new-token', token => {
            this.token = token;
        });
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() {
        this.initBankAccount();
    }
    get bank() {
        return this.addBankForm.get('bank_name');
    }
    get branchName() {
        return this.addBankForm.get('branch_name');
    }
    get branchCode() {
        return this.addBankForm.get('branch_code');
    }
    get proprietaryName() {
        return this.addBankForm.get('nom_proprietaire');
    }
    get accountNber() {
        return this.addBankForm.get('account_number');
    }
    get accountName() {
        return this.addBankForm.get('account_name');
    }
    get address() {
        return this.addBankForm.get('address');
    }
    initBankAccount() {
        this.addBankForm = this.fb.group({
            token: [this.token],
            tontine_id: [this.currentTontine.tontine.tontine_id],
            account_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nom_proprietaire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bank_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branch_code: [''],
            branch_name: [''],
            account_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    closeAddBank(result) {
        this.modatCtrl.dismiss(null, result);
    }
    // Add a new account
    addAccount() {
        this.loading = true;
        this.walletTontine.saveTontineBankProfile(this.addBankForm.value)
            .subscribe((reponse) => {
            console.log(reponse);
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('TONTINE_BANK_PROFIL_SUCCESS_MESSAGE').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.initBankAccount();
                this.closeAddBank('success');
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.addAccount();
                        }
                        else {
                            this.loading = false;
                            this.closeAddBank('cancel');
                        }
                    });
                }
                else {
                    this.closeAddBank('cancel');
                    this.walletError.manageWalletTontineError(error);
                }
            }
            else {
                this.closeAddBank('cancel');
                this.error.manageError(error);
            }
        });
    }
};
AddBankProfilComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__["UiService"] },
    { type: _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_8__["WalletTontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__["WalletTontineErrorService"] }
];
AddBankProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-bank-profil',
        template: _raw_loader_add_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddBankProfilComponent);



/***/ }),

/***/ "bUPR":
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/update-bank-profil/update-bank-profil.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: UpdateBankProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankProfilComponent", function() { return UpdateBankProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-bank-profil.component.html */ "MOJC");
/* harmony import */ var _update_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-bank-profil.component.scss */ "5CdL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/wallet-tontine.service */ "0g9v");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/wallet-tontine-error.service */ "aZHn");














let UpdateBankProfilComponent = class UpdateBankProfilComponent {
    constructor(fb, translate, alertController, userService, error, tontine, event, ui, walletTontine, modatCtrl, params, walletError) {
        this.fb = fb;
        this.translate = translate;
        this.alertController = alertController;
        this.userService = userService;
        this.error = error;
        this.tontine = tontine;
        this.event = event;
        this.ui = ui;
        this.walletTontine = walletTontine;
        this.modatCtrl = modatCtrl;
        this.params = params;
        this.walletError = walletError;
        this.loading = false;
        this.data = this.params.get('data');
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.token = this.userService.getUserToken();
        this.event.subscribe('new-token', token => {
            this.token = token;
        });
    }
    ngOnInit() {
        this.initBankAccount();
    }
    // Form getters
    get bank() {
        return this.addBankForm.get('bank_name');
    }
    get branchName() {
        return this.addBankForm.get('branch_name');
    }
    get branchCode() {
        return this.addBankForm.get('branch_code');
    }
    get accountName() {
        return this.addBankForm.get('account_name');
    }
    get proprietaryName() {
        return this.addBankForm.get('nom_proprietaire');
    }
    get accountNber() {
        return this.addBankForm.get('account_number');
    }
    get address() {
        return this.addBankForm.get('address');
    }
    // Init form
    initBankAccount() {
        const data = this.data;
        this.addBankForm = this.fb.group({
            token: [this.token],
            tontine_bank_profile_id: [data.tontine_bank_profile_id ? data.tontine_bank_profile_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tontine_id: [this.currentTontine.tontine.tontine_id],
            bank_name: [data.bank_name ? data.bank_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branch_name: [data.branch_name ? data.branch_name : ''],
            branch_code: [data.branch_code ? data.branch_code : ''],
            account_name: [data.account_name ? data.account_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nom_proprietaire: [data.nom_proprietaire ? data.nom_proprietaire : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            account_number: [data.account_number ? data.account_number : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [data.address ? data.address : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // close the modal
    closeAddBank(result) {
        this.modatCtrl.dismiss(null, result);
    }
    // confirm update
    confirmUpdateAccount() {
        const translations = [];
        this.translate.get(['UPDATE_BANK_INFO', 'UPDATE_ACCOUNT_CONFIRMATION', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
            translations.push(trans.UPDATE_BANK_INFO);
            translations.push(trans.UPDATE_ACCOUNT_CONFIRMATION);
            translations.push(trans.CANCEL_TEXT);
            translations.push(trans.YES_TEXT);
            this.confirnMessage(translations);
        });
    }
    // confirm th update 
    confirnMessage(translations) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `${translations[0]}`,
                message: `${translations[1]}`,
                buttons: [
                    {
                        text: `${translations[2]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: `${translations[3]}`,
                        handler: () => {
                            this.updateAccount();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Update a new account
    updateAccount() {
        this.loading = true;
        this.walletTontine.updateTontineBankProfile(this.addBankForm.value)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('BANK_UPDATE_SUCCESS_MESSAGE').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.initBankAccount();
                this.closeAddBank('success');
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updateAccount();
                        }
                        else {
                            this.loading = false;
                            this.closeAddBank('cancel');
                        }
                    });
                }
                else {
                    this.closeAddBank('cancel');
                    this.walletError.manageWalletTontineError(error);
                }
            }
            else {
                this.closeAddBank('cancel');
                this.error.manageError(error);
            }
        });
    }
};
UpdateBankProfilComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_8__["WalletTontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__["WalletTontineErrorService"] }
];
UpdateBankProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-bank-profil',
        template: _raw_loader_update_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateBankProfilComponent);



/***/ }),

/***/ "ht1O":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/withdrawal/withdrawal.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXRoZHJhd2FsLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=wallet-withdrawal-withdrawal-module.js.map