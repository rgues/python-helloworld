(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-wallet-withdrawal-withdrawal-module"],{

/***/ "+sni":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/withdrawal/withdrawal.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXRoZHJhd2FsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "BkUR":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/update-bank-profil/update-bank-profil.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UpdateBankProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankProfilComponent", function() { return UpdateBankProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-bank-profil.component.html */ "T9+2");
/* harmony import */ var _update_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-bank-profil.component.scss */ "FisT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_wallet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/wallet.service */ "68js");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-wallet/service/wallet-error.service */ "M78w");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");











let UpdateBankProfilComponent = class UpdateBankProfilComponent {
    constructor(fb, translate, alertController, error, ui, wallet, modatCtrl, params, walletError) {
        this.fb = fb;
        this.translate = translate;
        this.alertController = alertController;
        this.error = error;
        this.ui = ui;
        this.wallet = wallet;
        this.modatCtrl = modatCtrl;
        this.params = params;
        this.walletError = walletError;
        this.loading = false;
        this.data = this.params.get('data');
    }
    ngOnInit() {
        this.initBankAccount();
    }
    closeAddBank(result) {
        this.modatCtrl.dismiss(null, result);
    }
    initBankAccount() {
        const data = this.data;
        this.addBankForm = this.fb.group({
            user_bank_profile_id: [data.user_bank_profile_id ? data.user_bank_profile_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bank_name: [data.bank_name ? data.bank_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branch_name: [data.branch_name ? data.branch_name : ''],
            branch_code: [data.branch_code ? data.branch_code : ''],
            nom_proprietaire: [data.nom_proprietaire ? data.nom_proprietaire : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            account_number: [data.account_number ? data.account_number : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [data.address ? data.address : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
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
    get accountName() {
        return this.addBankForm.get('nom_proprietaire');
    }
    get accountNber() {
        return this.addBankForm.get('account_number');
    }
    get address() {
        return this.addBankForm.get('address');
    }
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
        this.wallet.updateBankProfile(this.addBankForm.value)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('BANK_UPDATE_SUCCESS_MESSAGE').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.initBankAccount();
                this.closeAddBank('success');
            }
            else {
                this.closeAddBank('cancel');
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
                            this.closeAddBank('cancel');
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.closeAddBank('cancel');
                    this.walletError.manageWalletError(error);
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
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _service_wallet_service__WEBPACK_IMPORTED_MODULE_6__["WalletService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_9__["WalletErrorService"] }
];
UpdateBankProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-bank-profil',
        template: _raw_loader_update_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateBankProfilComponent);



/***/ }),

/***/ "DQa2":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/add-bank-profil/add-bank-profil.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYmFuay1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FisT":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/update-bank-profil/update-bank-profil.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYmFuay1wcm9maWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "MUb+":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-wallet/add-bank-profil/add-bank-profil.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{ 'ADD_BANK_PROFIL_TEXT' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"addBankForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> {{ 'WITHDRAWAL_TEXT7' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"bank_name\" required></ion-input>\n          </ion-item> \n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"bank.invalid && (bank.dirty || bank.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'BANK_NAME_REQUIRED' | translate }}\n            </div>\n          </div>       \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label position=\"floating\">{{ 'BRANCH_NAME' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"branch_name\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"branchName.invalid && (branchName.dirty || branchName.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'BRANCH_NAME_REQUIRED' | translate }}\n            </div>\n          </div>  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label position=\"floating\">{{ 'BRANCH_CODE' | translate }}</ion-label>\n            <ion-input type=\"number\" formControlName=\"branch_code\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"branchCode.invalid && (branchCode.dirty || branchCode.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'BRANCH_CODE_REQUIRED' | translate }}\n            </div>\n          </div>  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> {{ 'WALLET_ACCOUNT_HOLDER_NAME' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"nom_proprietaire\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"accountName.invalid && (accountName.dirty || accountName.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'ACCOUNT_HOLDER_REQUIRED' | translate }}\n            </div>\n          </div>        \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{'WALLET_ACCOUNT_NUMBER' | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"account_number\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"accountNber.invalid && (accountNber.dirty || accountNber.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'ACCOUNT_NUMBER_REQUIRED' | translate }}\n            </div>\n          </div>        \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> {{'ADDRESS_TEXT' | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"address\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"address.invalid && (address.dirty || address.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'ADDRESS_REQUIRED' | translate }}\n            </div>\n          </div>        \n        </ion-col>\n      </ion-row>      \n    </ion-grid>\n  </form>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n    <ion-grid>\n      <ion-row>   \n        <ion-col>\n            <ion-button expand=\"full\" \n                  color=\"warning\" [disabled]=\"addBankForm.invalid || loading\"\n                  class=\"ion-text-uppercase\"\n                  shape=\"round\" (click)=\"addAccount()\">\n                  {{'SAVE_TEXT' | translate }}\n            </ion-button>\n        </ion-col>   \n        <ion-col>\n            <ion-button expand=\"full\" \n                  fill=\"outline\"\n                  color=\"warning\" \n                  class=\"ion-text-uppercase\"\n                  shape=\"round\" (click)=\"closeAddBank('cancel')\">\n              {{'CANCEL_TEXT' | translate }}\n            </ion-button>\n        </ion-col>\n      </ion-row>\n      <p class=\"ion-text-center\" *ngIf=\"loading\"> \n        <ion-spinner  name=\"circles\"></ion-spinner>\n      </p>\n    </ion-grid>\n  </ion-footer>");

/***/ }),

/***/ "MbOI":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/withdrawal/withdrawal.module.ts ***!
  \*********************************************************************/
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
/* harmony import */ var _withdrawal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withdrawal.page */ "dy96");
/* harmony import */ var _add_bank_profil_add_bank_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-bank-profil/add-bank-profil.component */ "wVEW");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../update-bank-profil/update-bank-profil.component */ "BkUR");









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

/***/ "T9+2":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-wallet/update-bank-profil/update-bank-profil.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{ 'ADD_BANK_PROFIL_TEXT' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"addBankForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> {{ 'WITHDRAWAL_TEXT7' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"bank_name\" required></ion-input>\n          </ion-item> \n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"bank.invalid && (bank.dirty || bank.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'BANK_NAME_REQUIRED' | translate }}\n            </div>\n          </div>       \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label position=\"floating\">{{ 'BRANCH_NAME' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"branch_name\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"branchName.invalid && (branchName.dirty || branchName.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'BRANCH_NAME_REQUIRED' | translate }}\n            </div>\n          </div>  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label position=\"floating\">{{ 'BRANCH_CODE' | translate }}</ion-label>\n            <ion-input type=\"number\" formControlName=\"branch_code\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"branchCode.invalid && (branchCode.dirty || branchCode.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'BRANCH_CODE_REQUIRED' | translate }}\n            </div>\n          </div>  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> {{ 'WALLET_ACCOUNT_HOLDER_NAME' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"nom_proprietaire\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"accountName.invalid && (accountName.dirty || accountName.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'ACCOUNT_HOLDER_REQUIRED' | translate }}\n            </div>\n          </div>        \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{'WALLET_ACCOUNT_NUMBER' | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"account_number\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"accountNber.invalid && (accountNber.dirty || accountNber.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'ACCOUNT_NUMBER_REQUIRED' | translate }}\n            </div>\n          </div>        \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> {{'ADDRESS_TEXT' | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"address\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <div class=\"error-message\" *ngIf=\"address.invalid && (address.dirty || address.touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              {{ 'ADDRESS_REQUIRED' | translate }}\n            </div>\n          </div>        \n        </ion-col>\n      </ion-row>      \n    </ion-grid>\n  </form>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n    <ion-grid>\n      <ion-row>   \n        <ion-col>\n            <ion-button expand=\"full\" \n                  color=\"warning\" [disabled]=\"addBankForm.invalid || loading\"\n                  class=\"ion-text-uppercase\"\n                  shape=\"round\" (click)=\"confirmUpdateAccount()\">\n                  {{'M_UPDATE' | translate }}\n            </ion-button>\n        </ion-col>   \n        <ion-col>\n            <ion-button expand=\"full\" \n                  fill=\"outline\"\n                  color=\"warning\" \n                  class=\"ion-text-uppercase\"\n                  shape=\"round\" (click)=\"closeAddBank('cancel')\">\n              {{'CANCEL_TEXT' | translate }}\n            </ion-button>\n        </ion-col>\n      </ion-row>\n      <p class=\"ion-text-center\" *ngIf=\"loading\"> \n        <ion-spinner  name=\"circles\"></ion-spinner>\n      </p>\n    </ion-grid>\n  </ion-footer>");

/***/ }),

/***/ "dy96":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/withdrawal/withdrawal.page.ts ***!
  \*******************************************************************/
/*! exports provided: WithdrawalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawalPage", function() { return WithdrawalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_withdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./withdrawal.page.html */ "kekQ");
/* harmony import */ var _withdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withdrawal.page.scss */ "+sni");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_bank_profil_add_bank_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-bank-profil/add-bank-profil.component */ "wVEW");
/* harmony import */ var _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../my-tontines/services/contribution.service */ "US41");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _service_wallet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/wallet.service */ "68js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../update-bank-profil/update-bank-profil.component */ "BkUR");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dashboard/my-wallet/service/wallet-error.service */ "M78w");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");




















