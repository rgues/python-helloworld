(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-tontines-tontine-new-tontine-new-module"],{

/***/ "F6E3":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-new/tontine-new.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-tontines\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{'M_CREATE_TONTINE' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-new\">\r\n  <form [formGroup]=\"createTontineForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_EDIT_TEXT7' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"tontine_name\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                <div class=\"error-message\" *ngIf=\"tontineName.hasError(validation.type) && (tontineName.dirty || tontineName.touched)\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'DESCRIPTION_TEXT' | translate }}</ion-label>\r\n            <ion-textarea type=\"text\" formControlName=\"description\" required></ion-textarea>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.description\">\r\n                <div class=\"error-message\" *ngIf=\"tontineDesc.hasError(validation.type) && (tontineDesc.dirty || tontineDesc.touched)\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_DETAIL_TEXT5' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updateType()\" formControlName=\"type_tontine_id\">\r\n              <ion-select-option *ngFor=\"let type of typeOfTontine\" [value]=\"type.type.id\">{{ type.label }}</ion-select-option>          \r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"ion-padding-horizontal\" *ngIf=\"!tontineType.dirty\">\r\n            <small  [innerHTML]=\"'TYPE_DESCRIPTION_MSG' | translate\"></small>\r\n          </div>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.type\">\r\n              <div class=\"error-message\" *ngIf=\"tontineType.hasError(validation.type) && (tontineType.dirty || tontineType.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_PAYMENT_TYPE' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updatePaiement()\" formControlName=\"tontine_payment_type_id\">\r\n              <ion-select-option *ngFor=\"let payment of paymentTypes\" [value]=\"payment.value\">{{ payment.label }}</ion-select-option>          \r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"ion-padding-horizontal\" *ngIf=\"!tontineTypePayment.dirty\">\r\n            <small  [innerHTML]=\"'TYPE_PAIEMENT_MSG' | translate\"></small>\r\n          </div>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.typepayment\">\r\n              <div class=\"error-message\" *ngIf=\"tontineTypePayment.hasError(validation.type) && (tontineTypePayment.dirty || tontineTypePayment.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_EDIT_TEXT5' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updateCurrency(createTontineForm.value.country)\" formControlName=\"country\">\r\n              <ion-select-option *ngFor=\"let state of states\" [value]=\"state.country_name\">{{ state.country_label }}</ion-select-option>          \r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"ion-padding-horizontal\" *ngIf=\"!tontineCountry.dirty\">\r\n            <small  [innerHTML]=\"'COUNTRY_MSG' | translate\"></small>\r\n          </div>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"createTontineForm.value.country && createTontineForm.value.active === 0\">\r\n              <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n              {{ 'NEWS_COUNTRY_NOT_ACTIVE' | translate }}\r\n            </div>\r\n            <ng-container *ngFor=\"let validation of validationMessages.country\">\r\n              <div class=\"error-message\" *ngIf=\"tontineCountry.hasError(validation.type) && (tontineCountry.dirty || tontineCountry.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT3' | translate }}</ion-label>\r\n            <ion-input type=\"number\" (ionChange)=\"updateAmount()\" formControlName=\"contribution_amount\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ createTontineForm.value.currency }} </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.amount\">\r\n              <div class=\"error-message\" *ngIf=\"tontineAmount.hasError(validation.type) && (tontineAmount.dirty || tontineAmount.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n\r\n    \r\n\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_DETAIL_TEXT4' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updatePeriodicity(createTontineForm.value.frequency);getCurrentDateInfo(createTontineForm.value.startDate,createTontineForm.value.frequency)\" formControlName=\"frequency\">\r\n              <ion-select-option *ngFor=\"let period of periodicities\" [value]=\"period.value\">{{ period.label }}</ion-select-option>          \r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.frequency\">\r\n              <div class=\"error-message\" *ngIf=\"tontineFrequency.hasError(validation.type) && (tontineFrequency.dirty || tontineFrequency.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'DATE_START' | translate }}</ion-label>\r\n            <!---->\r\n            <ion-datetime (ionChange)=\"getCurrentDateInfo(createTontineForm.value.startDate,createTontineForm.value.frequency)\"  [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"startDate\" displayFormat=\"DDDD D MMM, YYYY\"   pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngIf=\"createTontineForm.value.startDate && !isDateValid\">\r\n              <div class=\"error-message\" >\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"'MIN_DATE_ERROR_TEXT' | translate\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row  *ngIf=\"MsgTontinePeriodicity && createTontineForm.value.startDate && createTontineForm.value.frequency\">\r\n        <ion-col size=\"12\">\r\n          <div class=\"ion-padding\" color=\"dark\" *ngIf=\"MsgTontinePeriodicity\" >\r\n            <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n            <span [innerHTML]=\"MsgTontinePeriodicity\"></span>\r\n           </div>\r\n        </ion-col>\r\n        <ion-col  *ngIf=\"ShowTontinePeriodicityMonthly\" >\r\n          <ion-list>\r\n            <ion-radio-group  formControlName=\"monthFrequencyOption\" (ionChange)=\"OptionChange(createTontineForm.value.monthFrequencyOption,createTontineForm.value.startDate)\">\r\n              <ion-item>\r\n                <ion-label>\r\n                  {{ 'MSG_TONTINE_MONTH2' | translate}}\r\n                </ion-label>\r\n                <ion-radio [value]=\"0\" [checked]=\"createTontineForm.value.monthFrequencyOption === 0  ? true: false\"></ion-radio>\r\n              </ion-item>  \r\n              <ion-item>\r\n                <ion-label>\r\n                  {{ MonthDayOccurencyLabel | translate  }}\r\n                </ion-label>\r\n                <ion-radio [value]=\"1\" [checked]=\"createTontineForm.value.monthFrequencyOption === 1 ? true: false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"MonthDayOccurencyMsg\">\r\n          <div class=\"ion-padding\" color=\"dark\" >\r\n            <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n            <span class=\"ml-4\" [innerHTML]=\"MonthDayOccurencyMsg\"></span>\r\n          </div>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\">                \r\n          <ion-toggle formControlName=\"with_caution\"  color=\"primary\"></ion-toggle>\r\n          <ion-label>\r\n            {{ 'WITH_CAUTION_TEXT' | translate  }}\r\n          </ion-label>\r\n        </ion-item>\r\n        <div class=\"ion-padding-horizontal\" *ngIf=\"!createTontineForm.value.with_caution\">\r\n          <small  [innerHTML]=\"'CAUTION_MSG' | translate\"></small>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    \r\n    <ion-row >\r\n      <ion-col size=\"12\">\r\n        <ion-item [disabled]=\"!createTontineForm.value.with_caution\">\r\n          <ion-label position=\"floating\">{{ 'CAUTION_AMOUNT' | translate }}</ion-label>\r\n          <ion-input  type=\"number\"  formControlName=\"caution_amount\" required></ion-input>\r\n          <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ createTontineForm.value.currency }} </span>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.cautionAmount\">\r\n            <div class=\"error-message\" *ngIf=\"cautionAmount.invalid && (cautionAmount.dirty || cautionAmount.touched)\">\r\n              <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n             <span [innerHTML]=\"'MIN_ERROR_CAUTION_AMOUNT' | translate : {amount : 1, currency : createTontineForm.value.currency}\"></span>\r\n            </div>\r\n          </ng-container>\r\n        </div> \r\n      </ion-col>          \r\n    </ion-row>\r\n\r\n    <ion-row >\r\n      <ion-col>\r\n        <ion-item [disabled]=\"!createTontineForm.value.with_caution\">\r\n          <ion-label>{{ 'CAUTION_TYPE' | translate }}</ion-label>\r\n          <ion-select formControlName=\"type_caution\">\r\n            <ion-select-option *ngFor=\"let caution of typesCaution\" [value]=\"caution.value\">{{ caution.name }}</ion-select-option>          \r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\" [disabled]=\"canCreateTontine()\" (click)=\"createTontine()\"\r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\">\r\n    {{ 'SAVE_TEXT' | translate }}\r\n  </ion-button>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "NPUU":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-new/tontine-new.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b250aW5lLW5ldy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "NnPh":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-new/tontine-new.page.ts ***!
  \***********************************************************************/
/*! exports provided: TontineNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineNewPage", function() { return TontineNewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tontine_new_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tontine-new.page.html */ "F6E3");
/* harmony import */ var _tontine_new_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tontine-new.page.scss */ "NPUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "RmnQ");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");






















