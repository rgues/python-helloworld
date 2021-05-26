(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["in-progress-paiement-in-progress-paiement-module"],{

/***/ "2wGm":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-paiement/in-progress-paiement.page.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/'+ currentTontine.tontine.tontine_id +'/debts/due'\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n     {{'DEBTS_IN_PROCESS' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\" *ngIf=\"reference\">\r\n    <ion-title>ref.: {{reference ? reference : '' }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"in-progress\">\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"currentUser\">\r\n      <ion-col size=\"12\">\r\n        <ion-text><b>{{'M_NAME_TEXT' | translate }}: </b> {{currentUser && currentUser.firstname ? currentUser.firstname : ''}} {{currentUser && currentUser.lastname ? currentUser.lastname : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-text><b>{{'PHONE_TEXT' | translate}}: </b> {{currentUser && currentUser.phone_with_prefix ? currentUser.phone_with_prefix : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-text><b>{{'EMAIL_TEXT' | translate}}: </b> {{currentUser && currentUser.email ? currentUser.email : ''}}</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"myDebts && myDebts.length > 0\">\r\n      <ion-col><ion-text color=\"primary\"><h4 class=\"ion-no-margin\">{{'DETAIL_OF_DEBTS' | translate}}</h4></ion-text></ion-col>\r\n    </ion-row>\r\n    <ion-row  *ngIf=\"myDebts && myDebts.length > 0\">\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let debt of myDebts\">\r\n            <ion-label>\r\n              <p>                \r\n                <span class=\"ion-float-left\"><small>{{ 'DATE_TEXT' | translate }}: </small>{{  debt && debt.created_at ? (debt.created_at.split(' ')[0] | date :'mediumDate') : ''}}</span>\r\n                <span class=\"ion-float-right\"><b><small>{{ 'CYCLE_TEXT' | translate }}/{{'SESSION_TEXT' | translate}}: </small>{{  debt && debt.numero_cycle ? debt.numero_cycle : 0  }}/{{ debt && debt.numero_seance ? debt.numero_seance : 0 }}</b></span> \r\n              </p>\r\n              <h3>{{ debt.description ? (debt.description | translate) : '' }}</h3>\r\n              <h2><ion-text color=\"warning\">{{ debt.montant ? (debt.montant | commadumper) : 0}} {{currentTontine.tontine.monnaie }}</ion-text></h2>\r\n            </ion-label>            \r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>\r\n              <div class=\"ion-text-end\">\r\n                <p>{{'DEBT_TOTAL_DUE' | translate }}: <b>{{(totalBill | commadumper)}} {{currentTontine.tontine.monnaie }}</b></p>\r\n                <p>{{'DEBT_TOTAL_PAID' | translate }}: {{0}} {{currentTontine.tontine.monnaie }}</p>\r\n                <p><ion-text color=\"danger\">{{ 'DEBT_BALANCE' | translate}}: <b>{{(totalBalance | commadumper)}} {{currentTontine.tontine.monnaie }}</b></ion-text></p>\r\n              </div>\r\n            </ion-label>            \r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"proofsList && proofsList.length === 0  && !loading && totalBill !== 0\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n        <ion-button expand=\"full\"  [disabled]=\"loadingPay\"  (click)=\"saveBill(0)\"\r\n              fill=\"outline\"\r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\">\r\n          {{'PAY_LATER_TEXT' | translate}}\r\n        </ion-button>\r\n    </ion-col>\r\n      <ion-col>\r\n          <ion-button expand=\"full\"  [disabled]=\"loadingPay\" \r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\"\r\n                (click)=\"confirmPin()\">\r\n           {{'DEBT_MAKE_PAYMENT' | translate}}\r\n          </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p *ngIf=\"loadingPay\" class=\"ion-text-center ion-padding\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "EpBE":
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-paiement/in-progress-paiement.page.ts ***!
  \**************************************************************************************************************/
/*! exports provided: InProgressPaiementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressPaiementPage", function() { return InProgressPaiementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_in_progress_paiement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./in-progress-paiement.page.html */ "2wGm");
/* harmony import */ var _in_progress_paiement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-progress-paiement.page.scss */ "tCQ7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_contribution_contribution_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/contribution/contribution.component */ "ZjA/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/contribution.service */ "US41");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
















