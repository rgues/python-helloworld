(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rejected-detail-rejected-detail-module"],{

/***/ "/R+x":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/rejected-detail/rejected-detail.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: RejectedDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedDetailPage", function() { return RejectedDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rejected_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rejected-detail.page.html */ "jhoC");
/* harmony import */ var _rejected_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rejected-detail.page.scss */ "J4wd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/view-proof/view-proof.component */ "xVFS");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");













let RejectedDetailPage = class RejectedDetailPage {
    constructor(tontine, debt, ui, modatCtrl, alertController, translate, error, tontineError, activate) {
        this.tontine = tontine;
        this.debt = debt;
        this.ui = ui;
        this.modatCtrl = modatCtrl;
        this.alertController = alertController;
        this.translate = translate;
        this.error = error;
        this.tontineError = tontineError;
        this.activate = activate;
        this.myDebts = [];
        this.proofsList = [];
        this.totalDue = 0;
        this.totalBill = 0;
        this.totalBalance = 0;
        this.itemsData = [];
        this.itemsList = [];
        this.loadingPay = false;
        this.loading = false;
        this.allData = [];
        this.nbItems = 10;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.billId = this.activate.snapshot.params.id;
        this.currentDebt = this.debt.getDebtsData();
    }
    ngOnInit() {
        this.loading = true;
        this.getRjectedDetailDone(null);
    }
    showProof(proofs) {
        this.modatCtrl
            .create({
            component: src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_10__["ViewProofComponent"],
            componentProps: {
                proof: proofs.receipt
            }
        })
            .then(modalEl => modalEl.present());
    }
    // format the bill data
    formatBillData(reponse) {
        this.validation = reponse.validate_quotation[0];
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
    // get the debts details done
    getRjectedDetailDone(event) {
        const param = {
            facture_id: this.billId
        };
        this.debt.getBillPaymentAdmin(param)
            .subscribe((reponse) => {
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
                            this.getRjectedDetailDone(event);
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
        this.getRjectedDetailDone(event);
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
    confirmDelete(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['DEBT_PROOF_DELETE_TITLE', 'DEBT_PROOF_DELETE_MESG']).subscribe(trans => {
                this.showDelete(param, trans.DEBT_PROOF_DELETE_TITLE, trans.DEBT_PROOF_DELETE_MESG);
            });
        });
    }
    // Confirm delete
    showDelete(param, title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (ans) => {
                            this.deleteProf(param);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // delete the proof of payme
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
                this.getRjectedDetailDone(null);
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
RejectedDetailPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_6__["DebtsManagerService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_11__["TontineErrorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
RejectedDetailPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
RejectedDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rejected-detail',
        template: _raw_loader_rejected_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rejected_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RejectedDetailPage);



/***/ }),

/***/ "J4wd":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/rejected-detail/rejected-detail.page.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWplY3RlZC1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "jhoC":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/rejected-detail/rejected-detail.page.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/'+currentTontine.tontine.tontine_id+'/debts/rejected'\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n      {{ 'DEBTS_REJECTED' | translate }} {{'DETAIL_TEXT' | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>ref.: {{ currentDebt.facture ? currentDebt.facture.reference : '' }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"in-approval-detail\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-stretch\" *ngIf=\"currentUser || validation\">\r\n      <ion-col size=\"12\">\r\n        <ion-text><b>{{ 'M_NAME_TEXT' | translate }}: </b> {{currentUser ? currentUser.firstname : ''}}\r\n          {{currentUser ? currentUser.lastname : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-text><b>{{ 'PHONE_TEXT' | translate }}: </b><br /> {{currentUser ? currentUser.phone : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-text><b>{{ 'EMAIL_TEXT' | translate }}: </b><br /> {{currentUser ? currentUser.email : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-text><b>{{ 'DEBT_SUBMIT_ON' | translate }}: </b><br />\r\n          {{validation && validation.submit_on ? validation.submit_on.split(' ')[0] : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-text><b>{{ 'VALIDATE_ON' | translate }}: </b><br />\r\n          {{validation && validation.validate_on ? validation.validate_on.split(' ')[0] : ''}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-text><b>{{ 'VALIDATION_QUOTA' | translate}}: </b>\r\n          {{validation ? validation.nbre_admin_ayant_valide : ''}}/{{validation ? validation.nbre_admin_devant_valide : ''}}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <span><b>{{ 'TONTINE_INVITE_TEXT5' | translate }}: </b>\r\n          <ion-text color=\"danger\"> {{currentFacture ? (currentFacture.status  | translate) : ''}}</ion-text>\r\n        </span>\r\n      </ion-col>\r\n     <ion-col size=\"12\">\r\n        <span><b>{{ 'REASON_TEXT' | translate }}: </b>\r\n          <ion-text color=\"danger\">{{ currentDebt && currentDebt.reason && currentDebt.reason[0] ? currentDebt.reason[0].reason : '' }}</ion-text>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"myDebts && myDebts.length > 0\">\r\n      <ion-col>\r\n        <ion-text color=\"primary\">\r\n          <h4 class=\"ion-no-margin\">{{'DETAIL_OF_DEBTS' | translate}}</h4>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"myDebts && myDebts.length > 0\">\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let debt of myDebts\">\r\n            <ion-label>\r\n              <p>\r\n                <span class=\"ion-float-left\"><small>{{ 'DATE_TEXT' | translate }}:\r\n                  </small>{{  debt && debt.created_at ? (debt.created_at.split(' ')[0] | date :'mediumDate') : ''}}</span>\r\n                <span class=\"ion-float-right\"><b><small>{{ 'CYCLE_TEXT' | translate }}/{{'SESSION_TEXT' | translate}}:\r\n                    </small>{{ debt && debt.numerocycle ? debt && debt.numerocycle : 0 }}/{{ debt && debt.numero_seance ? debt.numero_seance : 0 }}</b></span>\r\n              </p>\r\n              <h3>{{ debt.typecontribution_name ? (debt.typecontribution_name | translate) : '' }}</h3>\r\n              <h2>\r\n                <ion-text color=\"warning\">{{ debt.montant ? (debt.montant | commadumper) : 0}} {{currentTontine.tontine.monnaie }}\r\n                </ion-text>\r\n              </h2>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>\r\n              <div class=\"ion-text-end\">\r\n                <p>{{'DEBT_TOTAL_DUE' | translate }}: <b>{{(totalDue | commadumper)}} {{currentTontine.tontine.monnaie }}</b></p>\r\n                <p>{{'DEBT_TOTAL_PAID' | translate }}: {{(totalBill | commadumper)}} {{currentTontine.tontine.monnaie }}</p>\r\n                <p>\r\n                  <ion-text color=\"danger\">{{ 'DEBT_BALANCE' | translate}}: <b>{{(totalBalance | commadumper)}}\r\n                      {{currentTontine.tontine.monnaie }}</b></ion-text>\r\n                </p>\r\n              </div>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"proofsList && proofsList.length > 0\">\r\n      <ion-col>\r\n        <ion-text color=\"primary\">\r\n          <h4 class=\"ion-no-margin\">{{'DEBT_PAYMENT_ALREADY_DONE' | translate}}</h4>\r\n        </ion-text>\r\n        <ng-container *ngFor=\"let proof of proofsList\">\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-buttons slot=\"start\" *ngIf=\"proof && proof.tontinte_payment_type_name ==='Traditional Banking'\">\r\n                <ion-button (click)=\"confirmDelete(proof)\">\r\n                  <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons>\r\n\r\n              <ion-label>Ref.: {{ proof.reference_transaction ? proof.reference_transaction : ''  }}</ion-label>\r\n              <ion-button *ngIf=\"proof && proof.tontinte_payment_type_name ==='Traditional Banking' &&proof.receipt\" fill=\"outline\"\r\n                slot=\"end\" (click)=\"showProof(proof)\">{{'DEBT_VIEW_PROOF' | translate}}</ion-button>\r\n            </ion-item>\r\n\r\n            <ion-card-content>\r\n              <ion-grid>\r\n                <ion-row class=\"ion-justify-content-center ion-align-items-stretch ion-text-center\">\r\n                  <ion-col size=\"4\">\r\n                    <small><b>{{'DATE_TEXT' | translate}}</b></small><br />\r\n                    <ion-text>{{ proof.date ? proof.date.split(' ')[0] : '' }}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <small><b>{{ 'DEBT_PAYMENT_MODE' | translate }}</b></small><br />\r\n                    <ion-text *ngIf=\"proof.with_cash === 0\">{{ proof.tontinte_payment_type_name ? (proof.tontinte_payment_type_name | translate  | lowercase) : ''  }}</ion-text>\r\n                    <ion-text *ngIf=\"proof.with_cash === 1\">{{ 'CASH_PAYMENT' | translate  | lowercase }}</ion-text>\r\n                    <ion-text  *ngIf=\"proof && proof.tontinte_payment_type_name ==='Online Wallet'\"> \r\n                      {{proof.typepaiement_name ? (proof.typepaiement_name | translate  | lowercase) :'' }}\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <small><b>{{'AMOUNT_TEXT' | translate}}</b></small><br />\r\n                    <ion-text color=\"primary\"><b>{{ proof.montant ? (proof.montant | commadumper) : 0  }}\r\n                        {{proof.device_name ? proof.device_name :'' }} </b></ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ng-container>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "qN5J":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/rejected-detail/rejected-detail.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: RejectedDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedDetailPageModule", function() { return RejectedDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rejected_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rejected-detail.page */ "/R+x");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _rejected_detail_page__WEBPACK_IMPORTED_MODULE_6__["RejectedDetailPage"]
    }
];
let RejectedDetailPageModule = class RejectedDetailPageModule {
};
RejectedDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_rejected_detail_page__WEBPACK_IMPORTED_MODULE_6__["RejectedDetailPage"]]
    })
], RejectedDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=rejected-detail-rejected-detail-module.js.map