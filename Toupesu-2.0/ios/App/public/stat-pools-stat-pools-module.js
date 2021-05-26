(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stat-pools-stat-pools-module"],{

/***/ "D4gk":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pools/stat-pools.module.ts ***!
  \**************************************************************************************/
/*! exports provided: StatPoolsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatPoolsPageModule", function() { return StatPoolsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _stat_pools_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat-pools.page */ "OrxI");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const routes = [
    {
        path: '',
        component: _stat_pools_page__WEBPACK_IMPORTED_MODULE_4__["StatPoolsPage"]
    }
];
let StatPoolsPageModule = class StatPoolsPageModule {
};
StatPoolsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_stat_pools_page__WEBPACK_IMPORTED_MODULE_4__["StatPoolsPage"]]
    })
], StatPoolsPageModule);



/***/ }),

/***/ "DrkP":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pools/stat-pools.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LXBvb2xzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "NOZs":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/stat-pools/stat-pools.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',tontineId,'stat']\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"ion-padding\">\r\n      {{ 'FINANCIAL_STATISQUE' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'CYCLE_TEXT' | translate }} #{{currentCycle && currentCycle.numerocycle ? currentCycle.numerocycle : 0}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid *ngIf=\"!loading\">\r\n    <ion-row>\r\n      <ion-col>\r\n        {{ 'TOTAL_NUMBER_POOLS' | translate }}: {{defaultList.length}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item  *ngFor=\"let pool of seances\" [routerLink]=\"['/', 'dashboard', 'my-tontines', tontineId, 'stat', 'pools',  pool.seance.id]\" detail>\r\n            <ion-label>\r\n              <ion-text color=\"primary\"><h2>{{pool.seance.date_debut.split(' ')[0]}}</h2></ion-text>             \r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "OrxI":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat-pools/stat-pools.page.ts ***!
  \************************************************************************************/
/*! exports provided: StatPoolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatPoolsPage", function() { return StatPoolsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stat_pools_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stat-pools.page.html */ "NOZs");
/* harmony import */ var _stat_pools_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat-pools.page.scss */ "DrkP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");








let StatPoolsPage = class StatPoolsPage {
    constructor(tontine, error, util) {
        this.tontine = tontine;
        this.error = error;
        this.util = util;
        this.seances = [];
        this.defaultList = [];
        this.tontineData = this.tontine.getCurrentTontineData();
        this.tontineId = this.tontineData.tontine.tontine_id;
        this.nbreCycle = 0;
        this.loading = true;
        this.allData = [];
        this.nbItems = 15;
    }
    ngOnInit() {
        this.getCycleSeances(null);
    }
    // Get the tontine's seances of cycles
    getCycleSeances(event) {
        this.tontine.getCurrentSeanceData().then((cycle) => {
            this.currentCycle = cycle.data.cycle;
            this.nbreCycle = cycle.nbCycles;
            this.getTontinesSeanceData(this.currentCycle, event);
        });
    }
    // Get the tontine's cycles
    getTontinesSeanceData(cycleData, event) {
        this.tontine.getTontinesCyclesSeances(cycleData.id).subscribe((reponse) => {
            console.log(reponse);
            if (reponse && reponse.message === 'success') {
                if (reponse.seances && reponse.seances.length > 0) {
                    this.defaultList = reponse.seances;
                    this.defaultList = this.util.oderBySeanceDate(this.defaultList);
                    this.tontine.setCurrentSeanceData({ nbCycles: this.nbreCycle, data: { cycle: this.currentCycle, seances: this.defaultList } });
                    this.allData = this.defaultList;
                    if (this.allData.length > this.nbItems) {
                        this.seances = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.seances.push(this.allData[this.seances.length]);
                        }
                    }
                    else {
                        this.seances = this.allData;
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
                        this.getTontinesSeanceData(cycleData, event);
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
        this.getCycleSeances(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.seances.length < this.allData.length) {
                    this.seances.push(this.allData[this.seances.length]);
                }
                else if (this.seances.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
};
StatPoolsPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }
];
StatPoolsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false },] }]
};
StatPoolsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stat-pools',
        template: _raw_loader_stat_pools_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stat_pools_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatPoolsPage);



/***/ })

}]);
//# sourceMappingURL=stat-pools-stat-pools-module.js.map