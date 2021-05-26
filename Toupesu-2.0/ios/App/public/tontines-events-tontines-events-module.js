(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tontines-events-tontines-events-module"],{

/***/ "/kqL":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/tontines-events.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b250aW5lcy1ldmVudHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "2Zhg":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/tontines-events.module.ts ***!
  \*********************************************************************/
/*! exports provided: TontinesEventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontinesEventsPageModule", function() { return TontinesEventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tontines_events_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tontines-events.page */ "oqD3");
/* harmony import */ var _tontines_events_menu_tontines_events_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tontines-events-menu/tontines-events-menu.component */ "3Ae2");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _pipes_to_date_obj_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/to-date-obj.pipe */ "PVaV");
/* harmony import */ var _pipes_filterdata_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/filterdata.pipe */ "qx2f");
/* harmony import */ var _pipes_comma_dumper_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/comma-dumper.pipe */ "x4WB");











const routes = [
    {
        path: '',
        component: _tontines_events_page__WEBPACK_IMPORTED_MODULE_5__["TontinesEventsPage"]
    },
    {
        path: 'join/:hasTitle',
        loadChildren: () => __webpack_require__.e(/*! import() | join-tontine-event-join-tontine-event-module */ "join-tontine-event-join-tontine-event-module").then(__webpack_require__.bind(null, /*! ./join-tontine-event/join-tontine-event.module */ "0khn")).then(m => m.JoinTontineEventPageModule)
    }
];
let TontinesEventsPageModule = class TontinesEventsPageModule {
};
TontinesEventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _tontines_events_page__WEBPACK_IMPORTED_MODULE_5__["TontinesEventsPage"],
            _tontines_events_menu_tontines_events_menu_component__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsMenuComponent"],
            _pipes_to_date_obj_pipe__WEBPACK_IMPORTED_MODULE_8__["ToDateObjPipe"],
            _pipes_filterdata_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterdataPipe"],
            _pipes_comma_dumper_pipe__WEBPACK_IMPORTED_MODULE_10__["CommaDumperPipe"]
        ],
        entryComponents: [
            _tontines_events_menu_tontines_events_menu_component__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsMenuComponent"]
        ]
    })
], TontinesEventsPageModule);



/***/ }),

/***/ "3Ae2":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/tontines-events-menu/tontines-events-menu.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TontinesEventsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontinesEventsMenuComponent", function() { return TontinesEventsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tontines_events_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tontines-events-menu.component.html */ "e1iJ");
/* harmony import */ var _tontines_events_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tontines-events-menu.component.scss */ "RBQo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let TontinesEventsMenuComponent = class TontinesEventsMenuComponent {
    constructor(popoverController, router) {
        this.popoverController = popoverController;
        this.router = router;
    }
    ngOnInit() { }
    closeTontinesEventsMenu() {
        this.popoverController.dismiss();
    }
    // open new tontine Event page
    newTontineEvent() {
        this.closeTontinesEventsMenu();
        this.router.navigate(['dashboard/tontines-events/new']);
    }
    // Join a tontine event
    joinTontineEvent() {
        this.closeTontinesEventsMenu();
        this.router.navigate(['dashboard/tontines-events/join/0']);
    }
    // Open a wallet
    openWallet() {
        this.closeTontinesEventsMenu();
        this.router.navigate(['dashboard/my-wallet']);
    }
};
TontinesEventsMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TontinesEventsMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tontines-events-menu',
        template: _raw_loader_tontines_events_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tontines_events_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TontinesEventsMenuComponent);



/***/ }),

/***/ "PVaV":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/pipes/to-date-obj.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: ToDateObjPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDateObjPipe", function() { return ToDateObjPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ToDateObjPipe = class ToDateObjPipe {
    transform(value) {
        if (value) {
            const temp = value.toString().replace(' ', 'T');
            return new Date(temp);
        }
        else {
            return null;
        }
    }
};
ToDateObjPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'toDateObj'
    })
], ToDateObjPipe);



/***/ }),

