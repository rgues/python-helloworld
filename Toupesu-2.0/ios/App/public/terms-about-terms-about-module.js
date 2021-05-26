(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-about-terms-about-module"],{

/***/ "PDG6":
/*!************************************************************!*\
  !*** ./src/app/auth/terms/terms-about/terms-about.page.ts ***!
  \************************************************************/
/*! exports provided: TermsAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAboutPage", function() { return TermsAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms-about.page.html */ "c24h");
/* harmony import */ var _terms_about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-about.page.scss */ "XaNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TermsAboutPage = class TermsAboutPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsAboutPage.ctorParameters = () => [];
TermsAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms-about',
        template: _raw_loader_terms_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsAboutPage);



/***/ }),

/***/ "UDfP":
/*!**************************************************************!*\
  !*** ./src/app/auth/terms/terms-about/terms-about.module.ts ***!
  \**************************************************************/
/*! exports provided: TermsAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAboutPageModule", function() { return TermsAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _terms_about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-about.page */ "PDG6");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _terms_about_page__WEBPACK_IMPORTED_MODULE_6__["TermsAboutPage"]
    }
];
let TermsAboutPageModule = class TermsAboutPageModule {
};
TermsAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_terms_about_page__WEBPACK_IMPORTED_MODULE_6__["TermsAboutPage"]]
    })
], TermsAboutPageModule);



/***/ }),

/***/ "XaNA":
/*!**************************************************************!*\
  !*** ./src/app/auth/terms/terms-about/terms-about.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1hYm91dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "c24h":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms/terms-about/terms-about.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth/terms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n      <ion-title>{{ 'TERM_ABOUT_US' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <p [innerHTML]=\"'TERM_ABOUT_US_TEXT' | translate\"></p>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=terms-about-terms-about-module.js.map