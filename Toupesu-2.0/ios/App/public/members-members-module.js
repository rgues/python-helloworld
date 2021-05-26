(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-members-module"],{

/***/ "39zs":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/add-member/add-member.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-member.component.html */ "9Plk");
/* harmony import */ var _add_member_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-member.component.scss */ "xzh2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");







let AddMemberComponent = class AddMemberComponent {
    constructor(modatCtrl, dateService, tontine) {
        this.modatCtrl = modatCtrl;
        this.dateService = dateService;
        this.tontine = tontine;
        this.tontineData = this.tontine.getCurrentTontineData();
        this.getRemainTime(this.tontineData.tontine);
    }
    ngOnInit() { }
    closeAddMember() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    // get the remain time
    getRemainTime(data) {
        this.timeRemainHour = this.dateService.getRemainTime(data);
    }
};
AddMemberComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_5__["DateserviceService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] }
];
AddMemberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-member',
        template: _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_member_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddMemberComponent);



/***/ }),

/***/ "4k/R":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/reduce-share/reduce-share.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ReduceShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceShareComponent", function() { return ReduceShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reduce_share_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reduce-share.component.html */ "lypj");
/* harmony import */ var _reduce_share_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduce-share.component.scss */ "s8NU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let ReduceShareComponent = class ReduceShareComponent {
    constructor(popoverController, error, ui, events, storage, tontine, translate, navParam, tontineError) {
        this.popoverController = popoverController;
        this.error = error;
        this.ui = ui;
        this.events = events;
        this.storage = storage;
        this.tontine = tontine;
        this.translate = translate;
        this.navParam = navParam;
        this.tontineError = tontineError;
        this.nbPartList = [];
        this.memberPart = 1;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.memberData = this.navParam.get('selectedMber');
        this.loading = false;
    }
    ngOnInit() {
        this.getPartAvailable();
    }
    close() {
        this.popoverController.dismiss();
    }
    // step 0:  Get the current number of part of the user
    // step 1:  Get the number of part max of the tontine
    // step 2:  Get the number of part max of the member
    // step 3:  Get the current number of of the tontine
    // step 4:  Construct the liste of part available for tontine
    // step 5:  Get the current number of part of the user
    // step 6:  Construct the liste of part available for tontine
    // Get number of part available
    getPartAvailable() {
        const currentPartMember = this.memberData ? this.memberData.nbPart : 1;
        const partAvailable = parseInt(currentPartMember, 10) - 1;
        const nbPartShows = partAvailable > 0 ? partAvailable : 0;
        if (nbPartShows) {
            for (let i = 0; i < nbPartShows; i++) {
                this.nbPartList.push(i + 1);
            }
        }
        return this.nbPartList;
    }
    // Reduce the new part of a member
    reducePartMembreTontine() {
        this.loading = true;
        const params = {
            nbre_part: this.memberPart,
            tontine_id: this.memberData.tontineId,
            user_id: this.memberData.member.id
        };
        this.tontine.removePartMembreTontine(params).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('ADD_SHARE_MSG1').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.storage.remove('app-tontines');
                this.events.publish('new-tontine');
                this.events.publish('new-membre');
            }
            this.close();
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.reducePartMembreTontine();
                        }
                        else {
                            this.loading = false;
                            this.close();
                        }
                    });
                }
                else {
                    this.close();
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.close();
                this.error.manageError(error);
            }
        });
    }
    // Can reduce part
    canDisableReducePart() {
        let can = false;
        if (this.loading || this.memberPart === 0 || this.memberPart > this.nbPartList[this.nbPartList.length - 1]) {
            can = true;
        }
        return can;
    }
    // Keyboard validation
    reducePartMembreTontineGo() {
        if (!this.canDisableReducePart()) {
            this.reducePartMembreTontine();
        }
        else {
            this.translate.get('MIN_SHARES_TEXT').subscribe(trans => {
                this.ui.presentToast(`${trans} : ${this.nbPartList.length}`);
            });
        }
    }
};
ReduceShareComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageData"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__["TontineErrorService"] }
];
ReduceShareComponent.propDecorators = {
    selectedMber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReduceShareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reduce-share',
        template: _raw_loader_reduce_share_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reduce_share_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReduceShareComponent);



/***/ }),

/***/ "54Tx":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/member-menu/member-menu.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"member-menu-popover\">\r\n  <ion-item  *ngIf=\"canAddShare()\" (click)=\"updateShare()\" lines=\"none\">\r\n    <ion-label>\r\n      {{'M_ADD_SHARE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"canUpdateRole()\" (click)=\"updateRole()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ selectedMber.member.administrator === 1 ? ('M_UNSET_TEXT' | translate) : ('M_SET_TEXT' | translate) }} {{ 'M_AS_ADMIN' | translate }}\r\n  </ion-label>\r\n  </ion-item>\r\n  <ion-item  *ngIf=\"canRemoveShare()\" (click)=\"reduceShare()\" lines=\"none\">\r\n    <ion-label>\r\n      {{'TEXT_REDUCE_SHARE' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"canEnable()\" (click)=\"enableOrDisableMember()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ selectedMber.member.active === 1 ? ('M_DISABLE_TEXT' | translate) : ('M_ENABLE_TEXT' | translate) }} \r\n  </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n");

/***/ }),

