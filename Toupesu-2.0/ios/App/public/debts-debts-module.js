(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["debts-debts-module"],{

/***/ "1/PG":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/debts-menu/debts-menu.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWJ0cy1tZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "24m/":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/debts-menu/debts-menu.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DebtsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsMenuComponent", function() { return DebtsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_debts_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./debts-menu.component.html */ "6+A2");
/* harmony import */ var _debts_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debts-menu.component.scss */ "1/PG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");






let DebtsMenuComponent = class DebtsMenuComponent {
    constructor(popoverController, tontine) {
        this.popoverController = popoverController;
        this.tontine = tontine;
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() { }
    closeDebtsMenu() {
        this.popoverController.dismiss();
    }
    // check if administrator
    checkIfAdmin() {
        return this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
    }
};
DebtsMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] }
];
DebtsMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'debts-menu',
        template: _raw_loader_debts_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_debts_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DebtsMenuComponent);



/***/ }),

/***/ "6+A2":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/debts-menu/debts-menu.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"debts-menu-popover\">\r\n  <ion-item (click)=\"closeDebtsMenu()\" \r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'due']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{ 'DUES_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeDebtsMenu()\" \r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'in-progress-list']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n     {{ 'IN_PROGRESS_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeDebtsMenu()\" *ngIf=\"checkIfAdmin()\"\r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'in-approval']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{ 'IN_APPROUVAL_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeDebtsMenu()\" *ngIf=\"!checkIfAdmin()\"\r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'in-approval-user']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{ 'IN_APPROUVAL_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeDebtsMenu()\"  *ngIf=\"checkIfAdmin()\"\r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'approved']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{'COMPLETED_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeDebtsMenu()\"  *ngIf=\"!checkIfAdmin()\"\r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'approved-user']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{'COMPLETED_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeDebtsMenu()\"  *ngIf=\"checkIfAdmin()\"\r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'rejected']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{'REJECTED_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item (click)=\"closeDebtsMenu()\"   *ngIf=\"!checkIfAdmin()\"\r\n  [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'debts', 'user-rejected']\"\r\n  lines=\"none\">\r\n    <ion-label>\r\n      {{'REJECTED_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "8zdU":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/validation/validation.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title  [color]=\"(debtOption === 'validate')? 'success':'danger'\" class=\"ion-text-center ion-text-capitalize\">{{ debtOption === 'validate' ? ('VALIDATE_TEXT' | translate | lowercase) : ('REJETER_TEXT' | translate  | lowercase) }}\r\n      {{ 'PAYMENT_TEXT' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"validation\">\r\n  <ion-grid class=\"ion-padding-horizontal\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>{{ 'VALIDATION_TEXT_1' | translate }} {{ debtOption === 'validate' ? ('VALIDATE_TEXT' | translate  | lowercase) : ('REJETER_TEXT' | translate | lowercase) }} {{ 'VALIDATION_TEXT_2' | translate }} <b>{{ (debtAmount | commadumper) }} {{currency}}</b>\r\n           {{ 'DEBT_REF' | translate }}<b>{{reference}}</b> {{ 'OF_TEXT' | translate }} {{memberName}}.</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" required>{{ 'ENTER_REASON_TEXT' | translate }}...</ion-label>\r\n          <ion-textarea [(ngModel)]=\"reason\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                [color]=\"debtOption === 'validate'? 'success':'danger'\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeValidation('cancel')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" [disabled]=\"(debtOption !== 'validate' && !reason) || loading\" (click)=\"validationAdmin(debtOption)\"\r\n                [color]=\"debtOption === 'validate' ? 'success':'danger'\"  \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n            {{ debtOption === 'validate' ?  ('VALIDATE_TEXT' | translate)  : ('REJETER_TEXT' | translate) }}\r\n          </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <p *ngIf=\"loading\" class=\"ion-text-center ion-padding\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "Eni0":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/validation/validation.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_validation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./validation.component.html */ "8zdU");
/* harmony import */ var _validation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.component.scss */ "RLEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let ValidationComponent = class ValidationComponent {
    constructor(modatCtrl, debt, tontine, error, ui, translate, tontineError, event) {
        this.modatCtrl = modatCtrl;
        this.debt = debt;
        this.tontine = tontine;
        this.error = error;
        this.ui = ui;
        this.translate = translate;
        this.tontineError = tontineError;
        this.event = event;
        this.loading = false;
        this.reason = '';
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() { }
    closeValidation(ans) {
        this.modatCtrl.dismiss(ans, 'cancel');
    }
    // validate the member debt
    validationAdmin(action) {
        switch (action) {
            case 'validate':
                this.validatePayment();
                break;
            case 'reject':
                this.rejectPayment();
                break;
            default:
                break;
        }
    }
    // validate the debt payment
    validatePayment() {
        const facture = this.debt.getDebtsData();
        const data = {
            facture_id: facture.id,
            tontine_id: facture.tontine_id,
            reason: this.reason
        };
        this.loading = true;
        this.debt.validateBill(data).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('DEBT_BILL_VALIDATE_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.event.publish('bill-validate');
                this.closeValidation('validate');
            }
        }, error => {
            this.loading = false;
            if (error && error.error) {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.validatePayment();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // reject the debt payment
    rejectPayment() {
        const facture = this.debt.getDebtsData();
        const data = {
            facture_id: facture.id,
            tontine_id: facture.tontine_id,
            reason: this.reason
        };
        this.loading = true;
        this.debt.cancelBill(data).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('DEBT_BILL_REJECT_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.event.publish('bill-rejected');
                this.closeValidation('reject');
            }
        }, error => {
            this.loading = false;
            if (error && error.error) {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.rejectPayment();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
};
ValidationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__["DebtsManagerService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__["TontineErrorService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] }
];
ValidationComponent.propDecorators = {
    memberName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    debtAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    debtOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    reference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ValidationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-validation',
        template: _raw_loader_validation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_validation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ValidationComponent);



/***/ }),

