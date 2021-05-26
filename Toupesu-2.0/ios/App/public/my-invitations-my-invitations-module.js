(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-invitations-my-invitations-module"],{

/***/ "9Job":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-invitations/my-invitation/my-invitation.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item> \r\n  <ion-label>\r\n    <h2 (click)=\"toggleAccordion()\">\r\n      {{ name }}       \r\n    </h2>\r\n    <div [ngClass]=\"this.isMenuOpen ? 'active' : 'inactive'\">    \r\n      <p class=\"ion-text-wrap\"><small>{{ 'DESCRIPTION_TEXT' | translate }}:</small> {{ description }}</p>   \r\n      <p><small>{{'M_CODE_TEXT' | translate}}:</small> {{ code }}</p> \r\n      <p><small>{{'TONTINE_DETAIL_TEXT8' | translate}}:</small> {{ contribution }}</p> \r\n      <p *ngIf=\"frequency\"><small>{{'TONTINE_DETAIL_TEXT4' | translate}}:</small> {{ frequency }}</p> \r\n      <p><small>{{'DATE_START' | translate }}:</small> {{ dateStart }}</p> \r\n      <p class=\"ion-text-wrap\"><small>{{'TONTINE_INVITE_SUBTEXT1' | translate }}:</small> {{ sender }}</p> \r\n      <div class=\"button-area ion-text-right ion-margin-top\">\r\n        <ion-button fill=\"outline\" color=\"warning\" [disabled]=\"loadingInvite\" (click)=\"joinTontine()\">{{'M_ACCEPT_TEXT' | translate}}</ion-button>\r\n        <ion-button fill=\"outline\" color=\"medium\" [disabled]=\"loadingInvite\" (click)=\"cancelTontine()\">{{ 'TONTINE_INVITE_SUBTEXT4' | translate }}</ion-button>\r\n      </div>\r\n    </div>              \r\n  </ion-label>\r\n  <ion-button shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\" *ngIf=\"isMenuOpen\" (click)=\"toggleAccordion()\">\r\n    <ion-icon slot=\"icon-only\" name=\"arrow-up\" color=\"warning\"></ion-icon>\r\n  </ion-button>\r\n  <ion-button shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\" *ngIf=\"!isMenuOpen\" (click)=\"toggleAccordion()\">\r\n    <ion-icon slot=\"icon-only\" name=\"arrow-down\" color=\"warning\"></ion-icon>\r\n  </ion-button>  \r\n</ion-item>");

/***/ }),

/***/ "A7qy":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/my-invitations/my-invitations.module.ts ***!
  \*******************************************************************/
/*! exports provided: MyInvitationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInvitationsPageModule", function() { return MyInvitationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_invitations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-invitations.page */ "VxSk");
/* harmony import */ var _my_invitation_my_invitation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-invitation/my-invitation.component */ "Wk1D");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");









const routes = [
    {
        path: '',
        component: _my_invitations_page__WEBPACK_IMPORTED_MODULE_6__["MyInvitationsPage"]
    }
];
let MyInvitationsPageModule = class MyInvitationsPageModule {
};
MyInvitationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _my_invitations_page__WEBPACK_IMPORTED_MODULE_6__["MyInvitationsPage"],
            _my_invitation_my_invitation_component__WEBPACK_IMPORTED_MODULE_7__["MyInvitationComponent"]
        ]
    })
], MyInvitationsPageModule);



/***/ }),

/***/ "Cgu5":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-invitations/my-invitations.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  color=\"primary\" defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n      <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'INVITATION_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content pullingIcon=\"reload-outline\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid id=\"my-invitations\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-searchbar placeholder=\"{{ 'NAME_TEXT' | translate }}\" type=\"text\" debounce=\"500\"\r\n          (ionChange)=\"searchForInvitation($event)\"></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"loading\">\r\n      <ion-col>\r\n        <p class=\"ion-text-center\">\r\n          <ion-spinner name=\"circles\"></ion-spinner>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <my-invitation (click)=\"getItem(invit)\" *ngFor=\"let invit of invitations\" name=\"{{ invit.tontine_name }}\"\r\n            description=\"{{ invit.tontine_description }}\" code=\"{{ invit.CodeInvitation }}\"\r\n            frequency=\"{{ invit.tontine_frequency ? (invit.tontine_frequency | translate) : '' }}\" contribution=\"{{ invit.tontine_contribution }}\"\r\n            dateStart=\"{{ invit.tontine_date }}\" sender=\"{{ invit.tontine_admin_firstname }} {{ invit.tontine_admin_lastname }}\"\r\n           >\r\n          </my-invitation>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div *ngIf=\"invitations && invitations.length === 0 &&  !loading\">\r\n      <p class=\"ion-text-center\">\r\n        {{ 'TONTINE_INVITE_TEXT8' | translate }}\r\n      </p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ "TGs3":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/my-invitations/my-invitation/my-invitation.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbXktaW52aXRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQzs7b0JBQUE7QUFHQTtFQUNHLGNBQUE7QUFDSjtBQUVDO0VBQ0csYUFBQTtBQUNKIiwiZmlsZSI6Im15LWludml0YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogRm9sbG93aW5nIGNsYXNzZXMgZGlzcGxheS9oaWRlIHRoZSAnbWVudSdcclxuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxyXG4gLy8gY29tcG9uZW50IGNsYXNzICovXHJcbiAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiB9XHJcblxyXG4gLmluYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9Il19 */");

