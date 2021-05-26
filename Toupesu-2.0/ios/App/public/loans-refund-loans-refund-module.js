(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-refund-loans-refund-module"],{

/***/ "0cI3":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-refund/loans-refund-menu/loans-refund-menu.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"loans-request-menu-popover\">\r\n  <ion-item (click)=\"openValidation('validate')\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'APPROVER_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"openValidation('reject')\" lines=\"none\">\r\n    <ion-label>\r\n    {{ 'REJETER_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "5ZG2":
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/refund-validation/refund-validation.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: RefundValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundValidationComponent", function() { return RefundValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_refund_validation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./refund-validation.component.html */ "jwKn");
/* harmony import */ var _refund_validation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refund-validation.component.scss */ "nsrh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let RefundValidationComponent = class RefundValidationComponent {
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
    closeValidation(ans) {
        this.modatCtrl.dismiss(ans, 'cancel');
    }
    // validate the member debt
    validationAdmin(action, type) {
        switch (action) {
            case 'validate':
                this.approveType(type);
                break;
            case 'reject':
                this.rejectType(type);
                break;
            default:
                break;
        }
    }
    // approve type
    approveType(type) {
        switch (type) {
            case 'loan':
                this.approveLoanPayment();
                break;
            case 'interest':
                this.approveInterestPayment();
                break;
            default:
                break;
        }
    }
    // Approve the loan payment
    approveLoanPayment() {
        const param = {
            loan_payback_user_id: this.memberData.loan_payback_user_id,
            reason: this.reason
        };
        this.loading = true;
        this.translate.get('APPROVE_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loanService.validateLoanRefund(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('APPROVE_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.events.publish('loan-refund');
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
                            this.approveLoanPayment();
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
    // Approve the loan request
    approveInterestPayment() {
        const param = {
            interest_request_payment_id: this.memberData.interest_request_payment_id,
            reason: this.reason
        };
        this.loading = true;
        this.translate.get('APPROVE_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loanService.validateInterestRefund(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('APPROVE_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.events.publish('loan-refund');
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
                            this.approveInterestPayment();
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
    // reject type
    rejectType(type) {
        switch (type) {
            case 'loan':
                this.rejectLoanPayment();
                break;
            case 'interest':
                this.rejectInterestPayment();
                break;
            default:
                break;
        }
    }
    // Reject loan request
    rejectLoanPayment() {
        const param = {
            loan_payback_user_id: this.memberData.loan_payback_user_id,
            reason: this.reason
        };
        this.loading = true;
        this.translate.get('REJECT_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loanService.rejectLoanRefund(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('REJECT_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.events.publish('loan-refund');
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
                            this.rejectLoanPayment();
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
    // Reject interest request
    rejectInterestPayment() {
        const param = {
            interest_request_payment_id: this.memberData.interest_request_payment_id,
            reason: this.reason
        };
        this.loading = true;
        this.translate.get('REJECT_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loanService.rejectInterestRefund(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('REJECT_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.events.publish('loan-refund');
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
                            this.rejectInterestPayment();
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
RefundValidationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_9__["LoanService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_8__["LoanErrorService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] }
];
RefundValidationComponent.propDecorators = {
    requestAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    requestOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RefundValidationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-refund-validation',
        template: _raw_loader_refund_validation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_refund_validation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RefundValidationComponent);



/***/ }),

/***/ "6DAX":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-refund/loans-refund-menu/loans-refund-menu.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: LoansRefundMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansRefundMenuComponent", function() { return LoansRefundMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_refund_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-refund-menu.component.html */ "0cI3");
/* harmony import */ var _loans_refund_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-refund-menu.component.scss */ "QCeV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _refund_validation_refund_validation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../refund-validation/refund-validation.component */ "5ZG2");








let LoansRefundMenuComponent = class LoansRefundMenuComponent {
    constructor(popoverController, modatCtrl, tontine, params, events) {
        this.popoverController = popoverController;
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.params = params;
        this.events = events;
        this.memberData = this.params.get('data');
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() { }
    close() {
        this.popoverController.dismiss();
    }
    openValidation(option) {
        this.close();
        this.modatCtrl
            .create({
            component: _refund_validation_refund_validation_component__WEBPACK_IMPORTED_MODULE_7__["RefundValidationComponent"],
            componentProps: {
                requestAmount: this.memberData.data.infos_request.amount,
                requestOption: option,
                type: this.memberData.type,
                currency: this.currentTontine.tontine.monnaie,
                data: this.memberData.data
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(ans => {
                if (ans && (ans.data === 'approve' || ans.data === 'reject')) {
                    this.events.publish('loan-refund');
                }
            });
        });
    }
};
LoansRefundMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] }
];
LoansRefundMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-refund-menu',
        template: _raw_loader_loans_refund_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_refund_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansRefundMenuComponent);



/***/ }),

/***/ "A6Xc":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-refund/loans-refund.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1yZWZ1bmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "JwqH":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-refund/loans-refund.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: LoansRefundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansRefundPage", function() { return LoansRefundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_refund_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-refund.page.html */ "jgYT");
/* harmony import */ var _loans_refund_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-refund.page.scss */ "A6Xc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../message/message.component */ "9Uf8");
/* harmony import */ var _loans_refund_menu_loans_refund_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loans-refund-menu/loans-refund-menu.component */ "6DAX");
/* harmony import */ var _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../paid-proofs/paid-proofs.component */ "PJnU");
/* harmony import */ var _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/loan-global-data.service */ "2o4a");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");

















