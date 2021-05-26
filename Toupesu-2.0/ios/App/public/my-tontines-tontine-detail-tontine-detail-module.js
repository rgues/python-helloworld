(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-tontines-tontine-detail-tontine-detail-module"],{

/***/ "0ora":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/contribute-seance-caution/contribute-seance-caution.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'CONTRIBUTE_MSG' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-contribute\">\r\n  <h4 class=\"ion-padding-horizontal\"><small>{{ 'PAIDMODE_MSG1' | translate }} : <b>{{ tontineName }}</b></small></h4>\r\n  <app-paidmode-seance-caution [amountPay]=\"contribAmount\"></app-paidmode-seance-caution>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute('close')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "1fmV":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribute-seance-caution/contribute-seance-caution.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmlidXRlLXNlYW5jZS1jYXV0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "3Kc6":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/contribute-seance/contribute-seance.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'CONTRIBUTE_MSG' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-contribute\">\r\n  <h4 class=\"ion-padding-horizontal\"><small>{{ 'PAIDMODE_MSG1' | translate }} : <b>{{ tontineName }}</b></small></h4>\r\n  <app-paidmode-seance [amountPay]=\"contribAmount\"></app-paidmode-seance>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute('close')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "6lNz":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/tontine-detail-menu/tontine-detail-menu.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"tontine-detail-menu-popover\">  \r\n  <ion-item (click)=\"inviteMember()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'TONTINE_INVITED_TEXT1' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n \r\n  <ion-item (click)=\"financialStats()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'FINANCIAL_STATISQUE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"transactionHistory()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'TRANSACTIONS_HISTORY' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"createTontinePage()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_NEW_TONTINE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-item (click)=\"debtManagerPage()\" *ngIf=\"isTraditionnalBanking()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'DEBTS_MANAGER' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"isLoan()\" (click)=\"loan()\" \r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{'LOAN_MANAGER' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"joinTontinePage()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_JOIN_TONTINE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"canShareCode()\" (click)=\"shareCode()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_SHARE_CODE_TONTINE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"openWallet()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_MY_WALLET' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"archiveTontine()\" *ngIf=\"canArchive()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_ARCHIVE_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "8qrH":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribute/contribute.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeComponent", function() { return ContributeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contribute_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contribute.component.html */ "nfsC");
/* harmony import */ var _contribute_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contribute.component.scss */ "QMsE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");






let ContributeComponent = class ContributeComponent {
    constructor(modatCtrl, event, params) {
        this.modatCtrl = modatCtrl;
        this.event = event;
        this.tontineData = params.get('data');
        this.event.subscribe('modal-pay-close', () => {
            this.closeContribute();
        });
    }
    ngOnInit() { }
    closeContribute() {
        if (this.modatCtrl) {
            this.modatCtrl.dismiss(null, 'cancel');
        }
    }
};
ContributeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ContributeComponent.propDecorators = {
    tontineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contribAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ContributeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contribute',
        template: _raw_loader_contribute_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contribute_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContributeComponent);



/***/ }),

/***/ "G5LT":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/info-edit/info-edit.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "QMsE":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribute/contribute.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmlidXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "RIuK":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/tontine-detail.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b250aW5lLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "TE0T":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/info-edit/info-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InfoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoEditComponent", function() { return InfoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./info-edit.component.html */ "gR9t");
/* harmony import */ var _info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-edit.component.scss */ "G5LT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");

















