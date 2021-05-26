(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invitations-invitations-module"],{

/***/ "BHqw":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/invitations/invitation-list/invitation-list.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGF0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "IVcm":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/invitations/invitations.page.ts ***!
  \***********************************************************/
/*! exports provided: InvitationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationsPage", function() { return InvitationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invitations_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invitations.page.html */ "hrFN");
/* harmony import */ var _invitations_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invitations.page.scss */ "RYQ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");





let InvitationsPage = class InvitationsPage {
    constructor(events) {
        this.events = events;
        this.segmentValue = 'invit';
        this.events.subscribe('new-invitation', () => {
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
InvitationsPage.ctorParameters = () => [
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }
];
InvitationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invitations',
        template: _raw_loader_invitations_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invitations_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InvitationsPage);



/***/ }),

/***/ "LXWp":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/invitations/invitation-list/invitation-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n<ion-grid  *ngIf=\"tontines && tontines.length > 0\">\r\n  <form [formGroup]=\"formInvited\">\r\n    <ion-row >\r\n      <ion-col size=\"12\">\r\n        <ion-item (click)=\"showTontines()\">\r\n          <ion-label>{{ 'M_TONTINE_TEXT' | translate }} : </ion-label>\r\n          <p><strong> {{getTruncateName(formInvited.value, 15)}}</strong> </p>          \r\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item>  \r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-grid>\r\n<ion-grid  *ngIf=\"!loading\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-searchbar placeholder=\"{{ 'LOGIN_TEXT1' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForInvitation($event)\">\r\n      </ion-searchbar>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<ion-grid id=\"invitation-list\">\r\n\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-row *ngIf=\"invitations && invitations.length > 0 && !loading\">\r\n    <ion-col>\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let invitation of invitations, index as num\">\r\n          <ion-badge color=\"warning\" slot=\"start\">{{num + 1}}</ion-badge>\r\n          <ion-label>\r\n            <h2><small>{{ 'TONTINE_INVITE_SUBTEXT2' | translate }}:</small> {{invitation.InviteEmail || invitation.InvitePhone}}</h2>\r\n            <h3><small>{{ 'M_TONTINE_INVITE_BY' | translate }}:</small>\r\n              {{invitation.tontine_admin_firstname ? invitation.tontine_admin_firstname : ''}}\r\n              {{invitation.tontine_admin_lastname ?  invitation.tontine_admin_lastname :  invitation.tontine_admin_phone_with_prefix }}</h3>\r\n            <div *ngIf=\"invitation.EtatInvitation === 'en attente'; then pending; else activated\">\r\n            </div>\r\n            <ng-template #pending>\r\n              <div class=\"button-area\">\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-button fill=\"outline\"*ngIf=\"checkCodeInValid(invitation)\" color=\"warning\" (click)=\"getTontineInvitationCode(invitation, formInvited.value.id)\">\r\n                      {{ 'TONTINE_INVITE_SUBTEXT8' | translate }}</ion-button>\r\n                    <ion-button fill=\"outline\" color=\"medium\" *ngIf=\"isAdmin(invitation)\" (click)=\"openDeleteInvitationDialog(invitation, formInvited.value.id)\">\r\n                      {{ 'DELETE_TEXT' | translate }}</ion-button>\r\n                  </ion-col>\r\n                  <ion-col class=\"ion-padding-top\">\r\n                    <ion-badge color=\"primary\"  *ngIf=\"checkCodeValid(invitation)\">{{ 'TONTINE_INVITE_SUBTEXT7' | translate }} ...</ion-badge>\r\n                  </ion-col>\r\n                </ion-row>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template #activated>\r\n              <div class=\"button-area\">\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-button fill=\"outline\" color=\"warning\" *ngIf=\"isActivated(invitation)\" (click)=\"confirmUserInvitation(invitation, formInvited.value.id)\">\r\n                      {{ 'TONTINE_INVITE_SUBTEXT3' | translate }}</ion-button>\r\n                    <ion-button fill=\"outline\" color=\"medium\"  *ngIf=\"isActivated(invitation)\" (click)=\"openDenyInvitationDialog(invitation, formInvited.value.id)\">\r\n                      {{ 'TONTINE_INVITE_SUBTEXT4' | translate }}</ion-button>\r\n                      <ion-button fill=\"outline\" color=\"medium\" *ngIf=\"canDelete(invitation)\" (click)=\"openDeleteInvitationDialog(invitation, formInvited.value.id)\">\r\n                        {{ 'DELETE_TEXT' | translate }}</ion-button>\r\n                  </ion-col>\r\n                  <ion-col class=\"ion-padding-top\">\r\n                    <ion-badge color=\"primary\" *ngIf=\"isRefused(invitation)\">{{ 'TONTINE_INVITE_SUBTEXT5' | translate }}\r\n                      ...</ion-badge>\r\n                      <ion-badge color=\"primary\" *ngIf=\"isCancelled(invitation)\">{{ 'TEXT_CANCEL' | translate }}\r\n                      ...</ion-badge>\r\n                      <ion-badge color=\"primary\" *ngIf=\"isAccepted(invitation)\">{{ 'TONTINE_INVITE_SUBTEXT6' | translate }}\r\n                      ...</ion-badge>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n           \r\n            </ng-template>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"invitations && invitations.length === 0 &&  !loading\">\r\n    <ion-col >\r\n      <p class=\"ion-text-center\"> \r\n        {{ 'TONTINE_INVITE_TEXT8' | translate }}\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n  <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>");

