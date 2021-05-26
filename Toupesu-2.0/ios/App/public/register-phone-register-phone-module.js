(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-phone-register-phone-module"],{

/***/ "Ek1z":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register-phone/register-phone.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/auth\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding register-phone\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"ion-text-center\"  *ngIf=\"isLoadingShow\">\r\n    <p> <ion-spinner name=\"circles\"></ion-spinner></p>\r\n    <p>{{'M_COUNTRY_LOADING' | translate}}</p> \r\n  </div>\r\n \r\n  <form [formGroup]=\"phoneRegisterForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <p>{{'REGISTER_MMSG1' | translate}} <br /> {{'M_PIN_MSG' | translate}}\r\n          </p>        \r\n        </ion-col>\r\n      </ion-row>  \r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item (click)=\"showCountries()\">\r\n            <ion-label>{{'REGISTER_MTEXT1' | translate}} : </ion-label>\r\n            <p><strong> {{ getCountryName(phoneRegisterForm.value) }} </strong> </p>          \r\n            <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\r\n          </ion-item>  \r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.country_id\">\r\n              <div class=\"error-message\" *ngIf=\"country.hasError(validation.type) && (country.dirty || country.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>     \r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">+</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"phoneid\"></ion-input>\r\n          </ion-item>        \r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'REGISTER_MPHONE' | translate }}</ion-label>\r\n            <ion-input type=\"tel\" (ionChange)=\"removeSpace()\" formControlName=\"phone_number\" (keyup.enter)=\"confirmPhone()\"></ion-input>\r\n          </ion-item>        \r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.phoneid\">\r\n              <div class=\"error-message\" *ngIf=\"phoneid.hasError(validation.type) && (phoneid.dirty || phoneid.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n            <ng-container *ngFor=\"let validation of validationMessages.phone\">\r\n              <div class=\"error-message\" *ngIf=\"phone.hasError(validation.type) && (phone.dirty || phone.touched)\">\r\n                <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>    \r\n        </ion-col>\r\n      </ion-row> \r\n    </ion-grid>\r\n  </form>  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\"  [disabled]=\"phoneRegisterForm.invalid\"\r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\" (click)=\"confirmPhone()\">\r\n        {{'NEXT_TEXT' | translate}}\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "UeVJ":
/*!**************************************************************!*\
  !*** ./src/app/auth/register-phone/register-phone.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1waG9uZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "W8l7":
/*!**************************************************************!*\
  !*** ./src/app/auth/register-phone/register-phone.module.ts ***!
  \**************************************************************/
/*! exports provided: RegisterPhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPhonePageModule", function() { return RegisterPhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-phone.page */ "g//Y");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _register_phone_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPhonePage"]
    }
];
let RegisterPhonePageModule = class RegisterPhonePageModule {
};
RegisterPhonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _register_phone_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPhonePage"]
        ]
    })
], RegisterPhonePageModule);



/***/ }),

/***/ "g//Y":
/*!************************************************************!*\
  !*** ./src/app/auth/register-phone/register-phone.page.ts ***!
  \************************************************************/
/*! exports provided: RegisterPhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPhonePage", function() { return RegisterPhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_phone_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register-phone.page.html */ "Ek1z");
/* harmony import */ var _register_phone_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-phone.page.scss */ "UeVJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_countries_countries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/countries/countries.component */ "KNHg");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/plugin.service */ "NxmL");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");













