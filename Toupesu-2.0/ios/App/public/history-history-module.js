(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "0UDt":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/history/history.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-tontines/tontinId\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"ion-padding\">\r\n      {{ 'TRANSACTIONS_HISTORY' | translate }} ({{ tontinesHistory.length}})\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <form [formGroup]=\"periodForm\">\r\n      <ion-grid class=\"header-search-bg\">\r\n        <ion-row>\r\n          <ion-col size=\"5\">\r\n            <ion-item>\r\n              <ion-label>{{'DATE_START' | translate }}</ion-label>\r\n              <ion-datetime formControlName=\"dateStart\" displayFormat=\"D MMM, YYYY\" [min]=\"currentDate.getFullYear()\"  pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"5\">\r\n            <ion-item>\r\n              <ion-label>{{'DATE_END' | translate }}</ion-label>\r\n              <ion-datetime [disabled]=\"startOn.invalid\" formControlName=\"dateEnd\" displayFormat=\"D MMM, YYYY\" [min]=\"currentDate.getFullYear()\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-buttons class=\"edit-btn\">\r\n              <ion-button [disabled]=\"periodForm.invalid\" (click)=\"filterByDate(periodForm.value)\">\r\n                <ion-icon slot=\"icon-only\" name=\"search\" color=\"warning\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>            \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  id=\"history\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid  *ngIf=\"!loading\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <span *ngIf=\"!loading\">{{'TOTAL_TRANS_TEXT' | translate }}: {{tontinesHistory && tontinesHistory.length > 0 ? allData.length : tontinesHistory.length }}</span>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let transaction of tontinesHistory\">                          \r\n            <ion-label>\r\n              <ion-text color=\"primary\"><h2><small>{{'TONTINE_USERS_TEXT5' | translate }}: </small><b>{{transaction.firstname ? transaction.firstname : ''}} {{transaction.lastname ? transaction.lastname : ''}}</b>\r\n                <span> \r\n                  <ion-icon [color]=\"transaction.status === 'entrant' ? 'success' :  'danger'\" [name]=\"transaction.status === 'entrant' ? 'arrow-back' :  'arrow-forward'\" ></ion-icon>\r\n                 </span>\r\n              </h2></ion-text>\r\n              <p><small>Ref.:</small>  {{transaction.reference_transaction ? transaction.reference_transaction : ''}}</p>              \r\n              <p><small>{{'DATE_TEXT' | translate }}: </small> {{transaction.updated_at ? transaction.updated_at : ''}} </p>                \r\n              <p>\r\n                <ion-text color=\"dark\">\r\n                  <span class=\"ion-float-left\"><small>{{'TYPE_TEXT' | translate }}: </small>{{transaction.status ? getTransactionFlux(transaction.status) : ''}}</span> \r\n                  <span class=\"ion-float-right\"><small>{{ 'REASON_TEXT' | translate}}: </small>{{transaction.motif ? getTransactionType(transaction.motif) : ''}}</span>\r\n                </ion-text>\r\n              </p>              \r\n              <h2><ion-text color=\"warning\"><small>{{'AMOUNT_TEXT' | translate}}: </small><b>{{transaction.somme ? (transaction.somme | commadumper) : ''}} {{transaction.device_name ? transaction.device_name : ''}}</b></ion-text></h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div  *ngIf=\"tontinesHistory && tontinesHistory.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'HISTORY_TEXT3' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "pqos":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/history/history.page.ts ***!
  \******************************************************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "0UDt");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "tdzd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/contribution.service */ "US41");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");















