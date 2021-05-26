(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "7shd":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-menu/dashboard-menu.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"dashboard-menu-popover\">\r\n  <ion-item (click)=\"userProfilePage()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'M_MY_ACCOUNT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"createTontinePage()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_NEW_TONTINE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"createTontineEventPage()\" lines=\"none\">\r\n    <ion-label>\r\n     {{ 'M_NEW_TONTINE_EVENT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"contactUs()\" lines=\"none\">\r\n    <ion-label>\r\n     {{ 'CONTACT_PAGE_TITLE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"logout()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'LOGOUT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "93uJ":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-menu/dashboard-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMenuComponent", function() { return DashboardMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard-menu.component.html */ "7shd");
/* harmony import */ var _dashboard_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-menu.component.scss */ "NlBI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "RmnQ");








let DashboardMenuComponent = class DashboardMenuComponent {
    constructor(popoverController, navController, authService, location, router) {
        this.popoverController = popoverController;
        this.navController = navController;
        this.authService = authService;
        this.location = location;
        this.router = router;
    }
    ngOnInit() { }
    closeDashboardMenu() {
        this.popoverController.dismiss();
    }
    // Open create tontine page
    createTontinePage() {
        this.closeDashboardMenu();
        this.router.navigate(['/dashboard/my-tontines/new']);
    }
    // Open create tontine page
    createTontineEventPage() {
        this.closeDashboardMenu();
        this.router.navigate(['/dashboard/tontines-events/new']);
    }
    // Open the user profile page
    userProfilePage() {
        this.closeDashboardMenu();
        this.router.navigate(['/dashboard/user']);
    }
    // Open the contact us page
    contactUs() {
        this.closeDashboardMenu();
        this.router.navigate(['/dashboard/contact-us']);
    }
    // Get the list of countries manage by Toupesu
    getCountries(refresher) {
        this.location.getAllCountries(refresher).
            then((countries) => { });
    }
    // Get all the word countries
    getWordCountries(refresh) {
        this.location.getWordCountries(refresh).then((countries) => {
        });
    }
    // Log out de app
    logout() {
        this.authService.removeUserSession();
        this.authService.removeConfigData();
        this.closeDashboardMenu();
        this.getCountries(true);
        this.getWordCountries(true);
        this.navController.setDirection('root');
        this.router.navigate(['/auth']);
    }
};
DashboardMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DashboardMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-menu',
        template: _raw_loader_dashboard_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardMenuComponent);



/***/ }),

/***/ "B3xu":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "KR73":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-chip color=\"danger\" slot=\"start\"\r\n    *ngIf=\"haveInvitation === true\"\r\n    [routerLink]=\"['/', 'dashboard', 'my-invitations']\">\r\n    <ion-icon name=\"mail-unread\" color=\"danger\"></ion-icon>\r\n    <ion-label><strong>{{nbInvitations}}</strong></ion-label>\r\n  </ion-chip>    \r\n    <ion-title class=\"ion-text-center\">\r\n        <ion-img class=\"logo-no-right-slot\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center no-padding dashboard\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"5\" routerLink=\"my-tontines\">\r\n        <ion-img [src]=\"'assets/my-tontines-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n        <ion-label>{{ 'TONTINE_LIST_TEXT1' | translate }}</ion-label>       \r\n      </ion-col>\r\n      <ion-col size=\"5\"  routerLink=\"tontines-events\">\r\n        <ion-img [src]=\"'assets/tontine-event-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n        <ion-label>{{ 'TONTINE_EVENT' | translate }}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"5\" routerLink=\"join-tontine\">\r\n        <ion-img [src]=\"'assets/join-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n        <ion-label>{{ 'MENU_JOIN_TONTINE' | translate }}</ion-label>           \r\n      </ion-col>\r\n      <ion-col size=\"5\"  routerLink=\"invitations\">\r\n        <ion-img [src]=\"'assets/invit-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n        <ion-label>{{ 'TONTINE_INVITED_TEXT1' | translate }}</ion-label>        \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"5\"  routerLink=\"my-wallet\">\r\n        <ion-img [src]=\"'assets/wallet-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n        <ion-label>{{ 'MENU_MY_WALLET' | translate }}</ion-label> \r\n      </ion-col>\r\n      <ion-col size=\"5\"  routerLink=\"pesuswap\">\r\n        <ion-img [src]=\"'assets/swap-icon.svg'\" class=\"thumb-img\"></ion-img>\r\n        <ion-label>{{ 'PESU_SWAP_TEXT' | translate }}</ion-label>           \r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "NcNw":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "KR73");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "B3xu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-menu/dashboard-menu.component */ "93uJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invitations/service/invitations.service */ "8N1Y");
/* harmony import */ var _shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/service/error.service */ "TkUd");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/service/user.service */ "6Hie");
/* harmony import */ var _shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/service/ui.service */ "QB/Y");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/service/auth.service */ "RmnQ");
/* harmony import */ var _shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/service/local-storage.service */ "y7ii");
/* harmony import */ var _shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/service/events.service */ "r5fM");
/* harmony import */ var _tontines_events_services_tontines_events_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tontines-events/services/tontines-events.service */ "eEpS");