/***/ "LP1e":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/debts/debts.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Debts manager</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>");

/***/ }),

/***/ "QSLP":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/debts.module.ts ***!
  \****************************************************************************/
/*! exports provided: DebtsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsPageModule", function() { return DebtsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _debts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debts-routing-module */ "cpw4");
/* harmony import */ var _debts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debts.page */ "S3v1");
/* harmony import */ var _debts_menu_debts_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debts-menu/debts-menu.component */ "24m/");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation/validation.component */ "Eni0");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");










let DebtsPageModule = class DebtsPageModule {
};
DebtsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _debts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DebtsRouting"]
        ],
        declarations: [
            _debts_page__WEBPACK_IMPORTED_MODULE_6__["DebtsPage"],
            _debts_menu_debts_menu_component__WEBPACK_IMPORTED_MODULE_7__["DebtsMenuComponent"],
            _validation_validation_component__WEBPACK_IMPORTED_MODULE_8__["ValidationComponent"]
        ],
        entryComponents: [
            _debts_menu_debts_menu_component__WEBPACK_IMPORTED_MODULE_7__["DebtsMenuComponent"],
            _validation_validation_component__WEBPACK_IMPORTED_MODULE_8__["ValidationComponent"]
        ]
    })
], DebtsPageModule);



/***/ }),

/***/ "RLEE":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/validation/validation.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "S3v1":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/debts.page.ts ***!
  \**************************************************************************/
/*! exports provided: DebtsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsPage", function() { return DebtsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_debts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./debts.page.html */ "LP1e");
/* harmony import */ var _debts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debts.page.scss */ "cY+/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DebtsPage = class DebtsPage {
    constructor() { }
    ngOnInit() {
    }
};
DebtsPage.ctorParameters = () => [];
DebtsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-debts',
        template: _raw_loader_debts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_debts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DebtsPage);



/***/ }),

/***/ "cY+/":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/debts.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWJ0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "cpw4":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/debts/debts-routing-module.ts ***!
  \************************************************************************************/
