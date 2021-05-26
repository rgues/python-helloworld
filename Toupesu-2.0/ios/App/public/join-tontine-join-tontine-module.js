(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["join-tontine-join-tontine-module"],{

/***/ "/eIl":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/join-tontine/join-tontine.module.ts ***!
  \***************************************************************/
/*! exports provided: JoinTontinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinTontinePageModule", function() { return JoinTontinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _join_tontine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join-tontine.page */ "4LkN");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _join_tontine_page__WEBPACK_IMPORTED_MODULE_6__["JoinTontinePage"]
    }
];
let JoinTontinePageModule = class JoinTontinePageModule {
};
JoinTontinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_join_tontine_page__WEBPACK_IMPORTED_MODULE_6__["JoinTontinePage"]]
    })
], JoinTontinePageModule);



/***/ }),

/***/ "4LkN":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/join-tontine/join-tontine.page.ts ***!
  \*************************************************************/
/*! exports provided: JoinTontinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinTontinePage", function() { return JoinTontinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_join_tontine_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./join-tontine.page.html */ "wM4b");
/* harmony import */ var _join_tontine_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./join-tontine.page.scss */ "ewJS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../invitations/service/invitations.service */ "8N1Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/invitations/service/inivitation-error.service */ "/OOw");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");














let JoinTontinePage = class JoinTontinePage {
    constructor(fb, translate, userService, navigator, events, ui, router, invitation, invitationError, error) {
        this.fb = fb;
        this.translate = translate;
        this.userService = userService;
        this.navigator = navigator;
        this.events = events;
        this.ui = ui;
        this.router = router;
        this.invitation = invitation;
        this.invitationError = invitationError;
        this.error = error;
        this.loading = false;
        this.name = '';
        this.states = [];
        this.currentUser = this.userService.getUserData();
    }
    ngOnInit() {
        this.initValidationMessage();
        this.initjoinTontineForm();
    }
    // Form getters
    get joinCode() {
        return this.joinTontineForm.get('code_invitation');
    }
    get joinContact() {
        return this.joinTontineForm.get('emailOrphone');
    }
    // Init the form message
    initValidationMessage() {
        this.translate.get(['M_TONTINE_CODE_REQUIRED', 'M_EMAIL_PHONE_REQUIRED']).subscribe(trans => {
            this.validationMessages = {
                code: [
                    { type: 'required', message: trans.M_TONTINE_CODE_REQUIRED }
                ],
                contact: [
                    { type: 'required', message: trans.M_EMAIL_PHONE_REQUIRED }
                ]
            };
        });
    }
    // Init Join tontine form
    initjoinTontineForm() {
        let prefix = '';
        const credentials = this.userService.getUserSecret();
        prefix = credentials ? credentials.phone_prefix : '';
        const currentUser = this.userService.getUserData();
        this.joinTontineForm = this.fb.group({
            code_invitation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prefix: [prefix],
            phone_prefix: [prefix],
            sendMode: ['sms'],
            phoneid: [prefix],
            phone: [currentUser && currentUser.phone ? currentUser.phone : ''],
            emailOrphone: [currentUser && currentUser.phone ? currentUser.phone : currentUser.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // Join a tontine
    joinTontine() {
        this.loading = true;
        this.invitation.acceptInvitationTontineWithToken(this.joinTontineForm.value)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.success) {
                this.initjoinTontineForm();
                this.translate.get('USER_SECURITY_MSG10').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.events.publish('new-tontine');
                this.navigator.setDirection('root');
                this.router.navigate(['dashboard/my-tontines']);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && !error.error.success) {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.joinTontine();
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
};
JoinTontinePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _invitations_service_invitations_service__WEBPACK_IMPORTED_MODULE_7__["InvitationsService"] },
    { type: src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_10__["InivitationErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] }
];
JoinTontinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-join-tontine',
        template: _raw_loader_join_tontine_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_join_tontine_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JoinTontinePage);



/***/ }),

/***/ "ewJS":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/join-tontine/join-tontine.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2luLXRvbnRpbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "wM4b":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/join-tontine/join-tontine.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-tontines\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n      <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'MENU_JOIN_TONTINE' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"join-tontine\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-padding\">\r\n        <ion-text>{{ 'JOIN_TONTINE_MSG' | translate }}. {{'JOIN_TONTINE_MSG3' | translate }}.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"joinTontineForm\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">{{ 'JOIN_TONTINE_MSG1' | translate }}</ion-label>\r\n                <ion-input type=\"number\" formControlName=\"code_invitation\" required></ion-input>\r\n              </ion-item>\r\n              <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                  <div class=\"error-message\"\r\n                    *ngIf=\"joinCode.hasError(validation.type) && (joinCode.dirty || joinCode.touched)\">\r\n                    <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                    {{ validation.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" [disabled]=\"joinTontineForm.invalid || loading\" (click)=\"joinTontine()\"\r\n          color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\">\r\n          {{ 'JOIN_TEXT' | translate }}\r\n        </ion-button>\r\n        <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=join-tontine-join-tontine-module.js.map