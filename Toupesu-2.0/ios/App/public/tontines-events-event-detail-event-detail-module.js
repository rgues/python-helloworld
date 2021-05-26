(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tontines-events-event-detail-event-detail-module"],{

/***/ "1CJW":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/event-detail/event-info-edit/event-info-edit.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_EVENT_TEXT10' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"new-event\">\n  <form [formGroup]=\"infoEditForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-padding\"> \n          <ion-thumbnail>\n            <img src=\"{{eventPicture}}\">\n          </ion-thumbnail>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\"> \n          <ion-item lines=\"none\">                \n            <ion-toggle formControlName=\"privacy\"></ion-toggle>\n            <ion-label>{{ 'PRIVATE_TEXT' | translate }}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-end\">\n          <ion-button color=\"primary\" (click)=\"uploadImage()\" size=\"medium\" class=\"ion-text-capitalize\"> {{ 'M_UPLOAD_IMAGE' | translate }}\n            <ion-icon name=\"camera\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{ 'EVENT_NAME_TITLE' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"event_name\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessages.name\">\n                <div class=\"error-message\" *ngIf=\"eventName.hasError(validation.type) && (eventName.dirty || eventName.touched)\">\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{ 'DESCRIPTION_TEXT' | translate }}</ion-label>\n            <ion-textarea type=\"text\" formControlName=\"description\" required=\"true\"></ion-textarea>\n          </ion-item>\n          <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessages.description\">\n                <div class=\"error-message\" *ngIf=\"eventDesc.hasError(validation.type) && (eventDesc.dirty || eventDesc.touched)\">\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{ 'COUNTRY_TEXT' | translate }}</ion-label>\n            <ion-select (ionChange)=\"updateCurrency()\" formControlName=\"country\">\n              <ion-select-option *ngFor=\"let state of states\" [value]=\"state.country\">{{ state.country_name }}</ion-select-option>          \n            </ion-select>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.country\">\n              <div class=\"error-message\" *ngIf=\"eventCountry.hasError(validation.type) && (eventCountry.dirty || eventCountry.touched)\">\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">{{ 'M_EXPECTED_AMOUNT' | translate }}</ion-label>\n            <ion-input type=\"text\" (ionChange)=\"updateAmount()\" formControlName=\"expected_amount\" required></ion-input>\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ infoEditForm.value.currency }} </span>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.expected_amount\">\n              <div class=\"error-message\" *ngIf=\"eventAmount.hasError(validation.type) && (eventAmount.dirty || eventAmount.touched)\">\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div> \n        </ion-col>          \n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{ 'M_START_DATE' | translate }}</ion-label>\n            <ion-datetime (ionChange)=\"checkDate(infoEditForm.value.date_start)\" formControlName=\"date_start\" displayFormat=\"DDDD D MMM, YYYY\" [min]=\"minDate\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngIf=\"infoEditForm.value.date_start && !isDateValid\">\n              <div class=\"error-message\" >\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                <span [innerHTML]=\"'MIN_DATE_EVENT_ERROR_TEXT' | translate\"></span>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.date_start\">\n              <div class=\"error-message\" *ngIf=\"eventStartDate.hasError(validation.type) && (eventStartDate.dirty || eventStartDate.touched)\">\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{ 'M_END_DATE' | translate }}</ion-label>\n            <ion-datetime formControlName=\"date_end\" displayFormat=\"DDDD D MMM, YYYY\" [min]=\"infoEditForm.value.date_start ? infoEditForm.value.date_start : minDate\"  pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\n          </ion-item>\n          <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessages.date_end\">\n                <div class=\"error-message\" *ngIf=\"eventEndDate.hasError(validation.type) && (eventEndDate.dirty || eventEndDate.touched)\">\n                  <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div> \n        </ion-col>\n      </ion-row>      \n    </ion-grid>    \n  </form>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n    <ion-grid>\n      <ion-row>   \n        <ion-col size=\"6\">\n            <ion-button expand=\"full\" [disabled]=\"infoEditForm.invalid || !isDateValid || loading\"\n                  color=\"warning\" \n                  class=\"ion-text-uppercase\"\n                  shape=\"round\" (click)=\"editTontineEvent()\" >\n              {{ 'SAVE_TEXT' | translate }}\n            </ion-button>\n        </ion-col>   \n        <ion-col size=\"6\">\n            <ion-button expand=\"full\" \n                  fill=\"outline\"\n                  color=\"warning\" \n                  class=\"ion-text-uppercase\"\n                  shape=\"round\" (click)=\"closeInfoEdit('cancel')\">\n              {{ 'CANCEL_TEXT' | translate }}\n            </ion-button>\n        </ion-col>\n      </ion-row>\n      <p class=\"ion-text-center\"  *ngIf=\"loading\">\n        <ion-spinner  name=\"circles\"></ion-spinner>\n      </p>\n    </ion-grid>\n  </ion-footer>");

/***/ }),

/***/ "GNpu":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/directives/expandable-header.directive.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExpandableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeaderDirective", function() { return ExpandableHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ExpandableHeaderDirective = class ExpandableHeaderDirective {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.hidden = false;
        this.triggerDistance = 20;
    }
    ngOnInit() {
        this.initStyles();
        this.scrollArea.ionScroll.subscribe((scrollEvent) => {
            // tslint:disable-next-line: prefer-const
            let delta = scrollEvent.detail.deltaY;
            /* if (scrollEvent.detail.currentY === 0 && this.hidden) {
                setTimeout(() => {
                  this.show();
                }, 200);
                
              } else */ if (!this.hidden && delta > this.triggerDistance) {
                this.hide();
            }
            else if (this.hidden && delta < -this.triggerDistance) {
                this.show();
            }
        });
    }
    initStyles() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s ease');
        });
    }
    hide() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'min-height', '55px');
            this.renderer.setStyle(this.element.nativeElement, 'height', '0px');
            this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
            this.renderer.setStyle(this.element.nativeElement, 'padding', '0');
        });
        this.hidden = true;
    }
    show() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'height', '300px');
            this.renderer.removeStyle(this.element.nativeElement, 'opacity');
            this.renderer.removeStyle(this.element.nativeElement, 'min-height');
            this.renderer.removeStyle(this.element.nativeElement, 'padding');
        });
        this.hidden = false;
    }
};
ExpandableHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
ExpandableHeaderDirective.propDecorators = {
    scrollArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['myScrollVanish',] }]
};
ExpandableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[myScrollVanish]'
    })
], ExpandableHeaderDirective);



