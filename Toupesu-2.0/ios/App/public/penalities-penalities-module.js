(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["penalities-penalities-module"],{

/***/ "9GXD":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/penalities/penalities.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + myTontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'PENALITIES_TEXT' | translate }}\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"more\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"detail-penalities\">\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-img class=\"inner-image\" [src]=\"'assets/penalities.svg'\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n          <ion-col>\r\n            <ion-list>\r\n              <ion-item>\r\n                <p><b>{{ 'TONTINE_DETAIL_TEXT20' | translate }}: </b>{{myTontine.penaliteabsencesurlacontributionnayantpasbouffe || 0}} \r\n                  {{ myTontine.typepenaliteabsencesurlacontributionnayantpasbouffe === 'pourcentage' ? '%' : myTontine.monnaie}}</p>\r\n              </ion-item>\r\n              <ion-item>\r\n                <p><b>{{ 'TONTINE_DETAIL_TEXT21' | translate }}: </b> {{myTontine.penaliteretardsurlacontributionnayantpasbouffe || 0 }} \r\n                  {{myTontine.typepenaliteretardsurlacontributionnayantpasbouffe === 'pourcentage' ? '%' : myTontine.monnaie}}</p>\r\n              </ion-item>\r\n              <ion-item>\r\n                <p><b>{{ 'TONTINE_DETAIL_TEXT22' | translate }}: </b>{{myTontine.dureesurleretard || 0}} {{(myTontine.typedureesurleretard | translate)}}</p>\r\n              </ion-item>\r\n            <!--   <ion-item>\r\n                <p><b>{{'M_LOAN_INTEREST' | translate }}: </b>{{myTontine.penalitesurleremboursement || 0 }} \r\n                  {{myTontine.typepenalitesurleremboursement === 'pourcentage' ? '%' : myTontine.monnaie}}</p>\r\n              </ion-item> -->\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>      \r\n      <ion-col *ngIf=\"myTontine.administrator === 1\">\r\n        <ion-button expand=\"full\"\r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\" (click)=\"openPenalityEdit()\">\r\n          {{ 'EDIT_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" \r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\" (click)=\"openPenalitiesList()\">\r\n          {{ 'TONTINE_PENALTY_TEXT1' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "A7Co":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penality-pay/penality-pay.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbGl0eS1wYXkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Mm6I":
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penalities-list/penalities-list.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PenalitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenalitiesListComponent", function() { return PenalitiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_penalities_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./penalities-list.component.html */ "bqva");
/* harmony import */ var _penalities_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penalities-list.component.scss */ "SQjY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _penality_pay_penality_pay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../penality-pay/penality-pay.component */ "quns");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/contribution.service */ "US41");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");