/***/ "8C4m":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/members.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + tontineId\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-left\">\r\n      {{ 'STOKVEL_MEMBERS_SHARE' | translate }}<span *ngIf=\"activeMembers&&activeMembers.length > 0\"> : {{activeMembers ? activeMembers.length : ''}}</span>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar type=\"text\" debounce=\"500\" (ionChange)=\"searchForMber($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"detail-members\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"!loading\">\r\n      <ion-col size=\"12\">\r\n          <ion-img class=\"inner-image\" [src]=\"'assets/members.svg'\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let member of members\">\r\n            <ion-avatar slot=\"start\">\r\n              <svg class=\"mytontine-icon\" [class.active-icon]=\"hasContribute(membres, member.id)\" preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 48.84 38\">\r\n                <defs>\r\n                    <clipPath id=\"pot-status-path\" transform=\"translate(-0.01 0)\">                            \r\n                        <path class=\"cls-1\" d=\"M1.85,24.61a11.87,11.87,0,0,1,7-12.14l.06,0,.18-.23L9.21,12c-1.1-.78-1.66-1.51-1.48-2.07.45-1.4,5.31-1.24,10.85.35s9.66,4,9.21,5.42c-.17.51-.91.81-2,.91v0s0,0,0,.11a5.29,5.29,0,0,0,.09.7,4,4,0,0,0,.11.49l.07.24c2.14,4.2,1.8,8.88-1.84,13.3-4.63,5.64-14.39,6.08-19.55-.11A12.26,12.26,0,0,1,1.85,24.61Z\"/>\r\n                    </clipPath>\r\n                </defs>                        \r\n                <path class=\"cls-3\" d=\"M5.39,13.66A13,13,0,0,0,1,23.5a11.83,11.83,0,0,0,.17,1.8,13.61,13.61,0,0,0,.45,1.76c.09.29.2.57.31.85a8.75,8.75,0,0,0,.37.83,15.76,15.76,0,0,0,.87,1.59,13,13,0,0,0,3.72,3.84,14.32,14.32,0,0,0,8.52,2.35,16.78,16.78,0,0,0,1.8-.18A14.59,14.59,0,0,0,19,35.95a13.58,13.58,0,0,0,6-3.72,12.35,12.35,0,0,0,2-3,12.86,12.86,0,0,0,1.12-3.47,11.71,11.71,0,0,0-1-7.26,11.06,11.06,0,0,1,.9,1.68A11.31,11.31,0,0,1,28.69,22a12,12,0,0,1,.23,3.86,13.57,13.57,0,0,1-1,3.78,12.86,12.86,0,0,1-2,3.36,13.63,13.63,0,0,1-1.39,1.41,14.14,14.14,0,0,1-1.58,1.19,14.82,14.82,0,0,1-3.58,1.69,13.77,13.77,0,0,1-1.93.46,18.23,18.23,0,0,1-2,.22,15.19,15.19,0,0,1-4-.29A15.44,15.44,0,0,1,6,35.35,12.24,12.24,0,0,1,4.5,34.11,14.78,14.78,0,0,1,.1,25.47a10.93,10.93,0,0,1-.08-2,13.12,13.12,0,0,1,2.61-7.21A11.06,11.06,0,0,1,5.39,13.66ZM6.84,9.9a1.61,1.61,0,0,1-.08-.83,1.93,1.93,0,0,1,.34-.81,2.43,2.43,0,0,1,1.54-.88,6.7,6.7,0,0,1,.86-.09H12a27.35,27.35,0,0,1,6.57,1.06A25.41,25.41,0,0,1,24.66,11a21.85,21.85,0,0,1,2.72,1.94,4.08,4.08,0,0,1,1.08,1.35,1.37,1.37,0,0,1,.09.89,1.32,1.32,0,0,1-.5.68,1.28,1.28,0,0,0,.31-.71,1.11,1.11,0,0,0-.22-.69,3.86,3.86,0,0,0-1.14-1c-.91-.56-1.86-1.08-2.82-1.56a36.4,36.4,0,0,0-6-2.31,40.51,40.51,0,0,0-6.3-1.29c-.53-.06-1.07-.12-1.61-.16L9.5,8a6.82,6.82,0,0,0-.78,0,2,2,0,0,0-1.35.49A1.67,1.67,0,0,0,6.84,9.9Z\" transform=\"translate(-0.01 0)\"/>\r\n                <g class=\"cls-4\">\r\n                    <rect class=\"cls-3\" x=\"1.43\" y=\"7.88\" width=\"26.63\" height=\"28.07\"/>\r\n                    <path class=\"cls-5\" d=\"M8,12.5l1.69,1.43-2.4-.72a4.85,4.85,0,0,0,.65-.64L8,12.5Zm.16,6.41L6.47,17.48l-2.2.26,3.89,1.17ZM4.78,16.05l-1.29.15,0,0-.24.29,3.24,1L4.78,16.05Zm5.58,2.6L8.67,17.23l-2.2.26,3.89,1.17ZM7.49,14.2l3.88,1.17L9.69,13.95l-2.2.26-.74-.63-.41.28,1.14.34h0l-1.92.22,0,0-.06,0,3.71,1.12L7.49,14.2Zm5.57,2.51-1.69-1.43-2.2.26,3.89,1.17ZM4.16,15.53l-.27.26.89.27-.62-.52Zm.62.52,3.89,1.17L7,15.8l-2.2.26Zm7.78,2.35L10.87,17l-2.2.26,3.89,1.17ZM5.41,14.47l-.47.38-.29.25L7,15.8,5.41,14.47ZM7,15.8,10.87,17,9.18,15.54,7,15.8Zm7.77,2.35-1.69-1.43-2.2.26,3.89,1.17Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M26.35,18.92l-2.49-.75,2.05-.24a3.39,3.39,0,0,0,.15.43s.11.2.29.56Zm-2.49-.75-2.05.24,3.63,1.1-1.58-1.33Zm2.95,1.75c-.08-.2-.16-.38-.24-.54l-1.13.13,1.37.41Zm-6,1.64,3.63,1.1-1.58-1.33-2.05.24Zm3.63,1.1h0l-2.05.24L26.06,24l-1.57-1.33,3.07,1v-.11a.6.6,0,0,0,.27-.08h0l-1.29-1-2,.24ZM21.8,18.41l-2.05.24,3.63,1.1L21.8,18.41ZM27,20.84,25.43,19.5l-2.05.24L27,20.84l-2,.24,2.52.76,0-.12c0-.15-.09-.31-.14-.46L27.23,21a1.78,1.78,0,0,0-.07-.22l-.15,0Zm-7.73-.61,3.63,1.1L21.33,20l-2.05.24Zm5.68.86-2.05.24,3.63,1.1L25,21.08Zm2.74,1.69a3.22,3.22,0,0,0-.1-.47l-1.06.12,1.16.35Zm-10-3.88L21.33,20l-1.58-1.33-2.05.24Zm5.68.86L21.33,20,25,21.08l-1.58-1.33Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M15.35,20.54l1.54,1.31-3.55-1.07,2-.23Zm.15,5.92L14,25.16l-2,.23,3.55,1.07Zm-2.16-5.69-2,.23,3.55,1.07-1.54-1.31Zm1.54,1.31,3.55,1.07-1.54-1.31-2,.23Zm-4.48,2L14,25.16l-1.54-1.31-2,.23Zm7.1,2.14L16,24.93l-2,.23,3.55,1.07ZM11.33,21l-2,.23,3.55,1.07L11.33,21Zm5.09,2.38-1.54-1.31-2,.23,3.55,1.07ZM20,24.46l-1.54-1.31-2,.23L20,24.46ZM8.86,22.79l3.55,1.07-1.54-1.31-2,.23Zm3.55,1.07L16,24.93l-1.54-1.31-2,.23ZM19.51,26,18,24.7l-2,.23L19.51,26ZM7.32,21.48l3.55,1.07L9.32,21.25l-2,.23Zm5.56.84-2,.23,3.55,1.07-1.54-1.31Zm1.54,1.31L18,24.7l-1.54-1.31-2,.23Zm7.1,2.14L20,24.46l-2,.23,3.55,1.07Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M3,27.22l1.53,1.29-1.9-.57c-.09-.21-.16-.43-.24-.65l.6-.07H3L2.35,27c0-.16-.1-.33-.14-.49l.83.7L5,27l1.53,1.29L3,27.22Zm4.43-2L6,23.94l-2,.23,3.52,1.06Zm-5.64-.94a.38.38,0,0,0,0,.08l.13,0-.14-.12ZM2,24.4l3.51,1.06L4,24.17H4L2.44,22.88,6,23.94,4.42,22.64l-2,.23h0l-.63.07c0,.19,0,.38,0,.57L4,24.17,2,24.4Zm7,2.12L7.48,25.23l-2,.23L9,26.52Zm-5.5-.83-1.45.17c0,.08,0,.16.05.24L5,27,3.5,25.69Zm5,2.35L7,26.75,5,27,8.55,28ZM2,24.4H1.85c0,.27.05.54.1.81l1.55.47L2,24.4ZM3.5,25.69,7,26.75,5.49,25.46l-2,.23Zm7,2.12L9,26.52l-2,.23,3.52,1.06Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M19.94,32.64l1.91-.22.71.6-.4.29-2.22-.67Zm1.33-4.4-1.91.22,3.38,1-1.47-1.24Zm3.38,1L23.18,28l-1.91.22,3.38,1-1.91.22,2.42.73c.07-.09.13-.19.19-.28l0-.06-.73-.61Zm-2.8,3.16-1.47-1.24-1.91.22,3.38,1Zm1.05.32c.2-.16.39-.33.58-.51l-1.63.19,1.06.32Zm-3.55-4.27-1.91.22,3.38,1-1.47-1.24Zm4.85,2.26-1.47-1.24-1.91.22,3.38,1Zm.49.15c.06-.07.11-.14.16-.22l-.64.07.48.14Zm-4.31.3-1.47-1.24L17,30.15l3.38,1Zm1.91-.22L20.82,29.7l-1.91.22,3.38,1-1.91.22,3.19,1,.06-.06-1.34-1.14Zm-6.76-2,3.38,1-1.47-1.24-1.91.22Zm6.77,2,1.88.57,0,0c.13-.14.24-.29.36-.45l-.36-.31-1.91.22Z\" transform=\"translate(-0.01 0)\"/>\r\n                    <path class=\"cls-5\" d=\"M12,32.24l1.51,1.28-3.48-1,2-.23Zm-2,.23L8,32.7l3.48,1L10,32.47Zm5,2.33-1.51-1.28-2,.23,3.48,1ZM6.05,32.93l3.48,1L8,32.7l-2,.23Zm5.45.82-2,.23L13,35,11.5,33.75Zm5,2.33L15,34.8,13,35l3.48,1Zm-2.77.33h.17c.26,0,.53,0,.79,0l-.16-.13-.8.1ZM6.05,32.93H5.94c.32.3.66.57,1,.84.18.14.36.27.55.4h0l.07,0L6.05,32.93Zm8.47,3.38L13,35l-2,.23h0L9.53,34l-2,.23h0l.15.1-.12-.1,3.47,1-1.33.16a12.94,12.94,0,0,0,1.74.6l.67.15L11,35.26l3.47,1Zm0,0,.42.13h0a12.49,12.49,0,0,0,1.38-.11l.38-.06-.23-.19-2,.23Z\" transform=\"translate(-0.01 0)\"/>\r\n                </g>\r\n                <path class=\"cls-5\" d=\"M22.45,13c-1.2-.4-2.6-.9-4.1-1.3-1.1-.3-2.3-.6-3.3-.8-2.8-.5-4.8-.6-4.9-.1-.1.2.2.6.8.9a25.68,25.68,0,0,0,6.7,2.5,23.56,23.56,0,0,0,7.5,1.2c.4-.1.7-.2.7-.3C26,14.73,24.65,13.93,22.45,13Z\" transform=\"translate(-0.01 0)\"/>\r\n              </svg>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2>{{member.name }} <small *ngIf=\"member.administrator === 1\"><br/>({{'ADMINISTRATOR_TEXT' | translate }})</small></h2>\r\n              <h3><small>{{ 'TONTINE_USERS_TEXT8' | translate }}:</small> {{getNumberPart(member.id)}}</h3>\r\n              <p>{{member.phone}}</p>\r\n              <p>{{member.email}}</p> \r\n              <p> {{ 'STATUS_TEXT' | translate }} :  {{ member.active === 1 ? ('M_ACTIVE_TEXT' | translate) : ('M_INACTIVE_TEXT' | translate) }}</p>             \r\n            </ion-label>\r\n            <ion-buttons slot=\"end\" class=\"popover-menu\" *ngIf=\"myTontine.administrator === 1\">\r\n              <ion-button (click)=\"openContextMenu($event,member)\">\r\n                <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"members && members.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\">{{ 'TONTINE_USERS_TEXT12' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"canAddMember()\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\" (click)=\"openAddMember()\">\r\n      {{ 'ADD_MEMBER_TEXT' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "9Plk":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/add-member/add-member.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_INVITED_TEXT23' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding add-member\">\n  <ion-text>\n      {{ 'M_INVITE_YOUR_FRIEND' | translate }} <b>{{ tontineData.tontine.name }}.</b><br/>\n   {{'TONTINE_NEW_MSG1' | translate }} <b>{{ tontineData.tontine.code_invitation }}</b>,\n   <span [innerHTML]=\"('TONTINE_CREATION_SUBTEXT2_CLONE' | translate : {hour: timeRemainHour })\"></span>\n  </ion-text>\n  <app-tontine-invited></app-tontine-invited>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-button expand=\"full\" \n                fill=\"outline\"\n                color=\"warning\" \n                class=\"ion-text-uppercase\"\n                shape=\"round\" (click)=\"closeAddMember()\">\n            {{ 'CANCEL_TEXT' | translate }}\n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "AGsp":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/delete/delete.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>     \n  <ion-row>\n    <ion-col>\n      <h4>Delete Member</h4> \n      <p>Are you sure you want to delete <b>{{ selectedMber.name }}</b>\n         from this tontine?\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <ion-button color=\"warning\">Yes</ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <ion-button color=\"warning\" fill=\"outline\" (click)=\"close()\">No</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ "BZcx":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/enable-member/enable-member.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>    \r\n  <ion-row>\r\n    <ion-col>\r\n      <h4>{{ 'M_MANAGE_MEMBER' | translate }}</h4> \r\n      <p>{{ 'M_CONFIRM_TEXT_ENABLE_1' | translate }} {{ selectedMber.member.active  === 1 ?  ('M_DISABLE_TEXT' | translate | lowercase) : ('M_ENABLE_TEXT' | translate | lowercase)  }} \r\n         {{ 'M_AS_MEMBER' | translate }}  <b>{{ selectedMber.member.name }}</b> ?\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" fill=\"outline\" (click)=\"close()\">{{ 'NO_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" [disabled]=\"loading\" (click)=\"enableRole(selectedMber.member)\" >{{ 'YES_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p> \r\n</ion-grid>\r\n");

