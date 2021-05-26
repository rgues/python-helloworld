(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-session-module"],{

/***/ "09YB":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/session/session.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + myTontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'CURRENT_SESSION_TEXT' | translate }}\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"more\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"detail-session\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <svg height=\"0\" width=\"0\" viewBox=\"0 0 47.8 37.12\">\r\n    <defs>\r\n      <clipPath id=\"pot-cursor-session\" >\r\n        <path d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\" />             \r\n      </clipPath>        \r\n    </defs>\r\n  </svg>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <svg class=\"pot-status inner-image\" preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 48.8 39.12\">                                    \r\n          <path class=\"pot-rate-color-1\"\r\n              d=\"M19.4,6a2,2,0,0,0,2.77-.56l0,0a2,2,0,0,0-.56-2.77l0,0a1.93,1.93,0,0,0-2.69.48v0a2,2,0,0,0,.37,2.8Zm6.8-2.6A1.77,1.77,0,0,0,28.7.88a1.75,1.75,0,0,0-2.47,0l0,0h0a1.75,1.75,0,0,0,0,2.47Zm6.1-1a1.48,1.48,0,0,0,2,.44l.05,0a1.48,1.48,0,0,0,.44-2l0-.05a1.48,1.48,0,0,0-2-.44l-.05,0A1.69,1.69,0,0,0,32.3,2.38Zm5.4.2a1.25,1.25,0,0,0,1.61.74l.09,0a1.25,1.25,0,0,0,.74-1.61l0-.09A1.25,1.25,0,0,0,38.49.84l-.09,0A1.37,1.37,0,0,0,37.7,2.58Zm4.5,1.1a1.12,1.12,0,1,0,.9-1.3h0A1.13,1.13,0,0,0,42.2,3.68Zm3.6,1.7a1,1,0,1,0,1-1A1,1,0,0,0,45.8,5.38Z\"\r\n                  />\r\n          <path class=\"pot-rate-color-2\"\r\n              d=\"M5.4,12.78A13,13,0,0,0,1,22.58a11,11,0,0,0,.2,1.8c.1.6.3,1.2.4,1.8l.3.9a2,2,0,0,0,.4.8,12.9,12.9,0,0,0,.9,1.6,13.39,13.39,0,0,0,12.2,6.1,11,11,0,0,0,1.8-.2A11.63,11.63,0,0,0,19,35a13.82,13.82,0,0,0,6-3.7,12.09,12.09,0,0,0,2-3,14.25,14.25,0,0,0,1.1-3.5,11.53,11.53,0,0,0-1-7.3c.3.5.6,1.1.9,1.7a13.36,13.36,0,0,1,.7,1.8,10.27,10.27,0,0,1,.2,3.9,12.56,12.56,0,0,1-1,3.8,16.83,16.83,0,0,1-2,3.4,9.27,9.27,0,0,1-1.4,1.4c-.5.4-1,.8-1.6,1.2a14.88,14.88,0,0,1-3.6,1.7,13.32,13.32,0,0,1-1.9.5,13.55,13.55,0,0,1-2,.2,13.52,13.52,0,0,1-4-.3A14.49,14.49,0,0,1,6,34.48l-1.5-1.2a14.89,14.89,0,0,1-4.4-8.6,16.23,16.23,0,0,1-.1-2.1,12.65,12.65,0,0,1,2.6-7.2A9.88,9.88,0,0,1,5.4,12.78ZM6.8,9a1.1,1.1,0,0,1,0-.8,1.91,1.91,0,0,1,.3-.8,2.37,2.37,0,0,1,1.5-.9c.3,0,.6-.1.9-.1H12a25.32,25.32,0,0,1,6.6,1.1,23.68,23.68,0,0,1,6.1,2.7,18.48,18.48,0,0,1,2.7,1.9,3.81,3.81,0,0,1,1.1,1.4,1.41,1.41,0,0,1,.1.9,1.79,1.79,0,0,1-.5.7.91.91,0,0,0,.3-.7,1.85,1.85,0,0,0-.2-.7,5.24,5.24,0,0,0-1.1-1c-.9-.6-1.9-1.1-2.8-1.6a39.2,39.2,0,0,0-6-2.3A47,47,0,0,0,12,7.48c-.5-.1-1.1-.1-1.6-.2l-.9-.2H8.7a1.9,1.9,0,0,0-1.3.5A2,2,0,0,0,6.8,9Z\"\r\n                  />\r\n          <g>\r\n            <g class=\"pot-rate-session\">\r\n              <path class=\"pot-rate-color-3\"\r\n              [class.pot-rate-0]=\"members.pourcentage_contribution === 0\"\r\n              [class.pot-rate-15]=\"members.pourcentage_contribution > 0 && members.pourcentage_contribution <= 15\"\r\n              [class.pot-rate-30]=\"members.pourcentage_contribution > 15 && members.pourcentage_contribution <= 30\"\r\n              [class.pot-rate-45]=\"members.pourcentage_contribution > 30 && members.pourcentage_contribution <= 45\"\r\n              [class.pot-rate-60]=\"members.pourcentage_contribution > 45 && members.pourcentage_contribution <= 60\"\r\n              [class.pot-rate-75]=\"members.pourcentage_contribution > 60 && members.pourcentage_contribution <= 75\"\r\n              [class.pot-rate-90]=\"members.pourcentage_contribution > 75 && members.pourcentage_contribution <= 99\"\r\n              [class.pot-rate-100]=\"members.pourcentage_contribution === 100\"                       \r\n                  d=\"M1.2,7.15s8.92-2.46,12.38,0,14.22,0,14.22,0V35.91H1.2Z\"\r\n              />\r\n          </g>\r\n              <path class=\"pot-rate-color-4\"\r\n                  d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\"\r\n                      />\r\n          </g>\r\n          <path class=\"pot-rate-color-5\"\r\n              d=\"M21.5,12.08c-1.2-.4-2.6-.9-4.1-1.3-1.1-.3-2.3-.6-3.3-.8-2.8-.5-4.8-.6-4.9-.1-.1.2.2.6.8.9a25.68,25.68,0,0,0,6.7,2.5,23.56,23.56,0,0,0,7.5,1.2c.4-.1.7-.2.7-.3C25,13.78,23.6,13,21.5,12.08Z\"\r\n                  />\r\n          <text class=\"pot-rate-text\" transform=\"translate(5.78 28.56)\">\r\n              <tspan style=\"letter-spacing: -0.004883254918305625em\"></tspan>\r\n              <tspan x=\"0\" y=\"0\">{{ members ? members.pourcentage_contribution : 0}}%</tspan>                                        \r\n          </text>\r\n        </svg>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item>\r\n            <p><b>{{ 'DATE_TEXT' | translate }} : </b>{{seance? (seance.date_debut.split(' ')[0] | date :'mediumDate') : ('TONTINE_LIST_CONFIG' | translate)}}</p>\r\n          </ion-item>\r\n          <ion-item>\r\n            <p><b>{{ 'TONTINE_DETAIL_TEXT11' | translate }} : </b>{{myTontine.numberlot ? myTontine.numberlot : ('TONTINE_LIST_CONFIG' | translate)}}</p>\r\n            <ion-button  slot=\"end\" *ngIf=\"canUpdateBatches()\"   color=\"warning\" class=\"ion-text-capitalize\" (click)=\"updateBatches($event,seance)\">\r\n              {{'EDIT_TEXT' | translate}}\r\n            </ion-button>\r\n          </ion-item>\r\n          <ion-item>\r\n            <p><b>{{ 'CYCLE_TEXT' | translate }} : </b>{{cycle ? cycle.numerocycle : ('TONTINE_LIST_CONFIG' | translate) }}</p>\r\n          </ion-item>\r\n          <ion-item>\r\n            <p><b>{{ 'TONTINE_DETAIL_TEXT10' | translate }} : </b>{{seance ? seance.numero_seance : ('TONTINE_LIST_CONFIG' | translate) }}</p>\r\n          </ion-item>\r\n          <ion-item>\r\n            <p><b>{{ 'TONTINE_DETAIL_TEXT13' | translate }}: </b> \r\n              <span *ngIf=\"members.prochain_a_bouffer.length === 0\">{{ 'TONTINE_LIST_TEXT6' | translate }}</span>\r\n              <span *ngIf=\"members.prochain_a_bouffer.length > 1\"><br/></span>\r\n              <span *ngFor=\"let beneficiary of members.prochain_a_bouffer\">\r\n                <br/> {{beneficiary.lastname}}  {{beneficiary.firstname ? beneficiary.firstname : beneficiary.phone}}\r\n              </span></p>\r\n          </ion-item>\r\n          <ion-item>\r\n            <p><b>{{ 'TONTINE_DETAIL_TEXT14' | translate }}: </b>\r\n              {{(getAmountContributionSeance(members.liste_membre, myTontine.coutshare) | commadumper)}} {{myTontine.monnaie}}\r\n            </p>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"showContributionBtn&&currentSeance || icanPayCaution(currentTontine)\">\r\n  <p class=\"ion-text-center\" *ngIf=\"!checkPaidCaution || !hascheckPreviousSeance\">\r\n    <ion-spinner name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-button expand=\"full\"   *ngIf=\"canContributeSeance(members.liste_membre) && checkContributeCondition()\"\r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\" (click)=\"confirmPin()\">\r\n        {{ 'CONTRIBUTE_MSG' | translate }}\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"full\"   *ngIf=\"!canContributeSeance(members.liste_membre) && checkContributeCondition()\"\r\n    color=\"warning\" \r\n    class=\"ion-text-uppercase\"\r\n    shape=\"round\">\r\n    {{ 'TONTINE_LIST_CONTRIBUTE' | translate }}\r\n</ion-button>\r\n<ion-button expand=\"full\" *ngIf=\"icanPayCaution(currentTontine)\" color=\"warning\"\r\n[disabled]=\"loadingPay\" class=\"ion-text-uppercase\" shape=\"round\"\r\n(click)=\"confirmCautionPin(currentTontine,user.id)\">\r\n{{ 'PAY_CAUTION_TEXT' | translate }} {{ '(' + cautionAmount + currentTontine.tontine.monnaie + ')'}}\r\n</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "1Ol2":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session/session.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "O4jt":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/session/update-batches/update-batches.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>     \r\n  <ion-row>\r\n    <ion-col>\r\n      <h4>{{ 'M_UPDATE_BATCHES' | translate }}</h4> \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item color=\"light\">\r\n        <ion-label  position=\"fixed\"> <b>{{ 'NB_BATCHES_TEXT' | translate }} :</b>  </ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"numberlot\"  (keyup.enter)=\"setNbBatchesTontineGo()\" ></ion-input>    \r\n      </ion-item> \r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" fill=\"outline\"  (click)=\"close()\">{{ 'CANCEL_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\"  (click)=\"setNbBatchesTontine()\" [disabled]=\"numberlot <= 0 || loading\">{{ 'EDIT_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n</ion-grid>\r\n");

