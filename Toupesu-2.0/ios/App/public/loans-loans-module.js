(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-loans-module"],{

/***/ "24HK":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',currentTontine.tontine_id]\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n      {{'LOAN_MANAGER' | translate }}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-loans\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid *ngIf=\"!loading\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-card class=\"block-1\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row>\r\n              <ion-col size=\"4\" class=\"col-button\">\r\n                <div class=\"desc\">{{'INTEREST_INFO_TEXT' | translate }}</div>\r\n                <h3>{{ 'INTEREST_TEXT' | translate }} <br/>(%)</h3>                \r\n                <div class=\"menu-amount\">{{currentTontine &&  currentTontine.interest ? currentTontine.interest : 0}}</div>\r\n                <h3>{{ 'INTEREST_OF_TEXT' | translate }} <br/>{{ 'INTEREST_TEXT' | translate }} (%)</h3>\r\n                <div class=\"menu-amount\">{{currentTontine && currentTontine.interest_of_interest ? (currentTontine.interest_of_interest | commadumper ) : 0}}</div>\r\n              </ion-col>              \r\n              <ion-col size=\"4\" class=\"col-button border-lr\">\r\n                <div class=\"desc\">{{ 'MY_LOAN_TEXT' | translate }}</div>\r\n                <h3>{{ 'CURRENT_LOAN' | translate }} ({{currentTontine ? currentTontine.monnaie : ''}})</h3>\r\n                <div class=\"menu-amount\">{{currentLoan && currentLoan.length > 0  ? (currentLoan[0].current_loan | commadumper) : 0 }}</div>\r\n                <h3>{{ 'OUTSTANDING_TEXT' | translate }} <br/>({{currentTontine ? currentTontine.monnaie : ''}})</h3>\r\n                <div class=\"menu-amount\">{{currentLoan && currentLoan.length > 0  ? (currentLoan[0].oustanding | commadumper) : 0 }}</div>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'MY_INTERESTS_TEXT' | translate }}</div>\r\n                <h3>{{ 'GENERATE_TEXT' | translate }} <br/>({{currentTontine ? currentTontine.monnaie : ''}})</h3>\r\n                <div class=\"menu-amount\">{{currentInterest && currentInterest.length > 0  ? (currentInterest[0].generate | commadumper) : 0 }}</div>\r\n                <h3>{{ 'GROUPE_TEXT' | translate }} <br/>{{ 'EARNED_TEXT' | translate}} ({{currentTontine ? currentTontine.monnaie : ''}})</h3>\r\n                <div class=\"menu-amount\">{{currentInterest && currentInterest.length > 0  ? (currentInterest[0].groupe_earned | commadumper) : 0 }}</div>\r\n              </ion-col>\r\n              <ion-col size=\"12\">\r\n                <div class=\"t-balance\">\r\n                  <ion-text [color]=\"currentTontine&&currentTontine.type_of_target_loan ? 'danger' : currentTontine&&(!currentTontine.type_of_target_loan &&! currentTontine.type_of_target_interest)  ? 'danger' :  'danger ion-hide'\"><span class=\"desc\">{{ 'LOAN_TARGET_PER_CYCLE' | translate }}:  {{currentLoan && currentLoan.length > 0 && currentLoan[0].target_by_cycle_my_loan > 0  ? (currentLoan[0].target_by_cycle_my_loan | commadumper) + '' + (currentTontine ? currentTontine.monnaie : '') : ('NOT_SET' | translate) }} </span></ion-text><br/>\r\n                  <ion-text [color]=\"currentTontine&&currentTontine.type_of_target_interest ? 'danger' :  currentTontine&&(!currentTontine.type_of_target_loan &&! currentTontine.type_of_target_interest)  ? 'danger' : 'danger ion-hide'\"><span class=\"desc\"> {{ 'INTEREST_TARGET_PER_CYCLE' | translate }} :  {{currentInterest && currentInterest.length > 0  && currentInterest[0].target_by_cycle_my_interest > 0 ? (currentInterest[0].target_by_cycle_my_interest | commadumper) + '' + (currentTontine ? currentTontine.monnaie : '') : ('NOT_SET' | translate) }} </span></ion-text>\r\n                </div>\r\n              </ion-col> \r\n            </ion-row>            \r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col> \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md>\r\n        <ion-label>\r\n          <h3 class=\"ion-padding-start\">{{ 'CURRENT_LOAN_SESSION_STATUS_TEXT' | translate }}</h3>\r\n        </ion-label>        \r\n        <div class=\"donut-wrap\">\r\n          <div [class]=\"(getPercentage(currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ? currentSessionLoanRequest[0].pourcentage_loan_approved : 0))\">\r\n            <div class=\"donut-text\">\r\n              <small>{{ 'CONTRIBUTED_MONEY_TEXT' | translate }}({{currentTontine ? currentTontine.monnaie : ''}})</small>\r\n              <p>{{ currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ? (currentSessionLoanRequest[0].cash_available | commadumper) : 0 }}</p>\r\n            </div>\r\n          </div>\r\n          <span class=\"tooltip\" tooltip=\"(currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ?  currentSessionLoanRequest[0].pourcentage_loan_approved : 0 )%\">{{ 'REQUESTED_TEXT' | translate }}</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md>\r\n        <div class=\"donut-legend ion-padding-horizontal\">\r\n          <p class=\"legend-color1\"><small>{{ 'LOAN_APPROVE' | translate }} ({{  currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ?  (currentSessionLoanRequest[0].pourcentage_loan_approved | commadumper) : 0 }}%)</small> <br/> <span>{{ currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ? (currentSessionLoanRequest[0].cash_loan_approved | commadumper) : 0 }} {{currentTontine ? currentTontine.monnaie : ''}}</span> </p>\r\n          <p class=\"legend-color2\"><small>{{'STILL_TO_BORROW' | translate }} ({{  currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ?  (currentSessionLoanRequest[0].pourcentage_cash_still_to_borrow | commadumper) : 0 }}%)</small><br/> <span>{{ currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ? (currentSessionLoanRequest[0].cash_still_to_borrow | commadumper) : 0 }} {{currentTontine ? currentTontine.monnaie : ''}}</span> </p>\r\n          <p><small>{{ 'NUMBER_LOAN_REQUEST' | translate }}: </small> <span class=\"font-weight-bolder\">{{  currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ?  currentSessionLoanRequest[0].total_members_who_requested : 0 }}/{{  currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ?  currentSessionLoanRequest[0].total_members_tontine : 0 }}</span> </p>\r\n          <p><small>{{ 'NUMBER_REQUEST_VALIDATED' | translate }}: </small> <span class=\"font-weight-bolder\">{{  currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ?  currentSessionLoanRequest[0].total_request_validated  : 0 }}/{{  currentSessionLoanRequest && currentSessionLoanRequest.length > 0 ?  currentSessionLoanRequest[0].total_request : 0 }}</span> </p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"currentTontine&&currentTontine.lend_full_cash_available_at_each_session !== 0\">\r\n      <ion-col>\r\n        <p class=\"ion-padding-horizontal\"><b>{{ 'NOTE_TEXT' | translate }}:</b> {{ 'NOTE_DESCRIPTION_TEXT' | translate }}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"!loading && canMakeRequest()\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n        <ion-button expand=\"full\" \r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\"  (click)=\"openLoansRequest()\" >\r\n              {{ 'LOANS_REQUEST_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "2o4a":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-global-data.service.ts ***!
  \************************************************************************************************/
/*! exports provided: LoanGlobalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanGlobalDataService", function() { return LoanGlobalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let LoanGlobalDataService = class LoanGlobalDataService {
    constructor(translate) {
        this.translate = translate;
    }
    // remeove space
    removeSpace(inputData) {
        const input = String(inputData);
        return input.replace(/\s/g, "");
    }
    // Get numbers members
    getNbMembres(members) {
        return members ? members.length : 0;
    }
    // get the cumule of loan due
    getLoanDueAmount(allData) {
        if (allData && allData.length > 0) {
            let total = 0;
            allData.forEach(data => {
                total += parseFloat(data.loan_due);
            });
            return total;
        }
        else {
            return 0;
        }
    }
    // get the cumule of loan paid
    getLoanPaidAmount(allData) {
        if (allData && allData.length > 0) {
            let total = 0;
            allData.forEach(data => {
                total += parseFloat(data.loan_paid);
            });
            return total;
        }
        else {
            return 0;
        }
    }
    // get interest generate
    getInterestGenerate(allData) {
        if (allData && allData.length > 0) {
            let total = 0;
            allData.forEach(data => {
                total += parseFloat(data.interest_generate);
            });
            return total;
        }
        else {
            return 0;
        }
    }
    // Get all amount of a loan seance
    getLoanSeanceAmount(loanDue) {
        if (loanDue) {
            let sumAmount = 0;
            loanDue.credit_line_approve.forEach(data => {
                sumAmount += data.amount;
            });
            loanDue.credit_line_paid.forEach(data => {
                sumAmount += data.amount;
            });
            return sumAmount;
        }
        else {
            return 0;
        }
    }
    // Get all amount of a loan seance
    getInterestDueAmount(loanDue) {
        if (loanDue) {
            let sumAmount = 0;
            loanDue.interests_due.forEach(data => {
                sumAmount += data.amount_interest;
            });
            loanDue.interests_due_paid.forEach(data => {
                sumAmount += data.amount_interest;
            });
            return sumAmount;
        }
        else {
            return 0;
        }
    }
    isSeanceNotIn(cycleId, seanceId, listSeance) {
        let isIn = false;
        listSeance.forEach(data => {
            if (`${cycleId}${seanceId}` === data) {
                isIn = true;
            }
        });
        return isIn;
    }
    // check if value not in
    checkNotIn(value, data) {
        let notIn = false;
        data.forEach(item => {
            if (String(item.label) === String(value)) {
                notIn = true;
            }
        });
        return notIn;
    }
    // Check user contribution
    hasContributeSeance(formData, userId) {
        let hasContribute = false;
        let contribution = 0;
        let nbShare = 0;
        if (formData && formData.membres && formData.membres.liste_membre) {
            const memberList = formData.membres.liste_membre;
            memberList.forEach(member => {
                if (parseInt(member.id) === parseInt(userId)) {
                    contribution += member.montant_cotisation;
                    nbShare++;
                }
            });
        }
        const toContribute = nbShare * formData.tontine.coutshare;
        if (toContribute === contribution && toContribute > 0) {
            hasContribute = true;
        }
        return hasContribute;
    }
    selectPoolData(allLoansData) {
        const seanceData = [];
        let i = 0;
        allLoansData.forEach(loan => {
            this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
                seanceData.push({
                    name: 'radio' + i,
                    label: `${trans.CYCLE_TEXT}/${trans.SESSION_TEXT} : ${loan.numero_cycle}/${loan.numero_seance}`,
                    type: 'radio',
                    value: `${loan.numero_cycle}#${loan.numero_seance}`,
                    checked: false
                });
            });
            i++;
        });
        return seanceData;
    }
    selectPoolDataLoanHistory(allLoansData) {
        const seanceData = [];
        let i = 0, currentParam = '';
        allLoansData.forEach(loan => {
            this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
                currentParam = `${trans.CYCLE_TEXT}/${trans.SESSION_TEXT} : ${loan.data.infos_cycle.numerocycle}/${loan.data.infos_seance.numero_seance}`;
                if (!this.checkNotIn(currentParam, seanceData)) {
                    seanceData.push({
                        name: 'radio' + i,
                        label: currentParam,
                        type: 'radio',
                        value: `${loan.data.infos_cycle.numerocycle}#${loan.data.infos_seance.numero_seance}`,
                        checked: false
                    });
                    i++;
                }
            });
        });
        return seanceData;
    }
};
LoanGlobalDataService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
LoanGlobalDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoanGlobalDataService);



/***/ }),

