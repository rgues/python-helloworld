(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-list-loans-list-module"],{

/***/ "0pmB":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-list/loans-request-menu/loans-request-menu.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1yZXF1ZXN0LW1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Be1z":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-list/loans-request-menu/loans-request-menu.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: LoansRequestMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansRequestMenuComponent", function() { return LoansRequestMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_request_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-request-menu.component.html */ "MNc3");
/* harmony import */ var _loans_request_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-request-menu.component.scss */ "0pmB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reason_reason_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reason/reason.component */ "3flG");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");








let LoansRequestMenuComponent = class LoansRequestMenuComponent {
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
            component: _reason_reason_component__WEBPACK_IMPORTED_MODULE_5__["ReasonComponent"],
            componentProps: {
                requestAmount: this.memberData.current_request,
                requestOption: option,
                currency: this.currentTontine.tontine.monnaie,
                data: this.memberData
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(ans => {
                if (ans && (ans.data === 'approve' || ans.data === 'reject')) {
                    this.events.publish('loan-request');
                }
            });
        });
    }
};
LoansRequestMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_7__["EventService"] }
];
LoansRequestMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-request-menu',
        template: _raw_loader_loans_request_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_request_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansRequestMenuComponent);



/***/ }),

/***/ "DkrG":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-list/loans-list.module.ts ***!
  \********************************************************************************************/
/*! exports provided: LoansListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansListPageModule", function() { return LoansListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans-list.page */ "KnVm");
/* harmony import */ var _loans_request_menu_loans_request_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loans-request-menu/loans-request-menu.component */ "Be1z");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");









const routes = [
    {
        path: '',
        component: _loans_list_page__WEBPACK_IMPORTED_MODULE_6__["LoansListPage"]
    }
];
let LoansListPageModule = class LoansListPageModule {
};
LoansListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _loans_list_page__WEBPACK_IMPORTED_MODULE_6__["LoansListPage"],
            _loans_request_menu_loans_request_menu_component__WEBPACK_IMPORTED_MODULE_7__["LoansRequestMenuComponent"]
        ],
        entryComponents: [
            _loans_request_menu_loans_request_menu_component__WEBPACK_IMPORTED_MODULE_7__["LoansRequestMenuComponent"]
        ]
    })
], LoansListPageModule);



/***/ }),

/***/ "KnVm":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-list/loans-list.page.ts ***!
  \******************************************************************************************/
/*! exports provided: LoansListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansListPage", function() { return LoansListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loans_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loans-list.page.html */ "bTr2");
/* harmony import */ var _loans_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans-list.page.scss */ "nw7a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loans_request_menu_loans_request_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loans-request-menu/loans-request-menu.component */ "Be1z");
/* harmony import */ var _service_loan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/loan.service */ "TH4E");
/* harmony import */ var src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service */ "WfuF");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../message/message.component */ "9Uf8");
/* harmony import */ var _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/loan-global-data.service */ "2o4a");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");

















