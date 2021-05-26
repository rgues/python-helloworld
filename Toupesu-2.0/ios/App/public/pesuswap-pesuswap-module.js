(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pesuswap-pesuswap-module"],{

/***/ "+7Ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-menu/swap-menu.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2FwLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "16BN":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/swap-menu-option/swap-menu-option.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"swap-menu-popover\">\r\n  <ion-item lines=\"none\">\r\n    <ion-label (click)=\"gotoSwapNotPaid()\">\r\n      {{'PENDING_PESU_SWAP_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label (click)=\"gotoSwapNotifications()\">\r\n      {{'NOTIFICATION_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item  *ngIf=\"requests.length > 0\" lines=\"none\" (click)=\"archiveSwap()\" >\r\n    <ion-label>\r\n      {{ 'MENU_ARCHIVE_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "1Py+":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/pesuswap/pesuswap.module.ts ***!
  \*******************************************************/
/*! exports provided: PesuswapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesuswapPageModule", function() { return PesuswapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pesuswap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pesuswap.page */ "djoX");
/* harmony import */ var _directives_scroll_vanish_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/scroll-vanish.directive */ "9NQx");
/* harmony import */ var _swap_menu_swap_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./swap-menu/swap-menu.component */ "LxLf");
/* harmony import */ var _send_swap_request_send_swap_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-swap-request/send-swap-request.component */ "5bpT");
/* harmony import */ var _swap_swap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./swap/swap.component */ "UNvO");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delete/delete.component */ "9/ub");
/* harmony import */ var _swap_edit_swap_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./swap-edit/swap-edit.component */ "bhnt");
/* harmony import */ var _swap_not_paid_swap_not_paid_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./swap-not-paid/swap-not-paid.page */ "WQWe");
/* harmony import */ var _paid_modal_paid_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paid-modal/paid-modal.component */ "Nh4Y");
/* harmony import */ var _swap_menu_option_swap_menu_option_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./swap-menu-option/swap-menu-option.component */ "hRvo");
/* harmony import */ var _swap_notifications_swap_notifications_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./swap-notifications/swap-notifications.page */ "WOmo");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./archive/archive.component */ "R24Y");
/* harmony import */ var _archive_swap_archive_swap_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./archive-swap/archive-swap.component */ "Xh6L");




















const routes = [
    {
        path: '',
        component: _pesuswap_page__WEBPACK_IMPORTED_MODULE_6__["PesuswapPage"]
    },
    {
        path: 'swap-not-paid',
        component: _swap_not_paid_swap_not_paid_page__WEBPACK_IMPORTED_MODULE_14__["SwapNotPaidPage"]
    },
    {
        path: 'notifs',
        component: _swap_notifications_swap_notifications_page__WEBPACK_IMPORTED_MODULE_17__["SwapNotificationsPage"]
    }
];
let PesuswapPageModule = class PesuswapPageModule {
};
PesuswapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _pesuswap_page__WEBPACK_IMPORTED_MODULE_6__["PesuswapPage"],
            _directives_scroll_vanish_directive__WEBPACK_IMPORTED_MODULE_7__["ScrollVanishDirective"],
            _swap_menu_swap_menu_component__WEBPACK_IMPORTED_MODULE_8__["SwapMenuComponent"],
            _swap_menu_option_swap_menu_option_component__WEBPACK_IMPORTED_MODULE_16__["SwapMenuOptionComponent"],
            _archive_swap_archive_swap_component__WEBPACK_IMPORTED_MODULE_19__["ArchiveSwapComponent"],
            _send_swap_request_send_swap_request_component__WEBPACK_IMPORTED_MODULE_9__["SendSwapRequestComponent"],
            _swap_notifications_swap_notifications_page__WEBPACK_IMPORTED_MODULE_17__["SwapNotificationsPage"],
            _swap_swap_component__WEBPACK_IMPORTED_MODULE_10__["SwapComponent"],
            _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteComponent"],
            _archive_archive_component__WEBPACK_IMPORTED_MODULE_18__["ArchiveComponent"],
            _swap_not_paid_swap_not_paid_page__WEBPACK_IMPORTED_MODULE_14__["SwapNotPaidPage"],
            _swap_edit_swap_edit_component__WEBPACK_IMPORTED_MODULE_13__["SwapEditComponent"],
            _paid_modal_paid_modal_component__WEBPACK_IMPORTED_MODULE_15__["PaidModalComponent"]
        ],
        entryComponents: [
            _swap_menu_swap_menu_component__WEBPACK_IMPORTED_MODULE_8__["SwapMenuComponent"],
            _swap_menu_option_swap_menu_option_component__WEBPACK_IMPORTED_MODULE_16__["SwapMenuOptionComponent"],
            _send_swap_request_send_swap_request_component__WEBPACK_IMPORTED_MODULE_9__["SendSwapRequestComponent"],
            _archive_swap_archive_swap_component__WEBPACK_IMPORTED_MODULE_19__["ArchiveSwapComponent"],
            _swap_swap_component__WEBPACK_IMPORTED_MODULE_10__["SwapComponent"],
            _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteComponent"],
            _archive_archive_component__WEBPACK_IMPORTED_MODULE_18__["ArchiveComponent"],
            _swap_edit_swap_edit_component__WEBPACK_IMPORTED_MODULE_13__["SwapEditComponent"],
            _paid_modal_paid_modal_component__WEBPACK_IMPORTED_MODULE_15__["PaidModalComponent"]
        ]
    })
], PesuswapPageModule);



/***/ }),

/***/ "35bu":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/services/swap-global-data.service.ts ***!
  \*************************************************************************/
/*! exports provided: SwapGlobalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapGlobalDataService", function() { return SwapGlobalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/currency.service */ "GmDD");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");





let SwapGlobalDataService = class SwapGlobalDataService {
    constructor(userService, util, currency) {
        this.userService = userService;
        this.util = util;
        this.currency = currency;
        this.currentUserData = this.userService.getUserData();
    }
    hasCurrency(wallet, currency) {
        const currencyData = wallet.filter(data => { return data.device_name === currency; });
        return currencyData && currencyData.length > 0 ? true : false;
    }
    // check if the user can make instant request
    checkRequestCanInstantRequest(currency, wallet, amount, fees) {
        let canMakeRequest = true;
        let requestAmount = parseFloat(amount) + parseFloat(fees);
        if (wallet && wallet.length > 0 && this.hasCurrency(wallet, currency)) {
            wallet.forEach(data => {
                if ((parseFloat(data.solde_device) < requestAmount) && (data.device_name === currency)) {
                    canMakeRequest = false;
                }
            });
        }
        else {
            canMakeRequest = false;
        }
        return canMakeRequest;
    }
    // get the currencies rates 
    getCurrencyRateExchange(swapRates, currencyFrom, currencyTo) {
        let rate = null;
        return new Promise((resolve, reject) => {
            if (swapRates && swapRates.length > 0) {
                swapRates.forEach((currencyData) => {
                    if (currencyData.currency_from === currencyFrom && currencyData.currency_to === currencyTo) {
                        rate = currencyData;
                    }
                });
            }
            resolve(rate);
        });
    }
    // Get exchange fees
    getExchangeFees(swapRates, currencyFrom, currencyTo, amount) {
        return new Promise((resolve, reject) => {
            let exchangeFees = 0;
            this.getCurrencyRateExchange(swapRates, currencyFrom, currencyTo).then((rate) => {
                if (rate) {
                    if (rate.type === "pourcentage") {
                        exchangeFees = parseFloat(Number(((parseFloat(rate.rate_value) / 100) * amount)).toFixed(2));
                    }
                    else {
                        exchangeFees = parseFloat(rate.rate_value);
                    }
                }
                resolve(exchangeFees);
            });
        });
    }
    // Get conversion value 
    getConversionValue(currencyFrom, currencyTo, amount) {
        return new Promise((resolve, reject) => {
            if (currencyFrom !== currencyTo && amount > 0) {
                this.currency.conversionRateValue(currencyFrom, currencyTo)
                    .then((amountConvert) => {
                    resolve(Number(amountConvert * amount).toFixed(2));
                });
            }
            else {
                amount ? resolve(amount) : resolve(0);
            }
        });
    }
    // Get the percentage of succes
    getSuccessPercentage(percent) {
        const percentValue = Math.ceil(percent / 20);
        const iteration = [];
        for (let i = 1; i <= percentValue; i++) {
            iteration.push(i);
        }
        return iteration;
    }
    // get percentage of loss
    getLossPercentage(percent) {
        const percentValue = 5 - Math.ceil(percent / 20);
        const iteration = [];
        for (let i = 1; i <= percentValue; i++) {
            iteration.push(i);
        }
        return iteration;
    }
    // can delete swap 
    canDeleteSwap(request) {
        let ican = true;
        if ((request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'pending'))) {
            ican = false;
        }
        return ican;
    }
    // can delete swap 
    canEditSwap(request) {
        let ican = true;
        if (request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'pending')) {
            ican = false;
        }
        return ican;
    }
    //
    canArchiveSwap(request) {
        let ican = false;
        if ((request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'expired'))) {
            ican = true;
        }
        return ican;
    }
    // can show all requests
    canShowAllRequests(request) {
        return (request && request.infos_status_request && request.infos_status_request.description === 'initiated' && parseInt(request.user_id_from) !== parseInt(this.currentUserData.id));
    }
    // calculate the mathcing exchange fees
    matchingExchageFees(swapRates, currencyTo, currencyForm, requestData) {
        return new Promise((resole, reject) => {
            this.getCurrencyRateExchange(swapRates, currencyTo, currencyForm).then((rate) => {
                let exchangeFees = 0;
                let i = 0;
                const requestCopy = requestData;
                requestData.forEach(request => {
                    if (rate) {
                        if (rate.type === "pourcentage") {
                            exchangeFees = parseFloat(Number(((parseFloat(rate.rate_value) / 100) * parseFloat(request.amount))).toFixed(2));
                            requestCopy[i].fees = exchangeFees;
                        }
                        else {
                            exchangeFees = parseFloat(rate.rate_value);
                            requestCopy[i].fees = exchangeFees;
                        }
                    }
                    i++;
                });
                resole(requestCopy);
            });
        });
    }
    // checf if a request has expired
    hasExpired(request) {
        let expired = false;
        if (request && request.temps_restant) {
            if (request.temps_restant[0].heures === 0 && request.temps_restant[0].minutes === 0 && request.temps_restant[0].secondes === 0) {
                expired = true;
            }
        }
        return expired;
    }
    // Check if a currency is in the user currencies list
    IsCurrencyIn(currencies, currency) {
        let isIn = false;
        const matchCurrencies = currencies.filter(curr => { return curr.device_name === currency; });
        if (matchCurrencies && matchCurrencies.length > 0) {
            isIn = true;
        }
        return isIn;
    }
    // Get request that match the user Currencies
    filterByUserCurrency(requests, currencies) {
        const requestMatching = [];
        if (currencies && currencies.length > 0) {
            if (requests && requests.length > 0) {
                requests.forEach(data => {
                    if (this.IsCurrencyIn(currencies, data.infos_currency_to.name)) {
                        requestMatching.push(data);
                    }
                });
            }
        }
        return requestMatching;
    }
    filterALLRequestData(requests) {
        let requestsList = this.util.orderByKeyUp(requests, 'updated_at');
        requestsList = requestsList && requestsList.length > 0 ? this.util.orderByKeyUpTime(requestsList, 'temps_restant') : [];
        let formatData = [];
        requestsList.forEach(request => {
            if (this.canShowAllRequests(request)) {
                formatData.push({ select: false, canSelect: true, data: request });
            }
        });
        return formatData;
    }
};
SwapGlobalDataService.ctorParameters = () => [
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"] }
];
SwapGlobalDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SwapGlobalDataService);



/***/ }),

/***/ "3JmU":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-not-paid/swap-not-paid.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2FwLW5vdC1wYWlkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "4Hpq":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-edit/swap-edit.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swapAmount ion-input {\n  --padding-top: 20px;\n  --padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3dhcC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQUhSIiwiZmlsZSI6InN3YXAtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5zd2FwQW1vdW50IHtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "5bpT":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/send-swap-request/send-swap-request.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SendSwapRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendSwapRequestComponent", function() { return SendSwapRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_send_swap_request_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./send-swap-request.component.html */ "CirE");
/* harmony import */ var _send_swap_request_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-swap-request.component.scss */ "ST7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/currency.service */ "GmDD");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/swap-global-data.service */ "35bu");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");














