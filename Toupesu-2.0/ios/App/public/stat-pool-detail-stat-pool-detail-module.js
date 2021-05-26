(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stat-pool-detail-stat-pool-detail-module"],{

/***/ "/p0Y":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pool-detail/session-paid-proofs/session-paid-proofs.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLXBhaWQtcHJvb2ZzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "6nN1":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pool-detail/stat-pool-detail.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: StatPoolDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatPoolDetailPageModule", function() { return StatPoolDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _stat_pool_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stat-pool-detail.page */ "sGoo");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _session_paid_proofs_session_paid_proofs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./session-paid-proofs/session-paid-proofs.component */ "Xu9F");









const routes = [
    {
        path: '',
        component: _stat_pool_detail_page__WEBPACK_IMPORTED_MODULE_5__["StatPoolDetailPage"]
    }
];
let StatPoolDetailPageModule = class StatPoolDetailPageModule {
};
StatPoolDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _stat_pool_detail_page__WEBPACK_IMPORTED_MODULE_5__["StatPoolDetailPage"],
            _session_paid_proofs_session_paid_proofs_component__WEBPACK_IMPORTED_MODULE_8__["SessionPaidProofsComponent"]
        ],
        entryComponents: [
            _session_paid_proofs_session_paid_proofs_component__WEBPACK_IMPORTED_MODULE_8__["SessionPaidProofsComponent"]
        ]
    })
], StatPoolDetailPageModule);



/***/ }),

/***/ "N6OG":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/stat-pool-detail/session-paid-proofs/session-paid-proofs.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'LIST_OF_PROOFS' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"session-proof\">\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid *ngIf=\"myProofs && myProofs.length > 0\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>     \r\n          <div *ngFor=\"let proof of myProofs\">\r\n          <ion-item  *ngIf=\"proof.type === 'bank' && proof.data\">          \r\n            <ion-label>            \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof.data && proof.data.updated_at ? proof.data.updated_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text  class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ 'TRADITIONNAL_BANKING' | translate  }}</ion-text>\r\n              </p>\r\n              <p *ngIf=\"proof.description\">\r\n                <ion-text class=\"ion-float-left\"><b>{{'DESCRIPTION_TEXT' | translate}}: </b>{{ proof.data && proof.data.description ? proof.data.description : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\">\r\n                <h3>{{'AMOUNT_TEXT' | translate }}: {{ proof && proof.data.montant ? (proof.data.montant | commadumper) : 0  }}{{tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}\r\n                </h3>\r\n              </ion-text>\r\n              <p *ngIf=\"proof.data && (proof.data.firstname || proof.data.lastname)\">\r\n                <ion-text  class=\"ion-float-left\"><b>{{'BUY_BY_TEXT' | translate}}: </b>{{ proof && proof.data.firstname ? proof.data.firstname : ''  }} {{ proof && proof.data.lastname ? proof.data.lastname : ''  }}</ion-text>\r\n              </p>\r\n              <p class=\"ion-text-right\">\r\n                <a (click)=\"showProof(proof.data.receipt)\" class=\"ion-text-capitalize\">\r\n                  {{'DEBT_VIEW_PROOF' | translate}}\r\n                </a>\r\n              </p>            \r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item  *ngIf=\"proof.type === 'online'  && proof.data\">          \r\n            <ion-label>            \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof.data && proof.data.updated_at ? proof.data.updated_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text *ngIf=\"proof.data && proof.data.typepaiement_name\" class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ proof.data && proof.data.typepaiement_name ? proof.data.typepaiement_name : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\">\r\n                <h3>{{'AMOUNT_TEXT' | translate }}: {{ proof.data && proof.data.montant ? (proof.data.montant | commadumper) : 0  }}{{tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}\r\n                </h3>\r\n              </ion-text>\r\n              <p *ngIf=\"proof.data && (proof.data.firstname || proof.data.lastname)\">\r\n                <ion-text  class=\"ion-float-left\"><b>{{'BUY_BY_TEXT' | translate}}: </b>{{ proof && proof.data.firstname ? proof.data.firstname : ''  }} {{ proof && proof.data.lastname ? proof.data.lastname : ''  }}</ion-text>\r\n              </p>\r\n              <p class=\"ion-text-right\">\r\n                <a (click)=\"showProof(proof.data.receipt)\" class=\"ion-text-capitalize\">\r\n                  {{'DEBT_VIEW_PROOF' | translate}}\r\n                </a>\r\n              </p>            \r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item  *ngIf=\"proof.type === 'checkout'  && proof.data\">          \r\n            <ion-label>            \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof.data && proof.data.updated_at ? proof.data.updated_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text  class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ 'TYPE_PAYMENT_ID2' | translate  }}</ion-text>\r\n              </p>\r\n              <p *ngIf=\"proof.data.caisse_name\">\r\n                <ion-text class=\"ion-float-left\"><b>{{'DESCRIPTION_TEXT' | translate}}: </b>{{ proof.data && proof.data.caisse_name ? (proof.data.caisse_name | translate) : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\">\r\n                <h3>{{'AMOUNT_TEXT' | translate }}: {{ proof.data&& proof.data.montant ? (proof.data.montant | commadumper) : 0  }}{{tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}\r\n                </h3>\r\n              </ion-text>  \r\n              <p *ngIf=\"proof.data && (proof.data.firstname || proof.data.lastname)\">\r\n                <ion-text  class=\"ion-float-left\"><b>{{'BUY_BY_TEXT' | translate}}: </b>{{ proof && proof.data.firstname ? proof.data.firstname : ''  }} {{ proof && proof.data.lastname ? proof.data.lastname : ''  }}</ion-text>\r\n              </p>          \r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n        </ion-list>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"myProofs && myProofs.length === 0  && !loading\">\r\n    <p class=\"ion-padding ion-text-center\" >{{ 'PROOFS_EMPTY_MSG' | translate}}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute()\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "Xu9F":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pool-detail/session-paid-proofs/session-paid-proofs.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SessionPaidProofsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPaidProofsComponent", function() { return SessionPaidProofsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_paid_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-paid-proofs.component.html */ "N6OG");
/* harmony import */ var _session_paid_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-paid-proofs.component.scss */ "/p0Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/view-proof/view-proof.component */ "xVFS");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");