/***/ "3flG":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/reason/reason.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonComponent", function() { return ReasonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reason_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reason.component.html */ "qSol");
/* harmony import */ var _reason_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reason.component.scss */ "nA7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");












let ReasonComponent = class ReasonComponent {
    constructor(modatCtrl, loanService, navParams, tontine, error, ui, translate, loanError, events) {
        this.modatCtrl = modatCtrl;
        this.loanService = loanService;
        this.navParams = navParams;
        this.tontine = tontine;
        this.error = error;
        this.ui = ui;
        this.translate = translate;
        this.loanError = loanError;
        this.events = events;
        this.loading = false;
        this.reason = '';
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.memberData = this.navParams.get('data');
    }
    ngOnInit() { }
    // close the modal
    closeValidation(ans) {
        this.modatCtrl.dismiss(ans, 'cancel');
    }
    // validate the member debt
    validationAdmin(action) {
        switch (action) {
            case 'validate':
                this.approveLoanRequest();
                break;
            case 'reject':
                this.rejectLoanRequest();
                break;
            default:
                break;
        }
    }
    // Approve the loan request
    approveLoanRequest() {
        const param = {
            loan_request_id: this.memberData.loan_request_id,
            reason: this.reason
        };
        this.loading = true;
        this.translate.get('APPROVE_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loanService.approveLoanRequest(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('APPROVE_REQUEST_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.events.publish('loan-action');
            this.ui.dismissLoading();
            this.closeValidation('approve');
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.approveLoanRequest();
                        }
                        else {
                            this.loading = false;
                            this.closeValidation('exit');
                        }
                    });
                }
                else {
                    this.loanError.manageLoanError(error);
                    this.ui.dismissLoading();
                    this.closeValidation('exit');
                }
            }
            else {
                this.ui.dismissLoading();
                this.closeValidation('exit');
                this.error.manageError(error);
            }
        });
    }
    // Reject loan request
    rejectLoanRequest() {
        const param = {
            loan_request_id: this.memberData.loan_request_id,
            reason: this.reason
        };
        this.loading = true;
        this.translate.get('REJECT_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loanService.rejectLoanRequest(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('REJECT_REQUEST_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.events.publish('loan-action');
            this.ui.dismissLoading();
            this.closeValidation('reject');
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.rejectLoanRequest();
                        }
                        else {
                            this.loading = false;
                            this.closeValidation('exit');
                        }
                    });
                }
                else {
                    this.loanError.manageLoanError(error);
                    this.ui.dismissLoading();
                    this.closeValidation('exit');
                }
            }
            else {
                this.ui.dismissLoading();
                this.closeValidation('exit');
                this.error.manageError(error);
            }
        });
    }
};
ReasonComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_9__["LoanService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__["LoanErrorService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__["EventService"] }
];
ReasonComponent.propDecorators = {
    requestAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    requestOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReasonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reason',
        template: _raw_loader_reason_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReasonComponent);