/***/ }),

/***/ "HTYO":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/event-info-edit/event-info-edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EventInfoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventInfoEditComponent", function() { return EventInfoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_event_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./event-info-edit.component.html */ "1CJW");
/* harmony import */ var _event_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-info-edit.component.scss */ "oGWr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tontines-events.service */ "eEpS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_tontines_events_services_event_error_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/tontines-events/services/event-error.service */ "3kKL");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/plugin.service */ "NxmL");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");

















let EventInfoEditComponent = class EventInfoEditComponent {
    constructor(fb, translate, location, event, events, form, dateService, paymentData, error, ui, modatCtrl, eventError, plugin) {
        this.fb = fb;
        this.translate = translate;
        this.location = location;
        this.event = event;
        this.events = events;
        this.form = form;
        this.dateService = dateService;
        this.paymentData = paymentData;
        this.error = error;
        this.ui = ui;
        this.modatCtrl = modatCtrl;
        this.eventError = eventError;
        this.plugin = plugin;
        this.startDateSelect = new Date();
        this.states = [];
        this.minAmountMessage = '';
        this.tontineName = '';
        this.minAmount = 1;
        this.loading = false;
        this.tontineEventCode = [];
        this.isDateValid = true;
        this.minDate = this.dateService.formatDateTiret(new Date());
    }
    ngOnInit() {
        this.initValidationMessage();
        this.getCountries(false);
        this.initTontineEventForm();
    }
    // Getters
    get eventName() {
        return this.infoEditForm.get('event_name');
    }
    get eventDesc() {
        return this.infoEditForm.get('description');
    }
    get eventCountry() {
        return this.infoEditForm.get('country');
    }
    get currency() {
        return this.infoEditForm.get('currency');
    }
    get eventAmount() {
        return this.infoEditForm.get('expected_amount');
    }
    get eventStartDate() {
        return this.infoEditForm.get('date_start');
    }
    get eventEndDate() {
        return this.infoEditForm.get('date_end');
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
        let formData = this.event.getCurrentTontineEventData();
        if (formData) {
            formData.date_debut = new Date(formData.date_debut);
            formData.date_fin = new Date(formData.date_fin);
            if (formData.visibility === 'public') {
                formData.private = false;
            }
            else {
                formData.private = true;
            }
        }
        this.defaultState = this.location.getCurrentUserCountry();
        const defaultData = {
            title: '',
            description: '',
            code_country: '',
            event_id: '',
            imgUrl: 'assets/default-event.jpg',
            budget: '',
            private: false,
            country: this.defaultState ? this.defaultState.country_name : '',
            country_id: this.defaultState ? this.defaultState.country_id : '',
            currency: this.defaultState ? this.defaultState.device_name : '',
            date_debut: this.dateService.formatDateTiret(this.startDateSelect),
            date_fin: this.dateService.formatDateTiret(this.startDateSelect)
        };
        if (!formData) {
            formData = defaultData;
        }
        this.infoEditForm = this.fb.group({
            event_name: [formData.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            event_id: [formData.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            privacy: [formData.private],
            code_country: [formData.code_country],
            description: [formData.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image_url: [formData.imgUrl],
            country_id: [formData.country_id],
            country: [formData.country, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            expected_amount: [formData.budget, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            currency: [formData.currency, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            date_start: [this.dateService.formatDateTiret(formData.date_debut), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date_end: [this.dateService.formatDateTiret(formData.date_fin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.eventPicture = formData.imgUrl ? formData.imgUrl : 'assets/default-event.jpg';
        this.checkDate(this.infoEditForm.value.date_start);
    }
    // Close the modal
    closeInfoEdit(message) {
        this.modatCtrl.dismiss(null, message);
    }
    checkDate(date) {
        const dateParm = new Date();
        const currentDate = new Date(dateParm.getFullYear(), dateParm.getMonth(), dateParm.getDate(), 0, 0, 0, 0);
        const inputDate = new Date(date);
        inputDate < currentDate ? this.isDateValid = false : this.isDateValid = true;
        const endDate = new Date(this.infoEditForm.value.date_end);
        if (this.isDateValid && endDate < inputDate) {
            this.infoEditForm.get('date_end').setValue(this.dateService.formatDateTiret(inputDate));
        }
    }
    // Remove space
    updateAmount() {
        this.infoEditForm.get('expected_amount').setValue(this.form.removeSpace(this.infoEditForm.value.expected_amount));
    }
    // Uplaod the image
    uploadImage() {
        this.plugin.getPicture().subscribe(picture => {
            if (picture) {
                this.infoEditForm.get('image_url').setValue(picture);
                this.eventPicture = picture;
            }
            else {
                this.infoEditForm.get('image_url').setValue('');
                this.eventPicture = 'assets/default-event.jpg';
            }
        });
    }
    // Get the list of countries
    getCountries(refresher) {
        this.location.getAllCountries(refresher).then((countries) => {
            this.states = this.paymentData.formatCountriesData(countries);
        });
    }
    // Get current counrty data
    getCurrentCountry(countryCode) {
        this.states.forEach(country => {
            if (country && country.country_key === countryCode) {
                this.infoEditForm.get('country_id').setValue(country.country_id);
            }
        });
    }
    // Get the tontine event detail
    getDetailTontinesEvent(currentTontineId) {
        this.event.getTontineDetail(currentTontineId).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.event.setCurrentTontineEventData(reponse.liste[0]);
                this.translate.get('TONTINE_EVENT_EDIT_SUCCESS1').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.ui.dismissLoading();
                this.events.publish('new-event');
                this.closeInfoEdit('success');
            }
            this.loading = false;
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
                this.loading = false;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getDetailTontinesEvent(currentTontineId);
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
    // Update the currency
    updateCurrency() {
        const currentCountry = this.infoEditForm.value.country;
        this.states.forEach(state => {
            if (state.country_name === currentCountry) {
                this.infoEditForm.get('currency').setValue(state.device_name);
                this.infoEditForm.get('code_country').setValue(state.country_key);
                this.infoEditForm.get('country_id').setValue(state.country_id);
            }
        });
    }
    // Edit the tontine
    editTontineEvent() {
        // when the tontine is created, we get the code generee and display it
        this.loading = true;
        this.getCurrentCountry(this.infoEditForm.value.code_country);
        this.infoEditForm.get('date_start').setValue(this.dateService.formatDateTiret(this.infoEditForm.value.date_start));
        this.infoEditForm.get('date_end').setValue(this.dateService.formatDateTiret(this.infoEditForm.value.date_end));
        this.translate.get('EDITING_TEXT').subscribe(value => {
            this.ui.presentLoading(value);
        });
        this.event.editTontineEventPost(this.infoEditForm.value).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.tontineEventCode = reponse.tontine_event.code;
                this.getDetailTontinesEvent(this.infoEditForm.value.event_id);
            }
            else {
                this.loading = false;
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.editTontineEvent();
                        }
                        else {
                            this.closeInfoEdit('cancel');
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.ui.dismissLoading();
                    this.closeInfoEdit('cancel');
                    this.eventError.manageEventError(error);
                }
            }
            else {
                this.loading = false;
                this.ui.dismissLoading();
                this.closeInfoEdit('cancel');
                this.error.manageError(error);
            }
        });
    }
};
EventInfoEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_9__["TontinesEventsService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_14__["EventService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_13__["FormUtilsService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_8__["DateserviceService"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_12__["PaymentGlobalDataService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_16__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: src_app_dashboard_tontines_events_services_event_error_service__WEBPACK_IMPORTED_MODULE_11__["EventErrorService"] },
    { type: src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_15__["PluginService"] }
];
EventInfoEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-info-edit',
        template: _raw_loader_event_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventInfoEditComponent);



/***/ }),

/***/ "NNmT":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/event-detail-menu/event-detail-menu.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1kZXRhaWwtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "NegZ":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/contribute/contribute.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeComponent", function() { return ContributeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contribute_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contribute.component.html */ "Wuov");
/* harmony import */ var _contribute_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contribute.component.scss */ "aKKj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ContributeComponent = class ContributeComponent {
    constructor(modatCtrl) {
        this.modatCtrl = modatCtrl;
    }
    ngOnInit() { }
    closePayContribution() {
        this.modatCtrl.dismiss('cancel', 'cancel');
    }
};
ContributeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ContributeComponent.propDecorators = {
    eventName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    amountToPay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ContributeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contribute',
        template: _raw_loader_contribute_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contribute_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContributeComponent);



/***/ }),

/***/ "Wuov":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/event-detail/contribute/contribute.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-title class=\"ion-text-center\">{{ 'M_CONTRIBUTION_PAYMENT' | translate }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"tontine-penality\">\n    <h4 class=\"ion-padding-horizontal\"><small> {{ 'TONTINE_EVENT_TEXT9' | translate }}: <b>{{ eventName }}</b></small></h4>\n    <app-paidmode-event [amountPay]=\"1\"></app-paidmode-event>\n  </ion-content>\n  \n  <ion-footer class=\"ion-padding ion-text-center\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-button expand=\"full\" \n                    fill=\"outline\"\n                    color=\"warning\" \n                    class=\"ion-text-uppercase\"\n                    shape=\"round\" (click)=\"closePayContribution()\">\n                {{ 'CANCEL_TEXT' | translate }}\n              </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-footer>\n");

