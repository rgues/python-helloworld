(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-my-list-loans-my-list-module"],{

/***/ "QW9a":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my-list/loans-my-list.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',currentTontine.tontine.tontine_id,'loans']\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n      {{'MY_LOANS_TEXT' | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"all-my-loans\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid *ngIf=\"!loading\">\r\n    <div class=\"block-1\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"ion-padding-vertical\">\r\n              <strong><small>{{ 'CYCLE_TEXT' | translate }}/{{ 'SESSION_TEXT' | translate }} \r\n                : {{infoCycle ? infoCycle.numerocycle : 0}}/ {{infoSeance ? infoSeance.numero_seance : 0}}</small></strong>           \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-1\">\r\n        <ion-col size=\"4\" class=\"ion-text-center\">\r\n          <b>{{ 'LOANS_TEXT' | translate }}<br/> {{ 'DUE_TEXT' | translate }} ({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</b><br/>\r\n          {{getLoanDueAmount()}}\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-center\">\r\n          <b>{{ 'LOANS_TEXT' | translate }}<br/> {{ 'PAIDED_TEXT' | translate }} ({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</b><br/> \r\n          {{getLoanPaidAmount()}}\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-center\">\r\n          <b>{{ 'LOANS_TEXT' | translate }}<br/> {{ 'REMAIN_TEXT' |  translate }} ({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }}) </b> : <br/> \r\n          {{getLoanRemainAmount()}} \r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-2\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-md>\r\n          <ion-text color=\"primary\"><h4 class=\"ion-no-margin\">{{ 'LOANS_GRAPH_TEXT' | translate}}</h4></ion-text>      \r\n          <div class=\"donut-wrap\">\r\n            <div  [class]=\"(getPercentage(getLoanPaidPercentage()))\">\r\n              <div class=\"donut-text\">\r\n                <small>{{ 'INTEREST_GENERATE' | translate }}({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</small>\r\n                <p>{{getInterestGenerate() }}</p>\r\n              </div>\r\n            </div>\r\n            <span class=\"tooltip\" tooltip=\"(getLoanPaidPercentage())%\">{{ 'PAID_TEXT' | translate }}</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-md>\r\n          <div class=\"donut-legend ion-padding-horizontal\">\r\n            <p class=\"legend-color1\"><small>{{ 'LOAN_TEXT' | translate }}  {{ 'PAID_TEXT' | translate }}:</small> <br/> <span>{{getLoanPaidPercentage()}}%</span> </p>\r\n            <p class=\"legend-color2\"><small>{{ 'LOAN_TEXT' | translate }} {{ 'REMAIN_TEXT' |  translate }}:</small><br/> <span>{{getLoanRemainPercentage()}}%</span></p>\r\n            <p *ngIf=\"currentLoan && currentLoan.interest_target\"><small>{{ 'INTEREST_TARGET' | translate }}: </small> <span class=\"font-weight-bolder\">{{currentLoan ? (currentLoan.interest_target | commadumper) + ' ' + (currentTontine.tontine ? currentTontine.tontine.monnaie : '') : ('NOT_SET' | translate)}}</span> </p>\r\n            <p *ngIf=\"currentTontine && currentTontine.tontine && currentTontine.tontine.type_of_target_loan\"><small>{{ 'LOAN_TARGET_PER_CYCLE' | translate }}: </small> <span class=\"font-weight-bolder\">{{currentTontine.tontine ? (currentTontine.tontine.value_type_of_target | commadumper) + ' ' + ( currentTontine.tontine ? currentTontine.tontine.monnaie : '') : ('NOT_SET' | translate)}}</span> </p>\r\n            <p><small>{{ 'DAYS_LEFT_TEXT' | translate }}: </small> <span class=\"font-weight-bolder\">{{currentLoan ? currentLoan.days_left : 0}}</span> </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-3\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text color=\"primary\"><h4 class=\"ion-no-margin\">{{ 'CREDIT_LINE_APPROVE_TEXT' | translate }} ({{allData ? allData.length  : 0}})</h4></ion-text> \r\n          <ion-list>\r\n            <ion-item  *ngFor=\"let item of currentLoanData\" [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'loans', 'my-loans', item.infos_cycle.id, item.infos_seance.id]\" detail>\r\n              <ion-label>\r\n                <p>                \r\n                  <span class=\"ion-float-left\"><small>{{ 'CYCLE_TEXT' | translate }}/{{ 'SESSION_TEXT' | translate }}  </small>{{item.infos_cycle.numerocycle}}/{{item.infos_seance.numero_seance}}</span>\r\n                  <span class=\"ion-float-right\"><b><small> {{ 'DATE_TEXT' | translate }}: </small>{{item && item.infos_seance ? (item.infos_seance.date_debut | toDateObj | date : 'mediumDate') : '' }}</b></span> \r\n                </p>\r\n                <ion-text color=\"primary\"><h2><small> {{ 'AMOUNT_TEXT' | translate }}:</small> {{item ? (getLoanSeanceAmount(item) | commadumper) : 0 }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }} </h2></ion-text>  \r\n                <ion-text color=\"dark\"><h3>(<small>{{ 'INTEREST_DUE_TEXT' | translate }}:</small> {{item ? (getInterestDueAmount(item) | commadumper) : 0 }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</h3></ion-text>  \r\n                <p>                \r\n                  <span class=\"ion-float-left\"><small> {{ 'PAID_TEXT' | translate }} : </small> {{item ? (item.loan_paid | commadumper) : 0 }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }}</span>\r\n                  <span class=\"ion-float-right\"><ion-text color=\"danger\"><b><small>{{ 'REMAIN_TEXT' |  translate }}: </small>{{item ? (item.loan_remain | commadumper) : 0 }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }}</b></ion-text></span> \r\n                </p>\r\n              </ion-label>\r\n            </ion-item>\r\n       \r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "b0Jq":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my-list/loans-my-list.page.ts ***!
  \************************************************************************************************/
/*! exports provided: LoansMyListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansMyListPage", function() { return LoansMyListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_my_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-my-list.page.html */ "QW9a");
/* harmony import */ var _loans_my_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-my-list.page.scss */ "moJi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/api.service */ "6rCG");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/loan-global-data.service */ "2o4a");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");