let HistoryPage = class HistoryPage {
    constructor(fb, tontine, util, dateService, events, storage, error, userService, contribution, constant) {
        this.fb = fb;
        this.tontine = tontine;
        this.util = util;
        this.dateService = dateService;
        this.events = events;
        this.storage = storage;
        this.error = error;
        this.userService = userService;
        this.contribution = contribution;
        this.constant = constant;
        this.transactionType = '';
        this.transactionFlux = '';
        this.loading = false;
        this.tontinesHistory = [];
        this.typesTontines = [];
        this.transactionsTemp = [];
        this.tontineCountryName = '';
        this.tontineFrequencyName = '';
        this.tontineTypeName = '';
        this.tontinId = this.currentTontine ? this.currentTontine.tontine.tontine_id : '';
        this.currentDate = new Date();
        this.allData = [];
        this.nbItems = 10;
        this.backService = null;
        this.events.subscribe('new-tontine', () => {
            this.loading = true;
            this.refreSher(null);
        });
        this.user = this.userService.getUserData();
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() {
        this.initPeriodForm();
        this.loading = true;
        this.getDataFormStorage(null);
    }
    // Init form
    initPeriodForm() {
        this.periodForm = this.fb.group({
            dateStart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateEnd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    get startOn() {
        return this.periodForm.get('dateStart');
    }
    get endOn() {
        return this.periodForm.get('dateEnd');
    }
    // Get the reason of transaction
    getTransactionType(reason) {
        return this.constant.getTransactionReason(reason);
    }
    // Get the transaction type
    getTransactionFlux(type) {
        return this.constant.getTransactionType(type);
    }
    // Filter the history by date
    filterByDate(formData) {
        this.infiniteScroll.disabled = false;
        this.loading = true;
        const filterResult = [];
        const begin = this.dateService.formatDateTiret(formData.dateStart);
        const end = this.dateService.formatDateTiret(formData.dateEnd);
        const DateBegin = new Date(begin);
        const DateEnd = new Date(end);
        this.transactionsTemp.forEach(trans => {
            if (trans.updated_at) {
                const dateTrans = new Date(this.dateService.formatDateTiret(trans.updated_at));
                if (trans && DateBegin <= dateTrans && dateTrans <= DateEnd) {
                    filterResult.push(trans);
                }
            }
        });
        setTimeout(() => {
            this.loading = false;
        }, 5000);
        this.allData = filterResult;
        if (this.allData.length > this.nbItems) {
            this.tontinesHistory = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
            }
        }
        else {
            this.tontinesHistory = this.allData;
        }
    }
    // Get the list history tontines
    getHistoryTontines(event) {
        const tontineData = this.tontine.getCurrentTontineData();
        this.contribution.historiqueTransactionTontine(tontineData.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.trace) {
                if (reponse && reponse.trace) {
                    this.allData = this.util.oderByNotificationDate(reponse.trace);
                    this.transactionsTemp = reponse.trace;
                    // Save to local storage
                    // this.setToStorage(this.allData);
                    if (this.allData.length > this.nbItems) {
                        this.tontinesHistory = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
                        }
                    }
                    else {
                        this.tontinesHistory = this.allData;
                    }
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
                        this.getHistoryTontines(event);
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
        this.storage.set('app-tontine-trans', data);
    }
    getFromStorage() {
        return this.storage.get('app-tontine-trans');
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getHistoryTontines(event);
    }
    // Get the data from session
    getDataFormStorage(event) {
        this.getFromStorage().then(data => {
            if (data && data.length > 0) {
                this.allData = data;
                if (this.allData.length > this.nbItems) {
                    this.tontinesHistory = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
                    }
                }
                else {
                    this.tontinesHistory = this.allData;
                }
                this.loading = false;
                this.getHistoryTontines(event);
            }
            else {
                this.getHistoryTontines(event);
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
            this.getHistoryTontines(null);
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
                if (this.tontinesHistory.length < this.allData.length) {
                    this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
                }
                else if (this.tontinesHistory.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
};
HistoryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_13__["DateserviceService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_14__["EventService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageData"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_7__["ContributionService"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_9__["ConstantService"] }
];
HistoryPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"], { static: false },] }]
};
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryPage);



/***/ }),

/***/ "tdzd":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/history/history.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "tlb9":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/history/history.module.ts ***!
  \********************************************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.page */ "pqos");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_4__["HistoryPage"]
    }
];
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_4__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map