/***/ }),

/***/ "aKKj":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/contribute/contribute.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmlidXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "dG6d":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/event-detail.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EventDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _event_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-detail.page */ "h10c");
/* harmony import */ var _directives_expandable_header_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/expandable-header.directive */ "GNpu");
/* harmony import */ var _event_detail_menu_event_detail_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-detail-menu/event-detail-menu.component */ "f+o2");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contribute/contribute.component */ "NegZ");
/* harmony import */ var _event_info_edit_event_info_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-info-edit/event-info-edit.component */ "HTYO");











const routes = [
    {
        path: '',
        component: _event_detail_page__WEBPACK_IMPORTED_MODULE_5__["EventDetailPage"]
    }
];
let EventDetailPageModule = class EventDetailPageModule {
};
EventDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        declarations: [
            _event_detail_page__WEBPACK_IMPORTED_MODULE_5__["EventDetailPage"],
            _directives_expandable_header_directive__WEBPACK_IMPORTED_MODULE_6__["ExpandableHeaderDirective"],
            _event_detail_menu_event_detail_menu_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailMenuComponent"],
            _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__["ContributeComponent"],
            _event_info_edit_event_info_edit_component__WEBPACK_IMPORTED_MODULE_10__["EventInfoEditComponent"]
        ],
        entryComponents: [
            _event_detail_menu_event_detail_menu_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailMenuComponent"],
            _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__["ContributeComponent"],
            _event_info_edit_event_info_edit_component__WEBPACK_IMPORTED_MODULE_10__["EventInfoEditComponent"]
        ]
    })
], EventDetailPageModule);



/***/ }),

/***/ "f+o2":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/event-detail-menu/event-detail-menu.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EventDetailMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailMenuComponent", function() { return EventDetailMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_event_detail_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./event-detail-menu.component.html */ "mDOI");
/* harmony import */ var _event_detail_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-detail-menu.component.scss */ "NNmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontines-events.service */ "eEpS");
/* harmony import */ var _event_info_edit_event_info_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-info-edit/event-info-edit.component */ "HTYO");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "RmnQ");
/* harmony import */ var src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/plugin.service */ "NxmL");