/***/ }),

/***/ "Bkgh":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/member-menu/member-menu.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MemberMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMenuComponent", function() { return MemberMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-menu.component.html */ "54Tx");
/* harmony import */ var _member_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-menu.component.scss */ "eTNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _update_share_update_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-share/update-share.component */ "FbAr");
/* harmony import */ var _update_role_update_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-role/update-role.component */ "zdgz");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delete/delete.component */ "J8Vy");
/* harmony import */ var _reduce_share_reduce_share_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reduce-share/reduce-share.component */ "4k/R");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _enable_member_enable_member_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enable-member/enable-member.component */ "ChU+");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");












let MemberMenuComponent = class MemberMenuComponent {
    constructor(popoverController, userService, tontine, navParams) {
        this.popoverController = popoverController;
        this.userService = userService;
        this.tontine = tontine;
        this.navParams = navParams;
        const tontineData = this.tontine.getCurrentTontineData();
        this.myTontine = tontineData.tontine;
        this.membersList = tontineData.membres.liste_membre;
        this.userData = this.userService.getUserData();
        this.curentMemberParams = this.navParams.get('selectedMber');
        this.user = this.curentMemberParams.member;
        this.seance = tontineData.seance_courante;
        this.cycle = tontineData.cycle_courant;
        this.previousSeance = tontineData.avant_derniere_seance;
    }
    ngOnInit() { }
    // Can edit share 
    canEditShare() {
        let canEdit = false;
        if (((!this.seance && this.myTontine.active === 0) || (!this.seance && !this.previousSeance && this.myTontine.active === 1) ||
            (this.seance && this.seance.numero_seance < 2 && this.myTontine.active === 1)) && this.myTontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    // can enable member
    canEnable() {
        let canEnable = false;
        if ((this.cycle && this.myTontine.active === 1 && (!this.seance || this.seance && this.seance.numero_seance < 2))
            && this.myTontine.administrator === 1 && this.myTontine.user_id && this.myTontine.user_id === this.userData.id && this.user.id !== this.myTontine.user_id) {
            canEnable = true;
        }
        return canEnable;
    }
    // Can update role
    canUpdateRole() {
        let canUpadte = false;
        if (this.myTontine.number_admin_current < this.myTontine.number_admin_max && this.myTontine.administrator === 1
            && this.myTontine.user_id && this.myTontine.user_id === this.userData.id && this.user.id !== this.myTontine.user_id) {
            canUpadte = true;
        }
        return canUpadte;
    }
    // can add share 
    canAddShare() {
        let canAdd = false;
        if (this.canEditShare() && this.curentMemberParams.nbPart < this.myTontine.nombre_part_max_membre
            && this.curentMemberParams.nbPartMax < this.myTontine.nombre_part_max_tontine) {
            canAdd = true;
        }
        return canAdd;
    }
    // Can remove share
    canRemoveShare() {
        let canRemove = false;
        if (this.canEditShare() && this.curentMemberParams.nbPart > 1 && this.curentMemberParams.nbPart <= this.myTontine.nombre_part_max_membre) {
            canRemove = true;
        }
        return canRemove;
    }
    onSharePopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _update_share_update_share_component__WEBPACK_IMPORTED_MODULE_5__["UpdateShareComponent"],
                cssClass: 'share-popover',
                componentProps: {
                    selectedMber: this.curentMemberParams
                }
            });
            return yield popover.present();
        });
    }
    onRolePopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _update_role_update_role_component__WEBPACK_IMPORTED_MODULE_6__["UpdateRoleComponent"],
                cssClass: 'role-popover',
                componentProps: {
                    selectedMber: this.curentMemberParams
                }
            });
            return yield popover.present();
        });
    }
    onDeletePopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"],
                cssClass: 'delete-popover',
                componentProps: {
                    selectedMber: this.curentMemberParams
                }
            });
            return yield popover.present();
        });
    }
    onReducePopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _reduce_share_reduce_share_component__WEBPACK_IMPORTED_MODULE_8__["ReduceShareComponent"],
                cssClass: 'delete-popover',
                componentProps: {
                    selectedMber: this.curentMemberParams
                }
            });
            return yield popover.present();
        });
    }
    onEnablePopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _enable_member_enable_member_component__WEBPACK_IMPORTED_MODULE_10__["EnableMemberComponent"],
                cssClass: 'delete-popover',
                componentProps: {
                    selectedMber: this.curentMemberParams
                }
            });
            return yield popover.present();
        });
    }
    close() {
        this.popoverController.dismiss();
    }
    // enable or disable a member
    enableOrDisableMember() {
        this.close();
        this.onEnablePopover();
    }
    // Update the mumber of share
    updateShare() {
        this.close();
        this.onSharePopover();
    }
    // Update the role
    updateRole() {
        this.close();
        this.onRolePopover();
    }
    //delete the member
    deleteMember() {
        this.close();
        this.onDeletePopover();
    }
    //reduce the share
    reduceShare() {
        this.close();
        this.onReducePopover();
    }
};
MemberMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
MemberMenuComponent.propDecorators = {
    selectedMber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MemberMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-menu',
        template: _raw_loader_member_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberMenuComponent);



