(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["in-progress-list-in-progress-list-module"],{

/***/ "2vCG":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-list/in-progress-list.page.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbi1wcm9ncmVzcy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "YhM9":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-list/in-progress-list.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: InProgressListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressListPage", function() { return InProgressListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_in_progress_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./in-progress-list.page.html */ "jcYv");
/* harmony import */ var _in_progress_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-progress-list.page.scss */ "2vCG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");













let InProgressListPage = class InProgressListPage {
    constructor(fb, router, debt, event, tontine, dateService, util, error) {
        this.fb = fb;
        this.router = router;
        this.debt = debt;
        this.event = event;
        this.tontine = tontine;
        this.dateService = dateService;
        this.util = util;
        this.error = error;
        this.allData = [];
        this.filterData = [];
        this.proofsList = [];
        this.loading = false;
        this.nbItems = 10;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.minDate = this.dateService.formatDateTiret(new Date());
        this.myPaidDebts = [];
        this.event.subscribe('modal-close', () => {
            this.loading = true;
            this.getDebtsInProgress(null);
        });
    }
    ngOnInit() {
        this.initPeriodForm();
        this.loading = true;
        this.getDebtsInProgress(null);
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
    // Filter by date
    filterByDate(formData) {
        this.infiniteScroll.disabled = false;
        this.loading = true;
        const filterResult = [];
        const begin = this.dateService.formatDateTiret(formData.dateStart);
        const end = this.dateService.formatDateTiret(formData.dateEnd);
        const DateBegin = new Date(begin);
        const DateEnd = new Date(end);
        this.filterData.forEach(data => {
            const dateTrans = new Date(this.dateService.formatDateTiret(data.facture.created_at));
            if (data && dateTrans >= DateBegin && dateTrans <= DateEnd) {
                filterResult.push(data);
            }
        });
        setTimeout(() => {
            this.loading = false;
        }, 5000);
        this.myPaidDebts = filterResult;
    }
    // Get the description typecontribution_name
    getDescription(items) {
        items.forEach(item => {
        });
    }
    // get the debts in progress
    getDebtsInProgress(event) {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id
        };
        this.debt.getMemberBillInProgress(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.filterData = this.util.oderByFactureDate(reponse.factures);
                this.allData = this.filterData;
                if (this.allData.length > this.nbItems) {
                    this.myPaidDebts = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.myPaidDebts.push(this.allData[this.myPaidDebts.length]);
                    }
                }
                else {
                    this.myPaidDebts = this.allData;
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
            if (error && error.error) {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getDebtsInProgress(event);
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
        this.getDebtsInProgress(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.myPaidDebts.length < this.allData.length) {
                    this.myPaidDebts.push(this.allData[this.myPaidDebts.length]);
                }
                else if (this.myPaidDebts.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Go to payment detail process
    gotoProgressDebts(debt) {
        this.router.navigate(['/', 'dashboard', 'my-tontines', debt.facture.tontine_id, 'debts', debt.facture.id, 'in-progress']);
    }
};
InProgressListPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_6__["DebtsManagerService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_10__["DateserviceService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] }
];
InProgressListPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false },] }]
};
InProgressListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-in-progress-list',
        template: _raw_loader_in_progress_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_in_progress_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InProgressListPage);



/***/ }),

/***/ "eeWF":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-list/in-progress-list.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: InProgressListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressListPageModule", function() { return InProgressListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _in_progress_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./in-progress-list.page */ "YhM9");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _in_progress_list_page__WEBPACK_IMPORTED_MODULE_6__["InProgressListPage"]
    }
];
let InProgressListPageModule = class InProgressListPageModule {
};
InProgressListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_in_progress_list_page__WEBPACK_IMPORTED_MODULE_6__["InProgressListPage"]]
    })
], InProgressListPageModule);



/***/ }),

/***/ "jcYv":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/in-progress-list/in-progress-list.page.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-tontines/12/debts\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding\">\r\n      {{'DEBT_IN_PROCESS' | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <form [formGroup]=\"periodForm\">\r\n      <ion-grid class=\"header-search-bg\">\r\n        <ion-row>\r\n          <ion-col size=\"5\">\r\n            <ion-item>\r\n              <ion-label>{{'M_START_TEXT' | translate }}</ion-label>\r\n              <ion-datetime formControlName=\"dateStart\" displayFormat=\"D MMM, YYYY\" [max]=\"minDate\"  pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"5\">\r\n            <ion-item>\r\n              <ion-label>{{'M_END_TEXT' | translate }}</ion-label>\r\n              <ion-datetime [disabled]=\"startOn.invalid\" formControlName=\"dateEnd\" displayFormat=\"D MMM, YYYY\" [min]=\"periodForm.value.dateStart ? periodForm.value.dateStart :  minDate\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-buttons class=\"edit-btn\">\r\n              <ion-button [disabled]=\"periodForm.invalid\" (click)=\"filterByDate(periodForm.value)\">\r\n                <ion-icon slot=\"icon-only\" name=\"search\" color=\"warning\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>            \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"in-progress-list\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n<ion-grid *ngIf=\"myPaidDebts && myPaidDebts.length > 0\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <p>{{'DEBT_LIST_IN_PROGRESS' | translate}}</p>\r\n      <ion-list>\r\n          <ion-item  *ngFor=\"let paidDebt of myPaidDebts\" (click)=\"gotoProgressDebts(paidDebt)\" detail>\r\n            <ion-label>\r\n              <p>                \r\n                <span class=\"ion-float-left\"><small>{{ 'DATE_TEXT' | translate }}: </small>{{paidDebt.facture && paidDebt.facture.created_at ? paidDebt.facture.created_at.split(' ')[0] : ''}}</span>\r\n                <span class=\"ion-float-right\"><b><small>{{ 'CYCLE_TEXT' | translate }}/{{'SESSION_TEXT' | translate}}: </small>{{ paidDebt.liste_item && paidDebt.liste_item[0]?paidDebt.liste_item[0].numerocycle : 0 }}/{{ paidDebt.liste_item && paidDebt.liste_item[0]?paidDebt.liste_item[0].numero_seance:0 }}</b></span> \r\n              </p>\r\n              <h2><small>Ref.: </small><b>{{ paidDebt.facture ? paidDebt.facture.reference : '' }}</b></h2>\r\n              <h3><small>{{'DESCRIPTION_TEXT' | translate}}: </small>{{ paidDebt.liste_item && paidDebt.liste_item[0] ? (paidDebt.liste_item[0].typecontribution_name | translate) : '' }}</h3>\r\n              <ion-text color=\"warning\"><h2><small>{{ 'AMOUNT_TEXT' | translate}}: </small>{{ paidDebt.facture ? (paidDebt.facture.montant | commadumper) : 0 }} {{ paidDebt.facture ? paidDebt.facture.device_name : ''}}</h2></ion-text>\r\n            </ion-label>            \r\n          </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n<div  *ngIf=\"myPaidDebts && myPaidDebts.length === 0  && !loading\">\r\n  <p class=\"ion-text-center\" >{{ 'DEBTS_IN_PROCESS_MSG' | translate}}</p>\r\n</div>\r\n\r\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n  <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=in-progress-list-in-progress-list-module.js.map