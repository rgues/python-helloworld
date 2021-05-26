(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["join-tontine-event-join-tontine-event-module"],{

/***/ "0khn":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/join-tontine-event/join-tontine-event.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: JoinTontineEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinTontineEventPageModule", function() { return JoinTontineEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _join_tontine_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join-tontine-event.page */ "4Ebn");







const routes = [
    {
        path: '',
        component: _join_tontine_event_page__WEBPACK_IMPORTED_MODULE_6__["JoinTontineEventPage"]
    }
];
let JoinTontineEventPageModule = class JoinTontineEventPageModule {
};
JoinTontineEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_join_tontine_event_page__WEBPACK_IMPORTED_MODULE_6__["JoinTontineEventPage"]]
    })
], JoinTontineEventPageModule);



/***/ }),

/***/ "4Ebn":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/join-tontine-event/join-tontine-event.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: JoinTontineEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinTontineEventPage", function() { return JoinTontineEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_join_tontine_event_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./join-tontine-event.page.html */ "NFpF");
/* harmony import */ var _join_tontine_event_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./join-tontine-event.page.scss */ "LTfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tontines-events.service */ "eEpS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_prefix_prefix_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/prefix/prefix.component */ "5JTu");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dashboard/invitations/service/inivitation-error.service */ "/OOw");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");


















let JoinTontineEventPage = class JoinTontineEventPage {
    constructor(fb, translate, modatCtrl, activeRoute, userService, location, invitationError, formUtil, ui, events, router, event, localStorage, error) {
        this.fb = fb;
        this.translate = translate;
        this.modatCtrl = modatCtrl;
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.location = location;
        this.invitationError = invitationError;
        this.formUtil = formUtil;
        this.ui = ui;
        this.events = events;
        this.router = router;
        this.event = event;
        this.localStorage = localStorage;
        this.error = error;
        this.loading = false;
        this.states = [];
        this.currentUser = this.userService.getUserData();
        this.tontineEventData = this.event.getCurrentTontineEventData();
        if (this.activeRoute.snapshot.params.hasTitle === 1) {
            this.name = this.tontineEventData ? this.tontineEventData.title : '';
        }
    }
    ngOnInit() {
        this.initValidationMessage();
        this.initjoinTontineForm();
    }
    // init Join tontine form
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
            emailOrphone: [currentUser && currentUser.phone ? currentUser.email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // Get all the word countries
    getWordCountries(refresh) {
        this.location.getWordCountries(refresh).then((countries) => {
            if (countries && countries.length > 0) {
                this.states = countries;
                this.getCurrentCountry(false);
            }
        });
    }
    // Set the default country
    getCurrentCountry(refresher) {
        this.location.getCurrentWordCountryInfo(refresher).then((country) => {
            if (country && !this.joinTontineForm.value.prefix) {
                this.joinTontineForm.get('prefix').setValue(country.country_prefixe);
            }
        }).catch(error => {
        });
    }
    // update the phone value
    updatePhoneFormat(phone) {
        if (this.formUtil.validatePhone(phone)) {
            this.joinTontineForm.get('emailOrphone').setValue(this.joinTontineForm.value.prefix + this.joinTontineForm.value.emailOrphone);
        }
    }
    // open the prfix  modal
    showPrefix() {
        this.modatCtrl
            .create({
            component: src_app_shared_prefix_prefix_component__WEBPACK_IMPORTED_MODULE_10__["PrefixComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.role === 'select') {
                    this.states.forEach(country => {
                        if (country.code_country === ans.data) {
                            this.joinTontineForm.get('prefix').setValue(country.country_prefixe);
                        }
                    });
                }
            });
        });
    }
    // Invitation Message
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
    get joinCode() {
        return this.joinTontineForm.get('code_invitation');
    }
    get joinContact() {
        return this.joinTontineForm.get('emailOrphone');
    }
    // Remove space
    removeSpace() {
        const input = String(this.joinTontineForm.value.emailOrphone);
        this.joinTontineForm.get('emailOrphone').setValue(input.trim());
    }
    // Join a tontine
    joinTontine() {
        this.loading = true;
        this.event.acceptInvitationEventWithToken(this.joinTontineForm.value)
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.success) {
                this.initjoinTontineForm();
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
                this.events.publish('new-event');
                this.router.navigate(['dashboard/tontines-events']);
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
JoinTontineEventPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_11__["LocationService"] },
    { type: src_app_dashboard_invitations_service_inivitation_error_service__WEBPACK_IMPORTED_MODULE_12__["InivitationErrorService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_13__["FormUtilsService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_16__["UiService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_15__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_7__["TontinesEventsService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_17__["LocalStorageService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] }
];
JoinTontineEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-join-tontine-event',
        template: _raw_loader_join_tontine_event_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_join_tontine_event_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JoinTontineEventPage);



/***/ }),

/***/ "LTfc":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/join-tontine-event/join-tontine-event.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2luLXRvbnRpbmUtZXZlbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "NFpF":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/join-tontine-event/join-tontine-event.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/tontines-events\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'MENU_JOIN_EVENT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"join-tontine\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-padding\">\r\n        <ion-text >{{ 'JOIN_TONTINE_EVENT_MSG' | translate }}  {{name}} : </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"joinTontineForm\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">{{ 'JOIN_TONTINE_MSG1_EVENT' | translate }}</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"code_invitation\" required></ion-input>\r\n              </ion-item> \r\n              <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                  <div class=\"error-message\" *ngIf=\"joinCode.hasError(validation.type) && (joinCode.dirty || joinCode.touched)\">\r\n                    <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                    {{ validation.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div> \r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" [disabled]=\"joinTontineForm.invalid || loading\" (click)=\"joinTontine()\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n                {{ 'JOIN_TEXT' | translate }}\r\n          </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=join-tontine-event-join-tontine-event-module.js.map