let DashboardPage = class DashboardPage {
    constructor(popoverController, event, error, invitation, eventService, alertController, navController, userService, authService, router, ui, localStorage) {
        this.popoverController = popoverController;
        this.event = event;
        this.error = error;
        this.invitation = invitation;
        this.eventService = eventService;
        this.alertController = alertController;
        this.navController = navController;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.ui = ui;
        this.localStorage = localStorage;
        this.ui.hardwareBackButton();
        this.ckeckSessionData();
        this.haveInvitation = false;
        this.nbInvitations = 0;
        this.event.subscribe('new-invitation', () => {
            this.getResquestedInvitation();
        });
        this.backService = null;
    }
    ngOnInit() {
        this.getResquestedInvitation();
        this.checkInvitations();
        this.authService.getVersion();
    }
    // Launch the backgroud service
    ionicViewWillLeave() {
        clearInterval(this.backService);
    }
    // check invitations 
    checkInvitations() {
        this.backService = setInterval(() => {
            this.getResquestedInvitation();
        }, 120000);
    }
    // check if the user has already fill the basic profile informations
    ckeckSessionData() {
        const data = this.userService.getUserData();
        if (data && (!data.firstname || !data.lastname)) {
            this.localStorage.setItem('fisrt-login', 'yes');
            this.navController.setDirection('root');
            this.router.navigateByUrl('/dashboard/user/profil');
        }
    }
    // Open contextual menu
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_5__["DashboardMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
    // check event Invitations
    getEventInvitation(invitations) {
        if (this.userService.getUserData()) {
            this.eventService.getAllEventsInvitation().subscribe((reponse) => {
                reponse.liste.forEach(data => {
                    if (data && data.EtatInvitation === 'en attente') {
                        invitations.push(data);
                    }
                });
                this.nbInvitations = invitations.length;
                this.haveInvitation = true;
            }, error => {
                if (error && error.error && !error.error.success) {
                    if (error.error.user_not_found) {
                        this.error.renewSession().then((data) => {
                            if (data && data.result === 'OK') {
                                this.getEventInvitation(invitations);
                            }
                        });
                    }
                }
            });
        }
    }
    // Get the requested invitations
    getResquestedInvitation() {
        if (this.userService.getUserData()) {
            this.invitation.getInvitations().subscribe((reponse) => {
                if (reponse && reponse.success) {
                    if (reponse && reponse.liste) {
                        const invitations = [];
                        reponse.liste.forEach(data => {
                            if (data && data.EtatInvitation === 'en attente' && data.ValiditeCodeCoInvitation === 'valid') {
                                invitations.push(data);
                            }
                        });
                        this.nbInvitations = invitations.length;
                        this.haveInvitation = true;
                        this.getEventInvitation(invitations);
                    }
                }
            }, error => {
                if (error && error.error && !error.error.success) {
                    if (error.error.user_not_found) {
                        this.error.renewSession().then((data) => {
                            if (data && data.result === 'OK') {
                                this.getResquestedInvitation();
                            }
                            else {
                                this.haveInvitation = false;
                            }
                        });
                    }
                    else {
                        this.haveInvitation = false;
                    }
                }
                else {
                    this.haveInvitation = false;
                }
            });
        }
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__["EventService"] },
    { type: _shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_7__["InvitationsService"] },
    { type: _tontines_events_services_tontines_events_service__WEBPACK_IMPORTED_MODULE_14__["TontinesEventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "NlBI":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-menu/dashboard-menu.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    },
    {
        path: 'my-tontines',
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | my-tontines-my-tontines-module */[__webpack_require__.e("default~my-tontines-my-tontines-module~my-tontines-tontine-detail-tontine-detail-module~my-tontines-~ff41dc51"), __webpack_require__.e("my-tontines-my-tontines-module")]).then(__webpack_require__.bind(null, /*! ./my-tontines/my-tontines.module */ "X2qW")).then(m => m.MyTontinesPageModule)
            },
            {
                path: 'new',
                loadChildren: () => Promise.all(/*! import() | my-tontines-tontine-new-tontine-new-module */[__webpack_require__.e("default~my-tontines-tontine-detail-tontine-detail-module~my-tontines-tontine-new-tontine-new-module~~442cbc9c"), __webpack_require__.e("default~my-tontines-my-tontines-module~my-tontines-tontine-detail-tontine-detail-module~my-tontines-~ff41dc51"), __webpack_require__.e("my-tontines-tontine-new-tontine-new-module")]).then(__webpack_require__.bind(null, /*! ./my-tontines/tontine-new/tontine-new.module */ "UJ4L")).then(m => m.TontineNewPageModule)
            },
            {
                path: ':tontineId',
                loadChildren: () => Promise.all(/*! import() | my-tontines-tontine-detail-tontine-detail-module */[__webpack_require__.e("default~my-tontines-tontine-detail-tontine-detail-module~my-tontines-tontine-new-tontine-new-module~~442cbc9c"), __webpack_require__.e("default~my-tontines-my-tontines-module~my-tontines-tontine-detail-tontine-detail-module~my-tontines-~ff41dc51"), __webpack_require__.e("my-tontines-tontine-detail-tontine-detail-module")]).then(__webpack_require__.bind(null, /*! ./my-tontines/tontine-detail/tontine-detail.module */ "rlJU")).then(m => m.TontineDetailPageModule)
            }
        ]
    },
    {
        path: 'tontines-events',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | tontines-events-tontines-events-module */ "tontines-events-tontines-events-module").then(__webpack_require__.bind(null, /*! ./tontines-events/tontines-events.module */ "2Zhg")).then(m => m.TontinesEventsPageModule)
            },
            {
                path: 'new',
                loadChildren: () => Promise.all(/*! import() | tontines-events-new-event-new-event-module */[__webpack_require__.e("common"), __webpack_require__.e("tontines-events-new-event-new-event-module")]).then(__webpack_require__.bind(null, /*! ./tontines-events/new-event/new-event.module */ "6DB0")).then(m => m.NewEventPageModule)
            },
            {
                path: 'invitations',
                loadChildren: () => __webpack_require__.e(/*! import() | tontines-events-invite-event-invite-event-module */ "tontines-events-invite-event-invite-event-module").then(__webpack_require__.bind(null, /*! ./tontines-events/invite-event/invite-event.module */ "6+HV")).then(m => m.InviteEventPageModule)
            },
            {
                path: ':eventID',
                loadChildren: () => Promise.all(/*! import() | tontines-events-event-detail-event-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("tontines-events-event-detail-event-detail-module")]).then(__webpack_require__.bind(null, /*! ./tontines-events/event-detail/event-detail.module */ "dG6d")).then(m => m.EventDetailPageModule)
            },
            {
                path: ':eventID/my-tickets',
                loadChildren: () => Promise.all(/*! import() | tontines-events-event-detail-events-tickets-events-tickets-module */[__webpack_require__.e("common"), __webpack_require__.e("tontines-events-event-detail-events-tickets-events-tickets-module")]).then(__webpack_require__.bind(null, /*! ./tontines-events/event-detail/events-tickets/events-tickets.module */ "VeOp")).then(m => m.EventsTicketsPageModule)
            }
        ]
    },
    {
        path: 'join-tontine',
        loadChildren: () => __webpack_require__.e(/*! import() | join-tontine-join-tontine-module */ "join-tontine-join-tontine-module").then(__webpack_require__.bind(null, /*! ./join-tontine/join-tontine.module */ "/eIl")).then(m => m.JoinTontinePageModule)
    },
    {
        path: 'invitations',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | invitations-invitations-module */ "invitations-invitations-module").then(__webpack_require__.bind(null, /*! ./invitations/invitations.module */ "rk3R")).then(m => m.InvitationsPageModule)
            }
        ]
    },
    {
        path: 'my-wallet',
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | my-wallet-my-wallet-module */[__webpack_require__.e("common"), __webpack_require__.e("my-wallet-my-wallet-module")]).then(__webpack_require__.bind(null, /*! ./my-wallet/my-wallet.module */ "Dz5d")).then(m => m.MyWalletPageModule)
            },
            {
                path: 'history',
                loadChildren: () => Promise.all(/*! import() | my-wallet-history-history-module */[__webpack_require__.e("default~my-tontines-tontine-detail-tontine-detail-module~my-tontines-tontine-new-tontine-new-module~~442cbc9c"), __webpack_require__.e("common"), __webpack_require__.e("my-wallet-history-history-module")]).then(__webpack_require__.bind(null, /*! ./my-wallet/history/history.module */ "27e3")).then(m => m.HistoryPageModule)
            },
            {
                path: 'withdrawal',
                loadChildren: () => Promise.all(/*! import() | my-wallet-withdrawal-withdrawal-module */[__webpack_require__.e("common"), __webpack_require__.e("my-wallet-withdrawal-withdrawal-module")]).then(__webpack_require__.bind(null, /*! ./my-wallet/withdrawal/withdrawal.module */ "MbOI")).then(m => m.WithdrawalPageModule)
            }
        ]
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ./notifications/notifications.module */ "NP3i")).then(m => m.NotificationsPageModule)
    },
    {
        path: 'user',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "N8Yk")).then(m => m.UserPageModule)
            },
            {
                path: 'profil',
                loadChildren: () => Promise.all(/*! import() | user-user-profil-user-profil-module */[__webpack_require__.e("common"), __webpack_require__.e("user-profil-user-profil-module")]).then(__webpack_require__.bind(null, /*! ./user/user-profil/user-profil.module */ "6jfQ")).then(m => m.UserProfilPageModule)
            },
            {
                path: 'security',
                loadChildren: () => __webpack_require__.e(/*! import() | user-user-security-user-security-module */ "user-security-user-security-module").then(__webpack_require__.bind(null, /*! ./user/user-security/user-security.module */ "B4IQ")).then(m => m.UserSecurityPageModule)
            },
            {
                path: 'pay-method',
                loadChildren: () => __webpack_require__.e(/*! import() | user-user-pay-method-user-pay-method-module */ "user-pay-method-user-pay-method-module").then(__webpack_require__.bind(null, /*! ./user/user-pay-method/user-pay-method.module */ "wXDe")).then(m => m.UserPayMethodPageModule)
            },
            {
                path: 'auto-pay-tontine',
                loadChildren: () => Promise.all(/*! import() | user-auto-pay-tontine-auto-pay-tontine-module */[__webpack_require__.e("common"), __webpack_require__.e("auto-pay-tontine-auto-pay-tontine-module")]).then(__webpack_require__.bind(null, /*! ./user/auto-pay-tontine/auto-pay-tontine.module */ "YYob")).then(m => m.AutoPayTontinePageModule)
            },
        ]
    },
    {
        path: 'my-invitations', loadChildren: () => __webpack_require__.e(/*! import() | my-invitations-my-invitations-module */ "my-invitations-my-invitations-module").then(__webpack_require__.bind(null, /*! ./my-invitations/my-invitations.module */ "A7qy")).then(m => m.MyInvitationsPageModule)
    },
    { path: 'contact-us', loadChildren: () => Promise.all(/*! import() | contact-contact-us-contact-us-module */[__webpack_require__.e("common"), __webpack_require__.e("contact-contact-us-contact-us-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact-us/contact-us.module */ "WjMG")).then(m => m.ContactUsPageModule) },
    { path: 'feedback', loadChildren: () => Promise.all(/*! import() | contact-feedback-feedback-module */[__webpack_require__.e("common"), __webpack_require__.e("contact-feedback-feedback-module")]).then(__webpack_require__.bind(null, /*! ./contact/feedback/feedback.module */ "F1RL")).then(m => m.FeedbackPageModule) },
    {
        path: 'pesuswap', loadChildren: () => Promise.all(/*! import() | pesuswap-pesuswap-module */[__webpack_require__.e("default~my-tontines-tontine-detail-tontine-detail-module~my-tontines-tontine-new-tontine-new-module~~442cbc9c"), __webpack_require__.e("pesuswap-pesuswap-module")]).then(__webpack_require__.bind(null, /*! ./pesuswap/pesuswap.module */ "1Py+")).then(m => m.PesuswapPageModule)
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
/* harmony import */ var _dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-menu/dashboard-menu.component */ "93uJ");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");









let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"]
        ],
        declarations: [
            _dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"],
            _dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_7__["DashboardMenuComponent"]
        ],
        entryComponents: [
            _dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_7__["DashboardMenuComponent"]
        ]
    })
], DashboardPageModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map