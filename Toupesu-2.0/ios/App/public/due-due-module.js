(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["due-due-module"],{

/***/ "G2rP":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/due/due.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "KHEe":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/due/due.page.ts ***!
  \****************************************************************************/
/*! exports provided: DuePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuePage", function() { return DuePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_due_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./due.page.html */ "Kfkb");
/* harmony import */ var _due_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./due.page.scss */ "G2rP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _debts_menu_debts_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../debts-menu/debts-menu.component */ "24m/");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/contribution.service */ "US41");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");














let DuePage = class DuePage {
    constructor(popoverController, tontine, translate, ui, error, debt, contribution, route, util) {
        this.popoverController = popoverController;
        this.tontine = tontine;
        this.translate = translate;
        this.ui = ui;
        this.error = error;
        this.debt = debt;
        this.contribution = contribution;
        this.route = route;
        this.util = util;
        this.tontineCurrency = 'ZAR';
        this.totalPay = 0;
        this.totalBill = 0;
        this.totalDue = 0;
        this.balance = 0;
        this.selectedDebts = [];
        this.myDebts = [];
        this.loading = false;
        this.contributions = [];
        this.allData = [];
        this.penalties = [];
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentSeance = this.currentTontine.seance_courante;
        this.currentCycle = this.currentTontine.cycle_courant;
        this.members = this.currentTontine.membres;
        this.nbItems = 10;
        this.allCurrencies = [];
        this.itemsData = [];
        this.loadingPay = false;
        this.myDebts = [];
        this.typesContributions = [];
        this.itemsList = [];
    }
    ngOnInit() {
        this.loading = true;
        this.getCurrentSeance();
        this.getSeances(null);
        this.getContributionType(false);
    }
    // Get the current seance of tontine
    getCurrentSeance() {
        this.contribution.getSeanceCurrentTontine(this.currentTontine.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.currentSeance = reponse.seance;
            }
        }, error => {
            this.error.manageError(error);
        });
    }
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _debts_menu_debts_menu_component__WEBPACK_IMPORTED_MODULE_6__["DebtsMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
    checkEvent(e, index) {
        if (e.target.checked == true) {
            this.selectedDebts[index].choice = true;
        }
        else {
            this.selectedDebts[index].choice = false;
        }
        this.totalPay = 0;
        this.totalBill = 0;
        this.balance = 0;
        this.totalDue = 0;
        this.itemsData = [];
        this.itemsList = [];
        this.selectedDebts.forEach(item => {
            this.totalDue += parseFloat(item.value.montant);
            if (item.choice) {
                this.itemsList.push(item.value);
                this.totalPay += parseFloat(item.value.montant);
                this.itemsData.push({ seance_id: item.value.seance_id, numero_part: item.value.numero_part, montant: item.value.montant, typecontribution_id: item.value.typecontribution_id });
            }
        });
        this.balance = this.totalPay;
        // formattage de la monnaie
        this.totalPay = parseFloat(Number(this.totalPay).toFixed(2));
        this.totalDue = parseFloat(Number(this.totalDue).toFixed(2));
        this.balance = parseFloat(Number(this.balance).toFixed(2));
    }
    processPayment() {
        // Go to the payment process
        this.debt.sendDebtsData({
            items: this.itemsData,
            itemsList: this.itemsList,
            balance: this.balance,
            dueAmount: this.totalDue,
            billAmount: this.totalPay,
            dueList: this.allData,
            dueSelect: this.selectedDebts
        });
        this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', 'in-progress-paiement']);
    }
    // debts in progress
    debtInProgress() {
        this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', 'in-progress-list']);
    }
    // get the current contribution
    getContributionType(refresh) {
        this.contribution.getTypeContributionTontine(refresh).then((data) => {
            this.typesContributions = [];
            data.forEach(contrib => {
                this.translate.get(`TYPE_CONTRIBUTION_${contrib.id}`).subscribe(trans => {
                    this.typesContributions.push({ id: contrib.id, value: trans });
                });
            });
        });
    }
    // get the current desscirption
    getDescription(typeContribId) {
        let des = '';
        this.typesContributions.forEach(contrib => {
            if (contrib.id === typeContribId) {
                des = contrib.value;
            }
        });
        return des;
    }
    // Get the list of item with amount greather than 0
    filterItems(itemsList) {
        let dataList = [];
        if (itemsList && itemsList.length > 0) {
            dataList = itemsList.filter((current) => { return current.montant > 0 && current.cycle_id === this.currentCycle.id; });
        }
        return dataList;
    }
    // Get the list of seances that member hasn't contrib
    getSeances(event) {
        const param = {
            tontine_id: this.tontine.getCurrentTontineData().tontine.tontine_id
        };
        this.contribution.getSeancesContributeOrPenalties(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                let dueDatta = [];
                dueDatta = dueDatta.concat(this.util.orderByKeyUp(this.filterItems(reponse.liste_seances_contribution), 'date_debut'));
                dueDatta = dueDatta.concat(this.util.orderByKeyUp(this.filterItems(reponse.liste_seances_penalite), 'date_debut'));
                this.allData = dueDatta;
                this.selectedDebts = [];
                this.allData.forEach(data => {
                    this.selectedDebts.push({ choice: false, value: data });
                });
                if (this.allData.length > this.nbItems) {
                    this.myDebts = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.myDebts.push(this.allData[this.myDebts.length]);
                    }
                }
                else {
                    this.myDebts = this.allData;
                }
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
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getSeances(event);
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else if (error && error.error && error.error.tontine_id_not_exist) {
                this.translate.get('TONTINE_USERS_MSG4').subscribe(trans => {
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
        this.getSeances(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.myDebts.length < this.allData.length) {
                    this.myDebts.push(this.allData[this.myDebts.length]);
                }
                else if (this.myDebts.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
};
DuePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__["ErrorService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_7__["DebtsManagerService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_8__["ContributionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] }
];
DuePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false },] }]
};
DuePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-due',
        template: _raw_loader_due_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_due_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DuePage);