let InProgressPaiementPage = class InProgressPaiementPage {
    constructor(modatCtrl, activate, userService, translate, contribution, navcontroler, formUtil, route, ui, debt, tontine, tontineError, error) {
        this.modatCtrl = modatCtrl;
        this.activate = activate;
        this.userService = userService;
        this.translate = translate;
        this.contribution = contribution;
        this.navcontroler = navcontroler;
        this.formUtil = formUtil;
        this.route = route;
        this.ui = ui;
        this.debt = debt;
        this.tontine = tontine;
        this.tontineError = tontineError;
        this.error = error;
        this.myDebts = [];
        this.proofsList = [];
        this.allCurrencies = [];
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentCycle = this.currentTontine.cycle_courant;
        this.totalDue = 0;
        this.totalBill = 0;
        this.totalBalance = 0;
        this.itemsData = [];
        this.reference = this.formUtil.getRandomId();
        this.itemsList = [];
        this.loadingPay = false;
        this.loading = false;
        this.allData = [];
        this.nbItems = 10;
        this.billId = this.activate.snapshot.params.id;
    }
    ngOnInit() {
        this.loading = false;
        this.getCurrency();
        this.storageBillData();
    }
    // Get all the currency
    getCurrency() {
        this.contribution.getCurrencies().subscribe((reponse) => {
            this.allCurrencies = reponse.device;
            this.allCurrencies.forEach(cur => {
                if (cur && cur.name === this.currentTontine.tontine.monnaie) {
                    this.currentCurrency = cur.id;
                }
            });
        }, error => {
            this.error.manageError(error);
        });
    }
    openContribute(name, amount, balance) {
        const params = { facture: this.currentFacture, items: this.myDebts, title: this.currentTontine.tontine.name };
        this.debt.sendDebtsData(params);
        this.modatCtrl
            .create({
            component: _shared_contribution_contribution_component__WEBPACK_IMPORTED_MODULE_5__["ContributionComponent"],
            componentProps: {
                tontineName: name,
                amountPay: amount,
                balance: balance,
                currency: this.currentFacture.device_name
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                this.navcontroler.setDirection('root');
                if (ans && ans.data === 'complete-all') {
                    this.currentTontine.tontine.administrator === 1 ?
                        this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'approved-detail']) :
                        this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'approved-detail-user']);
                }
                else if (ans && ans.data === 'complete') {
                    this.currentTontine.tontine.administrator === 1 ?
                        this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-approval-detail']) :
                        this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-approval-detail-user']);
                }
                else if (ans && ans.data === 'partial') {
                    this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-progress']);
                }
                else {
                    this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-progress']);
                }
            });
        });
    }
    // show the pin confirmation dilaog
    confirmPin() {
        this.saveBill(1);
    }
    // format the bill data
    storageBillData() {
        const billData = this.debt.getDebtsData();
        this.totalPay = billData.billAmount;
        this.totalDue = billData.dueAmount;
        this.totalBill = billData.billAmount;
        this.totalBalance = billData.balance;
        this.myDebts = billData.itemsList;
        this.itemsData = billData.items;
        this.currentUser = this.userService.getUserData();
        console.log(this.myDebts);
    }
    // Save a member bill 
    saveBill(index) {
        if (this.currentCurrency) {
            const data = {
                reference_facture: this.reference,
                device_id: this.currentCurrency,
                montant_total_facture: this.totalPay,
                liste_item: this.itemsData,
                tontine_id: this.currentTontine.tontine.tontine_id
            };
            if (index === 0) {
                this.translate.get('SAVING_TEXT').subscribe(trans => {
                    this.ui.presentLoading(trans);
                });
            }
            else {
                this.translate.get('PAYMENT_PROCESS').subscribe(trans => {
                    this.ui.presentLoading(trans);
                });
            }
            this.loadingPay = true;
            this.debt.saveMemberBill(data).subscribe((reponse) => {
                this.loadingPay = false;
                this.ui.dismissLoading();
                if (reponse && reponse.message === 'success') {
                    this.translate.get('DEBT_BILL_SAVE_MSG').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                    if (index === 0) {
                        this.navcontroler.setDirection('root');
                        this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', 'in-progress-list']);
                    }
                    else {
                        // construct object for make payment
                        this.currentFacture = reponse.facture;
                        this.openContribute(this.currentTontine.tontine.name, this.totalPay, this.totalBalance);
                    }
                }
            }, error => {
                this.loadingPay = false;
                if (error && error.error) {
                    if (error && error.error && error.error.user_not_found) {
                        this.loadingPay = true;
                        this.error.renewSession().then((data) => {
                            this.ui.dismissLoading();
                            if (data && data.result === "OK") {
                                this.saveBill(index);
                            }
                            else {
                                this.loadingPay = false;
                            }
                        });
                    }
                    else {
                        this.ui.dismissLoading();
                        this.tontineError.manageTontineError(error);
                    }
                }
                else {
                    this.ui.dismissLoading();
                    this.error.manageError(error);
                }
            });
        }
        else {
            this.translate.get('TRY_AGAIN_MSG').subscribe(trans => {
                this.ui.presentToast(trans);
                this.getCurrency();
            });
        }
    }
};
InProgressPaiementPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_11__["ContributionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__["FormUtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_15__["UiService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_8__["DebtsManagerService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__["TontineErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] }
];
InProgressPaiementPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
InProgressPaiementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-in-progress-paiement',
        template: _raw_loader_in_progress_paiement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_in_progress_paiement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InProgressPaiementPage);



/***/ }),

/***/ "eZVV":
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-paiement/in-progress-paiement.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: InProgressPaiementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressPaiementPageModule", function() { return InProgressPaiementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _shared_contribution_contribution_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/contribution/contribution.component */ "ZjA/");
/* harmony import */ var _in_progress_paiement_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./in-progress-paiement.page */ "EpBE");









const routes = [
    {
        path: '',
        component: _in_progress_paiement_page__WEBPACK_IMPORTED_MODULE_8__["InProgressPaiementPage"]
    }
];
let InProgressPaiementPageModule = class InProgressPaiementPageModule {
};
InProgressPaiementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _in_progress_paiement_page__WEBPACK_IMPORTED_MODULE_8__["InProgressPaiementPage"]
        ],
        entryComponents: [
            _shared_contribution_contribution_component__WEBPACK_IMPORTED_MODULE_7__["ContributionComponent"]
        ]
    })
], InProgressPaiementPageModule);



/***/ }),

/***/ "tCQ7":
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-paiement/in-progress-paiement.page.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbi1wcm9ncmVzcy1wYWllbWVudC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=in-progress-paiement-in-progress-paiement-module.js.map