/***/ "RBQo":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/tontines-events-menu/tontines-events-menu.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b250aW5lcy1ldmVudHMtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ctA1":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/tontines-events.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo2\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openContextMenu($event)\">\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons> \n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center subtitle\">\n    <ion-title>{{ filter ? ('MENU_MY_EVENTS_ACTIVE' | translate) : ('MENU_MY_EVENTS' | translate) }}</ion-title>      \n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{ 'COUNTRY_TEXT' | translate }}</ion-label>\n            <ion-select (ionChange)=\"updateCurrentCountryEvents()\" [(ngModel)]=\"countryIndex\">\n              <ion-select-option [value]=\"-1\">{{ 'ALL_COUNTRIES' | translate }}</ion-select-option>\n              <ion-select-option [value]=\"i\" *ngFor=\"let state of states; let i = index\">{{state.country_label}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-item lines=\"none\">                \n            <ion-toggle  (ionChange)=\"changeVisibility(filter)\" [(ngModel)]=\"filter\"></ion-toggle>\n            <ion-label><small>{{ 'M_PUBLIC' | translate }}</small> </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"7\">\n            <ion-searchbar placeholder=\"{{ 'M_NAME_TEXT' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForInvitation($event)\" type=\"text\"></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"my-tontines-events\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSherData($event)\">\n    <ion-refresher-content\n      pullingIcon=\"reload-outline\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\n    <ion-spinner  name=\"circles\"></ion-spinner>\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"6\" *ngFor=\"let event of myEvents\">\n        <ion-card button=\"true\" (click)=\"gotoEventDetail(event)\">\n          <!-- <img [src]=\"event.imgUrl || defaultImage\" /> -->\n          <ion-row class=\"event-img\">\n            <ion-col size=\"12\" class=\"event-img-block\" \n            [ngStyle]=\"{\n              'background': (event.imgUrl !== '' && event.imgUrl !== null) ? 'url('+event.imgUrl+')':'url('+defaultImage+')',\n              'background-repeat': 'no-repeat',\n              'background-size': 'cover',\n              'background-position': 'top center'\n            }\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-card-header>\n                <ion-card-subtitle>{{ 'M_CLOSE_ON' | translate }} {{ event.date_fin | toDateObj | date :'mediumDate' }}</ion-card-subtitle>\n                <ion-card-title>{{ event.title }}</ion-card-title>\n                <ion-badge color=\"primary\" *ngIf=\"event.status === 'approved'\">{{ 'TONTINE_EVENT_STATUS_ACTIVE' | translate }}</ion-badge>\n                <ion-badge color=\"tertiary\" *ngIf=\"event.status === 'initiated'\">{{ 'TONTINE_EVENT_STATUS_PENDING' | translate }}</ion-badge>\n                <ion-badge color=\"danger\" *ngIf=\"event.status === 'refused'\">{{ 'TONTINE_EVENT_STATUS_REFUSED' | translate }}</ion-badge>\n                <ion-badge color=\"danger\" *ngIf=\"event.status === 'closed'\">{{ 'TONTINE_EVENT_STATUS_CLOSED' | translate }}</ion-badge>\n                <ion-label><br >{{'M_EXPECTED_AMOUNT' | translate }}: {{ event.budget | commaDumper }} {{ event.currency }}</ion-label>\n              </ion-card-header>\n            </ion-col>\n            <ion-col size=\"4\" class=\"col-status ion-align-self-center\">\n              <svg class=\"pot-status\" preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 48.8 39.12\">    \n                <defs>\n                  <clipPath id=\"pot-cursor\" >\n                    <path d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\" />             \n                  </clipPath>        \n                </defs>                                \n                <path class=\"pot-rate-color-1\"\n                    d=\"M19.4,6a2,2,0,0,0,2.77-.56l0,0a2,2,0,0,0-.56-2.77l0,0a1.93,1.93,0,0,0-2.69.48v0a2,2,0,0,0,.37,2.8Zm6.8-2.6A1.77,1.77,0,0,0,28.7.88a1.75,1.75,0,0,0-2.47,0l0,0h0a1.75,1.75,0,0,0,0,2.47Zm6.1-1a1.48,1.48,0,0,0,2,.44l.05,0a1.48,1.48,0,0,0,.44-2l0-.05a1.48,1.48,0,0,0-2-.44l-.05,0A1.69,1.69,0,0,0,32.3,2.38Zm5.4.2a1.25,1.25,0,0,0,1.61.74l.09,0a1.25,1.25,0,0,0,.74-1.61l0-.09A1.25,1.25,0,0,0,38.49.84l-.09,0A1.37,1.37,0,0,0,37.7,2.58Zm4.5,1.1a1.12,1.12,0,1,0,.9-1.3h0A1.13,1.13,0,0,0,42.2,3.68Zm3.6,1.7a1,1,0,1,0,1-1A1,1,0,0,0,45.8,5.38Z\"\n                        />\n                <path class=\"pot-rate-color-2\"\n                    d=\"M5.4,12.78A13,13,0,0,0,1,22.58a11,11,0,0,0,.2,1.8c.1.6.3,1.2.4,1.8l.3.9a2,2,0,0,0,.4.8,12.9,12.9,0,0,0,.9,1.6,13.39,13.39,0,0,0,12.2,6.1,11,11,0,0,0,1.8-.2A11.63,11.63,0,0,0,19,35a13.82,13.82,0,0,0,6-3.7,12.09,12.09,0,0,0,2-3,14.25,14.25,0,0,0,1.1-3.5,11.53,11.53,0,0,0-1-7.3c.3.5.6,1.1.9,1.7a13.36,13.36,0,0,1,.7,1.8,10.27,10.27,0,0,1,.2,3.9,12.56,12.56,0,0,1-1,3.8,16.83,16.83,0,0,1-2,3.4,9.27,9.27,0,0,1-1.4,1.4c-.5.4-1,.8-1.6,1.2a14.88,14.88,0,0,1-3.6,1.7,13.32,13.32,0,0,1-1.9.5,13.55,13.55,0,0,1-2,.2,13.52,13.52,0,0,1-4-.3A14.49,14.49,0,0,1,6,34.48l-1.5-1.2a14.89,14.89,0,0,1-4.4-8.6,16.23,16.23,0,0,1-.1-2.1,12.65,12.65,0,0,1,2.6-7.2A9.88,9.88,0,0,1,5.4,12.78ZM6.8,9a1.1,1.1,0,0,1,0-.8,1.91,1.91,0,0,1,.3-.8,2.37,2.37,0,0,1,1.5-.9c.3,0,.6-.1.9-.1H12a25.32,25.32,0,0,1,6.6,1.1,23.68,23.68,0,0,1,6.1,2.7,18.48,18.48,0,0,1,2.7,1.9,3.81,3.81,0,0,1,1.1,1.4,1.41,1.41,0,0,1,.1.9,1.79,1.79,0,0,1-.5.7.91.91,0,0,0,.3-.7,1.85,1.85,0,0,0-.2-.7,5.24,5.24,0,0,0-1.1-1c-.9-.6-1.9-1.1-2.8-1.6a39.2,39.2,0,0,0-6-2.3A47,47,0,0,0,12,7.48c-.5-.1-1.1-.1-1.6-.2l-.9-.2H8.7a1.9,1.9,0,0,0-1.3.5A2,2,0,0,0,6.8,9Z\"\n                        />\n                <g>\n                    <g class=\"pot-rate\">\n                        <path class=\"pot-rate-color-3\"\n                              [class.pot-rate-0]=\"event.contribution === 0\"\n                              [class.pot-rate-15]=\"event.contribution > 0 && event.contribution <= 15\"\n                              [class.pot-rate-30]=\"event.contribution > 15 && event.contribution <= 30\"\n                              [class.pot-rate-45]=\"event.contribution > 30 && event.contribution <= 45\"\n                              [class.pot-rate-60]=\"event.contribution > 45 && event.contribution <= 60\"\n                              [class.pot-rate-75]=\"event.contribution > 60 && event.contribution <= 75\"\n                              [class.pot-rate-90]=\"event.contribution > 75 && event.contribution <= 99\"\n                              [class.pot-rate-100]=\"event.contribution === 100\"                       \n                            d=\"M1.2,7.15s8.92-2.46,12.38,0,14.22,0,14.22,0V35.91H1.2Z\"\n                        />\n                    </g>\n                    <path class=\"pot-rate-color-4\"\n                        d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\"\n                            />\n                </g>\n                <path class=\"pot-rate-color-5\"\n                    d=\"M21.5,12.08c-1.2-.4-2.6-.9-4.1-1.3-1.1-.3-2.3-.6-3.3-.8-2.8-.5-4.8-.6-4.9-.1-.1.2.2.6.8.9a25.68,25.68,0,0,0,6.7,2.5,23.56,23.56,0,0,0,7.5,1.2c.4-.1.7-.2.7-.3C25,13.78,23.6,13,21.5,12.08Z\"\n                        />\n                <text class=\"pot-rate-text\" transform=\"translate(5.78 28.56)\">\n                    <tspan style=\"letter-spacing: -0.004883254918305625em\"></tspan>\n                    <tspan x=\"0\" y=\"0\">{{ event.contribution }}%</tspan>                                        \n                </text>\n              </svg>\n            </ion-col>\n          </ion-row>  \n          <ion-row>\n            <ion-col class=\"ion-text-right\">\n              <ion-button size=\"small\" color=\"warning\">{{ 'MORE_DETAIL' | translate }}</ion-button>\n            </ion-col>\n          </ion-row>        \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div  *ngIf=\"myEvents && myEvents.length === 0 && !loading\">\n    <p class=\"ion-padding ion-text-center\"> {{ 'M_TONTINE_EVENTS_EMPTY' | translate }}</p>\n  </div>\n\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "e1iJ":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/tontines-events-menu/tontines-events-menu.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"event-menu-popover\">\n  <ion-item (click)=\"newTontineEvent()\" lines=\"none\">\n    <ion-label>\n      {{ 'MENU_NEW_EVENT' | translate }}\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"joinTontineEvent()\" lines=\"none\">\n    <ion-label>\n      {{ 'M_JOIN_EVENT' | translate }}\n    </ion-label>\n  </ion-item>  \n  <ion-item (click)=\"openWallet()\" lines=\"none\">\n    <ion-label>\n     {{'MENU_MY_WALLET' | translate }}\n    </ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "oqD3":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/tontines-events.page.ts ***!
  \*******************************************************************/
