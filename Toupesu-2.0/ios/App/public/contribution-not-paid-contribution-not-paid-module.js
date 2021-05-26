(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contribution-not-paid-contribution-not-paid-module"],{

/***/ "MYPT":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/contribution-not-paid/contribution-not-paid.page.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + tontineData.tontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">{{ 'CONTRIBUTION_NOT_PAID_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"my-penalities\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let data of listData\">\r\n      <ion-label>\r\n        <p>{{ 'CYCLE_TEXT' | translate }} / {{ 'SESSION_TEXT' | translate }}: <b> {{data.numero_cycle? data.numero_cycle : ''}}/{{data.numero_seance? data.numero_seance : ''}}</b> </p>\r\n        <p>{{ 'DESCRIPTION_TEXT' | translate }}: <b>{{data.description ? (data.description | translate) : ''}}</b> </p>\r\n        <p>{{ 'AMOUNT_TEXT' | translate }}: <b>{{data.contribution ? data.contribution : ''}} {{tontineData.tontine ? tontineData.tontine.monnaie : ''}}</b> </p>\r\n        <p>{{ 'TONTINE_USERS_TEXT8' | translate }}: <b>{{ data.share}}</b></p>\r\n        <p>{{ 'DATE_TEXT' | translate }}: <b>{{data.date_debut ? data.date_debut.split(' ')[0] : ''}}</b> </p>\r\n      </ion-label>\r\n      <ion-button slot=\"end\" color=\"warning\" class=\"pay-btn\"\r\n        (click)=\"confirmPin(data)\">\r\n          <ion-text>{{ 'PAY_TEXT' | translate }}</ion-text>\r\n          <ion-icon name=\"wallet\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>   \r\n  </ion-list>\r\n  <div  *ngIf=\"listData && listData.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'M_LIST_CONTRIBUTION_NOT_PAID_MSG' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Sazt":
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribution-not-paid/contribution-not-paid.page.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmlidXRpb24tbm90LXBhaWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "U+aZ":
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribution-not-paid/contribution-not-paid.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ContributionNotPaidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionNotPaidPageModule", function() { return ContributionNotPaidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _contribution_not_paid_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contribution-not-paid.page */ "nkre");








const routes = [
    {
        path: '',
        component: _contribution_not_paid_page__WEBPACK_IMPORTED_MODULE_7__["ContributionNotPaidPage"]
    }
];
let ContributionNotPaidPageModule = class ContributionNotPaidPageModule {
};
ContributionNotPaidPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _contribution_not_paid_page__WEBPACK_IMPORTED_MODULE_7__["ContributionNotPaidPage"]
        ]
    })
], ContributionNotPaidPageModule);



/***/ }),

/***/ "nkre":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribution-not-paid/contribution-not-paid.page.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ContributionNotPaidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionNotPaidPage", function() { return ContributionNotPaidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contribution_not_paid_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contribution-not-paid.page.html */ "MYPT");
/* harmony import */ var _contribution_not_paid_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contribution-not-paid.page.scss */ "Sazt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/contribution.service */ "US41");
/* harmony import */ var _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contribute-seance/contribute-seance.component */ "tdqF");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var _contribute_seance_caution_contribute_seance_caution_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contribute-seance-caution/contribute-seance-caution.component */ "zu7K");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");













let ContributionNotPaidPage = class ContributionNotPaidPage {
    constructor(modatCtrl, contribution, tontinesData, tontine, userService, error, util) {
        this.modatCtrl = modatCtrl;
        this.contribution = contribution;
        this.tontinesData = tontinesData;
        this.tontine = tontine;
        this.userService = userService;
        this.error = error;
        this.util = util;
        this.listData = [];
        this.tontineData = this.tontine.getCurrentTontineData();
        this.currentCycle = this.tontineData.cycle_courant;
        this.currentSeance = this.tontineData.seance_courante;
        this.allData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.loading = true;
        this.getContributions(null);
    }
    // check if a tontine has a caution 
    checkTontineCaution(tontineData) {
        return this.tontinesData.hasTontineCaution(tontineData);
    }
    // Get the list user contributionns not paid
    getContributions(event) {
        const currentTontine = this.tontine.getCurrentTontineData();
        const param = {
            tontine_id: currentTontine.tontine.tontine_id
        };
        this.contribution.getSeancesNotContribute(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.liste_seances && reponse.liste_seances.length > 0) {
                let allData = [];
                allData = this.util.orderByKeyUp(reponse.liste_seances, 'updated_at');
                allData = allData.filter(data => {
                    return this.currentCycle && (data.cycle_id === this.currentCycle.id) && this.currentSeance && (this.currentSeance.id !== data.seance_id);
                });
                this.allData = [];
                // group by session and part
                allData.forEach(seance => {
                    if (!this.tontinesData.notIn(seance, this.allData)) {
                        const seanceData = seance;
                        seanceData.share = 1;
                        seanceData.liste_part = [{ numero_part: seance.numero_part }];
                        seanceData.contribution = seance.montant;
                        this.allData.push(seanceData);
                    }
                    else {
                        this.allData.forEach((data, index, array) => {
                            if (data.numero_seance === seance.numero_seance && data.numero_cycle === seance.numero_cycle) {
                                this.allData[index].contribution += seance.montant;
                                this.allData[index].share += 1;
                                this.allData[index].liste_part.push({ numero_part: seance.numero_part });
                            }
                        });
                    }
                });
                if (this.allData.length > this.nbItems) {
                    this.listData = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.listData.push(this.allData[this.listData.length]);
                    }
                }
                else {
                    this.listData = this.allData;
                }
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            this.loading = false;
            this.error.manageError(error);
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getContributions(event);
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
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getContributions(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.listData.length < this.allData.length) {
                    this.listData.push(this.allData[this.listData.length]);
                }
                else if (this.listData.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // open the tontine contribution modal
    selectPaymentMode(pin, data) {
        const tontineData = this.tontine.getCurrentTontineData();
        // Ask the user page pin before send data
        const paymentData = {
            title: tontineData.tontine.name,
            paymentMode: 'WALLET',
            contribution: data.contribution,
            seance_id: data.seance_id,
            device_name: tontineData.tontine.monnaie,
            montant: data.montant,
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
        const componentView = this.checkTontineCaution(this.tontineData.tontine) ? _contribute_seance_caution_contribute_seance_caution_component__WEBPACK_IMPORTED_MODULE_10__["ContributeSeanceCautionComponent"] : _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_8__["ContributeSeanceComponent"];
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
                    this.loading = true;
                    this.listData = [];
                    this.allData = [];
                    this.getContributions(null);
                }
            });
        });
    }
    // show the pin confirmation dilaog
    confirmPin(peanlity) {
        const userPin = this.userService.getUserSecret();
        this.selectPaymentMode(userPin.password, peanlity);
    }
};
ContributionNotPaidPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_7__["ContributionService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__["TontineGlobalDataService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] }
];
ContributionNotPaidPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
ContributionNotPaidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contribution-not-paid',
        template: _raw_loader_contribution_not_paid_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contribution_not_paid_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContributionNotPaidPage);



/***/ })

}]);
//# sourceMappingURL=contribution-not-paid-contribution-not-paid-module.js.map