(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-my-loans-my-module"],{

/***/ "PzH6":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my/loans-my.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',currentTontine.tontine.tontine_id,'loans','loans-my-list']\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n      {{'MY_LOANS_TEXT' | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\" *ngIf=\"infoSeance && infoSeance.date_debut\">\r\n    <ion-title>{{ 'SESSION_OF' | translate }} {{ infoSeance ? ( infoSeance.date_debut  | toDateObj | date : 'mediumDate') : '' }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"my-loans\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid  *ngIf=\"!loading\">\r\n    <div class=\"block-1\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"ion-padding-vertical\" (click)=\"selectPool()\">\r\n              <strong>\r\n                <small>{{ 'CYCLE_TEXT' | translate }}/{{ 'SESSION_TEXT' | translate }} \r\n                : {{infoCycle ? infoCycle.numerocycle : 0}}/ {{infoSeance ? infoSeance.numero_seance : 0}}\r\n              </small>\r\n            </strong>    \r\n            <ion-text class=\"ion-float-right\"><ion-icon *ngIf=\"currentLoanData && currentLoanData.length > 0\" name=\"ios-arrow-down\"></ion-icon></ion-text>       \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-1\">\r\n        <ion-col size=\"3\" class=\"ion-text-center\">\r\n          <b>{{ 'LOANS_TEXT' | translate }}<br/> {{ 'DUE_TEXT' | translate }} <br/> ({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</b><br/>\r\n          {{currentLoan ? (currentLoan.loan_due | commadumper) : 0}}\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-center\">\r\n          <b>{{ 'LOANS_TEXT' | translate }}<br/> {{ 'PAIDED_TEXT' | translate }} <br/> ({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</b><br/> \r\n          {{currentLoan ? (currentLoan.loan_paid | commadumper) : 0}}\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-center\">\r\n          <b>{{ 'LOANS_TEXT' | translate }}<br/> {{ 'IN_VALIDATION_TEXT' | translate }} <br/> ({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</b><br/> \r\n          {{currentLoan ? ((currentLoan.loan_due - currentLoan.loan_paid - currentLoan.loan_remain)|  commadumper) : 0}}\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-center\">\r\n          <b>{{ 'LOANS_TEXT' | translate }}<br/> {{ 'REMAIN_TEXT' |  translate }} <br/> ({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }}) </b>  <br/> \r\n           {{currentLoan ? ((currentLoan.loan_remain)| commadumper) : 0}}\r\n          <br/>\r\n              <ion-button size=\"small\" *ngIf=\"currentLoan && currentLoan.loan_remain > 0\" (click)=\"confirmPin()\"\r\n                class=\"pay-remain\"\r\n                color=\"warning\"> {{ 'PAY_TEXT' | translate }}\r\n            </ion-button> \r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-2\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-md>\r\n          <ion-label>\r\n            <h3>{{ 'LOANS_GRAPH_TEXT' | translate}}</h3>\r\n          </ion-label>        \r\n          <div class=\"donut-wrap\">\r\n            <div [class]=\"(getPercentage(currentLoan ? currentLoan.pourcentage_loan_paid : 0))\">\r\n              <div class=\"donut-text\">\r\n                <small>{{ 'INTEREST_GENERATE' | translate }}({{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }})</small>\r\n                <p>{{currentLoan ? (currentLoan.interest_generate | commadumper) : 0 }}</p>\r\n              </div>\r\n            </div>\r\n            <span class=\"tooltip\" tooltip=\"(currentLoan ? currentLoan.pourcentage_loan_paid : 0)%\">{{ 'PAID_TEXT' | translate }}</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-md>\r\n          <div class=\"donut-legend ion-padding-horizontal\">\r\n            <p class=\"legend-color1\"><small>{{ 'LOAN_TEXT' | translate }}  {{ 'PAID_TEXT' | translate }}:</small> <br/> <span>{{currentLoan ? (currentLoan.pourcentage_loan_paid | commadumper) : 0}}%</span> </p>\r\n            <p class=\"legend-color2\"><small>{{ 'LOAN_TEXT' | translate }} {{ 'IN_VALIDATION_TEXT' |  translate }}:</small><br/> <span>{{currentLoan && (currentLoan.pourcentage_loan_paid > 0 || currentLoan.pourcentage_loan_remain > 0) ? ((100 - currentLoan.pourcentage_loan_paid - currentLoan.pourcentage_loan_remain) | commadumper) : 0}}%</span> </p>\r\n            <p class=\"legend-color2\"><small>{{ 'LOAN_TEXT' | translate }} {{ 'REMAIN_TEXT' |  translate }}:</small><br/> <span>{{currentLoan ? (currentLoan.pourcentage_loan_remain | commadumper) : 0}}%</span> </p>\r\n            <p *ngIf=\"currentLoan && currentLoan.interest_target\"><small>{{ 'INTEREST_TARGET' | translate }}: </small> <span class=\"font-weight-bolder\">{{currentLoan ? (currentLoan.interest_target | commadumper) + ' ' + (currentTontine.tontine ? currentTontine.tontine.monnaie : '') : ('NOT_SET' | translate)}}</span> </p>\r\n            <p *ngIf=\"currentTontine && currentTontine.tontine && currentTontine.tontine.type_of_target_loan\"><small>{{ 'LOAN_TARGET_PER_CYCLE' | translate }}: </small> <span class=\"font-weight-bolder\">{{currentTontine.tontine ? (currentTontine.tontine.value_type_of_target | commadumper) + ' ' + ( currentTontine.tontine ? currentTontine.tontine.monnaie : '') : ('NOT_SET' | translate)}}</span> </p>\r\n            <p><small>{{ 'DAYS_LEFT_TEXT' | translate }}: </small> <span class=\"font-weight-bolder\">{{currentLoan ? currentLoan.days_left : 0}} {{'DAYS_TEXT' | translate}}</span> </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-3\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <h3>{{ 'CREDIT_LINE_APPROVE_TEXT' | translate }} ({{creditLineApprove || creditLineApprovePaid ? (creditLineApprove.length + creditLineApprovePaid.length) : 0}})</h3>\r\n          </ion-label>  \r\n          <ion-list *ngIf=\"creditLineApprove && creditLineApprove.length > 0\">\r\n            <ion-item *ngFor=\"let item of creditLineApprove\">\r\n              <ion-label><ion-text color=\"warning\"><i>{{item ? (item.updated_at | toDateObj | date : 'mediumDate') : '' }}</i></ion-text> -  {{item ? (item.amount | commadumper) : 0 }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }}</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-list *ngIf=\"creditLineApprovePaid && creditLineApprovePaid.length > 0\">\r\n            <ion-item *ngFor=\"let item of creditLineApprovePaid\">\r\n              <ion-label><ion-text color=\"warning\"><i>{{item ? (item.updated_at | toDateObj | date : 'mediumDate') : '' }}</i></ion-text> -  {{item ? (item.amount | commadumper) : 0 }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }} ({{ 'LOAN_PAYMENT_TEXT' | translate }})</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"!loading\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col size=\"6\" >\r\n        <ion-button expand=\"full\"  [disabled]=\"interestsDue && interestsDue.length === 0\"\r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\" \r\n              (click)=\"showInterest(interestsDue)\">\r\n          {{ 'INTEREST_DUE_TEXT' | translate}}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"full\" [disabled]=\"!currentLoan|| currentTontine && !currentTontine.cycle_courant\"\r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\" \r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'loans','loans-history',infoCycle ? infoCycle.id : 0,infoSeance ? infoSeance.id : 0]\">\r\n          {{ 'MENU_HISTORY' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "VyS9":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my/loans-my.module.ts ***!
  \****************************************************************************************/
/*! exports provided: LoansMyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansMyPageModule", function() { return LoansMyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_my_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans-my.page */ "WXhN");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _loans_my_page__WEBPACK_IMPORTED_MODULE_6__["LoansMyPage"]
    }
];
let LoansMyPageModule = class LoansMyPageModule {
};
LoansMyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_loans_my_page__WEBPACK_IMPORTED_MODULE_6__["LoansMyPage"]]
    })
], LoansMyPageModule);