let SendSwapRequestComponent = class SendSwapRequestComponent {
    constructor(modatCtrl, translate, zone, constant, swapData, currency, ui, navParams, swapService, error, swapError, fb) {
        this.modatCtrl = modatCtrl;
        this.translate = translate;
        this.zone = zone;
        this.constant = constant;
        this.swapData = swapData;
        this.currency = currency;
        this.ui = ui;
        this.navParams = navParams;
        this.swapService = swapService;
        this.error = error;
        this.swapError = swapError;
        this.fb = fb;
        this.swapTypes = [];
        this.canMakeRequest = true;
        this.requestData = this.navParams.get('data');
        this.wallet = this.navParams.get('wallet');
        this.maxAmount = this.navParams.get('maxAmount');
        this.amountSwap = this.navParams.get('amountSwap');
        this.initSwapRequestForm(this.requestData);
    }
    ngOnInit() {
        this.getSwapTypes();
    }
    get currencyHave() {
        return this.swapRequestForm.get('currency_from');
    }
    get currencyWant() {
        return this.swapRequestForm.get('currency_to');
    }
    get amountHave() {
        return this.swapRequestForm.get('amount_from');
    }
    get amountWant() {
        return this.swapRequestForm.get('amount_to');
    }
    get exchangeRate() {
        return this.swapRequestForm.get('exchange_rate');
    }
    get fees() {
        return this.swapRequestForm.get('fees');
    }
    get type_swapId() {
        return this.swapRequestForm.get('type_swap_id');
    }
    // Init the swap request form
    initSwapRequestForm(data) {
        this.swapRequestForm = this.fb.group({
            currency_from: [data.currency_from, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            currency_to: [data.currency_to, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amount_from: [data.amount_from, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amount_to: [data.amount_to, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            exchange_from: [{ value: `${1} ${data.currency_from} : `, disabled: true }],
            exchange_rate: [data.exchange_rate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fees: [data.fees, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type_swap_id: [data.type_swap_id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.checkRequestCanInstantRequest(this.swapRequestForm.value.currency_from);
    }
    // check if the user can make instant request
    checkRequestCanInstantRequest(currency) {
        this.canMakeRequest = this.swapData.checkRequestCanInstantRequest(currency, this.wallet, this.swapRequestForm.value.amount_from, this.swapRequestForm.value.fees);
    }
    // Update the exchange rate
    updateExchangeRate(rate) {
        if (rate > 0) {
            let amountTo = 0;
            amountTo = parseFloat(rate) * parseFloat(this.swapRequestForm.value.amount_from);
            this.swapRequestForm.get('amount_to').setValue(Number(amountTo).toFixed(2));
        }
        else {
            this.swapRequestForm.get('amount_to').setValue(Number(0).toFixed(2));
        }
    }
    // close modal
    closeAddMember(ans) {
        this.modatCtrl.dismiss(ans, 'cancel');
    }
    // Get the swap type
    getType(type) {
        return this.constant.getTypeSwap(type);
    }
    // Get the list of type of swap
    getSwapTypes() {
        this.swapService.getAllSwapType()
            .subscribe((reponse) => {
            if (reponse && reponse.type_swap) {
                this.zone.run(() => {
                    this.swapTypes = reponse.type_swap;
                });
                setTimeout(() => {
                    this.swapType = this.canMakeRequest ? 1 : 2;
                }, 500);
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getSwapTypes();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // response with max amount
    reponseWithMaxAmount() {
        this.swapService.getSwapRate().subscribe((data) => {
            if (data && data.swap_rate && data.swap_rate.length > 0 && this.maxAmount > 0) {
                let exchangeFees = 0;
                data.swap_rate.forEach((currencyData) => {
                    if (currencyData.currency_from === this.swapRequestForm.value.currency_from && currencyData.currency_to === this.swapRequestForm.value.currency_to) {
                        const rate = currencyData;
                        if (rate) {
                            if (rate.type === "pourcentage") {
                                exchangeFees = (parseFloat(rate.rate_value) / 100) * parseFloat(this.maxAmount);
                            }
                            else {
                                exchangeFees = parseFloat(rate.rate_value);
                            }
                        }
                    }
                });
                this.translate.get(['SOLDE_WALLET_IS_NOT_SUFFICIENT', 'MAX_SWAP_AMOUNT_MSG']).subscribe(trans => {
                    this.ui.presentToast(`${trans.SOLDE_WALLET_IS_NOT_SUFFICIENT}. ${trans.MAX_SWAP_AMOUNT_MSG}  ${Number(parseFloat(this.maxAmount) - exchangeFees).toFixed(2)}`);
                });
                const param = this.swapRequestForm.value;
                param.fees = Number(exchangeFees).toFixed(2);
                param.amount_from = Number(parseFloat(this.maxAmount) - exchangeFees).toFixed(2);
                this.currency.conversionRateValue(param.currency_from, param.currency_to).then((rate) => {
                    // set the conversion rate value
                    param.exchange_rate = rate;
                    param.amount_to = Number(parseFloat(param.amount_from) * parseFloat(rate)).toFixed(2);
                    param.message = 'retry-request';
                    this.modatCtrl.dismiss(param, 'cancel');
                });
            }
            else {
                this.translate.get(['SOLDE_WALLET_IS_NOT_SUFFICIENT', 'MAX_SWAP_AMOUNT_MSG']).subscribe(trans => {
                    this.ui.presentToast(`${trans.SOLDE_WALLET_IS_NOT_SUFFICIENT}. ${trans.MAX_SWAP_AMOUNT_MSG}  ${this.maxAmount}`);
                    this.modatCtrl.dismiss('make-request', 'cancel');
                });
            }
        });
    }
    // Make a swap request
    makeSwapRequest() {
        const swapData = this.swapRequestForm.value;
        swapData.type_swap_id = this.swapType;
        this.translate.get('MAKE_SWAP_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.swapService.makeSwapRequest(swapData)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === "success") {
                this.translate.get('MAKE_SWAP_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.closeAddMember('make-request');
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.solde_wallet_is_not_sufficient) {
                    this.ui.dismissLoading();
                    this.reponseWithMaxAmount();
                }
                else if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.makeSwapRequest();
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
};
SendSwapRequestComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_7__["ConstantService"] },
    { type: _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_11__["SwapGlobalDataService"] },
    { type: src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_12__["SwapService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_10__["SwapErrorService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SendSwapRequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send-swap-request',
        template: _raw_loader_send_swap_request_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_send_swap_request_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SendSwapRequestComponent);



/***/ }),

/***/ "79dK":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap/swap.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2FwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "7hDi":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-notifications/swap-notifications.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2FwLW5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "9/ub":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/delete/delete.component.ts ***!
  \***************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delete.component.html */ "L1dI");
/* harmony import */ var _delete_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.component.scss */ "aG/d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");










let DeleteComponent = class DeleteComponent {
    constructor(popoverController, swapService, translate, ui, swapError, errorService, navParams) {
        this.popoverController = popoverController;
        this.swapService = swapService;
        this.translate = translate;
        this.ui = ui;
        this.swapError = swapError;
        this.errorService = errorService;
        this.navParams = navParams;
        this.requestData = this.navParams.get('data');
    }
    ngOnInit() { }
    close(ans) {
        this.popoverController.dismiss(ans, null);
    }
    // Delete the swap request
    deleteSwap() {
        const swapData = { swap_request_id: this.requestData.swap_request_id };
        this.translate.get('M_DELETE_LOADING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.swapService.deleteSwapRequest(swapData)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === "success") {
                this.close('deleted');
                this.translate.get('SWAP_REQUEST_DELETE_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.errorService.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.deleteSwap();
                        }
                        else {
                            this.close();
                        }
                    });
                }
                else {
                    this.close();
                    this.ui.dismissLoading();
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.close();
                this.ui.dismissLoading();
                this.errorService.manageError(error);
            }
        });
    }
};
DeleteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_8__["SwapService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__["SwapErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
DeleteComponent.propDecorators = {
    requestData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-delete',
        template: _raw_loader_delete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delete_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeleteComponent);



/***/ }),

/***/ "9NQx":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/directives/scroll-vanish.directive.ts ***!
  \**************************************************************************/
/*! exports provided: ScrollVanishDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollVanishDirective", function() { return ScrollVanishDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ScrollVanishDirective = class ScrollVanishDirective {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.hidden = false;
        this.triggerDistance = 20;
    }
    ngOnInit() {
        this.initStyles();
        this.scrollArea.ionScroll.subscribe(scrollEvent => {
            let delta = scrollEvent.detail.deltaY;
            /*   if (scrollEvent.detail.currentY === 0 && this.hidden) {
                this.show();
              } else */
            if (!this.hidden && delta > this.triggerDistance) {
                this.hide();
            }
            else if (this.hidden && delta < -this.triggerDistance) {
                this.show();
            }
        });
    }
    initStyles() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, "transition", "0.2s linear");
            this.renderer.setStyle(this.element.nativeElement, "height", "60px");
        });
    }
    hide() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, "min-height", "0px");
            this.renderer.setStyle(this.element.nativeElement, "height", "0px");
            this.renderer.setStyle(this.element.nativeElement, "opacity", "0");
            this.renderer.setStyle(this.element.nativeElement, "padding", "0");
        });
        this.hidden = true;
    }
    show() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, "height", "60px");
            this.renderer.removeStyle(this.element.nativeElement, "opacity");
            this.renderer.removeStyle(this.element.nativeElement, "min-height");
            this.renderer.removeStyle(this.element.nativeElement, "padding");
        });
        this.hidden = false;
    }
};
ScrollVanishDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
ScrollVanishDirective.propDecorators = {
    scrollArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["myScrollVanish",] }]
};
ScrollVanishDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[myScrollVanish]"
    })
], ScrollVanishDirective);



/***/ }),

/***/ "AY40":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/swap-notifications/swap-notifications.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/pesuswap\"></ion-back-button>\r\n    </ion-buttons> \r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle ion-padding\">\r\n    <ion-title>{{ 'NOTIFICATION_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"notifications\">\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row class=\"notification\" *ngFor=\"let notif of notifications\">\r\n      <ion-col>\r\n        <ion-card class=\"ion-no-margin\">\r\n          <ion-item lines=\"none\">\r\n            <ion-icon color=\"primary\" name=\"text\" slot=\"start\"></ion-icon>\r\n            <ion-label> {{notif.titre  }}</ion-label>\r\n            <span slot=\"end\"><small>{{notif.created_at ? notif.created_at.split(' ')[0] : '' }}</small></span>\r\n          </ion-item>        \r\n          <ion-card-content>\r\n            {{ notif.description  }}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div  *ngIf=\"notifications && notifications.length === 0 && !loading\">\r\n    <p  class=\"ion-text-center\"> {{ 'NOTIFICATIONS_MESSAGE' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "BllX":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/archive/archive.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaXZlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "CirE":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/send-swap-request/send-swap-request.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center ion-text-wrap\">{{ 'SEND_SWAP_REQUEST' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding send-swap-request\">\r\n  <p>\r\n    {{ 'REQUEST_TEXT_1' | translate}} {{ swapRequestForm.value.currency_from }}\r\n    {{ 'TO_TEXT' | translate }} {{ swapRequestForm.value.currency_to }} {{ 'REQUEST_TEXT_2' | translate }} :\r\n  </p>\r\n  <p>\r\n    <b>\r\n      <ion-text color=\"warning\">{{ swapRequestForm.value.amount_from }}\r\n        {{ swapRequestForm.value.currency_from }}\r\n      </ion-text>\r\n      <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      <ion-text color=\"primary\">{{ swapRequestForm.value.amount_to }}\r\n        {{swapRequestForm.value.currency_to }}\r\n      </ion-text>\r\n    </b>\r\n  </p>\r\n\r\n  <form [formGroup]=\"swapRequestForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p> {{'EXCHANGE_RATE' | translate }} :</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"swapform\">\r\n        <ion-col size=\"4\" class=\"ion-align-items-stretch\">\r\n          <ion-item lines=\"none\" class=\"swapamount\">\r\n            <ion-input type=\"text\" formControlName=\"exchange_from\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"ion-align-items-stretch\">\r\n          <ion-item class=\"swapamount\">\r\n            <ion-input (ionChange)=\"updateExchangeRate(swapRequestForm.value.exchange_rate)\" type=\"number\" formControlName=\"exchange_rate\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-align-items-stretch\">\r\n          <ion-item lines=\"none\" class=\"swapamount\">\r\n            {{swapRequestForm.value.currency_to}}\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n  <p>\r\n    {{'MATCHING_FEES_TEXT' | translate }}: {{swapRequestForm.value.fees}} {{swapRequestForm.value.currency_from}} <br />\r\n   <!--  {{ 'SWAP_TOTAL_AMOUNT' | translate }} : {{ amountSwap }} {{swapRequestForm.value.currency_from}} -->\r\n  </p>\r\n  <ion-item>\r\n    <ion-label>{{ 'SWAP_TYPE_TEXT' | translate }}</ion-label>\r\n    <ion-select [(ngModel)]=\"swapType\" ngModelOptions=\"{standalone: true}\">\r\n      <ion-select-option [value]=\"type.id\" *ngFor=\"let type of swapTypes\">{{ getType(type.description) }}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <p class=\"ion-padding-vertical\" *ngIf=\"swapType === 1 && canMakeRequest\" [innerHTML]=\"'INSTANT_SWAP_DESCRIPTION' | translate\">\r\n  </p>\r\n\r\n  <p class=\"ion-padding-vertical\" *ngIf=\"swapType === 1 && !canMakeRequest\">\r\n    {{ 'CANT_MAKE_INSTANT_SWAP_DESCRIPTION' | translate : {balance : (amountSwap + ' ' + swapRequestForm.value.currency_from) } }}\r\n  </p>\r\n\r\n  <p class=\"ion-padding-vertical\" *ngIf=\"swapType === 2\" [innerHTML]=\"'DELAYED_SWAP_DESCRIPTION' | translate\">\r\n  </p>\r\n  <p class=\"ion-padding-vertical\"><strong>{{ 'EXPIRED_REQUEST_TEXT' | translate }}</strong></p>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"full\" color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\" (click)=\"makeSwapRequest()\"\r\n          [disabled]=\"!swapType || swapRequestForm.invalid || (swapType === 1 && !canMakeRequest)\">\r\n          {{ 'SEND_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"full\" fill=\"outline\" color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\"\r\n          (click)=\"closeAddMember()\">\r\n          {{ 'CANCEL_TEXT' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "HSv+":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/archive-swap/archive-swap.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaXZlLXN3YXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "L1dI":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/delete/delete.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>     \r\n  <ion-row>\r\n    <ion-col>\r\n      <h4>{{ 'DELETE_SWAP_TEXT' | translate }}</h4> \r\n      <p> {{ 'DELETE_SWAP_MESSAGE' | translate }} <br/>\r\n        <b>\r\n        <ion-text color=\"warning\">{{requestData.amount_from}} {{requestData.infos_currency_from.name}}</ion-text> \r\n        <ion-icon name=\"arrow-forward\"></ion-icon> \r\n        <ion-text color=\"primary\">{{requestData.amount_to}} {{requestData.infos_currency_to.name}}</ion-text>\r\n      </b>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" fill=\"outline\" (click)=\"close()\">{{ 'NO_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" (click)=\"deleteSwap()\">{{'YES_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "LxLf":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-menu/swap-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: SwapMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapMenuComponent", function() { return SwapMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_swap_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./swap-menu.component.html */ "sKCK");
/* harmony import */ var _swap_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap-menu.component.scss */ "+7Ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../archive/archive.component */ "R24Y");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../delete/delete.component */ "9/ub");
/* harmony import */ var _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/swap-global-data.service */ "35bu");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var _swap_edit_swap_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../swap-edit/swap-edit.component */ "bhnt");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");