/***/ }),

/***/ "ChU+":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/enable-member/enable-member.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EnableMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableMemberComponent", function() { return EnableMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enable_member_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enable-member.component.html */ "BZcx");
/* harmony import */ var _enable_member_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enable-member.component.scss */ "QnB2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");











let EnableMemberComponent = class EnableMemberComponent {
    constructor(popoverController, tontine, events, ui, translate, error, tontineError) {
        this.popoverController = popoverController;
        this.tontine = tontine;
        this.events = events;
        this.ui = ui;
        this.translate = translate;
        this.error = error;
        this.tontineError = tontineError;
        this.tontineData = this.tontine.getCurrentTontineData();
    }
    ngOnInit() { }
    close() {
        this.popoverController.dismiss();
    }
    //enable or disable
    enableRole(member) {
        this.loading = true;
        const param = {
            cycle_id: this.tontineData.cycle_courant.id,
            tontine_id: this.tontineData.tontine.tontine_id,
            liste_membre: [{ member_id: member.id, active: member.active === 1 ? 0 : 1 }]
        };
        this.tontine.disableTontineMember(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('TONTINE_VISIBILITY_MSG').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.events.publish('new-tontine');
                this.events.publish('new-membre');
            }
            this.close();
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.enableRole(member);
                        }
                        else {
                            this.close();
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.close();
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.close();
                this.error.manageError(error);
            }
        });
    }
};
EnableMemberComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__["EventService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__["TontineErrorService"] }
];
EnableMemberComponent.propDecorators = {
    selectedMber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EnableMemberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-enable-member',
        template: _raw_loader_enable_member_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_enable_member_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnableMemberComponent);



