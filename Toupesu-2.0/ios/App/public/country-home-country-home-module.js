(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-home-country-home-module"],{

/***/ "6awA":
/*!**************************************************************!*\
  !*** ./src/app/auth/terms/country-home/country-home.page.ts ***!
  \**************************************************************/
/*! exports provided: CountryHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryHomePage", function() { return CountryHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_country_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./country-home.page.html */ "Ahbz");
/* harmony import */ var _country_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-home.page.scss */ "hlg+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CountryHomePage = class CountryHomePage {
    constructor() { }
    ngOnInit() {
    }
};
CountryHomePage.ctorParameters = () => [];
CountryHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-country-home',
        template: _raw_loader_country_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_country_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CountryHomePage);



/***/ }),

/***/ "Ahbz":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms/country-home/country-home.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth/terms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n      <ion-title>{{ 'TERM_COUNTRY_DOMICILE' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ol type=\"1\">\n      <li> {{ 'TERM_COUNTRY_DOMICILE_TEXT1' | translate }} </li>\n      <li> {{ 'TERM_COUNTRY_DOMICILE_TEXT2' | translate }} </li>\n    </ol>\n</ion-content>\n");

/***/ }),

/***/ "hlg+":
/*!****************************************************************!*\
  !*** ./src/app/auth/terms/country-home/country-home.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWhvbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "v6tB":
/*!****************************************************************!*\
  !*** ./src/app/auth/terms/country-home/country-home.module.ts ***!
  \****************************************************************/
/*! exports provided: CountryHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryHomePageModule", function() { return CountryHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _country_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country-home.page */ "6awA");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _country_home_page__WEBPACK_IMPORTED_MODULE_6__["CountryHomePage"]
    }
];
let CountryHomePageModule = class CountryHomePageModule {
};
CountryHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_country_home_page__WEBPACK_IMPORTED_MODULE_6__["CountryHomePage"]]
    })
], CountryHomePageModule);



/***/ })

}]);
//# sourceMappingURL=country-home-country-home-module.js.map