/***/ }),

/***/ "RYQ8":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/invitations/invitations.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGF0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "hrFN":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/invitations/invitations.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"with-logo2\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-tontines\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center title-md-right\">\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-segment (ionChange)=\"segmentChanged()\" [value]=\"segmentValue\">\n      <ion-segment-button value=\"invit\">\n        <ion-label class=\"ion-text-capitalize\">{{ 'TONTINE_INVITED_TEXT1' | translate }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"list\">\n        <ion-label class=\"ion-text-capitalize\">{{ 'M_ALL_INVITATIONS' | translate }}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<div class=\"invited\" *ngIf=\"isInvitSelected === true\">\n  <ion-text>\n    {{ 'M_INVITE_MEMBERS' | translate }}\n  </ion-text>\n  <app-tontine-invited></app-tontine-invited>\n</div>\n<div class=\"invited\" *ngIf=\"isInvitSelected === false\">\n  <app-invitation-list></app-invitation-list>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "q2fL":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/invitations/invitation-list/invitation-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: InvitationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationListComponent", function() { return InvitationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invitation_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invitation-list.component.html */ "LXWp");
/* harmony import */ var _invitation_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invitation-list.component.scss */ "BHqw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _service_invitations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/invitations.service */ "8N1Y");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/invitations/service/inivitation-error.service */ "/OOw");
/* harmony import */ var src_app_shared_select_data_select_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/select-data/select-data.component */ "NvQy");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
