let SwapMenuComponent = class SwapMenuComponent {
    constructor(popoverController, swapService, swapError, swapData, event, modatCtrl, navParams, errorService) {
        this.popoverController = popoverController;
        this.swapService = swapService;
        this.swapError = swapError;
        this.swapData = swapData;
        this.event = event;
        this.modatCtrl = modatCtrl;
        this.navParams = navParams;
        this.errorService = errorService;
        this.curentParams = this.navParams.get('data');
        this.wallet = this.navParams.get('wallet');
    }
    ngOnInit() { }
    // Close popover
    close() {
        this.popoverController.dismiss();
    }
    // Delete the swap request
    onDeletePopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.close();
            const popover = yield this.popoverController.create({
                component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__["DeleteComponent"],
                cssClass: 'delete-popover',
                componentProps: {
                    data: this.curentParams
                }
            });
            popover.onDidDismiss().then((ans) => {
                if (ans && ans.data === "deleted") {
                    this.event.publish('update-request');
                }
            });
            return yield popover.present();
        });
    }
    // can delete swap 
    canDeleteSwap(request) {
        return this.swapData.canDeleteSwap(request);
    }
    // can delete swap 
    canEditSwap(request) {
        return this.swapData.canEditSwap(request);
    }
    // can archive the swap
    canArchiveSwap(request) {
        return this.swapData.canArchiveSwap(request);
    }
    // disable swap edition
    disableSwapEdition() {
        this.swapService.disableSwapEdition(this.curentParams.swap_request_id, 1).subscribe(reponse => {
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.errorService.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.disableSwapEdition();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
    // Edit swap modal
    onEditSwapModal() {
        this.disableSwapEdition();
        this.close();
        this.modatCtrl
            .create({
            component: _swap_edit_swap_edit_component__WEBPACK_IMPORTED_MODULE_11__["SwapEditComponent"],
            componentProps: {
                data: this.curentParams,
                wallet: this.wallet
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                // update change
                if (ans && ans.data === "updated") {
                    this.event.publish('update-request');
                }
            });
        });
    }
    // Archive the swap
    onArchivePopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.close();
            const popover = yield this.popoverController.create({
                component: _archive_archive_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveComponent"],
                cssClass: 'delete-popover',
                componentProps: {
                    data: this.curentParams
                }
            });
            popover.onDidDismiss().then((ans) => {
                if (ans && ans.data === "archived") {
                    this.event.publish('update-request');
                }
            });
            return yield popover.present();
        });
    }
};
SwapMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_10__["SwapService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_6__["SwapErrorService"] },
    { type: _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_9__["SwapGlobalDataService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] }
];
SwapMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-swap-menu',
        template: _raw_loader_swap_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_swap_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SwapMenuComponent);



/***/ }),

/***/ "Nh4Y":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/paid-modal/paid-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaidModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaidModalComponent", function() { return PaidModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paid_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paid-modal.component.html */ "uXuT");
/* harmony import */ var _paid_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paid-modal.component.scss */ "llAx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");






let PaidModalComponent = class PaidModalComponent {
    constructor(modatCtrl, event, params) {
        this.modatCtrl = modatCtrl;
        this.event = event;
        this.params = params;
        this.swapData = this.params.get('data');
        this.event.subscribe('modal-close', () => {
            this.closeContribute();
        });
    }
    ngOnInit() { }
    closeContribute() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
};
PaidModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
PaidModalComponent.propDecorators = {
    exchange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PaidModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paid-modal',
        template: _raw_loader_paid_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paid_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaidModalComponent);



/***/ }),

/***/ "P3/e":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-menu-option/swap-menu-option.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2FwLW1lbnUtb3B0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "R24Y":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/archive/archive.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_archive_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./archive.component.html */ "f3kw");
/* harmony import */ var _archive_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archive.component.scss */ "BllX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");










let ArchiveComponent = class ArchiveComponent {
    constructor(popoverController, swapService, translate, ui, swapError, errorService, navParams) {
        this.popoverController = popoverController;
        this.swapService = swapService;
        this.translate = translate;
        this.ui = ui;
        this.swapError = swapError;
        this.errorService = errorService;
        this.navParams = navParams;
        this.requestData = this.navParams.get('data');
    }
    ngOnInit() { }
    // close popover
    close(ans) {
        this.popoverController.dismiss(ans, null);
    }
    // Archive the swap request
    archiveSwap() {
        const swapData = { list_swap_request_id: [{ swap_request_id: this.requestData.swap_request_id }] };
        this.translate.get('ARCHIVE_PROCESSING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.swapService.archiveSwapData(swapData)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === "success") {
                this.close('archived');
                this.translate.get('SWAP_REQUEST_ARCHIVE_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.errorService.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.archiveSwap();
                        }
                        else {
                            this.close();
                        }
                    });
                }
                else {
                    this.close();
                    this.ui.dismissLoading();
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.close();
                this.ui.dismissLoading();
                this.errorService.manageError(error);
            }
        });
    }
};
ArchiveComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_8__["SwapService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__["SwapErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ArchiveComponent.propDecorators = {
    requestData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ArchiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-archive',
        template: _raw_loader_archive_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_archive_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArchiveComponent);



/***/ }),

/***/ "ST7M":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/send-swap-request/send-swap-request.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXN3YXAtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "TfXn":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/swap/swap.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center ion-text-wrap\">{{ 'SWAP_VALIDATION' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding swap-validation\">\r\n  <p>\r\n    {{ 'SWAP_TEXT_CONFIRMATION_1' | translate }}  {{requestData.request[0].from}} {{ 'SWAP_TEXT_CONFIRMATION_2' | translate }}  {{requestData.request[0].to}} {{ 'SWAP_TEXT_CONFIRMATION_3' | translate }}\r\n  </p>\r\n  <p>\r\n    <b>\r\n    <ion-text color=\"warning\">{{requestData.amountFrom}}</ion-text> \r\n    <ion-icon name=\"arrow-forward\"></ion-icon> \r\n    <ion-text color=\"primary\">{{requestData.amountTo}}</ion-text>\r\n    </b>\r\n  </p>\r\n  <p>\r\n   {{ 'EXCHANGE_RATE' | translate }}: 1 {{requestData.request[0].from}} = {{swaprate}} {{requestData.request[0].to}}<br/>\r\n   <span *ngIf=\"requestData.exchange_rate\">{{ 'USER_RATE' | translate }}: 1 {{requestData.request[0].from}} = {{requestData.exchange_rate}} {{requestData.request[0].to}}<br/></span> \r\n    {{ 'MATCHING_FEES_TEXT' | translate }}: {{requestData.fees}} {{requestData.request[0].to}} <br/>\r\n    {{ 'SWAP_TOTAL_AMOUNT' | translate }} : {{ requestData.amountSwap}} {{requestData.request[0].to}}\r\n  </p>\r\n  <p>\r\n    {{ 'SWAP_TYPE_TEXT' | translate }}: {{ requestData.type === 1 ?  ('INSTANT_TEXT' | translate) : ('DELAYED_TEXT' | translate) }} \r\n  </p> \r\n\r\n  <p *ngIf=\"requestData.type === 1 && canMakeRequest\" class=\"ion-padding-vertical\"><strong>\r\n    <ion-text color=\"danger\">\r\n    {{ 'INSTANT_SWAP_MESSAGE' | translate}}\r\n    </ion-text>    \r\n  </strong></p>\r\n\r\n  <p *ngIf=\"!canMakeRequest\" class=\"ion-no-margin\">\r\n    <ion-text color=\"danger\">\r\n    {{ 'CANT_MATCH_SWAP_DESCRIPTION' | translate : { balance : (requestData.amountSwap + ' ' + requestData.request[0].to) } }}\r\n  </ion-text>\r\n  </p>\r\n\r\n  <p *ngIf=\"requestData.type === 2 && canMakeRequest\" class=\"ion-padding-vertical\"><strong>\r\n    <ion-text color=\"danger\">\r\n    {{ 'DELAYED_SWAP_MESSAGE' | translate}}\r\n    </ion-text>    \r\n  </strong></p>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n          <ion-button expand=\"full\" \r\n                color=\"warning\" \r\n                [disabled]=\"!canMakeRequest\"\r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"matchedSwapRequest()\">\r\n            {{ 'VALIDATE_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeSwap()\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "UNvO":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap/swap.component.ts ***!
  \***********************************************************/
/*! exports provided: SwapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapComponent", function() { return SwapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_swap_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./swap.component.html */ "TfXn");
/* harmony import */ var _swap_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap.component.scss */ "79dK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/currency.service */ "GmDD");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/swap-global-data.service */ "35bu");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");












let SwapComponent = class SwapComponent {
    constructor(modatCtrl, translate, currency, errorService, ui, swapService, swapData, navParams, swapError) {
        this.modatCtrl = modatCtrl;
        this.translate = translate;
        this.currency = currency;
        this.errorService = errorService;
        this.ui = ui;
        this.swapService = swapService;
        this.swapData = swapData;
        this.navParams = navParams;
        this.swapError = swapError;
        this.wallet = this.navParams.get('wallet');
        this.requestData = this.navParams.get('data');
        this.canMakeRequest = true;
        this.checkRequestCanInstantRequest(this.requestData.request[0].to);
    }
    ngOnInit() {
        this.getSwapRate();
    }
    closeSwap(ans) {
        this.modatCtrl.dismiss(ans, 'cancel');
    }
    // get the swap rate
    getSwapRate() {
        this.currency.conversionRateValue(this.requestData.request[0].from, this.requestData.request[0].to)
            .then(data => {
            this.swaprate = data;
        });
    }
    // check if the user can make instant request
    checkRequestCanInstantRequest(currency) {
        this.canMakeRequest = this.swapData.checkRequestCanInstantRequest(currency, this.wallet, this.requestData.request[0].amount, this.requestData.fees);
    }
    // Matched swap request
    matchedSwapRequest() {
        const swapData = { list_swap_request_id: this.requestData.request };
        this.translate.get('MAKE_SWAP_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.swapService.mathSwapRequest(swapData)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === "success") {
                if (reponse.completed_swap) {
                    this.translate.get('MAKE_SWAP_SUCCESS_TEXT').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                else if (reponse.pending_swap) {
                    this.translate.get('PENDING_SUCCESS_TEXT').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                this.closeSwap('match-request');
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.errorService.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.matchedSwapRequest();
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.errorService.manageError(error);
            }
        });
    }
};
SwapComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_6__["CurrencyService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_10__["SwapService"] },
    { type: _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_9__["SwapGlobalDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_8__["SwapErrorService"] }
];
SwapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-swap',
        template: _raw_loader_swap_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_swap_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SwapComponent);



/***/ }),

/***/ "WG34":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/swap-not-paid/swap-not-paid.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard/pesuswap\"></ion-back-button>\r\n    </ion-buttons> \r\n    <ion-title class=\"ion-text-center title-md-right\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar >\r\n    <ion-title  class=\"ion-text-center\">{{ 'PENDING_PESU_SWAP_TEXT' | translate }}</ion-title>      \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"pesuswap\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list class=\"swapwrap\">\r\n     \r\n          <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n            <ion-spinner  name=\"circles\"></ion-spinner>\r\n          </p>\r\n          <ion-item class=\"swapitem\" *ngFor=\"let request of allRequests; let i = index\">\r\n            <ion-checkbox *ngIf=\"request.canSelect\" (ionChange)=\"checkSelection(i)\" [(ngModel)]=\"allRequests[i].select\" ngModelOptions=\"{standalone: true}\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n            <ion-label>\r\n            \r\n              <p>                \r\n                <span class=\"ion-float-left swaprate\">\r\n                  <ion-text color=\"warning\">\r\n                    <ion-icon name=\"star\" *ngFor=\"let icon of getSuccessPercentage(request.data.pourcentage_reussite)\"></ion-icon>\r\n                    <ion-icon name=\"star-outline\" *ngFor=\"let icon of getLossPercentage(request.data.pourcentage_reussite)\"></ion-icon>\r\n                  </ion-text>\r\n                </span>\r\n                <span class=\"ion-float-right\"><small>{{ 'EXPIRED_IN_TEXT' | translate }} <b>{{ expiredTime(request.data)}}</b></small></span> \r\n              </p>   \r\n              <ion-text *ngIf=\"request.data && request.data.infos_user_from\" color=\"dark\">\r\n                <h2>\r\n                  <span> {{ 'INITIATOR_TEXT' | translate }} : </span> <b>{{ request.data.infos_user_from && request.data.infos_user_from.firstname ? request.data.infos_user_from.firstname   : request.data.infos_user_from.lastname ?  request.data.infos_user_from.lastname : ('ANONYM_USER_TEXT' | translate)}}</b>\r\n               </h2>\r\n             </ion-text>           \r\n              <h2>\r\n                <ion-text color=\"warning\">{{ request.data.user_id_from === currentUserData.id ? request.data.amount_from :  request.data.amount_to}} \r\n                  {{request.data.user_id_from === currentUserData.id ? request.data.infos_currency_from.name : request.data.infos_currency_to.name }}</ion-text> \r\n                <ion-icon [color]=\"request.data.user_id_from===currentUserData.id ? 'warning' : ''\" name=\"arrow-forward\"></ion-icon> \r\n                <ion-text color=\"primary\">{{ request.data.user_id_from === currentUserData.id ? request.data.amount_to : request.data.amount_from }}\r\n                   {{request.data.user_id_from === currentUserData.id ? request.data.infos_currency_to.name : request.data.infos_currency_from.name }}</ion-text>\r\n              </h2>\r\n              <p>                \r\n                <ion-text color=\"dark\"><span class=\"ion-float-left\"> {{request.data.type_swap_id === 1 ? ('INSTANT_TEXT' | translate) : ('DELAYED_TEXT' | translate)}}</span></ion-text>\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>   \r\n\r\n        </ion-list>\r\n      </ion-col>      \r\n    </ion-row>        \r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"activeRequests && activeRequests.length === 0 && !loading && !refresh\">\r\n    <p  class=\"ion-padding ion-text-center\"> {{ 'PENDING_SWAP_REQUEST_EMPTY_LIST' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-left\" *ngIf=\"selectRequests.length > 0\">\r\n   <div >\r\n    <div class=\"swap-btn-sommary\">\r\n      <ion-text color=\"dark\"><strong>{{ 'GET_TEXT' | translate }}: {{getAmountText}}</strong></ion-text> <br /> {{ 'PAIDTEXT' | translate }}: {{paidAmountText}}\r\n    </div> \r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n      <ion-fab-button color=\"warning\" (click)=\"confirmPin()\">\r\n        <ion-icon name=\"cash\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </div> \r\n</ion-footer>\r\n\r\n\r\n");

/***/ }),

/***/ "WOmo":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-notifications/swap-notifications.page.ts ***!
  \**********************************************************************************/
