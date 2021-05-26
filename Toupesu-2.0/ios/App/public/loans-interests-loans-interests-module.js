(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-interests-loans-interests-module"],{

/***/ "1PqD":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-interests/loans-interests.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: LoansInterestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansInterestsPage", function() { return LoansInterestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_interests_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-interests.page.html */ "Oc8k");
/* harmony import */ var _loans_interests_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-interests.page.scss */ "bCUj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_contribution_loan_contribution_loan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/contribution-loan/contribution-loan.component */ "iB0r");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");












let LoansInterestsPage = class LoansInterestsPage {
    constructor(tontine, activeRoute, util, loanService, loanError, error, modatCtrl) {
        this.tontine = tontine;
        this.activeRoute = activeRoute;
        this.util = util;
        this.loanService = loanService;
        this.loanError = loanError;
        this.error = error;
        this.modatCtrl = modatCtrl;
        this.tontineCurrency = 'XAF';
        this.totalPay = 0;
        this.totalAmount = 0;
        this.selectedDue = [];
        this.interestsDue = [];
        this.paymentInterestObject = [];
        this.selectLoanList();
        this.loading = false;
        this.cycleId = parseInt(this.activeRoute.snapshot.params.cycleId);
        this.seanceId = parseInt(this.activeRoute.snapshot.params.seanceId);
    }
    ngOnInit() {
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    // Select the loan list
    selectLoanList() {
        this.interestsDue = this.loanService.getLoanData();
        if (this.interestsDue && this.interestsDue.length > 0) {
            this.interestsDue = this.interestsDue.filter((loan) => { return loan.rest_amount_interest_to_pay > 0; });
            this.interestsDue = this.util.orderByKeyUp(this.interestsDue, 'updated');
        }
        else {
            this.interestsDue = [];
        }
    }
    // Check if the loan is select
    checkEvent(e, interest) {
        if (e.target.checked == true) {
            this.selectedDue.push(interest);
            this.totalPay = this.totalPay + interest.rest_amount_interest_to_pay;
            this.totalAmount += interest.amount_interest;
            this.paymentInterestObject.push({ loan_request_id: interest.id, amount: interest.rest_amount_interest_to_pay });
        }
        else {
            let interestId = this.selectedDue.indexOf(interest);
            this.selectedDue.splice(interestId, 1);
            this.paymentInterestObject.splice(interestId, 1);
            this.totalPay = this.totalPay - interest.rest_amount_interest_to_pay;
            this.totalAmount += interest.amount_interest;
        }
    }
    // Get the loans data
    getLoanData() {
        if (this.currentTontine && this.currentTontine.cycle_courant) {
            const param = {
                tontine_id: this.currentTontine.tontine.tontine_id,
                cycle_id: this.currentTontine.cycle_courant.id
            };
            this.loanService.getMemberLoanDashBordCycle(param).subscribe((data) => {
                if (data && data.message === 'success' && data.liste_my_loan.length > 0) {
                    data.liste_my_loan.forEach(loan => {
                        if (this.interestsDue && this.interestsDue[0] && loan.infos_seance.id === this.interestsDue[0].seance_id && loan.infos_cycle.id === this.interestsDue[0].cycle_id) {
                            this.interestsDue = this.util.orderByKeyUp(loan.interests_due, 'updated');
                        }
                    });
                }
                this.loading = false;
            }, error => {
                this.loading = false;
                if (error && error.error && error.error.message === "error") {
                    if (error && error.error && error.error.user_not_found) {
                        this.loading = true;
                        this.error.renewSession().then((data) => {
                            if (data.result === 'OK') {
                                this.getLoanData();
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
            this.loading = false;
        }
    }
    // Pay the loan
    payLoan() {
        // Construct interest object
        const loanData = {
            currency_name: this.currentTontine.tontine.monnaie,
            title: this.currentTontine.tontine.name,
            list_interest_to_pay: this.paymentInterestObject,
            total_loan: this.totalAmount,
            all_Amount: this.totalPay,
            type: 'interest'
        };
        this.loanService.sendLoanData(loanData);
        this.modatCtrl
            .create({
            component: src_app_shared_contribution_loan_contribution_loan_component__WEBPACK_IMPORTED_MODULE_6__["ContributionLoanComponent"],
            componentProps: {
                tontineName: this.currentTontine.tontine.name,
                amountPay: this.totalPay,
                balance: this.totalAmount - this.totalPay,
                currency: this.currentTontine.tontine.monnaie,
                type: 'interest'
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.data === 'complete') {
                    this.totalPay = 0;
                    this.totalAmount = 0;
                    this.selectedDue = [];
                    this.interestsDue = this.loanService.getLoanData();
                    this.loanService.RemoveLoanData();
                    this.loading = true;
                    this.getLoanData();
                }
            });
        });
    }
    // show the pin confirmation dilaog
    confirmPin() {
        this.payLoan();
    }
};
LoansInterestsPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_10__["LoanService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__["LoanErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
LoansInterestsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-interests',
        template: _raw_loader_loans_interests_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_interests_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansInterestsPage);



/***/ }),

/***/ "Oc8k":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-interests/loans-interests.page.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',currentTontine.tontine.tontine_id,'loans','my-loans',cycleId,seanceId]\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n      {{ 'MY_LOANS_TEXT' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'INTEREST_DUE_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"loans-interests\">\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid  *ngIf=\"!loading\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>{{'UNPAID_LOAN_INTERESTS_TEXT' | translate}} : {{interestsDue.length}}</p>\r\n        <ion-list *ngIf=\"interestsDue && interestsDue.length > 0\">\r\n          <ion-item *ngFor=\"let interest of interestsDue\">\r\n            <ion-checkbox (ionChange)=\"checkEvent($event, interest)\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n            <ion-label>\r\n              <h2><ion-text color=\"warning\">{{ interest.updated_at ? (interest.updated_at | toDateObj | date : 'mediumDate') : '' }}</ion-text> -  {{ interest.amount_interest ?  (interest.amount_interest | commadumper) : 0}} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }}</h2>\r\n            </ion-label>            \r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"totalPay != 0 && !loading\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\" (click)=\"payLoan()\"\r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\">\r\n    {{ 'PAY_TEXT' | translate }} {{ (totalPay | commadumper)  }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }} <span class=\"ion-text-lowercase\">{{ '('+ (selectedDue ? selectedDue.length : 0) + ('INTEREST_TEXT' | translate) + '(s))' }}</span>\r\n  </ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "bCUj":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-interests/loans-interests.page.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1pbnRlcmVzdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "zcqK":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-interests/loans-interests.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: LoansInterestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansInterestsPageModule", function() { return LoansInterestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_interests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans-interests.page */ "1PqD");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _loans_interests_page__WEBPACK_IMPORTED_MODULE_6__["LoansInterestsPage"]
    }
];
let LoansInterestsPageModule = class LoansInterestsPageModule {
};
LoansInterestsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_loans_interests_page__WEBPACK_IMPORTED_MODULE_6__["LoansInterestsPage"]]
    })
], LoansInterestsPageModule);



/***/ })

}]);
//# sourceMappingURL=loans-interests-loans-interests-module.js.map