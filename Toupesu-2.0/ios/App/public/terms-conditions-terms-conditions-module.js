(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-conditions-terms-conditions-module"],{

/***/ "+fl7":
/*!**********************************************************************!*\
  !*** ./src/app/auth/terms/terms-conditions/terms-conditions.page.ts ***!
  \**********************************************************************/
/*! exports provided: TermsConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function() { return TermsConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms-conditions.page.html */ "L8VZ");
/* harmony import */ var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-conditions.page.scss */ "COgP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TermsConditionsPage = class TermsConditionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsConditionsPage.ctorParameters = () => [];
TermsConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsConditionsPage);



/***/ }),

/***/ "COgP":
/*!************************************************************************!*\
  !*** ./src/app/auth/terms/terms-conditions/terms-conditions.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1jb25kaXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "L8VZ":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms/terms-conditions/terms-conditions.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth/terms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n      <ion-title>{{ 'TERM_TERMS_AND_CONDITIONS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div [innerHTML]=\"'TERM_TERMS_AND_CONDITIONS_TEXT1' |  translate\"></div>\n</ion-content>\n");

/***/ }),

/***/ "nIys":
/*!************************************************************************!*\
  !*** ./src/app/auth/terms/terms-conditions/terms-conditions.module.ts ***!
  \************************************************************************/
/*! exports provided: TermsConditionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function() { return TermsConditionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-conditions.page */ "+fl7");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]
    }
];
let TermsConditionsPageModule = class TermsConditionsPageModule {
};
TermsConditionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]]
    })
], TermsConditionsPageModule);



/***/ })

}]);
//# sourceMappingURL=terms-conditions-terms-conditions-module.js.map