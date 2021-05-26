(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"],{

/***/ "DEvg":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/roles/roles.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + myTontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'ROLES_TEXT' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"detail-share\">\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-img class=\"inner-image\" [src]=\"'assets/members.svg'\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n          <ion-col>\r\n            <ion-list>\r\n              <ion-item>\r\n                <p><b>{{ 'NB_ADMINISTRATOR' | translate }} : </b>{{ myTontine.number_admin_current || 0 }}</p>\r\n              </ion-item>\r\n              <ion-item>\r\n                <p><b>{{ 'NB_MAX_ADMINISTRATOR' | translate }} : </b>{{ myTontine.number_admin_max || 0 }}</p>\r\n              </ion-item>\r\n              <ion-item>\r\n                <p><b>{{ 'NB_VALIDATORS' | translate }} : </b> {{ myTontine.number_admin_that_validates_contributions || 0 }} </p>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\"  *ngIf=\"canEditRole()\">\r\n  <ion-button expand=\"full\"\r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\"\r\n        (click)=\"openShareEdit()\">\r\n        {{ 'EDIT_TEXT' | translate }}\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "E7ur":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/roles/roles.module.ts ***!
  \****************************************************************************/
/*! exports provided: RolesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesPageModule", function() { return RolesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roles-edit/roles-edit.component */ "m7Qt");
/* harmony import */ var _roles_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roles.page */ "mo/D");









const routes = [
    {
        path: '',
        component: _roles_page__WEBPACK_IMPORTED_MODULE_8__["RolesPage"]
    }
];
let RolesPageModule = class RolesPageModule {
};
RolesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _roles_page__WEBPACK_IMPORTED_MODULE_8__["RolesPage"],
            _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_7__["RolesEditComponent"]
        ],
        entryComponents: [
            _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_7__["RolesEditComponent"]
        ]
    })
], RolesPageModule);



/***/ }),

/***/ "QEQb":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/roles/roles-edit/roles-edit.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'MANAGE_ROLE' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"rolesEditForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'NB_MAX_ADMINISTRATOR' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"number_admin_max\" required=\"true\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"nbAdminMax.valid && (rolesEditForm.value.number_admin_max <  rolesEditForm.value.number_admin_current)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              {{'ADMIN_ERROR_MSG' | translate }}\r\n            </div>\r\n        </div>\r\n\r\n        <ion-col size=\"12\" >\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'NB_VALIDATORS' | translate }}</ion-label>\r\n            <ion-select  formControlName=\"number_admin_that_validates_contributions\">\r\n              <ion-select-option *ngFor=\"let val of nbValidatorsList\" [value]=\"val\">{{ val }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" color=\"warning\" class=\"ion-text-uppercase\"\r\n          [disabled]=\"loading || rolesEditForm.invalid || rolesEditForm.value.number_admin_max <  rolesEditForm.value.number_admin_current\"\r\n          (click)=\"updateRoles()\" shape=\"round\">\r\n          {{ 'SAVE_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" fill=\"outline\" color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\"\r\n          (click)=\"closeShareEdit('cancel')\">\r\n          {{ 'CANCEL_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"ion-text-center\">\r\n      <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "f9/T":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/roles/roles.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "m7Qt":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/roles/roles-edit/roles-edit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RolesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesEditComponent", function() { return RolesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roles_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roles-edit.component.html */ "QEQb");
/* harmony import */ var _roles_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles-edit.component.scss */ "zYkh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let RolesEditComponent = class RolesEditComponent {
    constructor(fb, modatCtrl, tontine, events, error, translate, tontineError, ui) {
        this.fb = fb;
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.events = events;
        this.error = error;
        this.translate = translate;
        this.tontineError = tontineError;
        this.ui = ui;
        this.loading = false;
        this.types = [{ name: '%', value: 'pourcentage' }, { name: 'value', value: 'valeur' }];
        this.tontineData = this.tontine.getCurrentTontineData();
        this.nbValidatorsList = [];
        this.getNbValidators();
    }
    ngOnInit() {
        this.InitRolesInformation();
    }
    closeShareEdit(response) {
        this.modatCtrl.dismiss(response, 'cancel');
    }
    // Init the tontine form
    InitRolesInformation() {
        let formData = this.tontine.getCurrentTontineData();
        this.rolesEditForm = this.fb.group({
            tontine_id: [formData.tontine.tontine_id],
            number_admin_max: [formData.tontine.number_admin_max, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$')])],
            number_admin_current: [formData.tontine.number_admin_current],
            number_admin_that_validates_contributions: [formData.tontine.number_admin_that_validates_contributions, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$')])],
            type_number_admin_that_validates_contributions: [this.types[1].value, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // Nb admins max
    get nbAdminMax() {
        return this.rolesEditForm.get('number_admin_max');
    }
    // Numbers of validators
    get nbValidators() {
        return this.rolesEditForm.get('number_admin_that_validates_contributions');
    }
    // Get the numbers of validators
    getNbValidators() {
        this.nbValidatorsList = [];
        const nbVal = this.tontineData.tontine.number_admin_current;
        for (let i = 1; i <= nbVal; i++) {
            this.nbValidatorsList.push(i);
        }
    }
    // Update tontine share
    updateRoles() {
        this.loading = true;
        this.tontine.updateAdminValidator(this.rolesEditForm.value).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('M_TONTINE_SUCCESSFUL_UPDATED').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.events.publish('new-tontine');
                this.closeShareEdit('success');
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updateRoles();
                        }
                        else {
                            this.loading = false;
                            this.closeShareEdit('cancel');
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.closeShareEdit('cancel');
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.loading = false;
                this.closeShareEdit('cancel');
                this.error.manageError(error);
            }
        });
    }
};
RolesEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__["TontineErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] }
];
RolesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roles-edit',
        template: _raw_loader_roles_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RolesEditComponent);



/***/ }),