let LoansMyListPage = class LoansMyListPage {
    constructor(tontine, api, util, events, loanService, loanData, loanError, error) {
        this.tontine = tontine;
        this.api = api;
        this.util = util;
        this.events = events;
        this.loanService = loanService;
        this.loanData = loanData;
        this.loanError = loanError;
        this.error = error;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentLoan = null;
        this.creditLineApprove = [];
        this.creditLineApprovePaid = [];
        this.interestsDue = [];
        this.infoSeance = null;
        this.infoCycle = null;
        this.loading = false;
        this.allData = [];
        this.nbItems = 10;
        this.events.subscribe('loans-paid', () => {
            this.loading = true;
            this.getLoanData(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getLoanData(null);
    }
    // Get the loans data
    getLoanData(event) {
        if (this.currentTontine && this.currentTontine.cycle_courant) {
            const param = {
                tontine_id: this.currentTontine.tontine.tontine_id,
                cycle_id: this.currentTontine.cycle_courant.id
            };
            this.loanService.getMemberLoanDashBordCycle(param).subscribe((data) => {
                if (data && data.message === 'success' && data.liste_my_loan.length > 0) {
                    this.allData = this.util.orderBySeanceKeyUp(data.liste_my_loan);
                    this.currentLoan = this.allData[0];
                    this.infoSeance = this.currentLoan.infos_seance;
                    this.infoCycle = this.currentLoan.infos_cycle;
                    if (this.allData.length > this.nbItems) {
                        this.currentLoanData = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.currentLoanData.push(this.allData[this.currentLoanData.length]);
                        }
                    }
                    else {
                        this.currentLoanData = this.allData;
                    }
                }
                this.loading = false;
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
                if (error && error.error && error.error.message === "error") {
                    if (error && error.error && error.error.user_not_found) {
                        this.loading = true;
                        this.error.renewSession().then((data) => {
                            if (data && data.result === 'OK') {
                                this.getLoanData(event);
                            }
                            else {
                                this.loading = false;
                            }
                        });
                    }
                    else {
                        this.loanError.manageLoanError(error);
                    }
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            if (event) {
                event.target.complete();
            }
            this.loading = false;
        }
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getLoanData(event);
    }
    // get the cumule of loan due
    getLoanDueAmount() {
        return this.loanData.getLoanDueAmount(this.allData);
    }
    // get the cumule of loan paid
    getLoanPaidAmount() {
        return this.loanData.getLoanPaidAmount(this.allData);
    }
    // get the cumule of loan remain
    getLoanRemainAmount() {
        const loanDue = this.getLoanDueAmount();
        const loanPaid = this.getLoanPaidAmount();
        return loanDue - loanPaid;
    }
    // get interest generate
    getInterestGenerate() {
        return this.loanData.getInterestGenerate(this.allData);
    }
    // get loan paid percentage
    getLoanPaidPercentage() {
        const loanPaid = this.getLoanPaidAmount();
        const loanDue = this.getLoanDueAmount();
        return loanDue > 0 ? parseFloat(Number((loanPaid / loanDue) * 100).toFixed(0)) : 0;
    }
    // get loan paid percentage
    getLoanRemainPercentage() {
        let loanPaidPercent = this.getLoanPaidPercentage();
        return (100 - loanPaidPercent);
    }
    // Get all amount of a loan seance
    getLoanSeanceAmount(loanDue) {
        return this.loanData.getLoanSeanceAmount(loanDue);
    }
    // Get all amount of a loan seance
    getInterestDueAmount(loanDue) {
        return this.loanData.getInterestDueAmount(loanDue);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.currentLoanData.length < this.allData.length) {
                    this.currentLoanData.push(this.allData[this.currentLoanData.length]);
                }
                else if (this.currentLoanData.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    getPercentage(data) {
        return this.loanService.getPercentage(data);
    }
};
LoansMyListPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_10__["LoanService"] },
    { type: _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_9__["LoanGlobalDataService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_7__["LoanErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] }
];
LoansMyListPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
LoansMyListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-my-list',
        template: _raw_loader_loans_my_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_my_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansMyListPage);



/***/ }),

/***/ "jWl+":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my-list/loans-my-list.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: LoansMyListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansMyListPageModule", function() { return LoansMyListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_my_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans-my-list.page */ "b0Jq");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _loans_my_list_page__WEBPACK_IMPORTED_MODULE_6__["LoansMyListPage"]
    }
];
let LoansMyListPageModule = class LoansMyListPageModule {
};
LoansMyListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_loans_my_list_page__WEBPACK_IMPORTED_MODULE_6__["LoansMyListPage"]]
    })
], LoansMyListPageModule);



/***/ }),

/***/ "moJi":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my-list/loans-my-list.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1teS1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=loans-my-list-loans-my-list-module.js.map