/***/ }),

/***/ "4iXC":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-request/loans-request.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LoansRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansRequestComponent", function() { return LoansRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_request_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-request.component.html */ "5dtC");
/* harmony import */ var _loans_request_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-request.component.scss */ "ybU8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/loan-global-data.service */ "2o4a");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");















let LoansRequestComponent = class LoansRequestComponent {
    constructor(fb, userService, loanService, loanData, loanError, modatCtrl, error, translate, ui, tontine, router) {
        this.fb = fb;
        this.userService = userService;
        this.loanService = loanService;
        this.loanData = loanData;
        this.loanError = loanError;
        this.modatCtrl = modatCtrl;
        this.error = error;
        this.translate = translate;
        this.ui = ui;
        this.tontine = tontine;
        this.router = router;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.user = this.userService.getUserData();
        this.hasContribute = this.loanData.hasContributeSeance(this.currentTontine, this.user.id);
        this.loading = false;
        this.listParts = [];
        this.loadingRequest = false;
        this.currentAmountValid = true;
    }
    ngOnInit() {
        this.initLoanRequestForm();
        this.initFormMessage();
        this.getMemebersParts(this.currentTontine);
        this.loading = true;
        this.getLoanData(null);
    }
    get amountLoan() {
        return this.loanRequestForm.get('amount');
    }
    initFormMessage() {
        this.translate.get(['REQUIRED_FIELD_TEXT', 'PATTERN_ERROR_TEXT']).subscribe(trans => {
            this.validationMessages = {
                amountLoan: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { pattern: 'required', message: trans.PATTERN_ERROR_TEXT }
                ]
            };
        });
    }
    closeLoansRequest(result) {
        this.modatCtrl.dismiss(result, 'cancel');
    }
    initLoanRequestForm() {
        this.loanRequestForm = this.fb.group({
            tontine_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.currentTontine.tontine.tontine_id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            seance_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.currentTontine.seance_courante.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cycle_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.currentTontine.cycle_courant.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            numero_part: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.currentTontine.tontine, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
        });
    }
    // Get the list of members parts
    getMemebersParts(data) {
        const currentUser = this.userService.getUserData();
        const listParts = [];
        if (data && data.membres && data.membres.liste_membre.length > 0) {
            const listMembers = data.membres.liste_membre;
            listMembers.forEach(member => {
                if (member && member.id === currentUser.id) {
                    this.translate.get('A_SHARE_TEXT').subscribe(trans => {
                        listParts.push({ share: trans, numpart: member.numero_part });
                    });
                }
            });
        }
        if (listParts && listParts.length > 0) {
            this.loanRequestForm.get('numero_part').setValue(listParts[0].numpart);
        }
        this.listParts = listParts;
    }
    // Check if it is less than current maximum loan
    checkCurrentMaximumLoan(amount) {
        this.currentAmountValid = true;
        if (this.currentLoanRequest && this.currentLoanRequest[0] && (amount > this.currentLoanRequest[0].current_maximum_for_loan || amount > this.currentLoanRequest[0].cash_loan_available)) {
            this.currentAmountValid = false;
        }
    }
    // make a request
    makeLoanRequest(param) {
        this.loadingRequest = true;
        this.loanService.makeLoanRequest(param).subscribe((data) => {
            this.loadingRequest = false;
            if (data && data.message === "success") {
                this.translate.get('lOAN_REQUEST_SUCCESS_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.initLoanRequestForm();
                this.closeLoansRequest('success');
                if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1) {
                    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans', 'all-loans']);
                }
            }
        }, error => {
            this.loadingRequest = false;
            if (error && error.error && error.error.message === "error") {
                if (error.error.user_not_found) {
                    this.loadingRequest = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.makeLoanRequest(param);
                        }
                        else {
                            this.loadingRequest = false;
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
    // Get the loans data
    getLoanData(event) {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            seance_id: this.currentTontine.seance_courante.id
        };
        this.loanService.getLoansInformations(param).subscribe((data) => {
            if (data && data.message === 'success') {
                this.currentLoanRequest = data.loan_request;
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
            this.loading = false;
        }, error => {
            this.loading = false;
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.message === "error") {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
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
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getLoanData(event);
    }
};
LoansRequestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_7__["LoanService"] },
    { type: _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_12__["LoanGlobalDataService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__["LoanErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_14__["UiService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__["TontineService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
LoansRequestComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false },] }]
};
LoansRequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-request',
        template: _raw_loader_loans_request_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_request_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansRequestComponent);



/***/ }),

