(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tontines-events-event-detail-events-tickets-events-tickets-module"],{

/***/ "AX/X":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/events-tickets/events-tickets.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: EventsTicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsTicketsPage", function() { return EventsTicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_events_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./events-tickets.page.html */ "m2fW");
/* harmony import */ var _events_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-tickets.page.scss */ "boUc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontines-events.service */ "eEpS");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_tontines_events_services_event_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/tontines-events/services/event-error.service */ "3kKL");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");














let EventsTicketsPage = class EventsTicketsPage {
    constructor(route, fb, tontineEventService, errorService, translate, events, ui, eventError, userService, event) {
        this.route = route;
        this.fb = fb;
        this.tontineEventService = tontineEventService;
        this.errorService = errorService;
        this.translate = translate;
        this.events = events;
        this.ui = ui;
        this.eventError = eventError;
        this.userService = userService;
        this.event = event;
        this.currentEvent = [];
        this.LastNotifsEvent = [];
        this.defaultImage = 'assets/images/default-event.jpg';
        this.p = 1;
        this.loading = false;
        this.errorMessage = false;
        this.user = this.userService.getUserData();
        this.currentEvent = this.event.getCurrentTontineEventData();
        this.allData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.initErrorMessage();
        this.urlLinkId = this.route.snapshot.params.eventID;
        this.getDetailTontinesEvent();
        this.initNotificationForm();
        this.getMessagingEvent(null);
        this.intervalId = setInterval(() => this.getMessagingEvent(null), 120000);
    }
    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    get ticketSubject() {
        return this.notificationForm.get('subject');
    }
    get tickectMessage() {
        return this.notificationForm.get('message');
    }
    get ticketFile() {
        return this.notificationForm.get('attachFiles');
    }
    // Init message Error
    initErrorMessage() {
        this.translate.get(['M_SUBJECT_REQUIRED', 'M_MESSAGE_REQUIRED']).subscribe(trans => {
            this.validationMessages = {
                subject: [
                    { type: 'required', message: trans.M_SUBJECT_REQUIRED }
                ],
                message: [
                    { type: 'required', message: trans.M_MESSAGE_REQUIRED }
                ]
            };
        });
    }
    // Init form
    initNotificationForm() {
        const userLogged = this.userService.getUserData();
        this.notificationForm = this.fb.group({
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            event_id: [this.urlLinkId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            event_status: [''],
            user_id: [userLogged.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            attachFiles: ['']
        });
    }
    getMessagingEvent(event) {
        this.tontineEventService.getMessagingEvent(this.urlLinkId).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.allData = reponse.liste;
                if (this.allData.length > this.nbItems) {
                    this.LastNotifsEvent = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.LastNotifsEvent.push(this.allData[this.LastNotifsEvent.length]);
                    }
                }
                else {
                    this.LastNotifsEvent = this.allData;
                }
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.errorService.renewSession().then((data) => {
                    if (data && data.result === "OK") {
                        this.getMessagingEvent(event);
                    }
                });
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
    // Get the tontine event detail
    getDetailTontinesEvent() {
        this.tontineEventService.getTontineDetail(this.urlLinkId).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.currentEvent = reponse.liste[0];
            }
        });
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getMessagingEvent(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.LastNotifsEvent.length < this.allData.length) {
                    this.LastNotifsEvent.push(this.allData[this.LastNotifsEvent.length]);
                }
                else if (this.LastNotifsEvent.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    sendNotification() {
        this.loading = true;
        this.translate.get('LOADING_TEXT').subscribe(value => {
            this.ui.presentLoading(value);
        });
        this.notificationForm.get('event_status').setValue(this.currentEvent.status);
        this.tontineEventService.sendNotification(this.notificationForm.value).subscribe((reponse) => {
            this.loading = false;
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.initNotificationForm();
                this.getMessagingEvent(null);
                this.events.publish('new-event');
                this.translate.get('TONTINE_EVENT_NOTIF_TEXT1').subscribe(value => {
                    this.ui.presentToast(value);
                });
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.errorService.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.sendNotification();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.ui.dismissLoading();
                    this.eventError.manageEventError(error);
                }
            }
            else {
                this.loading = false;
                this.ui.dismissLoading();
                this.errorService.manageError(error);
            }
        });
    }
};
EventsTicketsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_13__["EventService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__["UiService"] },
    { type: src_app_dashboard_tontines_events_services_event_error_service__WEBPACK_IMPORTED_MODULE_10__["EventErrorService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _services_tontines_events_service__WEBPACK_IMPORTED_MODULE_6__["TontinesEventsService"] }
];
EventsTicketsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonInfiniteScroll"], { static: false },] }]
};
EventsTicketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-events-tickets',
        template: _raw_loader_events_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventsTicketsPage);