let PenalitiesListComponent = class PenalitiesListComponent {
    constructor(modatCtrl, contribution, router, tontine, userService, error, translate) {
        this.modatCtrl = modatCtrl;
        this.contribution = contribution;
        this.router = router;
        this.tontine = tontine;
        this.userService = userService;
        this.error = error;
        this.translate = translate;
        this.penalities = [];
        this.tontineData = this.tontine.getCurrentTontineData();
        this.allData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.loading = true;
        this.getPenalities(null);
    }
    closePenalitiesList() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    // Get the list user penalities
    getPenalities(event) {
        const currentTontine = this.tontine.getCurrentTontineData();
        this.contribution.getPenalitesImpayeMembre(currentTontine.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.liste_penalite && reponse.liste_penalite.length > 0) {
                if (reponse && reponse.liste_penalite) {
                    this.allData = reponse.liste_penalite;
                    if (this.allData.length > this.nbItems) {
                        this.penalities = [];
                        for (let i = 0; i < this.nbItems; i++) {
                            this.penalities.push(this.allData[this.penalities.length]);
                        }
                    }
                    else {
                        this.penalities = this.allData;
                    }
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
            if (error && error.error) {
                if (error && error.error && error.error.user_unauthorized) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.getPenalities(event);
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
        this.getPenalities(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.penalities.length < this.allData.length) {
                    this.penalities.push(this.allData[this.penalities.length]);
                }
                else if (this.penalities.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Get the penalities type
    getPenalitiesTypeName(type) {
        let typeName = type;
        switch (type) {
            case 'absence':
                this.translate.get('PENALITY_ABSENCE').subscribe(value => {
                    typeName = value;
                });
                break;
            case 'retard':
                this.translate.get('PENALITY_RETARD').subscribe(value => {
                    typeName = value;
                });
                break;
            default:
                break;
        }
        return typeName;
    }
    // Open the 
    openPenalityPay(penality) {
        this.modatCtrl
            .create({
            component: _penality_pay_penality_pay_component__WEBPACK_IMPORTED_MODULE_5__["PenalityPayComponent"],
            componentProps: {
                tontineName: penality.title,
                amountToPay: penality.amount,
                subject: penality.type_penalite
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                this.penalities = [];
                this.allData = [];
                this.loading = true;
                this.getPenalities(null);
            });
        });
    }
    // paid penalities with all payment mode
    paidPenalities(peanlity, pin) {
        const paymentData = {
            title: this.tontineData.tontine.name,
            contribution: peanlity.montant_restant_a_payer,
            seance_id: peanlity.seance_id ? peanlity.seance_id : null,
            type_penalite: this.getPenalitiesTypeName(peanlity.type_penalite),
            device_name: this.tontineData.tontine.monnaie,
            montant: peanlity.montant_restant_a_payer,
            typecontribution_id: 1,
            sens_contribution: 'sortant',
            liste_part: [{ numero_part: peanlity.numero_part }],
            pin: pin
        };
        this.contribution.sendContributionData(paymentData);
        this.openPenalityPay(paymentData);
    }
    // show the pin confirmation dilaog
    confirmPin(peanlity) {
        const tontineData = this.tontine.getCurrentTontineData();
        if (tontineData && tontineData.tontine.tontine_payment_type_id === 1 || tontineData.tontine.drawingtype_id === 6) {
            this.closePenalitiesList();
            this.router.navigate(['/', 'dashboard', 'my-tontines', tontineData.tontine.tontine_id, 'debts']);
        }
        else {
            const userPin = this.userService.getUserSecret();
            this.paidPenalities(peanlity, userPin.password);
        }
    }
};
PenalitiesListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_6__["ContributionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
PenalitiesListComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
PenalitiesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-penalities-list',
        template: _raw_loader_penalities_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_penalities_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PenalitiesListComponent);



/***/ }),

/***/ "Mvdd":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penalities.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbGl0aWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "S2Ev":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/penalities/penality-edit/penality-edit.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\"> <span [innerHTML]=\"'TONTINE_EDIT_TEXT17' | translate\"></span></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"penalityEditForm\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-align-items-end\">\r\n        <ion-col size=\"8\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT20' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"penaliteabsencesurlacontributionnayantpasbouffe\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label></ion-label>\r\n          <ion-select formControlName=\"typepenaliteabsencesurlacontributionnayantpasbouffe\">\r\n            <ion-select-option *ngFor=\"let unit of penalityUnit\" [value]=\"unit.value\">{{unit.label}}</ion-select-option>       \r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-end\">\r\n        <ion-col size=\"8\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT21' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"penaliteretardsurlacontributionnayantpasbouffe\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label></ion-label>\r\n          <ion-select formControlName=\"typepenaliteretardsurlacontributionnayantpasbouffe\">\r\n            <ion-select-option  *ngFor=\"let unit of penalityUnit\" [value]=\"unit.value\">{{unit.label}}</ion-select-option>         \r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>\r\n<!--       <ion-row class=\"ion-align-items-end\">\r\n        <ion-col size=\"8\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'LOAN_INTEREST_TEXT' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"penalitesurleremboursement\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label></ion-label>\r\n          <ion-select formControlName=\"typepenalitesurleremboursement\">\r\n            <ion-select-option  *ngFor=\"let unit of penalityUnit\" [value]=\"unit.value\">{{unit.label}}</ion-select-option>     \r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <ion-row class=\"ion-align-items-end\">\r\n        <ion-col size=\"8\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'TONTINE_DETAIL_TEXT22' | translate }}</ion-label>\r\n            <ion-input (ionChange)=\"checkTime()\" type=\"number\" formControlName=\"dureesurleretard\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label></ion-label>\r\n          <ion-select (ionChange)=\"checkTime()\"  formControlName=\"typedureesurleretard\">\r\n            <ion-select-option  *ngFor=\"let unit of timeDelayUnit\" [value]=\"unit.value\">{{unit.label}}</ion-select-option>       \r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>        \r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>   \r\n      <ion-col size=\"6\">\r\n          <ion-button expand=\"full\" [disabled]=\"penalityEditForm.invalid || loading || !isTimeCorrect\"\r\n                color=\"warning\"  (click)=\"updatePenalities()\"\r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n            {{ 'SAVE_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>   \r\n      <ion-col size=\"6\">\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closePenalityEdit('cancel')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"ion-text-center\">\r\n      <ion-spinner *ngIf=\"loading\"  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>\r\n  \r\n  ");

/***/ }),