/*! exports provided: SwapNotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapNotificationsPage", function() { return SwapNotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_swap_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./swap-notifications.page.html */ "AY40");
/* harmony import */ var _swap_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap-notifications.page.scss */ "7hDi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");









let SwapNotificationsPage = class SwapNotificationsPage {
    constructor(swapService, userService, translate, error) {
        this.swapService = swapService;
        this.userService = userService;
        this.translate = translate;
        this.error = error;
        this.notifications = [];
        this.nbItems = 10;
        this.filterData = [];
        this.allData = [];
        this.backService = null;
        this.currentUser = this.userService.getUserData();
    }
    ngOnInit() {
        this.loading = true;
        this.getSwapNotifications(null);
    }
    // format the notification data
    formatNotificationData(notifications) {
        notifications.forEach(item => {
            if (item.titre.toString().startsWith('SWAP MATCH COMPLETED')) {
                this.translate.get(['SWAP_MATCH_COMPLETED_TITLE', 'SWAP_MATCH_COMPLETED_DESC'])
                    .subscribe(trans => {
                    item.titre = trans.SWAP_MATCH_COMPLETED_TITLE;
                    item.description = trans.SWAP_MATCH_COMPLETED_DESC;
                });
            }
            if (item.titre.toString().startsWith('EXPIRATION PESU SWAP')) {
                this.translate.get(['EXPIRATION_PESU_SWAP_TITLE', 'EXPIRATION_PESU_SWAP_DESC'])
                    .subscribe(trans => {
                    item.titre = trans.EXPIRATION_PESU_SWAP_TITLE;
                    item.description = trans.EXPIRATION_PESU_SWAP_DESC;
                });
            }
            if (item.titre.toString().startsWith('SWAP MATCH PENDING')) {
                this.translate.get(['SWAP_MATCH_PENDING_TITLE', 'SWAP_MATCH_PENDING_DESC'])
                    .subscribe(trans => {
                    item.titre = trans.SWAP_MATCH_PENDING_TITLE;
                    item.description = trans.SWAP_MATCH_PENDING_DESC;
                });
            }
            if (item.titre.toString().startsWith('REQUETE PESU SWAP')) {
                this.translate.get(['REQUETE_PESU_SWAP_TITLE', 'REQUETE_PESU_SWAP_DESC'])
                    .subscribe(trans => {
                    item.titre = trans.REQUETE_PESU_SWAP_TITLE;
                    item.description = trans.REQUETE_PESU_SWAP_DESC;
                });
            }
            if (item.titre.toString().startsWith('MODIFICATION PESU SWAP')) {
                this.translate.get(['MODIFICATION_PESU_SWAP_TITLE', 'MODIFICATION_PESU_SWAP_DESC'])
                    .subscribe(trans => {
                    item.titre = trans.MODIFICATION_PESU_SWAP_TITLE;
                    item.description = trans.MODIFICATION_PESU_SWAP_DESC;
                });
            }
            if (item.titre.toString().startsWith('SUPPRESSION PESU SWAP')) {
                this.translate.get(['SUPPRESSION_PESU_SWAP_TITLE', 'SUPPRESSION_PESU_SWAP_DESC'])
                    .subscribe(trans => {
                    item.titre = trans.SUPPRESSION_PESU_SWAP_TITLE;
                    item.description = trans.SUPPRESSION_PESU_SWAP_DESC;
                });
            }
        });
    }
    // Get swap notifications
    getSwapNotifications(event) {
        this.swapService.getSwapNotificationsWithId(this.currentUser.id).subscribe((reponse) => {
            if (reponse && reponse.notifications) {
                this.formatNotificationData(reponse.notifications);
                this.allData = reponse.notifications;
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
            }
            this.loading = false;
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            this.loading = false;
            this.error.manageError(error);
        });
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getSwapNotifications(event);
    }
    // Launch the backgroud service
    ionicViewDidEnter() {
        this.backgroundService();
    }
    // Backgroung service
    backgroundService() {
        this.backService = setInterval(() => {
            this.getSwapNotifications(null);
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
SwapNotificationsPage.ctorParameters = () => [
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_7__["SwapService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }
];
SwapNotificationsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false },] }]
};
SwapNotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-swap-notifications',
        template: _raw_loader_swap_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_swap_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SwapNotificationsPage);



/***/ }),

/***/ "WQWe":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-not-paid/swap-not-paid.page.ts ***!
  \************************************************************************/
/*! exports provided: SwapNotPaidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapNotPaidPage", function() { return SwapNotPaidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_swap_not_paid_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./swap-not-paid.page.html */ "WG34");
/* harmony import */ var _swap_not_paid_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap-not-paid.page.scss */ "3JmU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _paid_modal_paid_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../paid-modal/paid-modal.component */ "Nh4Y");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/swap-global-data.service */ "35bu");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");















let SwapNotPaidPage = class SwapNotPaidPage {
    constructor(ui, util, constant, error, modatCtrl, swapService, swapData, swapError, userService, translate) {
        this.ui = ui;
        this.util = util;
        this.constant = constant;
        this.error = error;
        this.modatCtrl = modatCtrl;
        this.swapService = swapService;
        this.swapData = swapData;
        this.swapError = swapError;
        this.userService = userService;
        this.translate = translate;
        this.allRequests = [];
        this.myRequests = [];
        this.pendingRequests = [];
        this.nbItems = 10;
        this.loading = true;
        this.refresh = false;
        this.activeRequests = [];
        this.selectRequests = [];
        this.currentUserData = this.userService.getUserData();
        this.amount = 0;
        this.fees = 0;
        this.currency = '';
    }
    ngOnInit() {
        this.getAllPendingRequest();
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getAllPendingRequest(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.allRequests.length < this.activeRequests.length) {
                    this.allRequests.push(this.activeRequests[this.allRequests.length]);
                }
                else if (this.allRequests.length === this.activeRequests.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Get the percentage of succes
    getSuccessPercentage(percent) {
        return this.swapData.getSuccessPercentage(percent);
    }
    // get the expired time
    expiredTime(request) {
        return this.constant.expiredTime(request);
    }
    // get percentage of loss
    getLossPercentage(percent) {
        return this.swapData.getLossPercentage(percent);
    }
    // can pay request
    canPayRequest(request) {
        let ican = true;
        // check if user has matched the request
        if (request.user_id_to && (request.user_id_to === this.currentUserData.id || request.user_id_from === this.currentUserData.id)) {
            if ((request.infos_status_request && request.infos_status_request.description === 'pending')) {
                if (request && request.user_id_from === this.currentUserData.id) {
                    if (request.liste_user && request.liste_user.length > 0) {
                        request.liste_user.forEach(user => {
                            if (user.direction === 'from' && user.infos_user.user_id === this.currentUserData.id) {
                                ican = false;
                            }
                        });
                    }
                }
                else {
                    if (request.liste_user && request.liste_user.length > 0) {
                        request.liste_user.forEach(user => {
                            if (user.direction === 'to' && user.infos_user.user_id === this.currentUserData.id) {
                                ican = false;
                            }
                        });
                    }
                }
            }
            else {
                ican = false;
            }
        }
        else {
            ican = false;
        }
        return ican;
    }
    // format pending swap response
    formatPendingSwapReponse(requests) {
        this.pendingRequests = this.util.orderByKeyUp(requests, 'updated_at');
        const formatData = [];
        if (this.pendingRequests && this.pendingRequests.length > 0) {
            this.pendingRequests.forEach(request => {
                if (this.canPayRequest(request)) {
                    formatData.push({ select: false, canSelect: true, data: request });
                }
            });
        }
        this.activeRequests = formatData;
        if (this.activeRequests.length > this.nbItems) {
            this.allRequests = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.allRequests.push(this.activeRequests[this.allRequests.length]);
            }
        }
        else {
            this.allRequests = this.activeRequests;
        }
    }
    //  Get all the pending request
    getAllPendingRequest(event) {
        this.selectRequests = [];
        this.refresh = true;
        this.swapService.getSwapPendingRequest()
            .subscribe((reponse) => {
            this.refresh = false;
            if (reponse && reponse.requests) {
                this.formatPendingSwapReponse(reponse.requests);
                this.loading = false;
            }
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            this.refresh = false;
            this.loading = false;
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.getAllPendingRequest(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
                this.swapError.manageWalletError(error);
            }
        });
    }
    // check selection
    checkSelection(index) {
        let requestData = [];
        this.getAmountText = '';
        this.paidAmountText = '';
        let getAmount = 0;
        let paidAmount = 0;
        let direction = '';
        let userId = '';
        let currencyForm = '';
        let currencyTo = '';
        let type = 0;
        let position = 0;
        let fees = 0;
        // Get the current devise and type of request
        this.allRequests.forEach(request => {
            if (position !== index && request.select) {
                currencyForm = request.data.infos_currency_from.name;
                currencyTo = request.data.infos_currency_to.name;
                userId = request.data.user_id_from === this.currentUserData.id ? request.data.user_id_from : request.data.user_id_to;
                type = request.data.type_swap_id;
                direction = request.data.user_id_from === this.currentUserData.id ? 'user_id_from' : 'user_id_to';
            }
            position++;
        });
        this.allRequests.forEach(request => {
            if (request.select) {
                if (currencyForm === '' && currencyTo === '' && type === 0) {
                    currencyForm = request.data.infos_currency_from.name;
                    currencyTo = request.data.infos_currency_to.name;
                    type = request.data.type_swap_id;
                    userId = request.data.user_id_from === this.currentUserData.id ? request.data.user_id_from : request.data.user_id_to;
                    direction = request.data.user_id_from === this.currentUserData.id ? 'user_id_from' : 'user_id_to';
                }
                if ((currencyForm === request.data.infos_currency_from.name) && (currencyTo === request.data.infos_currency_to.name) && (type === request.data.type_swap_id) && (userId === request.data[direction])) {
                    requestData.push({ swap_request_id: request.data.swap_request_id, from: currencyForm, to: currencyTo, fees: request.data.fees });
                    paidAmount += parseFloat(request.data.amount_from);
                    getAmount += parseFloat(request.data.amount_to);
                    fees += parseFloat(request.data.fees);
                }
                else {
                    this.allRequests[index] = { select: false, canSelect: this.allRequests[index].canSelect, data: this.allRequests[index].data };
                    this.translate.get(['INSTANT_TEXT', 'DELAYED_TEXT', 'MATCH_TEXT', 'INITIATE_TEXT']).subscribe(trans => {
                        this.translate.get('SELECTION_MESSAGE_SWAP_TEXT', {
                            from: currencyForm, to: currencyTo, direction: direction === 'user_id_to' ? `${trans.MATCH_TEXT}` : `${trans.INITIATE_TEXT}`,
                            type: type === 1 ? `${trans.INSTANT_TEXT}` : `${trans.DELAYED_TEXT}`
                        }).subscribe(trans => {
                            this.ui.presentToast(trans);
                        });
                    });
                }
            }
        });
        this.amount = direction === 'user_id_from' ? parseFloat((paidAmount).toFixed(2)) : parseFloat((getAmount).toFixed(2));
        this.currency = direction === 'user_id_from' ? currencyForm : currencyTo;
        this.fees = fees > 0 ? parseFloat(Number(fees).toFixed(2)) : 0;
        this.selectRequests = requestData;
        this.getAmountText = direction === 'user_id_from' ? `${Number(getAmount).toFixed(2)} ${currencyTo}` : `${Number(paidAmount).toFixed(2)} ${currencyForm}`;
        this.paidAmountText = direction === 'user_id_from' ? `${Number(paidAmount).toFixed(2)} ${currencyForm}` : `${Number(getAmount).toFixed(2)} ${currencyTo}`;
    }
    // open the tontine contribution modal
    selectPaymentMode(pin) {
        const paymentData = {
            title: `${this.paidAmountText} => ${this.getAmountText}`,
            amount: Number(parseFloat(this.amount) + parseFloat(this.fees)).toFixed(2),
            fees: this.fees,
            currency: this.currency,
            list_swap_request_id: this.selectRequests,
            pin: pin
        };
        this.openContribute(paymentData);
    }
    // Open the modal
    openContribute(param) {
        this.swapService.setCurrentSwapData(param);
        this.modatCtrl
            .create({
            component: _paid_modal_paid_modal_component__WEBPACK_IMPORTED_MODULE_9__["PaidModalComponent"],
            componentProps: {
                exchange: param.title,
                amount: param.amount,
                data: param
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                this.loading = true;
                this.allRequests = [];
                this.getAllPendingRequest();
            });
        });
    }
    // show the pin confirmation dilaog
    confirmPin() {
        const userPin = this.userService.getUserSecret();
        this.selectPaymentMode(userPin.password);
    }
};
SwapNotPaidPage.ctorParameters = () => [
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_12__["UiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_10__["ConstantService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_6__["SwapService"] },
    { type: _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_11__["SwapGlobalDataService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_4__["SwapErrorService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
SwapNotPaidPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], { static: false },] }]
};
SwapNotPaidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-swap-not-paid',
        template: _raw_loader_swap_not_paid_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_swap_not_paid_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SwapNotPaidPage);



/***/ }),

/***/ "Xh6L":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/archive-swap/archive-swap.component.ts ***!
  \***************************************************************************/
/*! exports provided: ArchiveSwapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveSwapComponent", function() { return ArchiveSwapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_archive_swap_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./archive-swap.component.html */ "riJu");
/* harmony import */ var _archive_swap_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archive-swap.component.scss */ "HSv+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");