/***/ }),

/***/ "VeOp":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/events-tickets/events-tickets.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EventsTicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsTicketsPageModule", function() { return EventsTicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _events_tickets_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-tickets.page */ "AX/X");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");







const routes = [
    {
        path: '',
        component: _events_tickets_page__WEBPACK_IMPORTED_MODULE_5__["EventsTicketsPage"]
    }
];
let EventsTicketsPageModule = class EventsTicketsPageModule {
};
EventsTicketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _events_tickets_page__WEBPACK_IMPORTED_MODULE_5__["EventsTicketsPage"]
        ]
    })
], EventsTicketsPageModule);



/***/ }),

/***/ "boUc":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/event-detail/events-tickets/events-tickets.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMtdGlja2V0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "m2fW":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tontines-events/event-detail/events-tickets/events-tickets.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button color=\"primary\"></ion-back-button>\n      </ion-buttons>\n    <ion-title class=\"ion-text-center title-md-right\">{{ 'MY_TICKETS_TEXT' | translate }}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-card class=\"ion-no-margin ticket-form\">\n          <ion-card-content>\n            <form [formGroup]=\"notificationForm\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">{{ 'SUBJECT_TEXT' | translate }}</ion-label>\n                      <ion-input type=\"text\" formControlName=\"subject\" required></ion-input>\n                    </ion-item>\n                    <div class=\"validation-errors\">\n                      <ng-container *ngFor=\"let validation of validationMessages.subject\">\n                        <div class=\"error-message\" *ngIf=\"ticketSubject.value && ticketSubject.hasError(validation.type) && (ticketSubject.dirty || ticketSubject.touched)\">\n                          <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                          {{ validation.message }}\n                        </div>\n                      </ng-container>\n                    </div> \n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">{{ 'M_MESSAGE' | translate }}</ion-label>\n                      <ion-textarea type=\"text\" formControlName=\"message\" required></ion-textarea>\n                    </ion-item>\n                    <div class=\"validation-errors\">\n                      <ng-container *ngFor=\"let validation of validationMessages.message\">\n                        <div class=\"error-message\" *ngIf=\"tickectMessage.value && tickectMessage.hasError(validation.type) && (tickectMessage.dirty || tickectMessage.touched)\">\n                          <ion-icon name=\"information-circle-outline\" ></ion-icon>\n                          {{ validation.message }}\n                        </div>\n                      </ng-container>\n                    </div> \n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-end\">\n                  <ion-col size=\"4\">\n                    <ion-button expand=\"full\"  [disabled]=\"notificationForm.invalid\"  (click)=\"sendNotification()\"\n                        color=\"primary\"\n                        shape=\"round\">\n                      {{ 'SEND_TEXT' | translate }}\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>     \n            </form>\n          </ion-card-content>\n        </ion-card>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ticket\"> \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\n    <ion-refresher-content\n      pullingIcon=\"reload-outline\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row class=\"notification\" *ngFor=\"let notif of LastNotifsEvent\">\n      <ion-col>\n        <ion-card class=\"ion-no-margin\">\n          <ion-item lines=\"none\">\n              <ion-icon color=\"primary\" name=\"text\" slot=\"start\"></ion-icon>\n            <ion-label>{{ (notif.tontine_event_type =='VISITOR'  ? 'YOU_TEXT' : 'TOUPESUTEAM_TEXT') | translate}} - {{ notif.subject }}</ion-label>\n          </ion-item>\n        \n          <ion-card-content>\n            {{ notif.content }}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div  *ngIf=\"LastNotifsEvent && LastNotifsEvent.length === 0 && !loading\">\n    <p  class=\"ion-text-center\"> {{ 'M_NO_NOTIFICATIONS' | translate }}</p>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tontines-events-event-detail-events-tickets-events-tickets-module.js.map