/***/ "5dtC":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-request/loans-request.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'LOANS_REQUEST_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"loans-request\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <form [formGroup]=\"loanRequestForm\">\r\n    <ion-grid>\r\n      <ion-row  *ngIf=\"!hasContribute\">\r\n        <ion-col class=\"ion-padding\">\r\n          <ion-text color=\"dark\">\r\n            {{ 'CONTRIBUTION_MSG' | translate }}\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"!loading\">\r\n        <ion-col>\r\n          <div class=\"cash ion-padding-horizontal\">\r\n            <span class=\"subtitle\">{{'CASH_AVALAIBLE' | translate}}</span>\r\n            <span class=\"subamount\"><ion-text color=\"danger\"><b>{{currentLoanRequest && currentLoanRequest.length > 0 ? (currentLoanRequest[0].cash_loan_available | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</b></ion-text></span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row  *ngIf=\"!loading\">\r\n        <ion-col>\r\n          <div class=\"ion-padding-horizontal\">\r\n            <p>\r\n          {{ 'CURRENT_MAX_LOAN' | translate }} <b>{{currentLoanRequest && currentLoanRequest.length > 0 ? (currentLoanRequest[0].current_maximum_for_loan | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</b><br />\r\n              {{'CASH_REQUEST_TEXT' | translate }}\r\n            </p>            \r\n          </div>          \r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'A_SHARE_TEXT' | translate }}</ion-label>\r\n            <ion-select  formControlName=\"numero_part\">\r\n              <ion-select-option *ngFor=\"let part of listParts; let k = index\" [value]=\"part.numpart\">{{part.share}} {{k+1}} </ion-select-option>          \r\n            </ion-select>\r\n          </ion-item> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'ENTER_AMOUNT_TEXT' | translate }}</ion-label>\r\n            <ion-input type=\"number\" (ionChange)=\"checkCurrentMaximumLoan(loanRequestForm.value.amount)\" formControlName=\"amount\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{currentTontine ? currentTontine.tontine.monnaie : ''}} </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.amountLoan\">\r\n              <div class=\"error-message\" *ngIf=\"amountLoan.hasError(validation.type) && (amountLoan.dirty || amountLoan.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span> \r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n          <div class=\"validation-errors\" *ngIf=\"!currentAmountValid\">\r\n              <div class=\"error-message\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{'CURRENT_LOAN_AMOUNT_REQUEST_ERROR' | translate }} {{currentLoanRequest && currentLoanRequest.length > 0 ? currentLoanRequest[0].current_maximum_for_loan < currentLoanRequest[0].cash_loan_available ? (currentLoanRequest[0].current_maximum_for_loan | commadumper): (currentLoanRequest[0].cash_loan_available | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}\r\n              </div>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>   \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                color=\"warning\" [disabled]=\"loanRequestForm.invalid || loadingRequest || !currentAmountValid  || !hasContribute\"\r\n                class=\"ion-text-uppercase\" (click)=\"makeLoanRequest(loanRequestForm.value)\"\r\n                shape=\"round\">\r\n            {{ 'SEND_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>   \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeLoansRequest('exit')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p class=\"ion-text-center\">\r\n      <ion-spinner *ngIf=\"loadingRequest\" name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "5wM4":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/paid-proofs/paid-proofs.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'LIST_OF_PROOFS' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"session-proof\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid *ngIf=\"myProofs && myProofs.length >  0\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>     \r\n          <ion-item *ngFor=\"let proof of myProofs\">          \r\n            <ion-label>   \r\n              <ion-text color=\"primary\"><h2><small>{{ 'M_NAME_TEXT' | translate }}: </small><b>{{proof.infos_user ? proof.infos_user.firstname : '' }} {{proof.infos_user ? proof.infos_user.lastname : '' }}</b></h2></ion-text>         \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof && proof.created_at ? proof.created_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ proof && proof.with_cash === 1 ? 'cash' : ('TRADITIONNAL_BANKING' | translate | lowercase) }}</ion-text>\r\n              </p>\r\n              <p *ngIf=\"proof.description\">\r\n                <ion-text class=\"ion-float-left\"><b>{{'DESCRIPTION_TEXT' | translate}}: </b>{{ proof.description ? proof.description : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\"><h3>{{'AMOUNT_TEXT' | translate}}: {{ proof.montant ? (proof.montant | commadumper) : 0  }}{{tontineData && tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}</h3></ion-text>\r\n              <p class=\"ion-text-right\" *ngIf=\"proof && (proof.receipt || proof.image)\">\r\n                <a (click)=\"showProof(proof)\" class=\"ion-text-capitalize\">\r\n                  {{'DEBT_VIEW_PROOF' | translate}}\r\n                </a>\r\n              </p>            \r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"myProofs && myProofs.length === 0  && !loading\">\r\n    <p class=\"ion-padding ion-text-center\" >{{ 'PROOFS_EMPTY_MSG' | translate}}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute()\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "9Uf8":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/message/message.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.component.html */ "P7XN");
/* harmony import */ var _message_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component.scss */ "bo6X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let MessageComponent = class MessageComponent {
    constructor(modatCtrl, navparams) {
        this.modatCtrl = modatCtrl;
        this.navparams = navparams;
        const reasons = this.navparams.get('data');
        this.reasonList = reasons.liste_admin_refusal;
    }
    ngOnInit() { }
    closeValidation() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
};
MessageComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
MessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessageComponent);



/***/ }),

/***/ "JtAl":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/paid-proofs/paid-proofs.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWlkLXByb29mcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Nvm6":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-routing-module.ts ***!
  \************************************************************************************/
/*! exports provided: LoansRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansRouting", function() { return LoansRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loans.page */ "yXAg");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _loans_page__WEBPACK_IMPORTED_MODULE_3__["LoansPage"]
    },
    {
        path: 'all-loans',
        loadChildren: () => __webpack_require__.e(/*! import() | loans-list-loans-list-module */ "loans-list-loans-list-module").then(__webpack_require__.bind(null, /*! ./loans-list/loans-list.module */ "DkrG")).then(m => m.LoansListPageModule)
    },
    {
        path: 'loans-my-list',
        loadChildren: () => __webpack_require__.e(/*! import() | loans-my-list-loans-my-list-module */ "loans-my-list-loans-my-list-module").then(__webpack_require__.bind(null, /*! ./loans-my-list/loans-my-list.module */ "jWl+")).then(m => m.LoansMyListPageModule)
    },
    {
        path: 'my-loans/:cycleId/:seanceId',
        loadChildren: () => __webpack_require__.e(/*! import() | loans-my-loans-my-module */ "loans-my-loans-my-module").then(__webpack_require__.bind(null, /*! ./loans-my/loans-my.module */ "VyS9")).then(m => m.LoansMyPageModule)
    },
    {
        path: 'refund-loans',
        loadChildren: () => __webpack_require__.e(/*! import() | loans-refund-loans-refund-module */ "loans-refund-loans-refund-module").then(__webpack_require__.bind(null, /*! ./loans-refund/loans-refund.module */ "q5aQ")).then(m => m.LoansRefundPageModule)
    },
    {
        path: 'loans-interests/:cycleId/:seanceId',
        loadChildren: () => __webpack_require__.e(/*! import() | loans-interests-loans-interests-module */ "loans-interests-loans-interests-module").then(__webpack_require__.bind(null, /*! ./loans-interests/loans-interests.module */ "zcqK")).then(m => m.LoansInterestsPageModule)
    },
    {
        path: 'loans-history/:cycleId/:seanceId',
        loadChildren: () => __webpack_require__.e(/*! import() | loans-history-loans-history-module */ "loans-history-loans-history-module").then(__webpack_require__.bind(null, /*! ./loans-history/loans-history.module */ "3mkn")).then(m => m.LoansHistoryPageModule)
    }
];
let LoansRouting = class LoansRouting {
};
LoansRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoansRouting);



/***/ }),

/***/ "P7XN":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/message/message.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title  color=\"primary\" class=\"ion-text-center ion-text-capitalize\">\r\n      {{ 'REASONS_TEXT' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"validation\">\r\n  <ion-grid class=\"ion-padding-horizontal\">\r\n    <ion-row *ngFor=\"let data of reasonList\">\r\n      <ion-col size=\"12\" *ngIf=\"data && data.firstname && data.lastname\">\r\n       <strong> {{ data && data.firstname ? data.firstname : ''}}\r\n        {{ data && data.lastname ? data.lastname : ''}} : </strong>\r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"data && data.infos_admin\">\r\n        <strong> {{ data && data.infos_admin.firstname ? data.infos_admin.firstname : ''}}\r\n         {{ data && data.infos_admin.lastname ? data.infos_admin.lastname : ''}} : </strong>\r\n       </ion-col>\r\n      <ion-col size=\"12\">\r\n        {{ data && data.reason ? data.reason : ''}}\r\n      </ion-col>\r\n      <hr/>\r\n    </ion-row>\r\n  </ion-grid>  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeValidation()\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row> \r\n  </ion-grid>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "PJnU":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/paid-proofs/paid-proofs.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PaidProofsLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaidProofsLoanComponent", function() { return PaidProofsLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paid_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paid-proofs.component.html */ "5wM4");
/* harmony import */ var _paid_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paid-proofs.component.scss */ "JtAl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/view-proof/view-proof.component */ "xVFS");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");







