(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-us-contact-us-module"],{

/***/ "Jj/y":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/contact/contact-us/contact-us.page.ts ***!
  \*****************************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-us.page.html */ "ZAyT");
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.page.scss */ "lD9v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/contact.service */ "WDdi");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var src_app_shared_prefix_prefix_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/prefix/prefix.component */ "5JTu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");













let ContactUsPage = class ContactUsPage {
    constructor(fb, translate, modatCtrl, formUtil, location, contact, errorService, ui) {
        this.fb = fb;
        this.translate = translate;
        this.modatCtrl = modatCtrl;
        this.formUtil = formUtil;
        this.location = location;
        this.contact = contact;
        this.errorService = errorService;
        this.ui = ui;
        this.loading = false;
        this.states = [];
    }
    ngOnInit() {
        this.initContactForm();
        this.validationMessage();
        this.getWordCountries(false);
    }
    // Form getters
    get firstname() {
        return this.contactForm.get('firstname');
    }
    get lastname() {
        return this.contactForm.get('lastname');
    }
    get email() {
        return this.contactForm.get('email');
    }
    get phone() {
        return this.contactForm.get('phone');
    }
    get message() {
        return this.contactForm.get('message');
    }
    // Validation message
    validationMessage() {
        this.translate.get(['REQUIRED_FIELD_INVALID', 'REQUIRED_FIELD_TEXT']).subscribe(trans => {
            this.validationMessages = {
                firstname: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ],
                lastname: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ],
                message: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ],
                phone: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ],
                email: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ]
            };
        });
    }
    // Init the user form with his data
    initContactForm() {
        this.contactForm = this.fb.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            prefix: [''],
            country: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}[.][a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]{7,10}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    // Get all the word countries
    getWordCountries(refresh) {
        this.location.getWordCountries(refresh).then((countries) => {
            if (countries && countries.length > 0) {
                this.states = countries;
                this.getCurrentCountry(false);
            }
        });
    }
    // Set the default country
    getCurrentCountry(refresher) {
        this.location.getCurrentWordCountryInfo(refresher).then((country) => {
            if (country) {
                this.contactForm.get('prefix').setValue(country.country_prefixe);
                this.contactForm.get('country').setValue(country.code_country);
            }
        }).catch(error => {
        });
    }
    // Update the phone value
    updatePhoneFormat(phone) {
        if (this.formUtil.validatePhone(phone)) {
            this.contactForm.get('phone').setValue(this.contactForm.value.prefix + this.contactForm.value.phone);
        }
    }
    // Open the prfix  modal
    showPrefix() {
        this.modatCtrl
            .create({
            component: src_app_shared_prefix_prefix_component__WEBPACK_IMPORTED_MODULE_9__["PrefixComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.role === 'select') {
                    this.states.forEach(country => {
                        if (country.code_country === ans.data) {
                            this.contactForm.get('prefix').setValue(country.country_prefixe);
                            this.contactForm.get('country').setValue(country.code_country);
                        }
                    });
                }
            });
        });
    }
    // Save the contact
    saveContact() {
        this.loading = true;
        this.updatePhoneFormat(this.contactForm.value.phone);
        this.contact.sendContact(this.contactForm.value).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('CONTACT_MSG_SENT_TEXT').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.initContactForm();
                this.getWordCountries(false);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.remplir_tous_les_champs) {
                this.translate.get('TOPUP_MSG2').subscribe(value => {
                    this.ui.presentToast(value);
                });
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_11__["FormUtilsService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"] },
    { type: _service_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__["UiService"] }
];
ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactUsPage);



/***/ }),

/***/ "WjMG":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/contact/contact-us/contact-us.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "Jj/y");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/contact.service */ "WDdi");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");









const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]],
        providers: [_service_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "ZAyT":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/contact/contact-us/contact-us.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo2\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center title-md-right\">\n      <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n    <ion-title>{{ 'CONTACT_PAGE_TITLE' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-profil\">\n  <form [formGroup]=\"contactForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-padding\">\n          <ion-label color=\"dark\">\n            <span [innerHTML]=\"'CONTACT_MSG1' | translate\"></span>\n            <span [innerHTML]=\"'CONTACT_MSG2' | translate\"></span>\n            <span [innerHTML]=\"'CONTACT_MSG3' | translate\"></span>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{ 'FIRSTNAME_TEXT' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.firstname\">\n              <div class=\"error-message\"\n                *ngIf=\"firstname.hasError(validation.type) && (firstname.dirty || firstname.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{'LASTNAME_TEXT' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.lastname\">\n              <div class=\"error-message\"\n                *ngIf=\"lastname.hasError(validation.type) && (lastname.dirty || lastname.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{'EMAIL_TEXT' | translate }}</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.email\">\n              <div class=\"error-message\" *ngIf=\"email.hasError(validation.type) && (email.dirty || email.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-item (click)=\"showPrefix()\">\n                <ion-label position=\"floating\">+</ion-label>\n                <ion-input type=\"text\" placeholder=\"{{contactForm.value.prefix}}\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">{{'PHONE_TEXT' | translate }}</ion-label>\n                <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.phone\">\n              <div class=\"error-message\" *ngIf=\"phone.hasError(validation.type) && (phone.dirty || phone.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{ 'M_MESSAGE' | translate }}</ion-label>\n            <ion-textarea type=\"text\" formControlName=\"message\"></ion-textarea>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.message\">\n              <div class=\"error-message\"\n                *ngIf=\"message.hasError(validation.type) && (message.dirty || message.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n  <ion-button expand=\"full\" [disabled]=\"loading || contactForm.invalid\" (click)=\"saveContact()\" color=\"warning\"\n    class=\"ion-text-uppercase\" shape=\"round\">\n    {{'SEND_TEXT' | translate}}\n  </ion-button>\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\n</ion-footer>");

/***/ }),

/***/ "lD9v":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/contact/contact-us/contact-us.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXVzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=contact-contact-us-contact-us-module.js.map