(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-feedback-feedback-module"],{

/***/ "F1RL":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/contact/feedback/feedback.module.ts ***!
  \***************************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "aPFO");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]
    }
];
let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })
], FeedbackPageModule);



/***/ }),

/***/ "Pgun":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/contact/feedback/feedback.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "TT9/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/contact/feedback/feedback.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo2\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center title-md-right\">\n      <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n    <ion-title>{{ 'MENU_FEEDBACK' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-profil\">\n  <form [formGroup]=\"contactForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-padding\">\n          <ion-label color=\"dark\">\n            <span [innerHTML]=\"'CONTACT_MSG1' | translate\"></span>\n            <span [innerHTML]=\"'CONTACT_MSG2' | translate\"></span>\n            <span [innerHTML]=\"'CONTACT_MSG3' | translate\"></span>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{ 'USERNAME_TEXT' | translate }}</ion-label>\n            <ion-input type=\"text\" formControlName=\"username\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.username\">\n              <div class=\"error-message\"\n                *ngIf=\"username.hasError(validation.type) && (username.dirty || username.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{'EMAIL_TEXT' | translate }}</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.email\">\n              <div class=\"error-message\" *ngIf=\"email.hasError(validation.type) && (email.dirty || email.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{ 'TYPE_TEXT' | translate }}</ion-label>\n            <ion-select formControlName=\"typeSurvey\">\n              <ion-select-option [value]=\"1\">{{ 'COMMENTS_TEXT' | translate }}</ion-select-option>\n              <ion-select-option [value]=\"2\">{{ 'BUG_REPORTS_TEXT' | translate }}</ion-select-option>\n              <ion-select-option [value]=\"3\">{{ 'CUSTOMER_EXPERIENCE_TEXT' | translate }}</ion-select-option>\n              <ion-select-option [value]=\"4\">{{ 'QUESTIONS_TEXT' | translate }}</ion-select-option>\n              <ion-select-option [value]=\"5\">{{ 'OTHERS_TEXT' | translate }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.typeSurvey\">\n              <div class=\"error-message\"\n                *ngIf=\"typeSurvey.hasError(validation.type) && (typeSurvey.dirty || typeSurvey.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">{{ 'FEEDBACK_TEXT2' | translate }}</ion-label>\n            <ion-textarea type=\"text\" formControlName=\"suggestion\"></ion-textarea>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.message\">\n              <div class=\"error-message\"\n                *ngIf=\"suggestion.hasError(validation.type) && (suggestion.dirty || suggestion.touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"validation.message\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n<!--       <ion-row>\n        <ion-col>\n          <rating formControlName=\"rating\" readonly=\"false\" size=\"default\"></rating>\n          <div class=\"validation-errors\">\n            <ng-container *ngIf=\"ratingMsg\">\n              <div class=\"error-message\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span [innerHTML]=\"'REQUIRED_FIELD_INVALID' | translate\"></span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row> -->\n\n    </ion-grid>\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n  <ion-button expand=\"full\" [disabled]=\"loading || contactForm.invalid\" (click)=\"saveFeedbacks()\" color=\"warning\"\n    class=\"ion-text-uppercase\" shape=\"round\">\n    {{'SEND_TEXT' | translate}}\n  </ion-button>\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\n</ion-footer>");

/***/ }),

/***/ "aPFO":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/contact/feedback/feedback.page.ts ***!
  \*************************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback.page.html */ "TT9/");
/* harmony import */ var _feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.page.scss */ "Pgun");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/contact.service */ "WDdi");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");










let FeedbackPage = class FeedbackPage {
    constructor(fb, translate, userService, contact, errorService, ui) {
        this.fb = fb;
        this.translate = translate;
        this.userService = userService;
        this.contact = contact;
        this.errorService = errorService;
        this.ui = ui;
        this.UserLoggedUsername = '';
        this.UserLoggedEmail = '';
        this.loading = false;
        this.ratingMsg = false;
        this.states = [];
    }
    ngOnInit() {
        this.initContactForm();
        this.validationMessage();
    }
    // Form getters 
    get username() {
        return this.contactForm.get('username');
    }
    get suggestion() {
        return this.contactForm.get('suggestion');
    }
    get email() {
        return this.contactForm.get('email');
    }
    get rating() {
        return this.contactForm.get('rating');
    }
    get typeSurvey() {
        return this.contactForm.get('typeSurvey');
    }
    // Validation message
    validationMessage() {
        this.translate.get(['REQUIRED_FIELD_INVALID', 'REQUIRED_FIELD_TEXT']).subscribe(trans => {
            this.validationMessages = {
                username: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ],
                typeSurvey: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ],
                suggestion: [
                    { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
                    { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
                ],
                rating: [
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
        if (this.userService.getUserData()) {
            this.UserLoggedEmail = this.userService.getUserData().email;
            this.UserLoggedUsername = this.userService.getUserData().username;
        }
        else {
            this.UserLoggedEmail = '';
            this.UserLoggedUsername = '';
        }
        this.contactForm = this.fb.group({
            username: [this.UserLoggedUsername],
            suggestion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            email: [this.UserLoggedEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}[.][a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            rating: ['4'],
            typeSurvey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // Save the feedbacks
    saveFeedbacks() {
        this.loading = true;
        this.ratingMsg = false;
        if (this.contactForm.valid && this.contactForm.value.rating) {
            this.ratingMsg = false;
            if (this.contactForm.value.typeSurvey === 1) {
                this.contactForm.value.typeSurvey = "Comments";
            }
            if (this.contactForm.value.typeSurvey === 2) {
                this.contactForm.value.typeSurvey = "Bug Reports";
            }
            if (this.contactForm.value.typeSurvey === 3) {
                this.contactForm.value.typeSurvey = "Customer Experience";
            }
            if (this.contactForm.value.typeSurvey === 4) {
                this.contactForm.value.typeSurvey = "Questions";
            }
            if (this.contactForm.value.typeSurvey === 5) {
                this.contactForm.value.typeSurvey = "Others";
            }
            this.contact.saveFeedbacks(this.contactForm.value).subscribe((reponse) => {
                this.loading = false;
                if (reponse && reponse.message === 'success') {
                    this.translate.get('FEEDBACK_MSG1').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                    this.initContactForm();
                }
            }, error => {
                this.loading = false;
                if (error && error.error && error.error.message === 'remplir_les_champs_username_et_note_sur_5') {
                    this.translate.get('FEEDBACK_MSG2').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                }
                else {
                    this.errorService.manageError(error);
                }
            });
        }
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _service_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] }
];
FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback',
        template: _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedbackPage);



/***/ })

}]);
//# sourceMappingURL=contact-feedback-feedback-module.js.map