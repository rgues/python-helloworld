(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"],{

/***/ "J8Kw":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms/terms.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n      <ion-title>{{'TERMS_TITLE' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-img class=\"inner-image\" [src]=\"'assets/policy.svg'\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list>\n          <ion-item routerLink=\"about\" detail>\n            <ion-text>{{ 'TERM_ABOUT_US' | translate }}</ion-text>\n          </ion-item>\n          <ion-item routerLink=\"terms-conditions\" detail>\n            <ion-text>{{ 'TERM_TERMS_AND_CONDITIONS' | translate }}</ion-text>\n          </ion-item>\n          <ion-item routerLink=\"delivery-policy\" detail>\n            <ion-text>{{ 'TERM_DELIVERY_POLICY' | translate }}</ion-text>\n          </ion-item>\n          <ion-item routerLink=\"privacy-policy\" detail>\n            <ion-text>{{ 'TERM_PRIVACY_POLICY' | translate }}</ion-text>\n          </ion-item>\n          <ion-item routerLink=\"cancellation\" detail>\n            <ion-text>{{ 'TERM_CANCELATION_REFUND_POLICY' | translate }}</ion-text>\n          </ion-item>\n          <ion-item routerLink=\"country-home\" detail>\n            <ion-text>{{ 'TERM_COUNTRY_DOMICILE' | translate }}</ion-text>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "NgpC":
/*!********************************************!*\
  !*** ./src/app/auth/terms/terms.module.ts ***!
  \********************************************/
/*! exports provided: TermsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms.page */ "w5ku");
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-routing.module */ "j2CG");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








let TermsPageModule = class TermsPageModule {
};
TermsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _terms_routing_module__WEBPACK_IMPORTED_MODULE_6__["TermsRoutingModule"]
        ],
        declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_5__["TermsPage"]]
    })
], TermsPageModule);



/***/ }),

/***/ "YhEL":
/*!********************************************!*\
  !*** ./src/app/auth/terms/terms.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "j2CG":
/*!****************************************************!*\
  !*** ./src/app/auth/terms/terms-routing.module.ts ***!
  \****************************************************/
/*! exports provided: TermsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsRoutingModule", function() { return TermsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms.page */ "w5ku");




const routes = [
    {
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_3__["TermsPage"]
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-about-terms-about-module */ "terms-about-terms-about-module").then(__webpack_require__.bind(null, /*! ./terms-about/terms-about.module */ "UDfP")).then(m => m.TermsAboutPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-conditions-terms-conditions-module */ "terms-conditions-terms-conditions-module").then(__webpack_require__.bind(null, /*! ./terms-conditions/terms-conditions.module */ "nIys")).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'delivery-policy',
        loadChildren: () => __webpack_require__.e(/*! import() | delivery-policy-delivery-policy-module */ "delivery-policy-delivery-policy-module").then(__webpack_require__.bind(null, /*! ./delivery-policy/delivery-policy.module */ "CTz5")).then(m => m.DeliveryPolicyPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacy-policy-privacy-policy-module */ "privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ./privacy-policy/privacy-policy.module */ "NOiH")).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'cancellation',
        loadChildren: () => __webpack_require__.e(/*! import() | cancellation-cancellation-module */ "cancellation-cancellation-module").then(__webpack_require__.bind(null, /*! ./cancellation/cancellation.module */ "uswa")).then(m => m.CancellationPageModule)
    },
    {
        path: 'country-home',
        loadChildren: () => __webpack_require__.e(/*! import() | country-home-country-home-module */ "country-home-country-home-module").then(__webpack_require__.bind(null, /*! ./country-home/country-home.module */ "v6tB")).then(m => m.CountryHomePageModule)
    },
    { path: 'terms-about',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-about-terms-about-module */ "terms-about-terms-about-module").then(__webpack_require__.bind(null, /*! ./terms-about/terms-about.module */ "UDfP")).then(m => m.TermsAboutPageModule)
    }
];
let TermsRoutingModule = class TermsRoutingModule {
};
TermsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TermsRoutingModule);



/***/ }),

/***/ "w5ku":
/*!******************************************!*\
  !*** ./src/app/auth/terms/terms.page.ts ***!
  \******************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms.page.html */ "J8Kw");
/* harmony import */ var _terms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.page.scss */ "YhEL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TermsPage = class TermsPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsPage.ctorParameters = () => [];
TermsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms',
        template: _raw_loader_terms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsPage);



/***/ })

}]);
//# sourceMappingURL=terms-terms-module.js.map