/***/ }),

/***/ "VxSk":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/my-invitations/my-invitations.page.ts ***!
  \*****************************************************************/
/*! exports provided: MyInvitationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInvitationsPage", function() { return MyInvitationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_invitations_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-invitations.page.html */ "Cgu5");
/* harmony import */ var _my_invitations_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-invitations.page.scss */ "wUe9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../invitations/service/invitations.service */ "8N1Y");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _tontines_events_services_tontines_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tontines-events/services/tontines-events.service */ "eEpS");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user/service/user.service */ "6Hie");











let MyInvitationsPage = class MyInvitationsPage {
    constructor(fb, invitation, event, alertController, eventService, userService, error) {
        this.fb = fb;
        this.invitation = invitation;
        this.event = event;
        this.alertController = alertController;
        this.eventService = eventService;
        this.userService = userService;
        this.error = error;
        this.invitations = [];
        this.invitations = [];
        this.tontines = [];
        this.tempData = [];
        this.user = this.userService.getUserData();
        this.loading = false;
        this.loadingInvite = false;
        this.loadingInviteBis = false;
        this.allData = [];
        this.tontineInvitations = [];
        this.eventInvitations = [];
        this.nbItems = 10;
        this.backService = null;
        this.event.subscribe('new-invitation', () => {
            this.loading = true;
            this.getResquestedInvitation(null);
        });
    }
    ngOnInit() {
        this.initForm();
        this.loading = true;
        this.getResquestedInvitation(null);
    }
    // Init form
    initForm() {
        this.formInvited = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // Filter the list of tontines
    searchForInvitation(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.tempData.filter((invitation) => {
                return (invitation.tontine_name ? invitation.tontine_name.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    invitation.tontine_description.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.tempData;
        }
        if (this.allData.length > this.nbItems) {
            this.invitations = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.invitations.push(this.allData[this.invitations.length]);
            }
        }
        else {
            this.invitations = this.allData;
        }
    }
    // Get the requested invitations
    getResquestedInvitation(event) {
        this.invitation.getInvitations().subscribe((reponse) => {
            if (reponse && reponse.success) {
                if (reponse && reponse.liste) {
                    const invitations = [];
                    reponse.liste.forEach(data => {
                        if (data && data.EtatInvitation === 'en attente' && data.ValiditeCodeCoInvitation === 'valid') {
                            invitations.push(data);
                        }
                    });
                    this.tontineInvitations = invitations;
                    this.allData = this.tontineInvitations;
                    this.tempData = this.allData;
                    if (this.allData.length > this.nbItems) {
                        this.invitations = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.invitations.push(this.allData[this.invitations.length]);
                        }
                    }
                    else {
                        this.invitations = this.allData;
                    }
                }
                this.getEventResquestedInvitation(event);
            }
            else {
                this.loading = false;
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            this.loading = false;
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getResquestedInvitation(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get the event invitations
    getEventResquestedInvitation(event) {
        this.eventService.getAllEventsInvitation().subscribe((reponse) => {
            if (reponse && reponse.success) {
                if (reponse && reponse.liste) {
                    const invitations = [];
                    reponse.liste.forEach(data => {
                        if (data && data.EtatInvitation === 'en attente') {
                            invitations.push(data);
                        }
                    });
                    this.allData = [];
                    this.eventInvitations = invitations;
                    this.allData = this.allData.concat(this.tontineInvitations);
                    this.allData = this.allData.concat(this.eventInvitations);
                    this.tempData = this.allData;
                    if (this.allData.length > this.nbItems) {
                        this.invitations = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.invitations.push(this.allData[this.invitations.length]);
                        }
                    }
                    else {
                        this.invitations = this.allData;
                    }
                }
            }
            this.loading = false;
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 500);
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            this.loading = false;
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getResquestedInvitation(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getResquestedInvitation(event);
        ;
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.getResquestedInvitation(null);
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
                if (this.invitations.length < this.allData.length) {
                    this.invitations.push(this.allData[this.invitations.length]);
                }
                else if (this.invitations.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Get the item
    getItem(data) {
        this.event.publish('invitation-data', data);
    }
};
MyInvitationsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_6__["InvitationsService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _tontines_events_services_tontines_events_service__WEBPACK_IMPORTED_MODULE_8__["TontinesEventsService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] }
];
MyInvitationsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false },] }]
};
MyInvitationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-invitations',
        template: _raw_loader_my_invitations_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_invitations_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyInvitationsPage);



/***/ }),