/*! exports provided: DebtsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsRouting", function() { return DebtsRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'due',
        pathMatch: 'full'
    },
    {
        path: 'due',
        loadChildren: () => __webpack_require__.e(/*! import() | due-due-module */ "due-due-module").then(__webpack_require__.bind(null, /*! ./due/due.module */ "biLl")).then(m => m.DuePageModule)
    },
    {
        path: ':id/in-progress',
        loadChildren: () => __webpack_require__.e(/*! import() | in-progress-in-progress-module */ "in-progress-in-progress-module").then(__webpack_require__.bind(null, /*! ./in-progress/in-progress.module */ "rqaP")).then(m => m.InProgressPageModule)
    },
    {
        path: 'in-progress-list',
        loadChildren: () => __webpack_require__.e(/*! import() | in-progress-list-in-progress-list-module */ "in-progress-list-in-progress-list-module").then(__webpack_require__.bind(null, /*! ./in-progress-list/in-progress-list.module */ "eeWF")).then(m => m.InProgressListPageModule)
    },
    {
        path: 'in-progress-paiement',
        loadChildren: () => __webpack_require__.e(/*! import() | in-progress-paiement-in-progress-paiement-module */ "in-progress-paiement-in-progress-paiement-module").then(__webpack_require__.bind(null, /*! ./in-progress-paiement/in-progress-paiement.module */ "eZVV")).then(m => m.InProgressPaiementPageModule)
    },
    {
        path: 'in-approval',
        loadChildren: () => __webpack_require__.e(/*! import() | in-approval-in-approval-module */ "in-approval-in-approval-module").then(__webpack_require__.bind(null, /*! ./in-approval/in-approval.module */ "Mqxe")).then(m => m.InApprovalPageModule)
    },
    {
        path: ':id/in-approval-detail',
        loadChildren: () => __webpack_require__.e(/*! import() | in-approval-detail-in-approval-detail-module */ "in-approval-detail-in-approval-detail-module").then(__webpack_require__.bind(null, /*! ./in-approval-detail/in-approval-detail.module */ "dfJK")).then(m => m.InApprovalDetailPageModule)
    },
    {
        path: 'in-approval-user',
        loadChildren: () => __webpack_require__.e(/*! import() | in-approval-user-in-approval-user-module */ "in-approval-user-in-approval-user-module").then(__webpack_require__.bind(null, /*! ./in-approval-user/in-approval-user.module */ "8QqB")).then(m => m.InApprovalUserPageModule)
    },
    {
        path: ':id/in-approval-detail-user',
        loadChildren: () => __webpack_require__.e(/*! import() | in-approval-detail-user-in-approval-detail-user-module */ "in-approval-detail-user-in-approval-detail-user-module").then(__webpack_require__.bind(null, /*! ./in-approval-detail-user/in-approval-detail-user.module */ "gij9")).then(m => m.InApprovalDetailUserPageModule)
    },
    {
        path: 'approved',
        loadChildren: () => __webpack_require__.e(/*! import() | approved-approved-module */ "approved-approved-module").then(__webpack_require__.bind(null, /*! ./approved/approved.module */ "wUQJ")).then(m => m.ApprovedPageModule)
    },
    {
        path: ':id/approved-detail',
        loadChildren: () => __webpack_require__.e(/*! import() | approved-detail-approved-detail-module */ "approved-detail-approved-detail-module").then(__webpack_require__.bind(null, /*! ./approved-detail/approved-detail.module */ "9MXa")).then(m => m.ApprovedDetailPageModule)
    },
    {
        path: 'approved-user',
        loadChildren: () => __webpack_require__.e(/*! import() | approved-user-approved-user-module */ "approved-user-approved-user-module").then(__webpack_require__.bind(null, /*! ./approved-user/approved-user.module */ "iQDJ")).then(m => m.ApprovedUserPageModule)
    },
    {
        path: ':id/approved-detail-user',
        loadChildren: () => __webpack_require__.e(/*! import() | approved-detail-user-approved-detail-user-module */ "approved-detail-user-approved-detail-user-module").then(__webpack_require__.bind(null, /*! ./approved-detail-user/approved-detail-user.module */ "rmbH")).then(m => m.ApprovedDetailUserPageModule)
    },
    {
        path: 'rejected',
        loadChildren: () => __webpack_require__.e(/*! import() | rejected-rejected-module */ "rejected-rejected-module").then(__webpack_require__.bind(null, /*! ./rejected/rejected.module */ "B6V1")).then(m => m.RejectedPageModule)
    },
    {
        path: ':id/rejected-detail',
        loadChildren: () => __webpack_require__.e(/*! import() | rejected-detail-rejected-detail-module */ "rejected-detail-rejected-detail-module").then(__webpack_require__.bind(null, /*! ./rejected-detail/rejected-detail.module */ "qN5J")).then(m => m.RejectedDetailPageModule)
    },
    {
        path: 'user-rejected',
        loadChildren: () => __webpack_require__.e(/*! import() | rejected-user-rejected-user-module */ "rejected-user-rejected-user-module").then(__webpack_require__.bind(null, /*! ./rejected-user/rejected-user.module */ "FVZa")).then(m => m.RejectedUserPageModule)
    },
    {
        path: ':id/rejected-detail-user',
        loadChildren: () => __webpack_require__.e(/*! import() | rejected-detail-user-rejected-detail-user-module */ "rejected-detail-user-rejected-detail-user-module").then(__webpack_require__.bind(null, /*! ./rejected-detail-user/rejected-detail-user.module */ "3Qhs")).then(m => m.RejectedDetailUserPageModule)
    }
];
let DebtsRouting = class DebtsRouting {
};
DebtsRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DebtsRouting);



/***/ })

}]);
//# sourceMappingURL=debts-debts-module.js.map