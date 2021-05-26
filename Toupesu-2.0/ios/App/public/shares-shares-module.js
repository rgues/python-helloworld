(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shares-shares-module"],{

/***/ "+pRV":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/shares/shares.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + myTontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'SHARE_TEXT' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"detail-share\">\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-img class=\"inner-image\" [src]=\"'assets/share.svg'\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n          <ion-col>\r\n            <ion-list>\r\n              <ion-item>\r\n                <p><b>{{ 'TONTINE_DETAIL_TEXT17' | translate }} : </b>{{ myTontine.nombre_part_max_tontine || 0 }}</p>\r\n              </ion-item>\r\n              <ion-item>\r\n                <p><b>{{ 'TONTINE_DETAIL_TEXT18' | translate }} : </b> {{ myTontine.nombre_part_max_membre || 0 }} </p>\r\n              </ion-item>\r\n              <ion-item>\r\n                <p><b>{{ 'TONTINE_DETAIL_TEXT19' | translate }} : </b> {{ myTontine.numberlot || 1 }} </p>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\"  *ngIf=\"canEditShare()\">\r\n  <ion-button expand=\"full\"\r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\"\r\n        (click)=\"openShareEdit()\">\r\n        {{ 'EDIT_TEXT' | translate }}\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "CaCM":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/shares/share-edit/share-edit.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ShareEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareEditComponent", function() { return ShareEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_share_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./share-edit.component.html */ "dQTz");
/* harmony import */ var _share_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-edit.component.scss */ "T5j4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");












