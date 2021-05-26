(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancellation-cancellation-module"],{

/***/ "1shV":
/*!**************************************************************!*\
  !*** ./src/app/auth/terms/cancellation/cancellation.page.ts ***!
  \**************************************************************/
/*! exports provided: CancellationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationPage", function() { return CancellationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cancellation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cancellation.page.html */ "ieND");
/* harmony import */ var _cancellation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancellation.page.scss */ "57Zv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CancellationPage = class CancellationPage {
    constructor() { }
    ngOnInit() {
    }
};
CancellationPage.ctorParameters = () => [];
CancellationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cancellation',
        template: _raw_loader_cancellation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cancellation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CancellationPage);



/***/ }),

/***/ "57Zv":
/*!****************************************************************!*\
  !*** ./src/app/auth/terms/cancellation/cancellation.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWxsYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ieND":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms/cancellation/cancellation.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth/terms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n      <ion-title>{{ 'TERM_CANCELATION_REFUND_POLICY' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <p [innerHTML]=\"'TERM_CANCELTEXT1' | translate\"></p>\n    <p [innerHTML]=\"'TERM_CANCELTEXT2' | translate\"></p>\n</ion-content>");

/***/ }),

/***/ "uswa":
/*!****************************************************************!*\
  !*** ./src/app/auth/terms/cancellation/cancellation.module.ts ***!
  \****************************************************************/
/*! exports provided: CancellationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationPageModule", function() { return CancellationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cancellation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancellation.page */ "1shV");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _cancellation_page__WEBPACK_IMPORTED_MODULE_6__["CancellationPage"]
    }
];
let CancellationPageModule = class CancellationPageModule {
};
CancellationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cancellation_page__WEBPACK_IMPORTED_MODULE_6__["CancellationPage"]]
    })
], CancellationPageModule);



/***/ })

}]);
//# sourceMappingURL=cancellation-cancellation-module.js.map