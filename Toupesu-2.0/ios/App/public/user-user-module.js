(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "JYPe":
/*!*********************************************!*\
  !*** ./src/app/dashboard/user/user.page.ts ***!
  \*********************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.page.html */ "pjy9");
/* harmony import */ var _user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page.scss */ "t6AC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/plugin.service */ "NxmL");













let UserPage = class UserPage {
    constructor(userService, location, platform, error, ui, event, router, translate, alertController, plugin) {
        this.userService = userService;
        this.location = location;
        this.platform = platform;
        this.error = error;
        this.ui = ui;
        this.event = event;
        this.router = router;
        this.translate = translate;
        this.alertController = alertController;
        this.plugin = plugin;
        this.userData = this.userService.getUserData();
        this.userPicture = this.userData && this.userData.picture ? `${this.userData.picture}` : null;
        this.event.subscribe('user-data', user => {
            this.userPicture = user && user.picture ? user.picture : null;
        });
        this.currentLang = [];
        this.defaultIndex = -1;
        this.translate.get('USER_LANGUAGE').subscribe(trans => {
            this.langHeader = trans;
        });
        this.shareData = [];
    }
    ngOnInit() {
        this.getLanguages(true);
    }
    // Get the list of language of the current location
    getLanguages(refresher) {
        this.location.getLanguages(refresher).then((languagesData) => {
            this.currentLang = [];
            const sessionLang = this.userService.getCurrentUserSessionLanguage();
            this.sessionLang = sessionLang.toLocaleUpperCase();
            let currentLang = this.location.getCurrentUserLanguage();
            currentLang = this.sessionLang ? this.sessionLang : currentLang ? currentLang.code_langue : null;
            const hasCurrentLang = currentLang ? true : false;
            if (languagesData) {
                languagesData.forEach(data => {
                    if (data && data.langue) {
                        this.currentLang.push({
                            lang: data.langue.code_langue,
                            name: data.langue.name,
                            active: hasCurrentLang && data.langue.code_langue === currentLang ?
                                true : !hasCurrentLang && data.langue.default_langue === 'yes' ? true : false,
                            countryId: data.langue.country_id,
                            langueData: data.langue,
                            translationData: data.keywords,
                            index: languagesData.indexOf(data)
                        });
                    }
                });
                this.currentLang.forEach(data => {
                    if (data && data.active) {
                        this.defaultIndex = this.currentLang.indexOf(data);
                        this.location.setCurrentUserLanguage(data.langueData);
                    }
                });
            }
            else {
                this.currentLang = [];
            }
        });
    }
    // Change the language
    changeLang(index) {
        this.defaultIndex = index;
        this.currentLang.forEach(lang => {
            if (lang.index === index) {
                this.currentLang[index].active = true;
                this.location.setUserCountry(this.currentLang[index].countryId);
                this.location.setCurrentUserLanguage(this.currentLang[index].langueData);
                this.location.setCurrentLanguageTranslation(this.currentLang[index].translationData);
                this.location.sendTranslation(this.currentLang[index].translationData);
                const langue = String(this.currentLang[index].lang);
                this.translate.use(langue.toLocaleLowerCase());
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
            }
            else {
                this.currentLang[this.currentLang.indexOf(lang)].active = false;
            }
        });
    }
    // Open the modal language
    openModalLang() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const langData = [];
            let index = 0;
            this.currentLang.forEach(lang => {
                langData.push({
                    name: 'Radio ' + (index + 1),
                    type: 'radio',
                    label: lang.name,
                    value: index,
                    checked: lang.active ? true : false
                });
                index++;
            });
            const alert = yield this.alertController.create({
                header: this.langHeader,
                inputs: langData,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Ok',
                        handler: (data) => {
                            this.changeLang(data);
                            // update the user language
                            this.error.updateLang(this.currentLang[data].lang.toLocaleLowerCase());
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Share the app with friends
    shareApp() {
        let link = '';
        if (this.platform.is('android')) {
            link = 'https://bit.ly/2Zr78Me';
        }
        else {
            link = 'https://apple.co/2yrfLeM';
        }
        this.translate.get(['SHARE_MESSAGE', 'SHARE_TITLE']).subscribe(trans => {
            this.shareData.push(trans.SHARE_MESSAGE);
            this.shareData.push(trans.SHARE_TITLE);
        });
        this.plugin.share(this.shareData[0], this.shareData[1], link);
    }
    // Get the user picture
    getPicture() {
        this.plugin.getPicture().subscribe((picture) => {
            // this.api.presentAlert('Image', JSON.stringify(picture));
            if (picture) {
                this.ui.presentLoading('');
                this.userService.updatePicture({ picture: picture }).subscribe((reponse) => {
                    this.ui.dismissLoading();
                    if (reponse && reponse.message === "success") {
                        this.userPicture = picture;
                        this.userService.getProfileUser().subscribe((user) => {
                            this.event.publish('user-data', user.user);
                            this.userService.setUserData(user.user);
                        }, error => {
                            if (error.error.user_not_found) {
                                this.error.renewSession().then((data) => {
                                    if (data && data.result === "OK") {
                                        this.getPicture();
                                    }
                                });
                            }
                            else {
                                this.error.manageError(error);
                            }
                        });
                    }
                }, error => {
                    if (error && error.error && error.error.user_not_found) {
                        this.error.renewSession().then((data) => {
                            if (data && data.result === "OK") {
                                this.ui.dismissLoading();
                                this.getPicture();
                            }
                            else {
                                this.ui.dismissLoading();
                            }
                        });
                    }
                    else {
                        this.ui.dismissLoading();
                        this.error.manageError(error);
                    }
                });
            }
        });
    }
};
UserPage.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_12__["PluginService"] }
];
UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserPage);



/***/ }),

