(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-tontines-my-tontines-module"],{

/***/ "3cGF":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/my-tontines-menu/my-tontines-menu.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MyTontinesMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTontinesMenuComponent", function() { return MyTontinesMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_tontines_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-tontines-menu.component.html */ "Ikes");
/* harmony import */ var _my_tontines_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-tontines-menu.component.scss */ "t075");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _archive_tontine_archive_tontine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../archive-tontine/archive-tontine.component */ "YyEB");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");








let MyTontinesMenuComponent = class MyTontinesMenuComponent {
    constructor(popoverController, modatCtrl, storage, router) {
        this.popoverController = popoverController;
        this.modatCtrl = modatCtrl;
        this.storage = storage;
        this.router = router;
        this.tontines = [];
    }
    ngOnInit() {
        this.getTontines();
    }
    // Close popover
    closeMyTontinesMenu() {
        this.popoverController.dismiss();
    }
    // Open create tontine page
    createTontinePage() {
        this.closeMyTontinesMenu();
        this.router.navigate(['/dashboard/my-tontines/new']);
    }
    // Join a tontine
    joinTontinePage() {
        this.closeMyTontinesMenu();
        this.router.navigate(['/dashboard/join-tontine']);
    }
    // open tontine wallet
    openWallet() {
        this.closeMyTontinesMenu();
        this.router.navigate(['/dashboard/my-wallet']);
    }
    // Invite members
    inviteMember() {
        this.popoverController.dismiss();
        this.router.navigate(['/', 'dashboard', 'invitations']);
    }
    // Go to the notifications
    notification() {
        this.closeMyTontinesMenu();
        this.router.navigate(['/dashboard/notifications']);
    }
    // Archive la tontine
    archiveTontine() {
        this.popoverController.dismiss();
        this.archiveModal();
    }
    // get the tontines from storage
    getTontines() {
        this.storage.get('app-tontines').then(data => {
            if (data && data.length > 0) {
                this.tontines = data.filter(tontine => {
                    return tontine.tontine.administrator === 1 && tontine.tontine.active === 0;
                });
            }
        });
    }
    // open the countries modal
    archiveModal() {
        this.modatCtrl
            .create({
            component: _archive_tontine_archive_tontine_component__WEBPACK_IMPORTED_MODULE_6__["ArchiveTontineComponent"],
            componentProps: {
                tontines: this.tontines
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
            });
        });
    }
};
MyTontinesMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MyTontinesMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-tontines-menu',
        template: _raw_loader_my_tontines_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_tontines_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyTontinesMenuComponent);



/***/ }),