/***/ "SQjY":
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penalities-list/penalities-list.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbGl0aWVzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "X9hY":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penalities.page.ts ***!
  \************************************************************************************/
/*! exports provided: PenalitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenalitiesPage", function() { return PenalitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_penalities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./penalities.page.html */ "9GXD");
/* harmony import */ var _penalities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penalities.page.scss */ "Mvdd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _penality_edit_penality_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./penality-edit/penality-edit.component */ "jTe6");
/* harmony import */ var _penalities_list_penalities_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./penalities-list/penalities-list.component */ "Mm6I");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");











let PenalitiesPage = class PenalitiesPage {
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
        this.cycle = tontineData.cycle_courant;
    }
    ngOnInit() {
    }
    // Get detail infor;ation of tontines
    getDetailInfos() {
        this.tontine.getTontineDetail(this.myTontine.tontine_id).subscribe((reponse) => {
            if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                this.myTontine = reponse.infos_tontine[0].tontine;
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.errorService.renewSession().then((data) => {
                    if (data && data.result === "OK") {
                        this.getDetailInfos();
                    }
                });
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
    openPenalityEdit() {
        this.modatCtrl
            .create({
            component: _penality_edit_penality_edit_component__WEBPACK_IMPORTED_MODULE_5__["PenalityEditComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(res => {
                if (res.data === 'success') {
                    this.getDetailInfos();
                }
            });
        });
    }
    openPenalitiesList() {
        this.modatCtrl
            .create({
            component: _penalities_list_penalities_list_component__WEBPACK_IMPORTED_MODULE_6__["PenalitiesListComponent"]
        })
            .then(modalEl => modalEl.present());
    }
};
PenalitiesPage.ctorParameters = () => [
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] }
];
PenalitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-penalities',
        template: _raw_loader_penalities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_penalities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PenalitiesPage);



/***/ }),

/***/ "bqva":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/penalities/penalities-list/penalities-list.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_PENALTY_TEXT1' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"my-penalities\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let penality of penalities\">\r\n      <ion-label>\r\n        <p>{{ 'TONTINE_DETAIL_TEXT10' | translate }}: <b>{{penality.numero_seance? penality.numero_seance : ''}}</b> </p>\r\n        <p>{{ 'TONTINE_DETAIL_TEXT5' | translate }}: <b>{{penality.type_penalite ? getPenalitiesTypeName(penality.type_penalite) : ''}}</b> </p>\r\n        <p>{{ 'AMOUNT_TEXT' | translate }}: <b>{{penality.montant_restant_a_payer ? penality.montant_restant_a_payer : ''}} {{tontineData.tontine ? tontineData.tontine.monnaie : ''}}</b> </p>\r\n        <p>{{ 'DATE_TEXT' | translate }}: <b>{{penality.date_penalite ? penality.date_penalite.split(' ')[0] : ''}}</b> </p>\r\n      </ion-label>\r\n      <ion-button slot=\"end\" color=\"warning\" class=\"pay-btn\"\r\n        (click)=\"confirmPin(penality)\">\r\n          <ion-text>{{ 'PAY_TEXT' | translate }}</ion-text>\r\n          <ion-icon name=\"wallet\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>   \r\n  </ion-list>\r\n  <div  *ngIf=\"penalities && penalities.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'M_PENALITIES_MSG' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>   \r\n      <ion-col>\r\n        <ion-button expand=\"full\" \r\n              fill=\"outline\"\r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\" (click)=\"closePenalitiesList()\">\r\n          {{ 'CANCEL_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "gRiy":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penalities.module.ts ***!
  \**************************************************************************************/
