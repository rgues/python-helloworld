(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-no-paid-session-no-paid-module"],{

/***/ "B1C6":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session-no-paid/session-no-paid.module.ts ***!
  \************************************************************************************************/
/*! exports provided: SessionNoPaidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionNoPaidPageModule", function() { return SessionNoPaidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _session_no_paid_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session-no-paid.page */ "WK7f");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");









const routes = [
    {
        path: '',
        component: _session_no_paid_page__WEBPACK_IMPORTED_MODULE_7__["SessionNoPaidPage"]
    }
];
let SessionNoPaidPageModule = class SessionNoPaidPageModule {
};
SessionNoPaidPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_session_no_paid_page__WEBPACK_IMPORTED_MODULE_7__["SessionNoPaidPage"]]
    })
], SessionNoPaidPageModule);



/***/ }),

/***/ "WK7f":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session-no-paid/session-no-paid.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: SessionNoPaidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionNoPaidPage", function() { return SessionNoPaidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_no_paid_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-no-paid.page.html */ "sFoT");
/* harmony import */ var _session_no_paid_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-no-paid.page.scss */ "amBm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/debts-manager.service */ "ijC1");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");














let SessionNoPaidPage = class SessionNoPaidPage {
    constructor(tontine, error, ui, util, event, router, translate, debt) {
        this.tontine = tontine;
        this.error = error;
        this.ui = ui;
        this.util = util;
        this.event = event;
        this.router = router;
        this.translate = translate;
        this.debt = debt;
        this.faFrown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faFrown"];
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentCycle = this.currentTontine.cycle_courant;
        this.beneficiaryList = [];
        this.allData = [];
        this.nbItems = 10;
        this.status = '';
        this.event.publish('confirmPayment', () => {
            this.loading = true;
            this.getBeneficiary(null);
        });
        this.event.publish('modal-close', () => {
            this.loading = true;
            this.getBeneficiary(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getBeneficiary(null);
    }
    // check if the user has confirmed the payment
    checkConfirmation(data) {
        let hasConfirm = true;
        if (data && data.proof[0].liste_traditional_banking_proof) {
            data.proof[0].liste_traditional_banking_proof.forEach(proof => {
                if (proof.confirm_member === 0) {
                    hasConfirm = false;
                }
            });
        }
        if (hasConfirm && data && data.proof[0].liste_online_wallet_proof) {
            data.proof[0].liste_online_wallet_proof.forEach(proof => {
                if (proof.confirm_member === 0) {
                    hasConfirm = false;
                }
            });
        }
        return hasConfirm;
    }
    // Get the list of beneficiary
    getBeneficiary(event) {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id
        };
        this.debt.confirmJackpotPaiementTontine(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                if (reponse.liste_bouffes && reponse.liste_bouffes.length > 0) {
                    const currentCycle = this.currentCycle.numerocycle ? this.currentCycle.numerocycle : 0;
                    const previousCycle = this.currentCycle.numerocycle - 1;
                    let beneficiaryList = [];
                    beneficiaryList = reponse.liste_bouffes.filter(data => { return data.infos_cycle.numerocycle === currentCycle || data.infos_cycle.numerocycle === previousCycle; });
                    this.allData = this.util.orderByObjetKeyUp(beneficiaryList, 'infos_bouffe', 'updated_at');
                    if (this.allData.length > this.nbItems) {
                        this.beneficiaryList = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.beneficiaryList.push(this.allData[this.beneficiaryList.length]);
                        }
                    }
                    else {
                        this.beneficiaryList = this.allData;
                    }
                }
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
                        this.getBeneficiary(event);
                    }
                    else {
                        this.loading = false;
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
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getBeneficiary(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.beneficiaryList.length < this.allData.length) {
                    this.beneficiaryList.push(this.allData[this.beneficiaryList.length]);
                }
                else if (this.beneficiaryList.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // view Proof and make the payment
    viewProof(beneficiary) {
        this.debt.sendDebtsData(beneficiary);
        this.router.navigate(['/', 'dashboard', 'my-tontines', beneficiary.infos_bouffe.tontine_id, 'stat', 'pools-session', beneficiary.infos_bouffe.seance_id]);
    }
    // Get the status
    getStatus(data) {
        if (this.checkConfirmation(data)) {
            this.translate.get(['CONFIRM_TEXT']).subscribe(trans => {
                this.status = trans.CONFIRM_TEXT;
            });
        }
        else {
            this.translate.get(['NOT_CONFIRM']).subscribe(trans => {
                this.status = trans.NOT_CONFIRM;
            });
        }
        return this.status;
    }
};
SessionNoPaidPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__["DebtsManagerService"] }
];
SessionNoPaidPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"], { static: false },] }]
};
SessionNoPaidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-no-paid',
        template: _raw_loader_session_no_paid_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_no_paid_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SessionNoPaidPage);