let PaidProofsLoanComponent = class PaidProofsLoanComponent {
    constructor(modatCtrl, tontine, navParams) {
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.navParams = navParams;
        this.tontineData = this.tontine.getCurrentTontineData();
        this.loading = false;
        this.myProofs = [];
        this.allData = [];
        this.nbItems = 10;
        const param = this.navParams.get('data');
        this.getProofs(param.proof);
    }
    ngOnInit() {
    }
    closeContribute() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    // Get the list of proofs of a members
    getProofs(data) {
        if (data && data.length > 0) {
            this.allData = data;
            if (this.allData.length > this.nbItems) {
                this.myProofs = [];
                for (let i = 0; i < this.nbItems; i++) {
                    this.myProofs.push(this.allData[this.myProofs.length]);
                }
            }
            else {
                this.myProofs = this.allData;
            }
        }
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getProofs(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.myProofs.length < this.allData.length) {
                    this.myProofs.push(this.allData[this.myProofs.length]);
                }
                else if (this.myProofs.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    showProof(proofs) {
        this.modatCtrl
            .create({
            component: src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_5__["ViewProofComponent"],
            componentProps: {
                proof: proofs.receipt || proofs.image
            }
        })
            .then(modalEl => modalEl.present());
    }
};
PaidProofsLoanComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
PaidProofsLoanComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }],
    reference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PaidProofsLoanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paid-proofs',
        template: _raw_loader_paid_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paid_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaidProofsLoanComponent);



/***/ }),

/***/ "QBDb":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-edit/loans-edit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LoansEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansEditComponent", function() { return LoansEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-edit.component.html */ "yviz");
/* harmony import */ var _loans_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-edit.component.scss */ "dX54");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/loan-global-data.service */ "2o4a");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");