/*! exports provided: PenalitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenalitiesPageModule", function() { return PenalitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _penalities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./penalities.page */ "X9hY");
/* harmony import */ var _penality_edit_penality_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./penality-edit/penality-edit.component */ "jTe6");
/* harmony import */ var _penalities_list_penalities_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./penalities-list/penalities-list.component */ "Mm6I");
/* harmony import */ var _penality_pay_penality_pay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./penality-pay/penality-pay.component */ "quns");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");











const routes = [
    {
        path: '',
        component: _penalities_page__WEBPACK_IMPORTED_MODULE_6__["PenalitiesPage"]
    }
];
let PenalitiesPageModule = class PenalitiesPageModule {
};
PenalitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        declarations: [
            _penalities_page__WEBPACK_IMPORTED_MODULE_6__["PenalitiesPage"],
            _penality_edit_penality_edit_component__WEBPACK_IMPORTED_MODULE_7__["PenalityEditComponent"],
            _penalities_list_penalities_list_component__WEBPACK_IMPORTED_MODULE_8__["PenalitiesListComponent"],
            _penality_pay_penality_pay_component__WEBPACK_IMPORTED_MODULE_9__["PenalityPayComponent"]
        ],
        entryComponents: [
            _penality_edit_penality_edit_component__WEBPACK_IMPORTED_MODULE_7__["PenalityEditComponent"],
            _penalities_list_penalities_list_component__WEBPACK_IMPORTED_MODULE_8__["PenalitiesListComponent"],
            _penality_pay_penality_pay_component__WEBPACK_IMPORTED_MODULE_9__["PenalityPayComponent"]
        ]
    })
], PenalitiesPageModule);



/***/ }),

/***/ "jTe6":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penality-edit/penality-edit.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PenalityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenalityEditComponent", function() { return PenalityEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_penality_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./penality-edit.component.html */ "S2Ev");
/* harmony import */ var _penality_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penality-edit.component.scss */ "tLYJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");