/***/ "mo/D":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/roles/roles.page.ts ***!
  \**************************************************************************/
/*! exports provided: RolesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesPage", function() { return RolesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roles.page.html */ "DEvg");
/* harmony import */ var _roles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.page.scss */ "f9/T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roles-edit/roles-edit.component */ "m7Qt");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");










let RolesPage = class RolesPage {
    constructor(userService, activeRoute, tontine, modatCtrl, errorService) {
        this.userService = userService;
        this.activeRoute = activeRoute;
        this.tontine = tontine;
        this.modatCtrl = modatCtrl;
        this.errorService = errorService;
        this.tontineId = this.activeRoute.snapshot.params.tontineId;
        this.user = this.userService.getUserData();
        const tontineData = this.tontine.getCurrentTontineData();
        this.myTontine = tontineData.tontine;
        this.currentSeance = tontineData.seance_courante;
        this.members = tontineData.membres;
        this.bid = tontineData.tontine;
        this.seance = tontineData.seance_courante;
        this.previousSeance = tontineData.avant_derniere_seance;
        this.cycle = tontineData.cycle_courant;
    }
    ngOnInit() {
    }
    // Can edit role 
    canEditRole() {
        let canEdit = false;
        if (((!this.seance && this.myTontine.active === 0) || (!this.seance && !this.previousSeance && this.myTontine.active === 1) ||
            (this.seance && this.seance.numero_seance < 2 && this.myTontine.active === 1)) && this.myTontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    openShareEdit() {
        this.modatCtrl
            .create({
            component: _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_8__["RolesEditComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(res => {
                if (res.data === 'success') {
                    this.tontine.getTontineDetail(this.myTontine.tontine_id).subscribe((reponse) => {
                        if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                            this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                            const tontineData = this.tontine.getCurrentTontineData();
                            this.myTontine = tontineData.tontine;
                        }
                    }, error => {
                        if (error && error.error && error.error.user_not_found) {
                            this.errorService.renewSession();
                        }
                        else {
                            this.errorService.manageError(error);
                        }
                    });
                }
            });
        });
    }
};
RolesPage.ctorParameters = () => [
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] }
];
RolesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roles',
        template: _raw_loader_roles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RolesPage);



/***/ }),

/***/ "zYkh":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/roles/roles-edit/roles-edit.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=roles-roles-module.js.map