let RegisterPhonePage = class RegisterPhonePage {
    constructor(fb, translate, plugin, form, alertController, loadingController, location, userService, router, modatCtrl) {
        this.fb = fb;
        this.translate = translate;
        this.plugin = plugin;
        this.form = form;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.location = location;
        this.userService = userService;
        this.router = router;
        this.modatCtrl = modatCtrl;
        this.states = [];
        this.isLoadingShow = false;
        this.hasFocus = false;
        this.initMessage();
    }
    ngOnInit() {
        this.initFormRegistration(null);
        this.isLoadingShow = true;
        this.getWordCountries(false);
        this.getUserUUID();
    }
    // Form getters
    get country() {
        return this.phoneRegisterForm.get('country_id');
    }
    get phoneid() {
        return this.phoneRegisterForm.get('phoneid');
    }
    get phone() {
        return this.phoneRegisterForm.get('phone_number');
    }
    // Initialize the form
    initFormRegistration(data) {
        this.phoneRegisterForm = this.fb.group({
            countryName: [data ? data.countryName : ''],
            phone_prefix: [data ? data.phone_prefix : ''],
            code_country: [data ? data.code_country : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country_id: [data ? data.country_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prefix_country_with_plus: [data && data.prefix_country_with_plus ? data.prefix_country_with_plus : ''],
            country_key: [data ? data.country_key : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phoneid: [data ? data.phoneid : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)
                ])],
            phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]{6,13}$')])
            ]
        });
    }
    // Init the form message
    initMessage() {
        this.translate.get([
            'REGISTER_COUNTRY_TEXT',
            'REGISTER_COUNTRY_PREFIX',
            'REGISTER_COUNTRY_PREFIX_LENGTH',
            'REGISTER_PHONE_REQUIRED',
            'REGISTER_PHONE_INVALID'
        ]).subscribe(value => {
            this.validationMessages = {
                country_id: [
                    { type: 'required', message: value.REGISTER_COUNTRY_TEXT }
                ],
                phoneid: [
                    { type: 'required', message: value.REGISTER_COUNTRY_PREFIX },
                    { type: 'maxlength', message: value.REGISTER_COUNTRY_PREFIX_LENGTH }
                ],
                phone: [
                    { type: 'required', message: value.REGISTER_PHONE_REQUIRED },
                    { type: 'pattern', message: value.REGISTER_PHONE_INVALID }
                ]
            };
        });
    }
    // set focus
    setFocusOnInput() {
        this.hasFocus = true;
    }
    // Refresh the list
    refreSher(event) {
        this.getWordCountries(true);
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    // Get the user Id
    getUserUUID() {
        this.plugin.getIds().subscribe(id => {
            if (id) {
                this.userService.setUserDevice(id);
            }
        });
    }
    // Get all the word countries
    getWordCountries(refresh) {
        this.location.getWordCountries(refresh).then((countries) => {
            this.isLoadingShow = false;
            if (countries && countries.length > 0) {
                this.states = countries;
                this.getCurrentCountry(false);
            }
        });
    }
    // get the country name
    getCountryName(formData) {
        return formData.countryName && formData.countryName.length < 10 ? formData.countryName : formData.countryName ? formData.countryName.substring(0, 9) + '...' : '';
    }
    // Set the default country
    getCurrentCountry(refresher) {
        this.location.getCurrentWordCountryInfo(refresher).then((country) => {
            if (country) {
                const formData = {
                    countryName: country.country_label,
                    code_country: country.code_country,
                    country_id: country.country_id,
                    country_key: country.country_key,
                    phoneid: country.country_prefixe,
                    phone_prefix: country.country_prefixe,
                    prefix_country_with_plus: country.code_country !== 'CM' && country.code_country !== 'ZA' ? `+${country.country_prefixe}` : ''
                };
                this.initFormRegistration(formData);
            }
        }).catch(error => {
        });
    }
    // open the countries modal
    showCountries() {
        this.modatCtrl
            .create({
            component: _shared_countries_countries_component__WEBPACK_IMPORTED_MODULE_9__["CountriesComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.role === 'select') {
                    this.phoneRegisterForm.get('code_country').setValue(ans.data);
                    this.updateCountry();
                }
            });
        });
    }
    // Update the country
    updateCountry() {
        if (this.states && this.states.length > 0) {
            const currentCountry = this.phoneRegisterForm.value.code_country;
            this.states.forEach(state => {
                if (state.code_country === currentCountry) {
                    this.phoneRegisterForm.get('countryName').setValue(state.country_label);
                    this.phoneRegisterForm.get('country_id').setValue(state.country_id);
                    this.phoneRegisterForm.get('phoneid').setValue(state.country_prefixe);
                    this.phoneRegisterForm.get('phone_prefix').setValue(state.country_prefixe);
                    this.phoneRegisterForm.get('country_key').setValue(state.country_key);
                    state.code_country !== 'CM' && state.code_country !== 'ZA' ? this.phoneRegisterForm.get('prefix_country_with_plus').setValue(`+${state.country_prefixe}`) :
                        this.phoneRegisterForm.get('prefix_country_with_plus').setValue('');
                }
            });
        }
        else {
            this.getWordCountries(false);
        }
    }
    // Remove space
    removeSpace() {
        this.phoneRegisterForm.get('phone_number').setValue(this.form.removeSpace(this.phoneRegisterForm.value.phone_number));
    }
    // Show the confirm phone number message
    confirmPhoneMessage(translation) {
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
                            this.setFocusOnInput();
                        }
                    }, {
                        text: `${translation[3]}`,
                        handler: () => {
                            this.gotoNextStep();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Check the confirm phone
    confirmPhone() {
        const messages = [];
        this.translate.get(['M_CONFIRM_PHONE_TITLE', 'M_CONFIRM_PHONE_MESSAGE', 'EDIT_TEXT', 'YES_TEXT'])
            .subscribe(trans => {
            messages.push(trans.M_CONFIRM_PHONE_TITLE);
            messages.push(`${trans.M_CONFIRM_PHONE_MESSAGE}  <strong>+${this.phoneRegisterForm.value.phone_prefix} ${this.formatPhoneNumber(this.phoneRegisterForm.value.phone_number, this.phoneRegisterForm.value.phone_prefix)} </strong>`);
            messages.push(trans.EDIT_TEXT);
            messages.push(trans.YES_TEXT);
            this.confirmPhoneMessage(messages);
        });
    }
    // Go to the next Step
    gotoNextStep() {
        this.userService.setRegistrationData(this.phoneRegisterForm.value);
        this.router.navigate(['/auth/verify-phone']);
    }
    // Format phone number
    formatPhoneNumber(phoneNumberString, prefix) {
        return this.form.formatPhoneNumber(phoneNumberString, prefix);
    }
};
RegisterPhonePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_11__["PluginService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_10__["FormUtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
RegisterPhonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-phone',
        template: _raw_loader_register_phone_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_phone_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPhonePage);



/***/ })

}]);
//# sourceMappingURL=register-phone-register-phone-module.js.map