/***/ }),

/***/ "Kfkb":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/due/due.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/'+ currentTontine.tontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n     {{ 'DEBTS_DUE' | translate }}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"debts-due\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-card class=\"block-1\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row>\r\n              <ion-col size=\"6\" class=\"col-button\">\r\n                  <div class=\"desc\">{{ 'TONTINE_LIST_TEXT2' | translate }}</div>\r\n                  <div class=\"menu-amount\"> {{currentSeance && currentSeance.date_debut ? (currentSeance.date_debut.split(' ')[0] | date :'mediumDate') : ('TONTINE_LIST_CONFIG' | translate) }}</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"col-button\">\r\n                  <div class=\"desc\">{{ 'TONTINE_LIST_TEXT5' | translate }}</div>\r\n                  <div class=\"menu-amount\"> \r\n                    <span *ngIf=\"members && members.prochain_a_bouffer.length === 0\">{{ 'TONTINE_LIST_TEXT6' | translate }}</span> \r\n                    <span *ngFor=\"let beneficiary of members.prochain_a_bouffer\">\r\n                     {{beneficiary.lastname}}  {{beneficiary.firstname ? beneficiary.firstname : beneficiary.phone}}<br/>\r\n                </span></div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'CYCLE_TEXT' | translate }}</div>\r\n                <div class=\"menu-amount\">{{currentCycle && currentCycle.numerocycle? currentCycle.numerocycle : ('TONTINE_LIST_CONFIG' | translate) }}</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"col-button\">\r\n                <div class=\"desc\">{{ 'POOL_TEXT' | translate }}</div>\r\n                <div class=\"menu-amount\">{{currentSeance && currentSeance.numero_seance ? currentSeance.numero_seance : ('TONTINE_LIST_CONFIG' | translate)}}</div>\r\n              </ion-col>\r\n            </ion-row>            \r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n    <ion-row  *ngIf=\"myDebts && myDebts.length > 0\">\r\n      <ion-col>\r\n        <p>{{PAYMENT_TICK_MSG | translate}}</p>\r\n        <ion-list >\r\n          <ion-item *ngFor=\"let debt of myDebts; let i=index\">\r\n            <ion-checkbox (ionChange)=\"checkEvent($event, i)\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n            <ion-label>\r\n              <p>                \r\n                <span class=\"ion-float-left\"><small>{{ 'DATE_TEXT' | translate }}: </small>{{  debt && debt.date_debut ? (debt.date_debut.split(' ')[0] | date :'mediumDate') : ''}}</span>\r\n                <span class=\"ion-float-right\"><b><small>{{ 'CYCLE_TEXT' | translate }}/{{'SESSION_TEXT' | translate}}: </small>{{ debt && debt.numero_cycle ? debt && debt.numero_cycle : 0 }}/{{ debt && debt.numero_seance ? debt.numero_seance : 0 }}</b></span> \r\n              </p>\r\n              <h3>{{ debt && debt.description ? (debt.description | translate) : ''}}</h3> \r\n              <p>\r\n                <ion-text class=\"ion-float-left\" color=\"warning\"><span>{{ debt && debt.montant ? (debt.montant | commadumper) : 0 }}  {{debt.device }}</span></ion-text>\r\n                <ion-text class=\"ion-float-right\" color=\"dark\"><span>{{ \"SHARE_ID_TEXT\" | translate }} :  {{debt.numero_part}} </span></ion-text>\r\n              </p>\r\n              <ion-text color=\"dark\" *ngIf=\"debt.typecontribution_id === 1\"><strong >{{ \"TYPE_TEXT\" | translate }} : </strong> {{debt.type_penalite === 'retard' ? ('PENALITY_RETARD' | translate) : ('PENALITY_ABSENCE' | translate)}} </ion-text>\r\n            </ion-label>            \r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"myDebts && myDebts.length === 0  && !loading\">\r\n    <p class=\"ion-padding ion-text-center\" >{{ 'PAYMENT_TICK_EMPTY_MSG' | translate}}</p>\r\n  </div>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-row>\r\n    <ion-col *ngIf=\"myDebts && myDebts.length === 0  && !loading\">\r\n      <ion-button expand=\"full\"  color=\"warning\" \r\n      class=\"ion-text-uppercase\"\r\n      shape=\"round\"\r\n      (click)=\"debtInProgress()\">\r\n      {{'DEBTS_IN_PROCESS' | translate }}\r\n    </ion-button>\r\n    </ion-col>\r\n    <ion-col  *ngIf=\"totalPay != 0\">\r\n      <ion-button expand=\"full\" [disabled]=\"!currentCurrency && totalPay === 0\"\r\n      color=\"warning\" \r\n      class=\"ion-text-uppercase\"\r\n      shape=\"round\"\r\n      (click)=\"processPayment()\">\r\n{{ 'PROCESS_PAYMENT' | translate }} {{ (totalPay | commadumper) }}  {{currentTontine.tontine.monnaie }} <span class=\"ion-text-lowercase\">({{ + itemsList.length + ('DEBT_TEXT' | translate) }})</span>\r\n</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <p *ngIf=\"loadingPay\" class=\"ion-text-center ion-padding\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "biLl":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/due/due.module.ts ***!
  \******************************************************************************/
/*! exports provided: DuePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuePageModule", function() { return DuePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _due_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./due.page */ "KHEe");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _due_page__WEBPACK_IMPORTED_MODULE_6__["DuePage"]
    }
];
let DuePageModule = class DuePageModule {
};
DuePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_due_page__WEBPACK_IMPORTED_MODULE_6__["DuePage"]]
    })
], DuePageModule);



/***/ })

}]);
//# sourceMappingURL=due-due-module.js.map