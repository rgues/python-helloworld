(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-wallet-history-history-module"],{

/***/ "27e3":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/history/history.module.ts ***!
  \***************************************************************/
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
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "dvjl");
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

/***/ "HvrT":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/history/history.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "b7Ga":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-wallet/history/history.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-wallet\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"goDashboard()\">\r\n        <ion-icon name=\"home\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle ion-padding\">\r\n    <ion-title>{{ 'MENU_MY_WALLET' | translate }}: <ion-text color=\"primary\" class=\"ion-text-capitalize\">{{ 'HISTORY_PAGE_TITLE' | translate }}</ion-text></ion-title>\r\n    <ion-row *ngIf=\"filterDataType && filterDataType.length > 0 && filterData && filterData.length > 0\">\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>{{ 'M_CHOOSE_MOTIF' | translate }} : </ion-label>\r\n          <ion-select (ionChange)=\"filterTransType(filterIndex)\" [(ngModel)]=\"filterIndex\">\r\n            <ion-select-option [value]=\"-1\" >{{'ALL_TRANSACTIONS' | translate }}</ion-select-option>\r\n            <ion-select-option [value]=\"i\" *ngFor=\"let filter of filterDataType; let i = index\">\r\n              <small> {{filter.trans}}</small> \r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-list>\r\n    <ion-item  *ngFor=\"let transaction of activelistTransactions\">                                  \r\n      <ion-label>\r\n        \r\n        <ion-text *ngIf=\"transaction&&transaction.method_payment\"  color=\"primary\">\r\n            <h2><b>{{ transaction.method_payment ? (transaction.method_payment | translate) : ''}}</b>\r\n              <span> \r\n                <ion-icon [color]=\"transaction.status === 'entrant' ? 'success' :  'danger'\" [name]=\"transaction.status === 'entrant' ? 'arrow-back' :  'arrow-forward'\" ></ion-icon>\r\n               </span>\r\n            </h2>\r\n           \r\n        </ion-text>\r\n        <p><small>Ref.:</small>   {{transaction.reference_transaction ? transaction.reference_transaction : ''}}</p>      \r\n        <p *ngIf=\"transaction&&transaction.tontine_name\"><small> {{ 'M_TONTINE_TEXT' | translate }}  : </small>  {{ transaction.tontine_name ?  transaction.tontine_name  : ''}}</p>                \r\n        <p><small>{{'DATE_TEXT' | translate }}: </small> {{transaction.updated_at ? transaction.updated_at.split(' ')[0] : ''}} </p>  \r\n        <p>\r\n          <ion-text color=\"dark\">\r\n            <span class=\"ion-float-left\"><small>{{'TYPE_TEXT' | translate }}: </small>{{transaction.status ? getTransactionType(transaction.status) : ''}}</span>\r\n            <span class=\"ion-float-right\"><small>{{ 'REASON_TEXT' | translate}}: </small>{{transaction.motif ?getTransactionFlux(transaction.motif) : ''}}</span> \r\n          </ion-text>\r\n        </p>     \r\n      \r\n        <h2><ion-text color=\"warning\"><small>{{'AMOUNT_TEXT' | translate}}: </small><b>{{transaction.somme ? (transaction.somme | commadumper) : ''}} {{transaction.device_name ? transaction.device_name : ''}}</b> </ion-text></h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div  *ngIf=\"activelistTransactions && activelistTransactions.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'HISTORY_TEXT3' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "dvjl":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/history/history.page.ts ***!
  \*************************************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "b7Ga");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "HvrT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-wallet-menu/my-wallet-menu.component */ "Jc16");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../my-tontines/services/contribution.service */ "US41");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");












let HistoryPage = class HistoryPage {
    constructor(error, userService, storage, contribution, navController, constant, router, popoverController) {
        this.error = error;
        this.userService = userService;
        this.storage = storage;
        this.contribution = contribution;
        this.navController = navController;
        this.constant = constant;
        this.router = router;
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
    }
    ngOnInit() {
        this.getDataFormStorage(null);
        this.getTransactionTypeFilter();
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
    getTransactionFlux(motif) {
        return this.constant.getTransactionReason(motif);
    }
    // Get the reason of transaction
    getTransactionType(statut) {
        return this.constant.getTransactionType(statut);
    }
    // Get the reason of transaction translation
    getTransactionTypeFilter() {
        this.constant.getTransactionReasonTranslation().subscribe(transactionReason => {
            this.filterDataType = transactionReason;
        });
    }
    // Go to the dashboard
    goDashboard() {
        this.navController.setDirection('root');
        this.router.navigate(['/dashboard']);
    }
    // Get the list user tontines
    getTransactions(event) {
        this.contribution.historiqueTransactionUtilsateurFromToken().subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.trace && reponse.trace.length > 0) {
                if (reponse && reponse.trace) {
                    this.allData = reponse.trace;
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
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            this.loading = false;
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
        this.storage.set('app-wallet-trans', data);
    }
    getFromStorage() {
        return this.storage.get('app-wallet-trans');
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
                component: _my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_5__["MyWalletMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageData"] },
    { type: _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_7__["ContributionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_9__["ConstantService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
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



/***/ })

}]);
//# sourceMappingURL=my-wallet-history-history-module.js.map