/***/ }),

/***/ "miys":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session/session.module.ts ***!
  \********************************************************************************/
/*! exports provided: SessionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPageModule", function() { return SessionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _session_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.page */ "nePP");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _update_batches_update_batches_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-batches/update-batches.component */ "to7N");









const routes = [
    {
        path: '',
        component: _session_page__WEBPACK_IMPORTED_MODULE_6__["SessionPage"]
    }
];
let SessionPageModule = class SessionPageModule {
};
SessionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _session_page__WEBPACK_IMPORTED_MODULE_6__["SessionPage"],
            _update_batches_update_batches_component__WEBPACK_IMPORTED_MODULE_8__["UpdateBatchesComponent"]
        ],
        entryComponents: [
            _update_batches_update_batches_component__WEBPACK_IMPORTED_MODULE_8__["UpdateBatchesComponent"]
        ]
    })
], SessionPageModule);



/***/ }),

/***/ "nePP":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session/session.page.ts ***!
  \******************************************************************************/
/*! exports provided: SessionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPage", function() { return SessionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session.page.html */ "09YB");
/* harmony import */ var _session_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.page.scss */ "1Ol2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/contribution.service */ "US41");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contribute/contribute.component */ "8qrH");
/* harmony import */ var _update_batches_update_batches_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-batches/update-batches.component */ "to7N");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contribute-seance/contribute-seance.component */ "tdqF");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");

















