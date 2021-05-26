(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-top-up-top-up-module"],{

/***/ "+4ua":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/top-up/top-up.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TopUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpPageModule", function() { return TopUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _top_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-up.page */ "JqKL");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _top_up_page__WEBPACK_IMPORTED_MODULE_6__["TopUpPage"]
    }
];
let TopUpPageModule = class TopUpPageModule {
};
TopUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_top_up_page__WEBPACK_IMPORTED_MODULE_6__["TopUpPage"]]
    })
], TopUpPageModule);



/***/ }),

/***/ "JqKL":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/top-up/top-up.page.ts ***!
  \***********************************************************************************/
/*! exports provided: TopUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpPage", function() { return TopUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-up.page.html */ "pSxk");
/* harmony import */ var _top_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-up.page.scss */ "N38s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/wallet-tontine.service */ "0g9v");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");










let TopUpPage = class TopUpPage {
    constructor(tontine, error, storage, translate, ui, walletTontine) {
        this.tontine = tontine;
        this.error = error;
        this.storage = storage;
        this.translate = translate;
        this.ui = ui;
        this.walletTontine = walletTontine;
        this.loading = false;
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() {
        this.loading = true;
        this.getWalletData(null);
    }
    // Get the wallet data
    getWalletData(event) {
        const param = { tontine_id: this.currentTontine.tontine.tontine_id };
        this.walletTontine.getTontineWallet(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.walletTontines = reponse.infos_wallet;
                this.storage.set(`tontine-wallet${param.tontine_id}`, { solde: this.walletTontines, caisse: reponse.detail_caisse });
            }
            if (event) {
                event.target.complete();
            }
            this.loading = false;
        }, error => {
            this.loading = false;
            if (event) {
                event.target.complete();
            }
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
                            this.getWalletData(event);
                        }
                        else {
                            this.loading = false;
                            this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                                this.walletTontines = walletData ? walletData.solde : [];
                            });
                        }
                    });
                }
            }
            else {
                this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                    this.walletTontines = walletData ? walletData.solde : [];
                });
                this.error.manageError(error);
            }
        });
    }
    // refresh the wallet
    refreSher(event) {
        this.getWalletData(event);
    }
};
TopUpPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageData"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_4__["WalletTontineService"] }
];
TopUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-up',
        template: _raw_loader_top_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopUpPage);



/***/ }),

/***/ "N38s":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/top-up/top-up.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtdXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "pSxk":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/top-up/top-up.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/'+ currentTontine.tontine.tontine_id +'/wallet'\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'WALLET_TEXT' | translate }} <small *ngIf=\"walletTontines && walletTontines[0] && walletTontines[0].currency_name\">({{walletTontines[0].currency_name}})</small>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title><ion-text color=\"primary\" class=\"ion-text-capitalize\">{{ 'TONTINE_LIST_TEXT10' | translate }}</ion-text></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-topup\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-card class=\"block-1\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row>\r\n              <ion-col size=\"auto\" class=\"align-self-center\">\r\n                <span class=\"desc\">{{ 'WALLET_TEXT2' | translate }} </span>\r\n              </ion-col>\r\n              <ion-col class=\"col-button\">                  \r\n                <div class=\"menu-amount\"><span *ngIf=\"walletTontines && walletTontines[0] && walletTontines[0].currency_name\">{{walletTontines && walletTontines[0] ? walletTontines[0].total_balance : 0}} {{walletTontines[0].currency_name}}</span> </div>\r\n              </ion-col>\r\n            </ion-row>            \r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>     \r\n    </ion-col>\r\n  </ion-row>\r\n  <app-paidmode-tontine></app-paidmode-tontine>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=wallet-top-up-top-up-module.js.map