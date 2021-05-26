(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-policy-delivery-policy-module"],{

/***/ "0vPK":
/*!**********************************************************************!*\
  !*** ./src/app/auth/terms/delivery-policy/delivery-policy.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1wb2xpY3kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "CTz5":
/*!**********************************************************************!*\
  !*** ./src/app/auth/terms/delivery-policy/delivery-policy.module.ts ***!
  \**********************************************************************/
/*! exports provided: DeliveryPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPolicyPageModule", function() { return DeliveryPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _delivery_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-policy.page */ "LtEa");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _delivery_policy_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPolicyPage"]
    }
];
let DeliveryPolicyPageModule = class DeliveryPolicyPageModule {
};
DeliveryPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_delivery_policy_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPolicyPage"]]
    })
], DeliveryPolicyPageModule);



/***/ }),

/***/ "LtEa":
/*!********************************************************************!*\
  !*** ./src/app/auth/terms/delivery-policy/delivery-policy.page.ts ***!
  \********************************************************************/
/*! exports provided: DeliveryPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPolicyPage", function() { return DeliveryPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delivery_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delivery-policy.page.html */ "V6Lo");
/* harmony import */ var _delivery_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-policy.page.scss */ "0vPK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DeliveryPolicyPage = class DeliveryPolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
DeliveryPolicyPage.ctorParameters = () => [];
DeliveryPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-delivery-policy',
        template: _raw_loader_delivery_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delivery_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeliveryPolicyPage);



/***/ }),

/***/ "V6Lo":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms/delivery-policy/delivery-policy.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth/terms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n      <ion-title>{{ 'TERM_DELIVERY_POLICY' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p> {{ 'TERM_DELIVERY_POLICY_TEXT1' | translate }}</p>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=delivery-policy-delivery-policy-module.js.map