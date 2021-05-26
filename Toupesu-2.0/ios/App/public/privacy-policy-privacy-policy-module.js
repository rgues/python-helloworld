(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-policy-privacy-policy-module"],{

/***/ "NOiH":
/*!********************************************************************!*\
  !*** ./src/app/auth/terms/privacy-policy/privacy-policy.module.ts ***!
  \********************************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-policy.page */ "XEtR");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]
    }
];
let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ "Vt2C":
/*!********************************************************************!*\
  !*** ./src/app/auth/terms/privacy-policy/privacy-policy.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "XEtR":
/*!******************************************************************!*\
  !*** ./src/app/auth/terms/privacy-policy/privacy-policy.page.ts ***!
  \******************************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./privacy-policy.page.html */ "zZJ8");
/* harmony import */ var _privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy-policy.page.scss */ "Vt2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPolicyPage.ctorParameters = () => [];
PrivacyPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrivacyPolicyPage);



/***/ }),

/***/ "zZJ8":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms/privacy-policy/privacy-policy.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth/terms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n      <ion-title>{{ 'TERM_PRIVACY_POLICY' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div [innerHTML]=\"'TERM_PRIVACY_POLICY_TEXT1' | translate\"></div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=privacy-policy-privacy-policy-module.js.map