/***/ "Wk1D":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/my-invitations/my-invitation/my-invitation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MyInvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInvitationComponent", function() { return MyInvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_invitation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-invitation.component.html */ "9Job");
/* harmony import */ var _my_invitation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-invitation.component.scss */ "TGs3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../invitations/service/invitations.service */ "8N1Y");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/invitations/service/inivitation-error.service */ "/OOw");
/* harmony import */ var _tontines_events_services_tontines_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../tontines-events/services/tontines-events.service */ "eEpS");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");















let MyInvitationComponent = class MyInvitationComponent {
    constructor(router, translate, event, navController, userService, error, invitation, invitationError, localStorage, eventService, ui) {
        this.router = router;
        this.translate = translate;
        this.event = event;
        this.navController = navController;
        this.userService = userService;
        this.error = error;
        this.invitation = invitation;
        this.invitationError = invitationError;
        this.localStorage = localStorage;
        this.eventService = eventService;
        this.ui = ui;
        this.isMenuOpen = false;
        this.event.subscribe('invitation-data', data => {
            this.invitationData = data;
        });
    }
    ngOnInit() { }
    // Toggle accordion
    toggleAccordion() {
        this.isMenuOpen = !this.isMenuOpen;
        this.loadingInvite = false;
    }
    // Join to tontine or event
    joinTontine() {
        const type = this.invitationData.TypeInvitation;
        switch (type) {
            case 'EVENT':
                this.joinTontineEvent();
                break;
            case 'TONTINE':
                this.joinTontineNormal();
                break;
            default:
                break;
        }
    }
    // Join a tontine
    joinTontineNormal() {
        this.loadingInvite = true;
        let prefix = '';
        const credentials = this.userService.getUserSecret();
        prefix = credentials ? credentials.phone_prefix : '';
        const params = {
            code_invitation: this.invitationData.CodeInvitation,
            prefix: prefix,
            phone_prefix: prefix,
            phoneid: prefix,
            phone: this.invitationData && this.invitationData.InvitePhoneSansPrefix ? this.invitationData.InvitePhoneSansPrefix : '',
            emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
        };
        this.translate.get('M_ACCEPT_LOADING').subscribe(value => {
            this.ui.presentLoading(value);
        });
        this.invitation.acceptInvitationTontine(params)
            .subscribe((reponse) => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            if (reponse && reponse.success) {
                this.translate.get('USER_SECURITY_MSG10').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.event.publish('new-invitation');
                this.navController.setDirection('root');
                this.router.navigate(['dashboard/my-tontines']);
            }
        }, error => {
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.ui.dismissLoading();
                            this.joinTontineNormal();
                        }
                        else {
                            this.ui.dismissLoading();
                            this.loadingInvite = false;
                        }
                    });
                }
                else {
                    this.loadingInvite = false;
                    this.ui.dismissLoading();
                    this.invitationError.manageInvitationError(error);
                }
            }
            else {
                this.loadingInvite = false;
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // Join an event
    joinTontineEvent() {
        this.loadingInvite = true;
        let prefix = '';
        const credentials = this.userService.getUserSecret();
        prefix = credentials ? credentials.phone_prefix : '';
        const params = {
            code_invitation: this.invitationData.CodeInvitation,
            prefix: prefix,
            phone_prefix: prefix,
            phoneid: prefix,
            phone: this.invitationData && this.invitationData.InvitePhoneSansPrefix ? this.invitationData.InvitePhoneSansPrefix : '',
            emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
        };
        this.translate.get('M_ACCEPT_LOADING').subscribe(value => {
            this.ui.presentLoading(value);
        });
        this.eventService.acceptInvitationEventWithToken(params)
            .subscribe((reponse) => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            if (reponse && reponse.success) {
                if (reponse.invitation.etat === 'en attente') {
                    this.translate.get('USER_SECURITY_MSG10').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                }
                else {
                    this.translate.get('USER_SECURITY_MSG11').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                }
                this.localStorage.setItem('new-event', 'yes');
                this.event.publish('new-invitation');
                this.router.navigate(['dashboard/tontines-events']);
            }
        }, error => {
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.ui.dismissLoading();
                            this.joinTontineNormal();
                        }
                        else {
                            this.loadingInvite = false;
                            this.ui.dismissLoading();
                        }
                    });
                }
                else {
                    this.loadingInvite = false;
                    this.ui.dismissLoading();
                    this.invitationError.manageInvitationError(error);
                }
            }
            else {
                this.loadingInvite = false;
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // Cancel the invitation
    cancelTontine() {
        const type = this.invitationData.TypeInvitation;
        switch (type) {
            case 'EVENT':
                this.cancelTontineEvent();
                break;
            case 'TONTINE':
                this.cancelTontineNormal();
                break;
            default:
                break;
        }
    }
    // Cancel invitation
    cancelTontineNormal() {
        this.loadingInvite = true;
        let prefix = '';
        const credentials = this.userService.getUserSecret();
        prefix = credentials ? credentials.phone_prefix : '';
        const params = {
            code_invitation: this.invitationData.CodeInvitation,
            motif: 'Je ne veux pas',
            phone_prefix: prefix,
            emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
        };
        this.translate.get('M_DELETE_LOADING').subscribe(value => {
            this.ui.presentLoading(value);
        });
        this.invitation.cancelInvitationWithToken(params)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            this.loadingInvite = false;
            if (reponse && reponse.success) {
                this.translate.get('CANCEL_INVITATION_MSG').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.event.publish('new-invitation');
                this.navController.setDirection('root');
                this.router.navigate(['dashboard/my-tontines']);
            }
        }, error => {
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.ui.dismissLoading();
                            this.cancelTontineNormal();
                        }
                        else {
                            this.ui.dismissLoading();
                            this.loadingInvite = false;
                        }
                    });
                }
                else {
                    this.loadingInvite = false;
                    this.ui.dismissLoading();
                    this.invitationError.manageInvitationError(error);
                }
            }
            else {
                this.loadingInvite = false;
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // Cancel invitation
    cancelTontineEvent() {
        this.loadingInvite = true;
        let prefix = '';
        const credentials = this.userService.getUserSecret();
        prefix = credentials ? credentials.phone_prefix : '';
        const params = {
            code_invitation: this.invitationData.CodeInvitation,
            motif: 'Je ne veux pas',
            phone_prefix: prefix,
            emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
        };
        this.translate.get('M_DELETE_LOADING').subscribe(value => {
            this.ui.presentLoading(value);
        });
        this.eventService.declineEventInvitation(params)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            this.loadingInvite = false;
            if (reponse && reponse.success) {
                this.translate.get('CANCEL_INVITATION_MSG').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.event.publish('new-invitation');
                this.navController.setDirection('root');
                this.router.navigate(['dashboard']);
            }
        }, error => {
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.ui.dismissLoading();
                            this.cancelTontineEvent();
                        }
                        else {
                            this.ui.dismissLoading();
                            this.loadingInvite = false;
                        }
                    });
                }
                else {
                    this.loadingInvite = false;
                    this.ui.dismissLoading();
                    this.invitationError.manageInvitationError(error);
                }
            }
            else {
                this.loadingInvite = false;
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
};
MyInvitationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_6__["InvitationsService"] },
    { type: src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_9__["InivitationErrorService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"] },
    { type: _tontines_events_services_tontines_events_service__WEBPACK_IMPORTED_MODULE_10__["TontinesEventsService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] }
];
MyInvitationComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    code: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contribution: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dateStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    frequency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    sender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MyInvitationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-invitation',
        template: _raw_loader_my_invitation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_invitation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyInvitationComponent);



/***/ }),

/***/ "wUe9":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/my-invitations/my-invitations.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbnZpdGF0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=my-invitations-my-invitations-module.js.map