let EventDetailMenuComponent = class EventDetailMenuComponent {
    constructor(popoverController, modatCtrl, event, router, translate, ui, userService, auth, error, alertController, platform, plugin) {
        this.popoverController = popoverController;
        this.modatCtrl = modatCtrl;
        this.event = event;
        this.router = router;
        this.translate = translate;
        this.ui = ui;
        this.userService = userService;
        this.auth = auth;
        this.error = error;
        this.alertController = alertController;
        this.platform = platform;
        this.plugin = plugin;
        this.tontineEventData = this.event.getCurrentTontineEventData();
        this.user = this.userService.getUserData();
        this.shareData = [];
    }
    ngOnInit() { }
    // can invite 
    canIniviteForEvent() {
        let canInvite = false;
        if (this.tontineEventData.USER_ID === this.user.id && this.tontineEventData.status === 'approved' && this.tontineEventData.visibility === 'private') {
            canInvite = true;
        }
        return canInvite;
    }
    // can share event code
    canShareCode() {
        let canShare = false;
        if (this.tontineEventData.USER_ID === this.user.id && this.tontineEventData.status === 'approved' && this.tontineEventData.visibility === 'private') {
            canShare = true;
        }
        return canShare;
    }
    // can send notification
    canSendNotification() {
        let canSend = false;
        if (this.tontineEventData.USER_ID === this.user.id && this.tontineEventData.status === 'approved') {
            canSend = true;
        }
        return canSend;
    }
    // check if it current user
    isCurrentUser() {
        return this.tontineEventData.USER_ID === this.user.id;
    }
    // can update
    canUpdateEvent() {
        return this.isCurrentUser() && this.tontineEventData.status === 'initiated';
    }
    // can delete
    canDeleteEvent() {
        return this.isCurrentUser() && (this.tontineEventData.status === 'initiated' || this.tontineEventData.status === 'refused');
    }
    closeEventDetailMenu() {
        this.popoverController.dismiss();
    }
    // Invite to join the tontine event
    inviteJoin() {
        this.closeEventDetailMenu();
        this.router.navigate(['dashboard/tontines-events/invitations']);
    }
    // Show the tickets of the event
    ticketsTontine() {
        this.closeEventDetailMenu();
        this.router.navigate(['dashboard/tontines-events', this.tontineEventData.id, 'my-tickets']);
    }
    // Open contextual menu
    openPayContribution() {
        this.modatCtrl
            .create({
            component: _event_info_edit_event_info_edit_component__WEBPACK_IMPORTED_MODULE_7__["EventInfoEditComponent"]
        })
            .then(modalEl => modalEl.present());
    }
    // Send tontine Event notification
    sendNotification() {
        this.closeEventDetailMenu();
        this.router.navigate(['dashboard/tontines-events/' + this.tontineEventData.id + '/my-tickets']);
    }
    // Update the tontine event
    updateTontine() {
        this.closeEventDetailMenu();
        this.openPayContribution();
    }
    // Show confirm message
    deleteEventConfirm(dataMessage, translation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `${dataMessage.title} ${this.tontineEventData.title}`,
                message: `${dataMessage.message}`,
                buttons: [
                    {
                        text: `${translation[0]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.closeEventDetailMenu();
                        }
                    }, {
                        text: `${translation[1]}`,
                        handler: () => {
                            this.confirmDelete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // delete the tontine invitations
    confirmDelete() {
        this.loading = true;
        this.event.deleteTontine(this.tontineEventData.id).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('TONTINE_EVENT_DELETE_SUCCESS1').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.closeEventDetailMenu();
                const currentDate = new Date();
                this.auth.setAppLastSession(currentDate.getTime());
                this.router.navigate(['dashboard/tontines-events']);
            }
        }, error => {
            this.closeEventDetailMenu();
            if (error && error.error && error.error.message === 'error') {
                if (error.error.tontine_not_found) {
                    this.translate.get('TONTINE_EVENT_DELETE_ERROR1').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                    this.loading = false;
                }
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.confirmDelete();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
                this.loading = false;
                this.error.manageError(error);
            }
        });
    }
    // Delete the tontine Event
    deleteTontine() {
        const translation = [];
        const dataMessage = { title: '', message: '' };
        this.translate.get(['EVENT', 'CONFIRM_EVENT_DELETE_SUBTEXT1', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
            translation.push(trans.CANCEL_TEXT);
            translation.push(trans.YES_TEXT);
            dataMessage.title = trans.EVENT;
            dataMessage.message = trans.CONFIRM_EVENT_DELETE_SUBTEXT1;
            this.deleteEventConfirm(dataMessage, translation);
        });
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
        this.translate.get(['SHARE_EVENT_MESSAGE', 'SHARE_EVENT_TITLE', 'DOWNLOAD_TEXT']).subscribe(trans => {
            this.shareData.push(trans.SHARE_CODE_MESSAGE);
            this.shareData.push(trans.DOWNLOAD_TEXT);
            this.shareData.push(trans.SHARE_CODE_TITLE);
        });
        this.plugin.share(`${this.shareData[0]} ${this.tontineEventData.title} \n\n Code :  ${this.tontineEventData.codeEvent} \n\n ${this.shareData[1]}`, `${this.shareData[2]}`, link);
    }
};
EventDetailMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_13__["PluginService"] }
];
EventDetailMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-detail-menu',
        template: _raw_loader_event_detail_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_detail_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventDetailMenuComponent);



/***/ }),

/***/ "h10c":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/event-detail.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EventDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPage", function() { return EventDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_event_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./event-detail.page.html */ "h2o7");
/* harmony import */ var _event_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-detail.page.scss */ "iJel");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tontines-events.service */ "eEpS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _event_detail_menu_event_detail_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-detail-menu/event-detail-menu.component */ "f+o2");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contribute/contribute.component */ "NegZ");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../my-tontines/services/contribution.service */ "US41");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");












let EventDetailPage = class EventDetailPage {
    constructor(route, router, contribution, tontineEventService, popoverController, modatCtrl, userService, error) {
        this.route = route;
        this.router = router;
        this.contribution = contribution;
        this.tontineEventService = tontineEventService;
        this.popoverController = popoverController;
        this.modatCtrl = modatCtrl;
        this.userService = userService;
        this.error = error;
        this.defaultImage = 'assets/default-event.jpg';
        this.hasImage = true;
        this.members = [];
        this.notifications = [];
        this.loading = false;
        this.allData = [];
        this.filterData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.currentTontineId = this.route.snapshot.params.eventID;
        this.currentEvent = this.tontineEventService.getCurrentTontineEventData();
        this.user = this.userService.getUserData();
    }
    ionViewWillEnter() {
        this.loading = true;
        this.getDetailTontinesEvent(null);
    }
    // Open contextual menu
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _event_detail_menu_event_detail_menu_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
    // Open contextual menu
    openPayContribution() {
        const contributionParams = {
            title: this.currentEvent.title,
            device_name: this.currentEvent.currency,
            idEvent: this.currentEvent.id
        };
        this.contribution.sendContributionData(contributionParams);
        this.modatCtrl
            .create({
            component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_8__["ContributeComponent"],
            componentProps: {
                eventName: this.currentEvent.title
            }
        })
            .then(modalEl => {
            modalEl.present();
            this.loading = true;
            this.getDetailTontinesEvent(null);
        });
    }
    // show the pin confirmation dilaog
    confirmPin() {
        this.openPayContribution();
    }
    // Filter the list of tontines
    searchForMembers(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((member) => {
                return (member.FIRSTNAME ? member.FIRSTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    member.LASTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.members = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.members.push(this.allData[this.members.length]);
            }
        }
        else {
            this.members = this.allData;
        }
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.members.length < this.allData.length) {
                    this.members.push(this.allData[this.members.length]);
                }
                else if (this.members.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getDetailTontinesEvent(event);
    }
    // Get the tontine event detail
    getDetailTontinesEvent(event) {
        this.tontineEventService.getTontineDetail(this.currentTontineId).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.currentEventData = reponse.liste[0];
                this.currentEvent = this.currentEventData;
                this.allData = this.currentEventData.members;
                this.filterData = this.allData;
                if (this.allData.length > this.nbItems) {
                    this.members = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.members.push(this.allData[this.members.length]);
                    }
                }
                else {
                    this.members = this.allData;
                }
                if (event) {
                    event.target.complete();
                }
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
                        this.getDetailTontinesEvent(event);
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
    // Reply a notification
    replyNotification(event) {
        this.router.navigate(['dashboard/tontines-events', event.id, 'my-tickets']);
    }
};
EventDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_10__["ContributionService"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_4__["TontinesEventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] }
];
EventDetailPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false },] }]
};
EventDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-detail',
        template: _raw_loader_event_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventDetailPage);



/***/ }),

/***/ "h2o7":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/event-detail/event-detail.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar-img\"\r\n    [ngStyle]=\"{\r\n      'background': (currentEvent && currentEvent.imgUrl) ? 'url('+currentEvent.imgUrl+')':'url('+defaultImage+')',\r\n      'background-repeat': 'no-repeat',\r\n      'background-size': 'cover',\r\n      'background-position': 'center center'\r\n    }\"\r\n    [myScrollVanish]=\"scrollArea\"\r\n  >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\" defaultHref=\"/dashboard/tontines-events\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>      \r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>  \r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"toolbar-img-title\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/tontines-events\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons> \r\n    <ion-buttons slot=\"end\" *ngIf=\"currentEvent && user.id === currentEvent.USER_ID\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> \r\n    <ion-title class=\"ion-no-padding ion-no-margin\">\r\n      {{ currentEvent.title ? currentEvent.title  : '' }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"event-detail\" #scrollArea scrollEvents=\"true\">  \r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p> \r\n  <ion-grid>\r\n    <ion-row class=\"notification\" *ngIf=\"currentEvent.USER_ID === user.id && (currentEvent.status === 'refused')\">\r\n      <ion-col>\r\n        <ion-card class=\"ion-no-margin\">\r\n          <ion-item lines=\"none\">\r\n            <ion-icon color=\"primary\" name=\"alert\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{ 'M_NOTIFICATION' | translate }}</ion-label>\r\n            <ion-button fill=\"outline\" (click)=\"replyNotification(currentEvent)\" slot=\"end\">{{ 'M_REPLY_NOTIF' | translate }}</ion-button>\r\n          </ion-item>\r\n          <ion-card-content>\r\n            <p *ngIf=\"currentEvent.status === 'refused'\">\r\n              {{ 'REFUSED_EVENT_TEXT' | translate }}  <small><b>{{ currentEvent.reason }}</b> </small>\r\n            </p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n         <p [innerHTML]=\"currentEvent.description\"></p>\r\n        </ion-col>\r\n    </ion-row>\r\n    <div class=\"block-1 ion-padding\">\r\n      <ion-row class=\"row-1\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <b>{{ 'TONTINE_EVENT_TEXT6' | translate }}</b><br/>{{ currentEvent.tontine_event_admin_firstname ? currentEvent.tontine_event_admin_firstname : '' }}\r\n           {{ currentEvent.tontine_event_admin_lastname ? currentEvent.tontine_event_admin_lastname : user.phone }}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-1\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'COUNTRY_TEXT' | translate }}</b><br/>{{ currentEvent.country }}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{'M_EXPECTED' | translate }} ({{ currentEvent.currency }})</b><br/>{{ currentEvent.budget | commadumper }} \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-2\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'TONTINE_INVITE_TEXT5' | translate }}</b><br/>{{ currentEvent.status | translate  }}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'M_VISIBILITY' | translate }}</b><br/>{{ (currentEvent.visibility !== \"private\" ? 'PUBLIC_TEXT' : 'PRIVATE_TEXT' ) | translate }}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-3\">\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'M_START_DATE' | translate }}</b><br/>{{ currentEvent.date_debut | toDateObj | date: 'mediumDate' }} \r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'M_END_DATE' | translate }}</b><br/> {{ currentEvent.date_fin | toDateObj | date: 'mediumDate'  }}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-1\" *ngIf=\"currentEvent.visibility === 'private' && currentEvent.USER_ID === user.id\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <b>{{ 'M_CODE_TEXT' | translate }}</b><br/>{{ currentEvent.codeEvent }} \r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-2\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"5\" class=\"col-status ion-padding\">\r\n         <svg class=\"pot-status\" preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 48.8 39.12\">    \r\n            <defs>\r\n              <clipPath id=\"pot-cursor-event\">\r\n                <path d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\" />             \r\n              </clipPath>        \r\n            </defs>                                \r\n            <path class=\"pot-rate-color-1\"\r\n                d=\"M19.4,6a2,2,0,0,0,2.77-.56l0,0a2,2,0,0,0-.56-2.77l0,0a1.93,1.93,0,0,0-2.69.48v0a2,2,0,0,0,.37,2.8Zm6.8-2.6A1.77,1.77,0,0,0,28.7.88a1.75,1.75,0,0,0-2.47,0l0,0h0a1.75,1.75,0,0,0,0,2.47Zm6.1-1a1.48,1.48,0,0,0,2,.44l.05,0a1.48,1.48,0,0,0,.44-2l0-.05a1.48,1.48,0,0,0-2-.44l-.05,0A1.69,1.69,0,0,0,32.3,2.38Zm5.4.2a1.25,1.25,0,0,0,1.61.74l.09,0a1.25,1.25,0,0,0,.74-1.61l0-.09A1.25,1.25,0,0,0,38.49.84l-.09,0A1.37,1.37,0,0,0,37.7,2.58Zm4.5,1.1a1.12,1.12,0,1,0,.9-1.3h0A1.13,1.13,0,0,0,42.2,3.68Zm3.6,1.7a1,1,0,1,0,1-1A1,1,0,0,0,45.8,5.38Z\"\r\n                    />\r\n            <path class=\"pot-rate-color-2\"\r\n                d=\"M5.4,12.78A13,13,0,0,0,1,22.58a11,11,0,0,0,.2,1.8c.1.6.3,1.2.4,1.8l.3.9a2,2,0,0,0,.4.8,12.9,12.9,0,0,0,.9,1.6,13.39,13.39,0,0,0,12.2,6.1,11,11,0,0,0,1.8-.2A11.63,11.63,0,0,0,19,35a13.82,13.82,0,0,0,6-3.7,12.09,12.09,0,0,0,2-3,14.25,14.25,0,0,0,1.1-3.5,11.53,11.53,0,0,0-1-7.3c.3.5.6,1.1.9,1.7a13.36,13.36,0,0,1,.7,1.8,10.27,10.27,0,0,1,.2,3.9,12.56,12.56,0,0,1-1,3.8,16.83,16.83,0,0,1-2,3.4,9.27,9.27,0,0,1-1.4,1.4c-.5.4-1,.8-1.6,1.2a14.88,14.88,0,0,1-3.6,1.7,13.32,13.32,0,0,1-1.9.5,13.55,13.55,0,0,1-2,.2,13.52,13.52,0,0,1-4-.3A14.49,14.49,0,0,1,6,34.48l-1.5-1.2a14.89,14.89,0,0,1-4.4-8.6,16.23,16.23,0,0,1-.1-2.1,12.65,12.65,0,0,1,2.6-7.2A9.88,9.88,0,0,1,5.4,12.78ZM6.8,9a1.1,1.1,0,0,1,0-.8,1.91,1.91,0,0,1,.3-.8,2.37,2.37,0,0,1,1.5-.9c.3,0,.6-.1.9-.1H12a25.32,25.32,0,0,1,6.6,1.1,23.68,23.68,0,0,1,6.1,2.7,18.48,18.48,0,0,1,2.7,1.9,3.81,3.81,0,0,1,1.1,1.4,1.41,1.41,0,0,1,.1.9,1.79,1.79,0,0,1-.5.7.91.91,0,0,0,.3-.7,1.85,1.85,0,0,0-.2-.7,5.24,5.24,0,0,0-1.1-1c-.9-.6-1.9-1.1-2.8-1.6a39.2,39.2,0,0,0-6-2.3A47,47,0,0,0,12,7.48c-.5-.1-1.1-.1-1.6-.2l-.9-.2H8.7a1.9,1.9,0,0,0-1.3.5A2,2,0,0,0,6.8,9Z\"\r\n                    />\r\n            <g>\r\n              <g class=\"pot-rate-event\">\r\n                    <path class=\"pot-rate-color-3\"\r\n                          [class.pot-rate-0]=\"currentEvent.contribution === 0\"\r\n                          [class.pot-rate-15]=\"currentEvent.contribution > 0 && currentEvent.contribution <= 15\"\r\n                          [class.pot-rate-30]=\"currentEvent.contribution > 15 && currentEvent.contribution <= 30\"\r\n                          [class.pot-rate-45]=\"currentEvent.contribution > 30 && currentEvent.contribution <= 45\"\r\n                          [class.pot-rate-60]=\"currentEvent.contribution > 45 && currentEvent.contribution <= 60\"\r\n                          [class.pot-rate-75]=\"currentEvent.contribution > 60 && currentEvent.contribution <= 75\"\r\n                          [class.pot-rate-90]=\"currentEvent.contribution > 75 && currentEvent.contribution <= 99\"\r\n                          [class.pot-rate-100]=\"currentEvent.contribution === 100\"                       \r\n                        d=\"M1.2,7.15s8.92-2.46,12.38,0,14.22,0,14.22,0V35.91H1.2Z\"\r\n                    />\r\n                </g>\r\n                <path class=\"pot-rate-color-4\"\r\n                    d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\"\r\n                        />\r\n            </g>\r\n            <path class=\"pot-rate-color-5\"\r\n                d=\"M21.5,12.08c-1.2-.4-2.6-.9-4.1-1.3-1.1-.3-2.3-.6-3.3-.8-2.8-.5-4.8-.6-4.9-.1-.1.2.2.6.8.9a25.68,25.68,0,0,0,6.7,2.5,23.56,23.56,0,0,0,7.5,1.2c.4-.1.7-.2.7-.3C25,13.78,23.6,13,21.5,12.08Z\"\r\n                    />\r\n            <text class=\"pot-rate-text\" transform=\"translate(5.78 28.56)\">\r\n                <tspan style=\"letter-spacing: -0.004883254918305625em\"></tspan>\r\n                <tspan x=\"0\" y=\"0\">{{ currentEvent.contribution }}%</tspan>                                        \r\n            </text>\r\n          </svg> \r\n        </ion-col>\r\n        <ion-col size=\"7\" *ngIf=\"currentEvent && currentEvent.status === 'approved'\">\r\n          <ion-button\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\"\r\n                (click)=\"confirmPin()\">\r\n            {{ 'CONTRIBUTE_MSG' | translate }}\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"block-3\">\r\n      <ion-list>\r\n          <ion-item-divider sticky=\"true\">\r\n            <ion-text>\r\n              {{ 'TONTINE_DETAIL_TEXT15' | translate }}\r\n            </ion-text>\r\n            <ion-searchbar placeholder=\"{{ 'M_NAME_TEXT' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForMembers($event)\"></ion-searchbar>\r\n            <ion-icon name=\"contacts\" slot=\"start\"></ion-icon>\r\n          </ion-item-divider>\r\n          <ion-item *ngIf=\"members.length === 0 && !loading\" lines=\"none\">\r\n            {{ 'M_JOIN_TONTINE_EVENT_MSG' | translate }}\r\n          </ion-item>  \r\n          <ion-item *ngIf=\"members.length > 0 && !loading\" lines=\"none\">\r\n            {{ 'TONTINE_DETAIL_TEXT31' | translate }} <b> : {{currentEvent.amount_contributed | commadumper}} {{currentEvent.currency}}</b> \r\n          </ion-item>       \r\n          <ion-item *ngFor=\"let member of members\">\r\n            <ion-avatar slot=\"start\">\r\n              <svg class=\"mytontine-icon active-icon\" preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 48.84 38\">\r\n                <defs>\r\n                    <clipPath id=\"pot-status-path\" transform=\"translate(-0.01 0)\">                            \r\n                        <path class=\"cls-1\" d=\"M1.85,24.61a11.87,11.87,0,0,1,7-12.14l.06,0,.18-.23L9.21,12c-1.1-.78-1.66-1.51-1.48-2.07.45-1.4,5.31-1.24,10.85.35s9.66,4,9.21,5.42c-.17.51-.91.81-2,.91v0s0,0,0,.11a5.29,5.29,0,0,0,.09.7,4,4,0,0,0,.11.49l.07.24c2.14,4.2,1.8,8.88-1.84,13.3-4.63,5.64-14.39,6.08-19.55-.11A12.26,12.26,0,0,1,1.85,24.61Z\"/>\r\n                    </clipPath>\r\n                </defs>                        \r\n                <path class=\"cls-3\" d=\"M5.39,13.66A13,13,0,0,0,1,23.5a11.83,11.83,0,0,0,.17,1.8,13.61,13.61,0,0,0,.45,1.76c.09.29.2.57.31.85a8.75,8.75,0,0,0,.37.83,15.76,15.76,0,0,0,.87,1.59,13,13,0,0,0,3.72,3.84,14.32,14.32,0,0,0,8.52,2.35,16.78,16.78,0,0,0,1.8-.18A14.59,14.59,0,0,0,19,35.95a13.58,13.58,0,0,0,6-3.72,12.35,12.35,0,0,0,2-3,12.86,12.86,0,0,0,1.12-3.47,11.71,11.71,0,0,0-1-7.26,11.06,11.06,0,0,1,.9,1.68A11.31,11.31,0,0,1,28.69,22a12,12,0,0,1,.23,3.86,13.57,13.57,0,0,1-1,3.78,12.86,12.86,0,0,1-2,3.36,13.63,13.63,0,0,1-1.39,1.41,14.14,14.14,0,0,1-1.58,1.19,14.82,14.82,0,0,1-3.58,1.69,13.77,13.77,0,0,1-1.93.46,18.23,18.23,0,0,1-2,.22,15.19,15.19,0,0,1-4-.29A15.44,15.44,0,0,1,6,35.35,12.24,12.24,0,0,1,4.5,34.11,14.78,14.78,0,0,1,.1,25.47a10.93,10.93,0,0,1-.08-2,13.12,13.12,0,0,1,2.61-7.21A11.06,11.06,0,0,1,5.39,13.66ZM6.84,9.9a1.61,1.61,0,0,1-.08-.83,1.93,1.93,0,0,1,.34-.81,2.43,2.43,0,0,1,1.54-.88,6.7,6.7,0,0,1,.86-.09H12a27.35,27.35,0,0,1,6.57,1.06A25.41,25.41,0,0,1,24.66,11a21.85,21.85,0,0,1,2.72,1.94,4.08,4.08,0,0,1,1.08,1.35,1.37,1.37,0,0,1,.09.89,1.32,1.32,0,0,1-.5.68,1.28,1.28,0,0,0,.31-.71,1.11,1.11,0,0,0-.22-.69,3.86,3.86,0,0,0-1.14-1c-.91-.56-1.86-1.08-2.82-1.56a36.4,36.4,0,0,0-6-2.31,40.51,40.51,0,0,0-6.3-1.29c-.53-.06-1.07-.12-1.61-.16L9.5,8a6.82,6.82,0,0,0-.78,0,2,2,0,0,0-1.35.49A1.67,1.67,0,0,0,6.84,9.9Z\" transform=\"translate(-0.01 0)\"/>\r\n                <g class=\"cls-4\">\r\n                    <rect class=\"cls-3\" x=\"1.43\" y=\"7.88\" width=\"26.63\" height=\"28.07\"/>\r\n                    <path class=\"cls-5\" d=\"M8,12.5l1.69,1.43-2.4-.72a4.85,4.85,0,0,0,.65-.64L8,12.5Zm.16,6.41L6.47,17.48l-2.2.26,3.89,1.17ZM4.78,16.05l-1.29.15,0,0-.24.29,3.24,1L4.78,16.05Zm5.58,2.6L8.67,17.23l-2.2.26,3.89,1.17ZM7.49,14.2l3.88,1.17L9.69,13.95l-2.2.26-.74-.63-.41.28,1.14.34h0l-1.92.22,0,0-.06,0,3.71,1.12L7.49,14.2Zm5.57,2.51-1.69-1.43-2.2.26,3.89,1.17ZM4.16,15.53l-.27.26.89.27-.62-.52Zm.62.52,3.89,1.17L7,15.8l-2.2.26Zm7.78,2.35L10.87,17l-2.2.26,3.89,1.17ZM5.41,14.47l-.47.38-.29.25L7,15.8,5.41,14.47ZM7,15.8,10.87,17,9.18,15.54,7,15.8Zm7.77,2.35-1.69-1.43-2.2.26,3.89,1.17Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M26.35,18.92l-2.49-.75,2.05-.24a3.39,3.39,0,0,0,.15.43s.11.2.29.56Zm-2.49-.75-2.05.24,3.63,1.1-1.58-1.33Zm2.95,1.75c-.08-.2-.16-.38-.24-.54l-1.13.13,1.37.41Zm-6,1.64,3.63,1.1-1.58-1.33-2.05.24Zm3.63,1.1h0l-2.05.24L26.06,24l-1.57-1.33,3.07,1v-.11a.6.6,0,0,0,.27-.08h0l-1.29-1-2,.24ZM21.8,18.41l-2.05.24,3.63,1.1L21.8,18.41ZM27,20.84,25.43,19.5l-2.05.24L27,20.84l-2,.24,2.52.76,0-.12c0-.15-.09-.31-.14-.46L27.23,21a1.78,1.78,0,0,0-.07-.22l-.15,0Zm-7.73-.61,3.63,1.1L21.33,20l-2.05.24Zm5.68.86-2.05.24,3.63,1.1L25,21.08Zm2.74,1.69a3.22,3.22,0,0,0-.1-.47l-1.06.12,1.16.35Zm-10-3.88L21.33,20l-1.58-1.33-2.05.24Zm5.68.86L21.33,20,25,21.08l-1.58-1.33Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M15.35,20.54l1.54,1.31-3.55-1.07,2-.23Zm.15,5.92L14,25.16l-2,.23,3.55,1.07Zm-2.16-5.69-2,.23,3.55,1.07-1.54-1.31Zm1.54,1.31,3.55,1.07-1.54-1.31-2,.23Zm-4.48,2L14,25.16l-1.54-1.31-2,.23Zm7.1,2.14L16,24.93l-2,.23,3.55,1.07ZM11.33,21l-2,.23,3.55,1.07L11.33,21Zm5.09,2.38-1.54-1.31-2,.23,3.55,1.07ZM20,24.46l-1.54-1.31-2,.23L20,24.46ZM8.86,22.79l3.55,1.07-1.54-1.31-2,.23Zm3.55,1.07L16,24.93l-1.54-1.31-2,.23ZM19.51,26,18,24.7l-2,.23L19.51,26ZM7.32,21.48l3.55,1.07L9.32,21.25l-2,.23Zm5.56.84-2,.23,3.55,1.07-1.54-1.31Zm1.54,1.31L18,24.7l-1.54-1.31-2,.23Zm7.1,2.14L20,24.46l-2,.23,3.55,1.07Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M3,27.22l1.53,1.29-1.9-.57c-.09-.21-.16-.43-.24-.65l.6-.07H3L2.35,27c0-.16-.1-.33-.14-.49l.83.7L5,27l1.53,1.29L3,27.22Zm4.43-2L6,23.94l-2,.23,3.52,1.06Zm-5.64-.94a.38.38,0,0,0,0,.08l.13,0-.14-.12ZM2,24.4l3.51,1.06L4,24.17H4L2.44,22.88,6,23.94,4.42,22.64l-2,.23h0l-.63.07c0,.19,0,.38,0,.57L4,24.17,2,24.4Zm7,2.12L7.48,25.23l-2,.23L9,26.52Zm-5.5-.83-1.45.17c0,.08,0,.16.05.24L5,27,3.5,25.69Zm5,2.35L7,26.75,5,27,8.55,28ZM2,24.4H1.85c0,.27.05.54.1.81l1.55.47L2,24.4ZM3.5,25.69,7,26.75,5.49,25.46l-2,.23Zm7,2.12L9,26.52l-2,.23,3.52,1.06Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M19.94,32.64l1.91-.22.71.6-.4.29-2.22-.67Zm1.33-4.4-1.91.22,3.38,1-1.47-1.24Zm3.38,1L23.18,28l-1.91.22,3.38,1-1.91.22,2.42.73c.07-.09.13-.19.19-.28l0-.06-.73-.61Zm-2.8,3.16-1.47-1.24-1.91.22,3.38,1Zm1.05.32c.2-.16.39-.33.58-.51l-1.63.19,1.06.32Zm-3.55-4.27-1.91.22,3.38,1-1.47-1.24Zm4.85,2.26-1.47-1.24-1.91.22,3.38,1Zm.49.15c.06-.07.11-.14.16-.22l-.64.07.48.14Zm-4.31.3-1.47-1.24L17,30.15l3.38,1Zm1.91-.22L20.82,29.7l-1.91.22,3.38,1-1.91.22,3.19,1,.06-.06-1.34-1.14Zm-6.76-2,3.38,1-1.47-1.24-1.91.22Zm6.77,2,1.88.57,0,0c.13-.14.24-.29.36-.45l-.36-.31-1.91.22Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M12,32.24l1.51,1.28-3.48-1,2-.23Zm-2,.23L8,32.7l3.48,1L10,32.47Zm5,2.33-1.51-1.28-2,.23,3.48,1ZM6.05,32.93l3.48,1L8,32.7l-2,.23Zm5.45.82-2,.23L13,35,11.5,33.75Zm5,2.33L15,34.8,13,35l3.48,1Zm-2.77.33h.17c.26,0,.53,0,.79,0l-.16-.13-.8.1ZM6.05,32.93H5.94c.32.3.66.57,1,.84.18.14.36.27.55.4h0l.07,0L6.05,32.93Zm8.47,3.38L13,35l-2,.23h0L9.53,34l-2,.23h0l.15.1-.12-.1,3.47,1-1.33.16a12.94,12.94,0,0,0,1.74.6l.67.15L11,35.26l3.47,1Zm0,0,.42.13h0a12.49,12.49,0,0,0,1.38-.11l.38-.06-.23-.19-2,.23Z\" transform=\"translate(-0.01 0)\"/>\r\n                </g>\r\n                <path class=\"cls-5\" d=\"M22.45,13c-1.2-.4-2.6-.9-4.1-1.3-1.1-.3-2.3-.6-3.3-.8-2.8-.5-4.8-.6-4.9-.1-.1.2.2.6.8.9a25.68,25.68,0,0,0,6.7,2.5,23.56,23.56,0,0,0,7.5,1.2c.4-.1.7-.2.7-.3C26,14.73,24.65,13.93,22.45,13Z\" transform=\"translate(-0.01 0)\"/>\r\n              </svg>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3>{{ ( member.user_anonym === \"Y\" ? 'ANONYM_USER_TEXT' : member.FIRSTNAME ) | translate }}\r\n                 {{ ( member.user_anonym === \"Y\" ? '' : member.LASTNAME ? member.LASTNAME : member.USERPHONE ) | translate }} </h3>\r\n                <p><b>{{ 'EVENT_AMOUNT_CONTRIBUTED' | translate }}: </b>  {{ member.montant }} {{ member.MONNAIE_USED }} <small>({{member.type}})</small></p>\r\n                <p><b>{{ 'DATE_EVENT_TEXT' | translate }}: </b>  {{member.created_at | toDateObj | date :'mediumDate' }}</p>\r\n            </ion-label>     \r\n              \r\n          \r\n          </ion-item>\r\n        </ion-list>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <div style=\"min-height: 50px;\"></div>\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "iJel":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/event-detail.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "mDOI":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/event-detail/event-detail-menu/event-detail-menu.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"event-detail-menu-popover\">\r\n    <ion-item (click)=\"inviteJoin()\" *ngIf=\"canIniviteForEvent()\"  lines=\"none\">\r\n      <ion-label>\r\n       {{ 'TONTINE_INVITED_TEXT1' | translate }}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"canShareCode()\" (click)=\"shareCode()\" lines=\"none\">\r\n      <ion-label>\r\n        {{ 'MENU_SHARE_CODE_TONTINE' | translate }}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"canSendNotification()\" (click)=\"sendNotification()\" lines=\"none\">\r\n      <ion-label>\r\n      {{ 'M_SEND_MESSAGE' | translate }}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item  *ngIf=\"isCurrentUser()\"  (click)=\"ticketsTontine()\" lines=\"none\">\r\n      <ion-label>\r\n       {{'MY_TICKETS_TEXT' | translate }}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"canUpdateEvent()\" (click)=\"updateTontine()\" lines=\"none\">\r\n      <ion-label>\r\n      {{ 'M_UPDATE' | translate }}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item  *ngIf=\"canDeleteEvent()\" (click)=\"deleteTontine()\" lines=\"none\">\r\n      <ion-label>\r\n        {{ 'TEXT_DELETE' | translate }}\r\n      </ion-label>\r\n    </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "oGWr":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/event-info-edit/event-info-edit.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1pbmZvLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

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
//# sourceMappingURL=tontines-events-event-detail-event-detail-module.js.map