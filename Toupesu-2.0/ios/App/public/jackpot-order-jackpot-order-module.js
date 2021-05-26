(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jackpot-order-jackpot-order-module"],{

/***/ "5W6q":
/*!********************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/jackpot-order/jackpot-beneficiary/jackpot-beneficiary.page.ts ***!
  \********************************************************************************************************************/
/*! exports provided: JackpotBeneficiaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JackpotBeneficiaryPage", function() { return JackpotBeneficiaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_jackpot_beneficiary_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./jackpot-beneficiary.page.html */ "hE8F");
/* harmony import */ var _jackpot_beneficiary_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jackpot-beneficiary.page.scss */ "CAuK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");












let JackpotBeneficiaryPage = class JackpotBeneficiaryPage {
    constructor(tontine, translate, navParam, modatCtrl, error, ui, util, datService, tontineError) {
        this.tontine = tontine;
        this.translate = translate;
        this.navParam = navParam;
        this.modatCtrl = modatCtrl;
        this.error = error;
        this.ui = ui;
        this.util = util;
        this.datService = datService;
        this.tontineError = tontineError;
        this.membersData = [];
        this.members = [];
        this.jackpotList = [];
        const tontineData = this.tontine.getCurrentTontineData();
        this.maxDate = this.datService.formatDateTiret(tontineData.tontine.date_debut);
        this.membres = this.navParam.get('data');
        this.currentTontine = tontineData;
        this.allData = [];
        this.filterData = [];
        this.nbItems = 10;
        this.loadingSave = false;
    }
    ngOnInit() {
        this.loading = true;
        this.getListOfUsers();
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
    // close the modal
    closeModal() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    // Get the list of tontine users
    getListOfUsers() {
        this.filterData = [];
        this.loading = false;
        this.filterData = this.util.orderByKey(this.membres, 'weights');
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
    // set jackpot beneficiaries
    setJackpotBeneficiary(date) {
        const listMembers = [];
        this.members.forEach(data => {
            if (data.hasJackpot) {
                listMembers.push({ user_id: data.id, numero_part: data.numero_part });
            }
        });
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            liste_membre: listMembers,
            date_seance: this.datService.formatDateTiret(date)
        };
        this.loadingSave = true;
        this.tontine.designatedJackpotList(param).subscribe((reponse) => {
            this.loadingSave = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('JACKPOT_SET_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.modatCtrl.dismiss('success', 'cancel');
            }
        }, error => {
            if (error && error.error) {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.setJackpotBeneficiary(date);
                        }
                        else {
                            this.loadingSave = false;
                        }
                    });
                }
                else {
                    this.loadingSave = false;
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.loadingSave = false;
                this.error.manageError(error);
            }
        });
    }
};
JackpotBeneficiaryPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_10__["DateserviceService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_8__["TontineErrorService"] }
];
JackpotBeneficiaryPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false },] }]
};
JackpotBeneficiaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jackpot-beneficiary',
        template: _raw_loader_jackpot_beneficiary_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jackpot_beneficiary_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JackpotBeneficiaryPage);



/***/ }),

/***/ "92Ap":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/jackpot-order/jackpot-order.page.ts ***!
  \******************************************************************************************/
/*! exports provided: JackpotOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JackpotOrderPage", function() { return JackpotOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_jackpot_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./jackpot-order.page.html */ "9SsH");
/* harmony import */ var _jackpot_order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jackpot-order.page.scss */ "VOrR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _jackpot_beneficiary_jackpot_beneficiary_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jackpot-beneficiary/jackpot-beneficiary.page */ "5W6q");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");