/***/ "D2ml":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/archive-tontine/archive-tontine.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" (click)=\"closeModal()\">\r\n        <ion-icon color=\"warning\" name=\"close\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center subtitle\">\r\n      {{ 'ARCHIVE_TONTIONE_TEXT' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n      <ion-searchbar placeholder=\"{{ 'M_NAME_TEXT' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForInvitation($event)\" type=\"text\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n  <ion-grid *ngIf=\"listData && listData.length > 0 \">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item >\r\n            <ion-label>{{ 'ALL_TONTINE' | translate }}</ion-label>\r\n            <ion-checkbox slot=\"end\" (ionChange)=\"selectAll(option)\" [(ngModel)]=\"option\" [checked]=\"option\" [value]=\"option\"></ion-checkbox>\r\n          </ion-item>\r\n          <ion-item  *ngFor=\"let data of listData; let i = index\">\r\n            <ion-label>{{ data && data.name ? data.name : '' }}</ion-label>\r\n            <ion-checkbox slot=\"end\" (ionChange)=\"updateTontineSelected()\" [(ngModel)]=\"listData[i].select\" [checked]=\"listData[i].select\" [value]=\"listData[i].select\"></ion-checkbox>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\"  [disabled]=\"loading || tontineSelected && tontineSelected.length === 0\"\r\n        (click)=\"confirmArchiveMessage()\"\r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\">\r\n        {{ 'MENU_ARCHIVE_TEXT' | translate }}\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "GN4C":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/my-tontines.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'TONTINE_LIST_TEXT1' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"5\">\r\n        <ion-item lines=\"none\">                \r\n          <ion-toggle  (ionChange)=\"changeVisibility(isAdmin)\" [(ngModel)]=\"isAdmin\"></ion-toggle>\r\n          <ion-label><small>{{ 'ADMIN_TEXT' | translate }}</small> </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"7\">\r\n          <ion-searchbar placeholder=\"{{ 'M_NAME_TEXT' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForInvitation($event)\" type=\"text\"></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"my-tontine\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n   <ion-refresher-content\r\n      pullingIcon=\"reload-outline\" \r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content> \r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <svg height=\"0\" width=\"0\" viewBox=\"0 0 47.8 37.12\">\r\n    <defs>\r\n      <clipPath id=\"pot-cursor\" >\r\n          <path d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\" />             \r\n      </clipPath>        \r\n    </defs>\r\n  </svg>\r\n  <ion-card button=\"true\" *ngFor=\"let data of myTontines; let i=index\" (click)=\"goTotontineDetail(data)\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"col-img ion-align-self-center\">\r\n          <svg class=\"pot-status\" preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 48.8 39.12\">                                    \r\n            <path class=\"pot-rate-color-1\"\r\n                d=\"M19.4,6a2,2,0,0,0,2.77-.56l0,0a2,2,0,0,0-.56-2.77l0,0a1.93,1.93,0,0,0-2.69.48v0a2,2,0,0,0,.37,2.8Zm6.8-2.6A1.77,1.77,0,0,0,28.7.88a1.75,1.75,0,0,0-2.47,0l0,0h0a1.75,1.75,0,0,0,0,2.47Zm6.1-1a1.48,1.48,0,0,0,2,.44l.05,0a1.48,1.48,0,0,0,.44-2l0-.05a1.48,1.48,0,0,0-2-.44l-.05,0A1.69,1.69,0,0,0,32.3,2.38Zm5.4.2a1.25,1.25,0,0,0,1.61.74l.09,0a1.25,1.25,0,0,0,.74-1.61l0-.09A1.25,1.25,0,0,0,38.49.84l-.09,0A1.37,1.37,0,0,0,37.7,2.58Zm4.5,1.1a1.12,1.12,0,1,0,.9-1.3h0A1.13,1.13,0,0,0,42.2,3.68Zm3.6,1.7a1,1,0,1,0,1-1A1,1,0,0,0,45.8,5.38Z\"\r\n                    />\r\n            <path class=\"pot-rate-color-2\"\r\n                d=\"M5.4,12.78A13,13,0,0,0,1,22.58a11,11,0,0,0,.2,1.8c.1.6.3,1.2.4,1.8l.3.9a2,2,0,0,0,.4.8,12.9,12.9,0,0,0,.9,1.6,13.39,13.39,0,0,0,12.2,6.1,11,11,0,0,0,1.8-.2A11.63,11.63,0,0,0,19,35a13.82,13.82,0,0,0,6-3.7,12.09,12.09,0,0,0,2-3,14.25,14.25,0,0,0,1.1-3.5,11.53,11.53,0,0,0-1-7.3c.3.5.6,1.1.9,1.7a13.36,13.36,0,0,1,.7,1.8,10.27,10.27,0,0,1,.2,3.9,12.56,12.56,0,0,1-1,3.8,16.83,16.83,0,0,1-2,3.4,9.27,9.27,0,0,1-1.4,1.4c-.5.4-1,.8-1.6,1.2a14.88,14.88,0,0,1-3.6,1.7,13.32,13.32,0,0,1-1.9.5,13.55,13.55,0,0,1-2,.2,13.52,13.52,0,0,1-4-.3A14.49,14.49,0,0,1,6,34.48l-1.5-1.2a14.89,14.89,0,0,1-4.4-8.6,16.23,16.23,0,0,1-.1-2.1,12.65,12.65,0,0,1,2.6-7.2A9.88,9.88,0,0,1,5.4,12.78ZM6.8,9a1.1,1.1,0,0,1,0-.8,1.91,1.91,0,0,1,.3-.8,2.37,2.37,0,0,1,1.5-.9c.3,0,.6-.1.9-.1H12a25.32,25.32,0,0,1,6.6,1.1,23.68,23.68,0,0,1,6.1,2.7,18.48,18.48,0,0,1,2.7,1.9,3.81,3.81,0,0,1,1.1,1.4,1.41,1.41,0,0,1,.1.9,1.79,1.79,0,0,1-.5.7.91.91,0,0,0,.3-.7,1.85,1.85,0,0,0-.2-.7,5.24,5.24,0,0,0-1.1-1c-.9-.6-1.9-1.1-2.8-1.6a39.2,39.2,0,0,0-6-2.3A47,47,0,0,0,12,7.48c-.5-.1-1.1-.1-1.6-.2l-.9-.2H8.7a1.9,1.9,0,0,0-1.3.5A2,2,0,0,0,6.8,9Z\"\r\n                    />\r\n            <g>\r\n                <g class=\"pot-rate\">\r\n                    <path class=\"pot-rate-color-3\"\r\n                    [class.pot-rate-0]=\"data.membres.pourcentage_contribution === 0\"\r\n                    [class.pot-rate-15]=\"data.membres.pourcentage_contribution > 0 && data.membres.pourcentage_contribution <= 15\"\r\n                    [class.pot-rate-30]=\"data.membres.pourcentage_contribution > 15 && data.membres.pourcentage_contribution <= 30\"\r\n                    [class.pot-rate-45]=\"data.membres.pourcentage_contribution > 30 && data.membres.pourcentage_contribution <= 45\"\r\n                    [class.pot-rate-60]=\"data.membres.pourcentage_contribution > 45 && data.membres.pourcentage_contribution <= 60\"\r\n                    [class.pot-rate-75]=\"data.membres.pourcentage_contribution > 60 && data.membres.pourcentage_contribution <= 75\"\r\n                    [class.pot-rate-90]=\"data.membres.pourcentage_contribution > 75 && data.membres.pourcentage_contribution <= 99\"\r\n                    [class.pot-rate-100]=\"data.membres.pourcentage_contribution === 100\"                       \r\n                        d=\"M1.2,7.15s8.92-2.46,12.38,0,14.22,0,14.22,0V35.91H1.2Z\"\r\n                    />\r\n                </g>\r\n                <path class=\"pot-rate-color-4\"\r\n                    d=\"M1.8,23.68a11.84,11.84,0,0,1,7-12.1h.1l.2-.2a.77.77,0,0,0,.1-.3c-1.1-.8-1.7-1.5-1.5-2.1.5-1.4,5.3-1.2,10.9.4s9.7,4,9.2,5.4c-.2.5-.9.8-2,.9h0v.1a2.25,2.25,0,0,0,.1.7c0,.2.1.3.1.5a.31.31,0,0,0,.1.2c2.1,4.2,1.8,8.9-1.8,13.3-4.6,5.6-14.4,6.1-19.6-.1A12.25,12.25,0,0,1,1.8,23.68Z\"\r\n                        />\r\n            </g>\r\n            <path class=\"pot-rate-color-5\"\r\n                d=\"M21.5,12.08c-1.2-.4-2.6-.9-4.1-1.3-1.1-.3-2.3-.6-3.3-.8-2.8-.5-4.8-.6-4.9-.1-.1.2.2.6.8.9a25.68,25.68,0,0,0,6.7,2.5,23.56,23.56,0,0,0,7.5,1.2c.4-.1.7-.2.7-.3C25,13.78,23.6,13,21.5,12.08Z\"\r\n                    />\r\n            <text class=\"pot-rate-text\" transform=\"translate(5.78 28.56)\">\r\n                <tspan style=\"letter-spacing: -0.004883254918305625em\"></tspan>\r\n                <tspan x=\"0\" y=\"0\">{{data.membres && data.membres.pourcentage_contribution < 100 ? data.membres.pourcentage_contribution : 100}}%</tspan>                                        \r\n            </text>\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"col-content\">\r\n          <ion-card-header>            \r\n            <ion-card-title>{{data.tontine.name}}</ion-card-title>\r\n            <ion-card-subtitle><b>{{ 'TONTINE_LIST_TEXT2' | translate }}: </b> {{getSeanceDate(data)}}</ion-card-subtitle>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row class=\"ion-justify-content-end\">\r\n              <ion-col *ngIf=\"data.tontine.drawingtype_id === 3 && data.seance_courante !== null\" size=\"6\" class=\"col-button\">\r\n                  <div class=\"desc\"> {{ 'TONTINE_DETAIL_TEXT23' | translate }}({{data.tontine.monnaie}})</div>\r\n                  <div class=\"menu-amount\" *ngFor=\"let filterValue of listTontinesBid[i] | slice:0:1;\" >{{ filterValue.userID ? (filterValue.somme  | commadumper) : '0'  }}</div>\r\n                  <div class=\"menu-amount\" *ngIf=\"listTontinesBid[i] && listTontinesBid[i].length === 0\" > 0 </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"col-button\"  [class.contributed]=\"!canContributeSeance(data.membres.liste_membre)&& data.seance_courante\"  [class.inactive]=\"data.tontine.active===0\">\r\n                  <div class=\"desc\" *ngIf=\"canContributeSeance(data.membres.liste_membre) || !data.seance_courante\">{{ 'CONTRIBUTION_AMOUNT_TEXT' | translate }}({{data.tontine.monnaie}})</div>\r\n                  <div class=\"menu-amount\" [innerHTML]=\"!canContributeSeance(data.membres.liste_membre)&& data.seance_courante ? (( 'ALREADY_TEXT' | translate ) +'<br/>'+  ('CONTRIBUTED_TEXT' | translate )) : (getAmountContributionSeance(data.membres.liste_membre, data.tontine.coutshare) | commadumper )\"></div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid> \r\n  </ion-card>\r\n\r\n  <div  *ngIf=\"myTontines && myTontines.length === 0 && !loading\">\r\n    <p  class=\"ion-padding ion-text-center\"> {{ 'TONTINE_LIST_TEXT12' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Ikes":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/my-tontines-menu/my-tontines-menu.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"mytontines-menu-popover\">\r\n  <ion-item (click)=\"createTontinePage()\" lines=\"none\">\r\n    <ion-label>\r\n      {{'MENU_NEW_TONTINE' | translate }}\r\n    </ion-label>\r\n  </ion-item>  \r\n  <ion-item (click)=\"inviteMember()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'TONTINE_INVITED_TEXT1' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"joinTontinePage()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_JOIN_TONTINE' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"openWallet()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_MY_WALLET' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"notification()\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'NOTIFICATION_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"archiveTontine()\" *ngIf=\"tontines && tontines.length > 0\" lines=\"none\">\r\n    <ion-label>\r\n      {{ 'MENU_ARCHIVE_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "OeMM":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/archive-tontine/archive-tontine.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaXZlLXRvbnRpbmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "P8+5":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/my-tontines/my-tontines.page.ts ***!
  \***********************************************************/