let SessionPaidProofsComponent = class SessionPaidProofsComponent {
    constructor(modatCtrl, tontine, translate, error, ui, debt) {
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.translate = translate;
        this.error = error;
        this.ui = ui;
        this.debt = debt;
        this.tontineData = this.tontine.getCurrentTontineData();
        this.loading = false;
        this.myProofs = [];
        this.allData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.loading = true;
        this.getProofs(null);
    }
    closeContribute() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    // Get the list of proofs of a members
    getProofs(event) {
        const param = {
            bouffe_id: this.bouffeId
        };
        this.debt.getWithdrawalProof(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                let dataResp = [];
                if (reponse && reponse.liste_traditional_banking_proof && reponse.liste_traditional_banking_proof.length > 0) {
                    reponse.liste_traditional_banking_proof.forEach(proof => {
                        dataResp.push({ type: 'bank', data: proof });
                    });
                }
                if (reponse && reponse.liste_online_wallet_proof && reponse.liste_online_wallet_proof.length > 0) {
                    reponse.liste_online_wallet_proof.forEach(proof => {
                        dataResp.push({ type: 'online', data: proof });
                    });
                }
                if (reponse && reponse.liste_pay_with_caisse_tontine_proof && reponse.liste_pay_with_caisse_tontine_proof.length > 0) {
                    reponse.liste_pay_with_caisse_tontine_proof.forEach(proof => {
                        dataResp.push({ type: 'checkout', data: proof });
                    });
                }
                this.allData = dataResp;
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
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getProofs(event);
                    }
                });
            }
            else if (error && error.error && error.error.bouffe_id_not_exist) {
                this.translate.get('BENEFICIARY_NOT_EXIST_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            else {
                this.error.manageError(error);
            }
        });
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
    showProof(proofsData) {
        this.modatCtrl
            .create({
            component: src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_8__["ViewProofComponent"],
            componentProps: {
                proof: proofsData
            }
        })
            .then(modalEl => modalEl.present());
    }
};
SessionPaidProofsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__["DebtsManagerService"] }
];
SessionPaidProofsComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }],
    bouffeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SessionPaidProofsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-paid-proofs',
        template: _raw_loader_session_paid_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_paid_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SessionPaidProofsComponent);



/***/ }),