let JackpotOrderPage = class JackpotOrderPage {
    constructor(tontine, tontinesData, translate, modatCtrl, error, ui, util) {
        this.tontine = tontine;
        this.tontinesData = tontinesData;
        this.translate = translate;
        this.modatCtrl = modatCtrl;
        this.error = error;
        this.ui = ui;
        this.util = util;
        this.membersData = [];
        this.members = [];
        this.jackpotList = [];
        const tontineData = this.tontine.getCurrentTontineData();
        this.membres = tontineData.membres.liste_membre;
        this.currentSeance = tontineData.seance_courante;
        this.previousSeance = tontineData.avant_derniere_seance;
        this.currentTontine = tontineData;
        this.allData = [];
        this.filterData = [];
        this.nbItems = 10;
        this.loadingSave = false;
    }
    ngOnInit() {
        this.loading = true;
        this.getListOfUsers(null);
    }
    // Search a member
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
    // Set the jackpot beneficiaries
    setJackpot() {
        this.modatCtrl
            .create({
            component: _jackpot_beneficiary_jackpot_beneficiary_page__WEBPACK_IMPORTED_MODULE_8__["JackpotBeneficiaryPage"],
            componentProps: {
                data: this.allData
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.data === 'success') {
                    this.getListOfUsers(null);
                }
            });
        });
    }
    // Can edit Info 
    canEditInfo() {
        let canEdit = false;
        if (((!this.currentSeance && this.currentTontine.tontine.active === 0) || (!this.currentSeance && !this.previousSeance && this.currentTontine.tontine.active === 1) ||
            (this.currentSeance && this.currentSeance.numero_seance < 1 && this.currentTontine.tontine.active === 1)) && this.currentTontine.tontine.administrator === 1) {
            canEdit = true;
        }
        return canEdit;
    }
    // Get the list of tontine users
    getListOfUsers(event) {
        this.tontine.getTontinesMembers(this.currentTontine.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                if (reponse && reponse.members && reponse.members.length > 0) {
                    this.filterData = [];
                    let index = 1;
                    reponse.members.forEach(member => {
                        if (member && this.tontinesData.memberNotIn(reponse.membre_ayant_deja_bouffe, member)) {
                            this.filterData.push({
                                id: member.id,
                                name: member.firstname + ' ' + member.lastname,
                                email: member.email,
                                numero_part: member.numero_part,
                                phone: member.phone,
                                sharenbr: this.util.occurenceOfId(reponse.members, 'id', member.id),
                                hasJackpot: false,
                                isAvaliste: false,
                                isAdmin: member.administrator && member.administrator === 1 ? true : false,
                                weights: member.weight
                            });
                            index++;
                        }
                    });
                    this.loading = false;
                    this.filterData = this.util.orderByKey(this.filterData, 'weights');
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
                this.jackpotList = reponse.membre_ayant_deja_bouffe;
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
            if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
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
                this.loading = false;
                this.error.manageError(error);
            }
        });
    }
    // can show the jackpost message
    canShowMessage() {
        return this.members && this.members.length > 2 && this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
    }
    // disable the reorder
    disableReorder() {
        return (this.members && this.members.length === 1 || this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 0);
    }
    // show the reorder icon
    isAdmin() {
        return this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
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
    // Reoder the item list
    reorderItems(ev) {
        // Permute the weigths
        if (this.members && this.members.length > 1) {
            const currentWeight = this.members[ev.detail.from].weights;
            this.members[ev.detail.from].weights = this.members[ev.detail.to].weights;
            this.members[ev.detail.to].weights = currentWeight;
            const itemMove = this.members.splice(ev.detail.from, 1);
            this.members.splice(ev.detail.to, 0, itemMove[0]);
            ev.detail.complete();
            // order the list
            this.members = this.util.orderByKey(this.members, 'weights');
        }
    }
    // Save the jacpot order
    saveJackpotOrder() {
        const listMembers = [];
        this.allData.forEach(data => {
            listMembers.push({ user_id: data.id, numero_part: data.numero_part, weight: data.weights });
        });
        this.jackpotList.forEach(data => {
            listMembers.push({ user_id: data.id, numero_part: data.numero_part, weight: data.weight });
        });
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            liste_membre: listMembers
        };
        this.loadingSave = true;
        this.tontine.orderMembersList(param).subscribe((reponse) => {
            this.loadingSave = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('ORDER_SUCCES_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.getListOfUsers(null);
            }
        }, error => {
            if (error && error.error) {
                if (error.error.remplir_tous_les_champs) {
                    this.translate.get('DEBT_PARAMETER_NOTFOUND').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                    this.loadingSave = false;
                }
                if (error.error.tontine_id_not_exist) {
                    this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                    this.loadingSave = false;
                }
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.saveJackpotOrder();
                        }
                        else {
                            this.loadingSave = false;
                        }
                    });
                }
            }
            else {
                this.loadingSave = false;
                this.error.manageError(error);
            }
        });
    }
};
JackpotOrderPage.ctorParameters = () => [
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_4__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_9__["TontineGlobalDataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"] }
];
JackpotOrderPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false },] }]
};
JackpotOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jackpot-order',
        template: _raw_loader_jackpot_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jackpot_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JackpotOrderPage);



