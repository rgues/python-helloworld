(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tontines-events-invite-event-invite-event-module"],{

/***/ "/LsO":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/invite-event/invite-list/invite-list.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "/ox+":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/invite-event/invite-event.page.ts ***!
  \*****************************************************************************/
/*! exports provided: InviteEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteEventPage", function() { return InviteEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invite_event_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invite-event.page.html */ "QwK6");
/* harmony import */ var _invite_event_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite-event.page.scss */ "LN67");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");





let InviteEventPage = class InviteEventPage {
    constructor(events) {
        this.events = events;
        this.segmentValue = 'invit';
        this.events.subscribe('new-invitation-event', () => {
            this.segmentValue = 'list';
        });
    }
    ngOnInit() {
        this.isInvitSelected = true;
    }
    segmentChanged() {
        this.isInvitSelected = !this.isInvitSelected;
    }
};
InviteEventPage.ctorParameters = () => [
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }
];
InviteEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invite-event',
        template: _raw_loader_invite_event_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invite_event_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InviteEventPage);



/***/ }),

/***/ "6+HV":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/invite-event/invite-event.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InviteEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteEventPageModule", function() { return InviteEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _invite_event_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invite-event.page */ "/ox+");
/* harmony import */ var _invite_list_invite_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invite-list/invite-list.component */ "YDpX");









const routes = [
    {
        path: '',
        component: _invite_event_page__WEBPACK_IMPORTED_MODULE_7__["InviteEventPage"],
    }
];
let InviteEventPageModule = class InviteEventPageModule {
};
InviteEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _invite_event_page__WEBPACK_IMPORTED_MODULE_7__["InviteEventPage"],
            _invite_list_invite_list_component__WEBPACK_IMPORTED_MODULE_8__["InviteListComponent"]
        ]
    })
], InviteEventPageModule);



/***/ }),

/***/ "LN67":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/invite-event/invite-event.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGUtZXZlbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "QwK6":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/invite-event/invite-event.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo2\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/tontines-events\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center title-md-right\">\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-segment (ionChange)=\"segmentChanged()\" value=\"invit\">\n      <ion-segment-button value=\"invit\">\n        <ion-label class=\"ion-text-capitalize\">{{ 'TONTINE_INVITED_TEXT1' | translate }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"list\">\n        <ion-label class=\"ion-text-capitalize\">{{ 'M_ALL_INVITATIONS' | translate }}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<div class=\"invited\" *ngIf=\"isInvitSelected === true\">\n  <ion-text>\n    {{ 'M_INVITE_MEMBERS' | translate }}\n  </ion-text>\n  <app-tontine-invited-event></app-tontine-invited-event>\n</div>\n<div class=\"invited\" *ngIf=\"isInvitSelected === false\">\n  <app-invite-list></app-invite-list>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "VUrT":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/invite-event/invite-list/invite-list.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n  <ion-refresher-content\r\n    pullingIcon=\"reload-outline\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n  </ion-refresher-content>\r\n</ion-refresher>\r\n<ion-grid>\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-searchbar placeholder=\"{{ 'LOGIN_TEXT1' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForInvitation($event)\">\r\n      </ion-searchbar>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<ion-grid id=\"invitation-list\">\r\n\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-row *ngIf=\"eventsList && eventsList.length > 0 && !loading\">\r\n    <ion-col>\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let invitation of eventsList, index as num\">\r\n          <ion-badge color=\"warning\" slot=\"start\">{{num + 1}}</ion-badge>\r\n          <ion-label>\r\n            <h2> <small>{{ 'TONTINE_INVITE_SUBTEXT2' | translate }} : </small> {{invitation.InviteEmail || invitation.InvitePhone}}</h2>\r\n            <h3><small>{{ 'TONTINE_EVENT_INVIT_TEXT4' | translate }} : </small>{{ invitation && invitation.updated_at ? invitation.updated_at.split(' ')[0] : '' }}</h3>\r\n            <div *ngIf=\"invitation.EtatInvitation === 'en attente'; then pending; else activated\">\r\n            </div>\r\n            <ng-template #pending>\r\n              <div class=\"button-area\">\r\n                <ion-badge color=\"primary\"  *ngIf=\"isCodeValid(invitation)\">{{ 'TONTINE_INVITE_SUBTEXT7' | translate }} ...</ion-badge>\r\n                \r\n                <ion-button fill=\"outline\" color=\"warning\" *ngIf=\"isCurrentUser(invitation) && !isInvitationAdmin(invitation)\" (click)=\"confirmUserInvitation(invitation)\">\r\n                 <small>{{ 'TONTINE_INVITE_SUBTEXT3' | translate }}</small>  \r\n                </ion-button>\r\n                <ion-button fill=\"outline\" color=\"medium\"  *ngIf=\"isCurrentUser(invitation) && !isInvitationAdmin(invitation)\" (click)=\"openDenyInvitationDialog(invitation, num)\">\r\n                  <small>{{ 'TONTINE_INVITE_SUBTEXT4' | translate }}</small> </ion-button>\r\n                  \r\n                <ion-button fill=\"outline\"*ngIf=\"!isCodeValid(invitation) && isCurrentUser(invitation) && isInvitationAdmin(invitation)\" color=\"warning\" (click)=\"ResendInvitation(invitation)\">\r\n                  <small>{{ 'TONTINE_INVITE_SUBTEXT8' | translate }}</small></ion-button>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template #activated>\r\n\r\n              <ion-badge color=\"primary\" *ngIf=\"isStatutRefused(invitation)\">{{ 'TONTINE_INVITE_SUBTEXT5' | translate }}\r\n                ...</ion-badge>\r\n                <ion-badge color=\"primary\" *ngIf=\"isStatutActivated(invitation)\">{{ 'TONTINE_INVITE_SUBTEXT6' | translate }}\r\n                ...</ion-badge>\r\n            </ng-template>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"eventsList && eventsList.length === 0 &&  !loading\">\r\n    <ion-col >\r\n      <p class=\"ion-text-center\"> \r\n        {{ 'TONTINE_INVITE_TEXT8' | translate }}\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n  <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>");