/*! exports provided: MyTontinesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTontinesPage", function() { return MyTontinesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_tontines_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-tontines.page.html */ "GN4C");
/* harmony import */ var _my_tontines_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-tontines.page.scss */ "eUX4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_tontines_menu_my_tontines_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-tontines-menu/my-tontines-menu.component */ "3cGF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/encheres.service */ "PqeH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/contribution.service */ "US41");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
var MyTontinesPage_1;


















let MyTontinesPage = MyTontinesPage_1 = class MyTontinesPage {
    constructor(tontine, tontinesData, event, contribution, translate, userService, enchere, router, popoverController, error, storage, util) {
        this.tontine = tontine;
        this.tontinesData = tontinesData;
        this.event = event;
        this.contribution = contribution;
        this.translate = translate;
        this.userService = userService;
        this.enchere = enchere;
        this.router = router;
        this.popoverController = popoverController;
        this.error = error;
        this.storage = storage;
        this.util = util;
        this.myTontines = [];
        this.listTontinesBid = [];
        this.totalPages = 0;
        this.nbItems = 10;
        this.membersList = [];
        this.user = this.userService.getUserData();
        this.nbPartMember = [];
        this.canContribute = [];
        this.loading = false;
        this.backService = null;
        this.allData = [];
        this.currentDate = new Date();
        this.currentAmount = [];
        this.event.subscribe('new-tontine', () => {
            this.infiniteScroll.disabled = false;
            this.getUserTontines(null);
        });
        this.isAdmin = false;
        this.filterData = [];
        MyTontinesPage_1.canConnect = [];
    }
    ngOnInit() {
        this.loading = true;
        this.getUserTontines(null);
    }
    // Go to the tontine detail
    goTotontineDetail(data) {
        this.tontine.setCurrentTontineData(data);
        this.router.navigateByUrl('/dashboard/my-tontines/' + data.tontine.tontine_id);
    }
    // get the tontine seance date
    getSeanceDate(tontineData) {
        let seance = '';
        this.translate.get('TONTINE_LIST_CONFIG').subscribe(trans => {
            this.dateSeance = trans;
        });
        if (tontineData && !tontineData.seance_courante) {
            this.dateSeance = tontineData.tontine.date_debut;
            this.dateSeance = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.dateSeance, 'mediumDate', 'en-us');
        }
        if (tontineData && tontineData.seance_courante) {
            this.dateSeance = tontineData.seance_courante.date_debut.split(' ')[0];
            this.dateSeance = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.dateSeance, 'mediumDate', 'en-us');
        }
        if (tontineData && tontineData.tontine.active === 0) {
            this.translate.get('CLOSE_TONTINE').subscribe(trans => {
                this.dateSeance = trans;
            });
        }
        seance = this.dateSeance;
        return seance;
    }
    // can contribute for seance
    canContributeSeance(memberList) {
        return this.tontinesData.canContributeSeance(memberList, this.user.id);
    }
    // Get the amount of contribution of the seance
    getAmountContributionSeance(memberList, shareAmount) {
        return this.tontinesData.getAmountContributionSeance(memberList, shareAmount, this.user.id);
    }
    // Format the bid data
    formatBidData(tontines) {
        let index = 0;
        this.listTontinesBid = [];
        tontines.forEach(() => {
            this.listTontinesBid.push([]);
        });
        while (index < tontines.length) {
            if (tontines[index].tontine && tontines[index].tontine.drawingtype_id === 3 && tontines[index].seance_courante !== null) {
                this.contribution.getDataMembresAyantBouffe(tontines[index].seance_courante.cycle_id, tontines[index].tontine.tontine_id, tontines[index], index)
                    .then((reponse) => {
                    console.log(reponse);
                    const listPart = reponse.tontine && reponse.tontine.membres && reponse.tontine.membres.liste_membre ? reponse.tontine.membres.liste_membre : [];
                    const userId = this.user.id;
                    const members = reponse.ans && reponse.ans.membres ? reponse.ans.membres : [];
                    const numeroPart = this.tontinesData.getCurrentBidPart(listPart, userId, members);
                    this.currentAmount.push({ somme: 0, seanceID: reponse.tontine.seance_courante.id, userID: 0, numero_lot: 0 });
                    MyTontinesPage_1.canConnect[reponse.index] = this.enchere.connexion(reponse.tontine.seance_courante.id);
                    this.enchere.memberConnection(userId, numeroPart, reponse.tontine.seance_courante.id, reponse.tontine.tontine.numberlot);
                    let i = 1;
                    while (i <= reponse.tontine.tontine.numberlot) {
                        this.enchere.getWinnerCurrent(reponse.tontine.seance_courante.id + '' + i).subscribe(data => {
                            if (data !== null) {
                                this.currentAmount.unshift({ somme: JSON.parse(data).somme, seanceID: JSON.parse(data).seance_id, userID: JSON.parse(data).user_id, numero_lot: JSON.parse(data).numero_lot });
                                this.currentAmount = this.currentAmount.filter((elem, index, self) => self.findIndex((t) => { return ((t.seanceID === elem.seanceID && t.numero_lot !== 0)) || (t.seanceID === elem.seanceID && t.numero_lot === elem.numero_lot); }) === index);
                            }
                        });
                        i++;
                    }
                    this.listTontinesBid[reponse.index] = this.currentAmount;
                });
            }
            else {
                this.listTontinesBid[index] = [];
            }
            index++;
        }
    }
    // Get the list user tontines
    getUserTontines(refreSher) {
        this.tontine.getMyTontine().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                if (reponse && reponse.liste_tontine) {
                    this.listTontinesBid = [];
                    let activeTontine = reponse.liste_tontine.filter(data => {
                        return data.tontine.active === 1;
                    });
                    activeTontine = this.util.oderByTontineDate(activeTontine);
                    let inactiveTontine = reponse.liste_tontine.filter(data => {
                        return data.tontine.active === 0;
                    });
                    inactiveTontine = this.util.oderByTontineDate(inactiveTontine);
                    this.allData = [];
                    this.allData = this.allData.concat(activeTontine);
                    this.allData = this.allData.concat(inactiveTontine);
                    this.formatBidData(this.allData);
                    this.filterData = this.allData;
                    this.setToStorage(this.allData);
                    if (this.allData.length > this.nbItems) {
                        this.myTontines = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.myTontines.push(this.allData[this.myTontines.length]);
                        }
                    }
                    else {
                        this.myTontines = this.allData;
                    }
                }
            }
            if (refreSher) {
                setTimeout(() => {
                    refreSher.target.complete();
                }, 2000);
            }
            this.loading = false;
        }, error => {
            this.loading = false;
            if (refreSher) {
                refreSher.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getUserTontines(refreSher);
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else {
                this.getDataFormStorage();
                this.error.manageError(error);
            }
        });
    }
    // Get the data from session
    getDataFormStorage() {
        this.getFromStorage().then(data => {
            if (data && data.length > 0) {
                this.allData = data;
                if (this.allData.length > this.nbItems) {
                    this.myTontines = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.myTontines.push(this.allData[this.myTontines.length]);
                    }
                }
                else {
                    this.myTontines = this.allData;
                }
            }
            else {
                this.myTontines = [];
            }
            this.loading = false;
        });
    }
    // set to local Stoirage
    setToStorage(data) {
        this.storage.set('app-tontines', data);
    }
    getFromStorage() {
        return this.storage.get('app-tontines');
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getUserTontines(event);
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.getUserTontines(null);
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
                if (this.myTontines.length < this.allData.length) {
                    this.myTontines.push(this.allData[this.myTontines.length]);
                }
                else if (this.myTontines.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _my_tontines_menu_my_tontines_menu_component__WEBPACK_IMPORTED_MODULE_6__["MyTontinesMenuComponent"],
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
            this.allData = this.filterData.filter((data) => {
                return (data.tontine.name ? data.tontine.name.toLowerCase().indexOf(val.toLowerCase()) > -1 :
                    data.tontine.name.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.myTontines = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.myTontines.push(this.allData[this.myTontines.length]);
            }
        }
        else {
            this.myTontines = this.allData;
        }
    }
    // change the visibility
    changeVisibility(enable) {
        this.infiniteScroll.disabled = false;
        this.loading = true;
        if (enable) {
            this.allData = [];
            this.filterData.forEach((data) => {
                if (data.tontine.administrator === 1) {
                    this.allData.push(data);
                }
            });
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.myTontines = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.myTontines.push(this.allData[this.myTontines.length]);
            }
        }
        else {
            this.myTontines = this.allData;
        }
        setTimeout(() => {
            this.loading = false;
        }, 200);
    }
};
MyTontinesPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_13__["TontineGlobalDataService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_14__["EventService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_12__["ContributionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] },
    { type: src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_10__["EncheresService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageData"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"] }
];
MyTontinesPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
MyTontinesPage = MyTontinesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-tontines',
        template: _raw_loader_my_tontines_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_tontines_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyTontinesPage);



/***/ }),