let ArchiveSwapComponent = class ArchiveSwapComponent {
    constructor(modal, userService, alertController, swapService, translate, swapError, errorService, ui, navParams) {
        this.modal = modal;
        this.userService = userService;
        this.alertController = alertController;
        this.swapService = swapService;
        this.translate = translate;
        this.swapError = swapError;
        this.errorService = errorService;
        this.ui = ui;
        this.navParams = navParams;
        this.filterData = [];
        this.listData = [];
        this.loading = false;
        this.option = false;
        this.allData = [];
        this.swapSelected = [];
        this.nbItems = 15;
        this.param = this.navParams.get('swaps');
        this.currentUserData = this.userService.getUserData();
    }
    ngOnInit() {
        this.getData(this.param);
    }
    // Get all data
    getData(data) {
        this.allData = [];
        data.forEach(element => {
            this.allData.push({ select: false, swap_request_id: element.swap_request_id, data: element, name: element.infos_user_from && (element.infos_user_from.firstname || element.infos_user_from.lastname) ? element.infos_user_from.firstname + ' ' + element.infos_user_from.lastname : '' });
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
    closeModal(ans) {
        this.modal.dismiss(ans, 'cancel');
    }
    // confirm archivation
    confirmArchiveMessage() {
        const messages = [];
        this.translate.get(['ARCHIVE_SWAP_TEXT', 'M_ALL_ARCHIVE_SWAP_MESSAGE', 'CANCEL_TEXT', 'YES_TEXT'])
            .subscribe(trans => {
            messages.push(trans.ARCHIVE_SWAP_TEXT);
            messages.push(trans.M_ALL_ARCHIVE_SWAP_MESSAGE);
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
                            this.archiveSwap();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // update the tontine selected
    updateTontineSelected() {
        this.swapSelected = this.listData.filter(data => { return data.select === true; });
    }
    // Archive the swap request
    archiveSwap() {
        const swapData = { list_swap_request_id: this.swapSelected };
        this.translate.get('ARCHIVE_PROCESSING').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.loading = true;
        this.swapService.archiveSwapData(swapData)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === "success") {
                this.closeModal('archived');
                this.translate.get('SWAP_REQUEST_ARCHIVE_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            this.loading = false;
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.errorService.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.archiveSwap();
                        }
                        else {
                            this.loading = false;
                            this.closeModal();
                        }
                    });
                }
                else {
                    this.closeModal();
                    this.ui.dismissLoading();
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.closeModal();
                this.ui.dismissLoading();
                this.errorService.manageError(error);
            }
        });
    }
};
ArchiveSwapComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_8__["SwapService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__["SwapErrorService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ArchiveSwapComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
ArchiveSwapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-archive-swap',
        template: _raw_loader_archive_swap_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_archive_swap_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArchiveSwapComponent);



/***/ }),

/***/ "Z55p":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/pesuswap.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- [myScrollVanish]=\"scrollArea\"-->\r\n<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n        <ion-img class=\"logo-arrow-no-right-slot\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title> \r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"gotoPendingRequest($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'PESU_SWAP_TEXT' | translate }}</ion-title>      \r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <p class=\"ion-text-center\"  *ngIf=\"loadingWallet\">\r\n        <ion-spinner  name=\"circles\"></ion-spinner>\r\n      </p>\r\n      <ion-row class=\"bar-balance\" *ngIf=\"!loadingWallet\">\r\n        <ion-col size=\"5\">\r\n          <p class=\"bar-balance-title\"><small>{{ 'WALLET_BALANCE_TEXT' | translate }}</small></p>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <p class=\"ion-text-right\" *ngFor=\"let balance of currentBalance\"><ion-text color=\"primary\"><b>{{ balance.solde_device }} {{ balance.device_name }}</b></ion-text></p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"pesuswap\" #scrollArea scrollEvents=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label> \r\n          <p class=\"ion-no-margin\">         \r\n              {{ 'SWAP_DESCRIPTION_TEXT' | translate }}       \r\n          </p>\r\n        </ion-label> \r\n      </ion-col> \r\n    </ion-row>\r\n    <ion-row  >\r\n      <ion-col size=\"12\">\r\n        <ion-list class=\"swapwrap\">\r\n          <ion-item-divider class=\"swapform\" sticky=\"true\">\r\n            <form [formGroup]=\"swapRequestForm\">\r\n              <div>\r\n                <ion-row >\r\n                  <ion-col size=\"6\" class=\"ion-align-items-stretch\">\r\n                    <p class=\"i-have\"><b>{{ 'CURRENCY_I_HAVE_TEXT' | translate }}</b></p>\r\n                    <ion-select (ionChange)=\"updateAmountDestination(swapRequestForm.value.currency_from,swapRequestForm.value.currency_to,'from')\" formControlName=\"currency_from\">\r\n                      <ion-select-option  [value]=\"''\">{{ 'SELECT_CURRENCY_TEXT' | translate }}</ion-select-option>\r\n                      <ion-select-option *ngFor=\"let currency of userCurrencies | removecurrency : swapRequestForm.value.currency_to\" [value]=\"currency.currency_name\">{{ currency.currency_name }}</ion-select-option>         \r\n                    </ion-select>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-stretch\">\r\n                    <p class=\"i-want\"><b>{{ 'CURRENCY_I_WANT_TEXT' | translate }}</b></p>\r\n                    <ion-select (ionChange)=\"updateAmountDestination(swapRequestForm.value.currency_from,swapRequestForm.value.currency_to,'from')\" formControlName=\"currency_to\">\r\n                      <ion-select-option  [value]=\"''\">{{ 'SELECT_CURRENCY_TEXT' | translate }}</ion-select-option>   \r\n                      <ion-select-option *ngFor=\"let currency of systemCurrencies | removecurrency : swapRequestForm.value.currency_from\" [value]=\"currency.currency_name\">{{ currency.currency_name }}</ion-select-option>        \r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-stretch\">\r\n                    <ion-item class=\"swapamount\">\r\n                      <ion-input (ionChange)=\"updateAmountDestination(swapRequestForm.value.currency_from,swapRequestForm.value.currency_to,'from')\" type=\"number\" formControlName=\"amount_from\" required></ion-input>\r\n                    </ion-item>\r\n                    <div class=\"ion-text-wrap\">\r\n                      <ion-text color=\"dark\"><small>{{ 'AMOUNT_HAVE_TO_SWAP' | translate }}</small></ion-text>\r\n                    </div> \r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-stretch\">\r\n                    <ion-item class=\"swapamount\">\r\n                      <ion-input  (ionChange)=\"updateAmountDestination(swapRequestForm.value.currency_from,swapRequestForm.value.currency_to,'to')\" type=\"number\" formControlName=\"amount_to\" required></ion-input>\r\n                    </ion-item>\r\n                    <div class=\"ion-text-wrap\">\r\n                      <ion-text color=\"dark\"><small>{{ 'AMOUNT_WANT_TO_SWAP' | translate }}</small></ion-text>\r\n                    </div> \r\n                  </ion-col>\r\n                </ion-row>\r\n                \r\n                <ion-row *ngIf=\"canShowCurrencyErrorMsg()\">\r\n                  <ion-col>\r\n                    <div class=\"ion-text-wrap\">\r\n                      <ion-text  color=\"danger\"><small>{{ 'CURRENCY_MUST_BE_DIFFERENT_MSG' | translate }}</small></ion-text>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n        \r\n              <ion-row class=\"swapfilter\">\r\n                <ion-col size=\"12\">\r\n                  <ion-item lines=\"none\">                \r\n                    <ion-toggle formControlName=\"allRequest\" (ionChange)=\"filterRequest()\"  color=\"primary\"></ion-toggle>\r\n                    <ion-label>&nbsp; {{ swapRequestForm.value.allRequest ?  ('OTHERS_REQUEST_TEXT' | translate) : ('MY_REQUESTS_TEXT' | translate)  }} <span *ngIf=\"!loading\">{{'(' + activeRequests.length + ')' }}</span>  </ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </form>                   \r\n          </ion-item-divider>\r\n          <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n            <ion-spinner  name=\"circles\"></ion-spinner>\r\n          </p>\r\n          <ion-item class=\"swapitem\" *ngFor=\"let request of requests; let i = index\">\r\n            <ion-checkbox *ngIf=\"request.canSelect\" (ionChange)=\"checkSelection(i)\" [(ngModel)]=\"requests[i].select\" ngModelOptions=\"{standalone: true}\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n           <ion-checkbox *ngIf=\"!swapRequestForm.value.allRequest && !request.canSelect\" [checked]=\"true\" [color]=\"getRequestColor(request.data.infos_status_request)\" slot=\"start\"></ion-checkbox> \r\n            <ion-label>\r\n         \r\n              <p>                \r\n                <span class=\"ion-float-left swaprate\">\r\n                  <ion-text color=\"warning\">\r\n                    <ion-icon name=\"star\" *ngFor=\"let icon of getSuccessPercentage(request.data.pourcentage_reussite)\"></ion-icon>\r\n                    <ion-icon name=\"star-outline\" *ngFor=\"let icon of getLossPercentage(request.data.pourcentage_reussite)\"></ion-icon>\r\n                  </ion-text>\r\n                </span>\r\n                <span *ngIf=\"canShowExpiredTime(request)\" class=\"ion-float-right\"><small>{{ 'EXPIRED_IN_TEXT' | translate }} <b>{{ expiredTime(request.data) }}</b></small></span> \r\n              </p>    \r\n              \r\n              <ion-text *ngIf=\"request.data && request.data.infos_user_from\" color=\"primary\">\r\n                <h2>\r\n                 <span> {{ 'INITIATOR_TEXT' | translate }} : </span> <b>{{ request.data.infos_user_from && request.data.infos_user_from.firstname ? request.data.infos_user_from.firstname   : request.data.infos_user_from.lastname ?  request.data.infos_user_from.lastname : ('ANONYM_USER_TEXT' | translate)}}</b>\r\n               </h2>\r\n             </ion-text>\r\n              <h2>\r\n                <ion-text color=\"warning\">{{ request.data.user_id_from === currentUserData.id ? request.data.amount_from : request.data.amount_to }} \r\n                  {{ request.data.user_id_from === currentUserData.id ? request.data.infos_currency_from.name : request.data.infos_currency_to.name}}\r\n                </ion-text> \r\n                <ion-icon name=\"arrow-forward\"></ion-icon> \r\n                <ion-text color=\"primary\">{{ request.data.user_id_from === currentUserData.id ? request.data.amount_to : request.data.amount_from }} \r\n                  {{ request.data.user_id_from === currentUserData.id ? request.data.infos_currency_to.name : request.data.infos_currency_from.name}}\r\n                </ion-text>\r\n              </h2>\r\n              <p>                \r\n                <ion-text color=\"dark\"><span class=\"ion-float-left\"> {{request.data.type_swap_id === 1 ? ('INSTANT_TEXT' | translate) : ('DELAYED_TEXT' | translate)}}</span></ion-text>\r\n                <span class=\"ion-float-right\" *ngIf=\"canShowMenu(request)\">\r\n                  <ion-buttons slot=\"end\" class=\"popover-menu\">\r\n                    <ion-button (click)=\"openContextMenu($event, request.data)\">\r\n                      <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                </span> \r\n                <span  *ngIf=\"isSwapCompleted(request)\">\r\n                 ({{ request.data.user_id_from === currentUserData.id  ? ('COMPLETED_TEXT_SWAP' | translate) : ('MATCHED_TEXT_SWAP' | translate)  }})\r\n                </span>\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>   \r\n\r\n        </ion-list>\r\n      </ion-col>      \r\n    </ion-row>        \r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"activeRequests && activeRequests.length === 0 && !loading && !loadingWallet\">\r\n    <p  class=\"ion-padding ion-text-center\"> {{ 'SWAP_REQUEST_EMPTY_LIST' | translate }}</p>\r\n  </div>\r\n\r\n\r\n  <div style=\"min-height: 50px;\"></div>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-left\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\"\r\n        (click)=\"openSendSwapRequest()\" *ngIf=\"canSendRequest()\">\r\n   {{ 'SEND_REQUEST_TEXT' | translate }}\r\n  </ion-button>\r\n   <div *ngIf=\"swapRequestForm.value.request !== 1 && selectRequests.length > 0\">\r\n    <div class=\"swap-btn-sommary\">\r\n      <ion-text color=\"dark\"><strong>{{ 'GET_TEXT' | translate }}: {{paidAmountText}}</strong></ion-text> <br /> {{ 'PAIDTEXT' | translate }}: {{getAmountText}}\r\n    </div> \r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n      <ion-fab-button color=\"warning\" (click)=\"openSwap()\">\r\n        <ion-icon name=\"repeat\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </div> \r\n</ion-footer>\r\n");

/***/ }),

/***/ "aG/d":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/delete/delete.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "bhnt":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-edit/swap-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: SwapEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapEditComponent", function() { return SwapEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_swap_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./swap-edit.component.html */ "kqoW");
/* harmony import */ var _swap_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap-edit.component.scss */ "4Hpq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/currency.service */ "GmDD");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/swap-global-data.service */ "35bu");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");















