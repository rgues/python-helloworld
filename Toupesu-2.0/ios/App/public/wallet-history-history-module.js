(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-history-history-module"],{

/***/ "0dGT":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/history/history.page.ts ***!
  \*************************************************************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "H3VZ");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "SuoY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_wallet_my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dashboard/my-wallet/my-wallet-menu/my-wallet-menu.component */ "Jc16");
/* harmony import */ var _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/wallet-tontine.service */ "0g9v");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");













let HistoryPage = class HistoryPage {
    constructor(error, util, tontine, userService, storage, walletTontine, constant, popoverController) {
        this.error = error;
        this.util = util;
        this.tontine = tontine;
        this.userService = userService;
        this.storage = storage;
        this.walletTontine = walletTontine;
        this.constant = constant;
        this.popoverController = popoverController;
        this.activelistTransactions = [];
        this.nbItems = 10;
        this.user = this.userService.getUserData();
        this.loading = false;
        this.transactionFlux = '';
        this.transactionType = '';
        this.allData = [];
        this.backService = null;
        this.currentDate = new Date();
        this.filterData = [];
        this.filterDataType = [];
        this.filterIndex = -1;
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() {
        this.getDataFormStorage(null);
    }
    // filter by tontine
    filterTransType(index) {
        this.infiniteScroll.disabled = false;
        if (this.filterDataType[index] && index !== -1) {
            const transactions = [];
            this.filterData.forEach(tontine => {
                if (tontine.motif === this.filterDataType[index].type) {
                    transactions.push(tontine);
                }
            });
            this.allData = transactions;
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.activelistTransactions = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);
            }
        }
        else {
            this.activelistTransactions = this.allData;
        }
    }
    // Get the transaction type
    getTransactionFlux(type) {
        return this.constant.getTransactionType(type);
    }
    // Get the reason of transaction
    getTransactionType(reason) {
        return this.constant.getTransactionReason(reason);
    }
    // Get the list user tontines
    getTransactions(event) {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id
        };
        this.walletTontine.getWalletTransaction(param)
            .subscribe((reponse) => {
            if (reponse && reponse.transactions && reponse.transactions.length > 0) {
                this.allData = this.util.oderByUpdatedAt(reponse.transactions);
                this.filterData = this.allData;
                // Save to local storage
                this.setToStorage(this.allData);
                if (this.allData.length > this.nbItems) {
                    this.activelistTransactions = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);
                    }
                }
                else {
                    this.activelistTransactions = this.allData;
                }
            }
            this.loading = false;
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            this.loading = false;
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getTransactions(event);
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // set to local Stoirage
    setToStorage(data) {
        this.storage.set('app-wallet-tontines-trans', data);
    }
    getFromStorage() {
        return this.storage.get('app-wallet-tontines-trans');
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getTransactions(event);
    }
    // Get the data from session
    getDataFormStorage(event) {
        this.getFromStorage().then(data => {
            if (data && data.length > 0) {
                this.allData = data;
                if (this.allData.length > this.nbItems) {
                    this.activelistTransactions = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);
                    }
                }
                else {
                    this.activelistTransactions = this.allData;
                }
                this.getTransactions(event);
            }
            else {
                this.loading = true;
                this.getTransactions(event);
            }
        });
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.getTransactions(null);
        }, 300000 + (Math.ceil(Math.random() * 10) + 1) * 1000);
    }
    // Launch the backgroud service
    ionicViewWillLeave() {
        clearInterval(this.backService);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.activelistTransactions.length < this.allData.length) {
                    this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);
                }
                else if (this.activelistTransactions.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_dashboard_my_wallet_my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_6__["MyWalletMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageData"] },
    { type: _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_7__["WalletTontineService"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_9__["ConstantService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
HistoryPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryPage);



/***/ }),

/***/ "H3VZ":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/history/history.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + currentTontine.tontine.tontine_id + '/wallet'\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle ion-padding\">\r\n    <ion-title>{{ 'MENU_MY_WALLET' | translate }}: <ion-text color=\"primary\" class=\"ion-text-capitalize\">{{ 'HISTORY_PAGE_TITLE' | translate }}</ion-text></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <span *ngIf=\"!loading\">{{'TOTAL_TRANS_TEXT' | translate }}: {{activelistTransactions && activelistTransactions.length > 0 ? allData.length : activelistTransactions.length }}</span>\r\n        <ion-list>\r\n          <ion-item  *ngFor=\"let transaction of activelistTransactions\">                          \r\n            <ion-label>\r\n              <ion-text color=\"primary\"><h2><small>{{'TONTINE_USERS_TEXT5' | translate }}: </small><b>{{transaction.firstname ? transaction.firstname  : ''}} {{transaction.lastname ? transaction.lastname  : ''}}</b>\r\n                <span> \r\n                  <ion-icon [color]=\"transaction.status === 'entrant' ? 'success' :  'danger'\" [name]=\"transaction.status === 'entrant' ? 'arrow-back' :  'arrow-forward'\" ></ion-icon>\r\n                 </span>\r\n              </h2></ion-text>\r\n              <p><small>Ref.:</small>  {{transaction.reference_transaction ? transaction.reference_transaction : ''}}</p>              \r\n              <p><small>{{'DATE_TEXT' | translate }}: </small> {{transaction.updated_at ? transaction.updated_at : ''}} </p>                \r\n              <p>\r\n                <ion-text color=\"dark\">\r\n                  <span class=\"ion-float-left\"><small>{{'TYPE_TEXT' | translate }}: </small>{{transaction.status ? getTransactionFlux(transaction.status) : ''}}</span> \r\n                  <span class=\"ion-float-right\"><small>{{ 'REASON_TEXT' | translate}}: </small>{{transaction.status_transaction ? getTransactionType(transaction.status_transaction) : ''}}</span>\r\n                </ion-text>\r\n              </p>              \r\n              <h2><ion-text color=\"warning\"><small>{{'AMOUNT_TEXT' | translate}}: </small><b>{{transaction.amount ? transaction.amount : ''}} {{transaction.currency_name ? transaction.currency_name : ''}}</b></ion-text></h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"activelistTransactions && activelistTransactions.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'HISTORY_TEXT3' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Jss/":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/history/history.module.ts ***!
  \***************************************************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "0dGT");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
        ]
    })
], HistoryPageModule);



/***/ }),

/***/ "SuoY":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/history/history.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=wallet-history-history-module.js.map