let LoansEditComponent = class LoansEditComponent {
    constructor(fb, modatCtrl, translate, loanService, loanData, loanError, error, ui, tontine) {
        this.fb = fb;
        this.modatCtrl = modatCtrl;
        this.translate = translate;
        this.loanService = loanService;
        this.loanData = loanData;
        this.loanError = loanError;
        this.error = error;
        this.ui = ui;
        this.tontine = tontine;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentLoanData = this.currentTontine.tontine;
        this.isMaxBaseValid = true;
    }
    ngOnInit() {
        this.initFormMessage();
        this.initInfoLoansForm();
        this.updateCurrentUserTontine();
    }
    // Form getters
    get interestRate() {
        return this.infoLoansForm.get('interest');
    }
    get interestOfInterest() {
        return this.infoLoansForm.get('interest_of_interest');
    }
    get typeOfTarget() {
        return this.infoLoansForm.get('typeOfTarget');
    }
    get interestTargetValue() {
        return this.infoLoansForm.get('value_type_of_target');
    }
    get loanTargetValue() {
        return this.infoLoansForm.get('value_type_of_target');
    }
    get forceLoaning() {
        return this.infoLoansForm.get('share_cash_between_member');
    }
    get MaxLoanContrib() {
        return this.infoLoansForm.get('max_base_contribution');
    }
    get MaxLoanContribType() {
        return this.infoLoansForm.get('type_max_base_on_contribution');
    }
    get MaxLoanCash() {
        return this.infoLoansForm.get('max_base_on_cash_available');
    }
    // Form init form
    initFormMessage() {
        this.translate.get(['REQUIRED_FIELD_TEXT']).subscribe(trans => {
            this.validationMessages = {
                interestRate: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
                ],
                interestOfInterest: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
                ],
                interestTargetValue: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
                ],
                loanTargetValue: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
                ],
                forceLoaning: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
                ],
                MaxLoanContrib: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
                ],
                MaxLoanCash: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT }
                ]
            };
        });
    }
    // Init the form
    initInfoLoansForm() {
        this.infoLoansForm = this.fb.group({
            tontine_id: [this.currentTontine.tontine.tontine_id],
            interest: [this.currentLoanData && this.currentLoanData.interest ? this.currentLoanData.interest : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            interest_of_interest: [this.currentLoanData && this.currentLoanData.interest_of_interest ? this.currentLoanData.interest_of_interest : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            typeOfTarget: [this.currentLoanData && this.currentLoanData.type_of_target_interest ? 1 : this.currentLoanData && this.currentLoanData.type_of_target_loan ? 2 : 0],
            type_of_target_interest: [this.currentLoanData && this.currentLoanData.type_of_target_interest ? this.currentLoanData.type_of_target_interest : 0],
            type_of_target_loan: [this.currentLoanData && this.currentLoanData.type_of_target_loan ? this.currentLoanData.type_of_target_loan : 0],
            value_type_of_target: [this.currentLoanData && this.currentLoanData.value_type_of_target ? this.currentLoanData.value_type_of_target : 0],
            share_cash_between_member: [this.currentLoanData && this.currentLoanData.lend_full_cash_available_at_each_session ? true : false],
            max_base_contribution: [this.currentLoanData && this.currentLoanData.max_base_on_contribution ? this.currentLoanData.max_base_on_contribution : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            max_base_on_cash_available: [this.currentLoanData && this.currentLoanData.max_base_on_cash_available ? this.currentLoanData.max_base_on_cash_available : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(100)])],
            type_max_base_on_contribution: [this.currentLoanData && this.currentLoanData.type_max_base_on_contribution ? this.currentLoanData.type_max_base_on_contribution : 'currency_name']
        });
        this.checkMaxBaseContribution(this.infoLoansForm.value.type_max_base_on_contribution);
    }
    // Close the menu
    closeLoansEdit(result) {
        this.modatCtrl.dismiss(result, 'cancel');
    }
    // Get numbers members
    getNbMembres() {
        return this.loanData.getNbMembres(this.currentTontine.membres.liste_membre);
    }
    // Check member contribution per coutshare
    checkPerCoutShare() {
        const membres = this.getNbMembres();
        const totalContribution = membres * this.currentTontine.tontine.coutshare;
        this.totalMembersContribution = totalContribution;
        const maxBase = this.infoLoansForm.value.max_base_contribution * this.currentTontine.tontine.coutshare;
        if (maxBase <= totalContribution) {
            this.isMaxBaseValid = true;
        }
        else {
            this.isMaxBaseValid = false;
        }
    }
    // Check member contribution per currency amount
    checkPerCurrencyAmount() {
        const membres = this.getNbMembres();
        const totalContribution = membres * this.currentTontine.tontine.coutshare;
        this.totalMembersContribution = totalContribution;
        const maxBase = this.infoLoansForm.value.max_base_contribution;
        if (maxBase <= totalContribution) {
            this.isMaxBaseValid = true;
        }
        else {
            this.isMaxBaseValid = false;
        }
    }
    // Check the max base contribution value
    checkMaxBaseContribution(type) {
        // It should be greathest than 100% or sum of member contribution
        switch (type) {
            case 'currency_name':
                this.checkPerCurrencyAmount();
                break;
            case 'member_contribution':
                this.checkPerCoutShare();
                break;
            default:
                break;
        }
    }
    // Update the loan type
    updateLoanType(type) {
        switch (type) {
            case 0:
                this.infoLoansForm.get('type_of_target_interest').setValue(0);
                this.infoLoansForm.get('type_of_target_loan').setValue(0);
                break;
            case 1:
                this.infoLoansForm.get('type_of_target_interest').setValue(1);
                this.infoLoansForm.get('type_of_target_loan').setValue(0);
                break;
            case 2:
                this.infoLoansForm.get('type_of_target_interest').setValue(0);
                this.infoLoansForm.get('type_of_target_loan').setValue(1);
                break;
            default:
                break;
        }
    }
    // Update the current user tontine
    updateCurrentUserTontine() {
        const tontineData = this.tontine.getCurrentTontineData();
        if (tontineData && tontineData.tontine) {
            this.tontine.getTontineDetail(tontineData.tontine.tontine_id).subscribe((reponse) => {
                if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                    this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                    this.currentTontine = reponse.infos_tontine[0];
                    this.currentLoanData = this.currentTontine.tontine;
                    this.initInfoLoansForm();
                }
            }, error => {
                if (error && error.error && error.error.bad_token) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.updateCurrentUserTontine();
                        }
                    });
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
    }
    // Can edit a loan request 
    canEditLoanRequest() {
        let formData = this.tontine.getCurrentTontineData();
        const currentTontine = formData;
        const currentSeance = formData.seance_courante;
        const previousSeance = formData.avant_derniere_seance;
        let canEdit = false;
        if (((!currentSeance && currentTontine.tontine.active === 0) || (!currentSeance && !previousSeance && currentTontine.tontine.active === 1) ||
            (currentSeance && currentSeance.numero_seance < 1 && currentTontine.tontine.active === 1)) && currentTontine.tontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    // Make a request
    editLoanRequest(param) {
        this.loadingRequest = true;
        const paramData = param;
        paramData.share_cash_between_member ?
            paramData.share_cash_between_member = 1 :
            paramData.share_cash_between_member = 0;
        this.loanService.editLoanRequest(paramData).subscribe((data) => {
            this.loadingRequest = false;
            if (data && data.message === "success") {
                this.translate.get('lOAN_EDIT_SUCCESS_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.updateCurrentUserTontine();
                this.closeLoansEdit('success');
            }
        }, error => {
            this.loadingRequest = false;
            if (error && error.error && error.error.message === "error") {
                if (error.error.user_not_found) {
                    this.loadingRequest = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.editLoanRequest(param);
                        }
                        else {
                            this.loadingRequest = false;
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
};
LoansEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_8__["LoanService"] },
    { type: _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_11__["LoanGlobalDataService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_7__["LoanErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__["UiService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_10__["TontineService"] }
];
LoansEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-edit',
        template: _raw_loader_loans_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansEditComponent);



/***/ }),

/***/ "Qy+r":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-menu/loans-menu.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1tZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "WfuF":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service.ts ***!
  \******************************************************************************************/
/*! exports provided: LoanErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanErrorService", function() { return LoanErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");




let LoanErrorService = class LoanErrorService {
    constructor(translate, ui) {
        this.translate = translate;
        this.ui = ui;
    }
    manageLoanError(error) {
        if (error && error.error && error.error.tontine_not_found) {
            this.translate.get('ADD_SHARE_MSG4').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.user_not_authorize) {
            this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.remplir_tous_les_champs) {
            this.translate.get('TOPUP_MSG2').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.seance_id_not_exist) {
            this.translate.get('SEANCE_NOT_FOUND').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.cycle_id_not_exist) {
            this.translate.get('CYCLE_NOT_FOUND').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.max_base_on_cash_available_greater_than_one_hundred_percent) {
            this.translate.get('MAX_BASE_ON_CASH_GREAT_100').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.amount_is_greater_than_cash_loan_available) {
            this.translate.get('AMOUNT_GREAT_CASH_LOAN_AVAILABLE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.amount_is_greater_than_current_amount_maximum_for_a_loan) {
            this.translate.get('AMOUNT_GREAT_CURRENT_CASH_LOAN_AVAILABLE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.loan_request_id_not_exist) {
            this.translate.get('LOAN_REQUEST_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.this_user_has_already_validated_request) {
            this.translate.get('USER_HAS_ALREADY_VALIDATE_REQUEST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.this_user_has_already_rejected_request) {
            this.translate.get('USER_HAS_ALREADY_REJECT_REQUEST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.amount_is_greater_than_rest_to_pay) {
            this.translate.get(`AMOUNT_GREATHER_THAN_REST ${error.error.reste_a_payer}`).subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.total_amount_proof_is_greather_than_montant_total) {
            this.translate.get(`ITEM_AMOUNT_GREATHER_THAN_TOTAL_AMOUNT`).subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.total_amount_proof_is_greather_than_montant_total) {
            this.translate.get(`ITEM_AMOUNT_GREATHER_THAN_TOTAL_AMOUNT`).subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.loan_payback_user_id_not_exist) {
            this.translate.get(`LOAN_REFUND_ID_NOT_EXIST`).subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.interest_request_payment_id_not_exist) {
            this.translate.get(`LOAN_INTEREST_ID_NOT_EXIST`).subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
    }
};
LoanErrorService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
LoanErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoanErrorService);



/***/ }),

/***/ "ZGYn":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-menu/loans-menu.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LoansMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansMenuComponent", function() { return LoansMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-menu.component.html */ "iJ45");
/* harmony import */ var _loans_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-menu.component.scss */ "Qy+r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_edit_loans_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loans-edit/loans-edit.component */ "QBDb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");










let LoansMenuComponent = class LoansMenuComponent {
    constructor(modatCtrl, userService, router, tontine, popoverController, events) {
        this.modatCtrl = modatCtrl;
        this.userService = userService;
        this.router = router;
        this.tontine = tontine;
        this.popoverController = popoverController;
        this.events = events;
        this.user = this.userService.getUserData();
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() { }
    closeLoansMenu() {
        this.popoverController.dismiss();
    }
    openLoansEdit() {
        this.modatCtrl
            .create({
            component: _loans_edit_loans_edit_component__WEBPACK_IMPORTED_MODULE_5__["LoansEditComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(ans => {
                if (ans && ans.data === "success") {
                    this.events.publish('loan-request');
                }
            });
        });
    }
    // open my loans request 
    openMyLoanRequest() {
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans', 'loans-my-list']);
    }
    // open all requests
    openAllLoansRequest() {
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans', 'all-loans']);
    }
    // Refund loan
    RefundRequest() {
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans', 'refund-loans']);
    }
};
LoansMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] }
];
LoansMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-menu',
        template: _raw_loader_loans_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansMenuComponent);