let SwapEditComponent = class SwapEditComponent {
    constructor(fb, constant, ui, modatCtrl, translate, zone, error, swapService, swapData, currency, swapError, userService, navParams) {
        this.fb = fb;
        this.constant = constant;
        this.ui = ui;
        this.modatCtrl = modatCtrl;
        this.translate = translate;
        this.zone = zone;
        this.error = error;
        this.swapService = swapService;
        this.swapData = swapData;
        this.currency = currency;
        this.swapError = swapError;
        this.userService = userService;
        this.navParams = navParams;
        this.currencies = [];
        this.userCurrencies = [];
        this.systemCurrencies = [];
        this.swapRates = [];
        this.currentUserData = this.userService.getUserData();
        this.requestData = this.navParams.get('data');
        this.canUpdate = true;
        this.hasUpdateExchange = false;
        this.wallet = this.navParams.get('wallet');
        this.canMakeRequest = true;
    }
    ngOnInit() {
        this.swapRequestForm = this.fb.group({
            swap_request_id: [this.requestData.swap_request_id],
            currency_from: [this.requestData.infos_currency_from.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            currency_to: [this.requestData.infos_currency_to.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amount_from: [this.requestData.amount_from, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amount_to: [this.requestData.amount_to, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            exchange_from: [{ value: `${1} ${this.requestData.infos_currency_from.name} : `, disabled: true }],
            exchange_rate: [this.requestData.exchange_rate],
            fees: [this.requestData.fees],
            type_swap_id: ['']
        });
        this.checkRequestCanInstantRequest(this.requestData.infos_currency_from.name);
        this.getSwapTypes();
        this.getSwapRate();
    }
    get currencyHave() {
        return this.swapRequestForm.get('currency_from');
    }
    get currencyWant() {
        return this.swapRequestForm.get('currency_to');
    }
    get amountHave() {
        return this.swapRequestForm.get('amount_from');
    }
    get amountWant() {
        return this.swapRequestForm.get('amount_to');
    }
    // Enable swap edition
    enableSwapEdition() {
        this.swapService.disableSwapEdition(this.requestData.swap_request_id, 0).subscribe(reponse => {
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.enableSwapEdition();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Close the modal
    closeModal(ans) {
        this.enableSwapEdition();
        this.modatCtrl.dismiss(ans, null);
    }
    // disable swap edition
    disableEdition() {
        return this.swapRequestForm.invalid
            || (this.swapRequestForm.value.type_swap_id === 1 && !this.canMakeRequest) || (this.swapRequestForm.value.amount_from < 0 || this.swapRequestForm.value.amount_to < 0);
    }
    // Get the swap type
    getType(type) {
        return this.constant.getTypeSwap(type);
    }
    // Get the list of type of swap
    getSwapTypes() {
        this.swapService.getAllSwapType()
            .subscribe((reponse) => {
            if (reponse && reponse.type_swap) {
                this.zone.run(() => {
                    this.swapTypes = reponse.type_swap;
                });
                setTimeout(() => {
                    if (this.swapTypes && this.swapTypes.length > 0) {
                        this.swapRequestForm.get('type_swap_id').setValue(this.requestData.type_swap_id);
                    }
                }, 500);
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getSwapTypes();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // Get the users currencies
    getUserCurrencies() {
        this.swapService.getAllWalletCurrenies()
            .subscribe((reponse) => {
            if (reponse && reponse.currencies_user) {
                this.userCurrencies = reponse.currencies_user;
                setTimeout(() => {
                    if (this.userCurrencies && this.userCurrencies.length > 0) {
                        this.swapRequestForm.get('currency_from').setValue(this.requestData.infos_currency_from.name);
                    }
                }, 500);
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_exist) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getUserCurrencies();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // Get the sytem currencies
    getSystemCurrencies() {
        this.swapService.getAllSystemCurrenies()
            .subscribe((reponse) => {
            if (reponse && reponse.currencies_system) {
                this.zone.run(() => {
                    this.systemCurrencies = reponse.currencies_system;
                });
                setTimeout(() => {
                    if (this.systemCurrencies && this.systemCurrencies.length > 0) {
                        this.swapRequestForm.get('currency_to').setValue(this.requestData.infos_currency_to.name);
                    }
                }, 500);
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getSystemCurrencies();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // Get all swap rate 
    getSwapRate() {
        this.swapService.getSwapRate()
            .subscribe((reponse) => {
            if (reponse && reponse.swap_rate) {
                this.swapRates = reponse.swap_rate;
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getSwapRate();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // check if the user can make instant request
    checkRequestCanInstantRequest(currency) {
        this.canMakeRequest = this.swapData.checkRequestCanInstantRequest(currency, this.wallet, this.swapRequestForm.value.amount_from, this.swapRequestForm.value.fees);
    }
    // Get exchange fees
    getExchangeFees(currencyFrom, currencyTo, amount) {
        this.swapData.getExchangeFees(this.swapRates, currencyFrom, currencyTo, amount).then(exchangeFees => {
            this.swapRequestForm.get('fees').setValue(exchangeFees);
        });
    }
    // Get the exchange rate
    getExchangeRate(currencyFrom, currencyTo) {
        this.currency.conversionRateValue(currencyFrom, currencyTo).then(rate => {
            this.swapRequestForm.get('exchange_rate').setValue(rate);
        });
    }
    // Update amount 
    updateAmount(currencyFrom, currencyTo, direction, rate, type) {
        if (type === 'rate') {
            this.updateExchangeRate(currencyFrom, currencyTo, rate);
        }
        else if (type === 'exchange' && !this.hasUpdateExchange) {
            this.updateAmountDestination(currencyFrom, currencyTo, direction);
        }
        else {
            this.updateExchangeRate(currencyFrom, currencyTo, rate);
        }
    }
    // Update the exchange rate
    updateExchangeRate(currencyFrom, currencyTo, rate) {
        this.hasUpdateExchange = true;
        if (rate >= 0 && this.canUpdate) {
            let amountTo = 0;
            amountTo = parseFloat(rate) * parseFloat(this.swapRequestForm.value.amount_from);
            this.canUpdate = false;
            this.swapRequestForm.get('amount_to').setValue(Number(amountTo).toFixed(2));
            this.getExchangeFees(currencyFrom, currencyTo, this.swapRequestForm.value.amount_from);
        }
        else {
            if (rate < 0) {
                this.canUpdate = false;
                this.swapRequestForm.get('amount_to').setValue(0);
            }
            else {
                this.canUpdate = true;
            }
        }
        this.checkRequestCanInstantRequest(currencyFrom);
    }
    // Update the amount  destination
    updateAmountDestination(currencyFrom, currencyTo, direction) {
        const amount = direction === 'from' ? this.swapRequestForm.value.amount_from : this.swapRequestForm.value.amount_to;
        if (currencyFrom && currencyTo && amount >= 0 && this.canUpdate) {
            this.getExchangeRate(currencyFrom, currencyTo);
            const param1 = direction === 'from' ? currencyFrom : currencyTo;
            const param2 = direction === 'from' ? currencyTo : currencyFrom;
            this.swapData.getConversionValue(param1, param2, amount).then(data => {
                this.canUpdate = false;
                direction === 'from' ? this.swapRequestForm.get('amount_to').setValue(data) : this.swapRequestForm.get('amount_from').setValue(data);
                this.getExchangeFees(currencyFrom, currencyTo, this.swapRequestForm.value.amount_from);
            });
        }
        else {
            this.canUpdate = true;
        }
        this.checkRequestCanInstantRequest(currencyFrom);
    }
    // edit a swap request
    editSwapRequest() {
        const swapData = this.swapRequestForm.value;
        this.translate.get('EDIT_SWAP_REQUEST_TEXT').subscribe(trans => {
            this.ui.presentLoading(trans);
        });
        this.swapService.updateSwapRequest(swapData)
            .subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === "success") {
                this.translate.get('EDIT_SWAP_SUCCESS_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.closeModal('updated');
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.editSwapRequest();
                        }
                        else {
                            this.closeModal(null);
                        }
                    });
                }
                else {
                    this.closeModal(null);
                    this.ui.dismissLoading();
                    this.swapError.manageWalletError(error);
                }
            }
            else {
                this.closeModal(null);
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
};
SwapEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_10__["ConstantService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_14__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_9__["SwapService"] },
    { type: _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_12__["SwapGlobalDataService"] },
    { type: src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_6__["SwapErrorService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] }
];
SwapEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-swap-edit',
        template: _raw_loader_swap_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_swap_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SwapEditComponent);



/***/ }),

/***/ "djoX":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/pesuswap/pesuswap.page.ts ***!
  \*****************************************************/
/*! exports provided: PesuswapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesuswapPage", function() { return PesuswapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pesuswap_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pesuswap.page.html */ "Z55p");
/* harmony import */ var _pesuswap_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pesuswap.page.scss */ "tQ8a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _swap_menu_swap_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swap-menu/swap-menu.component */ "LxLf");
/* harmony import */ var _send_swap_request_send_swap_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send-swap-request/send-swap-request.component */ "5bpT");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/swap.service */ "UrY2");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _swap_swap_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./swap/swap.component */ "UNvO");
/* harmony import */ var _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../my-tontines/services/contribution.service */ "US41");
/* harmony import */ var src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/currency.service */ "GmDD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _swap_menu_option_swap_menu_option_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./swap-menu-option/swap-menu-option.component */ "hRvo");
/* harmony import */ var src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/constant.service */ "gelh");
/* harmony import */ var _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/swap-global-data.service */ "35bu");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");























let PesuswapPage = class PesuswapPage {
    constructor(fb, ui, util, popoverController, translate, modatCtrl, zone, error, swapService, swapData, currency, contribution, event, storage, constant, swapError, userService) {
        this.fb = fb;
        this.ui = ui;
        this.util = util;
        this.popoverController = popoverController;
        this.translate = translate;
        this.modatCtrl = modatCtrl;
        this.zone = zone;
        this.error = error;
        this.swapService = swapService;
        this.swapData = swapData;
        this.currency = currency;
        this.contribution = contribution;
        this.event = event;
        this.storage = storage;
        this.constant = constant;
        this.swapError = swapError;
        this.userService = userService;
        this.currencies = [];
        this.userCurrencies = [];
        this.filterRequests = [];
        this.systemCurrencies = [];
        this.swapRates = [];
        this.allRequests = [];
        this.requests = [];
        this.currentBalance = [];
        this.activeRequests = [];
        this.selectRequests = [];
        this.loading = false;
        this.loadingWallet = true;
        this.nbItems = 10;
        this.type = 1;
        this.canUpdate = true;
        this.amount = 0;
        this.currentUserData = this.userService.getUserData();
        this.event.subscribe('update-request', () => {
            this.upadteSwapDashBoard(null, 'my');
        });
    }
    ngOnInit() {
        this.getSwapRate();
        this.getSystemCurrencies();
        this.upadteSwapDashBoard(null, 'all');
    }
    // Form getters
    get currencyHave() {
        return this.swapRequestForm.get('currency_from');
    }
    get currencyWant() {
        return this.swapRequestForm.get('currency_to');
    }
    get amountHave() {
        return this.swapRequestForm.get('amount_from');
    }
    get amountWant() {
        return this.swapRequestForm.get('amount_to');
    }
    // Init the swap request form
    initSwapRequestForm(type) {
        this.swapRequestForm = this.fb.group({
            currency_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            currency_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amount_from: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amount_to: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            exchange_rate: [''],
            fees: [''],
            type_swap_id: [1],
            request: [1],
            allRequest: [type === 'all' ? true : false]
        });
    }
    // Init the request with data
    initSwapRequestFormWithData(data) {
        this.swapRequestForm.get('currency_from').setValue(data.currency_from);
        this.canUpdate = false;
        this.swapRequestForm.get('currency_to').setValue(data.currency_to);
        this.canUpdate = true;
        this.swapRequestForm.get('amount_from').setValue(data.amount_from);
        this.swapRequestForm.get('exchange_rate').setValue(data.exchange_rate);
        this.swapRequestForm.get('fees').setValue(data.fees);
        this.swapRequestForm.get('type_swap_id').setValue(data.type_swap_id);
        this.swapRequestForm.get('request').setValue(1);
        this.swapRequestForm.get('allRequest').setValue(true);
    }
    // check max swap amount
    checkMaxSwapAmount() {
        let amount = 0;
        if (this.currentBalance && this.currentBalance.length > 0) {
            const currencyData = this.currentBalance.filter(data => { return data.device_name === this.swapRequestForm.value.currency_from; });
            if (currencyData && currencyData.length > 0) {
                amount = (parseFloat(currencyData[0].solde_device) - (parseFloat(this.swapRequestForm.value.amount_from) + parseFloat(this.swapRequestForm.value.fees)));
                amount = amount >= 0 ? (parseFloat(currencyData[0].solde_device) - parseFloat(this.swapRequestForm.value.fees)) : parseFloat(currencyData[0].solde_device);
            }
        }
        return Number(amount).toFixed(2) + ' ' + this.swapRequestForm.value.currency_from;
    }
    // can send swap request
    canSendRequest() {
        return this.swapRequestForm.value.request === 1
            && this.swapRequestForm.valid && !this.loading
            && (this.swapRequestForm.value.amount_from > 0 && this.swapRequestForm.value.amount_to > 0)
            && (this.swapRequestForm.value.currency_from !== this.swapRequestForm.value.currency_to);
    }
    // check if swap is completed
    isSwapCompleted(request) {
        return request && request.data && request.data.infos_status_request
            && request.data.infos_status_request.description && request.data.infos_status_request.description === 'completed' && !this.swapRequestForm.value.allRequest;
    }
    // can show swap menu
    canShowMenu(request) {
        return !this.swapRequestForm.value.allRequest
            && (request && request.data.user_id_from === this.currentUserData.id
                && (this.canDeleteSwap(request.data) || this.canEditSwap(request.data)) || this.canArchiveSwap(request.data));
    }
    // can show the expired time
    canShowExpiredTime(request) {
        return request && request.data && request.data.infos_status_request && request.data.infos_status_request.description
            && request.data.infos_status_request.description !== 'completed';
    }
    // can show the currency error message
    canShowCurrencyErrorMsg() {
        return (this.currencyHave.dirty || this.currencyWant.dirty)
            && (this.swapRequestForm.value.currency_from === this.swapRequestForm.value.currency_to)
            && (this.swapRequestForm.value.currency_from !== '' && this.swapRequestForm.value.currency_to !== '');
    }
    // get the expired time
    expiredTime(request) {
        return this.constant.expiredTime(request);
    }
    // can delete swap 
    canDeleteSwap(request) {
        return this.swapData.canDeleteSwap(request);
    }
    // can delete swap 
    canEditSwap(request) {
        return this.swapData.canEditSwap(request);
    }
    // can archive the swap
    canArchiveSwap(request) {
        return this.swapData.canArchiveSwap(request);
    }
    // Update the swap DashBoard
    upadteSwapDashBoard(event, typeRequest) {
        this.initSwapRequestForm(typeRequest);
        this.getCurrentBalance(event, typeRequest);
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.upadteSwapDashBoard(event, 'all');
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.requests.length < this.activeRequests.length) {
                    this.requests.push(this.activeRequests[this.requests.length]);
                }
                else if (this.requests.length === this.activeRequests.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    // Go to pending request
    gotoPendingRequest(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _swap_menu_option_swap_menu_option_component__WEBPACK_IMPORTED_MODULE_15__["SwapMenuOptionComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
    openContextMenu(ev, request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _swap_menu_swap_menu_component__WEBPACK_IMPORTED_MODULE_6__["SwapMenuComponent"],
                componentProps: {
                    data: request,
                    wallet: this.currentBalance
                },
                event: ev
            });
            return yield popover.present();
        });
    }
    // Open the swap request modal
    openSendSwapRequest() {
        this.modatCtrl
            .create({
            component: _send_swap_request_send_swap_request_component__WEBPACK_IMPORTED_MODULE_7__["SendSwapRequestComponent"],
            componentProps: {
                data: this.swapRequestForm.value,
                amountSwap: Number(parseFloat(this.swapRequestForm.value.amount_from) + parseFloat(this.swapRequestForm.value.fees)).toFixed(2),
                maxAmount: this.checkMaxSwapAmount(),
                wallet: this.currentBalance
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(ans => {
                if (ans && ans.data === "make-request") {
                    this.upadteSwapDashBoard(null, 'my');
                }
                else if (ans.data && ans.data.message === 'retry-request') {
                    this.canUpdate = false;
                    this.initSwapRequestFormWithData(ans.data);
                    this.getCurrentBalance(null, 'all');
                }
            });
        });
    }
    // Open the swap matching modal
    openSwap() {
        this.modatCtrl
            .create({
            component: _swap_swap_component__WEBPACK_IMPORTED_MODULE_11__["SwapComponent"],
            componentProps: {
                data: {
                    request: this.selectRequests,
                    amountFrom: this.getAmountText,
                    amountSwap: Number(parseFloat(this.amount) + parseFloat(this.swapRequestForm.value.fees)).toFixed(2),
                    amountTo: this.paidAmountText,
                    type: this.type,
                    exchange_rate: this.swapRequestForm.value.exchange_rate,
                    fees: this.swapRequestForm.value.fees
                },
                wallet: this.currentBalance
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(ans => {
                if (ans && ans.data === "match-request") {
                    this.upadteSwapDashBoard(null, 'all');
                }
            });
        });
    }
    getRequestColor(status) {
        let color = 'light';
        if (status && status.description) {
            switch (status.description) {
                case 'initiated':
                    color = 'primary';
                    break;
                case 'pending':
                    color = 'warning';
                    break;
                case 'expired':
                    color = 'danger';
                    break;
                case 'completed':
                    color = 'success';
                    break;
                default:
                    break;
            }
        }
        return color;
    }
    // Get the percentage of succes
    getSuccessPercentage(percent) {
        return this.swapData.getSuccessPercentage(percent);
    }
    // get percentage of loss
    getLossPercentage(percent) {
        return this.swapData.getLossPercentage(percent);
    }
    // Get all swap rate 
    getSwapRate() {
        this.swapService.getSwapRate()
            .subscribe((reponse) => {
            if (reponse && reponse.swap_rate) {
                this.swapRates = reponse.swap_rate;
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getSwapRate();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // Get the sytem currencies
    getSystemCurrencies() {
        this.swapService.getAllSystemCurrenies()
            .subscribe((reponse) => {
            if (reponse && reponse.currencies_system) {
                this.zone.run(() => {
                    this.systemCurrencies = reponse.currencies_system;
                    this.userCurrencies = reponse.currencies_system;
                });
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getSystemCurrencies();
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // Get the users currencies
    getUserCurrencies(event, typeRequest) {
        this.swapService.getAllWalletCurrenies()
            .subscribe((reponse) => {
            if (reponse && reponse.currencies_user) {
                this.zone.run(() => {
                    this.userCurrencies = reponse.currencies_user;
                });
            }
            this.loadingWallet = false;
            // Get the user request without filter 
        }, error => {
            this.loadingWallet = false;
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_exist) {
                    this.loadingWallet = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getUserCurrencies(event, typeRequest);
                        }
                        else {
                            this.loadingWallet = false;
                        }
                    });
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            }
        });
    }
    // get the current balamce of the user
    getCurrentBalance(event, typeRequest) {
        this.contribution.getUserWallet().subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.storage.set('current-balance', reponse.PorteMonnaieUser);
                this.zone.run(() => {
                    this.currentBalance = reponse.PorteMonnaieUser;
                });
                this.loadingWallet = false;
                if (typeRequest === 'all') {
                    this.getAllRequestWithoutFilter(event);
                }
                else {
                    this.getAllUserRequest(event);
                }
            }
        }, error => {
            this.loadingWallet = false;
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.loadingWallet = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getCurrentBalance(event, typeRequest);
                    }
                    else {
                        this.loadingWallet = false;
                        this.storage.get('current-balance').then(data => {
                            this.currentBalance = data ? data : [];
                        });
                    }
                });
            }
            else {
                this.storage.get('current-balance').then(data => {
                    this.currentBalance = data ? data : [];
                });
                this.error.manageError(error);
            }
        });
    }
    // select request filter
    filterRequest() {
        console.log(this.swapRequestForm.value.allRequest);
        if (this.swapRequestForm.value.allRequest) {
            this.requests = [];
            this.getAllRequestWithoutFilter();
        }
        else {
            this.requests = [];
            this.getAllUserRequest();
        }
    }
    // format user swap request response
    formatUserSwapResponse(requests) {
        let requestInitiated = [];
        let requestPending = [];
        let requestExpired = [];
        let requestCompleted = [];
        let Allrequest = [];
        // List of  initiated requests
        requestInitiated = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'initiated'); });
        requestInitiated = requestInitiated && requestInitiated.length > 0 ? this.util.orderByKeyUp(requestInitiated, 'updated_at') : [];
        requestInitiated = requestInitiated && requestInitiated.length > 0 ? this.util.orderByKeyUpTime(requestInitiated, 'temps_restant') : [];
        // List of  pending requests
        requestPending = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'pending'); });
        requestPending = requestPending && requestPending.length > 0 ? this.util.orderByKeyUp(requestPending, 'updated_at') : [];
        requestPending = requestPending && requestPending.length > 0 ? this.util.orderByKeyUpTime(requestPending, 'temps_restant') : [];
        // List of  expired requests
        requestExpired = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'expired'); });
        requestExpired = requestExpired && requestExpired.length > 0 ? this.util.orderByKeyUp(requestExpired, 'updated_at') : [];
        // List of  complete requests
        requestCompleted = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'completed'); });
        requestCompleted = requestCompleted && requestCompleted.length > 0 ? this.util.orderByKeyUp(requestCompleted, 'updated_at') : [];
        // Concat all request
        Allrequest = Allrequest.concat(requestInitiated);
        Allrequest = Allrequest.concat(requestPending);
        Allrequest = Allrequest.concat(requestExpired);
        Allrequest = Allrequest.concat(requestCompleted);
        const formatData = [];
        if (Allrequest && Allrequest.length > 0) {
            Allrequest.forEach(request => {
                formatData.push({ select: false, data: request });
            });
        }
        this.activeRequests = formatData;
        if (this.activeRequests.length > this.nbItems) {
            this.requests = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.requests.push(this.activeRequests[this.requests.length]);
            }
        }
        else {
            this.requests = this.activeRequests;
        }
    }
    // format all swap requests data
    formatAllSwapRequestData(requests) {
        console.log(requests);
        if (requests && requests.length > 0) {
            this.allRequests = this.swapData.filterALLRequestData(requests);
            this.activeRequests = this.allRequests;
            this.filterRequests = this.activeRequests;
            if (this.activeRequests.length > this.nbItems) {
                this.requests = [];
                for (let i = 0; i < this.nbItems; i++) {
                    this.requests.push(this.activeRequests[this.requests.length]);
                }
            }
            else {
                this.requests = this.activeRequests;
            }
        }
    }
    // format the match request
    formatMatchRequests(requests) {
        if (requests && requests.length > 0) {
            this.allRequests = this.swapData.filterALLRequestData(requests);
            this.activeRequests = this.allRequests;
            this.filterRequests = this.activeRequests;
            if (this.activeRequests.length > this.nbItems) {
                this.requests = [];
                for (let i = 0; i < this.nbItems; i++) {
                    this.requests.push(this.activeRequests[this.requests.length]);
                }
            }
            else if (this.activeRequests.length === 0) {
                this.getAllRequestWithFilter(this.swapRequestForm.value.currency_from, this.swapRequestForm.value.currency_to);
            }
            else {
                this.requests = this.activeRequests;
            }
        }
    }
    //  Get all the user request
    getAllUserRequest(event) {
        this.selectRequests = [];
        this.activeRequests = [];
        this.requests = [];
        this.filterRequests = [];
        this.loading = true;
        this.swapService.getAllUserSwapRequestV2()
            .subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.requests) {
                this.formatUserSwapResponse(reponse.requests);
            }
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
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.getAllUserRequest(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
                this.swapError.manageWalletError(error);
            }
        });
    }
    //  Get all  request
    getAllRequestWithFilter(currencyFrom, currencyTo) {
        const data = {
            currency_from: currencyFrom,
            currency_to: currencyTo
        };
        this.selectRequests = [];
        this.activeRequests = [];
        this.requests = [];
        this.filterRequests = [];
        if (currencyFrom && currencyTo) {
            this.loading = true;
            this.swapService.getReverseRequestV2(data)
                .subscribe((reponse) => {
                this.loading = false;
                if (reponse && reponse.requests) {
                    this.formatAllSwapRequestData(reponse.requests);
                }
            }, error => {
                this.loading = false;
                if (error && error.error && error.error.message === "error") {
                    if (error && error.error && error.error.user_not_found) {
                        this.loading = true;
                        this.error.renewSession().then((data) => {
                            if (data && data.result === "OK") {
                                this.getAllRequestWithFilter(currencyFrom, currencyTo);
                            }
                            else {
                                this.loading = false;
                            }
                        });
                    }
                }
                else {
                    this.swapError.manageWalletError(error);
                }
            });
        }
        else {
            this.getAllRequestWithoutFilter();
        }
    }
    //  Get all  request
    getAllRequestWithoutFilter(event) {
        this.loading = true;
        this.activeRequests = [];
        this.selectRequests = [];
        this.requests = [];
        this.filterRequests = [];
        this.swapService.getRequestWithoutFilterV2()
            .subscribe((reponse) => {
            if (reponse && reponse.requests) {
                this.formatAllSwapRequestData(reponse.requests);
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
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.getAllRequestWithoutFilter(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
                this.swapError.manageWalletError(error);
            }
        });
    }
    // Get the exchange that match user request
    getMatchRequest(data) {
        this.selectRequests = [];
        this.activeRequests = [];
        this.requests = [];
        this.filterRequests = [];
        if (data.exchange_rate !== '' && data.fees !== '' && data.currency_from && data.currency_to) {
            this.loading = true;
            this.swapService.getRequestMatchingCurrenciesV2(data).subscribe((reponse) => {
                if (reponse && reponse.requests) {
                    this.formatMatchRequests(reponse.requests);
                }
                this.loading = false;
            }, error => {
                this.loading = false;
                if (error && error.error && error.error.message === "error") {
                    if (error && error.error && error.error.user_not_found) {
                        this.loading = true;
                        this.error.renewSession().then((data) => {
                            if (data && data.result === 'OK') {
                                this.getMatchRequest(data);
                            }
                            else {
                                this.loading = false;
                            }
                        });
                    }
                    else {
                        this.swapError.manageWalletError(error);
                    }
                }
            });
        }
    }
    // check selection
    checkSelection(index) {
        const requestData = [];
        this.getAmountText = '';
        this.paidAmountText = '';
        let getAmount = 0;
        let paidAmount = 0;
        let currencyForm = '';
        let currencyTo = '';
        let type = 0;
        let position = 0;
        let rate = 0;
        let fees = 0;
        // find request which hqs been selected
        this.allRequests.forEach(request => {
            if (position !== index && request.select) {
                currencyForm = request.data.infos_currency_from.name;
                currencyTo = request.data.infos_currency_to.name;
                type = request.data.type_swap_id;
            }
            position++;
        });
        this.swapRequestForm.get('request').setValue(0);
        if (this.requests && this.requests.length > 0) {
            this.requests.forEach(request => {
                if (request.select) {
                    if (currencyForm === '' && currencyTo === '' && type === 0) {
                        currencyForm = request.data.infos_currency_from.name;
                        currencyTo = request.data.infos_currency_to.name;
                        type = request.data.type_swap_id;
                    }
                    if ((currencyForm === request.data.infos_currency_from.name) && (currencyTo === request.data.infos_currency_to.name) && (type === request.data.type_swap_id)) {
                        requestData.push({
                            swap_request_id: request.data.swap_request_id,
                            from: currencyForm,
                            to: currencyTo,
                            amount: request.data.amount_to,
                            fees: 0
                        });
                        paidAmount += request.data.amount_from;
                        getAmount += request.data.amount_to;
                        paidAmount = parseFloat(Number(paidAmount).toFixed(2));
                        getAmount = parseFloat(Number(getAmount).toFixed(2));
                        // Get the max rate
                        rate += parseFloat(request.data.exchange_rate);
                    }
                    else {
                        this.requests[index] = { select: false, canSelect: this.requests[index].canSelect, data: this.requests[index].data };
                        this.translate.get(['INSTANT_TEXT', 'DELAYED_TEXT']).subscribe(trans => {
                            this.translate.get('SELECTION_MESSAGE_TEXT', { from: currencyForm, to: currencyTo, type: type === 1 ? `${trans.INSTANT_TEXT}` : `${trans.DELAYED_TEXT}` }).subscribe(trans => {
                                this.ui.presentToast(trans);
                            });
                        });
                    }
                }
            });
            this.type = type;
            this.paidAmountText = `${paidAmount} ${currencyForm}`;
            this.getAmountText = `${getAmount} ${currencyTo}`;
            this.amount = getAmount;
            // Get average rate off all requests
            this.swapRequestForm.get('exchange_rate').setValue(requestData && requestData.length === 1 ? rate : 0);
            // set the matching fees of each select request
            this.swapData.matchingExchageFees(this.swapRates, currencyTo, currencyForm, requestData).then(data => {
                this.selectRequests = data;
                this.selectRequests.forEach(request => {
                    fees += parseFloat(request.fees);
                });
                this.swapRequestForm.get('fees').setValue(fees);
            });
        }
    }
    // filter the current list of swap request
    filterRequestData(currencyFrom, currencyTo) {
        let requests = [];
        requests = this.filterRequests;
        if (currencyFrom) {
            requests = requests.filter(request => { return request.data.infos_currency_to.name === currencyFrom; });
        }
        if (currencyTo) {
            requests = requests.filter(request => { return request.data.infos_currency_from.name === currencyTo; });
        }
        if (currencyFrom === '' && currencyTo === '') {
            this.activeRequests = this.filterRequests;
        }
        this.activeRequests = requests;
        if (this.activeRequests.length > this.nbItems) {
            this.requests = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.requests.push(this.activeRequests[this.requests.length]);
            }
        }
        else {
            this.requests = this.activeRequests;
        }
    }
    // Get exchange fees
    getExchangeFees(currencyFrom, currencyTo, amount) {
        if (currencyFrom !== '' && currencyTo !== '' && amount > 0) {
            this.swapData.getExchangeFees(this.swapRates, currencyFrom, currencyTo, amount).then(exchangeFees => {
                this.swapRequestForm.get('fees').setValue(exchangeFees);
            });
        }
        else {
            this.swapRequestForm.get('fees').setValue(0);
        }
    }
    // Get the exchange rate
    getExchangeRate(currencyFrom, currencyTo) {
        if (currencyFrom !== '' && currencyTo !== '' && currencyFrom !== currencyTo) {
            this.currency.conversionRateValue(currencyFrom, currencyTo).then(rate => {
                this.swapRequestForm.get('exchange_rate').setValue(rate);
            });
        }
        else {
            this.swapRequestForm.get('exchange_rate').setValue(0);
        }
    }
    // Update the amount  destination
    updateAmountDestination(currencyFrom, currencyTo, direction) {
        this.swapRequestForm.get('request').setValue(1);
        this.filterRequestData(currencyFrom, currencyTo);
        const amount = direction === 'from' ? this.swapRequestForm.value.amount_from : this.swapRequestForm.value.amount_to;
        if (currencyFrom && currencyTo && amount >= 0 && this.canUpdate) {
            this.getExchangeRate(currencyFrom, currencyTo);
            const param1 = direction === 'from' ? currencyFrom : currencyTo;
            const param2 = direction === 'from' ? currencyTo : currencyFrom;
            this.swapData.getConversionValue(param1, param2, amount).then(data => {
                this.canUpdate = false; // state value 
                direction === 'from' ? this.swapRequestForm.get('amount_to').setValue(data) : this.swapRequestForm.get('amount_from').setValue(data);
                this.getExchangeFees(currencyFrom, currencyTo, this.swapRequestForm.value.amount_from);
                // Get the exchange that match user request
                this.getMatchRequest(this.swapRequestForm.value);
            });
        }
        else {
            this.canUpdate = true;
        }
    }
};
PesuswapPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_20__["UiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_22__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__["ErrorService"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_8__["SwapService"] },
    { type: _services_swap_global_data_service__WEBPACK_IMPORTED_MODULE_17__["SwapGlobalDataService"] },
    { type: src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_13__["CurrencyService"] },
    { type: _my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_12__["ContributionService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_18__["EventService"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_19__["StorageData"] },
    { type: src_app_shared_service_constant_service__WEBPACK_IMPORTED_MODULE_16__["ConstantService"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_9__["SwapErrorService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"] }
];
PesuswapPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false },] }]
};
PesuswapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pesuswap',
        template: _raw_loader_pesuswap_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pesuswap_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PesuswapPage);