let LoansRefundPage = class LoansRefundPage {
    constructor(popoverController, modatCtrl, alertController, constant, userService, loanService, loanData, translate, tontine, loanError, error, events) {
        this.popoverController = popoverController;
        this.modatCtrl = modatCtrl;
        this.alertController = alertController;
        this.constant = constant;
        this.userService = userService;
        this.loanService = loanService;
        this.loanData = loanData;
        this.translate = translate;
        this.tontine = tontine;
        this.loanError = loanError;
        this.error = error;
        this.events = events;
        this.members = [];
        this.loading = false;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentSeance = this.currentTontine.seance_courante;
        this.currentCycle = this.currentTontine.cycle_courant;
        this.currentUser = this.userService.getUserData();
        this.nbItems = 10;
        this.status = '';
        this.allLoansData = [];
        this.allData = [];
        this.allInterestData = [];
        this.events.subscribe('loan-refund', () => {
            this.loading = true;
            this.getAllLoansRefund(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getAllLoansRefund(null);
    }
    openContextMenu(ev, member) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _loans_refund_menu_loans_refund_menu_component__WEBPACK_IMPORTED_MODULE_12__["LoansRefundMenuComponent"],
                componentProps: {
                    data: member
                },
                event: ev
            });
            return yield popover.present();
        });
    }
    // Get all loans request
    getAllLoansRefund(refreSher) {
        if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.cycle_courant) {
            const param = {
                tontine_id: this.currentTontine.tontine.tontine_id,
                cycle_id: this.currentTontine.cycle_courant.id
            };
            this.loanService.getLoanRefundList(param).subscribe((reponse) => {
                if (reponse && reponse.message === 'success') {
                    if (reponse && reponse.liste_requests && reponse.liste_requests.length) {
                        this.allLoansData = [];
                        this.allData = [];
                        this.filterData = [];
                        reponse.liste_requests.forEach(request => {
                            this.allLoansData.push({ type: 'loan', data: request });
                        });
                        this.filterData = this.allLoansData;
                        this.currentLoanData = this.filterData && this.filterData.length > 0 ? this.filterData[0] : null;
                        this.allData = this.allLoansData.filter(data => { return (data.data.infos_seance.id === this.currentLoanData.data.infos_seance.id && this.currentLoanData); });
                        if (this.allData.length > this.nbItems) {
                            this.members = [];
                            for (let i = 0; i < this.nbItems; i++) {
                                this.members.push(this.allData[this.members.length]);
                            }
                        }
                        else {
                            this.members = this.allData;
                        }
                    }
                    this.getAllInterestRefund(refreSher);
                }
                else {
                    this.loading = false;
                    if (refreSher) {
                        refreSher.target.complete();
                    }
                }
            }, error => {
                this.loading = false;
                if (refreSher) {
                    refreSher.target.complete();
                }
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getAllLoansRefund(refreSher);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else if (error && error.error && error.error.message === 'error') {
                    this.loanError.manageLoanError(error);
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            this.loading = false;
            if (refreSher) {
                refreSher.target.complete();
            }
        }
    }
    // Get all interest refund
    getAllInterestRefund(refreSher) {
        if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.cycle_courant) {
            const param = {
                tontine_id: this.currentTontine.tontine.tontine_id,
                cycle_id: this.currentTontine.cycle_courant.id
            };
            this.loanService.getInterestRefundList(param).subscribe((reponse) => {
                if (reponse && reponse.message === 'success') {
                    if (reponse && reponse.liste_requests && reponse.liste_requests.length) {
                        this.allInterestData = [];
                        this.allData = [];
                        this.filterData = [];
                        reponse.liste_requests.forEach(request => {
                            this.allInterestData.push({ type: 'interest', data: request });
                        });
                        this.filterData = this.filterData.concat(this.allLoansData);
                        this.filterData = this.filterData.concat(this.allInterestData);
                        this.currentLoanData = this.filterData && this.filterData.length > 0 ? this.filterData[0] : null;
                        this.allData = this.allInterestData.filter(data => { return (this.currentLoanData && data.data.infos_seance.id === this.currentLoanData.data.infos_seance.id); });
                        this.allData = this.allData.concat(this.allLoansData);
                        if (this.allData.length > this.nbItems) {
                            this.members = [];
                            for (let i = 0; i < this.nbItems; i++) {
                                this.members.push(this.allData[this.members.length]);
                            }
                        }
                        else {
                            this.members = this.allData;
                        }
                    }
                }
                if (refreSher) {
                    setTimeout(() => {
                        refreSher.target.complete();
                    }, 2000);
                }
                this.loading = false;
            }, error => {
                this.loading = false;
                if (refreSher) {
                    refreSher.target.complete();
                }
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getAllInterestRefund(refreSher);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else if (error && error.error && error.error.message === 'error') {
                    this.loanError.manageLoanError(error);
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            this.loading = false;
            if (refreSher) {
                refreSher.target.complete();
            }
        }
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getAllLoansRefund(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.members.length < this.allData.length) {
                    this.members.push(this.allData[this.members.length]);
                }
                else if (this.members.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Filter by loan seance 
    filterBySeance(cycleSeanceId) {
        this.currentLoanData = [];
        this.allData = [];
        const param = cycleSeanceId ? cycleSeanceId.split('#') : [];
        if (param && param.length > 0) {
            this.filterData.forEach(data => {
                if (data.data.infos_seance.cycle_id.toString() === param[0] && data.data.infos_seance.id.toString() === param[1]) {
                    this.allData.push(data);
                    this.currentLoanData = data;
                }
            });
        }
        if (this.allData.length > this.nbItems) {
            this.members = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.members.push(this.allData[this.members.length]);
            }
        }
        else {
            this.members = this.allData;
        }
    }
    selectPool() {
        const seanceData = [];
        const listSeance = [];
        let i = 0;
        this.filterData.forEach(loan => {
            if (!this.loanData.isSeanceNotIn(loan.data.infos_seance.cycle_id, loan.data.infos_seance.id, listSeance)) {
                listSeance.push(`${loan.data.infos_seance.cycle_id}${loan.data.infos_seance.id}`);
                this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
                    seanceData.push({
                        name: 'radio' + i,
                        label: `${trans.SESSION_TEXT} :${loan.data.infos_seance.numero_seance}`,
                        type: 'radio',
                        value: `${loan.data.infos_seance.cycle_id}#${loan.data.infos_seance.id}`,
                        checked: false
                    });
                });
                i++;
            }
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
                        handler: (ans) => {
                            this.filterBySeance(ans);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // get request statut
    getRequestStatut(status) {
        return this.constant.getRequestStatut(status);
    }
    // can accept or reject a loan request
    canAcceptOrRejectLoanRequest(data) {
        let ican = false;
        let hasValidate = false;
        data.liste_admin_approval.forEach(admin => {
            if (admin && admin.id === this.currentUser.id) {
                hasValidate = true;
            }
        });
        if (!hasValidate) {
            data.liste_admin_refusal.forEach(admin => {
                if (admin && admin.id === this.currentUser.id) {
                    hasValidate = true;
                }
            });
        }
        const nbAdminAproval = data.liste_admin_approval ? data.liste_admin_approval.length : 0;
        const nbAdminRefusal = data.liste_admin_refusal ? data.liste_admin_refusal.length : 0;
        if (data && data.infos_request && data.infos_request.status === 'pending' && (nbAdminAproval < data.number_max_admin_that_validate_loan || nbAdminRefusal < data.number_max_admin_that_validate_loan) && !hasValidate && this.currentTontine.tontine.administrator === 1) {
            ican = true;
        }
        return ican;
    }
    // Filter the list of loans name
    searchForMember(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((data) => {
                return (data.data.infos_user.firstname ? data.data.infos_user.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    data.data.infos_user.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.members = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.members.push(this.allData[this.members.length]);
            }
        }
        else {
            this.members = this.allData;
        }
    }
    // Filter the list of loans by status
    searchForStatus(status) {
        this.infiniteScroll.disabled = false;
        const val = status;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((data) => {
                return data.data.infos_request.status.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.members = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.members.push(this.allData[this.members.length]);
            }
        }
        else {
            this.members = this.allData;
        }
    }
    // show reject reason
    showRejectReason(data) {
        this.modatCtrl
            .create({
            component: _message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"],
            componentProps: {
                data: data
            }
        })
            .then(modalEl => {
            modalEl.present();
        });
    }
    // show the proofs
    showProofs(proofs) {
        console.log(proofs);
        this.modatCtrl
            .create({
            component: _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_13__["PaidProofsLoanComponent"],
            componentProps: {
                data: proofs
            }
        })
            .then(modalEl => {
            modalEl.present();
        });
    }
};
LoansRefundPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_10__["ConstantService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_5__["LoanService"] },
    { type: _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_14__["LoanGlobalDataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_6__["LoanErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_16__["EventService"] }
];
LoansRefundPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
LoansRefundPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-refund',
        template: _raw_loader_loans_refund_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_refund_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansRefundPage);



/***/ }),

/***/ "QCeV":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-refund/loans-refund-menu/loans-refund-menu.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1yZWZ1bmQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "jgYT":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-refund/loans-refund.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',currentTontine.tontine.tontine_id,'loans']\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n   {{ 'REFUND_REQUEST' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"loans-list\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid *ngIf=\"!loading\">\r\n    <div class=\"block-1\" *ngIf=\"filterData && filterData.length > 0\">\r\n      <ion-row class=\"row-1\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\" (click)=\"selectPool()\">\r\n          <b>{{ 'CYCLE_TEXT' | translate }} / {{ 'SESSION_TEXT' | translate }}</b> <ion-icon  name=\"ios-arrow-down\"></ion-icon><br/> \r\n          {{currentCycle ? currentCycle.numerocycle : 0}}/{{currentLoanData ? currentLoanData.data.infos_seance.numero_seance : 0}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"block-3\">\r\n      <ion-list> \r\n        <ion-item-divider sticky=\"true\" *ngIf=\"filterData && filterData.length > 0\">\r\n          <ion-input (ionChange)=\"searchForMember($event)\" placeholder=\"{{ 'M_NAME_TEXT' | translate }}\"></ion-input>\r\n          <ion-select (ionChange)=\"searchForStatus(status)\" [(ngModel)]=\"status\" placeholder=\"{{'STATUS_TEXT' | translate}}\">\r\n            <ion-select-option value=\"pending\">{{ 'PENDING_TEXT' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"refused\">{{ 'REJECT_TEXT' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"approved\">{{ 'APPROVE_TEXT' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"tout_paye\">{{ 'REQUEST_STATUT_4' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"pas_tout_paye\">{{ 'REQUEST_STATUT_5' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"\">{{ 'ALL_TEXT' | translate }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item-divider>\r\n        <ion-item *ngFor=\"let member of members\">             \r\n          <ion-label>  \r\n            <ion-text color=\"primary\"><h2><small>{{ 'M_NAME_TEXT' | translate }}: </small><b>{{member.data.infos_user ? member.data.infos_user.firstname : '' }} {{member.data.infos_user ? member.data.infos_user.lastname : '' }}</b></h2></ion-text>\r\n            <p><small>{{ 'EMAIL_TEXT' | translate }}:</small> {{member.data.infos_user ? member.data.infos_user.email : '' }}</p>              \r\n            <p><small>{{ 'PHONE_TEXT' | translate }}: </small> {{member.data.infos_user ? member.data.infos_user.phone : '' }} </p>            \r\n            <p>\r\n              <ion-text color=\"dark\">\r\n                <span class=\"ion-float-left\"><small>{{ 'A_SHARE_TEXT' | translate }}: </small>{{ member.data.numero_part ? member.data.numero_part : ''}}</span> \r\n                <span class=\"ion-float-right\"><small>{{ 'LOAN_TEXT' | translate }} {{ 'DUE_TEXT' | translate }}: </small>{{ member.data.loan_due ? (member.data.loan_due | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span>\r\n              </ion-text>\r\n            </p> \r\n            <p>\r\n              <ion-text color=\"dark\">\r\n                <span class=\"ion-float-left\"><small>{{ 'LOAN_TEXT' | translate }} {{ 'PAID_TEXT' | translate }}: </small>{{ member.data.loan_repaid ? (member.data.loan_repaid | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span> \r\n                <span class=\"ion-float-right\"><small>{{ 'OUTSTANDING_TEXT' | translate }}: </small>{{ member.data.outstanding ? (member.data.outstanding | commadumper) : 0}}  {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span>\r\n              </ion-text>\r\n            </p>          \r\n            <div class=\"request-row\">\r\n              <ion-text color=\"dark\">\r\n                <p>\r\n                  <span class=\"ion-float-left\"><small>{{ 'STATUS_TEXT' | translate }}: </small>{{ member.data.infos_request.status ? getRequestStatut(member.data.infos_request.status) : ''}}  <a *ngIf=\"member&&member.data.infos_request.status ==='refused'\" (click)=\"showRejectReason(member.data)\"> ({{'VIEW_DETAIL_TEXT' | translate}})</a></span> \r\n                  <span class=\"ion-float-right\"><small>{{ 'VALIDATION_QUOTA' | translate }}: </small>{{ (member.data.nbre_admin_ayant_approuve || member.data.nbre_admin_ayant_refuse) ? (member.data.nbre_admin_ayant_approuve + member.data.nbre_admin_ayant_refuse)  :  0}} / {{ member.data.number_max_admin_that_validate_loan ? member.data.number_max_admin_that_validate_loan : 0}}</span>\r\n                </p> \r\n                <br/>               \r\n              </ion-text>\r\n              <ion-text class=\"ion-float-left\" color=\"warning\">\r\n                <h2><small>{{ 'REQUESTED_PAID' | translate }}: </small><b>{{ member.data.infos_request ? (member.data.infos_request.amount | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</b></h2>\r\n               <span><a *ngIf=\"member&&member.data.proof.length > 0\" (click)=\"showProofs(member.data)\"> ({{'DEBT_VIEW_PROOF' | translate}})</a></span> \r\n              </ion-text>\r\n              <ion-buttons class=\"ion-float-right popover-menu\" *ngIf=\"canAcceptOrRejectLoanRequest(member.data)\">\r\n                <ion-button (click)=\"openContextMenu($event, member)\">\r\n                  <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"allData && allData.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'REFUND_LIST_TEXT3' | translate }}</p>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "jwKn":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/refund-validation/refund-validation.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title  [color]=\"requestOption === 'validate' ? 'success':'danger'\" class=\"ion-text-center ion-text-capitalize\">\r\n      {{ requestOption === 'validate' ? ('APPROVER_TEXT' | translate) : ('REJETER_TEXT' | translate) }} {{ 'PAYMENT_TITLE' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"validation\">\r\n  <ion-grid class=\"ion-padding-horizontal\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>{{ 'VALIDATION_TEXT_1' | translate }} {{ requestOption === 'validate' ? ('APPROVER_TEXT' | translate | lowercase) : ('REJETER_TEXT' | translate | lowercase) }} {{ 'VALIDATION_TEXT_2' | translate }} <b>{{ (requestAmount | commadumper) }} {{currency}}.</b>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" required>{{ 'ENTER_REASON_TEXT' | translate }}...</ion-label>\r\n          <ion-textarea [(ngModel)]=\"reason\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                [color]=\"requestOption === 'validate'? 'success':'danger'\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeValidation('cancel')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" [disabled]=\"((requestOption === 'reject' && !reason) || loading)\" (click)=\"validationAdmin(requestOption,type)\"\r\n                [color]=\"(requestOption === 'validate')? 'success':'danger'\"  \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n            {{ requestOption  === 'validate' ? ('APPROVER_TEXT' | translate) : ( 'REJETER_TEXT' | translate )}}\r\n          </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p *ngIf=\"loading\" class=\"ion-text-center ion-padding\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "nsrh":
/*!***************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/refund-validation/refund-validation.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtdmFsaWRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "q5aQ":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-refund/loans-refund.module.ts ***!
  \************************************************************************************************/
/*! exports provided: LoansRefundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansRefundPageModule", function() { return LoansRefundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_refund_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans-refund.page */ "JwqH");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _loans_refund_menu_loans_refund_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loans-refund-menu/loans-refund-menu.component */ "6DAX");
/* harmony import */ var _refund_validation_refund_validation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../refund-validation/refund-validation.component */ "5ZG2");










const routes = [
    {
        path: '',
        component: _loans_refund_page__WEBPACK_IMPORTED_MODULE_6__["LoansRefundPage"]
    }
];
let LoansRefundPageModule = class LoansRefundPageModule {
};
LoansRefundPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _loans_refund_page__WEBPACK_IMPORTED_MODULE_6__["LoansRefundPage"],
            _loans_refund_menu_loans_refund_menu_component__WEBPACK_IMPORTED_MODULE_8__["LoansRefundMenuComponent"],
            _refund_validation_refund_validation_component__WEBPACK_IMPORTED_MODULE_9__["RefundValidationComponent"]
        ],
        entryComponents: [
            _loans_refund_menu_loans_refund_menu_component__WEBPACK_IMPORTED_MODULE_8__["LoansRefundMenuComponent"],
            _refund_validation_refund_validation_component__WEBPACK_IMPORTED_MODULE_9__["RefundValidationComponent"]
        ]
    })
], LoansRefundPageModule);



/***/ })

}]);
//# sourceMappingURL=loans-refund-loans-refund-module.js.map