/***/ }),

/***/ "9SsH":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/jackpot-order/jackpot-order.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + currentTontine.tontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'VIEW_JACKPOT_LIST' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"members.length > 0 && !loading\">\r\n      <ion-col size=\"11\">\r\n        <p class=\"small\" *ngIf=\"canShowMessage()\">{{ 'JACKPT_POSITION' | translate }}</p>\r\n        <ion-list>\r\n          <ion-reorder-group (ionItemReorder)=\"reorderItems($event)\" [disabled]=\"disableReorder()\">\r\n            <ion-reorder *ngFor=\"let member of members; index as id\">\r\n              <ion-item *ngIf=\"id < members.length\">\r\n                <ion-badge slot=\"start\">{{ 1 + id }}</ion-badge>          \r\n                <ion-label>\r\n                  <p>\r\n                    <ion-text color=\"dark\">\r\n                      <span class=\"ion-float-left\"> {{member.name ? member.name : ''}}</span> <br/>\r\n                      <span class=\"ion-float-left\"> <small>{{ 'SHARE_ID_TEXT' | translate }} : </small> {{member.numero_part}}</span>\r\n                    </ion-text>\r\n                  </p>\r\n                </ion-label>\r\n                <ion-buttons slot=\"end\" *ngIf=\"isAdmin()\">\r\n                  <ion-button>\r\n                    <ion-icon slot=\"icon-only\" name=\"move\" color=\"medium\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-buttons>\r\n              </ion-item>              \r\n            </ion-reorder>\r\n          </ion-reorder-group>          \r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n    <ion-row   *ngIf=\"jackpotList.length > 0 && !loading\">\r\n      <ion-col>\r\n        <p class=\"small\">{{ 'JACKOPT_MEMBERS' | translate }}</p>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let beneficiary of jackpotList; index as id1\">\r\n            <ion-badge slot=\"start\">{{  + id1 + 1 }}</ion-badge>          \r\n            <ion-label>\r\n              <p>\r\n                <ion-text color=\"dark\">\r\n                  <span class=\"ion-float-left\"> {{beneficiary.firstname ? beneficiary.firstname : ''}} {{beneficiary.lastname ? beneficiary.lastname : ''}}</span> <br/>\r\n                  <span class=\"ion-float-left\"> <small>{{ 'SHARE_ID_TEXT' | translate }} : </small> {{beneficiary.numero_part}}</span>\r\n                </ion-text>\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"members && members.length === 0 && jackpotList && jackpotList.length ===0 && !loading\">\r\n    <p  class=\"ion-text-center\">{{ 'TONTINE_USERS_TEXT12' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"members && members.length > 0 &&  isAdmin()\">\r\n  <ion-grid>\r\n    <ion-row>  \r\n      <ion-col  *ngIf=\"members && members.length > 1\">\r\n          <ion-button expand=\"full\"  [disabled]=\"loadingSave\" (click)=\"saveJackpotOrder()\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n            {{ 'SAVE_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>   \r\n      <ion-col *ngIf=\"canEditInfo()\">\r\n        <ion-button expand=\"full\"  [disabled]=\"loadingSave\"  (click)=\"setJackpot()\"\r\n              color=\"warning\" \r\n              class=\"ion-text-uppercase\"\r\n              shape=\"round\">\r\n          {{ 'JACKPOT_TEXT' | translate }}\r\n        </ion-button>\r\n    </ion-col>       \r\n    </ion-row>\r\n  </ion-grid>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loadingSave\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "CAuK":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/jackpot-order/jackpot-beneficiary/jackpot-beneficiary.page.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWNrcG90LWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VOrR":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/jackpot-order/jackpot-order.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWNrcG90LW9yZGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hE8F":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/jackpot-order/jackpot-beneficiary/jackpot-beneficiary.page.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'BENEFICIAL_STATUS' | translate }}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\"  (click)=\"closeModal()\" >\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"members.length > 0 && !loading\">\r\n      <ion-col>\r\n         <p class=\"small\"> {{ 'JACKOPT_MESSAGE' | translate }} <br/>\r\n            <b><ion-text color=\"danger\">{{'ROUND_START_ALERT' | translate}}</ion-text></b>\r\n         </p>\r\n         <ion-item>\r\n          <ion-label>{{ 'DATE_SEANCE_TEXT' | translate }}</ion-label>\r\n          <ion-datetime  [(ngModel)]=\"dateSeance\" displayFormat=\"DDDD D MMM, YYYY\" [max]=\"maxDate\" pickerFormat=\"DD MMMM YYYY\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n        <ion-list *ngIf=\"members && members.length > 0\">\r\n          <ion-item *ngFor=\"let member of members; let i=index\">\r\n            <ion-label>\r\n              <p>\r\n                <ion-text color=\"dark\">\r\n                  <span class=\"ion-float-left\"> {{member.name ? member.name : ''}}</span>\r\n                  <span class=\"ion-float-right\"> <small>{{ 'SHARE_ID_TEXT' | translate }} : </small> {{member.numero_part}}</span>\r\n                </ion-text>\r\n              </p>\r\n            </ion-label>\r\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"members[i].hasJackpot\" [checked]=\"members[i].hasJackpot\" [value]=\"members[i].hasJackpot\"></ion-checkbox>\r\n          </ion-item>\r\n      </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"members && members.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\">{{ 'TONTINE_USERS_TEXT12' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>   \r\n      <ion-col>\r\n          <ion-button expand=\"full\" [disabled]=\"members && members.length < 0 || !dateSeance || loadingSave\"  (click)=\"setJackpotBeneficiary(dateSeance)\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n            {{ 'SAVE_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>         \r\n    </ion-row>\r\n  </ion-grid>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loadingSave\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "oH+z":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/jackpot-order/jackpot-order.module.ts ***!
  \********************************************************************************************/
/*! exports provided: JackpotOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JackpotOrderPageModule", function() { return JackpotOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _jackpot_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jackpot-order.page */ "92Ap");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _jackpot_beneficiary_jackpot_beneficiary_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jackpot-beneficiary/jackpot-beneficiary.page */ "5W6q");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");










const routes = [
    {
        path: '',
        component: _jackpot_order_page__WEBPACK_IMPORTED_MODULE_6__["JackpotOrderPage"]
    }
];
let JackpotOrderPageModule = class JackpotOrderPageModule {
};
JackpotOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"]
        ],
        declarations: [
            _jackpot_order_page__WEBPACK_IMPORTED_MODULE_6__["JackpotOrderPage"],
            _jackpot_beneficiary_jackpot_beneficiary_page__WEBPACK_IMPORTED_MODULE_8__["JackpotBeneficiaryPage"]
        ],
        entryComponents: [
            _jackpot_beneficiary_jackpot_beneficiary_page__WEBPACK_IMPORTED_MODULE_8__["JackpotBeneficiaryPage"]
        ]
    })
], JackpotOrderPageModule);



/***/ })

}]);
//# sourceMappingURL=jackpot-order-jackpot-order-module.js.map