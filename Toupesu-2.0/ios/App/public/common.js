(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2w9s":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/my-wallet-menu/my-wallet-menu.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS13YWxsZXQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "3kKL":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/tontines-events/services/event-error.service.ts ***!
  \***************************************************************************/
/*! exports provided: EventErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventErrorService", function() { return EventErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");




let EventErrorService = class EventErrorService {
    constructor(translate, ui) {
        this.translate = translate;
        this.ui = ui;
    }
    manageEventError(error) {
        if (error && error.error && error.error.tontine_event_already_exist) {
            this.translate.get('TONTINE_EVENT_ALREADY_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.tontine_event_not_found) {
            this.translate.get('TONTINE_EVENT_DELETE_ERROR1').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.tontine_event_already_exist) {
            this.translate.get('M_TONTINE_EVENT_ALREADY_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.date_error) {
            this.translate.get('M_TONTINE_EVENT_DATE_ERROR').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
    }
};
EventErrorService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
EventErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventErrorService);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "Jc16":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/my-wallet-menu/my-wallet-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: MyWalletMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletMenuComponent", function() { return MyWalletMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_wallet_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-wallet-menu.component.html */ "Ym2N");
/* harmony import */ var _my_wallet_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-wallet-menu.component.scss */ "2w9s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let MyWalletMenuComponent = class MyWalletMenuComponent {
    constructor(popoverController, router) {
        this.popoverController = popoverController;
        this.router = router;
    }
    ngOnInit() { }
    closeMyWalletMenu() {
        this.popoverController.dismiss();
    }
    // Open the tontines page
    openTontines() {
        this.closeMyWalletMenu();
        this.router.navigate(['/dashboard/my-tontines']);
    }
    // Show the wallet transaction history
    walletTransaction() {
        this.closeMyWalletMenu();
        this.router.navigate(['/dashboard/my-wallet/history']);
    }
    // Show the wallet withdrawal
    walletWithdrawal() {
        this.closeMyWalletMenu();
        this.router.navigate(['/dashboard/my-wallet/withdrawal']);
    }
};
MyWalletMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MyWalletMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-wallet-menu',
        template: _raw_loader_my_wallet_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_wallet_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyWalletMenuComponent);



/***/ }),

/***/ "M78w":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/service/wallet-error.service.ts ***!
  \*********************************************************************/
/*! exports provided: WalletErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletErrorService", function() { return WalletErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");




let WalletErrorService = class WalletErrorService {
    constructor(translate, ui) {
        this.translate = translate;
        this.ui = ui;
    }
    manageWalletError(error) {
        if (error.error.remplir_tous_les_champs) {
            this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG3').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.bank_name_already_exist) {
            this.translate.get('BAMK_NAME_ALREADY_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.type_payment_not_exist) {
            this.translate.get('TOPUP_PAYMENT_NOT_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.country_not_exist) {
            this.translate.get('TOPUP_COUNTRY_NOT_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.device_arrivee_not_exist) {
            this.translate.get('TOPUP_DEVICE_IN_NOT_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.device_depart_not_exist) {
            this.translate.get('TOPUP_DEVICE_OUT_NOT_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.parameter_not_found) {
            this.translate.get('TOPUP_MSG5').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.invalid_payment) {
            this.translate.get('TOPUP_MSG6').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.no_match_type_payment_to_device) {
            this.translate.get('TOPUP_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.confirm_payment) {
            this.translate.get('TOPUP_MSG6').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.user_bank_profile_id_not_exist) {
            this.translate.get('BANK_NAME_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.method_payment_id_not_exist) {
            this.translate.get('PAYMENT_METHOD_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.solde_wallet_insufisant) {
            this.translate.get('INSUFFICIENT_WALLET_BALANCE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.solde_payeur_insuffisant) {
            this.translate.get('INSUFFICIENT_BUYER_BALANCE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
    }
};
WalletErrorService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
WalletErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WalletErrorService);



/***/ }),

/***/ "QzGi":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/user/service/user-error.service.ts ***!
  \**************************************************************/
/*! exports provided: UserErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserErrorService", function() { return UserErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");




let UserErrorService = class UserErrorService {
    constructor(translate, ui) {
        this.translate = translate;
        this.ui = ui;
    }
    manageUserError(error) {
        if (error.error.remplir_tous_les_champs) {
            this.translate.get('TOPUP_MSG2').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_number_is_already_used) {
            this.translate.get('M_PHONE_ALREADY_USE').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.bad_digit_code) {
            this.translate.get('M_CODE_INVALID').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.password_not_match_email) {
            this.translate.get('TONTINE_NEW_TEXT24').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.country_id_not_exist) {
            this.translate.get('REGISTER_COUNTRY_MSG').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_number_is_already_used) {
            this.translate.get('REGISTER_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_is_invalid) {
            this.translate.get('REGISTER_PHONE_INVALID').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error.tontine_id_not_exist) {
            this.translate.get('TONTINE_INVITE_TEXT10').subscribe(data => {
                this.ui.presentToast(data);
            });
        }
        if (error.error.username_exist_already) {
            this.translate.get('USER_DETAIL_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_exist_already) {
            this.translate.get('M_PHONE_ALREDY_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.email_exist_already) {
            this.translate.get('M_EMAIL_ALREADY_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
    }
};
UserErrorService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
UserErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserErrorService);



/***/ }),

