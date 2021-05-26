(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tontines-events-new-event-new-event-module"],{

/***/ "6DB0":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/new-event/new-event.module.ts ***!
  \*************************************************************************/
/*! exports provided: NewEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventPageModule", function() { return NewEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-event.page */ "oCPQ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");







const routes = [
    {
        path: '',
        component: _new_event_page__WEBPACK_IMPORTED_MODULE_5__["NewEventPage"]
    }
];
let NewEventPageModule = class NewEventPageModule {
};
NewEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_5__["NewEventPage"]]
    })
], NewEventPageModule);



/***/ }),

/***/ "9mvU":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/new-event/new-event.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'TONTINE_EVENT_TEXT1' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"new-event\">\r\n  <form [formGroup]=\"createEventForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-padding\"> \r\n          <ion-thumbnail>\r\n            <img src=\"{{eventPicture}}\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\"> \r\n          <ion-item lines=\"none\">                \r\n            <ion-toggle formControlName=\"privacy\"></ion-toggle>\r\n            <ion-label>{{ 'PRIVATE_TEXT' | translate }}</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-end\">\r\n          <ion-button color=\"primary\" (click)=\"uploadImage()\" size=\"medium\" class=\"ion-text-capitalize\"> {{ 'M_UPLOAD_IMAGE' | translate }}\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'EVENT_NAME_TITLE' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"event_name\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                <div class=\"error-message\" *ngIf=\"eventName.hasError(validation.type) && (eventName.dirty || eventName.touched)\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'DESCRIPTION_TEXT' | translate }}</ion-label>\r\n            <ion-textarea type=\"text\" formControlName=\"description\" required=\"true\"></ion-textarea>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.description\">\r\n                <div class=\"error-message\" *ngIf=\"eventDesc.hasError(validation.type) && (eventDesc.dirty || eventDesc.touched)\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'COUNTRY_TEXT' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updateCurrency()\" formControlName=\"country\">\r\n              <ion-select-option *ngFor=\"let state of states\" [value]=\"state.country_name\">{{ state.country_name }}</ion-select-option>          \r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"createEventForm.value.country && createEventForm.value.active === 0\">\r\n              <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n              {{ 'NEWS_COUNTRY_NOT_ACTIVE' | translate }}\r\n            </div>\r\n            <ng-container *ngFor=\"let validation of validationMessages.country\">\r\n              <div class=\"error-message\" *ngIf=\"eventCountry.hasError(validation.type) && (eventCountry.dirty || eventCountry.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'M_EXPECTED_AMOUNT' | translate }}</ion-label>\r\n            <ion-input type=\"text\" (ionChange)=\"updateAmount()\" formControlName=\"expected_amount\" required></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ createEventForm.value.currency }} </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.expected_amount\">\r\n              <div class=\"error-message\" *ngIf=\"eventAmount.hasError(validation.type) && (eventAmount.dirty || eventAmount.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>          \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'M_START_DATE' | translate }}</ion-label>\r\n            <ion-datetime (ionChange)=\"checkDate(createEventForm.value.date_start)\" formControlName=\"date_start\" displayFormat=\"DDDD D MMM, YYYY\" [min]=\"minDate\" [max]=\"maxDate\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngIf=\"createEventForm.value.date_start && !isDateValid\">\r\n              <div class=\"error-message\" >\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                <span [innerHTML]=\"'MIN_DATE_EVENT_ERROR_TEXT' | translate\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.date_start\">\r\n              <div class=\"error-message\" *ngIf=\"eventStartDate.hasError(validation.type) && (eventStartDate.dirty || eventStartDate.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'M_END_DATE' | translate }}</ion-label>\r\n            <ion-datetime formControlName=\"date_end\" displayFormat=\"DDDD D MMM, YYYY\" [min]=\"createEventForm.value.date_start ? createEventForm.value.date_start : minDate\" [max]=\"maxDate\"  pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.date_end\">\r\n                <div class=\"error-message\" *ngIf=\"eventEndDate.hasError(validation.type) && (eventEndDate.dirty || eventEndDate.touched)\">\r\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div> \r\n        </ion-col>\r\n      </ion-row>      \r\n    </ion-grid>    \r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\" [disabled]=\"createEventForm.invalid || createEventForm.value.active === 0 || !isDateValid\"\r\n        shape=\"round\" (click)=\"createTontineEvent()\">\r\n    {{ 'SAVE_TEXT' | translate }}\r\n  </ion-button>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "NcTO":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/new-event/new-event.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctZXZlbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "oCPQ":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/new-event/new-event.page.ts ***!
  \***********************************************************************/