let SessionPage = class SessionPage {
    constructor(activeRoute, router, userService, tontinesData, ui, tontineError, tontine, translate, alertController, popop, errorservice, contribution, modatCtrl) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.userService = userService;
        this.tontinesData = tontinesData;
        this.ui = ui;
        this.tontineError = tontineError;
        this.tontine = tontine;
        this.translate = translate;
        this.alertController = alertController;
        this.popop = popop;
        this.errorservice = errorservice;
        this.contribution = contribution;
        this.modatCtrl = modatCtrl;
        this.tontineId = this.activeRoute.snapshot.params.tontineId;
        this.user = this.userService.getUserData();
        const tontineData = this.tontine.getCurrentTontineData();
        this.currentTontine = tontineData;
        this.myTontine = tontineData.tontine;
        this.currentSeance = tontineData.seance_courante;
        this.members = tontineData.membres;
        this.bid = tontineData.tontine;
        this.seance = tontineData.seance_courante;
        this.cycle = tontineData.cycle_courant;
        this.showContributionBtn = true;
        this.hascheckPreviousSeance = false;
        this.seancesList = [];
        this.hasPaidCaution = false;
        this.checkPaidCaution = false;
    }
    ngOnInit() {
        this.checkCaution();
        this.getContributions(null);
    }
    // Refresh the list
    refreSher(event) {
        this.getContributions(event);
        this.checkCaution();
    }
    // Get the amount of contribution of the seance
    getAmountContributionSeance(memberList, shareAmount) {
        return this.tontinesData.getAmountContributionSeance(memberList, shareAmount, this.user.id);
    }
    // check if the user can contribute
    canContributeSeance(memberList) {
        this.showContributionBtn = this.tontinesData.canShowContributionButton(memberList, this.user.id);
        return this.tontinesData.canContributeSeance(memberList, this.user.id);
    }
    // can update the number of batches
    canUpdateBatches() {
        let canUpdate = false;
        if (this.seance && this.seance.archived === 0 && this.myTontine.active === 1 && this.myTontine.administrator === 1) {
            canUpdate = true;
        }
        return canUpdate;
    }
    // Open the modal
    openContribute(param) {
        this.modatCtrl
            .create({
            component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__["ContributeComponent"],
            componentProps: {
                tontineName: param.title,
                contribAmount: param.montant,
                data: param
            }
        })
            .then(modalEl => {
            modalEl.present();
        });
    }
    // Open the modal seance
    openContributeSeance(param) {
        this.modatCtrl
            .create({
            component: _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_13__["ContributeSeanceComponent"],
            componentProps: {
                tontineName: param.title,
                contribAmount: param.montant,
                data: param
            }
        })
            .then(modalEl => {
            modalEl.present();
        });
    }
    // update the number of batches of a seance
    updateBatches(ev, seance) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popop.create({
                component: _update_batches_update_batches_component__WEBPACK_IMPORTED_MODULE_10__["UpdateBatchesComponent"],
                event: ev,
                cssClass: 'delete-popover',
                componentProps: {
                    seanceId: seance.id,
                    tontineId: seance.tontine_id
                }
            });
            popover.onDidDismiss().then(ans => {
                this.getDetailInfos();
            });
            return yield popover.present();
        });
    }
    // update the current data
    getDetailInfos() {
        this.tontine.getTontineDetail(this.myTontine.tontine_id).subscribe((reponse) => {
            if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                const tontineData = this.tontine.getCurrentTontineData();
                this.myTontine = tontineData.tontine;
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.errorservice.renewSession().then((data) => {
                    if (data && data.result === "OK") {
                        this.getDetailInfos();
                    }
                });
            }
            else {
                this.errorservice.manageError(error);
            }
        });
    }
    // show option to pay previous seance
    canPayPreviousSeance(translations, pin) {
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
                            this.selectPaymentMode(pin, 'previous');
                        }
                    }, {
                        text: `${translations[3]}`,
                        handler: () => {
                            this.selectPaymentMode(pin, 'current');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // show the pin confirmation dilaog
    confirmPin() {
        const tontineData = this.tontine.getCurrentTontineData();
        if (tontineData && tontineData.tontine.tontine_payment_type_id === 1 || tontineData.tontine.drawingtype_id === 6) {
            this.router.navigate(['/', 'dashboard', 'my-tontines', tontineData.tontine.tontine_id, 'debts']);
        }
        else {
            const userPin = this.userService.getUserSecret();
            if (this.seancesList && this.seancesList.length > 0) {
                // show the dialog for the payment type
                const translations = [];
                this.translate.get(['PAY_PREVIOUS_SEANCE_TITLE', 'PAY_PREVIOUS_SEANCE_MSG', 'PREVIOUSE_TEXT', 'CURRENT_TEXT'], { previousSeance: this.tontinesData.getDate(this.seancesList[0], 'date_debut'), currentSeance: this.tontinesData.getDate(this.currentSeance, 'date_debut') }).subscribe(trans => {
                    translations.push(trans.PAY_PREVIOUS_SEANCE_TITLE);
                    translations.push(trans.PAY_PREVIOUS_SEANCE_MSG);
                    translations.push(trans.PREVIOUSE_TEXT);
                    translations.push(trans.CURRENT_TEXT);
                    this.canPayPreviousSeance(translations, userPin.password);
                });
            }
            else {
                this.selectPaymentMode(userPin.password, 'current');
            }
        }
    }
    getContributions(event) {
        const currentTontine = this.tontine.getCurrentTontineData();
        const currentCycle = currentTontine.cycle_courant;
        const param = {
            tontine_id: currentTontine.tontine.tontine_id
        };
        this.hascheckPreviousSeance = false;
        this.contribution.getSeancesNotContribute(param).subscribe((reponse) => {
            if (reponse && reponse.liste_seances && reponse.liste_seances.length > 0) {
                // Get the seances of cycles
                const listSeances = reponse.liste_seances.filter(data => {
                    return currentCycle && (data.cycle_id === currentCycle.id);
                });
                // Get the list of previous seances
                const seancesList = listSeances.filter(data => { return this.currentSeance && (parseInt(data.seance_id) !== parseInt(this.currentSeance.id)); });
                this.seancesList = this.tontinesData.getCurrentMemberPreviousSeanceData(seancesList, this.currentSeance);
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 200);
            }
            this.hascheckPreviousSeance = true;
        }, error => {
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.errorservice.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getContributions(event);
                    }
                    else {
                        this.hascheckPreviousSeance = true;
                    }
                });
            }
            else {
                this.hascheckPreviousSeance = true;
                this.errorservice.manageError(error);
            }
        });
    }
    // open the tontine contribution modal
    selectPaymentMode(pin, type) {
        const tontineData = this.tontine.getCurrentTontineData();
        const user = this.userService.getUserData();
        if (tontineData) {
            const paymentData = type === 'previous' ? this.formatPreviousSeanceData(pin, tontineData, user, this.seancesList) :
                this.formatCurrentSeanceData(pin, tontineData, user);
            this.contribution.sendContributionData(paymentData);
            type === 'previous' ? this.openContributeSeance(paymentData) : this.openContribute(paymentData);
        }
    }
    // format the current seance data
    formatCurrentSeanceData(pin, tontineData, user) {
        const paymentData = {
            title: tontineData.tontine.name,
            paymentMode: 'WALLET',
            contribution: this.getAmountContributionSeance(tontineData.membres.liste_membre, tontineData.tontine.coutshare),
            seance_id: tontineData.seance_courante.id,
            device_name: tontineData.tontine.monnaie,
            montant: tontineData.tontine.coutshare,
            typecontribution_id: 2,
            sens_contribution: 'sortant',
            liste_part: this.tontinesData.getListPart(tontineData.membres.liste_membre, user.id),
            pin: pin
        };
        return paymentData;
    }
    // format the previous seance data
    formatPreviousSeanceData(pin, tontineData, user, seances) {
        const paymentData = {
            title: tontineData.tontine.name,
            paymentMode: 'WALLET',
            contribution: this.tontinesData.getPreviousSeanceContribution(seances),
            seance_id: seances[0].seance_id,
            device_name: tontineData.tontine.monnaie,
            montant: tontineData.tontine.coutshare,
            typecontribution_id: 2,
            sens_contribution: 'sortant',
            liste_part: this.tontinesData.getListPart(tontineData.membres.liste_membre, user.id),
            pin: pin
        };
        return paymentData;
    }
    // check if i can contribute seance
    checkContributeCondition() {
        let ican = false;
        if (this.currentSeance
            && this.currentTontine
            && this.currentTontine.tontine
            && this.currentTontine.tontine.active === 1
            && this.checkPaidCaution
            && this.hasPaidCaution
            && this.hascheckPreviousSeance) {
            ican = true;
        }
        return ican;
    }
    // can pay caution
    icanPayCaution(currentTontine) {
        let ican = false;
        if (!this.hasPaidCaution
            && this.checkPaidCaution
            && this.hascheckPreviousSeance
            && this.hasCycle(currentTontine)
            && this.cautionAmount > 0
            && (currentTontine.seance_courante && currentTontine.seance_courante.numero_seance < 3 || !currentTontine.seance_courante)) {
            ican = true;
        }
        return ican;
    }
    checkCaution() {
        const tontineData = this.tontine.getCurrentTontineData();
        if (tontineData && tontineData.tontine && tontineData.cycle_courant) {
            this.checkIfcautionPaid(tontineData.tontine, tontineData.cycle_courant.id, this.user.id);
        }
    }
    // check if a tontine has a caution 
    checkTontineCaution(tontineData) {
        return this.tontinesData.hasTontineCaution(tontineData);
    }
    // check if a user has paid a caution
    checkIfcautionPaid(tontineData, cycleId, userId) {
        if (this.checkTontineCaution(tontineData)) {
            this.getCautionData(cycleId, userId);
        }
        else {
            this.hasPaidCaution = true;
            this.checkPaidCaution = true;
        }
    }
    // Check if the cycle is define
    hasCycle(tontineData) {
        return this.tontinesData.hasTontineCycle(tontineData);
    }
    // get the caution data
    getCautionData(cycleId, userId) {
        this.checkPaidCaution = false;
        this.tontine.getMembersPaidPartialCautions(cycleId).subscribe(data => {
            if (data && data.message === 'success') {
                let members = data.liste_members;
                members = members.filter((member) => { return parseInt(member.infos_user.id, 10) === parseInt(userId, 10); });
                this.hasPaidCaution = members.length > 0 ? false : true;
                this.cautionAmount = members.length > 0 ? parseFloat(members[0].rest_amount_to_pay ? members[0].rest_amount_to_pay : 0) : 0;
                this.checkPaidCaution = true;
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.errorservice.renewSession().then((session) => {
                        if (session && session.result === "OK") {
                            this.getCautionData(cycleId, userId);
                        }
                        else {
                            this.checkPaidCaution = true;
                        }
                    });
                }
                else {
                    this.checkPaidCaution = true;
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.checkPaidCaution = true;
                this.errorservice.manageError(error);
            }
        });
    }
    // pay the cation
    payCaution(currentTontine, userId) {
        const param = {
            cycle_id: currentTontine.cycle_courant.id,
            amount: this.cautionAmount
        };
        this.loadingPay = true;
        this.translate.get('TOPUP_TEXT1').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.contribution.payMemberCaution(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.translate.get('PAY_CAUTION_RESULT_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.checkIfcautionPaid(this.currentTontine.tontine, this.currentTontine.cycle_courant.id, this.user.id);
            }
            this.loadingPay = false;
            this.ui.dismissLoading();
        }, error => {
            this.loadingPay = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loadingPay = true;
                    this.errorservice.renewSession().then((session) => {
                        this.ui.dismissLoading();
                        if (session && session.result === "OK") {
                            this.payCaution(currentTontine, userId);
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
                this.errorservice.manageError(error);
            }
        });
    }
    // show option to pay previous seance
    canPayCaution(translations, currentTontine, userId) {
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
                            this.payCaution(currentTontine, userId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // confim Payment
    confirmCautionPin(currentTontine, userId) {
        const translationsData = [];
        this.translate.get(['PAY_CAUTION_TEXT', 'PAY_CAUTION_OK_MSG', 'CANCEL_TEXT', 'YES_TEXT'], { amount: this.cautionAmount, currency: currentTontine.tontine.monnaie }).subscribe(trans => {
            translationsData.push(trans.PAY_CAUTION_TEXT);
            translationsData.push(trans.PAY_CAUTION_OK_MSG);
            translationsData.push(trans.CANCEL_TEXT);
            translationsData.push(trans.YES_TEXT);
            this.canPayCaution(translationsData, currentTontine, userId);
        });
    }
};
SessionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_12__["TontineGlobalDataService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_15__["UiService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_14__["TontineErrorService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_11__["ErrorService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_8__["ContributionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
SessionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session',
        template: _raw_loader_session_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SessionPage);



/***/ }),

/***/ "to7N":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session/update-batches/update-batches.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: UpdateBatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBatchesComponent", function() { return UpdateBatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_batches_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-batches.component.html */ "O4jt");
/* harmony import */ var _update_batches_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-batches.component.scss */ "yL+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let UpdateBatchesComponent = class UpdateBatchesComponent {
    constructor(popoverController, error, ui, tontine, storage, events, translate, navParam, tontineError) {
        this.popoverController = popoverController;
        this.error = error;
        this.ui = ui;
        this.tontine = tontine;
        this.storage = storage;
        this.events = events;
        this.translate = translate;
        this.navParam = navParam;
        this.tontineError = tontineError;
        this.numberlot = 1;
        this.seanceId = this.navParam.get('seanceId');
        this.tontineId = this.navParam.get('tontineId');
        this.loading = false;
    }
    ngOnInit() {
    }
    close() {
        this.popoverController.dismiss();
    }
    // edit batches
    setNbBatchesTontine() {
        this.loading = true;
        const params = {
            numberlot: this.numberlot,
            tontine_id: this.tontineId,
            seance_id: this.seanceId
        };
        this.tontine.setNbBatches(params).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('NB_BATCHES_UPDATED_MSG').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.storage.remove('app-tontines');
                this.events.publish('new-tontine');
            }
            this.close();
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.setNbBatchesTontine();
                        }
                        else {
                            this.loading = false;
                            this.close();
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.close();
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.loading = false;
                this.close();
                this.error.manageError(error);
            }
        });
    }
    setNbBatchesTontineGo() {
        if (this.numberlot && this.numberlot > 0) {
            this.setNbBatchesTontine();
        }
    }
};
UpdateBatchesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageData"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__["TontineErrorService"] }
];
UpdateBatchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-batches',
        template: _raw_loader_update_batches_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_batches_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateBatchesComponent);



/***/ }),

/***/ "yL+G":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/session/update-batches/update-batches.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYmF0Y2hlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=session-session-module.js.map