/***/ "cIEZ":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/stat-pool-detail/stat-pool-detail.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',tontineId,'stat','pools']\"\r\n        slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n      <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"ion-padding\">\r\n      {{ 'FINANCIAL_STATISQUE' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'CYCLE_TEXT' | translate }} #{{currentCycle && currentCycle.numerocycle ? currentCycle.numerocycle :\r\n      0}} - {{ 'POOL_TEXT_OF' | translate }} {{currentSeances && currentSeances.seance ?\r\n      currentSeances.seance.date_debut.split(' ')[0] : ''}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"pool-detail\">\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"!loading\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-card class=\"block-1\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row *ngIf=\"tontineData && tontineData.tontine && tontineData.tontine.drawingtype_id !== 6\">\r\n              <ion-col size=\"12\">\r\n                <div class=\"t-balance\">\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"desc\">{{ 'TONTINE_DETAIL_TEXT7' | translate }} :\r\n                      {{ currentSeances && currentSeances.total_balance ? ((currentSeances.total_balance +\r\n                      currentSeances.total_caisse_emprunt) | commadumper ) : 0 }}\r\n                      {{tontineData && tontineData.tontine ? tontineData.tontine.monnaie:''}}</span>\r\n                  </ion-text>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col [size]=\"getSize()\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'TONTINE_DETAIL_TEXT31' | translate }} <br /> ({{tontineData && tontineData.tontine\r\n                  ? tontineData.tontine.monnaie:''}})</div>\r\n                <div class=\"menu-amount\">{{currentSeances && currentSeances.total_contribution ?\r\n                  (currentSeances.total_contribution | commadumper) : 0 }}</div>\r\n              </ion-col>\r\n\r\n\r\n              <ion-col [size]=\"getSize()\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'TONTINE_DETAIL_TEXT32' | translate }} & {{ 'TYPE_TONTINE_ID3' | translate }}\r\n                  <br /> ({{tontineData && tontineData.tontine ? tontineData.tontine.monnaie:''}})</div>\r\n                <div class=\"menu-amount\">{{currentSeances && currentSeances.total_penalite ?\r\n                  (currentSeances.total_penalite | commadumper) : 0 }}</div>\r\n              </ion-col>\r\n\r\n\r\n              <ion-col [size]=\"getSize()\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'caisse secours' | translate }} <br /> ({{tontineData && tontineData.tontine ?\r\n                  tontineData.tontine.monnaie:''}})</div>\r\n                <div class=\"menu-amount\">{{ currentSeances && currentSeances.total_caisse_secours ?\r\n                  (currentSeances.total_caisse_secours | commadumper ) : 0 }}</div>\r\n              </ion-col>\r\n\r\n            \r\n\r\n              <ion-col [size]=\"getSize()\" class=\"col-button\" *ngIf=\"getSize() === 3\">\r\n                <div class=\"desc\">{{ 'TONTINE_DETAIL_TEXT33' | translate }} <br /> ({{tontineData && tontineData.tontine\r\n                  ? tontineData.tontine.monnaie:''}})</div>\r\n                <div class=\"menu-amount\">{{ currentSeances && currentSeances.total_caisse_emprunt ?\r\n                  (currentSeances.total_caisse_emprunt | commadumper ) : 0 }}</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"tontineData && !loading\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-card class=\"block-1\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row>\r\n              <ion-col size=\"4\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'PENALITY_ABSENCE' | translate }} <br /> ({{tontineData && tontineData.tontine ?\r\n                  tontineData.tontine.monnaie : ''}})</div>\r\n                <div class=\"menu-amount\">{{currentSeances && currentSeances.total_penalite_absence ?\r\n                  (currentSeances.total_penalite_absence | commadumper) : 0 }}</div>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'PENALITY_RETARD' | translate }} <br /> ({{tontineData &&tontineData.tontine ?\r\n                  tontineData.tontine.monnaie: ''}})</div>\r\n                <div class=\"menu-amount\">{{currentSeances && currentSeances.total_penalite_retard ?\r\n                  (currentSeances.total_penalite_retard | commadumper) : 0 }}</div>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'TONTINE_LIST_TEXT8' | translate }} <br /> ({{tontineData &&tontineData.tontine ?\r\n                  tontineData.tontine.monnaie : ''}})</div>\r\n                <div class=\"menu-amount\">{{currentSeances && currentSeances.total_bid ? (currentSeances.total_bid |\r\n                  commadumper) : 0 }}</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col>\r\n        <ion-text class=\"ion-float-right\"><a href=\"\" (click)=\"downloadRapportXlsx()\">{{ 'TONTINE_DETAIL_TEXT27' | translate }}</a></ion-text>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row *ngIf=\"beneficiaryList && beneficiaryList.length > 0 && !loading\">\r\n      <ion-col size=\"12\" *ngFor=\"let beneficiary of  beneficiaryList\">\r\n        <div class=\"benecifial\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>\r\n              <h3>\r\n                <ion-text\r\n                  [color]=\"beneficiary.infos_bouffe.status === 'approved' && checkConfirmation(beneficiary) ? 'success': 'warning'\">\r\n                  <fa-icon [icon]=\"faFrown\" size=\"2x\"></fa-icon>\r\n                </ion-text>\r\n                <small>{{ 'BENEFICIARY_TEXT' | translate }}: </small><b>{{beneficiary.infos_user ?\r\n                  beneficiary.infos_user.firstname : ''}} {{beneficiary.infos_user ? beneficiary.infos_user.lastname :\r\n                  ''}}</b>\r\n              </h3>\r\n              <p>\r\n                <span class=\"ion-float-left\"><small>{{'DUE_TEXT' | translate}}: </small>{{beneficiary.infos_bouffe ?\r\n                  (beneficiary.infos_bouffe.somme | commadumper) : 0}}{{tontineData.tontine.monnaie}}</span>\r\n                <span class=\"ion-float-right\"><b><small>{{ 'PAID_TEXT' | translate}}: </small>{{beneficiary.infos_bouffe\r\n                    ? (beneficiary.infos_bouffe.somme - beneficiary.infos_bouffe.reste_a_payer) :\r\n                    0}}{{tontineData.tontine.monnaie}}</b></span>\r\n              </p>\r\n              <p>\r\n                <span class=\"ion-float-left\"><small>{{ 'REMAIN_TEXT' | translate }}: </small>{{beneficiary ?\r\n                  (beneficiary.infos_bouffe.reste_a_payer | commadumper) : 0}}{{tontineData.tontine.monnaie}}</span>\r\n                <span class=\"ion-float-right\">\r\n                  <ion-text color=\"warning\"><b><small>{{ 'STATUS_TEXT' | translate}}: </small>{{beneficiary.infos_bouffe\r\n                      ? getStatus(beneficiary) : ''}}</b></ion-text>\r\n                </span>\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-button slot=\"start\" fill=\"outline\" color=\"warning\" class=\"ion-text-capitalize\"\r\n              (click)=\"openProofsList(beneficiary)\">\r\n              {{ 'LIST_OF_PROOFS' | translate }}\r\n            </ion-button>\r\n            <ion-button slot=\"end\" expand=\"full\"\r\n              *ngIf=\"!checkConfirmation(beneficiary) && beneficiary.infos_bouffe.user_id === currentUser.id\"\r\n              [disabled]=\"loadingPay\" color=\"warning\" class=\"ion-text-capitalize\" (click)=\"confirmShow(beneficiary)\">\r\n              {{ 'CONFIRN_PAYMENT_TEXT' | translate }}\r\n            </ion-button>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      *ngIf=\"tontineData && tontineData.tontine.tontine_payment_type_id !== 1 && currentSeances && currentSeances.beneficiaires && !loading\">\r\n      <ion-col size=\"12\">\r\n        <p>{{'TONTINE_DETAIL_TEXT13' | translate }}:\r\n          <span *ngFor=\"let beneficiary of currentSeances.beneficiaires\">\r\n            <br /><b>{{beneficiary.firstname}} {{beneficiary.lastname ? beneficiary.lastname : beneficiary.phone}}</b> <span> ({{beneficiary.somme | commadumper }} {{tontineData.tontine.monnaie}})</span>\r\n          </span>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div *ngIf=\"loading\">\r\n          <p class=\"ion-text-center\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </p>\r\n        </div>\r\n        <ion-list *ngIf=\"!loading\">\r\n          <ion-item-divider sticky=\"true\">\r\n            <ion-text>\r\n              {{ 'TONTINE_DETAIL_TEXT15' | translate }}\r\n            </ion-text>\r\n            <ion-searchbar (ionChange)=\"filterByKeyword(searchTerm)\" [(ngModel)]=\"searchTerm\" type=\"text\"\r\n              debounce=\"500\"></ion-searchbar>\r\n            <ion-icon name=\"contacts\" slot=\"start\"></ion-icon>\r\n          </ion-item-divider>\r\n\r\n          <ion-item *ngFor=\"let member of members; let i=index\">\r\n            <ion-avatar slot=\"start\">\r\n              <svg class=\"mytontine-icon\"\r\n                [class.active-icon]=\"getContributionAmount(member.montant,member.share) === getContributionAmount(member.contribution,1) && member.contribution > 0\"\r\n                preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 48.84 38\">\r\n                <defs>\r\n                  <clipPath id=\"pot-status-path-spd\" transform=\"translate(-0.01 0)\">\r\n                    <path class=\"cls-1\"\r\n                      d=\"M1.85,24.61a11.87,11.87,0,0,1,7-12.14l.06,0,.18-.23L9.21,12c-1.1-.78-1.66-1.51-1.48-2.07.45-1.4,5.31-1.24,10.85.35s9.66,4,9.21,5.42c-.17.51-.91.81-2,.91v0s0,0,0,.11a5.29,5.29,0,0,0,.09.7,4,4,0,0,0,.11.49l.07.24c2.14,4.2,1.8,8.88-1.84,13.3-4.63,5.64-14.39,6.08-19.55-.11A12.26,12.26,0,0,1,1.85,24.61Z\" />\r\n                  </clipPath>\r\n                </defs>\r\n                <path class=\"cls-3\"\r\n                  d=\"M5.39,13.66A13,13,0,0,0,1,23.5a11.83,11.83,0,0,0,.17,1.8,13.61,13.61,0,0,0,.45,1.76c.09.29.2.57.31.85a8.75,8.75,0,0,0,.37.83,15.76,15.76,0,0,0,.87,1.59,13,13,0,0,0,3.72,3.84,14.32,14.32,0,0,0,8.52,2.35,16.78,16.78,0,0,0,1.8-.18A14.59,14.59,0,0,0,19,35.95a13.58,13.58,0,0,0,6-3.72,12.35,12.35,0,0,0,2-3,12.86,12.86,0,0,0,1.12-3.47,11.71,11.71,0,0,0-1-7.26,11.06,11.06,0,0,1,.9,1.68A11.31,11.31,0,0,1,28.69,22a12,12,0,0,1,.23,3.86,13.57,13.57,0,0,1-1,3.78,12.86,12.86,0,0,1-2,3.36,13.63,13.63,0,0,1-1.39,1.41,14.14,14.14,0,0,1-1.58,1.19,14.82,14.82,0,0,1-3.58,1.69,13.77,13.77,0,0,1-1.93.46,18.23,18.23,0,0,1-2,.22,15.19,15.19,0,0,1-4-.29A15.44,15.44,0,0,1,6,35.35,12.24,12.24,0,0,1,4.5,34.11,14.78,14.78,0,0,1,.1,25.47a10.93,10.93,0,0,1-.08-2,13.12,13.12,0,0,1,2.61-7.21A11.06,11.06,0,0,1,5.39,13.66ZM6.84,9.9a1.61,1.61,0,0,1-.08-.83,1.93,1.93,0,0,1,.34-.81,2.43,2.43,0,0,1,1.54-.88,6.7,6.7,0,0,1,.86-.09H12a27.35,27.35,0,0,1,6.57,1.06A25.41,25.41,0,0,1,24.66,11a21.85,21.85,0,0,1,2.72,1.94,4.08,4.08,0,0,1,1.08,1.35,1.37,1.37,0,0,1,.09.89,1.32,1.32,0,0,1-.5.68,1.28,1.28,0,0,0,.31-.71,1.11,1.11,0,0,0-.22-.69,3.86,3.86,0,0,0-1.14-1c-.91-.56-1.86-1.08-2.82-1.56a36.4,36.4,0,0,0-6-2.31,40.51,40.51,0,0,0-6.3-1.29c-.53-.06-1.07-.12-1.61-.16L9.5,8a6.82,6.82,0,0,0-.78,0,2,2,0,0,0-1.35.49A1.67,1.67,0,0,0,6.84,9.9Z\"\r\n                  transform=\"translate(-0.01 0)\" />\r\n                <g class=\"cls-4\">\r\n                  <rect class=\"cls-3\" x=\"1.43\" y=\"7.88\" width=\"26.63\" height=\"28.07\" />\r\n                  <path class=\"cls-5\"\r\n                    d=\"M8,12.5l1.69,1.43-2.4-.72a4.85,4.85,0,0,0,.65-.64L8,12.5Zm.16,6.41L6.47,17.48l-2.2.26,3.89,1.17ZM4.78,16.05l-1.29.15,0,0-.24.29,3.24,1L4.78,16.05Zm5.58,2.6L8.67,17.23l-2.2.26,3.89,1.17ZM7.49,14.2l3.88,1.17L9.69,13.95l-2.2.26-.74-.63-.41.28,1.14.34h0l-1.92.22,0,0-.06,0,3.71,1.12L7.49,14.2Zm5.57,2.51-1.69-1.43-2.2.26,3.89,1.17ZM4.16,15.53l-.27.26.89.27-.62-.52Zm.62.52,3.89,1.17L7,15.8l-2.2.26Zm7.78,2.35L10.87,17l-2.2.26,3.89,1.17ZM5.41,14.47l-.47.38-.29.25L7,15.8,5.41,14.47ZM7,15.8,10.87,17,9.18,15.54,7,15.8Zm7.77,2.35-1.69-1.43-2.2.26,3.89,1.17Z\"\r\n                    transform=\"translate(-0.01 0)\" />\r\n                  <path class=\"cls-5\"\r\n                    d=\"M26.35,18.92l-2.49-.75,2.05-.24a3.39,3.39,0,0,0,.15.43s.11.2.29.56Zm-2.49-.75-2.05.24,3.63,1.1-1.58-1.33Zm2.95,1.75c-.08-.2-.16-.38-.24-.54l-1.13.13,1.37.41Zm-6,1.64,3.63,1.1-1.58-1.33-2.05.24Zm3.63,1.1h0l-2.05.24L26.06,24l-1.57-1.33,3.07,1v-.11a.6.6,0,0,0,.27-.08h0l-1.29-1-2,.24ZM21.8,18.41l-2.05.24,3.63,1.1L21.8,18.41ZM27,20.84,25.43,19.5l-2.05.24L27,20.84l-2,.24,2.52.76,0-.12c0-.15-.09-.31-.14-.46L27.23,21a1.78,1.78,0,0,0-.07-.22l-.15,0Zm-7.73-.61,3.63,1.1L21.33,20l-2.05.24Zm5.68.86-2.05.24,3.63,1.1L25,21.08Zm2.74,1.69a3.22,3.22,0,0,0-.1-.47l-1.06.12,1.16.35Zm-10-3.88L21.33,20l-1.58-1.33-2.05.24Zm5.68.86L21.33,20,25,21.08l-1.58-1.33Z\"\r\n                    transform=\"translate(-0.01 0)\" />\r\n                  <path class=\"cls-5\"\r\n                    d=\"M15.35,20.54l1.54,1.31-3.55-1.07,2-.23Zm.15,5.92L14,25.16l-2,.23,3.55,1.07Zm-2.16-5.69-2,.23,3.55,1.07-1.54-1.31Zm1.54,1.31,3.55,1.07-1.54-1.31-2,.23Zm-4.48,2L14,25.16l-1.54-1.31-2,.23Zm7.1,2.14L16,24.93l-2,.23,3.55,1.07ZM11.33,21l-2,.23,3.55,1.07L11.33,21Zm5.09,2.38-1.54-1.31-2,.23,3.55,1.07ZM20,24.46l-1.54-1.31-2,.23L20,24.46ZM8.86,22.79l3.55,1.07-1.54-1.31-2,.23Zm3.55,1.07L16,24.93l-1.54-1.31-2,.23ZM19.51,26,18,24.7l-2,.23L19.51,26ZM7.32,21.48l3.55,1.07L9.32,21.25l-2,.23Zm5.56.84-2,.23,3.55,1.07-1.54-1.31Zm1.54,1.31L18,24.7l-1.54-1.31-2,.23Zm7.1,2.14L20,24.46l-2,.23,3.55,1.07Z\"\r\n                    transform=\"translate(-0.01 0)\" />\r\n                  <path class=\"cls-5\"\r\n                    d=\"M3,27.22l1.53,1.29-1.9-.57c-.09-.21-.16-.43-.24-.65l.6-.07H3L2.35,27c0-.16-.1-.33-.14-.49l.83.7L5,27l1.53,1.29L3,27.22Zm4.43-2L6,23.94l-2,.23,3.52,1.06Zm-5.64-.94a.38.38,0,0,0,0,.08l.13,0-.14-.12ZM2,24.4l3.51,1.06L4,24.17H4L2.44,22.88,6,23.94,4.42,22.64l-2,.23h0l-.63.07c0,.19,0,.38,0,.57L4,24.17,2,24.4Zm7,2.12L7.48,25.23l-2,.23L9,26.52Zm-5.5-.83-1.45.17c0,.08,0,.16.05.24L5,27,3.5,25.69Zm5,2.35L7,26.75,5,27,8.55,28ZM2,24.4H1.85c0,.27.05.54.1.81l1.55.47L2,24.4ZM3.5,25.69,7,26.75,5.49,25.46l-2,.23Zm7,2.12L9,26.52l-2,.23,3.52,1.06Z\"\r\n                    transform=\"translate(-0.01 0)\" />\r\n                  <path class=\"cls-5\"\r\n                    d=\"M19.94,32.64l1.91-.22.71.6-.4.29-2.22-.67Zm1.33-4.4-1.91.22,3.38,1-1.47-1.24Zm3.38,1L23.18,28l-1.91.22,3.38,1-1.91.22,2.42.73c.07-.09.13-.19.19-.28l0-.06-.73-.61Zm-2.8,3.16-1.47-1.24-1.91.22,3.38,1Zm1.05.32c.2-.16.39-.33.58-.51l-1.63.19,1.06.32Zm-3.55-4.27-1.91.22,3.38,1-1.47-1.24Zm4.85,2.26-1.47-1.24-1.91.22,3.38,1Zm.49.15c.06-.07.11-.14.16-.22l-.64.07.48.14Zm-4.31.3-1.47-1.24L17,30.15l3.38,1Zm1.91-.22L20.82,29.7l-1.91.22,3.38,1-1.91.22,3.19,1,.06-.06-1.34-1.14Zm-6.76-2,3.38,1-1.47-1.24-1.91.22Zm6.77,2,1.88.57,0,0c.13-.14.24-.29.36-.45l-.36-.31-1.91.22Z\"\r\n                    transform=\"translate(-0.01 0)\" />\r\n                  <path class=\"cls-5\"\r\n                    d=\"M12,32.24l1.51,1.28-3.48-1,2-.23Zm-2,.23L8,32.7l3.48,1L10,32.47Zm5,2.33-1.51-1.28-2,.23,3.48,1ZM6.05,32.93l3.48,1L8,32.7l-2,.23Zm5.45.82-2,.23L13,35,11.5,33.75Zm5,2.33L15,34.8,13,35l3.48,1Zm-2.77.33h.17c.26,0,.53,0,.79,0l-.16-.13-.8.1ZM6.05,32.93H5.94c.32.3.66.57,1,.84.18.14.36.27.55.4h0l.07,0L6.05,32.93Zm8.47,3.38L13,35l-2,.23h0L9.53,34l-2,.23h0l.15.1-.12-.1,3.47,1-1.33.16a12.94,12.94,0,0,0,1.74.6l.67.15L11,35.26l3.47,1Zm0,0,.42.13h0a12.49,12.49,0,0,0,1.38-.11l.38-.06-.23-.19-2,.23Z\"\r\n                    transform=\"translate(-0.01 0)\" />\r\n                </g>\r\n                <path class=\"cls-5\"\r\n                  d=\"M22.45,13c-1.2-.4-2.6-.9-4.1-1.3-1.1-.3-2.3-.6-3.3-.8-2.8-.5-4.8-.6-4.9-.1-.1.2.2.6.8.9a25.68,25.68,0,0,0,6.7,2.5,23.56,23.56,0,0,0,7.5,1.2c.4-.1.7-.2.7-.3C26,14.73,24.65,13.93,22.45,13Z\"\r\n                  transform=\"translate(-0.01 0)\" />\r\n              </svg>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3>{{ member.firstname }} {{ member.lastname ? member.lastname : member.phone }}</h3>\r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ member.ispenality ? '(' + ('PENALTY_TEXT' | translate) + ')' : member.iscaution ? '(' + ('SECOURS_TEXT' | translate) + ')' :\r\n                    ('SHARE_TEXT' | translate) + ' : ' + member.share }}</b> <br /></ion-text>\r\n                <ion-text *ngIf=\"member && (member.montant* member.share) !== 0 || member.user_id !== user.id\"\r\n                  class=\"ion-float-right\">\r\n                  <b>{{ 'AMOUNT_TEXT' | translate }}: </b>{{ (getContributionAmount(member.contribution,1) |\r\n                  commadumper) }} {{ tontineData.tontine.monnaie }}\r\n                </ion-text>\r\n              </p>\r\n              <p *ngIf=\"member && (member.montant* member.share) === 0 && member.user_id === user.id\">\r\n                <ion-text class=\"ion-float-left\">\r\n                  <b>{{ 'AMOUNT_TEXT' | translate }} : </b>{{ (getContributionAmount(member.contribution,1) |\r\n                  commadumper) }} {{ tontineData.tontine.monnaie }}\r\n                </ion-text>\r\n              </p>\r\n            </ion-label>\r\n            <ion-button\r\n              *ngIf=\"member && (member.montant* member.share) === 0 && member.user_id === user.id && member.coutshare &&  !member.ispenality\"\r\n              slot=\"end\" color=\"warning\" class=\"ion-text-capitalize\" (click)=\"confirmUserPin(member)\">\r\n              {{'PAY_TEXT' | translate}}\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"(members && members.length === 0 && !loading && !filter)\">\r\n        <p class=\"ion-text-center\"> {{ 'NO_USERS_SEANCE_CONTRIBUTION' | translate }}</p>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ "hP5j":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pool-detail/stat-pool-detail.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LXBvb2wtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "sGoo":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pool-detail/stat-pool-detail.page.ts ***!
  \************************************************************************************************/