/***/ }),

/***/ "FbAr":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/update-share/update-share.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UpdateShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShareComponent", function() { return UpdateShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_share_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-share.component.html */ "qJdY");
/* harmony import */ var _update_share_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-share.component.scss */ "Ltup");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");












let UpdateShareComponent = class UpdateShareComponent {
    constructor(popoverController, error, ui, tontine, storage, events, translate, navParam, tontineError) {
        this.popoverController = popoverController;
        this.error = error;
        this.ui = ui;
        this.tontine = tontine;
        this.storage = storage;
        this.events = events;
        this.translate = translate;
        this.navParam = navParam;
        this.tontineError = tontineError;
        this.nbPartList = [];
        this.memberPart = 1;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.memberData = this.navParam.get('selectedMber');
        this.loading = false;
    }
    ngOnInit() {
        this.getPartAvailable();
    }
    close() {
        this.popoverController.dismiss();
    }
    // step 0:  get the current number of part of the user
    // step 1:  get the number of part max of the tontine
    // step 2:  get the number of part max of the member
    // step 3:  get the current number of of the tontine
    // step 4:  Construct the liste of part available for tontine
    // Get number of part available
    getPartAvailable() {
        const currentPartMember = this.memberData ? this.memberData.nbPart : 1;
        const memberPartMax = this.currentTontine.tontine.nombre_part_max_membre;
        const tontinePartMax = this.currentTontine.tontine.nombre_part_max_tontine;
        const currentTontinePart = this.currentTontine.membres.liste_membre ? this.currentTontine.membres.liste_membre.length : 0;
        const partAvailable = parseInt(tontinePartMax, 10) - parseInt(currentTontinePart, 10);
        const nbPartShows = partAvailable > memberPartMax ? (memberPartMax - currentPartMember) : 0;
        if (nbPartShows) {
            for (let i = 0; i < nbPartShows; i++) {
                this.nbPartList.push(i + 1);
            }
        }
        return this.nbPartList;
    }
    // add the new part of a member
    addPartMembreTontine() {
        this.loading = true;
        const params = {
            nbre_part: this.memberPart,
            tontine_id: this.memberData.tontineId,
            user_id: this.memberData.member.id
        };
        this.tontine.addPartMembreTontine(params).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('ADD_SHARE_MSG1').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.storage.remove('app-tontines');
                this.events.publish('new-tontine');
                this.events.publish('new-membre');
            }
            this.close();
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.addPartMembreTontine();
                        }
                        else {
                            this.loading = false;
                            this.close();
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.close();
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.loading = false;
                this.close();
                this.error.manageError(error);
            }
        });
    }
    // can disable add member part
    canDisableAddMember() {
        let can = false;
        if (this.loading || this.memberPart > this.nbPartList[this.nbPartList.length - 1] || this.memberPart === 0) {
            can = true;
        }
        return can;
    }
    // Add a member
    addPartMembreTontineGo() {
        if (!this.canDisableAddMember()) {
            this.addPartMembreTontine();
        }
        else {
            this.translate.get('MAX_SHARES_TEXT').subscribe(trans => {
                this.ui.presentToast(`${trans} : ${this.nbPartList.length}`);
            });
        }
    }
};
UpdateShareComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageData"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__["EventService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__["TontineErrorService"] }
];
UpdateShareComponent.propDecorators = {
    selectedMber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UpdateShareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-share',
        template: _raw_loader_update_share_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_share_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateShareComponent);