/***/ "X2qW":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/my-tontines.module.ts ***!
  \*************************************************************/
/*! exports provided: MyTontinesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTontinesPageModule", function() { return MyTontinesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_tontines_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-tontines.page */ "P8+5");
/* harmony import */ var _my_tontines_menu_my_tontines_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-tontines-menu/my-tontines-menu.component */ "3cGF");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _archive_tontine_archive_tontine_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./archive-tontine/archive-tontine.component */ "YyEB");










const routes = [
    {
        path: '',
        component: _my_tontines_page__WEBPACK_IMPORTED_MODULE_6__["MyTontinesPage"]
    }
];
let MyTontinesPageModule = class MyTontinesPageModule {
};
MyTontinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _my_tontines_page__WEBPACK_IMPORTED_MODULE_6__["MyTontinesPage"],
            _my_tontines_menu_my_tontines_menu_component__WEBPACK_IMPORTED_MODULE_7__["MyTontinesMenuComponent"],
            _archive_tontine_archive_tontine_component__WEBPACK_IMPORTED_MODULE_9__["ArchiveTontineComponent"]
        ],
        entryComponents: [
            _my_tontines_menu_my_tontines_menu_component__WEBPACK_IMPORTED_MODULE_7__["MyTontinesMenuComponent"],
            _archive_tontine_archive_tontine_component__WEBPACK_IMPORTED_MODULE_9__["ArchiveTontineComponent"]
        ]
    })
], MyTontinesPageModule);



