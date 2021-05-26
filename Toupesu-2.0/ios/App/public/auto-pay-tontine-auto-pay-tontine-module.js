(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auto-pay-tontine-auto-pay-tontine-module"],{

/***/ "9n8o":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/user/auto-pay-tontine/auto-pay-tontine.page.ts ***!
  \**************************************************************************/
/*! exports provided: AutoPayTontinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPayTontinePage", function() { return AutoPayTontinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auto_pay_tontine_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auto-pay-tontine.page.html */ "y/cn");
/* harmony import */ var _auto_pay_tontine_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto-pay-tontine.page.scss */ "RO/a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var _service_user_error_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/user-error.service */ "QzGi");













let AutoPayTontinePage = class AutoPayTontinePage {
    constructor(tontineService, userService, router, userError, ui, event, error, translate) {
        this.tontineService = tontineService;
        this.userService = userService;
        this.router = router;
        this.userError = userError;
        this.ui = ui;
        this.event = event;
        this.error = error;
        this.translate = translate;
        this.tontineCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.tontines = [];
        this.allTontines = [];
        this.tontineSelected = [];
        this.loading = false;
        this.userData = this.userService.getUserData();
        this.userPicture = this.userData && this.userData.picture ? `${this.userData.picture}` : null;
        this.event.subscribe('user-data', user => {
            this.userPicture = user && user.picture ? user.picture : null;
        });
    }
    ngOnInit() {
        this.loadingList = true;
        this.getUserTontines(null);
    }
    // check if a tontine is selected
    checkTontine(tontineList) {
        let isTontineIn = false;
        tontineList.forEach(tontine => {
            if (tontine.choice) {
                isTontineIn = true;
            }
        });
        return isTontineIn;
    }
    // save the auto pay method
    saveAutoPay() {
        let i = 0;
        while (i < this.tontineSelected.length) {
            if (this.tontineSelected[i].choice) {
                this.tontineSelected[i].automatic_payment_from_wallet = 1;
            }
            else {
                this.tontineSelected[i].automatic_payment_from_wallet = 0;
            }
            i++;
        }
        this.loading = true;
        this.userService.payTontineAutomatically({ liste_tontine: this.tontineSelected }).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('TONTINE_PAY_AUTO_SUCCESS').subscribe(data => {
                    this.ui.presentToast(data);
                });
                this.getUserTontines(null);
                this.router.navigate(['dashboard/user']);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.saveAutoPay();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.userError.manageUserError(error);
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Refresh the list
    refreSher(event) {
        this.getUserTontines(event);
    }
    // Get the list user tontines
    getUserTontines(event) {
        this.tontineService.getMyTontine().subscribe((reponse) => {
            this.loadingList = false;
            if (reponse && reponse.message === 'success') {
                this.tontineSelected = [];
                reponse.liste_tontine.forEach(data => {
                    this.tontineSelected.push({
                        name: data.tontine.name,
                        tontine_id: data.tontine.tontine_id,
                        automatic_payment_from_wallet: data.tontine.automatic_payment_from_wallet,
                        choice: data.tontine.automatic_payment_from_wallet === 1 ? true : false
                    });
                });
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 200);
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getUserTontines(event);
                    }
                    else {
                        this.loadingList = false;
                    }
                });
            }
            else {
                this.loadingList = false;
                this.error.manageError(error);
            }
        });
    }
};
AutoPayTontinePage.ctorParameters = () => [
    { type: _my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _service_user_error_service__WEBPACK_IMPORTED_MODULE_12__["UserErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__["EventService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
AutoPayTontinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auto-pay-tontine',
        template: _raw_loader_auto_pay_tontine_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auto_pay_tontine_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AutoPayTontinePage);



/***/ }),

/***/ "RO/a":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/user/auto-pay-tontine/auto-pay-tontine.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvLXBheS10b250aW5lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "YYob":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/user/auto-pay-tontine/auto-pay-tontine.module.ts ***!
  \****************************************************************************/
/*! exports provided: AutoPayTontinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPayTontinePageModule", function() { return AutoPayTontinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auto_pay_tontine_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-pay-tontine.page */ "9n8o");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");







const routes = [
    {
        path: '',
        component: _auto_pay_tontine_page__WEBPACK_IMPORTED_MODULE_5__["AutoPayTontinePage"]
    }
];
let AutoPayTontinePageModule = class AutoPayTontinePageModule {
};
AutoPayTontinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _auto_pay_tontine_page__WEBPACK_IMPORTED_MODULE_5__["AutoPayTontinePage"]
        ]
    })
], AutoPayTontinePageModule);



/***/ }),

/***/ "y/cn":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user/auto-pay-tontine/auto-pay-tontine.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/user\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"{{userPicture ? userPicture : 'assets/post-img.svg'}}\" class=\"thumb-img\">\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding ion-margin-start\">\r\n      {{'TONTINE_AUTOMATIC_PAY' | translate | stringTruncate : 15 }} \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n  <p class=\"ion-text-center\"  *ngIf=\"loadingList\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n\r\n  <ion-grid>\r\n    <ion-row  *ngIf=\"!loadingList\">\r\n      <ion-col>\r\n        <ion-text>\r\n        {{ 'TONTINE_MESSAGE_AUTOMATIC_PAY' | translate }}\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list *ngIf=\"tontineSelected && tontineSelected.length > 0\">\r\n            <ion-list-header>\r\n              <ion-label>\r\n               {{ 'MENU_MY_TONTINE' | translate }}\r\n              </ion-label>\r\n            </ion-list-header>\r\n            <ion-item *ngFor=\"let tontine of tontineSelected; let i=index\">\r\n              <ion-label>{{tontine.name}}</ion-label>\r\n              <ion-checkbox slot=\"end\" [(ngModel)]=\"tontineSelected[i].choice\" [checked]=\"tontineSelected[i].choice\" [value]=\"tontineSelected[i].choice\"></ion-checkbox>\r\n            </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"tontineSelected && tontineSelected.length === 0 && !loadingList\">\r\n    <p  class=\"ion-padding ion-text-center\"> {{ 'TONTINE_AUTO_LIST' | translate }}</p>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\"  [disabled]=\"loading || tontineSelected && tontineSelected.length === 0\"\r\n        (click)=\"saveAutoPay()\"\r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\">\r\n        {{ 'SAVE_TEXT' | translate }}\r\n  </ion-button>\r\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=auto-pay-tontine-auto-pay-tontine-module.js.map