/***/ }),

/***/ "IK2w":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/update-role/update-role.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcm9sZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "J8Vy":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/delete/delete.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "AGsp");
/* harmony import */ var _delete_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.scss */ "k8Lm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let DeleteComponent = class DeleteComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    close() {
        this.popoverController.dismiss();
    }
};
DeleteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
DeleteComponent.propDecorators = {
    selectedMber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-delete',
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteComponent);



/***/ }),

/***/ "Ltup":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/update-share/update-share.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "QnB2":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/enable-member/enable-member.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmFibGUtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "YTGE":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/members.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "bTgU":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/members.page.ts ***!
  \******************************************************************************/
/*! exports provided: MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_members_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./members.page.html */ "8C4m");
/* harmony import */ var _members_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members.page.scss */ "YTGE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _member_menu_member_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member-menu/member-menu.component */ "Bkgh");
/* harmony import */ var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-member/add-member.component */ "39zs");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");













let MembersPage = class MembersPage {
    constructor(popoverController, tontine, tontinesData, error, util, events, userService, modatCtrl) {
        this.popoverController = popoverController;
        this.tontine = tontine;
        this.tontinesData = tontinesData;
        this.error = error;
        this.util = util;
        this.events = events;
        this.userService = userService;
        this.modatCtrl = modatCtrl;
        this.members = [];
        this.membersData = [];
        const tontineData = this.tontine.getCurrentTontineData();
        this.tontineId = tontineData.tontine.tontine_id;
        this.myTontine = tontineData.tontine;
        this.membres = tontineData.membres.liste_membre;
        this.seance = tontineData.seance_courante;
        this.avantDerniereSeance = tontineData.avant_derniere_seance;
        this.userData = this.userService.getUserData();
        this.allData = [];
        this.filterData = [];
        this.nbItems = 10;
        this.activeMembers = [];
        this.events.subscribe('new-membre', () => {
            this.loading = true;
            this.refreSher(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getListOfUsers(null);
    }
    ionicViewDidEnter() {
        this.loading = true;
        this.getListOfUsers(null);
    }
    // Update the current user tontine
    updateCurrentUserTontine(tontineId) {
        this.tontine.getTontineDetail(tontineId).subscribe((reponse) => {
            if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                const tontineData = this.tontine.getCurrentTontineData();
                this.tontineId = tontineData.tontine.tontine_id;
                this.myTontine = tontineData.tontine;
                this.membres = tontineData.membres.liste_membre;
                this.seance = tontineData.seance_courante;
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.updateCurrentUserTontine(tontineId);
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    openContextMenu(ev, mber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const memberData = {
                member: mber,
                isAdmin: mber.administrator === 1 ? true : false,
                tontineId: this.tontineId,
                nbPart: this.getNumberPart(mber.id),
                nbPartMax: this.activeMembers.length
            };
            const popover = yield this.popoverController.create({
                component: _member_menu_member_menu_component__WEBPACK_IMPORTED_MODULE_5__["MemberMenuComponent"],
                event: ev,
                componentProps: {
                    selectedMber: memberData
                }
            });
            return yield popover.present();
        });
    }
    openAddMember() {
        this.modatCtrl
            .create({
            component: _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberComponent"]
        })
            .then(modalEl => modalEl.present());
    }
    searchForMber(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((member) => {
                return (member.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.members = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.members.push(this.allData[this.members.length]);
            }
        }
        else {
            this.members = this.allData;
        }
    }
    // can add member
    canAddMember() {
        return this.myTontine.administrator === 1
            && (this.activeMembers && this.activeMembers.length < this.myTontine.nombre_part_max_tontine)
            && ((!this.seance && this.myTontine.active === 0)
                || (!this.seance && !this.avantDerniereSeance && this.myTontine.active === 1)
                || (this.seance && this.seance.numero_seance < 1 && this.myTontine.active === 1));
    }
    // Get the list of tontine users
    getListOfUsers(event) {
        const current = this.tontine.getCurrentTontineData();
        this.tontine.getTontinesMembers(current.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.members) {
                this.tontineUsersTemp = reponse.members;
                if (this.tontineUsersTemp && this.tontineUsersTemp.length > 0) {
                    this.activeMembers = this.tontineUsersTemp.filter(data => { return data.active === 1; });
                }
                const members = [];
                this.tontineUsersTemp.forEach(member => {
                    // Only active members and administrators can see the tontines
                    if (member && this.tontinesData.memberNotInWithout(members, member.id) && (member.active === 1 || member.active === 0 && this.myTontine.administrator === 1)) {
                        members.push({
                            id: member.id,
                            name: member.lastname || member.firstname ? member.firstname + ' ' + member.lastname : 'No name',
                            phone: member.phone,
                            email: member.email,
                            sexe: member.sexe,
                            active: member.active,
                            pays: member.pays,
                            ville: member.ville,
                            address: member.address,
                            picture: member.picture,
                            profession: member.profession,
                            experience: member.experience,
                            temporaire: member.temporaire,
                            administrator: member.administrator,
                            device_id: member.device_id,
                            device_name: member.device_name,
                            montant_cotisation: member.montant_cotisation || 0,
                            pourcentage_cotisation: member.pourcentage_cotisation || 0,
                            montant_restant_a_cotiser: member.montant_restant_a_cotiser || 0,
                            numero_part: member.numero_part
                        });
                    }
                });
                this.loading = false;
                this.filterData = this.util.orderByKey(members, 'name');
                this.filterData = this.util.orderByKeyUp(members, 'active');
                this.allData = this.filterData;
                if (this.allData.length > this.nbItems) {
                    this.members = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.members.push(this.allData[this.members.length]);
                    }
                }
                else {
                    this.members = this.allData;
                }
            }
            this.loading = false;
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            this.loading = false;
            if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getListOfUsers(event);
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
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.updateCurrentUserTontine(this.tontineId);
        this.getListOfUsers(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.members.length < this.allData.length) {
                    this.members.push(this.allData[this.members.length]);
                }
                else if (this.members.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Get the number part of a user
    getNumberPart(memberId) {
        return this.tontinesData.getNumberPart(this.tontineUsersTemp, memberId);
    }
    // has the user contribute
    hasContribute(members, memberId) {
        return this.tontinesData.hasContribute(members, memberId);
    }
};
MembersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__["TontineGlobalDataService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__["EventService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
MembersPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
MembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-members',
        template: _raw_loader_members_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_members_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MembersPage);



/***/ }),

/***/ "dLKu":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/members.module.ts ***!
  \********************************************************************************/
/*! exports provided: MembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageModule", function() { return MembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members.page */ "bTgU");
/* harmony import */ var _member_menu_member_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member-menu/member-menu.component */ "Bkgh");
/* harmony import */ var _update_share_update_share_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-share/update-share.component */ "FbAr");
/* harmony import */ var _update_role_update_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-role/update-role.component */ "zdgz");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delete/delete.component */ "J8Vy");
/* harmony import */ var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-member/add-member.component */ "39zs");
/* harmony import */ var _reduce_share_reduce_share_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reduce-share/reduce-share.component */ "4k/R");
/* harmony import */ var _enable_member_enable_member_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enable-member/enable-member.component */ "ChU+");