let PenalityEditComponent = class PenalityEditComponent {
    constructor(fb, modatCtrl, tontine, error, ui, translate, tontineError) {
        this.fb = fb;
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.error = error;
        this.ui = ui;
        this.translate = translate;
        this.tontineError = tontineError;
        this.loading = false;
        this.isTimeCorrect = true;
        this.penalityUnit = [{ label: 'num', value: 'valeur' }, { label: '%', value: 'pourcentage' }];
        this.timeDelayUnit = [
            { label: 'ss', value: 'secondes' },
            { label: 'mm', value: 'minutes' },
            { label: 'hh', value: 'heures' },
            { label: 'dd', value: 'jours' }
        ];
    }
    ngOnInit() {
        this.InitPenalitiesInformation();
    }
    // Check if the limite time is correct
    checkTime() {
        switch (this.penalityEditForm.value.typedureesurleretard) {
            case 'secondes':
                0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 60 ?
                    this.isTimeCorrect = true : this.isTimeCorrect = false;
                break;
            case 'minutes':
                0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 60 ?
                    this.isTimeCorrect = true : this.isTimeCorrect = false;
                break;
            case 'heures':
                0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 24 ?
                    this.isTimeCorrect = true : this.isTimeCorrect = false;
                break;
            case 'jours':
                0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 32 ?
                    this.isTimeCorrect = true : this.isTimeCorrect = false;
                break;
            default:
                break;
        }
    }
    closePenalityEdit(reponse) {
        this.modatCtrl.dismiss(reponse, 'cancel');
    }
    get penalityAbsence() {
        return this.penalityEditForm.get('penaliteabsencesurlacontributionnayantpasbouffe');
    }
    get penalityContrib() {
        return this.penalityEditForm.get('penaliteretardsurlacontributionnayantpasbouffe');
    }
    get penalityContribBid() {
        return this.penalityEditForm.get('delairemboursementcaisse2');
    }
    get penalityLoan() {
        return this.penalityEditForm.get('penalitesurleremboursement');
    }
    get timeDelay() {
        return this.penalityEditForm.get('dureesurleretard');
    }
    // Init the tontine form
    InitPenalitiesInformation() {
        let formData = this.tontine.getCurrentTontineData();
        const defaultData = {
            tontine: {
                tontine_id: '',
                drawingtype_id: 1,
                penalitesurleremboursement: [''],
                typepenalitesurleremboursement: [''],
                liste_penalitesurleremboursement: [],
                delairemboursementcaisse2: [''],
                typedelairemboursementcaisse2: [''],
                liste_delairemboursementcaisse2: [],
                penaliteretardsurlacontributionnayantpasbouffe: [''],
                typepenaliteretardsurlacontributionnayantpasbouffe: [''],
                liste_penaliteretardsurlacontributionnayantpasbouffe: [],
                penaliteretardsurlacontributionayantbouffe: [''],
                typepenaliteretardsurlacontributionayantbouffe: [''],
                liste_penaliteretardsurlacontributionayantbouffe: [],
                penaliteabsencesurlacontributionayantbouffe: [''],
                typepenaliteabsencesurlacontributionayantbouffe: [''],
                liste_penaliteabsencesurlacontributionayantbouffe: [],
                penaliteabsencesurlacontributionnayantpasbouffe: [''],
                typepenaliteabsencesurlacontributionnayantpasbouffe: [''],
                liste_penaliteabsencesurlacontributionnayantpasbouffe: [],
                dureesurleretard: [''],
                typedureesurleretard: [''],
                liste_dureesurleretard: []
            }
        };
        if (!formData) {
            formData = defaultData;
        }
        this.penalityEditForm = this.fb.group({
            tontine_id: [formData.tontine.tontine_id],
            drawingtype_id: [formData.tontine.drawingtype_id],
            penalitesurleremboursement: [formData.tontine.penalitesurleremboursement, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typepenalitesurleremboursement: [formData.tontine.typepenalitesurleremboursement, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            liste_penalitesurleremboursement: [],
            delairemboursementcaisse2: [formData.tontine.delairemboursementcaisse2],
            typedelairemboursementcaisse2: [formData.tontine.typedelairemboursementcaisse2],
            liste_delairemboursementcaisse2: [],
            penaliteretardsurlacontributionnayantpasbouffe: [formData.tontine.penaliteretardsurlacontributionnayantpasbouffe,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typepenaliteretardsurlacontributionnayantpasbouffe: [formData.tontine.typepenaliteretardsurlacontributionnayantpasbouffe,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            liste_penaliteretardsurlacontributionnayantpasbouffe: [],
            penaliteretardsurlacontributionayantbouffe: [formData.tontine.penaliteretardsurlacontributionayantbouffe],
            typepenaliteretardsurlacontributionayantbouffe: [formData.tontine.typepenaliteretardsurlacontributionayantbouffe],
            liste_penaliteretardsurlacontributionayantbouffe: [],
            penaliteabsencesurlacontributionayantbouffe: [formData.tontine.penaliteabsencesurlacontributionayantbouffe],
            typepenaliteabsencesurlacontributionayantbouffe: [formData.tontine.typepenaliteabsencesurlacontributionayantbouffe],
            liste_penaliteabsencesurlacontributionayantbouffe: [],
            penaliteabsencesurlacontributionnayantpasbouffe: [formData.tontine.penaliteabsencesurlacontributionnayantpasbouffe,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typepenaliteabsencesurlacontributionnayantpasbouffe: [formData.tontine.typepenaliteabsencesurlacontributionnayantpasbouffe,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            liste_penaliteabsencesurlacontributionnayantpasbouffe: [],
            dureesurleretard: [formData.tontine.dureesurleretard, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typedureesurleretard: [formData.tontine.typedureesurleretard, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            liste_dureesurleretard: []
        });
    }
    // Create the tontine
    updatePenalities() {
        this.loading = true;
        if (this.penalityEditForm.value.drawingtype_id === 3) {
            this.penalityEditForm.get('liste_delairemboursementcaisse2')
                .setValue([{
                    delairemboursementcaisse2: this.penalityEditForm.value.delairemboursementcaisse2,
                    type: this.penalityEditForm.value.typedelairemboursementcaisse2
                }]);
        }
        else {
            this.penalityEditForm.get('liste_delairemboursementcaisse2')
                .setValue([{
                    delairemboursementcaisse2: 'NULL',
                    type: 'NULL'
                }]);
        }
        this.penalityEditForm.get('liste_penalitesurleremboursement')
            .setValue([{
                penalitesurleremboursement: this.penalityEditForm.value.penalitesurleremboursement,
                type: this.penalityEditForm.value.typepenalitesurleremboursement
            }]);
        this.penalityEditForm.get('liste_penaliteretardsurlacontributionnayantpasbouffe')
            .setValue([{
                penaliteretardsurlacontributionnayantpasbouffe: this.penalityEditForm.value.penaliteretardsurlacontributionnayantpasbouffe,
                type: this.penalityEditForm.value.typepenaliteretardsurlacontributionnayantpasbouffe
            }]);
        this.penalityEditForm.get('liste_penaliteretardsurlacontributionayantbouffe')
            .setValue([{
                penaliteretardsurlacontributionayantbouffe: this.penalityEditForm.value.penaliteretardsurlacontributionayantbouffe,
                type: this.penalityEditForm.value.typepenaliteretardsurlacontributionayantbouffe
            }]);
        this.penalityEditForm.get('liste_penaliteabsencesurlacontributionnayantpasbouffe')
            .setValue([{
                penaliteabsencesurlacontributionnayantpasbouffe: this.penalityEditForm.value.penaliteabsencesurlacontributionnayantpasbouffe,
                type: this.penalityEditForm.value.typepenaliteabsencesurlacontributionnayantpasbouffe
            }]);
        this.penalityEditForm.get('liste_penaliteabsencesurlacontributionayantbouffe')
            .setValue([{
                penaliteabsencesurlacontributionayantbouffe: this.penalityEditForm.value.penaliteabsencesurlacontributionayantbouffe,
                type: this.penalityEditForm.value.typepenaliteabsencesurlacontributionayantbouffe
            }]);
        this.penalityEditForm.get('liste_dureesurleretard')
            .setValue([{
                dureesurleretard: this.penalityEditForm.value.dureesurleretard,
                type: this.penalityEditForm.value.typedureesurleretard
            }]);
        this.tontine.createAndUpdatePenaliteTontine(this.penalityEditForm.value).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('M_PENALTY_SUCCESSFUL_UPDATED').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.closePenalityEdit('success');
            }
        }, error => {
            this.loading = false;
            if (error && error.error) {
                if (error && error.error && error.error.user_unauthorized) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updatePenalities();
                        }
                        else {
                            this.loading = false;
                            this.closePenalityEdit('cancel');
                        }
                    });
                }
                else {
                    this.closePenalityEdit('cancel');
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.closePenalityEdit('cancel');
                this.error.manageError(error);
            }
        });
    }
};
PenalityEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__["TontineErrorService"] }
];
PenalityEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-penality-edit',
        template: _raw_loader_penality_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_penality_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PenalityEditComponent);