let LoansListPage = class LoansListPage {
    constructor(popoverController, modatCtrl, alertController, constant, userService, loanService, loanData, translate, util, tontine, loanError, error, events) {
        this.popoverController = popoverController;
        this.modatCtrl = modatCtrl;
        this.alertController = alertController;
        this.constant = constant;
        this.userService = userService;
        this.loanService = loanService;
        this.loanData = loanData;
        this.translate = translate;
        this.util = util;
        this.tontine = tontine;
        this.loanError = loanError;
        this.error = error;
        this.events = events;
        this.members = [];
        this.loading = false;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentUser = this.userService.getUserData();
        this.nbItems = 10;
        this.status = '';
        this.allLoansData = [];
        this.events.subscribe('loan-action', () => {
            this.loading = true;
            this.getAllLoans(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getAllLoans(null);
    }
    openContextMenu(ev, member) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _loans_request_menu_loans_request_menu_component__WEBPACK_IMPORTED_MODULE_5__["LoansRequestMenuComponent"],
                componentProps: {
                    data: member
                },
                event: ev
            });
            return yield popover.present();
        });
    }
    // Get all loans request
    getAllLoans(refreSher) {
        if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.cycle_courant) {
            const param = {
                tontine_id: this.currentTontine.tontine.tontine_id,
                cycle_id: this.currentTontine.cycle_courant.id
            };
            this.loanService.getLoanRequest(param).subscribe((reponse) => {
                if (reponse && reponse.message === 'success') {
                    if (reponse && reponse.liste_seances && reponse.liste_seances.length) {
                        this.allLoansData = reponse.liste_seances;
                        this.currentLoanData = reponse.liste_seances[0];
                        this.allData = this.util.orderByKeyUp(reponse.liste_seances[0].liste_request_loan, 'updated_at');
                        this.filterData = this.allData;
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
                            this.getAllLoans(refreSher);
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
        }
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getAllLoans(event);
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
        const param = cycleSeanceId.split('#');
        this.allLoansData.forEach(data => {
            if (data.numero_cycle.toString() === param[0] && data.numero_seance.toString() === param[1]) {
                this.currentLoanData = data;
            }
        });
        if (this.currentLoanData && this.currentLoanData.liste_request_loan && this.currentLoanData.liste_request_loan.length > 0) {
            this.allData = this.util.orderByKeyUp(this.currentLoanData.liste_request_loan, 'updated_at');
            this.filterData = this.allData;
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
        this.translate.get(['OK_TEXT', 'CANCEL_TEXT', 'FILTER_TEXT']).subscribe(trans => {
            this.presentAlertRadio(this.loanData.selectPoolData(this.allLoansData), `${trans.OK_TEXT}`, `${trans.CANCEL_TEXT}`, `${trans.FILTER_TEXT}`);
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
    // get request statut
    getRequestStatut(status) {
        return this.constant.getRequestStatut(status);
    }
    // Filter the list of loans name
    searchForMember(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((data) => {
                return (data.infos_user.firstname ? data.infos_user.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    data.infos_user.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
                return data.status_loan.toLowerCase().indexOf(val.toLowerCase()) > -1;
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
        if (data && data.status_loan === 'pending' && (nbAdminAproval < data.number_max_admin_that_validate_loan || nbAdminRefusal < data.number_max_admin_that_validate_loan) && !hasValidate && this.currentTontine.tontine.administrator === 1) {
            ican = true;
        }
        return ican;
    }
    // show reject reason
    showRejectReason(data) {
        this.modatCtrl
            .create({
            component: _message_message_component__WEBPACK_IMPORTED_MODULE_12__["MessageComponent"],
            componentProps: {
                data: data
            }
        })
            .then(modalEl => {
            modalEl.present();
        });
    }
};
LoansListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_11__["ConstantService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] },
    { type: _service_loan_service__WEBPACK_IMPORTED_MODULE_6__["LoanService"] },
    { type: _service_loan_global_data_service__WEBPACK_IMPORTED_MODULE_13__["LoanGlobalDataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: src_app_dashboard_my_tontines_tontine_detail_loans_service_loan_error_service__WEBPACK_IMPORTED_MODULE_7__["LoanErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_16__["EventService"] }
];
LoansListPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
LoansListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loans-list',
        template: _raw_loader_loans_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loans_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoansListPage);



/***/ }),

/***/ "MNc3":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-list/loans-request-menu/loans-request-menu.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"loans-request-menu-popover\">\r\n  <ion-item (click)=\"openValidation('validate')\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'APPROVER_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"openValidation('reject')\" lines=\"none\">\r\n    <ion-label>\r\n    {{ 'REJETER_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "bTr2":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/loans/loans-list/loans-list.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',currentTontine.tontine.tontine_id,'loans']\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n   {{ 'ALL_LOANS' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"loans-list\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid *ngIf=\"!loading\">\r\n    <div class=\"block-1\">\r\n      <ion-row class=\"row-1\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\" (click)=\"selectPool()\">\r\n          <b>{{ 'CYCLE_TEXT' | translate }} / {{ 'SESSION_TEXT' | translate }}</b> <ion-icon *ngIf=\"allLoansData && allLoansData.length > 0\" name=\"ios-arrow-down\"></ion-icon><br/> \r\n          {{currentLoanData ? currentLoanData.numero_cycle : 0}}/{{currentLoanData ? currentLoanData.numero_seance : 0}}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'INTEREST_EARNED_TEXT' | translate }}</b><br/> \r\n          {{currentLoanData ? (currentLoanData.interest_earned | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-2\">\r\n      <ion-card>\r\n        <ion-card-content class=\"ion-text-center ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <div class=\"t-balance\">\r\n                <ion-text color=\"danger\">\r\n                  <span class=\"desc\">{{ 'CASH_AVALAIBLE' | translate }}: {{currentLoanData ? (currentLoanData.cash_available | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span> \r\n                </ion-text> <br/>\r\n                <ion-text  color=\"dark\">\r\n                  <span class=\"desc\">({{ 'INITIAL_CASH' | translate }}: {{currentLoanData ? (currentLoanData.solde_initial | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}})</span>\r\n                </ion-text>\r\n              </div>\r\n            </ion-col> \r\n            <ion-col size=\"4\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'LOAN_TEXT' | translate }} <br/>{{ 'REQUEST_TEXT' | translate }}<br/>({{currentTontine ? currentTontine.tontine.monnaie : ''}})</div>\r\n                <div class=\"menu-amount\">{{currentLoanData ? (currentLoanData.cash_total_loan_seance | commadumper) : 0}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'LOAN_TEXT' | translate }}<br/> {{ 'APPROVE_TEXT' | translate }}<br/>({{currentTontine ? currentTontine.tontine.monnaie : ''}})</div>\r\n                <div class=\"menu-amount\">{{currentLoanData ? (currentLoanData.cash_loan_approval | commadumper) : 0}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"col-button\">\r\n              <div class=\"desc\">{{ 'LOAN_TEXT' | translate }} <br/>  {{ 'REJECT_TEXT' | translate }}<br/>({{currentTontine ? currentTontine.tontine.monnaie : ''}})</div>\r\n              <div class=\"menu-amount\">{{currentLoanData ? (currentLoanData.cash_loan_refusal | commadumper) : 0}}</div>\r\n          </ion-col>\r\n          </ion-row>            \r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div class=\"block-3\">\r\n      <ion-list>\r\n        <ion-item-divider sticky=\"true\" *ngIf=\"filterData && filterData.length > 0\">\r\n          <ion-input (ionChange)=\"searchForMember($event)\" placeholder=\"{{ 'M_NAME_TEXT' | translate }}\"></ion-input>\r\n          <ion-select (ionChange)=\"searchForStatus(status)\" [(ngModel)]=\"status\" placeholder=\"{{'STATUS_TEXT' | translate}}\">\r\n            <ion-select-option value=\"pending\">{{ 'PENDING_TEXT' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"refused\">{{ 'REJECT_TEXT' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"approved\">{{ 'APPROVE_TEXT' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"tout_paye\">{{ 'REQUEST_STATUT_4' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"pas_tout_paye\">{{ 'REQUEST_STATUT_5' | translate }}</ion-select-option>\r\n            <ion-select-option value=\"\">{{ 'ALL_TEXT' | translate }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item-divider> \r\n        <ion-item lines=\"none\">\r\n          <small>{{ 'TOTAL_FOUND' | translate }}: {{currentLoanData ? currentLoanData.count_requests : 0}} <em>({{ 'PENDING_TEXT' | translate }}: {{currentLoanData ? currentLoanData.count_requests_pending : 0}}  | {{ 'REJECT_TEXT' | translate }}: {{currentLoanData ? currentLoanData.count_requests_rejected : 0}} | {{ 'APPROVE_TEXT' | translate }}: {{currentLoanData ? currentLoanData.count_requests_approved : 0}})</em></small>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let member of members\">             \r\n          <ion-label>\r\n            <ion-text color=\"primary\"><h2><small>{{ 'M_NAME_TEXT' | translate }}: </small><b>{{member.infos_user ? member.infos_user.firstname : '' }} {{member.infos_user ? member.infos_user.lastname : '' }}</b></h2></ion-text>\r\n            <p><small>{{ 'EMAIL_TEXT' | translate }}:</small> {{member.infos_user ? member.infos_user.email : '' }}</p>              \r\n            <p><small>{{ 'PHONE_TEXT' | translate }}: </small> {{member.infos_user ? member.infos_user.phone : '' }} </p>                \r\n            <p>\r\n              <ion-text color=\"dark\">\r\n                <span class=\"ion-float-left\"><small>{{ 'A_SHARE_TEXT' | translate }}: </small>{{ member.numero_part ? member.numero_part : ''}}</span> \r\n                <span class=\"ion-float-right\"><small>{{ 'LOAN_TEXT' | translate }} {{ 'DUE_TEXT' | translate }}: </small>{{ member.loan_due ? (member.loan_due | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span>\r\n              </ion-text>\r\n            </p> \r\n            <p>\r\n              <ion-text color=\"dark\">\r\n                <span class=\"ion-float-left\"><small>{{ 'LOAN_TEXT' | translate }} {{ 'PAID_TEXT' | translate }}: </small>{{ member.loan_paid ? (member.loan_paid | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span> \r\n                <span class=\"ion-float-right\"><small>{{ 'OUTSTANDING_TEXT' | translate }}: </small>{{ member.outstanding ? (member.outstanding | commadumper) : 0}}  {{currentTontine ? currentTontine.tontine.monnaie : ''}}</span>\r\n              </ion-text>\r\n            </p>          \r\n            <div class=\"request-row\" *ngIf=\"member.current_request  != 0\">\r\n              <ion-text color=\"dark\">\r\n                <p>\r\n                  <span class=\"ion-float-left\"><small>{{ 'STATUS_TEXT' | translate }}: </small>{{ member.status_loan ? getRequestStatut(member.status_loan) : ''}}  <a *ngIf=\"member&&member.status_loan ==='refused'\" (click)=\"showRejectReason(member)\"> ({{'VIEW_DETAIL_TEXT' | translate}})</a></span> \r\n                  <span class=\"ion-float-right\"><small>{{ 'VALIDATION_QUOTA' | translate }}: </small>{{ member.nbre_admin_ayant_approuve ? member.nbre_admin_ayant_approuve : member.nbre_admin_ayant_refuse ? member.nbre_admin_ayant_refuse :  0}} / {{ member.number_max_admin_that_validate_loan ? member.number_max_admin_that_validate_loan : 0}}</span>\r\n                </p> \r\n                <br/>               \r\n              </ion-text>\r\n              <ion-text class=\"ion-float-left\" color=\"warning\">\r\n                <h2><small>{{ 'CURRENT_REQUESTED' | translate }}: </small><b>{{ member.current_request ? (member.current_request | commadumper) : 0}} {{currentTontine ? currentTontine.tontine.monnaie : ''}}</b></h2>\r\n              </ion-text>\r\n              <ion-buttons class=\"ion-float-right popover-menu\" *ngIf=\"canAcceptOrRejectLoanRequest(member)\">\r\n                <ion-button (click)=\"openContextMenu($event, member)\">\r\n                  <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  \r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "nw7a":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/loans/loans-list/loans-list.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=loans-list-loans-list-module.js.map