let InvitationListComponent = class InvitationListComponent {
    constructor(fb, tontine, invitation, modatCtrl, util, event, alertController, userService, error, ui, translate, invitationError, zone) {
        this.fb = fb;
        this.tontine = tontine;
        this.invitation = invitation;
        this.modatCtrl = modatCtrl;
        this.util = util;
        this.event = event;
        this.alertController = alertController;
        this.userService = userService;
        this.error = error;
        this.ui = ui;
        this.translate = translate;
        this.invitationError = invitationError;
        this.zone = zone;
        this.invitations = [];
        this.tontines = [];
        this.tempData = [];
        this.user = this.userService.getUserData();
        this.loading = false;
        this.loadingInvite = false;
        this.loadingInviteBis = false;
        this.allData = [];
        this.nbItems = 10;
        this.backService = null;
        this.event.subscribe('new-invitation', () => {
            this.loading = true;
            this.getListOftontines(null);
        });
    }
    ngOnInit() {
        this.initForm();
        this.loading = true;
        this.getListOftontines(null);
    }
    // int form
    initForm() {
        this.formInvited = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // Filter the list of tontines
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
            this.invitations = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.invitations.push(this.allData[this.invitations.length]);
            }
        }
        else {
            this.invitations = this.allData;
        }
    }
    // show the tontine modal
    showTontines() {
        this.modatCtrl
            .create({
            component: src_app_shared_select_data_select_data_component__WEBPACK_IMPORTED_MODULE_11__["SelectDataComponent"],
            componentProps: {
                tontine: this.tontines,
                type: 'invitation'
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.role === 'select') {
                    this.formInvited.get('name').setValue(ans.data.name);
                    this.formInvited.get('id').setValue(ans.data.id);
                    this.loading = true;
                    this.getResquestedInvitation(ans.data.id, null);
                }
            });
        });
    }
    // get truncate name 
    getTruncateName(formData, nbCar) {
        return formData.name && formData.name.length < nbCar ? formData.name : formData.name ? formData.name.substring(0, nbCar) + '...' : '';
    }
    // check if the code is not valid
    checkCodeInValid(invitation) {
        return invitation.ValiditeCodeCoInvitation !== 'valid' && invitation.tontine_admin_id === this.user.id;
    }
    // check if the user is admin
    isAdmin(invitation) {
        return invitation.tontine_admin_id === this.user.id;
    }
    // check if the code is valid
    checkCodeValid(invitation) {
        return invitation.ValiditeCodeCoInvitation === 'valid';
    }
    // Check if the invitation is activated
    isActivated(invitation) {
        return invitation.EtatInvitation === 'activated' && invitation.tontine_admin_id === this.user.id;
    }
    // chek if the invitation is refused
    isRefused(invitation) {
        return invitation.EtatInvitation === 'refused';
    }
    // chek if the invitation is cancelled
    isCancelled(invitation) {
        return invitation.EtatInvitation === 'canceled';
    }
    // chek if the invitation is accepted
    isAccepted(invitation) {
        return invitation.EtatInvitation === 'accepted';
    }
    // check if the invitation is refused or cancelled
    canDelete(invitation) {
        return invitation.tontine_admin_id === this.user.id && (invitation.EtatInvitation === 'refused' || invitation.EtatInvitation === 'canceled');
    }
    // Get the list of tontines
    getListOftontines(event) {
        this.tontine.getMyTontine().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                reponse.liste_tontine.forEach(tontine => {
                    if (tontine.tontine.administrator === 1) {
                        this.tontines.push(tontine);
                    }
                });
                if (this.tontines && this.tontines.length > 0) {
                    this.tontines = this.util.oderByTontineDate(this.tontines);
                    this.zone.run(() => {
                        this.getResquestedInvitation(0, event);
                    });
                    setTimeout(() => {
                        this.formInvited.get('name').setValue(this.tontines[0].tontine.name);
                        this.formInvited.get('id').setValue(0);
                    }, 200);
                }
                else {
                    this.loading = false;
                }
            }
            else {
                this.loading = false;
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getListOftontines(event);
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
    // Get the requested invitations
    getResquestedInvitation(index, event) {
        const tontineData = this.tontines && this.tontines.length > 0 && index >= 0 ? this.tontines[index] : null;
        if (tontineData && tontineData.tontine && tontineData.tontine.administrator === 1) {
            this.invitation.getAllInvitation(tontineData.tontine.tontine_id, this.user.id).subscribe((reponse) => {
                if (reponse && reponse.success) {
                    if (reponse && reponse.liste) {
                        this.allData = reponse.liste;
                        this.tempData = reponse.liste;
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
                                this.getResquestedInvitation(index, event);
                            }
                            else {
                                this.loading = false;
                            }
                        });
                    }
                    else {
                        this.invitationError.manageInvitationError(error);
                    }
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            this.loading = false;
        }
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getResquestedInvitation(this.formInvited.value.id, event);
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.getResquestedInvitation(this.formInvited.value.name, null);
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
    // confirmed the user invitation
    confirmUserInvitation(invitation, index) {
        const param = {
            tontine_id: invitation.tontine_id,
            invitation_id: invitation.invitation_id,
            ajout_part_membre_en_contribuant_seances_passees_et_restantes: 'oui',
            ajout_part_membre_en_contribuant_seulement_seances_restantes: 'non'
        };
        this.loadingInvite = true;
        this.translate.get('M_ACCEPT_LOADING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.invitation.acceptguestInvitation(invitation.tontine_admin_id, param).subscribe((reponse) => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            if (reponse && reponse.success) {
                this.loading = true;
                this.getResquestedInvitation(index, null);
                this.invitations.splice(index, 1);
            }
        }, error => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            if (error && error.error && !error.error.success) {
                this.invitationError.manageInvitationError(error);
            }
            else {
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
        this.translate.get(['M_INVITE_DENY_TITLE', 'M_INVITE_DENY_MSG', 'M_INVITE_DENY_PLACEHOLDER']).subscribe(trans => {
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
                            this.translate.get('M_INVITATION_DENY_MSG').subscribe(trans => {
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
            tontine_id: this.tontines[param.index].tontine.tontine_id,
            motif: motif,
            phone_prefix: '',
            invitation_id: param.id
        };
        this.translate.get('M_DENY_LOADING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.invitation.cancelguestInvitation(param.adminId, params).subscribe((reponse) => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            this.translate.get('DENY_MEMBER_INVITATION').subscribe(trans => {
                this.ui.presentToast(trans);
            });
            this.loading = true;
            this.getResquestedInvitation(param.index, null);
        }, error => {
            this.loadingInvite = false;
            this.ui.dismissLoading();
            if (error && error.error && !error.error.success) {
                this.invitationError.manageInvitationError(error);
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Open dilalog delete invitation
    openDeleteInvitationDialog(invitation, index) {
        const params = {
            id: invitation.invitation_id,
            index: index
        };
        this.translate.get(['M_INVITE_DELETE_TITLE', 'M_INVITE_DELETE_MSG', 'M_INVITE_DELETE_PLACEHOLDER']).subscribe(trans => {
            this.confirmDeleteAlert(trans.M_INVITE_DELETE_TITLE, trans.M_INVITE_DELETE_MSG, trans.M_INVITE_DELETE_PLACEHOLDER, params);
        });
    }
    confirmDeleteAlert(title, message, placeholder, params) {
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
                            this.translate.get('M_INVITATION_DELETE_MSG').subscribe(trans => {
                                this.deleteUserInvitation(params, ans.motif || trans);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Delete the invitation
    deleteUserInvitation(param, motif) {
        this.loadingInviteBis = true;
        const params = {
            invitation_id: param.id,
            motif: motif
        };
        this.translate.get('M_DELETE_LOADING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.invitation.deleteInvitation(params).subscribe((reponse) => {
            this.loadingInviteBis = false;
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.translate.get('CANCEL_INVITATION_MESSAGE').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.loading = true;
                this.getResquestedInvitation(param.index, null);
            }
        }, error => {
            this.loadingInviteBis = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.invalid_token) {
                    this.loadingInviteBis = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.ui.dismissLoading();
                            this.deleteUserInvitation(param, motif);
                        }
                        else {
                            this.ui.dismissLoading();
                            this.loadingInviteBis = false;
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
    //  Renew the tontine invitation code
    getTontineInvitationCode(invitation, index) {
        this.loadingInviteBis = true;
        const params = {
            tontine_id: this.tontines[index].tontine.tontine_id,
            invitation_id: invitation.invitation_id
        };
        this.translate.get('M_CODE_LOADING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.invitation.getInvitationCode(invitation.tontine_admin_id, params).subscribe((reponse) => {
            this.loadingInviteBis = false;
            this.ui.dismissLoading();
            this.translate.get('TONTINE_INVITE_TEXT14').subscribe(value => {
                this.ui.presentToast(value);
            });
            this.loading = true;
            this.getResquestedInvitation(index, null);
        }, error => {
            this.loadingInviteBis = false;
            this.ui.dismissLoading();
            if (error && error.error && !error.error.success) {
                this.invitationError.manageInvitationError(error);
            }
            else {
                this.error.manageError(error);
            }
        });
    }
};
InvitationListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: _service_invitations_service__WEBPACK_IMPORTED_MODULE_7__["InvitationsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_10__["InivitationErrorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
InvitationListComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonInfiniteScroll"], { static: false },] }]
};
InvitationListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invitation-list',
        template: _raw_loader_invitation_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invitation_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InvitationListComponent);



/***/ }),

/***/ "rk3R":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/invitations/invitations.module.ts ***!
  \*************************************************************/
/*! exports provided: InvitationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationsPageModule", function() { return InvitationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _invitations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invitations.page */ "IVcm");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invitation-list/invitation-list.component */ "q2fL");









const routes = [
    {
        path: '',
        component: _invitations_page__WEBPACK_IMPORTED_MODULE_6__["InvitationsPage"],
    }
];
let InvitationsPageModule = class InvitationsPageModule {
};
InvitationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _invitations_page__WEBPACK_IMPORTED_MODULE_6__["InvitationsPage"],
            _invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_8__["InvitationListComponent"]
        ],
        providers: []
    })
], InvitationsPageModule);



/***/ })

}]);
//# sourceMappingURL=invitations-invitations-module.js.map