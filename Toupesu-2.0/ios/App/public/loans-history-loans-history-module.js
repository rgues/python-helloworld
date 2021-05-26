(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-history-loans-history-module"],{

/***/ "2DsC":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-history/loans-history.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "3mkn":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-history/loans-history.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: LoansHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansHistoryPageModule", function() { return LoansHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans-history.page */ "tMNp");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _loans_history_page__WEBPACK_IMPORTED_MODULE_6__["LoansHistoryPage"]
    }
];
let LoansHistoryPageModule = class LoansHistoryPageModule {
};
LoansHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_loans_history_page__WEBPACK_IMPORTED_MODULE_6__["LoansHistoryPage"]]
    })
], LoansHistoryPageModule);



/***/ }),

/***/ "MODa":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-history/loans-history.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['dashboard','my-tontines',currentTontine.tontine.tontine_id,'loans','my-loans',cycleId,seanceId]\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n     {{'MENU_HISTORY' | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"5\">\r\n        <ion-item lines=\"none\">                \r\n          <ion-toggle  (ionChange)=\"changeVisibility(isAll)\" [(ngModel)]=\"isAll\"></ion-toggle>\r\n          <ion-label><small>{{ 'ALL_TEXT' | translate }}</small> </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"7\">\r\n          <ion-searchbar placeholder=\"{{ 'M_NAME_TEXT' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForInvitation($event)\" type=\"text\"></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"loans-history\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"filterData && filterData.length > 0\">\r\n      <ion-col>\r\n        <ion-label class=\"ion-padding-vertical\" (click)=\"selectPool()\">\r\n            <strong>\r\n              <small>{{ 'CYCLE_TEXT' | translate }}/{{ 'SESSION_TEXT' | translate }} \r\n              : {{infoCycle ? infoCycle.numerocycle : ''}} <span *ngIf=\"infoCycle && infoSeance\">/</span> {{infoSeance ? infoSeance.numero_seance : ''}}\r\n            </small>\r\n          </strong>    \r\n          <ion-text class=\"ion-float-right\"><ion-icon  name=\"ios-arrow-down\"></ion-icon></ion-text>       \r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let item of history\">             \r\n            <ion-label>\r\n              <p>\r\n                <ion-text color=\"warning\">\r\n                  <small>{{item.data.updated_at.split(' ')[0] }}</small> \r\n                </ion-text>\r\n              </p>    \r\n              <p>\r\n                <ion-text color=\"primary\"><h2><small>{{'TONTINE_USERS_TEXT5' | translate }}: </small><b>{{item.data.infos_client ? item.data.infos_client.firstname : ''}} {{item.data.infos_client ? item.data.infos_client.lastname : ''}}</b></h2></ion-text>\r\n              </p>          \r\n              <p><ion-text color=\"dark\"><small>{{ 'DESCRIPTION_TEXT' | translate }}: </small> {{item.desc ? item.desc : ''}}</ion-text> </p>                \r\n              <p *ngIf=\"item.type === 'approve' || item.type === 'reject'\">\r\n                <span class=\"ion-float-left\"><small>{{ 'REQUEST_TEXT' | translate }}: </small>{{ item.data ? (item.data.request | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span> \r\n                <span class=\"ion-float-right\"><small> {{ 'APPROVE_TEXT' | translate }}: </small>{{item.data ? (item.data.approve | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span>               \r\n              </p> \r\n              <p *ngIf=\"item.type === 'payment' || item.type === 'interest'\">\r\n                <span class=\"ion-float-left\"><small>{{'DUE_TEXT' | translate }}: </small>{{item.data ? (item.data.due | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span> \r\n                <span class=\"ion-float-right\"><small>{{'PAY_TEXT' | translate }}: </small>{{item.data ? (item.data.pay | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span>                \r\n              </p> \r\n              <p *ngIf=\"item.type === 'payment' || item.type === 'interest'\">\r\n                <small>{{'OUTSTANDING_TEXT' | translate}}: </small>{{item.data ? (item.data.outstanding | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}\r\n              </p>\r\n              <p *ngIf=\"item.type === 'interest_interest'\">\r\n                <span class=\"ion-float-left\"><small>{{'PREVIOUS_TEXT' | translate }}: </small>{{item.data ? (item.data.previous | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span> \r\n                <span class=\"ion-float-right\"><small>{{'NEW_TEXT' | translate }}: </small>{{item.data ? (item.data.next | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span>                \r\n              </p> \r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"history && history.length === 0 && !loading\">\r\n    <p  class=\"ion-padding ion-text-center\"> {{ 'LOANS_HISTORY_EMPTY_TEXT' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "tMNp":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-history/loans-history.page.ts ***!
  \************************************************************************************************/
/*! exports provided: LoansHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansHistoryPage", function() { return LoansHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-history.page.html */ "MODa");
/* harmony import */ var _loans_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-history.page.scss */ "2DsC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/loan-global-data.service */ "2o4a");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");