/***/ "N8Yk":
/*!***********************************************!*\
  !*** ./src/app/dashboard/user/user.module.ts ***!
  \***********************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.page */ "JYPe");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");







const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_5__["UserPage"]
    },
    {
        path: 'profil',
        loadChildren: () => Promise.all(/*! import() | user-profil-user-profil-module */[__webpack_require__.e("common"), __webpack_require__.e("user-profil-user-profil-module")]).then(__webpack_require__.bind(null, /*! ./user-profil/user-profil.module */ "6jfQ")).then(m => m.UserProfilPageModule)
    },
    {
        path: 'security',
        loadChildren: () => __webpack_require__.e(/*! import() | user-security-user-security-module */ "user-security-user-security-module").then(__webpack_require__.bind(null, /*! ./user-security/user-security.module */ "B4IQ")).then(m => m.UserSecurityPageModule)
    },
    {
        path: 'pay-method',
        loadChildren: () => __webpack_require__.e(/*! import() | user-pay-method-user-pay-method-module */ "user-pay-method-user-pay-method-module").then(__webpack_require__.bind(null, /*! ./user-pay-method/user-pay-method.module */ "wXDe")).then(m => m.UserPayMethodPageModule)
    },
    {
        path: 'auto-pay-tontine',
        loadChildren: () => Promise.all(/*! import() | auto-pay-tontine-auto-pay-tontine-module */[__webpack_require__.e("common"), __webpack_require__.e("auto-pay-tontine-auto-pay-tontine-module")]).then(__webpack_require__.bind(null, /*! ./auto-pay-tontine/auto-pay-tontine.module */ "YYob")).then(m => m.AutoPayTontinePageModule)
    }
];
let UserPageModule = class UserPageModule {
};
UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _user_page__WEBPACK_IMPORTED_MODULE_5__["UserPage"]
        ],
        providers: []
    })
], UserPageModule);



/***/ }),

/***/ "pjy9":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user/user.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n      <ion-title>{{ 'M_PROFILE_CONFIG' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"user-home\">\r\n  <ion-grid>\r\n    <ion-row class=\"avatar-block\">\r\n      <ion-col>\r\n        <ion-list lines=\"none\">\r\n          <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"{{userPicture ? userPicture : 'assets/post-img.svg'}}\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <p>{{ 'M_WELCOME' | translate }}</p>\r\n              <h2>{{userData.firstname ? userData.firstname : ''}} {{userData.lastname ? userData.lastname : userData.phone}}</h2>        \r\n            </ion-label>\r\n              <ion-button slot=\"end\" color=\"primary\" size=\"medium\" class=\"ion-text-capitalize\" (click)=\"getPicture()\">\r\n                  <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n          </ion-item>\r\n        </ion-list>  \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"action-block\">\r\n      <ion-col size=\"12\">\r\n        <ion-list lines=\"none\">\r\n          <ion-item routerLink=\"profil\" detail>\r\n            <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p><b>{{ 'M_ACCOUNT_DES' | translate }}</b></p>\r\n              <p>{{ 'M_ACCOUNT_DES_EDIT' | translate }}</p>\r\n            </ion-text>\r\n          </ion-item>\r\n          <ion-item routerLink=\"security\" detail>\r\n            <ion-icon name=\"key\" slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p><b>{{ 'USER_PROFILE_TEXT3' | translate }}</b></p>\r\n              <p>{{ 'M_UPDATE_PASSWORD' | translate }}</p>\r\n            </ion-text>\r\n          </ion-item>\r\n          <ion-item routerLink=\"pay-method\" detail>\r\n            <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p><b>{{ 'USER_PROFILE_TEXT4' | translate }}</b></p>\r\n              <p>{{ 'M_PAYMENT_DES' | translate }}</p>\r\n            </ion-text>\r\n          </ion-item>\r\n          <ion-item routerLink=\"auto-pay-tontine\" detail>\r\n            <ion-icon name=\"open\" slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p><b>{{ 'TONTINE_AUTOMATIC_PAY' | translate }}</b></p>\r\n              <p>{{'M_AUTO_SOLUTION' | translate }}</p>\r\n            </ion-text>\r\n          </ion-item>\r\n\r\n          <ion-item (click)=\"shareApp()\" detail>\r\n            <ion-icon name=\"share\" slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p><b>{{ 'INVITE_FRIENDS' | translate }}</b></p>\r\n              <p>{{'INVITE_FRIENDS_MSG' | translate }}</p>\r\n            </ion-text>\r\n          </ion-item>\r\n\r\n          <ion-item routerLink=\"/dashboard/feedback\" detail>\r\n            <ion-icon name=\"quote\" slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p><b>{{ 'MENU_FEEDBACK' | translate }}</b></p>\r\n              <p>{{'MENU_FEEDBACK_MSG' | translate }}</p>\r\n            </ion-text>\r\n          </ion-item>\r\n\r\n          <ion-item (click)=\"openModalLang()\" *ngIf=\"currentLang && currentLang.length > 0\" detail>\r\n            <ion-icon name=\"chatbubbles\" slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p><b>{{ 'USER_LANGUAGE' | translate }} : </b> <span>{{ defaultIndex !== -1  ? currentLang[defaultIndex].name : sessionLang}}</span> </p>\r\n              <p>{{'M_USER_LANG_DES' | translate }}</p>\r\n            </ion-text>\r\n          </ion-item>\r\n          <ion-item >\r\n            <ion-icon slot=\"start\"></ion-icon>\r\n            <ion-text>\r\n              <p>{{'APP_VERSION_TEXT' | translate }} : 1.3.4 (20210506)</p>\r\n            </ion-text>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "t6AC":
/*!***********************************************!*\
  !*** ./src/app/dashboard/user/user.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map