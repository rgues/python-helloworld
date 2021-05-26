(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["in-progress-in-progress-module"],{

/***/ "JgoB":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress/in-progress.page.ts ***!
  \********************************************************************************************/
/*! exports provided: InProgressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressPage", function() { return InProgressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_in_progress_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./in-progress.page.html */ "Up7M");
/* harmony import */ var _in_progress_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-progress.page.scss */ "mWXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_contribution_contribution_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/contribution/contribution.component */ "ZjA/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/view-proof/view-proof.component */ "xVFS");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");














let InProgressPage = class InProgressPage {
    constructor(modatCtrl, activate, translate, alertController, navcontroler, route, ui, debt, tontine, tontineError, error) {
        this.modatCtrl = modatCtrl;
        this.activate = activate;
        this.translate = translate;
        this.alertController = alertController;
        this.navcontroler = navcontroler;
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
        this.totalDue = 0;
        this.totalBill = 0;
        this.totalBalance = 0;
        this.itemsData = [];
        this.itemsList = [];
        this.loadingPay = false;
        this.loading = false;
        this.allData = [];
        this.nbItems = 10;
        this.billId = this.activate.snapshot.params.id;
    }
    ngOnInit() {
        this.loading = true;
        this.getDebtsDone(null);
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
    // can delete the proof
    canDelete(proof) {
        return proof && proof.tontinte_payment_type_name === 'Traditional Banking'
            && this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
    }
    // can show the proof
    canShow(proof) {
        return proof && proof.tontinte_payment_type_name === 'Traditional Banking' && proof.receipt;
    }
    // show the pin confirmation dilaog
    confirmPin(name, amount, balance) {
        this.openContribute(name, amount, balance);
    }
    // format the bill data
    formatBillData(reponse) {
        this.totalDue = reponse.infos_facture[0].total_due;
        this.totalBill = reponse.infos_facture[0].total_paid;
        this.totalBalance = reponse.infos_facture[0].balance;
        this.currentFacture = reponse.infos_facture[0].facture;
        this.myDebts = reponse.liste_item_facture[0];
        this.currentUser = reponse.infos_user;
        let proofs = [];
        proofs = proofs.concat(reponse.liste_payment_with_traditional_banking);
        proofs = proofs.concat(reponse.liste_payment_with_online_wallet);
        proofs = proofs.concat(reponse.liste_payment_with_wallet);
        this.allData = proofs;
        if (this.allData.length > this.nbItems) {
            this.proofsList = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.proofsList.push(this.allData[this.proofsList.length]);
            }
        }
        else {
            this.proofsList = this.allData;
        }
    }
    // get the debts already done
    getDebtsDone(event) {
        const param = {
            facture_id: this.billId
        };
        this.debt.getBillInformationWithPayment(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.formatBillData(reponse);
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
            if (error && error.error) {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getDebtsDone(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
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
        this.getDebtsDone(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.proofsList.length < this.allData.length) {
                    this.proofsList.push(this.allData[this.proofsList.length]);
                }
                else if (this.proofsList.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // show the proof of payment
    showProof(proofs) {
        this.modatCtrl
            .create({
            component: src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_11__["ViewProofComponent"],
            componentProps: {
                proof: proofs.receipt
            }
        })
            .then(modalEl => modalEl.present());
    }
    confirmDelete(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['DEBT_PROOF_DELETE_TITLE', 'DEBT_PROOF_DELETE_MESG', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
                this.showDelete(param, trans.DEBT_PROOF_DELETE_TITLE, trans.DEBT_PROOF_DELETE_MESG, trans.CANCEL_TEXT, trans.YES_TEXT);
            });
        });
    }
    // Confirm delete
    showDelete(param, title, message, cancel_text, ok_text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: [
                    {
                        text: cancel_text,
                        handler: () => { }
                    }, {
                        text: ok_text,
                        handler: (ans) => {
                            this.deleteProf(param);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // delete the proof of payment
    deleteProf(proof) {
        const data = {
            reference_proof: proof.reference_transaction,
            facture_id: this.currentFacture.id,
            tontine_id: this.currentTontine.tontine.tontine_id
        };
        this.translate.get('DEBT_DELETING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.debt.deleteProofPayment(data).subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.translate.get('DEBT_PROOF_DELETE_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.getDebtsDone(null);
            }
        }, error => {
            if (error && error.error) {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.deleteProf(proof);
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
};
InProgressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_8__["DebtsManagerService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_12__["TontineErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] }
];
InProgressPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
InProgressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-in-progress',
        template: _raw_loader_in_progress_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_in_progress_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InProgressPage);



/***/ }),

/***/ "Up7M":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress/in-progress.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/'+ currentTontine.tontine.tontine_id +'/debts/in-progress-list'\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n     {{'DEBTS_IN_PROCESS' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\" *ngIf=\"currentFacture\">\r\n    <ion-title>ref.: {{currentFacture ? currentFacture.reference : '' }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"in-progress\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"currentUser\">\r\n      <ion-col size=\"12\">\r\n        <ion-text><b>{{'M_NAME_TEXT' | translate }}: </b> {{currentUser && currentUser.firstname ? currentUser.firstname : ''}} {{currentUser && currentUser.lastname ? currentUser.lastname : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-text><b>{{'PHONE_TEXT' | translate}}: </b> {{currentUser && currentUser.phone_with_prefix ? currentUser.phone_with_prefix : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-text><b>{{'EMAIL_TEXT' | translate}}: </b> {{currentUser && currentUser.email ? currentUser.email : ''}}</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"myDebts && myDebts.length > 0\">\r\n      <ion-col><ion-text color=\"primary\"><h4 class=\"ion-no-margin\">{{'DETAIL_OF_DEBTS' | translate}}</h4></ion-text></ion-col>\r\n    </ion-row>\r\n    <ion-row  *ngIf=\"myDebts && myDebts.length > 0\">\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let debt of myDebts\">\r\n            <ion-label>\r\n              <p>                \r\n                <span class=\"ion-float-left\"><small>{{ 'DATE_TEXT' | translate }}: </small>{{  debt && debt.created_at ? (debt.created_at.split(' ')[0] | date :'mediumDate') : ''}}</span>\r\n                <span class=\"ion-float-right\"><b><small>{{ 'CYCLE_TEXT' | translate }}/{{'SESSION_TEXT' | translate}}: </small>{{ debt && debt.numerocycle ? debt && debt.numerocycle : 0 }}/{{ debt && debt.numero_seance ? debt.numero_seance : 0 }}</b></span> \r\n              </p>\r\n              <h3>{{ debt.typecontribution_name ? (debt.typecontribution_name | translate) : '' }}</h3>\r\n              <h2><ion-text color=\"warning\">{{ debt.montant ? (debt.montant | commadumper) : 0}} {{currentTontine.tontine.monnaie }}</ion-text></h2>\r\n            </ion-label>            \r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>\r\n              <div class=\"ion-text-end\">\r\n                <p>{{'DEBT_TOTAL_DUE' | translate }}: <b>{{(totalDue | commadumper)}} {{currentTontine.tontine.monnaie }}</b></p>\r\n                <p>{{'DEBT_TOTAL_PAID' | translate }}: {{(totalBill | commadumper)}} {{currentTontine.tontine.monnaie }}</p>\r\n                <p><ion-text color=\"danger\">{{ 'DEBT_BALANCE' | translate}}: <b>{{(totalBalance | commadumper)}} {{currentTontine.tontine.monnaie }}</b></ion-text></p>\r\n              </div>\r\n            </ion-label>            \r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"proofsList && proofsList.length > 0\">\r\n      <ion-col>\r\n        <ion-text color=\"primary\"><h4 class=\"ion-no-margin\">{{'DEBT_PAYMENT_ALREADY_DONE' | translate}}</h4></ion-text>\r\n        <ng-container *ngFor=\"let proof of proofsList\">\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-buttons slot=\"start\" *ngIf=\"canDelete(proof)\" >\r\n                <ion-button (click)=\"confirmDelete(proof)\"><ion-icon name=\"trash\" color=\"danger\"></ion-icon></ion-button>\r\n              </ion-buttons> \r\n              \r\n              <ion-label>Ref.: {{ proof.reference_transaction ? proof.reference_transaction : ''  }}</ion-label>\r\n              <ion-button *ngIf=\"canShow(proof)\" fill=\"outline\" slot=\"end\" (click)=\"showProof(proof)\">{{'DEBT_VIEW_PROOF' | translate}}</ion-button>\r\n            </ion-item>\r\n          \r\n            <ion-card-content>\r\n              <ion-grid>\r\n                <ion-row class=\"ion-justify-content-center ion-align-items-stretch ion-text-center\">\r\n                  <ion-col size=\"4\">\r\n                    <small><b>{{'DATE_TEXT' | translate}}</b></small><br/>\r\n                    <ion-text>{{ proof.date ? proof.date.split(' ')[0] : '' }}</ion-text>  \r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <small><b>{{ 'DEBT_PAYMENT_MODE' | translate }}</b></small><br/>\r\n                    <ion-text *ngIf=\"proof.with_cash === 0\">\r\n                      {{ proof.tontinte_payment_type_name ? (proof.tontinte_payment_type_name | translate) : ''  }}\r\n                    </ion-text>\r\n                    <ion-text *ngIf=\"proof.with_cash === 1\">{{ 'CASH_PAYMENT' | translate  }}</ion-text>\r\n                    <ion-text  *ngIf=\"proof && proof.tontinte_payment_type_name ==='Online Wallet'\"> \r\n                      {{proof.typepaiement_name ? (proof.typepaiement_name | translate | lowercase) :'' }}\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <small><b>{{'AMOUNT_TEXT' | translate}}</b></small><br/>\r\n                    <ion-text color=\"primary\"><b>{{ proof.montant ? (proof.montant | commadumper) : 0  }} {{proof.device_name ? proof.device_name :'' }} </b></ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ng-container>        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"proofsList && proofsList.length === 0  && !loading \">\r\n    <p class=\"ion-padding ion-text-center\">{{ 'BILL_PROOF_EMPTY' | translate}}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"!loading && totalBalance !== 0\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\"\r\n                (click)=\"confirmPin(currentTontine.tontine.name,totalDue,totalBalance)\">\r\n           {{'DEBT_MAKE_PAYMENT' | translate}}\r\n          </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p *ngIf=\"loadingPay\" class=\"ion-text-center ion-padding\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "mWXE":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress/in-progress.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbi1wcm9ncmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "rqaP":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress/in-progress.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: InProgressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressPageModule", function() { return InProgressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _in_progress_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./in-progress.page */ "JgoB");
/* harmony import */ var _shared_contribution_contribution_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/contribution/contribution.component */ "ZjA/");









const routes = [
    {
        path: '',
        component: _in_progress_page__WEBPACK_IMPORTED_MODULE_7__["InProgressPage"]
    }
];
let InProgressPageModule = class InProgressPageModule {
};
InProgressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _in_progress_page__WEBPACK_IMPORTED_MODULE_7__["InProgressPage"]
        ],
        entryComponents: [
            _shared_contribution_contribution_component__WEBPACK_IMPORTED_MODULE_8__["ContributionComponent"]
        ]
    })
], InProgressPageModule);



/***/ })

}]);
//# sourceMappingURL=in-progress-in-progress-module.js.map