/***/ }),

/***/ "q+Pt":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/penalities/penality-pay/penality-pay.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-title class=\"ion-text-center\">{{ 'PENALITY_PAYMENT' | translate }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"tontine-penality\">\n    <h4 class=\"ion-padding-horizontal\"><small>{{ 'TONTINE_LIST_PAID' | translate }} <i>{{ subject }}</i> {{ 'M_PENALTY_FOR_TONTINE' | translate }} : <b>{{ tontineName }}</b></small></h4>\n    <app-paidmode [amountPay]=\"amountToPay\"></app-paidmode>\n  </ion-content>\n  \n  <ion-footer class=\"ion-padding ion-text-center\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-button expand=\"full\" \n                    fill=\"outline\"\n                    color=\"warning\" \n                    class=\"ion-text-uppercase\"\n                    shape=\"round\" (click)=\"closePenalityPay()\">\n                {{ 'CANCEL_TEXT' | translate }}\n              </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-footer>\n");

/***/ }),

/***/ "quns":
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penality-pay/penality-pay.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PenalityPayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenalityPayComponent", function() { return PenalityPayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_penality_pay_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./penality-pay.component.html */ "q+Pt");
/* harmony import */ var _penality_pay_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penality-pay.component.scss */ "A7Co");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");






let PenalityPayComponent = class PenalityPayComponent {
    constructor(modatCtrl, events) {
        this.modatCtrl = modatCtrl;
        this.events = events;
        this.events.subscribe('modal-pay-close', () => {
            this.closePenalityPay();
        });
    }
    ngOnInit() { }
    closePenalityPay() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
};
PenalityPayComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }
];
PenalityPayComponent.propDecorators = {
    tontineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    subject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    amountToPay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PenalityPayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-penality-pay',
        template: _raw_loader_penality_pay_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_penality_pay_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PenalityPayComponent);



/***/ }),

/***/ "tLYJ":
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/penalities/penality-edit/penality-edit.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbGl0eS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=penalities-penalities-module.js.map