/***/ }),

/***/ "Zpmb":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "bo6X":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/message/message.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "dX54":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-edit/loans-edit.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "iJ45":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-menu/loans-menu.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"loans-menu-popover\">\r\n  <ion-item  (click)=\"closeLoansMenu();openLoansEdit()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'SETTING_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item  (click)=\"closeLoansMenu();openMyLoanRequest()\" lines=\"none\">\r\n    <ion-label>\r\n     {{'MY_LOANS_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeLoansMenu();openAllLoansRequest()\" lines=\"none\">\r\n    <ion-label>\r\n      {{'ALL_LOANS' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"closeLoansMenu();RefundRequest()\" lines=\"none\">\r\n    <ion-label>\r\n      {{'REFUND_REQUEST' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "nA7Q":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/reason/reason.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFzb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "qSol":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/reason/reason.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title  [color]=\"requestOption === 'validate' ? 'success':'danger'\" class=\"ion-text-center ion-text-capitalize\">\r\n      {{ requestOption === 'validate' ? ('APPROVER_TEXT' | translate) : ('REJETER_TEXT' | translate) }} {{ 'M_REQUEST_VALIDATION_TITLE' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"validation\">\r\n  <ion-grid class=\"ion-padding-horizontal\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>{{ 'VALIDATION_TEXT_1' | translate }} {{ requestOption === 'validate' ? ('APPROVER_TEXT' | translate | lowercase) : ('REJETER_TEXT' | translate | lowercase) }} {{ 'VALIDATION_TEXT_3' | translate }} <b>{{ (requestAmount | commadumper) }} {{currency}}.</b>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" required>{{ 'ENTER_REASON_TEXT' | translate }}...</ion-label>\r\n          <ion-textarea [(ngModel)]=\"reason\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                [color]=\"requestOption === 'validate'? 'success':'danger'\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeValidation('cancel')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" [disabled]=\"((requestOption === 'reject' && !reason) || loading)\" (click)=\"validationAdmin(requestOption)\"\r\n                [color]=\"(requestOption === 'validate')? 'success':'danger'\"  \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n            {{ requestOption  === 'validate' ? ('APPROVER_TEXT' | translate) : ( 'REJETER_TEXT' | translate )}}\r\n          </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p *ngIf=\"loading\" class=\"ion-text-center ion-padding\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "sj2P":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans.module.ts ***!
  \****************************************************************************/
/*! exports provided: LoansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansPageModule", function() { return LoansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loans.page */ "yXAg");
/* harmony import */ var _loans_menu_loans_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans-menu/loans-menu.component */ "ZGYn");
/* harmony import */ var _loans_edit_loans_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loans-edit/loans-edit.component */ "QBDb");
/* harmony import */ var _loans_request_loans_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loans-request/loans-request.component */ "4iXC");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _loans_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loans-routing-module */ "Nvm6");
/* harmony import */ var _reason_reason_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reason/reason.component */ "3flG");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message/message.component */ "9Uf8");
/* harmony import */ var _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paid-proofs/paid-proofs.component */ "PJnU");














let LoansPageModule = class LoansPageModule {
};
LoansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loans_routing_module__WEBPACK_IMPORTED_MODULE_10__["LoansRouting"]
        ],
        declarations: [
            _loans_page__WEBPACK_IMPORTED_MODULE_5__["LoansPage"],
            _loans_menu_loans_menu_component__WEBPACK_IMPORTED_MODULE_6__["LoansMenuComponent"],
            _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_13__["PaidProofsLoanComponent"],
            _loans_edit_loans_edit_component__WEBPACK_IMPORTED_MODULE_7__["LoansEditComponent"],
            _loans_request_loans_request_component__WEBPACK_IMPORTED_MODULE_8__["LoansRequestComponent"],
            _reason_reason_component__WEBPACK_IMPORTED_MODULE_11__["ReasonComponent"],
            _message_message_component__WEBPACK_IMPORTED_MODULE_12__["MessageComponent"]
        ],
        entryComponents: [
            _loans_menu_loans_menu_component__WEBPACK_IMPORTED_MODULE_6__["LoansMenuComponent"],
            _loans_edit_loans_edit_component__WEBPACK_IMPORTED_MODULE_7__["LoansEditComponent"],
            _loans_request_loans_request_component__WEBPACK_IMPORTED_MODULE_8__["LoansRequestComponent"],
            _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_13__["PaidProofsLoanComponent"],
            _reason_reason_component__WEBPACK_IMPORTED_MODULE_11__["ReasonComponent"],
            _message_message_component__WEBPACK_IMPORTED_MODULE_12__["MessageComponent"]
        ]
    })
], LoansPageModule);



/***/ }),

/***/ "yXAg":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans.page.ts ***!
  \**************************************************************************/