/***/ }),

/***/ "YyEB":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/archive-tontine/archive-tontine.component.ts ***!
  \************************************************************************************/
/*! exports provided: ArchiveTontineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveTontineComponent", function() { return ArchiveTontineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_archive_tontine_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./archive-tontine.component.html */ "D2ml");
/* harmony import */ var _archive_tontine_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archive-tontine.component.scss */ "OeMM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");











let ArchiveTontineComponent = class ArchiveTontineComponent {
    constructor(modal, event, alertController, tontine, translate, tontineError, error, ui, navParams) {
        this.modal = modal;
        this.event = event;
        this.alertController = alertController;
        this.tontine = tontine;
        this.translate = translate;
        this.tontineError = tontineError;
        this.error = error;
        this.ui = ui;
        this.navParams = navParams;
        this.filterData = [];
        this.listData = [];
        this.loading = false;
        this.option = false;
        this.allData = [];
        this.tontineSelected = [];
        this.nbItems = 15;
        this.param = this.navParams.get('tontines');
    }
    ngOnInit() {
        this.getData(this.param);
    }
    // Get all data
    getData(data) {
        this.allData = [];
        data.forEach(element => {
            this.allData.push({ select: false, tontine_id: element.tontine.tontine_id, name: element.tontine.name, archived: 1 });
        });
        this.filterData = this.allData;
        if (this.allData.length > this.nbItems) {
            for (let i = 0; i < this.nbItems; i++) {
                this.listData.push(this.allData[this.listData.length]);
            }
        }
        else {
            this.listData = this.allData;
        }
    }
    // Filter the list of tontines
    searchForInvitation(ev) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
            this.allData = this.filterData.filter((data) => {
                if (data) {
                    return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            });
            if (this.allData.length > this.nbItems) {
                for (let i = 0; i < this.nbItems; i++) {
                    this.listData.push(this.allData[this.listData.length]);
                }
            }
            else {
                this.listData = this.allData;
            }
        }
        else {
            this.listData = this.filterData;
        }
    }
    // select or deselect all tontinies
    selectAll(option) {
        this.loading = true;
        this.allData.forEach((data, index, arr) => {
            arr[index].select = option ? true : false;
        });
        this.filterData = this.allData;
        if (this.allData.length > this.nbItems) {
            for (let i = 0; i < this.nbItems; i++) {
                this.listData.push(this.allData[this.listData.length]);
            }
        }
        else {
            this.listData = this.allData;
        }
        // resole after changed pb
        setTimeout(() => {
            this.loading = false;
        }, 200);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.listData.length < this.allData.length) {
                    this.listData.push(this.allData[this.listData.length]);
                }
                else if (this.listData.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 2000);
    }
    // close modal
    closeModal() {
        this.modal.dismiss(null, 'cancel');
    }
    // confirm archivation
    confirmArchiveMessage() {
        const messages = [];
        this.translate.get(['M_ARCHIVE_TITLE', 'M_ALL_ARCHIVE_MESSAGE', 'CANCEL_TEXT', 'YES_TEXT'])
            .subscribe(trans => {
            messages.push(trans.M_ARCHIVE_TITLE);
            messages.push(trans.M_ALL_ARCHIVE_MESSAGE);
            messages.push(trans.CANCEL_TEXT);
            messages.push(trans.YES_TEXT);
            this.archiveMessage(messages);
        });
    }
    // archive message
    archiveMessage(translation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `${translation[0]}`,
                message: `${translation[1]}`,
                buttons: [
                    {
                        text: `${translation[2]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: `${translation[3]}`,
                        handler: () => {
                            // send the archivation answer
                            this.archviveTontineService();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // update the tontine selected
    updateTontineSelected() {
        this.tontineSelected = this.listData.filter(data => { return data.select === true; });
    }
    // Archive tontine service
    archviveTontineService() {
        const data = {
            liste_tontine: this.tontineSelected
        };
        this.loading = true;
        if (this.tontineSelected && this.tontineSelected.length > 0) {
            this.translate.get(['ARCHIVE_PROCESSING']).subscribe(trans => {
                this.ui.presentLoading(trans.ARCHIVE_PROCESSING);
            });
            this.tontine.disableTontine(data).subscribe((reponse) => {
                if (reponse && reponse.message === "success") {
                    this.translate.get(['ALL_ARCHIVE_SUCCESS_MSG']).subscribe(trans => {
                        this.ui.presentToast(trans.ALL_ARCHIVE_SUCCESS_MSG);
                    });
                    this.event.publish('new-tontine');
                }
                this.loading = false;
                this.ui.dismissLoading();
                this.closeModal();
            }, error => {
                if (error && error.error && error.error.message === "error") {
                    if (error && error.error && error.error.user_not_found) {
                        this.error.renewSession().then((ans) => {
                            this.ui.dismissLoading();
                            if (ans && ans.result === "OK") {
                                this.archviveTontineService();
                            }
                            else {
                                this.loading = false;
                                this.closeModal();
                            }
                        });
                    }
                    else {
                        this.loading = false;
                        this.ui.dismissLoading();
                        this.closeModal();
                        this.tontineError.manageTontineError(error);
                    }
                }
                else {
                    this.loading = false;
                    this.ui.dismissLoading();
                    this.closeModal();
                    this.error.manageError(error);
                }
            });
        }
        else {
            this.loading = false;
            this.translate.get(['ERROR_SELECT_TONTINES_MSG']).subscribe(trans => {
                this.ui.presentToast(trans.ERROR_SELECT_TONTINES_MSG);
            });
        }
    }
};
ArchiveTontineComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_7__["TontineErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ArchiveTontineComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
ArchiveTontineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-archive-tontine',
        template: _raw_loader_archive_tontine_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_archive_tontine_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArchiveTontineComponent);



/***/ }),

/***/ "eUX4":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/my-tontines.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS10b250aW5lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "t075":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/my-tontines-menu/my-tontines-menu.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS10b250aW5lcy1tZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=my-tontines-my-tontines-module.js.map