let ShareEditComponent = class ShareEditComponent {
    constructor(fb, modatCtrl, tontine, tontinesData, events, error, translate, ui) {
        this.fb = fb;
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.tontinesData = tontinesData;
        this.events = events;
        this.error = error;
        this.translate = translate;
        this.ui = ui;
        this.loading = false;
        this.showField = true;
        this.typeMiseaprix = [{ name: '%', value: 'pourcentage' }, { name: 'value', value: 'valeur' }];
        this.errorMiseaprix1 = false;
        this.errorMiseaprix2 = false;
        this.errorMiseaprix0 = false;
        this.tontineData = this.tontine.getCurrentTontineData();
        this.minMemberShare = 1;
        this.minStokvelShare = this.tontinesData.getNumberShareStokvel();
        this.membersList = [];
    }
    ngOnInit() {
        this.getListOfMembers();
        this.InitShareInformation();
    }
    // Get contribution
    get totalShare() {
        return this.shareEditForm.get('nombre_part_max_membre');
    }
    get maxShareMber() {
        return this.shareEditForm.get('nombre_part_max_tontine');
    }
    get tontinetype() {
        return this.shareEditForm.get('type_tontine_id');
    }
    get nbrOfBaches() {
        return this.shareEditForm.get('numberlot');
    }
    get contribution() {
        return this.shareEditForm.get('contribution_amount');
    }
    get miseaprixcaisse1() {
        return this.shareEditForm.get('miseaprixcaisse1');
    }
    get miseaprixcaisse2() {
        return this.shareEditForm.get('miseaprixcaisse2');
    }
    get type_starter_bid_increment() {
        return this.shareEditForm.get('type_starter_bid_increment');
    }
    get starter_bid_increment() {
        return this.shareEditForm.get('starter_bid_increment');
    }
    // Init the tontine form
    InitShareInformation() {
        let formData = this.tontine.getCurrentTontineData();
        const defaultData = {
            tontine: {
                tontine_id: '',
                drawingtype_id: '',
                nombre_part_max_membre: '',
                nombre_part_max_tontine: '',
                contribution_amount: '',
                numberlot: '',
                miseaprixcaisse1: '',
                typemiseaprixcaisse1: this.typeMiseaprix[0].value,
                starter_bid_increment: '',
                type_starter_bid_increment: this.typeMiseaprix[1].value,
                liste_miseaprixcaisse1: [],
                miseaprixcaisse2: '',
                typemiseaprixcaisse2: this.typeMiseaprix[0].value,
                liste_miseaprixcaisse2: [],
                ajout_part_membre_en_contribuant_seances_passees_et_restantes: 'non',
                ajout_part_membre_en_contribuant_seulement_seances_restantes: 'oui',
            }
        };
        if (!formData) {
            formData = defaultData;
        }
        this.startDateSelect = new Date(formData.tontine.date_debut);
        if (formData.tontine.starter_bid_increment < 0) {
            this.showField = false;
            formData.tontine.miseaprixcaisse1 = parseFloat(formData.tontine.starter_bid_increment) * (-1);
            formData.tontine.typemiseaprixcaisse1 = 'valeur';
        }
        if (!formData.tontine.typemiseaprixcaisse1 && formData.tontine.starter_bid_increment >= 0) {
            formData.tontine.typemiseaprixcaisse1 = 'valeur';
        }
        if (!formData.tontine.type_starter_bid_increment) {
            formData.tontine.type_starter_bid_increment = 'valeur';
        }
        this.shareEditForm = this.fb.group({
            tontine_id: [formData.tontine.tontine_id],
            tontine_type_id: [formData.tontine.drawingtype_id],
            nombre_part_max_membre: [formData.tontine.nombre_part_max_membre,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.minMemberShare)])],
            nombre_part_max_tontine: [formData.tontine.nombre_part_max_tontine,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.tontinesData.getNumberShareStokvel())])],
            numberlot: [formData.tontine.numberlot, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)])],
            contribution_amount: [formData.tontine.coutshare],
            miseaprixcaisse1: [formData.tontine.miseaprixcaisse1],
            typeMiseaprix1: [formData.tontine.typemiseaprixcaisse1],
            starter_bid_increment: [formData.tontine.starter_bid_increment],
            type_starter_bid_increment: [formData.tontine.type_starter_bid_increment],
            liste_miseaprixcaisse1: [],
            miseaprixcaisse2: [formData.tontine.miseaprixcaisse2],
            typeMiseaprix2: [formData.tontine.typemiseaprixcaisse2],
            liste_miseaprixcaisse2: [],
            contributeCas1: [formData.tontine.ajout_part_membre_en_contribuant_seances_passees_et_restantes === 'oui' ? true : false],
            contributeCas2: [formData.tontine.ajout_part_membre_en_contribuant_seulement_seances_restantes === 'oui' ? true : false],
            ajout_part_membre_en_contribuant_seances_passees_et_restantes: [''],
            ajout_part_membre_en_contribuant_seulement_seances_restantes: ['']
        });
    }
    closeShareEdit(response) {
        this.modatCtrl.dismiss(response, 'cancel');
    }
    //remove spaces 
    removeSpaces(value) {
        this.shareEditForm.get('contribution_amount').setValue(this.tontinesData.removeSpace(value));
    }
    // can edit share
    canDisableEditShare() {
        return this.loading || this.shareEditForm.invalid
            || (this.shareEditForm.value.nombre_part_max_tontine < this.minStokvelShare)
            || (this.shareEditForm.value.nombre_part_max_membre > this.shareEditForm.value.nombre_part_max_tontine)
            || (this.shareEditForm.value.numberlot < 1)
            || (this.shareEditForm.value.tontine_type_id === 3 && (this.showField && (!this.shareEditForm.value.miseaprixcaisse1 || !this.shareEditForm.value.typeMiseaprix1))
                || (this.errorMiseaprix1 || this.errorMiseaprix2 || this.errorMiseaprix0));
    }
    // Get the list of tontine users
    getListOfMembers() {
        const current = this.tontine.getCurrentTontineData();
        this.tontine.getTontinesMembers(current.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.members && reponse.members.length > 0) {
                this.membersList = reponse.members.filter(member => { return member.active === 1; });
                this.minMemberShare = this.tontinesData.getMinNumberShareMember(this.membersList);
            }
        }, error => {
            if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getListOfMembers();
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Select Amount Bid Type & Value for increment and starting bid 
    updateStarterBid() {
        if (this.shareEditForm.value.starter_bid_increment < 0) {
            this.shareEditForm.get('starter_bid_increment').setValue("");
            this.starter_bid_increment.setErrors({ invalid: true });
        }
    }
    updateBidIncrement() {
        if (this.shareEditForm.value.miseaprixcaisse1 < 0) {
            this.shareEditForm.get('miseaprixcaisse1').setValue("");
            this.miseaprixcaisse1.setErrors({ invalid: true });
        }
    }
    // hide or show the field for increment
    HideOrShowIncrementField(value) {
        let valueInput = value ? String(value).replace(/\s/g, "") : value;
        valueInput = parseFloat(valueInput);
        if (valueInput) {
            this.shareEditForm.get('starter_bid_increment').setValue(valueInput);
        }
        if (valueInput && valueInput < 0) {
            this.showField = false;
            // Reset the step amount to default value
            this.shareEditForm.get('miseaprixcaisse1').setValue(valueInput * (-1));
            this.shareEditForm.get('typeMiseaprix1').setValue('valeur');
        }
        if (valueInput && valueInput >= 0) {
            this.showField = true;
        }
    }
    // Check the first mise à prix
    checkMiseaPrix1(misAprix) {
        this.errorMiseaprix0 = false;
        let valueInput = misAprix ? String(misAprix).replace(/\s/g, "") : misAprix;
        this.errorMiseaprix0 = this.tontinesData.validateMisaPrix(valueInput);
        this.shareEditForm.get('starter_bid_increment').setValue(valueInput);
        if (valueInput && isNaN(valueInput)) {
            this.errorMiseaprix0 = true;
        }
        if (this.shareEditForm.value.type_starter_bid_increment === "pourcentage") {
            if (25 <= parseFloat(valueInput)) {
                this.errorMiseaprix0 = true;
            }
        }
        if (this.shareEditForm.value.type_starter_bid_increment === "valeur") {
            let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 4);
            if (ValueInputCheck <= parseFloat(valueInput)) {
                this.errorMiseaprix0 = true;
            }
        }
        // (valueInput === "0") || 
        if ((valueInput === "-0") || (parseFloat(this.shareEditForm.value.contribution_amount) <= parseFloat(valueInput))) {
            this.errorMiseaprix0 = true;
        }
        if (this.errorMiseaprix0) {
            this.starter_bid_increment.setErrors({ invalid: true });
        }
    }
    // Check the second mise à prix
    checkMiseaPrix2(value) {
        this.errorMiseaprix2 = this.tontinesData.validateMisaPrix(value);
    }
    // Check the increment
    checkIncrement(value) {
        this.errorMiseaprix1 = false;
        let valueInput = value ? String(value).replace(/\s/g, "") : value;
        this.errorMiseaprix1 = this.tontinesData.validateIncrement(valueInput);
        this.shareEditForm.get('miseaprixcaisse1').setValue(valueInput);
        if (this.shareEditForm.value.typeMiseaprix1 === "pourcentage") {
            if (50 <= parseFloat(valueInput)) {
                this.errorMiseaprix1 = true;
            }
        }
        if (this.shareEditForm.value.typeMiseaprix1 === "valeur") {
            let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 2);
            if (ValueInputCheck <= parseFloat(valueInput)) {
                this.errorMiseaprix1 = true;
            }
        }
        if ((parseFloat(valueInput) < 1) || (parseFloat(this.shareEditForm.value.contribution_amount) <= parseFloat(valueInput))) {
            this.errorMiseaprix1 = true;
        }
        if (this.errorMiseaprix1) {
            this.miseaprixcaisse1.setErrors({ invalid: true });
        }
    }
    // Check the contribution amount
    checkContribution() {
        if (this.tontineData && this.tontineData.tontine && this.tontineData.tontine.drawingtype_id === 3) {
            this.shareEditForm.get('miseaprixcaisse1').setValue(String(this.shareEditForm.value.miseaprixcaisse1).replace(/\s/g, ""));
            this.shareEditForm.get('starter_bid_increment').setValue(String(this.shareEditForm.value.starter_bid_increment).replace(/\s/g, ""));
            this.errorMiseaprix0 = false;
            this.errorMiseaprix1 = false;
            // check field for increment -  CASE A
            let firstCaseA = false;
            let secCaseA = false;
            let thirdCaseA = false;
            //case A-1
            if (this.shareEditForm.value.typeMiseaprix1 === "pourcentage") {
                if (50 <= parseFloat(this.shareEditForm.value.miseaprixcaisse1)) {
                    firstCaseA = true;
                }
                else {
                    firstCaseA = false;
                }
            }
            //case A-2
            if (this.shareEditForm.value.typeMiseaprix1 === "valeur") {
                let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 2);
                if (ValueInputCheck <= parseFloat(this.shareEditForm.value.miseaprixcaisse1)) {
                    secCaseA = true;
                }
                else {
                    secCaseA = false;
                }
            }
            //case A-3
            if ((parseFloat(this.shareEditForm.value.miseaprixcaisse1) < 1) || (parseFloat(this.shareEditForm.value.contribution_amount)
                <= parseFloat(this.shareEditForm.value.miseaprixcaisse1))) {
                thirdCaseA = true;
            }
            else {
                thirdCaseA = false;
            }
            if (firstCaseA || secCaseA || thirdCaseA) {
                this.errorMiseaprix1 = true;
            }
            else {
                this.errorMiseaprix1 = false;
            }
            if (this.errorMiseaprix1) {
                this.miseaprixcaisse1.setErrors({ invalid: true });
            }
            else {
                this.miseaprixcaisse1.setErrors(null);
            }
            // check field for bid starting amount - CASE B
            let firstCaseB = false;
            let secCaseB = false;
            let thirdCaseB = false;
            //case B-1
            if (this.shareEditForm.value.type_starter_bid_increment === "pourcentage") {
                if (25 <= parseFloat(this.shareEditForm.value.starter_bid_increment)) {
                    firstCaseB = true;
                }
                else {
                    firstCaseB = false;
                }
            }
            //case B-2
            if (this.shareEditForm.value.type_starter_bid_increment === "valeur") {
                let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 4);
                if (ValueInputCheck <= parseFloat(this.shareEditForm.value.starter_bid_increment)) {
                    secCaseB = true;
                }
                else {
                    secCaseB = false;
                }
            }
            //case B-3
            if ((this.shareEditForm.value.starter_bid_increment === "0") ||
                (this.shareEditForm.value.starter_bid_increment === "-0") ||
                (parseFloat(this.shareEditForm.value.contribution_amount) <=
                    parseFloat(this.shareEditForm.value.starter_bid_increment))) {
                thirdCaseB = true;
            }
            else {
                thirdCaseB = false;
            }
            if (firstCaseB || secCaseB || thirdCaseB) {
                this.errorMiseaprix0 = true;
            }
            else {
                this.errorMiseaprix0 = false;
            }
            if (this.errorMiseaprix0) {
                this.starter_bid_increment.setErrors({ invalid: true });
            }
            else {
                this.starter_bid_increment.setErrors(null);
            }
        }
    }
    // Update tontine share
    updateShare() {
        this.loading = true;
        if (this.shareEditForm.value.tontine_type_id === 3) {
            this.shareEditForm.get('liste_miseaprixcaisse1')
                .setValue([{ miseaprixcaisse1: this.shareEditForm.value.miseaprixcaisse1, type: this.shareEditForm.value.typeMiseaprix1 }]);
            this.shareEditForm.get('liste_miseaprixcaisse2')
                .setValue([{ miseaprixcaisse2: this.shareEditForm.value.miseaprixcaisse2, type: this.shareEditForm.value.typeMiseaprix2 }]);
        }
        else {
            this.shareEditForm.get('liste_miseaprixcaisse1')
                .setValue([{ miseaprixcaisse1: 'NULL', type: 'NULL' }]);
            this.shareEditForm.get('liste_miseaprixcaisse2')
                .setValue([{ miseaprixcaisse2: 'NULL', type: 'NULL' }]);
        }
        this.shareEditForm.value.contributeCas1 ?
            this.shareEditForm.get('ajout_part_membre_en_contribuant_seances_passees_et_restantes')
                .setValue('oui') : this.shareEditForm.get('ajout_part_membre_en_contribuant_seances_passees_et_restantes')
            .setValue('non');
        this.shareEditForm.value.contributeCas2 ?
            this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
                .setValue('oui') : this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
            .setValue('non');
        this.shareEditForm.get('contribution_amount').setValue(this.shareEditForm.value.contribution_amount.toString().replace(/\s/g, ""));
        this.tontine.createAndUpdateParametreTontine(this.shareEditForm.value).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('M_TONTINE_SUCCESSFUL_UPDATED').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.events.publish('new-tontine');
                this.closeShareEdit('success');
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error && error.error && error.error.tontine_not_found) {
                    this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                    this.closeShareEdit('cancel');
                }
                if (error && error.error && error.error.user_unauthorized) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updateShare();
                        }
                        else {
                            this.loading = false;
                            this.closeShareEdit('cancel');
                        }
                    });
                }
            }
            else {
                this.closeShareEdit('cancel');
                this.error.manageError(error);
            }
        });
    }
};
ShareEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__["TontineGlobalDataService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] }
];
ShareEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-share-edit',
        template: _raw_loader_share_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_share_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShareEditComponent);