/*! exports provided: LoansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansPage", function() { return LoansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans.page.html */ "24HK");
/* harmony import */ var _loans_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans.page.scss */ "Zpmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_menu_loans_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loans-menu/loans-menu.component */ "ZGYn");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/loan.service */ "TH4E");
/* harmony import */ var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var _loans_request_loans_request_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loans-request/loans-request.component */ "4iXC");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let LoansPage = class LoansPage {
    constructor(popoverController, modatCtrl, loanService, loanError, error, tontine, events) {
        this.popoverController = popoverController;
        this.modatCtrl = modatCtrl;
        this.loanService = loanService;
        this.loanError = loanError;
        this.error = error;
        this.tontine = tontine;
        this.events = events;
        const tontineData = this.tontine.getCurrentTontineData();
        this.currentTontine = tontineData.tontine;
        this.loading = false;
        this.events.subscribe('loan-request', () => {
            this.loading = true;
            this.getLoanData(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getLoanData(null);
    }
    // Open the context menu
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _loans_menu_loans_menu_component__WEBPACK_IMPORTED_MODULE_5__["LoansMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
    // Get the loans data
    getLoanData(event) {
        const param = {
            tontine_id: this.currentTontine.tontine_id
        };
        this.loanService.getLoansInformations(param).subscribe((data) => {
            if (data && data.message === 'success') {
                this.currentDebt = data.debts;
                this.currentLoanRequest = data.loan_request;
                this.currentLoan = data.my_loan;
                this.currentInterest = data.my_interest;
                this.currentSessionLoanRequest = data.current_session_loan_status;
                if (data.info_tontine) {
                    this.currentTontine = data.info_tontine[0];
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
    // Refresh the list
    refreSher(event) {
        this.getLoanData(event);
    }
    // Get the request percentage
    getPercentage(data) {
        this.loanService.getPercentage(data);
    }
    // Can make a request 
    canMakeRequest() {
        let formData = this.tontine.getCurrentTontineData();
        const currentTontine = formData;
        const currentSeance = formData.seance_courante;
        const currentCycle = formData.cycle_courant;
        let canMakeRequest = false;
        if ((currentCycle && currentSeance && currentTontine.tontine.active === 1)) {
            canMakeRequest = true;
        }
        return canMakeRequest;
    }
    // Open the loan request
    openLoansRequest() {
        this.modatCtrl
            .create({
            component: _loans_request_loans_request_component__WEBPACK_IMPORTED_MODULE_10__["LoansRequestComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(ans => {
                if (ans && ans.data === "success") {
                    this.loading = true;
                    this.getLoanData(null);
                }
            });
        });
    }
};
LoansPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_7__["LoanService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_9__["LoanErrorService"] },
    { type: _shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] }
];
LoansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans',
        template: _raw_loader_loans_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansPage);



/***/ }),

/***/ "ybU8":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-request/loans-request.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "yviz":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-edit/loans-edit.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{'EDIT_LOANS' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"loans-edit\">\r\n\r\n  <form [formGroup]=\"infoLoansForm\">\r\n    <ion-grid>\r\n      <ion-row  *ngIf=\"!canEditLoanRequest()\">\r\n        <ion-col class=\"ion-padding\">\r\n          <ion-text color=\"dark\">\r\n            {{ 'SESSION_EDIT_MSG' | translate }}\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item> \r\n            <ion-label position=\"floating\">{{ 'INTEREST_LOAN' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"interest\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> % </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.interestRate\">\r\n              <div class=\"error-message\" *ngIf=\"interestRate.hasError(validation.type) && (interestRate.dirty || interestRate.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'INTEREST_OF_TEXT' | translate }} {{ 'INTEREST_TEXT' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"interest_of_interest\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> % </span>\r\n           </ion-item>\r\n          <small class=\"ion-padding-horizontal\">{{ 'INTEREST_CONDITION_TEXT' | translate }}</small>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.interestOfInterest\">\r\n              <div class=\"error-message\" *ngIf=\"interestOfInterest.hasError(validation.type) && (interestOfInterest.dirty || interestOfInterest.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-radio-group (ionChange)=\"updateLoanType(infoLoansForm.value.typeOfTarget)\" class=\"ion-padding-horizontal\" formControlName=\"typeOfTarget\" required>\r\n            <ion-label class=\"text-share\">{{ 'TYPE_TARGET' | translate }}:</ion-label>\r\n            <ion-item>\r\n               <ion-label>{{ 'NONE_TEXT' | translate }}</ion-label>\r\n               <ion-radio\r\n               slot=\"start\"\r\n               [value]=\"0\"\r\n               ></ion-radio>\r\n            </ion-item>            \r\n            <ion-item>\r\n              <ion-label>{{ 'INTEREST_TEXT' | translate }}</ion-label>\r\n              <ion-radio\r\n              slot=\"start\"\r\n              [value]=\"1\"\r\n              ></ion-radio>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>{{ 'LOAN_TEXT' | translate }}</ion-label>\r\n              <ion-radio\r\n              slot=\"start\"\r\n              [value]=\"2\"\r\n              ></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row *ngIf=\"infoLoansForm.value.typeOfTarget === 1\">\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'INTEREST_TARGET' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"value_type_of_target\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : ''}} </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.interestTargetValue\">\r\n              <div class=\"error-message\" *ngIf=\"interestTargetValue.hasError(validation.type) && (interestTargetValue.dirty || interestTargetValue.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n      <ion-row *ngIf=\"infoLoansForm.value.typeOfTarget === 2\">\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'LOAN_TARGET' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"value_type_of_target\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : ''}}  </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.loanTargetValue\">\r\n              <div class=\"error-message\" *ngIf=\"loanTargetValue.hasError(validation.type) && (loanTargetValue.dirty || loanTargetValue.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label class=\"text-share\">{{ 'LEND_CASH_TEXT' | translate }}</ion-label>\r\n            <ion-toggle formControlName=\"share_cash_between_member\"></ion-toggle>\r\n          </ion-item>\r\n          <div  class=\"ion-padding-horizontal\">\r\n            <small [innerHTML]=\"'LEND_CASH_MSG' | translate\">\r\n            </small>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"ion-padding-horizontal\">{{ 'MAXIMUM_LEND_PER_MEMBER' | translate }}</ion-label>\r\n          <ion-row class=\"ion-padding-start ion-align-items-end\">\r\n            <ion-col size=\"8\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">{{ 'MAX_BASE_CONTRIBUTION' | translate }}</ion-label>\r\n                <ion-input (ionChange)=\"checkMaxBaseContribution(infoLoansForm.value.type_max_base_on_contribution)\"   type=\"number\" formControlName=\"max_base_contribution\" required></ion-input>\r\n              </ion-item>               \r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-label></ion-label>\r\n              <ion-select (ionChange)=\"checkMaxBaseContribution(infoLoansForm.value.type_max_base_on_contribution)\" formControlName=\"type_max_base_on_contribution\">\r\n                <ion-select-option [value]=\"'currency_name'\">{{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : ''}} </ion-select-option> \r\n                <ion-select-option [value]=\"'member_contribution'\">x ({{ 'MEMBER_CONTRIBUTION' | translate }})</ion-select-option>         \r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"ion-padding-start validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.MaxLoanContrib\">\r\n              <div class=\"error-message\" *ngIf=\"MaxLoanContrib.hasError(validation.type) && (MaxLoanContrib.dirty || MaxLoanContrib.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n          <div class=\"ion-padding-start validation-errors\" *ngIf=\"!isMaxBaseValid\">\r\n              <div class=\"error-message\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"'MAX_BASE_CONTRIBUTION_ERROR' | translate\"></span> <span *ngIf=\"totalMembersContribution\"> {{totalMembersContribution}} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : ''}}</span>\r\n              </div>\r\n          </div>\r\n          <ion-row class=\"ion-padding-start ion-align-items-end\">\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">{{'MAX_BASE_CASH_AVALAIBLE' | translate}}</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"max_base_on_cash_available\" required></ion-input>\r\n                <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> % </span>\r\n              </ion-item>\r\n              <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.MaxLoanCash\">\r\n                  <div class=\"error-message\" *ngIf=\"MaxLoanCash.hasError(validation.type) && (MaxLoanCash.dirty || MaxLoanCash.touched)\">\r\n                    <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                    <span [innerHTML]=\"validation.message\"></span>\r\n                  </div>\r\n                </ng-container>\r\n              </div> \r\n            </ion-col>          \r\n          </ion-row>\r\n\r\n        </ion-col>          \r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>   \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\" [disabled]=\"infoLoansForm.invalid || loadingRequest || !isMaxBaseValid ||  !canEditLoanRequest()\" (click)=\"editLoanRequest(infoLoansForm.value)\"\r\n                shape=\"round\">\r\n            {{ 'SAVE_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>   \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeLoansEdit('cancel')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p class=\"ion-text-center\">\r\n      <ion-spinner *ngIf=\"loadingRequest\" name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=loans-loans-module.js.map