const routes = [
    {
        path: '',
        component: _members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]
    }
];
let MembersPageModule = class MembersPageModule {
};
MembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"],
            _member_menu_member_menu_component__WEBPACK_IMPORTED_MODULE_7__["MemberMenuComponent"],
            _update_share_update_share_component__WEBPACK_IMPORTED_MODULE_8__["UpdateShareComponent"],
            _update_role_update_role_component__WEBPACK_IMPORTED_MODULE_9__["UpdateRoleComponent"],
            _enable_member_enable_member_component__WEBPACK_IMPORTED_MODULE_13__["EnableMemberComponent"],
            _delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["DeleteComponent"],
            _reduce_share_reduce_share_component__WEBPACK_IMPORTED_MODULE_12__["ReduceShareComponent"],
            _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_11__["AddMemberComponent"]
        ],
        entryComponents: [
            _member_menu_member_menu_component__WEBPACK_IMPORTED_MODULE_7__["MemberMenuComponent"],
            _update_share_update_share_component__WEBPACK_IMPORTED_MODULE_8__["UpdateShareComponent"],
            _enable_member_enable_member_component__WEBPACK_IMPORTED_MODULE_13__["EnableMemberComponent"],
            _update_role_update_role_component__WEBPACK_IMPORTED_MODULE_9__["UpdateRoleComponent"],
            _reduce_share_reduce_share_component__WEBPACK_IMPORTED_MODULE_12__["ReduceShareComponent"],
            _delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["DeleteComponent"],
            _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_11__["AddMemberComponent"]
        ]
    })
], MembersPageModule);