/***/ }),

/***/ "E3rz":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/shares/shares.module.ts ***!
  \******************************************************************************/
/*! exports provided: SharesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesPageModule", function() { return SharesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shares_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shares.page */ "QpE/");
/* harmony import */ var _share_edit_share_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share-edit/share-edit.component */ "CaCM");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");









const routes = [
    {
        path: '',
        component: _shares_page__WEBPACK_IMPORTED_MODULE_6__["SharesPage"]
    }
];
let SharesPageModule = class SharesPageModule {
};
SharesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _shares_page__WEBPACK_IMPORTED_MODULE_6__["SharesPage"],
            _share_edit_share_edit_component__WEBPACK_IMPORTED_MODULE_7__["ShareEditComponent"]
        ],
        entryComponents: [
            _share_edit_share_edit_component__WEBPACK_IMPORTED_MODULE_7__["ShareEditComponent"]
        ]
    })
], SharesPageModule);



/***/ }),

/***/ "QpE/":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/shares/shares.page.ts ***!
  \****************************************************************************/
/*! exports provided: SharesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesPage", function() { return SharesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shares_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shares.page.html */ "+pRV");
/* harmony import */ var _shares_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares.page.scss */ "p3lr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _share_edit_share_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share-edit/share-edit.component */ "CaCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");