/***/ }),

/***/ "f3kw":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/archive/archive.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>     \r\n  <ion-row>\r\n    <ion-col>\r\n      <h4>{{ 'ARCHIVE_SWAP_TEXT' | translate }}</h4> \r\n      <p> {{ 'ARCHIVE_SWAP_MESSAGE' | translate }} <br/>\r\n        <b>\r\n        <ion-text color=\"warning\">{{requestData.amount_from}} {{requestData.infos_currency_from.name}}</ion-text> \r\n        <ion-icon name=\"arrow-forward\"></ion-icon> \r\n        <ion-text color=\"primary\">{{requestData.amount_to}} {{requestData.infos_currency_to.name}}</ion-text>\r\n      </b>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" fill=\"outline\" (click)=\"close()\">{{ 'NO_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\">\r\n      <ion-button color=\"warning\" (click)=\"archiveSwap()\">{{'YES_TEXT' | translate }}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "hRvo":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/swap-menu-option/swap-menu-option.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SwapMenuOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapMenuOptionComponent", function() { return SwapMenuOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_swap_menu_option_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./swap-menu-option.component.html */ "16BN");
/* harmony import */ var _swap_menu_option_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap-menu-option.component.scss */ "P3/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/pesuswap/services/swap-error.service */ "gWc9");
/* harmony import */ var _archive_swap_archive_swap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../archive-swap/archive-swap.component */ "Xh6L");
/* harmony import */ var _services_swap_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/swap.service */ "UrY2");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");