/*! exports provided: NewEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventPage", function() { return NewEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_event_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-event.page.html */ "9mvU");
/* harmony import */ var _new_event_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-event.page.scss */ "NcTO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tontines-events.service */ "eEpS");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_tontines_events_services_event_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dashboard/tontines-events/services/event-error.service */ "3kKL");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/service/plugin.service */ "NxmL");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "RmnQ");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");





















let NewEventPage = class NewEventPage {
    constructor(fb, translate, userService, auth, location, events, event, paymentData, dateService, error, alertController, router, ui, navController, formUtil, eventError, plugin, localStorage) {
        this.fb = fb;
        this.translate = translate;
        this.userService = userService;
        this.auth = auth;
        this.location = location;
        this.events = events;
        this.event = event;
        this.paymentData = paymentData;
        this.dateService = dateService;
        this.error = error;
        this.alertController = alertController;
        this.router = router;
        this.ui = ui;
        this.navController = navController;
        this.formUtil = formUtil;
        this.eventError = eventError;
        this.plugin = plugin;
        this.localStorage = localStorage;
        this.startDateSelect = new Date();
        this.maxDate = (new Date()).getFullYear() + 5;
        this.states = [];
        this.minAmountMessage = '';
        this.tontineName = '';
        this.minAmount = 1;
        this.loading = false;
        this.tontineEventCode = [];
        this.eventPicture = 'assets/default-event.jpg';
        this.user = this.userService.getUserData();
        this.isDateValid = true;
        this.minDate = this.dateService.formatDateTiret(new Date());
    }
    ngOnInit() {
        this.initValidationMessage();
        this.getCountries(false);
        this.initTontineEventForm();
        this.getCurrentCountry(false);
    }
    // Getters
    get eventName() {
        return this.createEventForm.get('event_name');
    }
    get eventDesc() {
        return this.createEventForm.get('description');
    }
    get eventCountry() {
        return this.createEventForm.get('country');
    }
    get currency() {
        return this.createEventForm.get('currency');
    }
    get eventAmount() {
        return this.createEventForm.get('expected_amount');
    }
    get eventStartDate() {
        return this.createEventForm.get('date_start');
    }
    get eventEndDate() {
        return this.createEventForm.get('date_end');
    }
    // Init the validation message
    initValidationMessage() {
        this.translate.get(['M_TONTINE_NAME_IS_REQUIRED', 'M_DESCRIPTION_REQUIRED', 'TONTINE_EDIT_TEXT6',
            'M_EXPECTED_AMOUNT_REQUIRED', 'M_STARTDATE_REQUIRED', 'TONTINE_NEW_TEXT8']).subscribe(trans => {
            this.validationMessages = {
                name: [
                    { type: 'required', message: trans.M_TONTINE_NAME_IS_REQUIRED }
                ],
                description: [
                    { type: 'required', message: trans.M_DESCRIPTION_REQUIRED }
                ],
                country: [
                    { type: 'required', message: trans.TONTINE_EDIT_TEXT6 }
                ],
                expected_amount: [
                    { type: 'required', message: trans.M_EXPECTED_AMOUNT_REQUIRED }
                ],
                date_start: [
                    { type: 'required', message: trans.M_STARTDATE_REQUIRED }
                ],
                date_end: [
                    { type: 'required', message: trans.TONTINE_NEW_TEXT8 }
                ],
            };
        });
    }
    initTontineEventForm() {
        this.createEventForm = this.fb.group({
            active: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            event_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            privacy: [false],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image_url: [''],
            country_key: [''],
            country_id: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            expected_amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            date_start: [this.dateService.formatDateTiret(this.startDateSelect), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date_end: [this.dateService.formatDateTiret(this.startDateSelect), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // Remove space
    updateAmount() {
        this.createEventForm.get('expected_amount').setValue(this.formUtil.removeSpace(this.createEventForm.value.expected_amount));
    }
    // Uplaod the image
    uploadImage() {
        this.plugin.getPicture().subscribe(picture => {
            if (picture) {
                this.createEventForm.get('image_url').setValue(picture);
                this.eventPicture = picture;
            }
            else {
                this.createEventForm.get('image_url').setValue('');
                this.eventPicture = 'assets/default-event.jpg';
            }
        });
    }
    // check the date 
    checkDate(date) {
        const dateParm = new Date();
        const currentDate = new Date(dateParm.getFullYear(), dateParm.getMonth(), dateParm.getDate(), 0, 0, 0, 0);
        const inputDate = new Date(date);
        inputDate < currentDate ? this.isDateValid = false : this.isDateValid = true;
        const endDate = new Date(this.createEventForm.value.date_end);
        if (this.isDateValid && endDate < inputDate) {
            this.createEventForm.get('date_end').setValue(this.dateService.formatDateTiret(inputDate));
        }
    }
    // Get the list of countries
    getCountries(refresher) {
        this.location.getAllCountries(refresher).then((countries) => {
            this.states = this.paymentData.formatCountriesData(countries, true);
        });
    }
    // Set the default country
    getCurrentCountry(refresher) {
        this.location.getCurrentCountryInfo(refresher).then((country) => {
            if (country) {
                this.defaultState = country.settings;
                if (this.defaultState && this.defaultState.active === 1) {
                    const countryLabel = `COUNTRY_${this.defaultState.code_country}`;
                    this.createEventForm.get('active').setValue(this.defaultState.active);
                    this.createEventForm.get('currency').setValue(this.defaultState.device_name);
                    this.createEventForm.get('country').setValue(this.defaultState.country_name);
                    this.createEventForm.get('country_key').setValue(countryLabel);
                    this.createEventForm.get('country_id').setValue(this.defaultState.country_id);
                    this.location.setCurrentUserCountry(this.defaultState);
                    this.minAmountMessage = `${this.minAmount} ${this.defaultState.device_name}`;
                }
                else {
                    this.createEventForm.get('active').setValue(this.defaultState.active);
                }
            }
        }).catch(error => {
        });
    }
    // show tontine message alert 
    showMessage(translations, country) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let currentLang = this.location.getCurrentUserLanguage();
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
                                        this.translate.get(['NEWS_TITLE', 'NEWS_MESSAGE']).subscribe(trans => {
                                            this.ui.presentAlert(trans.NEWS_TITLE, trans.NEWS_MESSAGE);
                                        });
                                    }
                                }, error => {
                                    if (error && error.error && error.error.message === 'error') {
                                        if (error.error.already_sent) {
                                            this.translate.get('NEWS_ALREADY_SENT').subscribe(trans => {
                                                this.ui.presentToast(trans);
                                            });
                                        }
                                    }
                                    else {
                                        this.error.manageError(error);
                                    }
                                });
                            }
                            else {
                                this.translate.get('USER_DETAIL_TEXT13').subscribe(trans => {
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
    updateCurrency() {
        const currentCountry = this.createEventForm.value.country;
        this.states.forEach(state => {
            if (state.country_name === currentCountry) {
                this.createEventForm.get('active').setValue(state.active);
                if (state.active === 1) {
                    this.createEventForm.get('currency').setValue(state.device_name);
                    this.createEventForm.get('country_key').setValue(state.country_key);
                    this.createEventForm.get('country_id').setValue(state.country_id);
                }
                else {
                    const translation = [];
                    this.translate.get(['NEWS_TITLE', 'NEWSLETTER_TEXT1', 'NEWSLETTER_TEXT2', 'NEWS_EMAIL', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
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
                            this.navController.setDirection('root');
                            const event = this.event.getCurrentTontineEventData();
                            if (event && event.visibility === 'private') {
                                this.router.navigate(['/dashboard/tontines-events/invitations']);
                            }
                            else {
                                this.router.navigate(['/dashboard/tontines-events']);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Create the tontine
    createTontineEvent() {
        // when the tontine is created, we get the code generee and display it
        this.loading = true;
        this.createEventForm.get('date_start').setValue(this.dateService.formatDateTiret(this.createEventForm.value.date_start));
        this.createEventForm.get('date_end').setValue(this.dateService.formatDateTiret(this.createEventForm.value.date_end));
        const user = this.userService.getUserData();
        this.event.createTontineEventPost(this.createEventForm.value).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.tontineEventCode = reponse.tontine_event.code;
                if (this.tontineEventCode.length == 0) {
                    this.invitationMessage = ``;
                }
                else {
                    this.translate.get(['TONTINE_EVENT_NEW_TEXT0', 'TONTINE_NEW_MSG2', 'TONTINE_EVENT_NEW_TEXT1']).subscribe(value => {
                        this.invitationMessage = `${value['TONTINE_EVENT_NEW_TEXT0']} <span>${this.tontineEventCode}
                    </span>. ${value['TONTINE_EVENT_NEW_TEXT1']}`;
                    });
                }
                const tontineData = reponse.tontine_event;
                this.event.setCurrentTontineEventData(tontineData);
                const currentDate = new Date();
                this.auth.setAppLastSession(currentDate.getTime());
                this.localStorage.setItem('new-event', 'yes');
                this.initTontineEventForm();
                this.translate.get(['TONTINE_EVENT_TEXT4']).subscribe(value => {
                    this.tontineName = `<span>${tontineData.title}</span> ${value['TONTINE_EVENT_TEXT4']}`;
                });
                this.events.publish('new-event');
                this.translate.get(['TONTINE_NEW_TEXT31', 'MENU_GO']).subscribe(trans => {
                    const message = `<p>${this.tontineName}</p> <p>${this.invitationMessage}</p>`;
                    this.showInvitationMessage(message, trans.TONTINE_NEW_TEXT31, trans.MENU_GO);
                });
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.createTontineEvent();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.eventError.manageEventError(error);
                }
            }
            else {
                this.loading = false;
                this.error.manageError(error);
            }
        });
    }
};
NewEventPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"] },
    { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_16__["EventService"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_7__["TontinesEventsService"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_14__["PaymentGlobalDataService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_8__["DateserviceService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_18__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__["FormUtilsService"] },
    { type: src_app_dashboard_tontines_events_services_event_error_service__WEBPACK_IMPORTED_MODULE_13__["EventErrorService"] },
    { type: src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_17__["PluginService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_20__["LocalStorageService"] }
];
NewEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-event',
        template: _raw_loader_new_event_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_event_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewEventPage);



/***/ }),

/***/ "oT51":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/dateservice.service.ts ***!
  \*******************************************************/
/*! exports provided: DateserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateserviceService", function() { return DateserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DateserviceService = class DateserviceService {
    constructor() { }
    getDateTimeUniversal(date, time, from) {
        const myDates = this.decodeDate(date);
        const myTimes = this.decodeTime(time);
        const objectMyDate = new Date(Number(myDates.year), Number(myDates.month - 1), Number(myDates.day), Number(myTimes.heure), Number(myTimes.minutes), 0, 0);
        let objectMyDateUniversal = {};
        if (from === 'l') {
            objectMyDateUniversal = new Date(objectMyDate.valueOf() + objectMyDate.getTimezoneOffset() * 60000);
        }
        else {
            objectMyDateUniversal = new Date(objectMyDate.valueOf() - objectMyDate.getTimezoneOffset() * 60000);
        }
        const dateFormater = this.formatterDate(objectMyDateUniversal);
        return dateFormater;
    }
    encodeTime(hour, minute) {
        const mTime = hour + ':' + minute;
        return mTime;
    }
    addDays(theDate, days) {
        return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
    }
    // get the remain time
    getRemainTime(data) {
        let timeRemainHour = 0;
        const currentDate = new Date();
        const created = new Date(data.updated_at ? data.updated_at : data.created_at);
        const expiredDate = this.addDays(created, 3);
        const remainTime = expiredDate.getTime() - currentDate.getTime();
        if (remainTime > 0) {
            timeRemainHour = Math.floor(remainTime / 3600000);
        }
        return timeRemainHour;
    }
    decodeTime(time) {
        const times = time.split(':');
        const myTime = {
            heure: times[0],
            minutes: times[1],
            secondes: times[2],
        };
        return myTime;
    }
    decodeDate(myDate) {
        const mDates = myDate.split('-');
        const mDate = {
            year: mDates[0],
            month: mDates[1],
            day: mDates[2]
        };
        return mDate;
    }
    encodeDate(day, month, year) {
        const mDate = year + '-' + month + '-' + day;
        return mDate;
    }
    formatterDate(date) {
        const year = String(date.getFullYear());
        const month = String(('0' + (date.getMonth() + 1)).slice(-2));
        const day = String(('0' + date.getDate()).slice(-2));
        const hour = String(('0' + date.getHours()).slice(-2));
        const minute = String(('0' + date.getMinutes()).slice(-2));
        const myFormatDate = {
            date: year + '-' + month + '-' + day,
            time: hour + ':' + minute,
        };
        return myFormatDate;
    }
    formatDateSplash(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() + 1 < 10) ? '0' + (dateFormat.getMonth() + 1) : (dateFormat.getMonth() + 1);
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = day + '/' + month + '/' + dateFormat.getFullYear();
        return formatDate;
    }
    formatDateSplashReverse(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() + 1 < 10) ? '0' + (dateFormat.getMonth() + 1) : (dateFormat.getMonth() + 1);
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = dateFormat.getFullYear() + '/' + month + '/' + day;
        return formatDate;
    }
    formatDateTiret(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() + 1 < 10) ? '0' + (dateFormat.getMonth() + 1) : (dateFormat.getMonth() + 1);
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = dateFormat.getFullYear() + '-' + month + '-' + day;
        return formatDate;
    }
    formatDate(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() < 10) ? '0' + (dateFormat.getMonth()) : (dateFormat.getMonth());
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = dateFormat.getFullYear() + '-' + month + '-' + day;
        return formatDate;
    }
    // Filter the date
    filterDate(date) {
        return new Date(date);
    }
};
DateserviceService.ctorParameters = () => [];
DateserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DateserviceService);



/***/ })

}]);
//# sourceMappingURL=tontines-events-new-event-new-event-module.js.map