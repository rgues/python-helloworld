(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "kV0F");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-terms-module */ "terms-terms-module").then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "NgpC")).then(m => m.TermsPageModule)
    },
    {
        path: 'register-phone',
        loadChildren: () => __webpack_require__.e(/*! import() | register-phone-register-phone-module */ "register-phone-register-phone-module").then(__webpack_require__.bind(null, /*! ./register-phone/register-phone.module */ "W8l7")).then(m => m.RegisterPhonePageModule)
    },
    {
        path: 'verify-phone',
        loadChildren: () => Promise.all(/*! import() | verify-phone-verify-phone-module */[__webpack_require__.e("common"), __webpack_require__.e("verify-phone-verify-phone-module")]).then(__webpack_require__.bind(null, /*! ./verify-phone/verify-phone.module */ "VFDp")).then(m => m.VerifyPhonePageModule)
    },
    {
        path: 'verify-email',
        loadChildren: () => Promise.all(/*! import() | verify-email-verify-email-module */[__webpack_require__.e("common"), __webpack_require__.e("verify-email-verify-email-module")]).then(__webpack_require__.bind(null, /*! ./verify-email/verify-email.module */ "oroY")).then(m => m.VerifyEmailPageModule)
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "Buvn":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"welcome\">\r\n    <ion-title class=\"ion-text-center \r\n            ion-text-uppercase \r\n            welcome-title\" color=\"primary\">\r\n      <span>{{'WELCOME_MSG1' | translate}}</span>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"home-policy\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\" class=\"ion-padding ion-align-items-center\">\r\n          <ion-img [src]=\"'assets/home-anim.svg'\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <p>{{'WELCOME_MSG2' | translate}}\r\n    <a routerLink=\"terms\" routerDirection=\"forward\">\r\n      {{'WELCOME_MSG3' | translate }}\r\n    </a>\r\n  </p>\r\n  <ion-button expand=\"full\" [disabled]=\"canDisable==='OK'\"\r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\" routerLink=\"register-phone\">\r\n        {{'WELCOME_MSG4' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.page */ "kV0F");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _auth_global_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-global-data.service */ "ih/g");









let AuthPageModule = class AuthPageModule {
};
AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"]],
        providers: [
            _auth_global_data_service__WEBPACK_IMPORTED_MODULE_8__["AuthGlobalDataService"]
        ]
    })
], AuthPageModule);



/***/ }),

/***/ "ih/g":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-global-data.service.ts ***!
  \**************************************************/
/*! exports provided: AuthGlobalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGlobalDataService", function() { return AuthGlobalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/api.service */ "6rCG");



let AuthGlobalDataService = class AuthGlobalDataService {
    constructor(api) {
        this.api = api;
        this.baseUrl = this.api.baseUrl;
    }
};
AuthGlobalDataService.ctorParameters = () => [
    { type: _shared_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AuthGlobalDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGlobalDataService);



/***/ }),

/***/ "jMPm":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "kV0F":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.page.html */ "Buvn");
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.page.scss */ "jMPm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/local-storage.service */ "y7ii");
/* harmony import */ var _shared_service_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/ui.service */ "QB/Y");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/auth.service */ "RmnQ");







let AuthPage = class AuthPage {
    constructor(auth, ui, localStorage) {
        this.auth = auth;
        this.ui = ui;
        this.localStorage = localStorage;
        this.canDisable = this.localStorage.getItem('maintenance');
        this.ui.hardwareBackButton();
    }
    ngOnInit() {
        this.auth.getVersion().then((ans) => {
            this.canDisable = ans;
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _shared_service_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"] },
    { type: _shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map