let SwapMenuOptionComponent = class SwapMenuOptionComponent {
    constructor(popoverController, swapError, modatCtrl, event, error, swapService, router) {
        this.popoverController = popoverController;
        this.swapError = swapError;
        this.modatCtrl = modatCtrl;
        this.event = event;
        this.error = error;
        this.swapService = swapService;
        this.router = router;
        this.requests = [];
    }
    ngOnInit() {
        this.getAllUserRequest();
    }
    // Close popover
    close() {
        this.popoverController.dismiss();
    }
    // Delete the swap request
    gotoSwapNotPaid() {
        this.close();
        this.router.navigate(['/dashboard/pesuswap/swap-not-paid']);
    }
    // Go the swap notifications
    gotoSwapNotifications() {
        this.close();
        this.router.navigate(['/dashboard/pesuswap/notifs']);
    }
    // can archive text
    canArchiveSwap(request) {
        let ican = false;
        if ((request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'expired'))) {
            ican = true;
        }
        return ican;
    }
    archiveSwap() {
        this.close();
        this.modatCtrl
            .create({
            component: _archive_swap_archive_swap_component__WEBPACK_IMPORTED_MODULE_8__["ArchiveSwapComponent"],
            componentProps: {
                swaps: this.requests
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.data === "archived") {
                    this.event.publish('update-request');
                }
            });
        });
    }
    //  Get all the user request
    getAllUserRequest() {
        this.requests = [];
        this.swapService.getAllUserSwapRequest()
            .subscribe((reponse) => {
            if (reponse && reponse.requests) {
                this.requests = reponse.requests;
                this.requests = this.requests.filter(data => { return this.canArchiveSwap(data); });
            }
        }, error => {
            if (error && error.error && error.error.message === "error") {
                if (error && error.error && error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.getAllUserRequest();
                        }
                    });
                }
            }
            else {
                this.swapError.manageWalletError(error);
            }
        });
    }
};
SwapMenuOptionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: src_app_dashboard_pesuswap_services_swap_error_service__WEBPACK_IMPORTED_MODULE_7__["SwapErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_10__["EventService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _services_swap_service__WEBPACK_IMPORTED_MODULE_9__["SwapService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SwapMenuOptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-swap-menu-option',
        template: _raw_loader_swap_menu_option_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_swap_menu_option_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SwapMenuOptionComponent);



/***/ }),

/***/ "kqoW":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/swap-edit/swap-edit.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'EDIT_SWAP_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-new\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>\r\n          <p class=\"ion-no-margin\">\r\n            {{ 'SWAP_DESCRIPTION_TEXT' | translate }}\r\n          </p>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <form [formGroup]=\"swapRequestForm\">\r\n          <ion-row class=\"ion-no-padding\">\r\n            <ion-col size=\"6\">\r\n              <ion-item class=\"swapAmount\">\r\n                <ion-input\r\n                  (ionChange)=\"updateAmount(swapRequestForm.value.currency_from,swapRequestForm.value.currency_to, 'from', swapRequestForm.value.exchange_rate,'exchange')\"\r\n                  type=\"number\"   formControlName=\"amount_from\" required></ion-input>\r\n                <span slot=\"end\"  class=\"slot-prefix ion-no-margin\">{{swapRequestForm.value.currency_from}}</span>\r\n              </ion-item>\r\n              <div class=\"ion-text-wrap\">\r\n                <ion-text color=\"dark\"><small>{{ 'AMOUNT_HAVE_TO_SWAP' | translate }}</small></ion-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item class=\"swapAmount\">\r\n                <ion-input\r\n                  (ionChange)=\"updateAmount(swapRequestForm.value.currency_from,swapRequestForm.value.currency_to,'to', swapRequestForm.value.exchange_rate,'exchange')\"\r\n                  type=\"number\"  formControlName=\"amount_to\" required></ion-input>\r\n                <span slot=\"end\" class=\"slot-prefix ion-no-margin\">{{swapRequestForm.value.currency_to}}</span>\r\n              </ion-item>\r\n              <div class=\"ion-text-wrap\">\r\n                <ion-text color=\"dark\"><small>{{ 'AMOUNT_WANT_TO_SWAP' | translate }}</small></ion-text>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <p> {{'EXCHANGE_RATE' | translate }} :</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"ion-align-items-stretch\">\r\n              <ion-item lines=\"none\" class=\"swapamount\">\r\n                <ion-input type=\"text\" formControlName=\"exchange_from\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"5\" class=\"ion-align-items-stretch\">\r\n              <ion-item class=\"swapamount\">\r\n                <ion-input\r\n                  (ionChange)=\"updateAmount(swapRequestForm.value.currency_from,swapRequestForm.value.currency_to,'to', swapRequestForm.value.exchange_rate,'rate')\"\r\n                  type=\"number\" formControlName=\"exchange_rate\" required>\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-align-items-stretch\">\r\n              <ion-item lines=\"none\" class=\"swapamount\">\r\n                {{swapRequestForm.value.currency_to}}\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <p>\r\n                {{'MATCHING_FEES_TEXT' | translate }}: {{swapRequestForm.value.fees}} {{swapRequestForm.value.currency_from}} \r\n              </p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-item class=\"no-background\">\r\n                <ion-label>{{ 'SWAP_TYPE_TEXT' | translate }}</ion-label>\r\n                <ion-select formControlName=\"type_swap_id\">\r\n                  <ion-select-option [value]=\"type.id\" *ngFor=\"let type of swapTypes\">{{ getType(type.description) }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row  *ngIf=\"swapRequestForm.value.type_swap_id === 1 && !canMakeRequest\">\r\n      <ion-col>\r\n        <ion-label>\r\n          <p class=\"ion-no-margin\">\r\n            {{ 'CANT_MAKE_INSTANT_SWAP_DESCRIPTION' | translate : {balance : ((swapRequestForm.value.amount_from +\r\n            swapRequestForm.value.fees) + ' ' + swapRequestForm.value.currency_from) } }}\r\n          </p>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-left\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"full\" color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\" (click)=\"editSwapRequest()\"\r\n        [disabled]=\"disableEdition()\">\r\n        {{ 'EDIT_TEXT' | translate }}\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button expand=\"full\" fill=\"outline\" color=\"warning\" class=\"ion-text-uppercase\" shape=\"round\"\r\n        (click)=\"closeModal('cancel')\">\r\n        {{ 'CANCEL_TEXT' | translate }}\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ }),

/***/ "llAx":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/pesuswap/paid-modal/paid-modal.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWlkLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "riJu":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/archive-swap/archive-swap.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" (click)=\"closeModal()\">\r\n        <ion-icon color=\"warning\" name=\"close\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center subtitle\">\r\n      {{ 'ARCHIVE_SWAP_TEXT' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n      <ion-searchbar placeholder=\"{{ 'M_NAME_TEXT' | translate }}\" type=\"text\" debounce=\"500\" (ionChange)=\"searchForInvitation($event)\" type=\"text\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n  <ion-grid *ngIf=\"listData && listData.length > 0 \">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item >\r\n            <ion-label>{{ 'ALL_SWAP_TEXT' | translate }}</ion-label>\r\n            <ion-checkbox slot=\"end\" (ionChange)=\"selectAll(option)\" [(ngModel)]=\"option\" [checked]=\"option\" [value]=\"option\"></ion-checkbox>\r\n          </ion-item>\r\n          <ion-item  *ngFor=\"let swap of listData; let i = index\">\r\n            <ion-label>\r\n              <ion-text *ngIf=\"swap.data && swap.data.infos_user_from\" color=\"primary\">\r\n                <h2>\r\n                 <span> {{ 'INITIATOR_TEXT' | translate }} : </span> <b>{{ swap.data.infos_user_from && swap.data.infos_user_from.firstname ? swap.data.infos_user_from.firstname   : swap.data.infos_user_from.lastname ?  swap.data.infos_user_from.lastname : ('ANONYM_USER_TEXT' | translate)}}</b>\r\n               </h2>\r\n             </ion-text>\r\n              <h2>\r\n                <ion-text color=\"warning\">{{ swap.data.user_id_from === currentUserData.id ? swap.data.amount_from : swap.data.amount_to }} \r\n                  {{ swap.data.user_id_from === currentUserData.id ? swap.data.infos_currency_from.name : swap.data.infos_currency_to.name}}\r\n                </ion-text> \r\n                <ion-icon name=\"arrow-forward\"></ion-icon> \r\n                <ion-text color=\"primary\">{{ swap.data.user_id_from === currentUserData.id ? swap.data.amount_to : swap.data.amount_from }} \r\n                  {{ swap.data.user_id_from === currentUserData.id ? swap.data.infos_currency_to.name : swap.data.infos_currency_from.name}}\r\n                </ion-text>\r\n              </h2>\r\n              <p>                \r\n                <ion-text color=\"dark\"><span class=\"ion-float-left\"> {{swap.data.type_swap_id === 1 ? ('INSTANT_TEXT' | translate) : ('DELAYED_TEXT' | translate)}}</span></ion-text>\r\n              </p>\r\n            </ion-label>\r\n            <ion-checkbox slot=\"end\" (ionChange)=\"updateTontineSelected()\" [(ngModel)]=\"listData[i].select\" [checked]=\"listData[i].select\" [value]=\"listData[i].select\"></ion-checkbox>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"250px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\"  [disabled]=\"loading || swapSelected && swapSelected.length === 0\"\r\n        (click)=\"confirmArchiveMessage()\"\r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\">\r\n        {{ 'MENU_ARCHIVE_TEXT' | translate }}\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "sKCK":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/swap-menu/swap-menu.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"swap-menu-popover\">\r\n  <ion-item lines=\"none\" *ngIf=\"canEditSwap(curentParams)\"  (click)=\"onEditSwapModal()\">\r\n    <ion-label >\r\n      {{'EDIT_TEXT' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item  *ngIf=\"canDeleteSwap(curentParams)\" lines=\"none\" (click)=\"onDeletePopover()\" >\r\n    <ion-label>\r\n      {{ 'REMOVE_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"canArchiveSwap(curentParams)\" lines=\"none\" (click)=\"onArchivePopover()\" >\r\n    <ion-label>\r\n      {{ 'MENU_ARCHIVE_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "tQ8a":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/pesuswap/pesuswap.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXN1c3dhcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "uXuT":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pesuswap/paid-modal/paid-modal.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'PAY_SWAP_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-contribute\">\r\n  <h4 class=\"ion-padding-horizontal\"><small>{{ 'PAY_SWAP_MSG' | translate : {swapAmount : swapData.amount + ' ' + swapData.currency  } }} : <b>{{ exchange }}</b></small></h4>\r\n  <app-paidmode-swap [amountPay]=\"amount\"  ></app-paidmode-swap>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute()\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=pesuswap-pesuswap-module.js.map