/***/ }),

/***/ "WXhN":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my/loans-my.page.ts ***!
  \**************************************************************************************/
/*! exports provided: LoansMyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansMyPage", function() { return LoansMyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_my_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-my.page.html */ "PzH6");
/* harmony import */ var _loans_my_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-my.page.scss */ "ylcm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_contribution_loan_contribution_loan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/contribution-loan/contribution-loan.component */ "iB0r");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");














let LoansMyPage = class LoansMyPage {
    constructor(tontine, params, alertController, modatCtrl, events, router, translate, util, loanService, loanError, error) {
        this.tontine = tontine;
        this.params = params;
        this.alertController = alertController;
        this.modatCtrl = modatCtrl;
        this.events = events;
        this.router = router;
        this.translate = translate;
        this.util = util;
        this.loanService = loanService;
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
        this.currentCycleId = parseInt(this.params.snapshot.params.cycleId);
        this.currentSeanceId = parseInt(this.params.snapshot.params.seanceId);
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
                    this.currentLoanData = this.util.orderBySeanceKeyUp(data.liste_my_loan);
                    if (this.currentLoanData && this.currentLoanData.length > 0) {
                        const currentLoan = this.currentLoanData.filter((loan) => { return loan.infos_cycle.id === this.currentCycleId && loan.infos_seance.id === this.currentSeanceId; });
                        this.currentLoan = currentLoan[0];
                        this.creditLineApprove = this.util.orderByKeyUp(this.currentLoan.credit_line_approve, 'updated');
                        this.creditLineApprovePaid = this.util.orderByKeyUp(this.currentLoan.credit_line_paid, 'updated');
                        this.interestsDue = this.currentLoan.interests_due;
                        this.infoSeance = this.currentLoan.infos_seance;
                        this.infoCycle = this.currentLoan.infos_cycle;
                    }
                }
                if (event) {
                    setTimeout(() => {
                        event.target.complete();
                    }, 2000);
                }
                this.loading = false;
            }, error => {
                if (event) {
                    event.target.complete();
                }
                if (error && error.error && error.error.message === "error") {
                    if (error && error.error && error.error.user_not_found) {
                        this.error.renewSession().then((data) => {
                            if (data.result === 'OK') {
                                this.getLoanData(event);
                            }
                            else {
                                this.loading = false;
                            }
                        });
                    }
                    else {
                        this.loading = false;
                        this.loanError.manageLoanError(error);
                    }
                }
                else {
                    this.loading = false;
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
    // Filter by loan seance 
    filterBySeance(SeanceCycleId) {
        this.currentLoan = [];
        const param = SeanceCycleId.split('#');
        this.currentLoanData.forEach(data => {
            if (data.infos_cycle.id.toString() === param[0] && data.infos_seance.id.toString() === param[1]) {
                this.currentLoan = data;
                this.creditLineApprove = this.currentLoan.credit_line_approve;
                this.interestsDue = this.currentLoan.interests_due;
                this.infoSeance = this.currentLoan.infos_seance;
                this.infoCycle = this.currentLoan.infos_cycle;
            }
        });
    }
    selectPool() {
        const seanceData = [];
        let i = 0;
        this.currentLoanData.forEach(loan => {
            this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
                seanceData.push({
                    name: 'radio' + i,
                    label: `${trans.CYCLE_TEXT}/${trans.SESSION_TEXT} : ${loan.infos_cycle.numerocycle}/${loan.infos_seance.numero_seance}`,
                    type: 'radio',
                    value: `${loan.infos_cycle.id}#${loan.infos_seance.id}`,
                    checked: false
                });
            });
            i++;
        });
        this.translate.get(['OK_TEXT', 'CANCEL_TEXT', 'FILTER_TEXT']).subscribe(trans => {
            this.presentAlertRadio(seanceData, `${trans.OK_TEXT}`, `${trans.CANCEL_TEXT}`, `${trans.FILTER_TEXT}`);
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
    // show loan interest
    showInterest(interest) {
        this.loanService.sendLoanData(interest);
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans', 'loans-interests', this.currentCycleId, this.currentSeanceId]);
    }
    // Refresh the list
    refreSher(event) {
        this.getLoanData(event);
    }
    getPercentage(data) {
        return this.loanService.getPercentage(data);
    }
    // Pay the loan
    payLoan() {
        let amountPayLoan = 0;
        let totalAmount = 0;
        // Construct loan object
        const paymentLoanObject = [];
        this.creditLineApprove.forEach(loan => {
            totalAmount += loan.amount;
            if (loan && loan.rest_amount_loan_to_pay > 0) {
                amountPayLoan += loan.rest_amount_loan_to_pay;
                paymentLoanObject.push({ loan_request_id: loan.id, amount: loan.rest_amount_loan_to_pay });
            }
        });
        const loanData = {
            currency_name: this.currentTontine.tontine.monnaie,
            title: this.currentTontine.tontine.name,
            list_loan: paymentLoanObject,
            total_loan: totalAmount,
            all_Amount: amountPayLoan,
            type: 'loan-interest'
        };
        this.loanService.sendLoanData(loanData);
        this.modatCtrl
            .create({
            component: src_app_shared_contribution_loan_contribution_loan_component__WEBPACK_IMPORTED_MODULE_7__["ContributionLoanComponent"],
            componentProps: {
                tontineName: this.currentTontine.tontine.name,
                amountPay: amountPayLoan,
                balance: totalAmount - amountPayLoan,
                currency: this.currentTontine.tontine.monnaie,
                type: 'loan-interest'
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.data === 'complete') {
                    this.loading = true;
                    this.getLoanData(null);
                    this.events.publish('loans-paid');
                }
            });
        });
    }
    // show the pin confirmation dialog
    confirmPin() {
        this.payLoan();
    }
};
LoansMyPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__["TontineService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_11__["LoanService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_9__["LoanErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] }
];
LoansMyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-my',
        template: _raw_loader_loans_my_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_my_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansMyPage);



/***/ }),

/***/ "ylcm":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-my/loans-my.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1teS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=loans-my-loans-my-module.js.map