/***/ }),

/***/ "amBm":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session-no-paid/session-no-paid.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLW5vLXBhaWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "sFoT":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/session-no-paid/session-no-paid.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + currentTontine.tontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n    {{'BENEFICIAL_STATUS' | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"session-not-paid\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid *ngIf=\"beneficiaryList && beneficiaryList.length > 0\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n          <ion-img class=\"inner-image\" [src]=\"'assets/beneficial.svg'\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p class=\"ion-padding ion-no-margin\">{{ 'LIST_PENDIG_BENEFICIARY' | translate }} :</p>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let beneficiary of beneficiaryList\" (click)=\"viewProof(beneficiary)\" detail>\r\n            <ion-label>\r\n              <p>                \r\n                <span class=\"ion-float-left\"><b><small>{{ 'DATE_TEXT' | translate }} : </small>{{beneficiary.infos_bouffe.updated_at ? beneficiary.infos_bouffe.updated_at.split(' ')[0] : ''}}</b></span>\r\n                <span class=\"ion-float-right\"><b><small>{{ 'CYCLE_TEXT' | translate }}/{{'SESSION_TEXT' | translate}} : </small>{{beneficiary && beneficiary.infos_cycle? beneficiary.infos_cycle.numerocycle : ''}}/{{beneficiary && beneficiary.infos_seance? beneficiary.infos_seance.numero_seance : ''}}</b></span> \r\n              </p>\r\n              <h3><ion-text [color]=\"beneficiary.infos_bouffe.status === 'approved' && checkConfirmation(beneficiary) ? 'success': 'warning'\"><fa-icon [icon]=\"faFrown\" size=\"2x\"></fa-icon></ion-text><span>{{beneficiary.infos_user.firstname ? beneficiary.infos_user.firstname : ''}} {{beneficiary.infos_user.lastname ? beneficiary.infos_user.lastname : ''}}</span></h3>\r\n              <div>\r\n                <span class=\"ion-float-left\"><small>{{ 'STATUS_TEXT' | translate }}: </small><ion-text color=\"warning\">{{beneficiary.infos_bouffe.status ? getStatus(beneficiary) : ''}}</ion-text></span>\r\n                 <h2 class=\"ion-float-right\"><small>{{ 'AMOUNT_DUE_TEXT' | translate }} : </small><ion-text color=\"warning\">{{beneficiary.infos_bouffe.somme ? (beneficiary.infos_bouffe.somme  | commadumper) : 0}} {{currentTontine && currentTontine.tontine && currentTontine.tontine.monnaie ? currentTontine.tontine.monnaie : ''}}</ion-text></h2>\r\n              </div>\r\n            </ion-label>            \r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"beneficiaryList && beneficiaryList.length === 0  && !loading\">\r\n    <p class=\"ion-padding ion-text-center\" >{{ 'BENEFICIARY_EMPTY_MSG' | translate}}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=session-no-paid-session-no-paid-module.js.map