let LoansHistoryPage = class LoansHistoryPage {
    constructor(tontine, activeRoute, alertController, loanService, loanData, translate, error, userService, util) {
        this.tontine = tontine;
        this.activeRoute = activeRoute;
        this.alertController = alertController;
        this.loanService = loanService;
        this.loanData = loanData;
        this.translate = translate;
        this.error = error;
        this.userService = userService;
        this.util = util;
        this.history = [];
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.loading = false;
        this.allData = [];
        this.nbItems = 10;
        this.cycleId = parseInt(this.activeRoute.snapshot.params.cycleId);
        this.seanceId = parseInt(this.activeRoute.snapshot.params.seanceId);
        this.currentUser = this.userService.getUserData();
        this.isAll = false;
    }
    ngOnInit() {
        this.loading = true;
        this.getHistoryTLoan(null);
    }
    // Filter the list of tontines
    searchForInvitation(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((loan) => {
                return (loan.data.infos_client.firstname ? loan.data.infos_client.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    loan.data.infos_client.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.history = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.history.push(this.allData[this.history.length]);
            }
        }
        else {
            this.history = this.allData;
        }
    }
    // change the visibility
    changeVisibility(enable) {
        this.infiniteScroll.disabled = false;
        this.loading = true;
        if (!enable) {
            this.allData = [];
            this.filterData.forEach((loan) => {
                if (loan.data.infos_client.id === this.currentUser.id) {
                    this.allData.push(loan);
                }
            });
        }
        else {
            this.allData = this.filterData;
            this.infoSeance = null;
            this.infoCycle = null;
        }
        if (this.allData.length > this.nbItems) {
            this.history = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.history.push(this.allData[this.history.length]);
            }
        }
        else {
            this.history = this.allData;
        }
        setTimeout(() => {
            this.loading = false;
        }, 200);
    }
    // Get the list history loans
    getHistoryTLoan(event) {
        this.loanService.getLoanHistory(this.cycleId).subscribe((reponse) => {
            if (reponse && reponse.message === "success") {
                this.allData = [];
                let loanPayment = reponse.loan_payment;
                if (loanPayment && loanPayment.length > 0) {
                    loanPayment = this.util.orderByKeyUp(loanPayment, 'updated_at');
                    loanPayment.forEach(loan => {
                        this.translate.get('LOAN_PAYMENT_TEXT').subscribe(trans => {
                            this.allData.push({ type: 'payment', desc: `${trans}`, data: loan });
                        });
                    });
                }
                let interestPayment = reponse.interest_payment;
                if (interestPayment && interestPayment.length > 0) {
                    interestPayment = this.util.orderByKeyUp(interestPayment, 'updated_at');
                    interestPayment.forEach(loan => {
                        this.translate.get('INTEREST_PAYMENT_TEXT').subscribe(trans => {
                            this.allData.push({ type: 'interest', desc: `${trans}`, data: loan });
                        });
                    });
                }
                let loanApprove = reponse.loan_approve;
                if (loanApprove && loanApprove.length > 0) {
                    loanApprove = this.util.orderByKeyUp(loanApprove, 'updated_at');
                    loanApprove.forEach(loan => {
                        if (loan.forced_loan === 1) {
                            this.translate.get('FORCE_LOAN_APPROVE_TEXT').subscribe(trans => {
                                this.allData.push({ type: 'approve', desc: `${trans}`, data: loan });
                            });
                        }
                        else {
                            this.translate.get('LOAN_APPROVE_TEXT').subscribe(trans => {
                                this.allData.push({ type: 'approve', desc: `${trans}`, data: loan });
                            });
                        }
                    });
                }
                let loanReject = reponse.loan_reject;
                if (loanReject && loanReject.length > 0) {
                    loanReject = this.util.orderByKeyUp(loanReject, 'updated_at');
                    loanReject.forEach(loan => {
                        if (loan.forced_loan === 1) {
                            this.translate.get('FORCE_LOAN_REJECT_TEXT').subscribe(trans => {
                                this.allData.push({ type: 'approve', desc: `${trans}`, data: loan });
                            });
                        }
                        else {
                            this.translate.get('LOAN_REJECT_TEXT').subscribe(trans => {
                                this.allData.push({ type: 'reject', desc: `${trans}`, data: loan });
                            });
                        }
                    });
                }
                let loanInterestInterest = reponse.interest_of_interest;
                if (loanInterestInterest && loanInterestInterest.length > 0) {
                    loanReject = this.util.orderByKeyUp(loanInterestInterest, 'updated_at');
                    loanReject.forEach(loan => {
                        //   if (loan.infos_seance.id === this.seanceId && loan.infos_cycle.id === this.cycleId) {
                        this.translate.get('LOAN_INTEREST_INTEREST_TEXT').subscribe(trans => {
                            this.allData.push({ type: 'interest_interest', desc: `${trans}`, data: loan });
                        });
                        // }
                    });
                }
                this.filterData = this.allData;
                this.changeVisibility(false);
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
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getHistoryTLoan(event);
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
    // Filter by loan seance 
    filterBySeance(SeanceCycleId) {
        const param = SeanceCycleId.split('#');
        const currentSessionData = [];
        this.allData.forEach(loan => {
            if (loan.data.infos_cycle.numerocycle.toString() === param[0] && loan.data.infos_seance.numero_seance.toString() === param[1]) {
                this.infoSeance = loan.data.infos_seance;
                this.infoCycle = loan.data.infos_cycle;
                currentSessionData.push(loan);
            }
        });
        if (currentSessionData.length > this.nbItems) {
            this.history = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.history.push(currentSessionData[this.history.length]);
            }
        }
        else {
            this.history = currentSessionData;
        }
    }
    selectPool() {
        this.translate.get(['OK_TEXT', 'CANCEL_TEXT', 'FILTER_TEXT']).subscribe(trans => {
            this.presentAlertRadio(this.util.orderByKeyUp(this.loanData.selectPoolDataLoanHistory(this.filterData), 'label'), `${trans.OK_TEXT}`, `${trans.CANCEL_TEXT}`, `${trans.FILTER_TEXT}`);
        });
    }
    presentAlertRadio(data, okText, cancelText, filterText) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: filterText,
                inputs: data,
                buttons: [
                    {
                        text: cancelText,
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: okText,
                        handler: (data) => {
                            this.filterBySeance(data);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getHistoryTLoan(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.history.length < this.allData.length) {
                    this.history.push(this.allData[this.history.length]);
                }
                else if (this.history.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
};
LoansHistoryPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__["TontineService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_12__["LoanService"] },
    { type: _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_11__["LoanGlobalDataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] }
];
LoansHistoryPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false },] }]
};
LoansHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-history',
        template: _raw_loader_loans_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansHistoryPage);



/***/ })

}]);
//# sourceMappingURL=loans-history-loans-history-module.js.map