/*! exports provided: TontinesEventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontinesEventsPage", function() { return TontinesEventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tontines_events_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tontines-events.page.html */ "ctA1");
/* harmony import */ var _tontines_events_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tontines-events.page.scss */ "/kqL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/tontines-events.service */ "eEpS");
/* harmony import */ var _tontines_events_menu_tontines_events_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tontines-events-menu/tontines-events-menu.component */ "3Ae2");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
















let TontinesEventsPage = class TontinesEventsPage {
    constructor(tontineEventService, popoverController, error, storage, event, router, paymentData, userService, location, localStorage, util) {
        this.tontineEventService = tontineEventService;
        this.popoverController = popoverController;
        this.error = error;
        this.storage = storage;
        this.event = event;
        this.router = router;
        this.paymentData = paymentData;
        this.userService = userService;
        this.location = location;
        this.localStorage = localStorage;
        this.util = util;
        this.states = [];
        this.defaultImage = 'assets/default-event.jpg';
        this.user = this.userService.getUserData();
        this.loading = false;
        this.filter = true;
        if (this.localStorage.getItem('new-event') === 'yes') {
            this.filter = false;
            this.localStorage.setItem('new-event', 'no');
        }
        this.countryIndex = -1;
        this.filterData = [];
        this.myEvents = [];
        this.nbItems = 10;
        this.allData = [];
        this.backService = null;
        this.currentDate = new Date();
        this.SearchEventUser = true;
        this.SearchEventUserAll = false;
        this.event.subscribe('new-event', () => {
            this.refreSherData(null);
        });
    }
    ngOnInit() {
        this.getCountries(false);
        this.getDataFormStorage();
    }
    // Open the contextual menu
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _tontines_events_menu_tontines_events_menu_component__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
    // Filter the list of tontines
    searchForInvitation(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((tontine) => {
                return (tontine.title ? tontine.title.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    tontine.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.myEvents = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.myEvents.push(this.allData[this.myEvents.length]);
            }
        }
        else {
            this.myEvents = this.allData;
        }
    }
    // Get country public events
    getCountryEvent(refresher) {
        if (this.countryIndex === -1) {
            this.location.getCurrentCountryInfo(refresher).then((CurrCountry) => {
                // Get the current  active location country events
                if (CurrCountry && CurrCountry.settings && CurrCountry.settings.active === 1) {
                    let index = 0;
                    this.states.forEach(country => {
                        if (country && country.country_id === CurrCountry.settings.country_id) {
                            this.countryIndex = index;
                            this.getAllTontinesEvent(refresher);
                        }
                        index++;
                    });
                }
                else {
                    let index = 0;
                    // Get the current  default location country events
                    this.states.forEach(country => {
                        if (country && country.default_country === 'yes') {
                            this.countryIndex = index;
                            this.getAllTontinesEvent(refresher);
                        }
                        index++;
                    });
                }
            }).catch(error => {
                if (error) {
                    this.error.manageError(error);
                }
            });
        }
        else {
            if (this.states && this.states.length > 0) {
                // Get the current country event
                this.getAllTontinesEvent(refresher);
            }
        }
    }
    // Get the list of countries
    getCountries(refresher) {
        this.location.getAllCountries(refresher).then((countries) => {
            this.states = this.paymentData.formatCountriesData(countries);
        });
    }
    // choose with service to call
    onChangeToggle(enable, refreSher) {
        if (refreSher) {
            this.infiniteScroll.disabled = false;
        }
        if (enable) {
            this.getAllTontinesEvent(refreSher);
        }
        else {
            this.getUserTontinesEventDefault(refreSher);
        }
    }
    // change the visibility
    changeVisibility(enable) {
        this.loading = true;
        this.myEvents = [];
        this.filterData = [];
        this.allData = [];
        this.onChangeToggle(enable, null);
    }
    // format events data
    formatEventsData(events) {
        const countryEvents = [];
        events.forEach(event => {
            if (this.states && this.states.length === 0 || this.states[this.countryIndex] &&
                this.states[this.countryIndex].country_key === event.code_country || this.countryIndex === -1) {
                countryEvents.push(event);
            }
        });
        this.allData = this.util.orderByTontineEventDate(countryEvents);
        this.filterData = this.allData;
        this.setToStorage(this.allData);
        if (this.allData.length > this.nbItems) {
            this.myEvents = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.myEvents.push(this.allData[this.myEvents.length]);
            }
        }
        else {
            this.myEvents = this.allData;
        }
    }
    // Update the current country on search form
    updateCurrentCountryEvents() {
        this.infiniteScroll.disabled = false;
        this.loading = true;
        if (this.filterData && this.filterData.length > 0) {
            this.formatEventsData(this.filterData);
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
        else {
            this.onChangeToggle(this.filter, null);
        }
    }
    // Get the list of events tontines by default
    getUserTontinesEventDefault(refreSher) {
        this.tontineEventService.getMyTontineEventDefault().subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                if (reponse && reponse.liste) {
                    this.formatEventsData(reponse.liste);
                }
                if (refreSher) {
                    setTimeout(() => {
                        this.infiniteScroll.disabled = false;
                        refreSher.target.complete();
                    }, 2000);
                }
            }
        }, error => {
            if (refreSher) {
                setTimeout(() => {
                    this.infiniteScroll.disabled = false;
                    refreSher.target.complete();
                }, 2000);
            }
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getUserTontinesEventDefault(refreSher);
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get the list user tontines
    getAllTontinesEvent(refreSher) {
        this.tontineEventService.getAllCountriesTontineEvent().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                if (reponse && reponse.liste) {
                    this.formatEventsData(reponse.liste);
                }
            }
            if (refreSher) {
                this.infiniteScroll.disabled = false;
                setTimeout(() => {
                    refreSher.target.complete();
                }, 2000);
            }
            this.loading = false;
        }, error => {
            if (refreSher) {
                this.infiniteScroll.disabled = false;
                setTimeout(() => {
                    refreSher.target.complete();
                }, 2000);
            }
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getAllTontinesEvent(refreSher);
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get the data from session
    getDataFormStorage() {
        this.myEvents = [];
        this.getFromStorage().then(data => {
            if (data && data.length > 0) {
                this.allData = data;
                this.filterData = this.allData;
                if (this.allData.length > this.nbItems) {
                    this.myEvents = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.myEvents.push(this.allData[this.myEvents.length]);
                    }
                }
                else {
                    this.myEvents = this.allData;
                }
                this.onChangeToggle(this.filter, null);
            }
            else {
                this.loading = true;
                this.onChangeToggle(this.filter, null);
            }
        });
    }
    // set to local Stoirage
    setToStorage(data) {
        if (this.filter) {
            this.storage.set('app-events', data);
        }
        else {
            this.storage.set('app-events-user', data);
        }
    }
    getFromStorage() {
        if (this.filter) {
            return this.storage.get('app-events');
        }
        else {
            return this.storage.get('app-events-user');
        }
    }
    // Refresh the list
    refreSherData(event) {
        this.infiniteScroll.disabled = false;
        this.onChangeToggle(this.filter, event);
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.onChangeToggle(this.filter, null);
        }, 300000 + (Math.ceil(Math.random() * 10) + 1) * 1000);
    }
    // Launch the backgroud service
    ionicViewWillLeave() {
        clearInterval(this.backService);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.myEvents.length < this.allData.length) {
                    this.myEvents.push(this.allData[this.myEvents.length]);
                }
                else if (this.myEvents.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Go to the event detail page
    gotoEventDetail(event) {
        this.tontineEventService.setCurrentTontineEventData(event);
        this.router.navigate(['/', 'dashboard', 'tontines-events', event.id]);
    }
};
TontinesEventsPage.ctorParameters = () => [
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_5__["TontinesEventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageData"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_10__["PaymentGlobalDataService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_13__["LocalStorageService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"] }
];
TontinesEventsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
TontinesEventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tontines-events',
        template: _raw_loader_tontines_events_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tontines_events_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TontinesEventsPage);



/***/ }),

/***/ "qx2f":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/pipes/filterdata.pipe.ts ***!
  \********************************************************************/
/*! exports provided: FilterdataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterdataPipe", function() { return FilterdataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FilterdataPipe = class FilterdataPipe {
    transform(items, value, label) {
        if (!items)
            return [];
        if (!value)
            return items;
        if (value == '' || value == null)
            return [];
        if (label == "title") {
            return items.filter((e) => e.title.toLowerCase().indexOf(value) > -1);
        }
        if (label == "NAMES") {
            return items.filter((e) => e.NAMES.toLowerCase().indexOf(value) > -1);
        }
    }
};
FilterdataPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterdata'
    })
], FilterdataPipe);



/***/ }),

/***/ "x4WB":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/pipes/comma-dumper.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: CommaDumperPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommaDumperPipe", function() { return CommaDumperPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CommaDumperPipe = class CommaDumperPipe {
    transform(value) {
        if (value) {
            const currentParam = String(value);
            return currentParam.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return '0';
    }
};
CommaDumperPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'commaDumper'
    })
], CommaDumperPipe);



/***/ })

}]);
//# sourceMappingURL=tontines-events-tontines-events-module.js.map