/***/ }),

/***/ "YDpX":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/invite-event/invite-list/invite-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: InviteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteListComponent", function() { return InviteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invite_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invite-list.component.html */ "VUrT");
/* harmony import */ var _invite_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite-list.component.scss */ "/LsO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontines-events.service */ "eEpS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/invitations/service/inivitation-error.service */ "/OOw");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let InviteListComponent = class InviteListComponent {
    constructor(tontine, userService, events, invitationError, alertController, error, location, event, ui) {
        this.tontine = tontine;
        this.userService = userService;
        this.events = events;
        this.invitationError = invitationError;
        this.alertController = alertController;
        this.error = error;
        this.location = location;
        this.event = event;
        this.ui = ui;
        this.mytontine = [];
        this.eventsList = [];
        this.tempData = [];
        this.loading = false;
        this.loadingList = false;
        this.tontineData = this.event.getCurrentTontineEventData();
        this.backService = null;
        this.nbItems = 10;
        this.allData = [];
        this.events.subscribe('new-invitation-event', () => {
            this.loading = true;
            this.loadingInvite = true;
            this.refreSher(null);
        });
    }
    ngOnInit() {
        this.user = this.userService.getUserData();
        this.loading = true;
        this.getListingInvitations(null);
    }
    searchForInvitation(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.tempData.filter((invitation) => {
                return (invitation.InviteEmail ? invitation.InviteEmail.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    invitation.InvitePhone.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.tempData;
        }
        if (this.allData.length > this.nbItems) {
            this.eventsList = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.eventsList.push(this.allData[this.eventsList.length]);
            }
        }
        else {
            this.eventsList = this.allData;
        }
    }
    // check if the code is valid
    isCodeValid(invitation) {
        return invitation.ValiditeCodeCoInvitation === 'valid';
    }
    // check if it is admin
    isInvitationAdmin(invitation) {
        return invitation.IsAdminInvitation === 1;
    }
    // check if the is current user 
    isCurrentUser(invitation) {
        return invitation.tontine_admin_id === this.user.id;
    }
    // check if the statut is refused
    isStatutRefused(invitation) {
        return invitation.EtatInvitation === 'refused';
    }
    // check if the statut is activated
    isStatutActivated(invitation) {
        return invitation.EtatInvitation === 'activated';
    }
    // Get the requested invitation
    getListingInvitations(event) {
        this.tontine.getAllEventsInvitations(this.tontineData.id).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.success) {
                if (reponse && reponse.liste) {
                    this.allData = reponse.liste;
                    this.tempData = reponse.liste;
                    if (this.allData.length > this.nbItems) {
                        this.eventsList = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.eventsList.push(this.allData[this.eventsList.length]);
                        }
                    }
                    else {
                        this.eventsList = this.allData;
                    }
                }
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getListingInvitations(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.invitationError.manageInvitationError(error);
                }
            }
            else {
                this.loading = false;
                this.error.manageError(error);
            }
        });
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getListingInvitations(event);
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.getListingInvitations(null);
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
                if (this.eventsList.length < this.allData.length) {
                    this.eventsList.push(this.allData[this.eventsList.length]);
                }
                else if (this.eventsList.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Renew the tontine invitation code
    ResendInvitation(idItem) {
        const params = {
            tontine_id: this.tontineData.id,
            invitation_id: idItem
        };
        this.location.get('SENDING_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.tontine.resendInvitationEvent(params).subscribe((reponse) => {
            this.ui.dismissLoading();
            this.getListingInvitations(null);
            this.location.get('TONTINE_EVENT_INVIT_TEXT5').subscribe(value => {
                this.ui.presentToast(value);
            });
        }, error => {
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === 'OK') {
                            this.ResendInvitation(idItem);
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.invitationError.manageInvitationError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // confirmed the user invitation
    confirmUserInvitation(invitation) {
        this.loadingInvite = true;
        const param = {
            event_id: invitation.tontine_id,
            invitation_id: invitation.invitation_id,
            motif: "Tout est ok",
        };
        this.location.get('M_ACCEPT_LOADING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.tontine.AcceptEventInvitationAdmin(param).subscribe((reponse) => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            if (reponse && reponse.success) {
                this.getListingInvitations(null);
            }
        }, error => {
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === 'OK') {
                            this.confirmUserInvitation(invitation);
                        }
                        else {
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
    // Open dilalog delete invitation
    openDenyInvitationDialog(invitation, index) {
        const params = {
            id: invitation.invitation_id,
            adminId: invitation.tontine_admin_id,
            index: index
        };
        this.location.get(['M_INVITE_DENY_TITLE', 'M_INVITE_DENY_MSG', 'M_INVITE_DENY_PLACEHOLDER']).subscribe(trans => {
            this.confirmDenyAlert(trans.M_INVITE_DENY_TITLE, trans.M_INVITE_DENY_MSG, trans.M_INVITE_DENY_PLACEHOLDER, params);
        });
    }
    confirmDenyAlert(title, message, placeholder, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                inputs: [
                    {
                        name: 'motif',
                        type: 'text',
                        id: 'motif-id',
                        placeholder: placeholder
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (ans) => {
                            this.location.get('M_INVITATION_DENY_MSG').subscribe(trans => {
                                this.refuseUserInvitation(params, ans.motif || trans);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Refuse the invitation
    refuseUserInvitation(param, motif) {
        this.loadingInvite = true;
        const params = {
            event_id: this.eventsList[param.index].tontine_id,
            motif: motif,
            invitation_id: param.id
        };
        this.location.get('M_DENY_LOADING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.tontine.declineEventInvitationAdmin(params).subscribe((reponse) => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            this.getListingInvitations(null);
            this.location.get('DENY_MEMBER_INVITATION').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }, error => {
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === 'OK') {
                            this.refuseUserInvitation(param, motif);
                        }
                        else {
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
InviteListComponent.ctorParameters = () => [
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_8__["InivitationErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] }
];
InviteListComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], { static: false },] }]
};
InviteListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invite-list',
        template: _raw_loader_invite_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invite_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InviteListComponent);



/***/ })

}]);
//# sourceMappingURL=tontines-events-invite-event-invite-event-module.js.map