/***/ "WDdi":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/contact/service/contact.service.ts ***!
  \**************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/api.service */ "6rCG");



let ContactService = class ContactService {
    constructor(api) {
        this.api = api;
    }
    // Send feedbaks to administration
    saveFeedbacks(feedbacks) {
        return this.api.post('user/feedback/v1/submit', feedbacks);
    }
    // Get all the feedbacks
    getFeedbacks() {
        return this.api.get('user/feedback/v1/getAll');
    }
    // Send contact to administration
    sendContact(contact) {
        return this.api.post('contact/v1/save', contact);
    }
    // Send email infos for newsletters to TOUPESU
    sendEmailForNewsLetter(infos) {
        return this.api.post('newsletter/get/infos', infos);
    }
};
ContactService.ctorParameters = () => [
    { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ }),

/***/ "Ym2N":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-wallet/my-wallet-menu/my-wallet-menu.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"wallet-menu-popover\">\n  <ion-item (click)=\"walletWithdrawal()\"  lines=\"none\">\n    <ion-label>\n     {{ 'TRANSACTION_WITHDRAWAL' | translate }}\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"walletTransaction()\" lines=\"none\">\n    <ion-label>\n     {{ 'TRANSACTIONS_HISTORY' | translate }}\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"openTontines()\"  lines=\"none\">\n    <ion-label>\n     {{ 'TONTINE_LIST_TEXT1' | translate }}\n    </ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "aZHn":
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/services/wallet-tontine-error.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: WalletTontineErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTontineErrorService", function() { return WalletTontineErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");




let WalletTontineErrorService = class WalletTontineErrorService {
    constructor(translate, ui) {
        this.translate = translate;
        this.ui = ui;
    }
    // Manage wallet tontine error 
    manageWalletTontineError(error) {
        if (error && error.error && error.error.remplir_tous_les_champs) {
            this.translate.get('ERROR_FUFILLS_ALL_FIELDS').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.reference_transaction_not_exist) {
            this.translate.get('REFERENCE_NOT_EXIST_TEXT').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.user_not_authorize) {
            this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.tontine_bank_profile_id_not_exist) {
            this.translate.get('ERROR_BANK_PROFILE_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.method_payment_id_not_exist) {
            this.translate.get('ERROR_BANK_PAYMENT_METHOD_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.solde_wallet_insufisant) {
            this.translate.get('ERROR_BANK_WALLET_BALANCE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.user_bank_profile_id_not_exist) {
            this.translate.get('ERROR_BANK_PROFILE_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.type_caisse_tontine_not_exist) {
            this.translate.get('ERROR_TYPE_CAISSE_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.user_not_tontine_admin) {
            this.translate.get('ERROR_NOT_ADMIN').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.bank_name_already_exist) {
            this.translate.get('ERROR_BANKNAME_ALREADY_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.tontine_id_not_exist) {
            this.translate.get('ERROR_TONTINE_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.withdraw_request_id_not_found) {
            this.translate.get('ERROR_WITHDRAWAL_REQUEST_NOT_FOUND').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.user_not_authorized) {
            this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.seance_id_not_exist) {
            this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.solde_payeur_insuffisant) {
            this.translate.get('INSUFFICIENT_BUYER_BALANCE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
    }
};
WalletTontineErrorService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
WalletTontineErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WalletTontineErrorService);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "dPC7":
/*!****************************************************!*\
  !*** ./src/app/auth/service/auth-error.service.ts ***!
  \****************************************************/
/*! exports provided: AuthErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthErrorService", function() { return AuthErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");




let AuthErrorService = class AuthErrorService {
    constructor(translate, ui) {
        this.translate = translate;
        this.ui = ui;
    }
    manageAuthError(error) {
        if (error.error.remplir_tous_les_champs) {
            this.translate.get('TOPUP_MSG2').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_number_is_already_used) {
            this.translate.get('M_PHONE_ALREADY_USE').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.bad_digit_code) {
            this.translate.get('M_CODE_INVALID').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.password_not_match_email) {
            this.translate.get('TONTINE_NEW_TEXT24').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.country_id_not_exist) {
            this.translate.get('REGISTER_COUNTRY_MSG').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_number_is_already_used) {
            this.translate.get('REGISTER_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_is_invalid) {
            this.translate.get('REGISTER_PHONE_INVALID').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error.tontine_id_not_exist) {
            this.translate.get('TONTINE_INVITE_TEXT10').subscribe(data => {
                this.ui.presentToast(data);
            });
        }
        if (error.error.username_exist_already) {
            this.translate.get('USER_DETAIL_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.phone_exist_already) {
            this.translate.get('M_PHONE_ALREDY_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.email_exist_already) {
            this.translate.get('M_EMAIL_ALREADY_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
    }
};
AuthErrorService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
AuthErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthErrorService);



/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common.js.map