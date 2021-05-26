(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "LAPl":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/notifications/service/notifications.service.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var _shared_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/api.service */ "6rCG");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");





let NotificationsService = class NotificationsService {
    constructor(userService, api, event) {
        this.userService = userService;
        this.api = api;
        this.event = event;
        this.token = this.userService.getUserToken();
        this.event.subscribe('new-token', token => {
            this.token = token;
        });
    }
    // Get all user notifications with token
    getUserTokenNotifications() {
        this.token = this.userService.getUserToken();
        return this.api.get('notification/v1/getAllNotificationWithToken/' + this.token);
    }
    // Get all user notifications with token
    getUserIdNotifications(userId) {
        return this.api.get('notification/v1/getAllNotificationWithUserId/' + userId);
    }
    // Update the field read notification
    readNotifications(notification) {
        return this.api.post('notification/v1/updatedFieldLu', notification);
    }
    // Delete the field read notification
    deleteNotifications(notification) {
        return this.api.post('notification/v1/delete', notification);
    }
    // Get the tontine notifications
    getTontinesNotifications(tontineId) {
        return this.api.get('notification/v1/getAllNotificationTontine/' + tontineId);
    }
};
NotificationsService.ctorParameters = () => [
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _shared_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
];
NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ "NP3i":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "qfBD");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "k6uP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/notifications/notifications.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/my-tontines\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle ion-padding\">\r\n    <ion-title>{{ 'NOTIFICATION_TEXT' | translate }}</ion-title>\r\n    <ion-row *ngIf=\"tontines && tontines.length > 0 && filterData && filterData.length > 0\">\r\n      <ion-col>\r\n        <ion-item (click)=\"showTontines()\">\r\n          <ion-label>{{ 'M_TONTINE_TEXT' | translate }} : </ion-label>\r\n          <p><strong> {{ troncateName(tontineName,12)}}</strong> </p>          \r\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item>  \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"notifications\">\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"notification\" *ngFor=\"let notif of notifications\">\r\n      <ion-col>\r\n        <ion-card class=\"ion-no-margin\">\r\n          <ion-item lines=\"none\">\r\n            <ion-icon color=\"primary\" name=\"text\" slot=\"start\"></ion-icon>\r\n            <ion-label> {{notif.titre | translate }}</ion-label>\r\n            <span slot=\"end\"><small>{{notif.created_at ? notif.created_at.split(' ')[0] : '' }}</small></span>\r\n          </ion-item>        \r\n          <ion-card-content>\r\n            {{ notif.description | translate }}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <div  *ngIf=\"notifications && notifications.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'NOTIFICATIONS_MESSAGE' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "qfBD":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.page.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notifications.page.html */ "k6uP");
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.page.scss */ "zYhj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_notifications_service_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dashboard/notifications/service/notifications.service */ "LAPl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_select_data_select_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/select-data/select-data.component */ "NvQy");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");