let WithdrawalPage = class WithdrawalPage {
    constructor(contribution, wallet, modatCtrl, paymentData, ui, zone, translate, storage, fb, router, error, userService, location, formUtil, alertController, walletError) {
        this.contribution = contribution;
        this.wallet = wallet;
        this.modatCtrl = modatCtrl;
        this.paymentData = paymentData;
        this.ui = ui;
        this.zone = zone;
        this.translate = translate;
        this.storage = storage;
        this.fb = fb;
        this.router = router;
        this.error = error;
        this.userService = userService;
        this.location = location;
        this.formUtil = formUtil;
        this.alertController = alertController;
        this.walletError = walletError;
        this.states = [];
        this.bankList = [];
        this.currentIndex = 0;
        this.maxAmount = 0;
        this.currencyList = [];
        this.loading = false;
        this.amountErrorMessage = '';
        this.amounValid = true;
        this.paymentMethods = [];
        this.errorEmail = false;
        this.errorPhone = false;
        this.listOfcountries = [];
    }
    ngOnInit() {
        this.initForm();
        this.getBankList();
        this.getCurrentBalance();
    }
    // Form getters
    get phoneId() {
        return this.withdrawal.get('phoneid');
    }
    get countryId() {
        return this.withdrawal.get('country_id');
    }
    get beneficiary() {
        return this.withdrawal.get('nom_beneficiaire');
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
    get accountName() {
        return this.withdrawal.get('nom_proprietaire');
    }
    get accountNber() {
        return this.withdrawal.get('account_number');
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
    // Init the form
    initForm() {
        const currentUser = this.userService.getUserData();
        this.withdrawal = this.fb.group({
            method_payment_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            device_name: [''],
            direct_transfert_to_bank_account: [''],
            user_bank_profile_id: [''],
            nom_beneficiaire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)])],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            bank_name: [''],
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
        this.checkEmail(this.withdrawal.value.email);
    }
    // Refresh the list
    refreSher(event) {
        this.getBankList();
        this.getCurrentBalance();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
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
    // check if is operator
    isOperator() {
        return this.paymentMethods && this.paymentMethods[this.currentIndex] && (this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY');
    }
    // check if is paypal
    isPaypal() {
        return this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name === 'PAYPAL';
    }
    // can make disable the withdrawal
    canDisabledWithdrawal() {
        return !this.amounValid
            || (this.withdrawal.value.method_payment_id !== 0 && this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name !== 'PAYPAL' && !this.withdrawal.value.phoneNumber)
            || this.loading || this.withdrawal.invalid ||
            (this.errorEmail && this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name === 'PAYPAL')
            || (this.errorPhone && this.paymentMethods && this.paymentMethods[this.currentIndex] && (this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY'));
    }
    // Get the list of the bank
    getBankList() {
        this.wallet.getAllBank().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.bankList = [];
                reponse.bank.forEach(bank => {
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
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // get the current balamce of the user
    getCurrentBalance() {
        this.contribution.getUserWallet().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.currentBalance = reponse.PorteMonnaieUser;
                this.storage.set('current-balance', reponse.PorteMonnaieUser);
                this.getAllMethodPaymentType();
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getCurrentBalance();
                    }
                    else {
                        this.storage.get('current-balance').then(data => {
                            this.currentBalance = data ? data : [];
                        });
                    }
                });
            }
            else {
                this.storage.get('current-balance').then(data => {
                    this.currentBalance = data ? data : [];
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
    // Get the list of countries
    getCountries(refresher) {
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
                this.updateCountryPrefix(this.withdrawal.value.country_id, prefix, phone);
                countryExist = true;
            }
        });
        // We set the default country
        if (!countryExist) {
            this.updateCountryPrefix(this.defautCountry, prefix, phone);
        }
    }
    // Set the default country
    getCurrentCountry(refresher) {
        const userCountry = this.location.getCurrentUserCountry();
        const credentials = this.userService.getUserSecret();
        const prefix = credentials ? credentials.phone_prefix : '';
        const phone = credentials ? credentials.email_or_phone : '';
        if (userCountry) {
            if (userCountry.active === 1) {
                this.updateCountryPrefix(userCountry.country_id, prefix, phone);
            }
            else {
                this.setDefaultCountry(prefix, phone);
            }
        }
        else {
            this.location.getCurrentCountryInfo(refresher).then((country) => {
                if (country) {
                    if (country.settings.active === 1) {
                        this.updateCountryPrefix(country.settings.country_id, prefix, phone);
                    }
                    else {
                        this.setDefaultCountry(prefix, phone);
                    }
                }
                else {
                    this.setDefaultCountry(prefix, phone);
                }
            }).catch(error => {
            });
        }
    }
    // Update the country
    updateCountryPrefix(currentCountry, prefix, phone) {
        this.states.forEach(state => {
            if (state.country_id === currentCountry) {
                this.withdrawal.get('phoneid').setValue(state.country_prefixe);
                this.withdrawal.get('country_id').setValue(state.country_id);
                // set the default phone number
                if (state.country_prefixe === prefix && phone) {
                    this.withdrawal.get('phoneNumber').setValue(phone);
                    this.checkPhone(this.withdrawal.value.phoneNumber);
                }
            }
        });
    }
    // update the payment device
    updatePayment(paymentId) {
        let index = 0;
        this.paymentMethods.forEach(payment => {
            if (payment.id === paymentId && paymentId !== 0) {
                this.currentIndex = index;
                this.withdrawal.get('device_name').setValue(payment.currency);
                if (payment.name === 'PAYPAL') {
                    this.errorPhone = false;
                    this.checkEmail(this.withdrawal.value.email);
                }
                else {
                    this.errorEmail = false;
                    this.checkPhone(this.withdrawal.value.phoneNumber);
                }
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
        this.withdrawal.get('user_bank_profile_id').setValue(bankId);
        this.bankList.forEach(bank => {
            if (bank.id === bankId) {
                this.withdrawal.get('bank_name').setValue(bank.bank_name);
                this.withdrawal.get('branch_name').setValue(bank.branch_name ? bank.branch_name : '');
                this.withdrawal.get('branch_code').setValue(bank.branch_code ? bank.branch_code : '');
                this.withdrawal.get('address').setValue(bank.address);
                this.withdrawal.get('nom_proprietaire').setValue(bank.name_proprietaire);
                this.withdrawal.get('account_number').setValue(bank.account_number);
            }
        });
    }
    // get all payment method
    getAllMethodPaymentType() {
        this.userService.getAllMethodPaymentType().subscribe((reponse) => {
            this.paymentMethods = [];
            const paymentList = this.paymentData.filterPaymentMethodByCurrency(reponse.typePayment, this.currentBalance);
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
            this.currentIndex = 0;
            setTimeout(() => {
                this.withdrawal.get('method_payment_id').setValue(0);
            }, 200);
            this.updatePayment(0);
            this.getCountries(false);
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
            component: _update_bank_profil_update_bank_profil_component__WEBPACK_IMPORTED_MODULE_13__["UpdateBankProfilComponent"],
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
    confirmDeleteAccount(data) {
        const translations = [];
        this.translate.get(['DELETE_BANK_INFO', 'DELETE_ACCOUNT_CONFIRMATION', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
            translations.push(trans.DELETE_BANK_INFO);
            translations.push(trans.DELETE_ACCOUNT_CONFIRMATION);
            translations.push(trans.CANCEL_TEXT);
            translations.push(trans.YES_TEXT);
            this.confirmMessage(translations, data);
        });
    }
    // Delete message
    confirmMessage(translations, data) {
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
                            this.deleteAccount(data);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Delete a new account
    deleteAccount(data) {
        this.loading = true;
        this.wallet.DeleteBankProfile({ user_bank_profile_id: data })
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('BANK_DELETE_SUCCESS_MESSAGE').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.getBankList();
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_bank_profile_id_not_exist) {
                    this.translate.get('BANK_NAME_NOT_EXIST').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((ans) => {
                        if (ans && ans.result === "OK") {
                            this.deleteAccount(data);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.walletError.manageWalletError(error);
                }
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
        this.wallet.submitRequest(this.withdrawal.value)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get(['BANK_REQUEST_SUBMIT', 'WITHDRAWAL_TEXT0', 'WITHDRAWAL_DEBIT_ORDER']).subscribe(trans => {
                    this.ui.presentAlert(trans.WITHDRAWAL_TEXT0, `${trans.BANK_REQUEST_SUBMIT} ${trans.WITHDRAWAL_DEBIT_ORDER} ${this.withdrawal.value.amount} ${this.withdrawal.value.device_name}`);
                });
                this.getBankList();
                this.getCurrentBalance();
                this.initForm();
                this.getCountries(false);
                this.router.navigate(['dashboard/my-wallet/history']);
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
                    this.walletError.manageWalletError(error);
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
};
WithdrawalPage.ctorParameters = () => [
    { type: _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_7__["ContributionService"] },
    { type: _service_wallet_service__WEBPACK_IMPORTED_MODULE_9__["WalletService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_16__["PaymentGlobalDataService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_17__["UiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_18__["StorageData"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_11__["LocationService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_14__["FormUtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_15__["WalletErrorService"] }
];
WithdrawalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-withdrawal',
        template: _raw_loader_withdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_withdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WithdrawalPage);



/***/ }),

/***/ "kekQ":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-wallet/withdrawal/withdrawal.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-wallet\" slot=\"text-only\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n      <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'WALLET_TEXT1' | translate }}: <ion-text color=\"primary\" class=\"ion-text-capitalize\">{{ 'WITHDRAWAL_TEXT0' | translate }}</ion-text></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"withdrawal\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-card class=\"block-1\">\r\n            <ion-card-content class=\"ion-text-center\">\r\n              <ion-row>\r\n                <ion-col size=\"auto\" class=\"align-self-center\">\r\n                  <span class=\"desc\">{{ 'WALLET_TEXT2' | translate }} </span>\r\n                </ion-col>\r\n                <ion-col class=\"col-button\">\r\n                  <div class=\"menu-amount\">\r\n                    <span *ngFor=\"let balance of currentBalance; let i = index\"> {{(balance.solde_device | commadumper)}}\r\n                      {{balance.device_name}} <span *ngIf=\"currentBalance[i+1]\"> | </span></span>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <form [formGroup]=\"withdrawal\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle>\r\n                {{ 'M_WALLET_SELECT_TEXT' | translate }}\r\n                <ion-item>\r\n                  <ion-label>{{ 'M_PAY_BY' | translate }}</ion-label>\r\n                  <ion-select (ionChange)=\"updatePayment(withdrawal.value.method_payment_id)\"\r\n                    formControlName=\"method_payment_id\">\r\n                    <ion-select-option *ngFor=\"let operator of paymentMethods; let m=index\" [selected]=\"m===0\" [value]=\"operator.id\">{{ operator.label }}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-card-subtitle>\r\n              <ion-card-content>\r\n                <div *ngIf=\"withdrawal.value.method_payment_id === 0; then bankTransfer else mobilTransfer\"></div>\r\n                <ng-template #bankTransfer>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-text color=\"warning\">\r\n                        {{ 'WITHDRAWAL_TEXT10' | translate }}\r\n                      </ion-text>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0\">\r\n                        <ion-label>{{ 'TONTINE_DETAIL_TEXT2' | translate }}</ion-label>\r\n                        <ion-select (ionChange)=\"checkAmount(withdrawal.value.amount)\" formControlName=\"device_name\">\r\n                          <ion-select-option *ngFor=\"let currency of currentBalance\" [value]=\"currency.device_name\">\r\n                            {{ currency.device_name }}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"devise.invalid && (devise.dirty || devise.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{ 'CURRENCY_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col *ngIf=\"bankList && bankList.length > 0\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{'WALLET_AMOUNT_WITHDRAWAL' | translate}} \r\n                          <span *ngIf=\"withdrawal.value.device_name\">({{withdrawal.value.device_name}})</span></ion-label>\r\n                        <ion-input (ionChange)=\"checkAmount(withdrawal.value.amount)\" type=\"number\"\r\n                          formControlName=\"amount\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'AMOUNT_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"error-message\" *ngIf=\"!amounValid\">\r\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                        {{amountErrorMessage}}\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0\">\r\n                        <ion-label>{{ 'WITHDRAWAL_TEXT7' | translate }}</ion-label>\r\n                        <ion-select (ionChange)=\"getBankdetail(withdrawal.value.user_bank_profile_id)\"\r\n                          formControlName=\"user_bank_profile_id\">\r\n                          <ion-select-option *ngFor=\"let bank of bankList\" [value]=\"bank.id\">{{ bank.bank_name }}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\"  *ngIf=\"bankList && bankList.length > 0\">\r\n                        <div class=\"error-message\" *ngIf=\"bank.invalid && (bank.dirty || bank.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{ 'BANK_NAME_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                      <ion-text class=\"ion-float-right\"><a\r\n                          (click)=\"openAddBank($event)\">{{ 'WITHDRAWAL_TEXT9' | translate }}</a></ion-text>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.nom_proprietaire\">\r\n                        <ion-label position=\"floating\">{{ 'WALLET_ACCOUNT_HOLDER_NAME' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"nom_proprietaire\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\"\r\n                          *ngIf=\"accountName.invalid && (accountName.dirty || accountName.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'ACCOUNT_HOLDER_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.branch_name\">\r\n                        <ion-label position=\"floating\">{{ 'BRANCH_NAME' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"branch_name\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.branch_code\">\r\n                        <ion-label position=\"floating\">{{ 'BRANCH_CODE' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"branch_code\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.account_number\">\r\n                        <ion-label position=\"floating\">{{ 'WALLET_ACCOUNT_NUMBER' | translate }}</ion-label>\r\n                        <ion-input type=\"tel\" formControlName=\"account_number\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\"\r\n                          *ngIf=\"accountNber.invalid && (accountNber.dirty || accountNber.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'ACCOUNT_NUMBER_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item *ngIf=\"bankList && bankList.length > 0 && withdrawal.value.address\">\r\n                        <ion-label position=\"floating\">{{ 'ADDRESS_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"address\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"address.invalid && (address.dirty || address.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          {{'ACCOUNT_NUMBER_REQUIRED' | translate }}\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row *ngIf=\"bankList && bankList.length > 0\">   \r\n                    <ion-col size=\"6\" >\r\n                        <ion-button \r\n                              color=\"warning\" [disabled]=\"!withdrawal.value\"\r\n                              shape=\"round\" size=\"small\" (click)=\"openUpdateBank(withdrawal.value)\">\r\n                              {{'M_UPDATE' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>  \r\n                    <ion-col  size=\"6\" >\r\n                        <ion-button   [disabled]=\"!withdrawal.value.user_bank_profile_id\"\r\n                              fill=\"outline\"\r\n                              color=\"warning\" \r\n                              shape=\"round\" size=\"small\" (click)=\"confirmDeleteAccount(withdrawal.value.user_bank_profile_id)\">\r\n                          {{'TEXT_DELETE' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ng-template>\r\n                <ng-template #mobilTransfer>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item>\r\n                        <ion-label>{{ 'TONTINE_DETAIL_TEXT1' | translate }}</ion-label>\r\n                        <ion-select (ionChange)=\"updateCountryPrefix(withdrawal.value.country_id)\"\r\n                          formControlName=\"country_id\">\r\n                          <ion-select-option *ngFor=\"let state of states\" [value]=\"state.country_id\">\r\n                            {{ state.country_label }}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"countryId.invalid && (countryId.dirty || countryId.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'REQUIRED_FIELD_TEXT' | translate\"></span>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-row class=\"ion-justify-content-end\">\r\n                        <ion-col size=\"4\">\r\n                          <ion-img\r\n                            [src]=\"paymentMethods&&paymentMethods[currentIndex] ? paymentMethods[currentIndex].logo : ' '\"\r\n                            class=\"logooperator\"></ion-img>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row   *ngIf=\"!isPaypal()\">\r\n                    <ion-col size=\"4\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">+</ion-label>\r\n                        <ion-input type=\"text\" placeholder=\"{{withdrawal.value.phoneid}}\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'PHONE_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"tel\" (ionChange)=\"removeSpace1();checkPhone(withdrawal.value.phoneNumber)\" formControlName=\"phoneNumber\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" *ngIf=\"phone.invalid && (phone.dirty || phone.touched) || errorPhone\">\r\n                      <div class=\"validation-errors\">\r\n                          <div class=\"error-message\">\r\n                            <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                           <span  [innerHTML]=\"'REGISTER_PHONE_INVALID' | translate\"></span>\r\n                          </div>\r\n                      </div>    \r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row *ngIf=\"isOperator()\">\r\n                    <ion-col size=\"12\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'BENEFICIARY_ACCOUNT_NAME_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"text\"  formControlName=\"nom_beneficiaire\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"beneficiary.invalid && (beneficiary.dirty || beneficiary.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'BENEFICARY_NAME_ERROR_TEXT' | translate: {maxLength: 100}\"></span>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row *ngIf=\"isPaypal()\">\r\n                    <ion-col size=\"12\">\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'EMAIL_TEXT' | translate }}</ion-label>\r\n                        <ion-input type=\"email\" (ionChange)=\"checkEmail(withdrawal.value.email)\" formControlName=\"email\"></ion-input>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"email.invalid && (email.dirty || email.touched) || errorEmail\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'TONTINE_NEW_TEXT23' | translate\"></span>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-item>\r\n                        <ion-label position=\"floating\">{{ 'AMOUNT_TEXT' | translate }}</ion-label>\r\n                        <ion-input (ionChange)=\"checkAmount(withdrawal.value.amount)\" type=\"number\"\r\n                          formControlName=\"amount\">\r\n                        </ion-input>\r\n                        <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ withdrawal.value.device_name}} </span>\r\n                      </ion-item>\r\n                      <div class=\"validation-errors\">\r\n                        <div class=\"error-message\" *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\">\r\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                          <span [innerHTML]=\"'AMOUNT_REQUIRED' | translate\"></span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"error-message\" style=\"color: red;\" *ngIf=\"!amounValid\">\r\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                        {{amountErrorMessage}}\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ng-template>\r\n\r\n              </ion-card-content>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\"\r\n    [disabled]=\"canDisabledWithdrawal()\"\r\n    color=\"warning\" class=\"ion-text-uppercase\" (click)=\"checkNumberAndPin()\" shape=\"round\">\r\n    {{ 'WITHDRAWAL_TEXT8' | translate }}\r\n  </ion-button>\r\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n</ion-footer>");

/***/ }),

/***/ "wVEW":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/add-bank-profil/add-bank-profil.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddBankProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBankProfilComponent", function() { return AddBankProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-bank-profil.component.html */ "MUb+");
/* harmony import */ var _add_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-bank-profil.component.scss */ "DQa2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_wallet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/wallet.service */ "68js");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-wallet/service/wallet-error.service */ "M78w");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");











let AddBankProfilComponent = class AddBankProfilComponent {
    constructor(fb, translate, error, ui, wallet, modatCtrl, walletError) {
        this.fb = fb;
        this.translate = translate;
        this.error = error;
        this.ui = ui;
        this.wallet = wallet;
        this.modatCtrl = modatCtrl;
        this.walletError = walletError;
        this.loading = false;
    }
    ngOnInit() {
        this.initBankAccount();
    }
    closeAddBank(result) {
        this.modatCtrl.dismiss(null, result);
    }
    initBankAccount() {
        this.addBankForm = this.fb.group({
            bank_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branch_name: [''],
            branch_code: [''],
            nom_proprietaire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            account_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
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
    get accountName() {
        return this.addBankForm.get('nom_proprietaire');
    }
    get accountNber() {
        return this.addBankForm.get('account_number');
    }
    get address() {
        return this.addBankForm.get('address');
    }
    // Add a new account
    addAccount() {
        this.loading = true;
        this.wallet.saveBankProfile(this.addBankForm.value)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('BANK_PROFIL_SUCCESS_MESSAGE').subscribe(trans => {
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
                            this.closeAddBank('cancel');
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.closeAddBank('cancel');
                    this.walletError.manageWalletError(error);
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
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _service_wallet_service__WEBPACK_IMPORTED_MODULE_6__["WalletService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_9__["WalletErrorService"] }
];
AddBankProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-bank-profil',
        template: _raw_loader_add_bank_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_bank_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddBankProfilComponent);



/***/ })

}]);
//# sourceMappingURL=my-wallet-withdrawal-withdrawal-module.js.map