/***/ }),

/***/ "eTNA":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/member-menu/member-menu.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "gZtT":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/update-role/update-role.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>    \r\n  <ion-row>\r\n    <ion-col>\r\n      <h4>{{ 'M_MANAGE_ROLE' | translate }}</h4> \r\n      <p>{{ 'M_CONFIRM_TEXT_ROLE_1' | translate }} {{ selectedMber.isAdmin ? ('M_UNSET_TEXT' | translate) : ('M_SET_TEXT' | translate) }} <b>{{ selectedMber.member.name }}, </b>\r\n         {{ 'M_ADMIN_TONTINE_ROLE' | translate }}?\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" fill=\"outline\" (click)=\"close()\">{{ 'NO_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" [disabled]=\"loading\" (click)=\"addOrRemovaUserRole(selectedMber.member)\" >{{ 'YES_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p> \r\n</ion-grid>\r\n");

/***/ }),

/***/ "k8Lm":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/delete/delete.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "lypj":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/reduce-share/reduce-share.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid> \r\n   \r\n  <ion-row>\r\n    <ion-col>\r\n      <h4>{{ 'M_UPDATE_SHARE' | translate }}</h4> \r\n      <p>{{ 'ADD_SHARE_SUBTEXT1' | translate }} <b>{{ selectedMber && selectedMber.member? selectedMber.member.name : '' }}</b></p>\r\n      <p>{{ 'ADD_SHARE_SUBTEXT2' | translate }}: <b>{{ selectedMber.nbPart }}</b></p>\r\n      <p>{{ 'MIN_SHARES_TEXT' | translate }}: <b>{{ nbPartList.length }}</b></p>\r\n    </ion-col>\r\n  </ion-row>\r\n <ion-row>\r\n    <ion-col>\r\n      <ion-item color=\"light\">\r\n        <ion-label position=\"fixed\"> <b>{{ 'NB_SHARES' | translate }} :</b>  </ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"memberPart\" (keyup.enter)=\"reducePartMembreTontineGo()\"></ion-input>   \r\n      </ion-item> \r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" fill=\"outline\" (click)=\"close()\">{{ 'CANCEL_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\">\r\n      <!---->\r\n      <ion-button color=\"warning\" (click)=\"reducePartMembreTontine()\" [disabled]=\"canDisableReducePart()\">{{ 'REDUCE_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p> \r\n</ion-grid>\r\n");

/***/ }),

/***/ "qJdY":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/members/update-share/update-share.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>     \r\n  <ion-row>\r\n    <ion-col>\r\n      <h4>{{ 'M_UPDATE_SHARE' | translate }}</h4> \r\n      <p>{{ 'ADD_SHARE_SUBTEXT1' | translate }} <b>{{ selectedMber && selectedMber.member? selectedMber.member.name : '' }}</b></p>\r\n      <p>{{ 'ADD_SHARE_SUBTEXT2' | translate }}: <b>{{ selectedMber.nbPart }}</b></p>\r\n      <p>{{ 'MAX_SHARES_TEXT' | translate }}: <b>{{ nbPartList.length }}</b></p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item color=\"light\">\r\n        <ion-label  position=\"fixed\"> <b>{{ 'NB_SHARES' | translate }} :</b>  </ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"memberPart\"  (keyup.enter)=\"addPartMembreTontineGo()\" ></ion-input>    \r\n      </ion-item> \r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" fill=\"outline\"  (click)=\"close()\">{{ 'CANCEL_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\">\r\n      <!--  -->\r\n      <ion-button color=\"warning\"  (click)=\"addPartMembreTontine()\" [disabled]=\"canDisableAddMember()\">{{ 'M_ADD_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n</ion-grid>\r\n");

/***/ }),

/***/ "s8NU":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/reduce-share/reduce-share.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWR1Y2Utc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "xzh2":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/add-member/add-member.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zdgz":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/members/update-role/update-role.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UpdateRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRoleComponent", function() { return UpdateRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_role_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-role.component.html */ "gZtT");
/* harmony import */ var _update_role_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-role.component.scss */ "IK2w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let UpdateRoleComponent = class UpdateRoleComponent {
    constructor(popoverController, tontine, events, ui, storage, translate, error, tontineError) {
        this.popoverController = popoverController;
        this.tontine = tontine;
        this.events = events;
        this.ui = ui;
        this.storage = storage;
        this.translate = translate;
        this.error = error;
        this.tontineError = tontineError;
        this.tontineData = this.tontine.getCurrentTontineData();
    }
    ngOnInit() { }
    close() {
        this.popoverController.dismiss();
    }
    // and or remove user role
    addOrRemovaUserRole(member) {
        this.loading = true;
        const param = {
            tontine_id: this.tontineData.tontine.tontine_id,
            user_id: member.id,
            administrator: member.administrator === 1 ? 0 : 1
        };
        this.tontine.addOrRemoveUserRole(param).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('TONTINE_USERS_MSG1').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.storage.remove('app-tontines');
                this.events.publish('new-tontine');
                this.events.publish('new-membre');
            }
            this.close();
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.addOrRemovaUserRole(member);
                        }
                        else {
                            this.loading = false;
                            this.close();
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.close();
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.loading = false;
                this.close();
                this.error.manageError(error);
            }
        });
    }
};
UpdateRoleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageData"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__["TontineErrorService"] }
];
UpdateRoleComponent.propDecorators = {
    selectedMber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UpdateRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-role',
        template: _raw_loader_update_role_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_role_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateRoleComponent);



/***/ })

}]);
//# sourceMappingURL=members-members-module.js.map