/*! exports provided: StatPoolDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatPoolDetailPage", function() { return StatPoolDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stat_pool_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stat-pool-detail.page.html */ "cIEZ");
/* harmony import */ var _stat_pool_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat-pool-detail.page.scss */ "hP5j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/api.service */ "6rCG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_contribution_order_contribution_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/contribution-order/contribution-order.component */ "r0Dw");
/* harmony import */ var _session_paid_proofs_session_paid_proofs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./session-paid-proofs/session-paid-proofs.component */ "Xu9F");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/debts-manager.service */ "ijC1");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../contribute-seance/contribute-seance.component */ "tdqF");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/contribution.service */ "US41");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var _contribute_seance_caution_contribute_seance_caution_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../contribute-seance-caution/contribute-seance-caution.component */ "zu7K");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");





















let StatPoolDetailPage = class StatPoolDetailPage {
    constructor(tontine, tontinesData, activeRoute, alertController, api, contribution, router, userService, translate, error, debt, modatCtrl, ui, util) {
        this.tontine = tontine;
        this.tontinesData = tontinesData;
        this.activeRoute = activeRoute;
        this.alertController = alertController;
        this.api = api;
        this.contribution = contribution;
        this.router = router;
        this.userService = userService;
        this.translate = translate;
        this.error = error;
        this.debt = debt;
        this.modatCtrl = modatCtrl;
        this.ui = ui;
        this.util = util;
        this.faFrown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faFrown"];
        this.faGrin = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faGrin"];
        this.members = [];
        this.searchTerm = '';
        this.filter = false;
        this.seances = [];
        this.tontineUsersTemp = [];
        this.defaultList = [];
        this.nbItems = 0;
        this.nbItemsByPage = 10;
        this.totalPages = 0;
        this.currentPage = 1;
        this.numero = 1;
        this.loading = false;
        this.beneficiaryList = [];
        this.loadingPay = false;
        this.allStatsData = [];
        this.currentUser = [];
        this.user = this.userService.getUserData();
        this.seanceId = parseInt(this.activeRoute.snapshot.params.id, 10);
        this.tontineData = this.tontine.getCurrentTontineData();
        this.tontineId = this.tontineData.tontine.tontine_id;
    }
    ngOnInit() {
        this.getSeanceData();
    }
    // get size
    getSize() {
        return this.tontinesData.getSize(this.tontineData.tontine);
    }
    // Get the status
    getStatus(data) {
        return this.tontinesData.getStatus(data);
    }
    // check if a tontine has a caution 
    checkTontineCaution(tontineData) {
        return this.tontinesData.hasTontineCaution(tontineData);
    }
    // Get the tontine's cycles
    getTontinesCycle() {
        this.loading = true;
        this.tontine.getTontinesCyclesSeances(this.currentCycle.id).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.allStatsData = reponse.seances;
                this.tontine.setCurrentSeanceData({ nbCycles: this.nbreCycle, data: { cycle: this.currentCycle, seances: this.allStatsData } });
                setTimeout(() => {
                    this.loading = true;
                    this.getSeanceData();
                }, 200);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getTontinesCycle();
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get the seance data
    getSeanceData() {
        this.loading = true;
        this.tontine.getCurrentSeanceData().then(seances => {
            this.seances = seances;
            this.currentCycle = seances.data.cycle;
            this.nbreCycle = seances.nbCycles;
            this.seances.data.seances.forEach(data => {
                if (data && data.seance.id === this.seanceId) {
                    this.currentSeances = data;
                    console.log(this.currentSeances);
                    if (data && data.membres_ayant_contribue && data.membres_ayant_contribue.length > 0) {
                        const members = [];
                        data.membres_ayant_contribue.forEach(member => {
                            members.push({
                                user_id: member.user_id,
                                username: member.username,
                                firstname: member.firstname,
                                lastname: member.lastname,
                                ispenality: member.typecontribution_id === 1 && member.with_caution === 0 ? true : false,
                                iscaution: member.with_caution === 1 ? true : false,
                                phone: member.phone,
                                montant: member.montant,
                                share: 1,
                                liste_part: [{ numero_part: member.numero_part }],
                                coutshare: member.montant,
                                contribution: parseFloat(member.montant),
                                numero_part: member.numero_part,
                                contribution_id: member.contribution_id,
                            });
                        });
                        this.defaultList = this.util.orderByKey(members, 'firstname');
                    }
                }
            });
            this.loading = true;
            this.getNonContributeMembers();
        });
    }
    // get contribution amaount
    getContributionAmount(amount, share) {
        return this.tontinesData.getContributionAmount(amount, share);
    }
    // Get the not contribute members
    getNonContributeMembers() {
        const cycle = this.currentCycle.id;
        this.tontine.getMembersSeanceList(cycle).subscribe((reponse) => {
            if (reponse && reponse.members && reponse.members.length > 0) {
                const memberPart = [];
                reponse.members.forEach(member => {
                    //  if (member.user_id && member.cycle_id === this.currentCycle.id ) {
                    memberPart.push({
                        user_id: member.user_id,
                        firstname: member.firstname,
                        lastname: member.lastname,
                        ispenality: false,
                        iscaution: false,
                        phone: member.phone,
                        montant: 0,
                        share: 1,
                        liste_part: [{ numero_part: member.numero_part }],
                        coutshare: member.coutshare,
                        contribution: parseFloat(member.coutshare),
                        numero_part: member.numero_part,
                        contribution_id: 0,
                    });
                    //  }
                });
                this.currentUser = [];
                memberPart.forEach(member => {
                    if (member && this.tontinesData.memberNotInWithCoutShareAndWithShare(this.defaultList, member)) {
                        if (member && member.user_id === this.user.id) {
                            this.currentUser.push(member);
                        }
                        else {
                            this.defaultList.push(member);
                        }
                    }
                });
                this.defaultList = this.util.orderByKey(this.defaultList, 'firstname');
                if (this.currentUser && this.currentUser.length > 0) {
                    this.defaultList = this.currentUser.concat(this.defaultList);
                }
                // cumulate the user shares data
                const allData = [];
                // group by session and part
                this.defaultList.forEach(member => {
                    if (!this.tontinesData.notInWithAmount(member, allData)) {
                        allData.push(member);
                    }
                    else {
                        allData.forEach((data, index, array) => {
                            if (data.user_id === member.user_id && member.montant === data.montant) {
                                allData[index].contribution += member.coutshare ? parseFloat(member.coutshare) : 0;
                                allData[index].share += 1;
                                allData[index].liste_part.push({ numero_part: member.numero_part });
                            }
                        });
                    }
                });
                this.defaultList = allData;
                // cotisation
                let cotisation = [];
                cotisation = this.defaultList.filter(data => { return data.ispenality === false; });
                // Penalite 
                let penalites = [];
                penalites = this.defaultList.filter(data => { return data.ispenality === true; });
                this.defaultList = cotisation.concat(penalites);
                this.tontineUsersTemp = this.defaultList;
                this.members = this.defaultList;
                this.totalPages = this.members.length;
                this.nbItems = this.defaultList.length;
                this.loading = false;
            }
            else {
                this.loading = false;
            }
            // Get beneficiaries 
            this.getBeneficiary();
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getNonContributeMembers();
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
    openContribute(name, amount, balance, currency, beneficiary) {
        let currencyId = '';
        this.members.forEach(member => {
            if (member && member.user_id === beneficiary.user_id) {
                currencyId = member.device_id;
            }
        });
        const data = {
            user_id: beneficiary.user_id,
            bouffe_id: beneficiary.id,
            device_id: currencyId
        };
        this.debt.sendDebtsData(data);
        this.modatCtrl
            .create({
            component: src_app_shared_contribution_order_contribution_order_component__WEBPACK_IMPORTED_MODULE_8__["ContributionOrderComponent"],
            componentProps: {
                tontineName: name,
                amountPay: amount,
                balance: balance,
                currency: currency
            }
        })
            .then(modalEl => modalEl.present());
    }
    // show the pin confirmation dilaog
    confirmPin(name, amount, balance, currency, beneficiary) {
        const translations = [];
        this.translate.get(['M_ENTER_YOUR_PIN', 'M_PIN', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
            translations.push(trans.M_ENTER_YOUR_PIN);
            translations.push(trans.M_PIN);
            translations.push(trans.CANCEL_TEXT);
            translations.push(trans.YES_TEXT);
            this.getUserPin(translations, name, amount, balance, currency, beneficiary);
        });
    }
    // get the user pin 
    getUserPin(translations, name, amount, balance, currency, beneficiary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userPin = this.userService.getUserSecret();
            const alert = yield this.alertController.create({
                header: `${translations[0]}`,
                inputs: [
                    {
                        name: 'pin',
                        type: 'tel',
                        placeholder: `${translations[1]}`,
                    }
                ],
                buttons: [
                    {
                        text: `${translations[2]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: `${translations[3]}`,
                        handler: (ans) => {
                            // Check if the pin is correct
                            if (parseInt(ans.pin, 10) === parseInt(userPin.password, 10)) {
                                this.openContribute(name, amount, balance, currency, beneficiary);
                            }
                            else {
                                this.translate.get('M_PIN_INVALID').subscribe(trans => {
                                    this.ui.presentToast(trans);
                                });
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Jackpot proofs
    openProofsList(bouffe) {
        this.modatCtrl
            .create({
            component: _session_paid_proofs_session_paid_proofs_component__WEBPACK_IMPORTED_MODULE_9__["SessionPaidProofsComponent"],
            componentProps: {
                bouffeId: bouffe.infos_bouffe.id
            }
        })
            .then(modalEl => modalEl.present());
    }
    // Download the rapport of the tontine
    downloadRapportXlsx() {
        const url = `${this.api.baseUrl}excel/export/excel/xlsx/${this.tontineData.tontine.tontine_id}/${this.currentSeances.seance.cycle_id}`;
        window.open(url, '_blank');
    }
    // Filter by name
    filterByKeyword(keyword) {
        this.filter = true;
        const resultFilter = [];
        let words = '';
        let key = '';
        this.tontineUsersTemp.forEach(member => {
            if (member) {
                words = member.firstname + '' + member.lastname;
                words = words.toLowerCase();
                key = keyword.trim().toLowerCase();
                if (words.match(key)) {
                    resultFilter.push(member);
                }
            }
        });
        this.defaultList = resultFilter;
        this.members = this.defaultList;
        this.totalPages = this.members.length;
        this.nbItems = this.defaultList.length;
    }
    // Confirm the member payment
    confirmPayment(data) {
        this.translate.get('CONFIRM_PAYMENT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loadingPay = true;
        const listProof = [];
        if (data && data.proof[0] && data.proof[0].liste_traditional_banking_proof && data.proof[0].liste_traditional_banking_proof.length > 0) {
            data.proof[0].liste_traditional_banking_proof.forEach(proof => {
                if (proof && proof.confirm_member === 0) {
                    listProof.push({ proof_id: proof.id, is_traditional: 1 });
                }
            });
        }
        if (data && data.proof[0] && data.proof[0].liste_online_wallet_proof && data.proof[0].liste_online_wallet_proof.length > 0) {
            data.proof[0].liste_online_wallet_proof.forEach(proof => {
                if (proof && proof.confirm_member === 0) {
                    listProof.push({ proof_id: proof.id, is_traditional: 0 });
                }
            });
        }
        const param = {
            bouffe_id: data.infos_bouffe.id,
            liste_proof_id: listProof
        };
        this.debt.confirmPaymentByUser(param).subscribe((reponse) => {
            this.ui.dismissLoading();
            this.loadingPay = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('BOUFFE_CONFIRM_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.getBeneficiary();
        }, error => {
            this.loadingPay = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.bouffe_id_not_exist) {
                    this.translate.get('BOUFFE_NOT_EXIST').subscribe(trans => {
                        this.ui.presentLoading(trans);
                    });
                    this.ui.dismissLoading();
                }
                if (error.error.user_not_found) {
                    this.loadingPay = true;
                    this.error.renewSession().then((ans) => {
                        this.ui.dismissLoading();
                        if (ans && ans.result === "OK") {
                            this.confirmPayment(data);
                        }
                        else {
                            this.loadingPay = false;
                        }
                    });
                }
            }
            else {
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // get the user pin 
    confirmPaymentAlert(translations, beneficiary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `${translations[0]}`,
                message: `${translations[1]}`,
                buttons: [
                    {
                        text: `${translations[2]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: `${translations[3]}`,
                        handler: () => {
                            this.confirmPayment(beneficiary);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // show the pin confirmation dilaog
    confirmShow(beneficiary) {
        const translations = [];
        this.translate.get(['CONFIRM_TITLE_MSG', 'CONFIRM_PAYMENT_TEXT_MSG', 'CANCEL_TEXT', 'CONFIRM_TEXT']).subscribe(trans => {
            translations.push(trans.CONFIRM_TITLE_MSG);
            translations.push(trans.CONFIRM_PAYMENT_TEXT_MSG);
            translations.push(trans.CANCEL_TEXT);
            translations.push(trans.CONFIRM_TEXT);
            this.confirmPaymentAlert(translations, beneficiary);
        });
    }
    // Get the list of beneficiary
    getBeneficiary() {
        if (this.tontineData.tontine.tontine_payment_type_id === 1) {
            const param = {
                seance_id: this.seanceId
            };
            this.debt.confirmJackpotPaiementSeance(param).subscribe((reponse) => {
                if (reponse && reponse.message === 'success') {
                    this.beneficiaryList = reponse.liste_bouffes;
                }
            }, error => {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getBeneficiary();
                        }
                    });
                }
                else if (error && error.error && error.error.seance_id_not_exist) {
                    this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                else if (error && error.error && error.error.user_not_authorized) {
                    this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
    }
    // check if the user has confirmed the payment
    checkConfirmation(data) {
        return this.tontinesData.checkConfirmation(data);
    }
    // show the pin confirmation dilaog
    confirmUserPin(data) {
        if (this.tontineData.tontine.tontine_payment_type_id === 1) {
            this.router.navigate(['/', 'dashboard', 'my-tontines', this.tontineData.tontine.tontine_id, 'debts']);
        }
        else {
            const userPin = this.userService.getUserSecret();
            this.selectPaymentMode(userPin.password, data);
        }
    }
    // open the tontine contribution modal
    selectPaymentMode(pin, data) {
        const tontineData = this.tontine.getCurrentTontineData();
        // Ask the user page pin before send data
        const paymentData = {
            title: tontineData.tontine.name,
            paymentMode: 'WALLET',
            contribution: data.contribution,
            seance_id: this.seanceId,
            device_name: tontineData.tontine.monnaie,
            montant: data.coutshare,
            typecontribution_id: 2,
            sens_contribution: 'sortant',
            liste_part: data.liste_part,
            pin: pin
        };
        this.contribution.sendContributionData(paymentData);
        this.openContributeSeance(paymentData);
    }
    // Open the modal
    openContributeSeance(param) {
        const componentView = this.checkTontineCaution(this.tontineData.tontine) ? _contribute_seance_caution_contribute_seance_caution_component__WEBPACK_IMPORTED_MODULE_17__["ContributeSeanceCautionComponent"] : _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_14__["ContributeSeanceComponent"];
        this.modatCtrl
            .create({
            component: componentView,
            componentProps: {
                tontineName: param.title,
                contribAmount: param.montant,
                data: param
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.data === 'OK') {
                    this.getTontinesCycle();
                }
            });
        });
    }
};
StatPoolDetailPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_16__["TontineGlobalDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_15__["ContributionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__["ErrorService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_10__["DebtsManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_19__["UiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_20__["UtilService"] }
];
StatPoolDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stat-pool-detail',
        template: _raw_loader_stat_pool_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stat_pool_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatPoolDetailPage);



/***/ })

}]);
//# sourceMappingURL=stat-pool-detail-stat-pool-detail-module.js.map