let SharesPage = class SharesPage {
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
    // Can edit share 
    canEditShare() {
        let canEdit = false;
        if (((!this.seance && this.myTontine.active === 0) || (!this.currentSeance && !this.previousSeance && this.myTontine.active === 1) ||
            (this.seance && this.seance.numero_seance < 1 && this.myTontine.active === 1)) && this.myTontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    // Open the modal
    openShareEdit() {
        this.modatCtrl
            .create({
            component: _share_edit_share_edit_component__WEBPACK_IMPORTED_MODULE_5__["ShareEditComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(res => {
                if (res && res.data === 'success') {
                    this.getDetailInfos();
                }
            });
        });
    }
    // get the detail infos
    getDetailInfos() {
        this.tontine.getTontineDetail(this.myTontine.tontine_id).subscribe((reponse) => {
            if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                const tontineData = this.tontine.getCurrentTontineData();
                this.myTontine = tontineData.tontine;
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
};
SharesPage.ctorParameters = () => [
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] }
];
SharesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shares',
        template: _raw_loader_shares_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shares_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SharesPage);



/***/ }),

/***/ "T5j4":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/shares/share-edit/share-edit.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "dQTz":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/shares/share-edit/share-edit.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_EDIT_TEXT13' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"shareEditForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT18' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"nombre_part_max_membre\" required=\"true\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.nombre_part_max_membre < minMemberShare\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_MIN_MEMBER_SHARE' | translate : { share : minMemberShare }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT17' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"nombre_part_max_tontine\" required=\"true\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.nombre_part_max_tontine < shareEditForm.value.nombre_part_max_membre\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_MAX_TONTINE_SHARE' | translate \"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.nombre_part_max_tontine <  minStokvelShare\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_MIN_TONTINE_SHARE' | translate :  { share : minStokvelShare }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT19' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"numberlot\" required=\"true\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.numberlot < 1\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_LOT_TONTINE_SHARE' | translate : { share: 1 }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_EDIT_SHARE_TEXT9' | translate }}</ion-label>\r\n            <ion-input type=\"number\"\r\n              (ionChange)=\"removeSpaces(shareEditForm.value.contribution_amount); checkContribution()\"\r\n              formControlName=\"contribution_amount\" required=\"true\"></ion-input>\r\n            <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ tontineData.tontine.monnaie }} </span>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <div class=\"error-message\" *ngIf=\"contribution.invalid\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span [innerHTML]=\"'REQUIRED_FIELD_TEXT' | translate\"></span>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"8\" *ngIf=\"shareEditForm.value.tontine_type_id === 3\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_EDIT_SHARE_TEXT11' | translate }}</ion-label>\r\n            <ion-input type=\"text\"\r\n              (ionChange)=\"HideOrShowIncrementField(shareEditForm.value.starter_bid_increment);checkMiseaPrix1(shareEditForm.value.starter_bid_increment)\"\r\n              formControlName=\"starter_bid_increment\">\r\n            </ion-input>\r\n            <span slot=\"end\"  *ngIf=\"shareEditForm.value.type_starter_bid_increment === 'valeur'\" class=\"slot-prefix ion-no-margin\"> {{ tontineData.tontine.monnaie }} </span>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" *ngIf=\"shareEditForm.value.tontine_type_id === 3\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TYPE_TEXT' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updateStarterBid()\" formControlName=\"type_starter_bid_increment\">\r\n              <ion-select-option *ngFor=\"let type of typeMiseaprix\" [value]=\"type.value\">{{ (type.name| translate)  }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"shareEditForm.value.tontine_type_id === 3\">\r\n          <div class=\"ion-padding-horizontal\" color=\"dark\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <small [innerHTML]=\"'BidEditMsg' | translate\"></small>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"starter_bid_increment.invalid || errorMiseaprix0\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'MIS_A_PRIX_FIELD_TEXT' | translate : {amount : shareEditForm.value.type_starter_bid_increment === 'valeur' ? (getFloatNumber(shareEditForm.value.contribution_amount)/4) : 25, currency : shareEditForm.value.type_starter_bid_increment === 'valeur' ? tontineData.tontine.monnaie : '%' }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-col size=\"8\" *ngIf=\"shareEditForm.value.tontine_type_id === 3 && showField\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_EDIT_SHARE_TEXT17' | translate }}</ion-label>\r\n            <ion-input type=\"text\" (ionChange)=\"checkIncrement(shareEditForm.value.miseaprixcaisse1)\"\r\n              formControlName=\"miseaprixcaisse1\"></ion-input>\r\n            <span slot=\"end\"  *ngIf=\"shareEditForm.value.typeMiseaprix1 === 'valeur'\" class=\"slot-prefix ion-no-margin\"> {{ tontineData.tontine.monnaie }} </span>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" *ngIf=\"shareEditForm.value.tontine_type_id === 3 && showField\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TYPE_TEXT' | translate }}</ion-label>\r\n            <ion-select (ionChange)=\"updateBidIncrement()\" formControlName=\"typeMiseaprix1\">\r\n              <ion-select-option *ngFor=\"let type of typeMiseaprix\" [value]=\"type.value\">{{ (type.name| translate)  }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"(miseaprixcaisse1.invalid || errorMiseaprix1) && showField\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'INCREMENT_FIELD_TEXT' | translate : {amount :  shareEditForm.value.typeMiseaprix1 === 'valeur' ? (getFloatNumber(shareEditForm.value.contribution_amount)/2) : 50 , currency : shareEditForm.value.typeMiseaprix1 === 'valeur' ?  tontineData.tontine.monnaie  : '%' }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Not use by the system now -->\r\n        <!-- <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_EDIT_SHARE_TEXT15' | translate }}</ion-label>\r\n            <ion-toggle formControlName=\"contributeCas1\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col> -->\r\n        \r\n        <!-- Not use by the system now -->\r\n       <!--  <ion-col size=\"12\"  > \r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_EDIT_SHARE_TEXT16' | translate }}</ion-label>\r\n            <ion-toggle formControlName=\"contributeCas2\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col> -->\r\n        \r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" color=\"warning\" class=\"ion-text-uppercase\"\r\n          [disabled]=\"canDisableEditShare()\"\r\n          (click)=\"updateShare()\" shape=\"round\">\r\n          {{ 'SAVE_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" fill=\"outline\" color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\"\r\n          (click)=\"closeShareEdit('cancel')\">\r\n          {{ 'CANCEL_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"ion-text-center\">\r\n      <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "p3lr":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/shares/shares.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZXMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=shares-shares-module.js.map