let InfoEditComponent = class InfoEditComponent {
    constructor(fb, modatCtrl, zone, events, tontine, tontineData, tontineError, paymentData, location, error, locate, ui, dateService, constant) {
        this.fb = fb;
        this.modatCtrl = modatCtrl;
        this.zone = zone;
        this.events = events;
        this.tontine = tontine;
        this.tontineData = tontineData;
        this.tontineError = tontineError;
        this.paymentData = paymentData;
        this.location = location;
        this.error = error;
        this.locate = locate;
        this.ui = ui;
        this.dateService = dateService;
        this.constant = constant;
        this.periodicities = [];
        this.startDateSelect = new Date();
        this.MsgTontinePeriodicity = "";
        this.ShowTontinePeriodicityMonthly = false;
        this.MonthDayOccurency = 1;
        this.MonthDayOccurencyMsg = "";
        this.MonthDayOccurencyLabel = "";
        this.maxDate = (new Date()).getFullYear() + 5;
        this.minAmount = 1;
        this.minAmountMessage = '';
        this.typeOfTontine = [];
        this.states = [];
        this.statesList = [];
        this.startDateSelect = new Date();
        this.loading = false;
        this.isDateValid = false;
        this.minDate = this.dateService.formatDateTiret(new Date());
        this.errorDocFormat = false;
        this.typesCaution = [];
        this.getPeriodicity();
    }
    ngOnInit() {
        this.initValidateMessage();
        let formData = this.tontine.getCurrentTontineData();
        this.currentTontine = formData;
        this.currentSeance = formData.seance_courante;
        this.previousSeance = formData.avant_derniere_seance;
        this.defaultState = this.locate.getCurrentUserCountry();
        this.initInfoEditForm(formData.tontine);
        this.getCountries(false);
        this.getTypes();
        this.getCautionList();
    }
    // Form getters
    get tontineName() {
        return this.infoEditForm.get('tontine_name');
    }
    get tontineDesc() {
        return this.infoEditForm.get('description');
    }
    get tontineType() {
        return this.infoEditForm.get('drawingtype_id');
    }
    get tontineCountry() {
        return this.infoEditForm.get('country');
    }
    get tontineCurrenccy() {
        return this.infoEditForm.get('currrency_form');
    }
    get tontineAmount() {
        return this.infoEditForm.get('contribution_amount_form');
    }
    get tontineFrequency() {
        return this.infoEditForm.get('periodicite');
    }
    get tontineDate() {
        return this.infoEditForm.get('startDate');
    }
    get cautionAmount() {
        return this.infoEditForm.get('caution_amount');
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
    // Can edit Info 
    canEditInfo() {
        let canEdit = false;
        if (((!this.currentSeance && this.currentTontine.tontine.active === 0) || (!this.currentSeance && !this.previousSeance && this.currentTontine.tontine.active === 1) ||
            (this.currentSeance && this.currentSeance.numero_seance < 1 && this.currentTontine.tontine.active === 1)) && this.currentTontine.tontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    // can edit caution
    canEditCaution(cautiondId) {
        let ican = false;
        if (cautiondId && (this.currentSeance && this.currentSeance.numero_seance < 3)
            || !cautiondId && (this.currentSeance && this.currentSeance.numero_seance < 1)
            || !this.currentSeance) {
            ican = true;
        }
        return ican;
    }
    // Form message init
    initValidateMessage() {
        this.location.get(['M_NAME_REQUIRED', 'M_DESCRIPTION_REQUIRED',
            'M_TYPE_REQUIRED', 'M_COUNTRY_REQUIRED', 'M_CURRENCY_REQUIRED', 'M_AMOUNT_REQUIRED',
            'M_FREQUENCY_REQUIRED', 'M_STARTDATE_REQUIRED']).subscribe(trans => {
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
                startDate: [
                    { type: 'required', message: trans.M_STARTDATE_REQUIRED }
                ],
            };
        });
    }
    initInfoEditForm(formData) {
        if (formData.active === 0) {
            this.startDateSelect = this.dateService.addDays(new Date(), 1);
        }
        else {
            this.startDateSelect = formData && formData.date_debut ? new Date(formData.date_debut) : this.dateService.addDays(new Date(), 1);
        }
        const periode = formData && formData.periodicite ? formData.periodicite : null;
        this.infoEditForm = this.fb.group({
            tontine_id: [formData && formData.tontine_id ? formData.tontine_id : ''],
            slogan: [formData && formData.slogan ? formData.slogan : ''],
            monthFrequencyOption: [formData && formData.is_week_day === 0 ? 0 : 1],
            is_week_day: [formData && formData.is_week_day === 0 ? 0 : 1],
            frequence: [formData && formData.frequence ? formData.frequence : '1'],
            country_key: [''],
            periodicite_key: [formData && formData.periodicite_key ? formData.periodicite_key : 'TONTINE_PERIODICITY_MONTH'],
            type_tontine_key: [''],
            quality_id: [formData && formData.quality_id ? formData.quality_id : ''],
            drawingtype_id: [''],
            periodicite: [periode ? periode.charAt(0).toUpperCase() + periode.slice(1) : 'Month'],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            tontine_name: [formData && formData.name ? formData.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            description: [formData && formData.description ? formData.description : ''],
            contribution_amount: [formData && formData.coutshare ? formData.coutshare : ''],
            contribution_amount_form: [{ value: formData && formData.coutshare ? formData.coutshare : '', disabled: this.canEditInfo() ? false : true },
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.minAmount), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            currency: [formData && formData.monnaie ? formData.monnaie : this.defaultState ? this.defaultState.device_name : ''],
            currency_form: [{
                    value: formData && formData.monnaie ? formData.monnaie : this.defaultState ? this.defaultState.device_name : '', disabled: this.canEditInfo() ? false : true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            startDate: [{ value: this.dateService.formatDateTiret(this.startDateSelect), disabled: this.canEditInfo() ? false : true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            tontine_date: [this.dateService.formatDateTiret(this.startDateSelect)],
            with_caution: [formData && formData.caution_id ? true : false],
            caution_id: [formData && formData.caution_id ? formData.caution_id : null],
            type_caution: [formData && formData.caution_type ? formData.caution_type : 'member'],
            caution_amount: [formData && formData.caution_amount ? formData.caution_amount : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)])]
        });
        this.getCurrentDateInfo(this.infoEditForm.value.startDate, this.infoEditForm.value.periodicite);
        this.OptionChange(this.infoEditForm.value.monthFrequencyOption, this.infoEditForm.value.startDate);
        this.checkDate(this.infoEditForm.value.startDate);
    }
    // Close the modal
    closeInfoEdit(response) {
        this.modatCtrl.dismiss(response, 'cancel');
    }
    // initialize type
    typesInit(listTontinesTypes) {
        this.zone.run(() => {
            this.typeOfTontine = listTontinesTypes;
        });
        setTimeout(() => {
            const formData = this.tontine.getCurrentTontineData().tontine;
            const currentType = formData && formData.drawingtype_id ? formData.drawingtype_id : 1;
            this.infoEditForm.get('drawingtype_id').setValue(currentType);
            this.typeOfTontine.forEach(data => {
                if (data.type.id === parseInt(currentType, 10)) {
                    this.infoEditForm.get('type_tontine_key').setValue(data.key ? data.key : 'TYPE_TONTINE_ID1');
                }
            });
        }, 200);
    }
    // Get the type of tontines
    getTypes() {
        this.tontine.getTypeTontine().subscribe((typeTontines) => {
            const listTontinesTypes = [];
            typeTontines.type.forEach(typeData => {
                this.location.get(`TYPE_TONTINE_ID${typeData.id}`).subscribe(value => {
                    if (typeData.id === 1 || typeData.id === 2 || typeData.id === 3 || typeData.id === 5 || typeData.id === 6) {
                        listTontinesTypes.push({ type: typeData, key: `TYPE_TONTINE_ID${typeData.id}`, label: value });
                    }
                });
            });
            this.typesInit(listTontinesTypes);
        }, error => {
            this.error.manageError(error);
        });
    }
    // initialize country
    conutryInit(states) {
        this.zone.run(() => {
            this.statesList = states;
        });
        setTimeout(() => {
            const formData = this.tontine.getCurrentTontineData().tontine;
            this.infoEditForm.get('country').setValue(formData && formData.country ? formData.country : this.defaultState ? this.defaultState.country_name : '');
            this.infoEditForm.get('country_key').setValue(formData && formData.country_key ? formData.country_key : '');
        }, 200);
    }
    // Get the list of countries
    getCountries(refresher) {
        this.locate.getAllCountries(refresher).then((countries) => {
            this.states = this.paymentData.formatCountriesData(countries);
            this.conutryInit(this.states);
        });
    }
    // Check if the date is valid
    checkDate(date) {
        const currentDate = new Date();
        const inputDate = new Date(date);
        inputDate <= currentDate ? this.isDateValid = false : this.isDateValid = true;
    }
    /// choose your month frequency option
    OptionChange(value, DateChosen) {
        var t = 0;
        if (value === 0) {
            this.infoEditForm.get('is_week_day').setValue('0');
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
            this.infoEditForm.get('is_week_day').setValue('1');
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
        this.infoEditForm.get('is_week_day').setValue('0');
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
            let OptionMonthChoosen = this.infoEditForm.value.monthFrequencyOption;
            var t = 0;
            if (OptionMonthChoosen === 0) {
                this.infoEditForm.get('is_week_day').setValue('0');
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
                this.infoEditForm.get('is_week_day').setValue('1');
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
    // Remove space
    updateAmount() {
        this.infoEditForm.get('contribution_amount_form').setValue(this.tontineData.removeSpace(this.infoEditForm.value.contribution_amount_form));
    }
    // Update the type
    updateType() {
        const currentType = this.infoEditForm.value.drawingtype_id;
        this.typeOfTontine.forEach(data => {
            if (data.type.id === parseInt(currentType, 10)) {
                this.infoEditForm.get('type_tontine_key').setValue(data.key);
            }
        });
    }
    // Update the currency
    updateCurrency() {
        const currentCountry = this.infoEditForm.value.country;
        this.states.forEach(state => {
            if (state.country_name === currentCountry) {
                this.infoEditForm.get('currency_form').setValue(state.device_name);
                this.infoEditForm.get('country_key').setValue(state.country_key);
                this.minAmountMessage = `${this.minAmount} ${state.device_name}`;
            }
        });
    }
    // update the periodicity key
    updatePeriodicity() {
        const currentperiod = this.infoEditForm.value.periodicite;
        this.periodicities.forEach(period => {
            if (period.value === currentperiod) {
                this.infoEditForm.get('periodicite_key').setValue(period.key);
            }
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
    canEditTontine() {
        let ican = false;
        if (!this.isDateValid
            || this.infoEditForm.invalid
            || this.loading
            || (this.infoEditForm.value.periodicite === 'Month'
                && (this.infoEditForm.value.monthFrequencyOption !== 0 && this.infoEditForm.value.monthFrequencyOption !== 1))
            || !this.isCautionValid(this.infoEditForm.value)) {
            ican = true;
        }
        return ican;
    }
    // Create the tontine
    updateGeneralInfoTontine() {
        // when the tontine is created, we get the code generee and display it
        this.loading = true;
        this.infoEditForm.get('tontine_date').setValue(this.dateService.formatDateTiret(this.infoEditForm.value.startDate));
        const data = this.infoEditForm.value;
        data.contribution_amount = data.contribution_amount_form ? data.contribution_amount_form : data.contribution_amount;
        data.currency = data.currency_form ? data.currency_form : data.currency;
        const formData = this.tontineData.updateCaution(data);
        this.tontine.updateTontine(formData).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.location.get('TONTINE_EDIT_INFO_TEXT3').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.events.publish('new-tontine');
                this.closeInfoEdit('success');
            }
        }, error => {
            this.loading = false;
            if (error && error.error) {
                if (error.error.user_unauthorized) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updateGeneralInfoTontine();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    uploadFile() {
        const param = {
            picture: '',
            tontine_id: this.currentTontine.value.tontine_id
        };
        this.uploadDocumentation(param);
    }
    // Upload documentation
    uploadDocumentation(param) {
        this.loading = true;
        this.tontine.createAndUpdateDocumentationTontine(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.location.get('TONTINE_EDIT_INFO_TEXT3').subscribe(value => {
                    this.ui.presentToast(value);
                });
            }
        }, error => {
            this.loading = false;
            if (error && error.error) {
                if (error.error.user_unauthorized) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.uploadDocumentation(param);
                        }
                    });
                }
                if (error.error.tontine_not_found) {
                    this.location.get('TONTINE_INVITE_TEXT10').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
};
InfoEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__["EventService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_11__["TontineGlobalDataService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_14__["TontineErrorService"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_12__["PaymentGlobalDataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_16__["UiService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_10__["DateserviceService"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_13__["ConstantService"] }
];
InfoEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info-edit',
        template: _raw_loader_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfoEditComponent);



/***/ }),

/***/ "TnMm":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/tontine-detail.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-tontines\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n      <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n    </ion-avatar>\r\n    <ion-title class=\"ion-padding\">\r\n      <span> {{ myTontine.name ? (myTontine.name | stringTruncate : 11) : '' }} </span>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-detail\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content pullingIcon=\"reload-outline\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n\r\n    <ion-row *ngIf=\"!loadingCaisse\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"walletTontines && walletTontines.length > 0\">\r\n        <ion-card class=\"block-1\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <div class=\"t-balance\">\r\n                  <ion-text color=\"danger\"><span class=\"desc\">{{ 'TONTINE_DETAIL_TEXT7' | translate }} :\r\n                      {{walletTontines && walletTontines[0] ? (walletTontines[0].total_balance | commadumper) : 0 }}\r\n                      {{myTontine.currency}}</span></ion-text>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col [size]=\"detailCaisses && detailCaisses.length > 3 ? 3 : 4\" *ngFor=\"let caisse of detailCaisses\"\r\n                class=\"col-button\">\r\n                <div class=\"desc\">{{caisse.caisse_name ? (caisse.caisse_name.split(' ')[0] | translate) : ''}} <br />\r\n                  {{caisse.caisse_name ? (caisse.caisse_name.replace(caisse.caisse_name.split(' ')[0],\"\") | translate) :\r\n                  ''}} <br /> ({{myTontine.currency}})</div>\r\n                <div class=\"menu-amount\">{{caisse.solde ? (caisse.solde | commadumper) : 0}}</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      *ngIf=\"isAdmin() && currentTontine.tontine.active === 0\">\r\n      <ion-col class=\"ion-margin-top\">\r\n        <ion-label color=\"danger\">\r\n          <ion-icon color=\"danger\" name=\"information-circle-outline\" slot=\"icon-only\"> </ion-icon>\r\n          <span [innerHTML]=\"'TONTINE_ALERT_MESSAGE' | translate\"></span>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"block-2 ion-padding\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"ion-padding-vertical\">\r\n            <p>\r\n              <span>\r\n                <b><em>{{'CREATED_ON' | translate}} {{currentTontine && currentTontine.tontine &&\r\n                    currentTontine.tontine.created_at? currentTontine.tontine.created_at.split(' ')[0] : ''}}</em></b>\r\n              </span>\r\n            </p>\r\n            <span><b><em>{{'DESCRIPTION_TEXT' | translate }} : </em> </b></span>\r\n            <span [innerHTML]=\"myTontine.description\">\r\n            </span>\r\n          </ion-label>\r\n          <ion-label class=\"ion-padding-vertical\">\r\n            <p>\r\n              <span>\r\n                <b><em>{{'ENDED_ON' | translate}} {{currentTontine && currentTontine.tontine &&\r\n                    currentTontine.tontine.date_fin_cycle ? currentTontine.tontine.date_fin_cycle.split(' ')[0] :\r\n                    ''}}</em></b>\r\n              </span>\r\n            </p>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-1\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'TONTINE_NEW_TEXT4' | translate }}</b><br /> {{getCountryName(myTontine.country_key)}}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'TONTINE_DETAIL_TEXT2' | translate }}</b><br /> {{myTontine.currency}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-2\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'TONTINE_EDIT_SHARE_TEXT9' | translate }}</b><br /> {{(myTontine.contribution | commadumper )}}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'TONTINE_EDIT_TEXT10' | translate }}</b><br /> {{getPeriodicityName(myTontine.frequency_key)}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-2\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>Type</b><br />{{getTontineTypeName(myTontine.type_tontine_key)}}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'TONTINE_NEXT_SESSION' | translate }}</b><br />{{ myTontine.dateStart | toDateObj | date :\r\n          'mediumDate'}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-2\"\r\n        *ngIf=\"userContribution && (userContribution.total_contribution || userContribution.total_penalite)\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{'MY_CONTRIBUTION' | translate}}</b><br />{{userContribution && userContribution.total_contribution ?\r\n          (userContribution.total_contribution | commadumper) : 0 }} {{myTontine.currency}}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'MY_PENALTIES' | translate }}</b><br />{{userContribution && userContribution ?\r\n          (userContribution.total_penalite | commadumper) : 0 }} {{myTontine.currency}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-buttons class=\"edit-btn\"\r\n        *ngIf=\"isAdmin()\">\r\n        <ion-button (click)=\"openEditInfo()\">\r\n          <ion-icon color=\"warning\" name=\"create\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </div>\r\n\r\n    <div class=\"block-3\" *ngIf=\"isBid()\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" *ngIf=\"currentAmount.length === 0\">\r\n              <ion-text>\r\n                {{ 'TONTINE_DETAIL_TEXT23' | translate }} <br />\r\n                <b>0 {{myTontine.currency}} </b>\r\n              </ion-text>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" *ngIf=\"currentAmount.length > 0\">\r\n              <ion-text *ngFor=\"let filterValue of currentAmount | slice:0:1;\">\r\n                <p *ngIf=\"currentTontine.seance_courante && currentTontine.seance_courante.id === filterValue.seanceID\">\r\n                  {{ 'TONTINE_DETAIL_TEXT23' | translate }} <br />\r\n                  <b>{{ filterValue.userID && filterValue.userID !== 0 ? filterValue.somme : '0' }}\r\n                    {{currentTontine.tontine.monnaie}}</b><br />\r\n                  {{ 'BY_TEXT' | translate}} {{ filterValue.userID && filterValue.userID !== 0 ?\r\n                  getCreatorName(currentTontine.membres.liste_membre, filterValue.userID) : ('TONTINE_LIST_TEXT6' |\r\n                  translate) }} <br />\r\n                  {{ filterValue.userID && filterValue.userID !== 0 ? ('TONTINE_LIST_TEXT3B' | translate) : '' }} {{\r\n                  filterValue.userID && filterValue.userID !== 0 ? (\": #\"+filterValue.numero_lot) : '' }}\r\n                </p>\r\n              </ion-text>\r\n              <ion-button slot=\"end\" color=\"warning\" class=\"ion-text-capitalize\" shape=\"round\"\r\n                (click)=\"showBidDetail(currentTontine.tontine.tontine_id)\">\r\n                {{ 'VIEW_BID' | translate }}\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-4\">\r\n      <ion-row *ngIf=\"currentTontine && currentTontine.tontine && currentTontine.tontine.tontine_id\">\r\n        <ion-col size=\"12\">\r\n          <ion-list>\r\n            <ion-item [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'session']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'CURRENT_SESSION_TEXT' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"isBid()\" (click)=\"showBidDetail(currentTontine.tontine.tontine_id)\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'VIEW_BID' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!checkTontineCaution(currentTontine.tontine)\"\r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'members']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'TONTINE_DETAIL_TEXT15' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"checkTontineCaution(currentTontine.tontine)\"\r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'member-caution']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'TONTINE_DETAIL_TEXT15' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"isClassement()\"\r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'jackpot-order']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'VIEW_JACKPOT_LIST' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'shares']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'SHARE_TEXT' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'roles']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'ROLES_TEXT' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'penalities']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'PENALITIES_TEXT' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!isTraditionnal() && hasPaidCaution\"\r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'contrib-not-paid']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'CONTRIBUTION_NOT_PAID_TEXT' | translate }}\r\n              </ion-text>\r\n              <ion-badge *ngIf=\"nbContributions && nbContributions.length > 0\" slot=\"end\" color=\"light\">\r\n                {{nbContributions.length}}</ion-badge>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"isLoan()\"\r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'loans']\" lines=\"none\"\r\n              detail>\r\n              <ion-text>{{ 'LOAN_MANAGER' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item\r\n              *ngIf=\"isTraditionnal() || isLoan()\"\r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts']\" lines=\"none\"\r\n              detail>\r\n              <ion-text>{{ 'DEBTS_MANAGER' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item\r\n              *ngIf=\"isTraditionnal() && !isLoan()\"\r\n              [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'session-no-paid']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{ 'BENEFICIAL_STATUS' | translate }}</ion-text>\r\n            </ion-item>\r\n            <ion-item [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'wallet']\"\r\n              lines=\"none\" detail>\r\n              <ion-text>{{'TONTINE_WALLET_TEXT' | translate }}</ion-text>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"showContributionBtn&&currentSeance || icanPayCaution(currentTontine)\">\r\n  <p class=\"ion-text-center\" *ngIf=\"!checkPaidCaution || !hascheckPreviousSeance\">\r\n    <ion-spinner name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-button expand=\"full\"\r\n    *ngIf=\"canContributeSeance(members.liste_membre)  && checkContributeCondition()\"\r\n    color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\" (click)=\"confirmPin()\">\r\n    {{ 'CONTRIBUTE_MSG' | translate }}\r\n  </ion-button>\r\n  <ion-button expand=\"full\"\r\n    *ngIf=\"!canContributeSeance(members.liste_membre)  && checkContributeCondition()\"\r\n    color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\">\r\n    {{ 'TONTINE_LIST_CONTRIBUTE' | translate }}\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"full\" *ngIf=\"icanPayCaution(currentTontine)\" color=\"warning\"\r\n    [disabled]=\"loadingPay\" class=\"ion-text-uppercase\" shape=\"round\"\r\n    (click)=\"confirmCautionPin(currentTontine,user.id)\">\r\n    {{ 'PAY_CAUTION_TEXT' | translate }} {{ '(' + cautionAmount + currentTontine.tontine.monnaie + ')'}}\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "f2bl":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/tontine-detail-menu/tontine-detail-menu.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TontineDetailMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineDetailMenuComponent", function() { return TontineDetailMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tontine_detail_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tontine-detail-menu.component.html */ "6lNz");
/* harmony import */ var _tontine_detail_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tontine-detail-menu.component.scss */ "yiGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/plugin.service */ "NxmL");













let TontineDetailMenuComponent = class TontineDetailMenuComponent {
    constructor(popoverController, platform, tontine, event, ui, error, tontineError, router, translate, alertController, plugin) {
        this.popoverController = popoverController;
        this.platform = platform;
        this.tontine = tontine;
        this.event = event;
        this.ui = ui;
        this.error = error;
        this.tontineError = tontineError;
        this.router = router;
        this.translate = translate;
        this.alertController = alertController;
        this.plugin = plugin;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.seance = this.currentTontine.seance_courante;
        this.previousSeance = this.currentTontine.avant_derniere_seance;
        this.shareData = [];
    }
    ngOnInit() { }
    // Close the menu
    closeTontineDetailMenu() {
        this.popoverController.dismiss();
    }
    // Get the financial statistique
    financialStats() {
        this.popoverController.dismiss();
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'stat']);
    }
    // Get the transaction History
    transactionHistory() {
        this.popoverController.dismiss();
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'history']);
    }
    // Open create tontine page
    createTontinePage() {
        this.closeTontineDetailMenu();
        this.router.navigate(['/dashboard/my-tontines/new']);
    }
    // Join a tontine
    joinTontinePage() {
        this.closeTontineDetailMenu();
        this.router.navigate(['/dashboard/join-tontine']);
    }
    // Loan manager
    loan() {
        this.closeTontineDetailMenu();
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans']);
    }
    // open tontine wallet
    openWallet() {
        this.closeTontineDetailMenu();
        this.router.navigate(['/dashboard/my-wallet']);
    }
    // open the debt manager page
    debtManagerPage() {
        this.popoverController.dismiss();
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts']);
    }
    // Invite members
    inviteMember() {
        this.popoverController.dismiss();
        this.router.navigate(['/', 'dashboard', 'invitations']);
    }
    // Share the app with friends
    shareCode() {
        let link = '';
        if (this.platform.is('android')) {
            link = 'https://bit.ly/2Zr78Me';
        }
        else {
            link = 'https://apple.co/2yrfLeM';
        }
        this.translate.get(['SHARE_CODE_MESSAGE', 'SHARE_CODE_TITLE', 'DOWNLOAD_TEXT']).subscribe(trans => {
            this.shareData.push(trans.SHARE_CODE_MESSAGE);
            this.shareData.push(trans.DOWNLOAD_TEXT);
            this.shareData.push(trans.SHARE_CODE_TITLE);
        });
        this.plugin.share(`${this.shareData[0]}  ${this.currentTontine.tontine.name} \n\n Code : ${this.currentTontine.tontine.code_invitation} \n\n ${this.shareData[1]} \n `, `${this.shareData[2]}`, link);
    }
    // Can edit share 
    canShareCode() {
        let canEdit = false;
        if (((!this.seance && this.currentTontine.tontine.active === 0) || (!this.seance && !this.previousSeance && this.currentTontine.tontine.active === 1) ||
            (this.seance && this.seance.numero_seance < 1 && this.currentTontine.tontine.active === 1)) && this.currentTontine.tontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    // Who can archive the tontine
    canArchive() {
        let canEdit = false;
        if ((!this.seance && this.currentTontine.tontine.active === 0) && this.currentTontine.tontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    // Archive la tontine
    archiveTontine() {
        this.popoverController.dismiss();
        this.confirmArchiveMessage();
    }
    // check if it is traditionnal payment
    isTraditionnalBanking() {
        return this.currentTontine && this.currentTontine.tontine.tontine_payment_type_id === 1;
    }
    // check if it is tontine loan
    isLoan() {
        return this.currentTontine && this.currentTontine.tontine.drawingtype_id === 6;
    }
    // confirm archivation
    confirmArchiveMessage() {
        const messages = [];
        this.translate.get(['M_ARCHIVE_TITLE', 'M_ARCHIVE_MESSAGE', 'CANCEL_TEXT', 'YES_TEXT'], { tontine: this.currentTontine.tontine.name })
            .subscribe(trans => {
            messages.push(trans.M_ARCHIVE_TITLE);
            messages.push(trans.M_ARCHIVE_MESSAGE);
            messages.push(trans.CANCEL_TEXT);
            messages.push(trans.YES_TEXT);
            this.archiveMessage(messages);
        });
    }
    // archive message
    archiveMessage(translation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `${translation[0]}`,
                message: `${translation[1]}`,
                buttons: [
                    {
                        text: `${translation[2]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: `${translation[3]}`,
                        handler: () => {
                            // send the archivation answer
                            this.archviveTontineService();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Archive tontine service
    archviveTontineService() {
        const data = {
            liste_tontine: [{ tontine_id: this.currentTontine.tontine.tontine_id, archived: 1 }]
        };
        this.translate.get(['ARCHIVE_PROCESSING']).subscribe(trans => {
            this.ui.presentLoading(trans.ARCHIVE_PROCESSING);
        });
        this.tontine.disableTontine(data).subscribe((reponse) => {
            if (reponse && reponse.message === "success") {
                this.translate.get(['ARCHIVE_SUCCESS_MSG'], { tontine: this.currentTontine.tontine.name }).subscribe(trans => {
                    this.ui.presentToast(trans.ARCHIVE_SUCCESS_MSG);
                });
                this.event.publish('new-tontine');
                this.router.navigate(['/dashboard/my-tontines']);
            }
            this.ui.dismissLoading();
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((ans) => {
                        this.ui.dismissLoading();
                        if (ans && ans.result === "OK") {
                            this.archviveTontineService();
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
TontineDetailMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__["TontineErrorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_12__["PluginService"] }
];
TontineDetailMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tontine-detail-menu',
        template: _raw_loader_tontine_detail_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tontine_detail_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TontineDetailMenuComponent);



/***/ }),

/***/ "gJIT":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribute-seance/contribute-seance.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmlidXRlLXNlYW5jZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "gR9t":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/info-edit/info-edit.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_EDIT_INFO_TEXT1' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"infoEditForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_EDIT_TEXT7' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"tontine_name\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"tontineName.hasError(validation.type) && (tontineName.dirty || tontineName.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'DESCRIPTION_TEXT' | translate }}</ion-label>\r\n            <ion-textarea type=\"text\" formControlName=\"description\" required></ion-textarea>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.description\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"tontineDesc.hasError(validation.type) && (tontineDesc.dirty || tontineDesc.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_DETAIL_TEXT5' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updateType()\" formControlName=\"drawingtype_id\">\r\n              <ion-select-option *ngFor=\"let type of typeOfTontine\" [value]=\"type.type.id\">{{ type.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.type\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"tontineType.hasError(validation.type) && (tontineType.dirty || tontineType.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_EDIT_TEXT5' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updateCurrency()\" formControlName=\"country\">\r\n              <ion-select-option *ngFor=\"let state of statesList\" [value]=\"state.country_name\">{{ state.country_label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.country\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"tontineCountry.hasError(validation.type) && (tontineCountry.dirty || tontineCountry.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT3' | translate }}</ion-label>\r\n            <ion-input type=\"number\" (ionChange)=\"updateAmount()\" formControlName=\"contribution_amount_form\" required>\r\n            </ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ infoEditForm.value.currency_form ? infoEditForm.value.currency_form : infoEditForm.value.currency }} </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.amount\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"tontineAmount.hasError(validation.type) && (tontineAmount.dirty || tontineAmount.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n \r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_DETAIL_TEXT4' | translate }}</ion-label>\r\n            <ion-select\r\n              (ionChange)=\"updatePeriodicity();getCurrentDateInfo(infoEditForm.value.startDate,infoEditForm.value.periodicite)\"\r\n              formControlName=\"periodicite\">\r\n              <ion-select-option *ngFor=\"let period of periodicities\" [value]=\"period.value\">{{ period.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.frequency\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"tontineFrequency.hasError(validation.type) && (tontineFrequency.dirty || tontineFrequency.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'DATE_START' | translate }}</ion-label>\r\n            <ion-datetime\r\n              (ionChange)=\"checkDate(infoEditForm.value.startDate); getCurrentDateInfo(infoEditForm.value.startDate,infoEditForm.value.periodicite)\"\r\n              formControlName=\"startDate\" displayFormat=\"DDDD D MMM, YYYY\" [min]=\"minDate\" [max]=\"maxDate\" pickerFormat=\"DD MMMM YYYY\">\r\n            </ion-datetime>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngIf=\"infoEditForm.value.startDate && !isDateValid\">\r\n              <div class=\"error-message\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"'MIN_DATE_ERROR_TEXT' | translate\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row\r\n        *ngIf=\"MsgTontinePeriodicity && infoEditForm.value.startDate && infoEditForm.value.periodicite && isDateValid\">\r\n        <ion-col size=\"12\">\r\n          <div class=\"ion-padding\" color=\"dark\" *ngIf=\"MsgTontinePeriodicity\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"MsgTontinePeriodicity\"></span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"ShowTontinePeriodicityMonthly\">\r\n          <ion-list>\r\n            <ion-radio-group formControlName=\"monthFrequencyOption\"\r\n              (ionChange)=\"OptionChange(infoEditForm.value.monthFrequencyOption,infoEditForm.value.startDate)\">\r\n              <ion-item>\r\n                <ion-label>\r\n                  {{ 'MSG_TONTINE_MONTH2' | translate}}\r\n                </ion-label>\r\n                <ion-radio [value]=\"0\" [checked]=\"infoEditForm.value.monthFrequencyOption === 0  ? true: false\">\r\n                </ion-radio>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>\r\n                  {{ MonthDayOccurencyLabel | translate  }}\r\n                </ion-label>\r\n                <ion-radio [value]=\"1\" [checked]=\"infoEditForm.value.monthFrequencyOption === 1 ? true: false\">\r\n                </ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"MonthDayOccurencyMsg\">\r\n          <div class=\"ion-padding\" color=\"dark\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span class=\"ml-4\" [innerHTML]=\"MonthDayOccurencyMsg\"></span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n                \r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"none\" [disabled]=\"!canEditCaution(infoEditForm.value.caution_id)\">                \r\n            <ion-toggle  formControlName=\"with_caution\"  color=\"primary\"></ion-toggle>\r\n            <ion-label>\r\n              {{ 'WITH_CAUTION_TEXT' | translate  }}\r\n            </ion-label>\r\n          </ion-item>\r\n          <div class=\"ion-padding-horizontal\" *ngIf=\"!infoEditForm.value.with_caution && canEditCaution(infoEditForm.value.caution_id)\">\r\n            <small  [innerHTML]=\"'CAUTION_MSG' | translate\"></small>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row >\r\n        <ion-col size=\"12\">\r\n          <ion-item  [disabled]=\"!canEditCaution(infoEditForm.value.caution_id) || canEditCaution(infoEditForm.value.caution_id) && !infoEditForm.value.with_caution\">\r\n            <ion-label position=\"floating\">{{ 'CAUTION_AMOUNT' | translate }}</ion-label>\r\n            <ion-input type=\"number\"  formControlName=\"caution_amount\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ infoEditForm.value.currency }} </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.cautionAmount\">\r\n              <div class=\"error-message\" *ngIf=\"cautionAmount.invalid && (cautionAmount.dirty || cautionAmount.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n               <span [innerHTML]=\"'MIN_ERROR_CAUTION_AMOUNT' | translate : {amount : 1, currency : infoEditForm.value.currency}\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n\r\n      <ion-row  >\r\n        <ion-col>\r\n          <ion-item [disabled]=\"!canEditCaution(infoEditForm.value.caution_id) || canEditCaution(infoEditForm.value.caution_id) && !infoEditForm.value.with_caution\">\r\n            <ion-label>{{ 'CAUTION_TYPE' | translate }}</ion-label>\r\n            <ion-select formControlName=\"type_caution\">\r\n              <ion-select-option *ngFor=\"let caution of typesCaution\" [value]=\"caution.value\">{{ caution.name }}</ion-select-option>          \r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\"\r\n          [disabled]=\"canEditTontine()\"\r\n          color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\" (click)=\"updateGeneralInfoTontine()\">\r\n          {{ 'SAVE_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" fill=\"outline\" color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\"\r\n          (click)=\"closeInfoEdit('cancel')\">\r\n          {{ 'CANCEL_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"ion-text-center\">\r\n      <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "jCkz":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/tontine-detail.page.ts ***!
  \*****************************************************************************/
/*! exports provided: TontineDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineDetailPage", function() { return TontineDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tontine_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tontine-detail.page.html */ "TnMm");
/* harmony import */ var _tontine_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tontine-detail.page.scss */ "RIuK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contribute/contribute.component */ "8qrH");
/* harmony import */ var _tontine_detail_menu_tontine_detail_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tontine-detail-menu/tontine-detail-menu.component */ "f2bl");
/* harmony import */ var _info_edit_info_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-edit/info-edit.component */ "TE0T");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tontine.service */ "/WEl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/contribution.service */ "US41");
/* harmony import */ var src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/encheres.service */ "PqeH");
/* harmony import */ var _wallet_services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wallet/services/wallet-tontine.service */ "0g9v");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contribute-seance/contribute-seance.component */ "tdqF");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");
var TontineDetailPage_1;
























let TontineDetailPage = TontineDetailPage_1 = class TontineDetailPage {
    constructor(userService, alertController, walletTontine, router, storage, modatCtrl, popoverController, encheresService, event, translate, tontine, tontinesData, tontineError, activeRoute, error, contribution, util, ui, localStorage) {
        this.userService = userService;
        this.alertController = alertController;
        this.walletTontine = walletTontine;
        this.router = router;
        this.storage = storage;
        this.modatCtrl = modatCtrl;
        this.popoverController = popoverController;
        this.encheresService = encheresService;
        this.event = event;
        this.translate = translate;
        this.tontine = tontine;
        this.tontinesData = tontinesData;
        this.tontineError = tontineError;
        this.activeRoute = activeRoute;
        this.error = error;
        this.contribution = contribution;
        this.util = util;
        this.ui = ui;
        this.localStorage = localStorage;
        this.typesTontines = [];
        this.members = [];
        this.memberShows = [];
        this.tontineCountryName = '';
        this.tontineFrequencyName = '';
        this.tontineTypeName = '';
        this.tontineId = this.activeRoute.snapshot.params.tontineId;
        this.user = this.userService.getUserData();
        const tontineData = this.tontine.getCurrentTontineData();
        console.log(tontineData);
        this.currentSeance = tontineData.seance_courante;
        this.currentAmount = [];
        this.seancesList = [];
        this.userName = '';
        this.loadingCaisse = false;
        this.showContributionBtn = true;
        this.nbContributions = [];
        TontineDetailPage_1.canConnect = null;
        this.hascheckPreviousSeance = false;
        this.hasPaidCaution = false;
        this.checkPaidCaution = false;
        this.loadingPay = false;
        this.event.subscribe('cautionPaid', data => {
            this.checkCaution();
        });
    }
    ngOnInit() {
        this.getTontineTypes();
        this.checkCaution();
        this.updateCurrentUserTontine(null);
        // Get the number of pending contributions
        this.getContributions(null);
        this.getUserContributionData(null);
    }
    // Get the list user tontines
    getUserContributionData(event) {
        const param = { tontine_id: this.currentTontine.tontine.tontine_id };
        this.tontine.getMemberStokvelContribution(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.userContribution = reponse;
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getUserContributionData(event);
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get the wallet data
    getWalletData(event) {
        // this.loadingCaisse = true;
        const param = { tontine_id: this.currentTontine.tontine.tontine_id };
        this.walletTontine.getTontineWallet(param).subscribe((reponse) => {
            // this.loadingCaisse = false;
            if (reponse && reponse.message === 'success') {
                this.walletTontines = reponse.infos_wallet;
                this.detailCaisses = reponse.detail_caisse;
                this.detailCaisses = this.tontinesData.filterTontineBalance(this.detailCaisses, this.currentTontine.tontine);
                this.storage.set(`tontine-wallet${param.tontine_id}`, { solde: this.walletTontines, caisse: this.detailCaisses });
            }
            if (event) {
                event.target.complete();
            }
        }, error => {
            //  this.loadingCaisse = false;
            this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                this.walletTontines = walletData ? walletData.solde : null;
                this.detailCaisses = walletData ? walletData.caisse : null;
            });
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getWalletData(event);
                        }
                    });
                }
            }
        });
    }
    // Update the current user tontine
    updateCurrentUserTontine(event) {
        const tontineData = this.tontine.getCurrentTontineData();
        if (tontineData && tontineData.tontine) {
            this.setTontineData(tontineData);
            this.tontine.getTontineDetail(tontineData.tontine.tontine_id).subscribe((reponse) => {
                if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                    this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                    const tontineData = this.tontine.getCurrentTontineData();
                    if (tontineData && tontineData.tontine) {
                        this.initTontineData(tontineData);
                    }
                }
                // get the tontine wallet 
                this.getWalletData(event);
            }, error => {
                if (error && error.error && error.error.bad_token) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.updateCurrentUserTontine(event);
                        }
                    });
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            if (event) {
                event.target.complete();
            }
        }
    }
    // set to local Stoirage
    setToStorage(data) {
        this.localStorage.setItem('app-tontines', JSON.stringify(data));
    }
    // Get the list user tontines
    getUserTontines() {
        this.tontine.getMyTontine().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                if (reponse && reponse.liste_tontine) {
                    const allData = this.util.oderByTontineDate(reponse.liste_tontine);
                    this.setToStorage(allData);
                }
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getUserTontines();
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
        TontineDetailPage_1.canConnect = null;
        this.updateCurrentUserTontine(event);
        this.getContributions(null);
    }
    // Get the amount of contribution of the seance
    getAmountContributionSeance(memberList, shareAmount) {
        return this.tontinesData.getAmountContributionSeance(memberList, shareAmount, this.user.id);
    }
    // can contribute for seance
    canContributeSeance(memberList) {
        this.showContributionBtn = this.tontinesData.canShowContributionButton(memberList, this.user.id);
        return this.tontinesData.canContributeSeance(memberList, this.user.id);
    }
    // Open the modal current contribution
    openContributeCurrentSeance(param) {
        this.modatCtrl
            .create({
            component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_5__["ContributeComponent"],
            componentProps: {
                tontineName: param.title,
                contribAmount: param.montant,
                data: param
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                this.updateCurrentUserTontine(null);
                this.getContributions(null);
                this.getUserContributionData(null);
            });
        });
    }
    // Open the modal previous seance
    openContributePreviousSeance(param) {
        this.modatCtrl
            .create({
            component: _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_16__["ContributeSeanceComponent"],
            componentProps: {
                tontineName: param.title,
                contribAmount: param.montant,
                data: param
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                this.updateCurrentUserTontine(null);
                this.getContributions(null);
                this.getUserContributionData(null);
            });
        });
    }
    // check bid socket
    checkBidStatus(seance, numlot) {
        const tontineData = this.tontine.getCurrentTontineData();
        this.contribution.getDataMembresAyantBouffe(tontineData.seance_courante.cycle_id, tontineData.tontine.tontine_id).then((reponse) => {
            console.log(reponse);
            const listPart = reponse.tontine && reponse.tontine.membres && reponse.tontine.membres.liste_membre ? reponse.tontine.membres.liste_membre : [];
            const userId = this.user.id;
            const members = reponse.ans && reponse.ans.membres ? reponse.ans.membres : [];
            const numeroPart = this.tontinesData.getCurrentBidPart(listPart, userId, members);
            TontineDetailPage_1.canConnect = this.encheresService.connexion(seance.id);
            this.encheresService.memberConnection(userId, numeroPart, seance.id, numlot);
            let j = 1;
            while (j <= parseInt(numlot)) {
                this.encheresService.getWinnerCurrent(seance.id + '' + j).subscribe(data => {
                    if (data !== null) {
                        this.currentAmount.unshift({ somme: JSON.parse(data).somme, seanceID: JSON.parse(data).seance_id, userID: JSON.parse(data).user_id, numero_lot: JSON.parse(data).numero_lot });
                        this.currentAmount = this.currentAmount.filter((elem, index, self) => self.findIndex((t) => { return (t.seanceID === elem.seanceID && t.numero_lot === elem.numero_lot); }) === index);
                    }
                });
                j++;
            }
        });
    }
    // set the tontine data
    setTontineData(data) {
        this.currentTontine = data;
        if (this.currentTontine) {
            this.myTontine = {
                name: this.currentTontine.tontine.name,
                description: this.currentTontine.tontine.description,
                type: this.currentTontine.tontine.drawingtype_id,
                type_tontine_key: this.currentTontine.tontine.type_tontine_key,
                country: this.currentTontine.tontine.country,
                country_key: this.currentTontine.tontine.country_key,
                currency: this.currentTontine.tontine.monnaie,
                contribution: this.currentTontine.tontine.coutshare,
                frequency: this.currentTontine.tontine.periodicite,
                frequency_key: this.currentTontine.tontine.periodicite_key,
                dateStart: this.currentSeance ? this.currentSeance.date_debut : this.currentTontine.tontine.date_debut,
                totalShare: this.currentTontine.tontine.nombre_part_max_tontine || '',
                maxShareMber: this.currentTontine.tontine.nombre_part_max_membre,
                nbrOfBaches: this.currentTontine.tontine.numberlot,
                penalityAbsence: this.currentTontine.tontine.penaliteabsencesurlacontributionayantbouffe,
                penalityAbsenceUnit: this.currentTontine.tontine.typepenaliteabsencesurlacontributionayantbouffe === 'pourcentage' ? '%'
                    : this.currentTontine.tontine.typepenaliteabsencesurlacontributionayantbouffe,
                penalityContrib: this.currentTontine.tontine.penaliteabsencesurlacontributionayantbouffe,
                penalityContribUnit: this.currentTontine.tontine.typepenaliteretardsurlacontributionayantbouffe === 'pourcentage' ? '%'
                    : this.currentTontine.tontine.typepenaliteretardsurlacontributionayantbouffe,
                penalityLoan: this.currentTontine.tontine.penalitesurleremboursement,
                penalityLoanUnit: this.currentTontine.tontine.typepenalitesurleremboursement === 'pourcentage' ? '%'
                    : this.currentTontine.tontine.typepenalitesurleremboursement,
                timeDelay: this.currentTontine.tontine.dureesurleretard,
                timeDelayUnit: this.currentTontine.tontine.typedureesurleretard,
                balance: this.currentTontine.tontine.solde_en_caisse,
                contributionCashier: this.currentTontine.tontine.caisse_cotisation,
                penalitiesCashier: this.currentTontine.tontine.caisse_penalite
            };
            this.bid = this.currentTontine.tontine;
            this.seance = this.currentTontine.seance_courante;
            this.cycle = this.currentTontine.cycle_courant;
            this.members = this.currentTontine.membres;
            let i = 0;
            this.members.liste_membre.forEach(member => {
                if (i < 10 && this.tontinesData.memberNotInWithout(this.memberShows, member.id)) {
                    this.memberShows.push(member);
                    i++;
                }
            });
        }
    }
    // init the tontine data
    initTontineData(data) {
        this.setTontineData(data);
        // Get the current bid 
        if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.drawingtype_id === 3) {
            if (this.seance && this.seance.id) {
                this.checkBidStatus(this.seance, this.myTontine.nbrOfBaches);
            }
        }
    }
    // Show the bid detail page
    showBidDetail(tontineId) {
        this.router.navigate(['/', 'dashboard', 'my-tontines', tontineId, 'bid']);
    }
    // Get the name of the creator
    getCreatorName(memberList, creatorId) {
        return this.tontinesData.getCreatorName(memberList, creatorId);
    }
    getTontineTypeName(typeKey) {
        this.translate.get(typeKey).subscribe(value => {
            this.tontineTypeName = value;
        });
        return this.tontineTypeName;
    }
    getCountryName(countryKey) {
        this.translate.get(countryKey).subscribe(value => {
            this.tontineCountryName = value;
        });
        return this.tontineCountryName;
    }
    getPeriodicityName(frequencyKey) {
        this.translate.get(frequencyKey).subscribe(value => {
            this.tontineFrequencyName = value;
        });
        return this.tontineFrequencyName;
    }
    // Get the type list
    getTontineTypes() {
        this.tontine.getTypeTontine().subscribe((reponse) => {
            if (reponse && reponse.type && reponse.type.length > 0) {
                this.typesTontines = reponse.type;
            }
        }, error => {
            this.error.manageError(error);
        });
    }
    openEditInfo() {
        this.modatCtrl
            .create({
            component: _info_edit_info_edit_component__WEBPACK_IMPORTED_MODULE_7__["InfoEditComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                this.updateCurrentUserTontine(null);
                setTimeout(() => {
                    this.checkCaution();
                }, 5000);
            });
        });
    }
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _tontine_detail_menu_tontine_detail_menu_component__WEBPACK_IMPORTED_MODULE_6__["TontineDetailMenuComponent"],
                event: ev
            });
            return yield popover.present();
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
        const userPin = this.userService.getUserSecret();
        const tontineData = this.tontine.getCurrentTontineData();
        if (tontineData) {
            if (tontineData.tontine.tontine_payment_type_id === 1 || tontineData.tontine.drawingtype_id === 6) {
                this.router.navigate(['/', 'dashboard', 'my-tontines', tontineData.tontine.tontine_id, 'debts']);
            }
            else {
                if (this.seancesList && this.seancesList.length > 0) {
                    // show the dialog for the payment type
                    const translationsData = [];
                    this.translate.get(['PAY_PREVIOUS_SEANCE_TITLE', 'PAY_PREVIOUS_SEANCE_MSG', 'PREVIOUSE_TEXT', 'CURRENT_TEXT'], {
                        previousSeance: this.tontinesData.getDate(this.seancesList[0], 'date_debut'),
                        currentSeance: this.tontinesData.getDate(this.currentSeance, 'date_debut')
                    }).subscribe(trans => {
                        translationsData.push(trans.PAY_PREVIOUS_SEANCE_TITLE);
                        translationsData.push(trans.PAY_PREVIOUS_SEANCE_MSG);
                        translationsData.push(trans.PREVIOUSE_TEXT);
                        translationsData.push(trans.CURRENT_TEXT);
                        this.canPayPreviousSeance(translationsData, userPin.password);
                    });
                }
                else {
                    this.selectPaymentMode(userPin.password, 'current');
                }
            }
        }
    }
    // get number of contributions batches
    getContributions(event) {
        this.nbContributions = [];
        const currentTontine = this.tontine.getCurrentTontineData();
        const currentCycle = currentTontine.cycle_courant;
        const currentSeance = currentTontine.seance_courante;
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
                // Get the list of seances not contribute
                this.nbContributions = [];
                listSeances.forEach((value) => {
                    if (!this.tontinesData.notIn(value, this.nbContributions) && currentSeance && (currentSeance.id !== value.seance_id)) {
                        this.nbContributions.push(value);
                    }
                });
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
                this.error.renewSession().then((data) => {
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
                this.error.manageError(error);
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
            type === 'previous' ? this.openContributePreviousSeance(paymentData) : this.openContributeCurrentSeance(paymentData);
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
    // check if it is admin
    isAdmin() {
        return this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
    }
    isTraditionnal() {
        return this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.tontine_payment_type_id === 1;
    }
    // check if it bid tontine
    isBid() {
        return this.myTontine && this.myTontine.type === 3;
    }
    // check if it loan tontine
    isLoan() {
        return this.myTontine && this.myTontine.type === 6;
    }
    // check if it loan tontine
    isClassement() {
        return this.myTontine && this.myTontine.type === 5;
    }
    // if the tontine has a caution 
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
        this.checkPaidCaution = false;
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
            console.log(data);
            if (data && data.message === 'success') {
                let members = data.liste_members;
                members = members.filter((member) => { return parseInt(member.infos_user.id, 10) === parseInt(userId, 10); });
                this.hasPaidCaution = members.length > 0 ? false : true;
                this.cautionAmount = members.length > 0 ? parseFloat(members[0].rest_amount_to_pay ? members[0].rest_amount_to_pay : 0) : 0;
                this.checkPaidCaution = true;
                console.log(this.checkPaidCaution);
                console.log(this.hasPaidCaution);
                console.log(this.cautionAmount);
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((session) => {
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
                this.error.manageError(error);
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
                    this.error.renewSession().then((session) => {
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
                this.error.manageError(error);
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
TontineDetailPage.ctorParameters = () => [
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _wallet_services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_14__["WalletTontineService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_21__["StorageData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_13__["EncheresService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_19__["EventService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_15__["TontineGlobalDataService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_17__["TontineErrorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__["ErrorService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_12__["ContributionService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_22__["UtilService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_18__["UiService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_23__["LocalStorageService"] }
];
TontineDetailPage = TontineDetailPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tontine-detail',
        template: _raw_loader_tontine_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tontine_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TontineDetailPage);



/***/ }),

/***/ "mnxU":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/tontine-detail-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TontineDetailRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineDetailRouting", function() { return TontineDetailRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tontine_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tontine-detail.page */ "jCkz");




const routes = [
    {
        path: '',
        component: _tontine_detail_page__WEBPACK_IMPORTED_MODULE_3__["TontineDetailPage"]
    },
    {
        path: 'session',
        loadChildren: () => __webpack_require__.e(/*! import() | session-session-module */ "session-session-module").then(__webpack_require__.bind(null, /*! ./session/session.module */ "miys")).then(m => m.SessionPageModule)
    },
    {
        path: 'members',
        loadChildren: () => __webpack_require__.e(/*! import() | members-members-module */ "members-members-module").then(__webpack_require__.bind(null, /*! ./members/members.module */ "dLKu")).then(m => m.MembersPageModule)
    },
    {
        path: 'shares',
        loadChildren: () => __webpack_require__.e(/*! import() | shares-shares-module */ "shares-shares-module").then(__webpack_require__.bind(null, /*! ./shares/shares.module */ "E3rz")).then(m => m.SharesPageModule)
    },
    {
        path: 'roles',
        loadChildren: () => __webpack_require__.e(/*! import() | roles-roles-module */ "roles-roles-module").then(__webpack_require__.bind(null, /*! ./roles/roles.module */ "E7ur")).then(m => m.RolesPageModule)
    },
    {
        path: 'penalities',
        loadChildren: () => __webpack_require__.e(/*! import() | penalities-penalities-module */ "penalities-penalities-module").then(__webpack_require__.bind(null, /*! ./penalities/penalities.module */ "gRiy")).then(m => m.PenalitiesPageModule)
    },
    {
        path: 'stat/pools/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | stat-pool-detail-stat-pool-detail-module */ "stat-pool-detail-stat-pool-detail-module").then(__webpack_require__.bind(null, /*! ./stat-pool-detail/stat-pool-detail.module */ "6nN1")).then(m => m.StatPoolDetailPageModule)
    },
    {
        path: 'stat/pools-session/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | stat-pool-detail-session-stat-pool-detail-session-module */ "stat-pool-detail-session-stat-pool-detail-session-module").then(__webpack_require__.bind(null, /*! ./stat-pool-detail-session/stat-pool-detail-session.module */ "uUDg")).then(m => m.StatPoolDetailSessionPageModule)
    },
    {
        path: 'stat/pools',
        loadChildren: () => __webpack_require__.e(/*! import() | stat-pools-stat-pools-module */ "stat-pools-stat-pools-module").then(__webpack_require__.bind(null, /*! ./stat-pools/stat-pools.module */ "D4gk")).then(m => m.StatPoolsPageModule)
    },
    {
        path: 'stat',
        loadChildren: () => __webpack_require__.e(/*! import() | stat-stat-module */ "stat-stat-module").then(__webpack_require__.bind(null, /*! ./stat/stat.module */ "fa/e")).then(m => m.StatPageModule)
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() | history-history-module */ "history-history-module").then(__webpack_require__.bind(null, /*! ./history/history.module */ "tlb9")).then(m => m.HistoryPageModule)
    },
    {
        path: 'bid',
        loadChildren: () => __webpack_require__.e(/*! import() | bid-bid-module */ "bid-bid-module").then(__webpack_require__.bind(null, /*! ./bid/bid.module */ "vd7H")).then(m => m.BidPageModule)
    },
    {
        path: 'debts',
        loadChildren: () => __webpack_require__.e(/*! import() | debts-debts-module */ "debts-debts-module").then(__webpack_require__.bind(null, /*! ./debts/debts.module */ "QSLP")).then(m => m.DebtsPageModule)
    },
    {
        path: 'session-no-paid',
        loadChildren: () => __webpack_require__.e(/*! import() | session-no-paid-session-no-paid-module */ "session-no-paid-session-no-paid-module").then(__webpack_require__.bind(null, /*! ./session-no-paid/session-no-paid.module */ "B1C6")).then(m => m.SessionNoPaidPageModule)
    },
    {
        path: 'wallet/top-up',
        loadChildren: () => __webpack_require__.e(/*! import() | wallet-top-up-top-up-module */ "wallet-top-up-top-up-module").then(__webpack_require__.bind(null, /*! ./wallet/top-up/top-up.module */ "+4ua")).then(m => m.TopUpPageModule)
    },
    {
        path: 'wallet/withdrawal',
        loadChildren: () => Promise.all(/*! import() | wallet-withdrawal-withdrawal-module */[__webpack_require__.e("common"), __webpack_require__.e("wallet-withdrawal-withdrawal-module")]).then(__webpack_require__.bind(null, /*! ./wallet/withdrawal/withdrawal.module */ "IFYy")).then(m => m.WithdrawalPageModule)
    },
    {
        path: 'wallet/history',
        loadChildren: () => Promise.all(/*! import() | wallet-history-history-module */[__webpack_require__.e("common"), __webpack_require__.e("wallet-history-history-module")]).then(__webpack_require__.bind(null, /*! ./wallet/history/history.module */ "Jss/")).then(m => m.HistoryPageModule)
    },
    {
        path: 'wallet',
        loadChildren: () => Promise.all(/*! import() | wallet-wallet-module */[__webpack_require__.e("common"), __webpack_require__.e("wallet-wallet-module")]).then(__webpack_require__.bind(null, /*! ./wallet/wallet.module */ "UBTA")).then(m => m.WalletPageModule)
    },
    {
        path: 'jackpot-order',
        loadChildren: () => __webpack_require__.e(/*! import() | jackpot-order-jackpot-order-module */ "jackpot-order-jackpot-order-module").then(__webpack_require__.bind(null, /*! ./jackpot-order/jackpot-order.module */ "oH+z")).then(m => m.JackpotOrderPageModule)
    },
    {
        path: 'loans',
        loadChildren: () => __webpack_require__.e(/*! import() | loans-loans-module */ "loans-loans-module").then(__webpack_require__.bind(null, /*! ./loans/loans.module */ "sj2P")).then(m => m.LoansPageModule)
    },
    {
        path: 'contrib-not-paid',
        loadChildren: () => __webpack_require__.e(/*! import() | contribution-not-paid-contribution-not-paid-module */ "contribution-not-paid-contribution-not-paid-module").then(__webpack_require__.bind(null, /*! ./contribution-not-paid/contribution-not-paid.module */ "U+aZ")).then(m => m.ContributionNotPaidPageModule)
    }
];
let TontineDetailRouting = class TontineDetailRouting {
};
TontineDetailRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TontineDetailRouting);



/***/ }),

/***/ "nfsC":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/contribute/contribute.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{ 'CONTRIBUTE_MSG' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tontine-contribute\">\n  <h4 class=\"ion-padding-horizontal\"><small>{{ 'PAIDMODE_MSG1' | translate }} : <b>{{ tontineName }}</b></small></h4>\n  <app-paidmode [amountPay]=\"contribAmount\"></app-paidmode>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"full\" \n                fill=\"outline\"\n                color=\"warning\" \n                class=\"ion-text-uppercase\"\n                shape=\"round\" (click)=\"closeContribute()\">\n            {{ 'CANCEL_TEXT' | translate }}\n          </ion-button>\n      </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "rlJU":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/tontine-detail.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TontineDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineDetailPageModule", function() { return TontineDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tontine_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tontine-detail.page */ "jCkz");
/* harmony import */ var _tontine_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tontine-detail-routing.module */ "mnxU");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contribute/contribute.component */ "8qrH");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _tontine_detail_menu_tontine_detail_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tontine-detail-menu/tontine-detail-menu.component */ "f2bl");
/* harmony import */ var _info_edit_info_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-edit/info-edit.component */ "TE0T");
/* harmony import */ var _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contribute-seance/contribute-seance.component */ "tdqF");
/* harmony import */ var _contribute_seance_caution_contribute_seance_caution_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contribute-seance-caution/contribute-seance-caution.component */ "zu7K");













let TontineDetailPageModule = class TontineDetailPageModule {
};
TontineDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tontine_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["TontineDetailRouting"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        declarations: [
            _tontine_detail_page__WEBPACK_IMPORTED_MODULE_5__["TontineDetailPage"],
            _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_7__["ContributeComponent"],
            _tontine_detail_menu_tontine_detail_menu_component__WEBPACK_IMPORTED_MODULE_9__["TontineDetailMenuComponent"],
            _info_edit_info_edit_component__WEBPACK_IMPORTED_MODULE_10__["InfoEditComponent"],
            _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_11__["ContributeSeanceComponent"],
            _contribute_seance_caution_contribute_seance_caution_component__WEBPACK_IMPORTED_MODULE_12__["ContributeSeanceCautionComponent"]
        ],
        entryComponents: [
            _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_7__["ContributeComponent"],
            _tontine_detail_menu_tontine_detail_menu_component__WEBPACK_IMPORTED_MODULE_9__["TontineDetailMenuComponent"],
            _info_edit_info_edit_component__WEBPACK_IMPORTED_MODULE_10__["InfoEditComponent"],
            _contribute_seance_contribute_seance_component__WEBPACK_IMPORTED_MODULE_11__["ContributeSeanceComponent"],
            _contribute_seance_caution_contribute_seance_caution_component__WEBPACK_IMPORTED_MODULE_12__["ContributeSeanceCautionComponent"]
        ]
    })
], TontineDetailPageModule);



/***/ }),

/***/ "tdqF":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribute-seance/contribute-seance.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ContributeSeanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeSeanceComponent", function() { return ContributeSeanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contribute_seance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contribute-seance.component.html */ "3Kc6");
/* harmony import */ var _contribute_seance_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contribute-seance.component.scss */ "gJIT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");






let ContributeSeanceComponent = class ContributeSeanceComponent {
    constructor(modatCtrl, event, params) {
        this.modatCtrl = modatCtrl;
        this.event = event;
        this.params = params;
        this.tontineData = this.params.get('data');
        this.event.subscribe('modal-pay-seance', () => {
            this.closeContribute('OK');
        });
    }
    ngOnInit() { }
    closeContribute(message) {
        if (this.modatCtrl) {
            this.modatCtrl.dismiss(message, 'cancel');
        }
    }
};
ContributeSeanceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ContributeSeanceComponent.propDecorators = {
    tontineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contribAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ContributeSeanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contribute-seance',
        template: _raw_loader_contribute_seance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contribute_seance_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContributeSeanceComponent);



/***/ }),

/***/ "yiGF":
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/tontine-detail-menu/tontine-detail-menu.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b250aW5lLWRldGFpbC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zu7K":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/contribute-seance-caution/contribute-seance-caution.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ContributeSeanceCautionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeSeanceCautionComponent", function() { return ContributeSeanceCautionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contribute_seance_caution_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contribute-seance-caution.component.html */ "0ora");
/* harmony import */ var _contribute_seance_caution_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contribute-seance-caution.component.scss */ "1fmV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");






let ContributeSeanceCautionComponent = class ContributeSeanceCautionComponent {
    constructor(modatCtrl, event, params) {
        this.modatCtrl = modatCtrl;
        this.event = event;
        this.tontineData = params.get('data');
        this.event.subscribe('modal-pay-seance', () => {
            this.closeContribute('OK');
        });
        console.log('caution components');
    }
    ngOnInit() { }
    closeContribute(message) {
        if (this.modatCtrl) {
            this.modatCtrl.dismiss(message, 'cancel');
        }
    }
};
ContributeSeanceCautionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ContributeSeanceCautionComponent.propDecorators = {
    tontineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contribAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ContributeSeanceCautionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contribute-seance-caution',
        template: _raw_loader_contribute_seance_caution_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contribute_seance_caution_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContributeSeanceCautionComponent);



/***/ })

}]);
//# sourceMappingURL=my-tontines-tontine-detail-tontine-detail-module.js.map