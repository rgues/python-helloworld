(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stat-stat-module"],{

/***/ "I2mD":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat/stat.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "elio":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat/stat.page.ts ***!
  \************************************************************************/
/*! exports provided: StatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatPage", function() { return StatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stat.page.html */ "rz/5");
/* harmony import */ var _stat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat.page.scss */ "I2mD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");











let StatPage = class StatPage {
    constructor(fb, tontine, dateService, util, error, router) {
        this.fb = fb;
        this.tontine = tontine;
        this.dateService = dateService;
        this.util = util;
        this.error = error;
        this.router = router;
        this.loading = false;
        this.currentStatData = null;
        this.cyclesTemp = [];
        this.tontineData = this.tontine.getCurrentTontineData();
        this.tontineId = this.tontineData.tontine.tontine_id;
        this.allStatsData = [];
        this.currentDate = new Date();
        this.cycles = [];
        this.allData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.initPeriodForm();
        this.loading = true;
        this.getTontinesCycle(null);
    }
    initPeriodForm() {
        this.periodForm = this.fb.group({
            dateStart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateEnd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    get startOn() {
        return this.periodForm.get('dateStart');
    }
    get endOn() {
        return this.periodForm.get('dateEnd');
    }
    // Filter the history by date
    filterByDate(formData) {
        this.infiniteScroll.disabled = false;
        const filterResult = [];
        const begin = this.dateService.formatDateTiret(formData.dateStart);
        const end = this.dateService.formatDateTiret(formData.dateEnd);
        const DateBegin = new Date(begin);
        const DateEnd = new Date(end);
        this.cyclesTemp.forEach(trans => {
            const dateTrans = new Date(this.dateService.formatDateTiret(trans.cycle.created_at));
            if (trans && dateTrans >= DateBegin && dateTrans <= DateEnd) {
                filterResult.push(trans);
            }
        });
        this.cycles = filterResult;
    }
    // Get the tontine's cycles
    getTontinesCycle(event) {
        this.tontine.getTontinesCycles(this.tontineData.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                if (reponse.cycles && reponse.cycles.length > 0) {
                    this.allStatsData = reponse.cycles;
                    this.cyclesTemp = this.util.orderByObjetKeyUp(this.allStatsData, 'cycle', 'created_at');
                    this.allData = this.cyclesTemp;
                    if (this.allData.length > this.nbItems) {
                        this.cycles = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.cycles.push(this.allData[this.cycles.length]);
                        }
                    }
                    else {
                        this.cycles = this.allData;
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
                        this.getTontinesCycle(event);
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
        this.getTontinesCycle(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.cycles.length < this.allData.length) {
                    this.cycles.push(this.allData[this.cycles.length]);
                }
                else if (this.cycles.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Get all seances of a cycle
    getSeance(cycleId) {
        this.allStatsData.forEach(data => {
            if (data.cycle.id === cycleId) {
                this.currentStatData = data;
                const nbreCyle = this.allStatsData.length;
                this.tontine.setCurrentSeanceData({ nbCycles: nbreCyle, data: this.currentStatData });
            }
        });
        this.router.navigateByUrl('/dashboard/my-tontines/' + this.tontineId + '/stat/pools');
    }
};
StatPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_9__["DateserviceService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
StatPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"], { static: false },] }]
};
StatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tontine-stat',
        template: _raw_loader_stat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatPage);



/***/ }),

/***/ "fa/e":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/stat/stat.module.ts ***!
  \**************************************************************************/
/*! exports provided: StatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatPageModule", function() { return StatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _stat_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat.page */ "elio");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const routes = [
    {
        path: '',
        component: _stat_page__WEBPACK_IMPORTED_MODULE_4__["StatPage"]
    }
];
let StatPageModule = class StatPageModule {
};
StatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_stat_page__WEBPACK_IMPORTED_MODULE_4__["StatPage"]]
    })
], StatPageModule);



/***/ }),

/***/ "rz/5":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/stat/stat.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"['/','dashboard','my-tontines',tontineId]\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"ion-padding\">\r\n      {{ 'FINANCIAL_STATISQUE' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <form [formGroup]=\"periodForm\">\r\n      <ion-grid class=\"header-search-bg\">\r\n        <ion-row>\r\n          <ion-col size=\"5\">\r\n            <ion-item>\r\n              <ion-label>{{ 'M_START_TEXT' | translate }}</ion-label>\r\n              <ion-datetime formControlName=\"dateStart\" displayFormat=\"D MMM, YYYY\" [min]=\"currentDate.getFullYear()\"  pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"5\">\r\n            <ion-item>\r\n              <ion-label>{{ 'M_END_TEXT' | translate }}</ion-label>\r\n              <ion-datetime [disabled]=\"startOn.invalid\" formControlName=\"dateEnd\" displayFormat=\"D MMM, YYYY\" [min]=\"currentDate.getFullYear()\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-buttons class=\"edit-btn\">\r\n              <ion-button [disabled]=\"periodForm.invalid\" (click)=\"filterByDate(periodForm.value)\" > \r\n                <ion-icon slot=\"icon-only\" name=\"search\" color=\"warning\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>            \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"!loading\">\r\n      <ion-col>\r\n        {{'TOTAL_NUMBER_CYCLE' | translate }}: {{cycles.length}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let data of cycles\"  (click)=\"getSeance(data.cycle.id)\" detail>\r\n            <ion-label>\r\n              <h3><small>{{ 'CYCLE_REF' | translate }} : </small>{{data.cycle.numerocycle}}</h3>\r\n              <ion-text color=\"primary\"><h2><small>{{ 'CYCLE_START_ON' | translate }}:</small> {{ data.cycle.created_at ? data.cycle.created_at.split(' ')[0] : ('NOT_DEFINED' | translate)}} </h2></ion-text>  \r\n              <p>                \r\n              <span class=\"ion-float-left\"><small>{{ 'M_N_POOLS' | translate }}: </small>({{data.nombre_seances ? data.nombre_seances : 0}})</span> \r\n                <span class=\"ion-float-right\"><b><small>{{ 'STATUS_TEXT' | translate}}: </small>{{data.cycle.archived === 1 ? ('CLOSE_TEXT' | translate) : ('ACTIVE_TEXT' | translate) }}</b></span> \r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=stat-stat-module.js.map