let TontineNewPage = class TontineNewPage {
    constructor(fb, locate, event, location, tontineData, paymentData, userService, tontine, errorService, dateService, zone, formUtil, router, ui, alertController, auth, constant, navController, tontineError, localStorage) {
        this.fb = fb;
        this.locate = locate;
        this.event = event;
        this.location = location;
        this.tontineData = tontineData;
        this.paymentData = paymentData;
        this.userService = userService;
        this.tontine = tontine;
        this.errorService = errorService;
        this.dateService = dateService;
        this.zone = zone;
        this.formUtil = formUtil;
        this.router = router;
        this.ui = ui;
        this.alertController = alertController;
        this.auth = auth;
        this.constant = constant;
        this.navController = navController;
        this.tontineError = tontineError;
        this.localStorage = localStorage;
        this.states = [];
        this.typeOfTontine = [];
        this.periodicities = [];
        this.startDateSelect = new Date();
        this.MsgTontinePeriodicity = "";
        this.ShowTontinePeriodicityMonthly = false;
        this.MonthDayOccurency = 1;
        this.MonthDayOccurencyMsg = "";
        this.MonthDayOccurencyLabel = "";
        this.maxDate = (new Date()).getFullYear() + 5;
        this.minAmount = 1;
        this.isDateValid = true;
        this.minAmountMessage = '';
        this.user = this.userService.getUserData();
        this.tontinename = '';
        this.minDate = this.dateService.formatDateTiret(new Date());
        this.paymentTypes = [];
        this.paymentTypesAll = [];
        this.typesCaution = [];
        this.getPeriodicity();
    }
    ngOnInit() {
        this.initCreateTontineForm();
        this.initValidateMessage();
        this.getTypes();
        this.getPaymentTypes();
        this.getCountries(false);
        this.getCurrentCountry(false);
        this.getCautionList();
    }
    get tontineName() {
        return this.createTontineForm.get('tontine_name');
    }
    get tontineDesc() {
        return this.createTontineForm.get('description');
    }
    get tontineType() {
        return this.createTontineForm.get('type_tontine_id');
    }
    get tontineTypePayment() {
        return this.createTontineForm.get('tontine_payment_type_id');
    }
    get tontineCountry() {
        return this.createTontineForm.get('country');
    }
    get tontineCurrenccy() {
        return this.createTontineForm.get('currrency');
    }
    get tontineAmount() {
        return this.createTontineForm.get('contribution_amount');
    }
    get tontineFrequency() {
        return this.createTontineForm.get('frequency');
    }
    get tontineDate() {
        return this.createTontineForm.get('startDate');
    }
    get cautionAmount() {
        return this.createTontineForm.get('caution_amount');
    }
    // Init periodicity 
    getPeriodicity() {
        this.location.get(['TONTINE_PERIODICITY_DAY', 'TONTINE_PERIODICITY_WEEK', 'TONTINE_PERIODICITY_MONTH'])
            .subscribe(data => {
            this.periodicities.push({ value: 'Day', key: 'TONTINE_PERIODICITY_DAY', label: data.TONTINE_PERIODICITY_DAY });
            this.periodicities.push({ value: 'Week', key: 'TONTINE_PERIODICITY_WEEK', label: data.TONTINE_PERIODICITY_WEEK });
            this.periodicities.push({ value: 'Month', key: 'TONTINE_PERIODICITY_MONTH', label: data.TONTINE_PERIODICITY_MONTH });
        });
    }
    initValidateMessage() {
        this.location.get(['M_NAME_REQUIRED', 'M_DESCRIPTION_REQUIRED', 'M_TYPE_REQUIRED',
            'M_COUNTRY_REQUIRED', 'M_CURRENCY_REQUIRED', 'M_AMOUNT_REQUIRED', 'M_FREQUENCY_REQUIRED',
            'M_PHONE_REQUIRED', 'M_STARTDATE_REQUIRED'], { amount: 1 }).subscribe(trans => {
            this.validationMessages = {
                name: [
                    { type: 'required', message: trans.M_NAME_REQUIRED }
                ],
                description: [
                    { type: 'required', message: trans.M_DESCRIPTION_REQUIRED }
                ],
                type: [
                    { type: 'required', message: trans.M_TYPE_REQUIRED }
                ],
                typepayment: [
                    { type: 'required', message: trans.M_TYPEPAYMENT_REQUIRED }
                ],
                country: [
                    { type: 'required', message: trans.M_COUNTRY_REQUIRED }
                ],
                currency: [
                    { type: 'required', message: trans.M_CURRENCY_REQUIRED }
                ],
                amount: [
                    { type: 'required', message: trans.M_AMOUNT_REQUIRED }
                ],
                frequency: [
                    { type: 'required', message: trans.M_FREQUENCY_REQUIRED }
                ],
                phone: [
                    { type: 'required', message: trans.M_PHONE_REQUIRED }
                ],
                startDate: [
                    { type: 'required', message: trans.M_STARTDATE_REQUIRED }
                ]
            };
        });
    }
    // Get the type of tontines
    getTypes() {
        this.tontine.getTypeTontine().subscribe((typeTontines) => {
            const listTontinesTypes = [];
            this.zone.run(() => {
                typeTontines.type.forEach(typeData => {
                    this.location.get(`TYPE_TONTINE_ID${typeData.id}`).subscribe(value => {
                        if (typeData.id === 1 || typeData.id === 2 || typeData.id === 3 || typeData.id === 5 || typeData.id === 6) {
                            listTontinesTypes.push({ type: typeData, key: `TYPE_TONTINE_ID${typeData.id}`, label: value });
                        }
                    });
                });
                this.typeOfTontine = listTontinesTypes;
            });
            setTimeout(() => {
                this.createTontineForm.get('type_tontine_id').setValue(1);
            }, 200);
        }, error => {
            this.errorService.manageError(error);
        });
    }
    // Update the type
    updateType() {
        const currentType = this.createTontineForm.value.type_tontine_id;
        this.typeOfTontine.forEach(data => {
            if (data.type.id === currentType) {
                this.createTontineForm.get('type_tontine_key').setValue(data.key);
            }
            // When it is loan type, fixed type to traditionnal banking
            if (currentType === 6) {
                this.createTontineForm.get('tontine_payment_type_id').setValue(1);
            }
        });
        this.updatePaiement();
    }
    initCreateTontineForm() {
        this.createTontineForm = this.fb.group({
            frequency: ['Month', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            user_id: [''],
            type_tontine_id: [''],
            monthFrequencyOption: [0],
            is_week_day: ['0'],
            active: [0],
            type_tontine_key: ['TYPE_TONTINE_ID1'],
            country_key: [''],
            tontine_payment_type_id: [''],
            frequency_key: ['TONTINE_PERIODICITY_MONTH'],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            tontine_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            description: [''],
            contribution_amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.minAmount), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            tontine_date: [''],
            startDate: [this.dateService.formatDateTiret(this.dateService.addDays(this.startDateSelect, 1)), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            with_caution: [false],
            type_caution: ['member'],
            caution_amount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)])]
        });
        this.getCurrentDateInfo(this.createTontineForm.value.startDate, this.createTontineForm.value.frequency);
        this.OptionChange(this.createTontineForm.value.monthFrequencyOption, this.createTontineForm.value.startDate);
        this.checkDate(this.createTontineForm.value.startDate);
    }
    // Remove space
    updateAmount() {
        this.createTontineForm.get('contribution_amount').setValue(this.tontineData.removeSpace(this.createTontineForm.value.contribution_amount));
    }
    // Update the periodicity
    updatePeriodicity(periode) {
        this.periodicities.forEach(period => {
            if (period.value === periode) {
                this.createTontineForm.get('frequency_key').setValue(period.key);
            }
        });
    }
    checkDate(date) {
        const currentDate = new Date();
        const inputDate = new Date(date);
        inputDate <= currentDate ? this.isDateValid = false : this.isDateValid = true;
    }
    /// choose your month frequency option
    OptionChange(value, DateChosen) {
        var t = 0;
        if (value === 0) {
            this.createTontineForm.get('is_week_day').setValue('0');
            t = t + 1;
            let currentDate = new Date(DateChosen);
            var d = currentDate.getDate();
            currentDate.setMonth(currentDate.getMonth() + t);
            if (currentDate.getDate() != d) {
                currentDate.setDate(0);
            }
            this.location.get(['MSG_TONTINE_MONTH4']).subscribe(data => {
                this.MonthDayOccurencyMsg = data.MSG_TONTINE_MONTH4 + "<b><u>" + this.dateService.formatDateTiret(currentDate) + " </u></b>.";
            });
        }
        if (value === 1) {
            this.createTontineForm.get('is_week_day').setValue('1');
            this.location.get(['MSG_TONTINE_MONTH5']).subscribe(data => {
                this.MonthDayOccurencyMsg = data.MSG_TONTINE_MONTH5 + this.MonthDayOccurencyLabel + ".";
            });
        }
    }
    getCurrentDateInfo(date, periodicity) {
        this.checkDate(date);
        const inputDate = new Date(date);
        var currentMonth = inputDate.toLocaleString('en-us', { month: 'numeric' });
        var currentYear = inputDate.toLocaleString('en-us', { year: 'numeric' });
        var currentDayName = inputDate.toLocaleString('en-us', { weekday: 'long' });
        this.MsgTontinePeriodicity = "";
        this.MonthDayOccurencyMsg = "";
        this.ShowTontinePeriodicityMonthly = false;
        this.createTontineForm.get('is_week_day').setValue('0');
        if (periodicity === "Month") {
            let currentWeekList = this.tontineData.numDaysInMonth(currentMonth, currentYear, this.tontineData.getDayDif(currentDayName));
            // remove days which starts at position 0 or negative positions
            currentWeekList = currentWeekList.filter(function (x) { return x > 0; });
            let currentDayChosen = new Date(date).getDate();
            this.MonthDayOccurency = 1;
            for (var i = 0; i < currentWeekList.length; i++) {
                if (currentWeekList[i] === currentDayChosen) {
                    this.MonthDayOccurency += i;
                    break;
                }
            }
            this.ShowTontinePeriodicityMonthly = true;
            this.location.get(['MSG_TONTINE_WEEK1', 'MSG_TONTINE_MONTH1', 'MSG_TONTINE_MONTH3',
                'MSG_TONTINE_MONTH3A', 'MSG_TONTINE_MONTH3B', 'MSG_TONTINE_MONTH3C', 'MSG_TONTINE_MONTH3D']).subscribe(data => {
                var OcurrencyPosition;
                switch (this.MonthDayOccurency) {
                    case 1:
                        OcurrencyPosition = data.MSG_TONTINE_MONTH3A;
                        break;
                    case 2:
                        OcurrencyPosition = data.MSG_TONTINE_MONTH3B;
                        break;
                    case 3:
                        OcurrencyPosition = data.MSG_TONTINE_MONTH3C;
                        break;
                    default:
                        OcurrencyPosition = data.MSG_TONTINE_MONTH3D;
                        break;
                }
                this.tontineData.getDayTranslation(currentDayName).subscribe(trans => {
                    this.MsgTontinePeriodicity = data.MSG_TONTINE_WEEK1 + this.dateService.formatDateTiret(date) + ".";
                    this.MsgTontinePeriodicity += data.MSG_TONTINE_MONTH1 + ".";
                    this.MonthDayOccurencyLabel = OcurrencyPosition + trans + data.MSG_TONTINE_MONTH3;
                });
            });
            // Check if Radio button for monthly option is checked - begin
            let OptionMonthChoosen = this.createTontineForm.value.monthFrequencyOption;
            var t = 0;
            if (OptionMonthChoosen === 0) {
                this.createTontineForm.get('is_week_day').setValue('0');
                t = t + 1;
                let currentDate = new Date(date);
                var d = currentDate.getDate();
                currentDate.setMonth(currentDate.getMonth() + t);
                if (currentDate.getDate() != d) {
                    currentDate.setDate(0);
                }
                this.location.get(['MSG_TONTINE_MONTH4']).subscribe(data => {
                    this.MonthDayOccurencyMsg = "" + data.MSG_TONTINE_MONTH4 + "<b><u>" + this.dateService.formatDateTiret(currentDate) + " </u></b>.";
                });
            }
            if (OptionMonthChoosen === 1) {
                this.createTontineForm.get('is_week_day').setValue('1');
                this.location.get(['MSG_TONTINE_MONTH5']).subscribe(data => {
                    this.MonthDayOccurencyMsg = "" + data.MSG_TONTINE_MONTH5 + this.MonthDayOccurencyLabel + ".";
                });
            }
            //// Check if Radio button for monthly option is checked - end
        }
        if (periodicity === "Week") {
            this.ShowTontinePeriodicityMonthly = false;
            this.MonthDayOccurencyMsg = "";
            this.location.get(['MSG_TONTINE_WEEK1', 'MSG_TONTINE_WEEK2', 'MSG_TONTINE_WEEK3']).subscribe(data => {
                this.tontineData.getDayTranslation(currentDayName).subscribe(trans => {
                    this.MsgTontinePeriodicity = data.MSG_TONTINE_WEEK1 + this.dateService.formatDateTiret(date) +
                        data.MSG_TONTINE_WEEK2 + trans + data.MSG_TONTINE_WEEK3;
                });
            });
        }
        if (periodicity === "Day") {
            this.ShowTontinePeriodicityMonthly = false;
            this.MonthDayOccurencyMsg = "";
        }
    }
    // set to local Stoirage
    setToStorage(data) {
        this.localStorage.setItem('app-tontines', JSON.stringify(data));
    }
    // Set the default active country 
    getCurrentCountry(refresher) {
        this.locate.getCurrentCountryInfo(refresher).then((country) => {
            if (country) {
                this.defaultState = country.settings;
                if (this.defaultState && this.defaultState.active === 1) {
                    this.createTontineForm.get('country').setValue(this.defaultState.country_name);
                    this.createTontineForm.get('active').setValue(this.defaultState.active);
                    this.createTontineForm.get('currency').setValue(this.defaultState.device_name);
                    const countryLabel = `COUNTRY_${this.defaultState.code_country}`;
                    this.createTontineForm.get('country_key').setValue(countryLabel);
                    this.createTontineForm.get('country_id').setValue(this.defaultState.country_id);
                    this.locate.setCurrentUserCountry(this.defaultState);
                    this.minAmountMessage = `${this.minAmount} ${this.defaultState.device_name}`;
                }
                else {
                    this.createTontineForm.get('active').setValue(this.defaultState.active);
                }
            }
        }).catch(error => {
        });
    }
    // Get the types of payments
    getPaymentTypes() {
        this.tontine.getTypePayment().subscribe((reponse) => {
            const listPaymentTypes = [];
            reponse.type.forEach(payment => {
                this.location.get(`TYPE_PAYMENT_ID${payment.id}`).subscribe(value => {
                    listPaymentTypes.push({ value: payment.id, label: value });
                });
            });
            this.zone.run(() => {
                this.paymentTypes = listPaymentTypes;
                this.paymentTypesAll = listPaymentTypes;
            });
            setTimeout(() => {
                this.createTontineForm.get('tontine_payment_type_id').setValue(2);
            }, 200);
        }, error => {
            this.errorService.manageError(error);
        });
    }
    updatePaiement() {
        if (this.createTontineForm.value.type_tontine_id === 6) {
            const paiements = [];
            this.paymentTypesAll.forEach(payment => {
                if (payment && payment.value === 1) {
                    paiements.push(payment);
                    this.createTontineForm.get('tontine_payment_type_id').setValue(1);
                }
            });
            this.paymentTypes = paiements;
        }
        else {
            this.paymentTypes = this.paymentTypesAll;
        }
    }
    // Get the list of countries
    getCountries(refresher) {
        this.locate.getAllCountries(refresher).then((countries) => {
            this.states = this.paymentData.formatCountriesData(countries, true);
        });
    }
    // show tontine message alert 
    showMessage(translations, country) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let currentLang = this.locate.getCurrentUserLanguage();
            currentLang = currentLang && currentLang.code_langue ? currentLang.code_langue.toLocaleLowerCase() : 'en';
            const alert = yield this.alertController.create({
                header: `${translations[0]}`,
                subHeader: `${translations[1]}`,
                inputs: [
                    {
                        name: 'email',
                        type: 'email',
                        placeholder: `${translations[2]}`,
                    }
                ],
                buttons: [
                    {
                        text: `${translations[3]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    },
                    {
                        text: `${translations[4]}`,
                        handler: (ans) => {
                            if (ans && this.formUtil.validateEmail(ans.email)) {
                                const params = {
                                    country_id: country.country_id,
                                    country_name: country.country_name,
                                    user_id: this.user.id,
                                    lang: currentLang,
                                    email: ans.email
                                };
                                this.userService.requestNews(params).subscribe((reponse) => {
                                    if (reponse && reponse.success) {
                                        this.location.get(['NEWS_TITLE', 'NEWS_MESSAGE']).subscribe(trans => {
                                            this.ui.presentAlert(trans.NEWS_TITLE, trans.NEWS_MESSAGE);
                                        });
                                    }
                                }, error => {
                                    if (error && error.error && error.error.message === 'error') {
                                        if (error.error.already_sent) {
                                            this.location.get('NEWS_ALREADY_SENT').subscribe(trans => {
                                                this.ui.presentToast(trans);
                                            });
                                        }
                                    }
                                    else {
                                        this.errorService.manageError(error);
                                    }
                                });
                            }
                            else {
                                this.location.get('USER_DETAIL_TEXT13').subscribe(trans => {
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
    // Update the currency
    updateCurrency(currentCountry) {
        if (currentCountry) {
            this.states.forEach(state => {
                if (state.country_name === currentCountry) {
                    this.createTontineForm.get('active').setValue(state.active);
                    if (state.active === 1) {
                        this.createTontineForm.get('currency').setValue(state.device_name);
                        this.createTontineForm.get('country_key').setValue(state.country_key);
                        this.minAmountMessage = `${this.minAmount} ${state.device_name}`;
                    }
                    else {
                        const translation = [];
                        this.location.get(['NEWS_TITLE', 'NEWSLETTER_TEXT1', 'NEWSLETTER_TEXT2', 'NEWS_EMAIL', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
                            translation.push(trans.NEWS_TITLE);
                            translation.push(`${trans.NEWSLETTER_TEXT1} ${state.country_name} ${trans.NEWSLETTER_TEXT2}`);
                            translation.push(trans.NEWS_EMAIL);
                            translation.push(trans.CANCEL_TEXT);
                            translation.push(trans.YES_TEXT);
                            this.showMessage(translation, state);
                        });
                    }
                }
            });
        }
    }
    // Show the tontine invitation code and redirect
    showInvitationMessage(message, alerttMessage, OkText) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: alerttMessage,
                message: message,
                buttons: [
                    {
                        text: OkText,
                        handler: () => {
                            const currentDate = new Date();
                            this.auth.setAppLastSession(currentDate.getTime());
                            this.navController.setDirection('root');
                            this.router.navigate(['/dashboard/invitations']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // get the list of caution
    getCautionList() {
        this.constant.getCautionType().subscribe(cautions => {
            this.typesCaution = cautions;
        });
    }
    // validate caution
    isCautionValid(formData) {
        return this.tontineData.isCautionValid(formData);
    }
    // can create a tontine
    canCreateTontine() {
        let ican = false;
        if (this.loading
            || !this.isDateValid
            || this.createTontineForm.invalid
            || this.createTontineForm.value.active === 0
            || (this.createTontineForm.value.frequency === 'Month'
                && (this.createTontineForm.value.monthFrequencyOption !== 0
                    && this.createTontineForm.value.monthFrequencyOption !== 1))
            || !this.isCautionValid(this.createTontineForm.value)) {
            ican = true;
        }
        return ican;
    }
    // Create the tontine
    createTontine() {
        // when the tontine is created, we get the code generee and display it
        this.loading = true;
        this.createTontineForm.get('tontine_date').setValue(this.dateService.formatDateTiret(this.createTontineForm.value.startDate));
        const user = this.userService.getUserData();
        this.createTontineForm.get('user_id').setValue(user.id);
        const formData = this.tontineData.updateCaution(this.createTontineForm.value);
        this.tontine.createTontine(formData).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.tontineCode = reponse.code_invitation;
                this.location.get(['TONTINE_NEW_MSG1', 'TONTINE_NEW_MSG2', 'TONTINE_NEW_MSG3']).subscribe(value => {
                    this.invitationMessage = `${value.TONTINE_NEW_MSG1}  <strong>${this.tontineCode}
              </strong>, ${value.TONTINE_NEW_MSG2} <b>72Hrs</b>. ${value.TONTINE_NEW_MSG3}`;
                });
                const tontineData = reponse.tontine;
                this.location.get('TONTINE_CREATION_TEXT', { tontineName: `<strong>${tontineData.name}</strong>` }).subscribe(value => {
                    this.tontinename = `${value}.`;
                });
                this.currentTontineData = reponse.info_tontine[0];
                this.tontine.setCurrentTontineData(this.currentTontineData);
                this.initCreateTontineForm();
                this.event.publish('new-tontine');
                this.location.get(['TONTINE_NEW_TEXT31', 'MENU_GO']).subscribe(trans => {
                    const message = `<p>${this.tontinename}</p> <p>${this.invitationMessage}</p>`;
                    this.showInvitationMessage(message, trans.TONTINE_NEW_TEXT31, trans.MENU_GO);
                });
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                this.tontineError.manageTontineError(error);
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
};
TontineNewPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_17__["EventService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_14__["TontineGlobalDataService"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_15__["PaymentGlobalDataService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_9__["DateserviceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__["FormUtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_19__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_16__["ConstantService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_13__["TontineErrorService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_21__["LocalStorageService"] }
];
TontineNewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tontine-new',
        template: _raw_loader_tontine_new_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tontine_new_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TontineNewPage);



/***/ }),

/***/ "UJ4L":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-new/tontine-new.module.ts ***!
  \*************************************************************************/
/*! exports provided: TontineNewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineNewPageModule", function() { return TontineNewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tontine_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tontine-new.page */ "NnPh");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _tontine_new_page__WEBPACK_IMPORTED_MODULE_6__["TontineNewPage"]
    }
];
let TontineNewPageModule = class TontineNewPageModule {
};
TontineNewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tontine_new_page__WEBPACK_IMPORTED_MODULE_6__["TontineNewPage"]]
    })
], TontineNewPageModule);



/***/ })

}]);
//# sourceMappingURL=my-tontines-tontine-new-tontine-new-module.js.map