let NotificationsPage = class NotificationsPage {
    constructor(notification, tontine, modatCtrl, events, storage, translate, formUtils, util, error) {
        this.notification = notification;
        this.tontine = tontine;
        this.modatCtrl = modatCtrl;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.formUtils = formUtils;
        this.util = util;
        this.error = error;
        this.notifications = [];
        this.nbItems = 10;
        this.allData = [];
        this.backService = null;
        this.currentDate = new Date();
        this.tontines = [];
        this.filterData = [];
        this.tontineIndex = -1;
        this.translate.get('ALL_TONTINE').subscribe(trans => {
            this.tontineName = trans;
        });
        this.events.subscribe('new-tontine', () => {
            this.refreSher(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getDataFormStorage(null);
        this.getListOftontines();
    }
    // Get the troncate name
    troncateName(value, nbDigit) {
        return this.formUtils.troncateName(value, nbDigit);
    }
    // Get the list of tontines
    getListOftontines() {
        this.tontine.getMyTontine().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                if (reponse.liste_tontine && reponse.liste_tontine.length > 0) {
                    let activeTontine = reponse.liste_tontine.filter(data => {
                        return data.tontine.active === 1;
                    });
                    activeTontine = this.util.oderByTontineDate(activeTontine);
                    let inactiveTontine = reponse.liste_tontine.filter(data => {
                        return data.tontine.active === 0;
                    });
                    inactiveTontine = this.util.oderByTontineDate(inactiveTontine);
                    this.tontines = [];
                    this.tontines = this.tontines.concat(activeTontine);
                    this.tontines = this.tontines.concat(inactiveTontine);
                }
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getListOftontines();
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // show the tontine modal
    showTontines() {
        this.modatCtrl
            .create({
            component: src_app_shared_select_data_select_data_component__WEBPACK_IMPORTED_MODULE_9__["SelectDataComponent"],
            componentProps: {
                tontine: this.tontines,
                type: 'notification'
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.role === 'select') {
                    this.tontineName = ans.data.name;
                    this.filterNotifications(ans.data.id);
                }
            });
        });
    }
    // filter by tontine
    filterNotifications(index) {
        if (this.tontines[index] && index !== -1) {
            const notifications = [];
            this.filterData.forEach(tontine => {
                if (tontine.tontine_id === this.tontines[index].tontine.tontine_id) {
                    notifications.push(tontine);
                }
            });
            this.allData = notifications;
        }
        else {
            this.allData = this.filterData;
        }
        if (this.allData.length > this.nbItems) {
            this.notifications = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.notifications.push(this.allData[this.notifications.length]);
            }
        }
        else {
            this.notifications = this.allData;
        }
    }
    // Get the list history tontines from server
    getUserNotifications(event) {
        this.notification.getUserTokenNotifications().subscribe((reponse) => {
            if (reponse && reponse.notifications) {
                reponse.notifications.forEach(item => {
                    if (item.description.toString().startsWith('Cher utilisateur, vous venez de payer la pénalité à la tontine')) {
                        this.translate.get(['TONTINE_NOTIF_DESC1'])
                            .subscribe(data => {
                            item.description = data.TONTINE_NOTIF_DESC1 + ' ' + item.name_tontine;
                        });
                    }
                    if (item.description.toString().startsWith('Cher utilisateur, vous venez de contribuer à la tontine')) {
                        this.translate.get(['TONTINE_NOTIF_DESC2'])
                            .subscribe(data => {
                            item.description = data.TONTINE_NOTIF_DESC2 + ' ' + item.name_tontine;
                        });
                    }
                    if (item.description.toString().startsWith('Vous avez reçu')) {
                        var removeString = item.description.toString().replace(/Vous avez reçu/g, '');
                        let removeStringFinal = removeString.toString().replace(/dans votre portemonnaie comme partage de la caisse pénalité./g, '');
                        this.translate.get(['TONTINE_NOTIF_DESC3', 'TONTINE_NOTIF_DESC4'])
                            .subscribe(data => {
                            item.description = data.TONTINE_NOTIF_DESC3 + removeStringFinal + data.TONTINE_NOTIF_DESC4;
                        });
                    }
                });
                this.allData = reponse.notifications;
                this.filterData = this.allData;
                // Save to local storage
                // this.setToStorage(this.allData);
                if (this.allData.length > this.nbItems) {
                    this.notifications = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.notifications.push(this.allData[this.notifications.length]);
                    }
                }
                else {
                    this.notifications = this.allData;
                }
            }
            this.loading = false;
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getUserNotifications(event);
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
    // set to local Stoirage
    setToStorage(data) {
        this.storage.set('app-notif', data);
    }
    getFromStorage() {
        return this.storage.get('app-notif');
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getUserNotifications(event);
    }
    // Get the data from session
    getDataFormStorage(event) {
        this.getFromStorage().then(data => {
            if (data && data.length > 0) {
                this.allData = data;
                this.filterData = this.allData;
                if (this.allData.length > this.nbItems) {
                    this.notifications = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.notifications.push(this.allData[this.notifications.length]);
                    }
                }
                else {
                    this.notifications = this.allData;
                }
                this.loading = false;
                this.getUserNotifications(event);
            }
            else {
                this.getUserNotifications(event);
            }
        });
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.getUserNotifications(null);
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
                if (this.notifications.length < this.allData.length) {
                    this.notifications.push(this.allData[this.notifications.length]);
                }
                else if (this.notifications.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
};
NotificationsPage.ctorParameters = () => [
    { type: src_app_dashboard_notifications_service_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: _my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageData"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_13__["FormUtilsService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }
];
NotificationsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"], { static: false },] }]
};
NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationsPage);



/***/ }),

/***/ "zYhj":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map