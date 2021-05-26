(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-wallet-my-wallet-module"],{

/***/ "Dz5d":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/my-wallet/my-wallet.module.ts ***!
  \*********************************************************/
/*! exports provided: MyWalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPageModule", function() { return MyWalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-wallet.page */ "omxy");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-wallet-menu/my-wallet-menu.component */ "Jc16");
/* harmony import */ var _top_up_top_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-up/top-up.component */ "cPJY");










const routes = [
    {
        path: '',
        component: _my_wallet_page__WEBPACK_IMPORTED_MODULE_6__["MyWalletPage"]
    }
];
let MyWalletPageModule = class MyWalletPageModule {
};
MyWalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [
            _my_wallet_page__WEBPACK_IMPORTED_MODULE_6__["MyWalletPage"],
            _my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_8__["MyWalletMenuComponent"],
            _top_up_top_up_component__WEBPACK_IMPORTED_MODULE_9__["TopUpComponent"]
        ],
        entryComponents: [
            _my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_8__["MyWalletMenuComponent"]
        ]
    })
], MyWalletPageModule);



/***/ }),

/***/ "QYh+":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/my-wallet/my-wallet.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS13YWxsZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "cPJY":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/top-up/top-up.component.ts ***!
  \****************************************************************/
/*! exports provided: TopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpComponent", function() { return TopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-up.component.html */ "rHRy");
/* harmony import */ var _top_up_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-up.component.scss */ "hrI0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/contribution.service */ "US41");
/* harmony import */ var src_app_dashboard_my_wallet_service_wallet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/my-wallet/service/wallet.service */ "68js");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/api.service */ "6rCG");
/* harmony import */ var src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/currency.service */ "GmDD");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dashboard/my-wallet/service/wallet-error.service */ "M78w");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
var TopUpComponent_1;





















let TopUpComponent = TopUpComponent_1 = class TopUpComponent {
    constructor(fb, userService, zone, ui, api, paymentData, storage, currency, contribution, platform, alertController, wallet, tontine, errorService, location, translate, error, formUtil, walletError, router) {
        this.fb = fb;
        this.userService = userService;
        this.zone = zone;
        this.ui = ui;
        this.api = api;
        this.paymentData = paymentData;
        this.storage = storage;
        this.currency = currency;
        this.contribution = contribution;
        this.platform = platform;
        this.alertController = alertController;
        this.wallet = wallet;
        this.tontine = tontine;
        this.errorService = errorService;
        this.location = location;
        this.translate = translate;
        this.error = error;
        this.formUtil = formUtil;
        this.walletError = walletError;
        this.router = router;
        this.currentUser = this.userService.getUserData();
        this.cron = null;
        this.timeOut = null;
        this.loadingOperator = false;
        this.refresher = false;
        this.loading = false;
        this.errorPhone = false;
        this.states = [];
        this.paymentMethods = [];
        this.listOfcountries = [];
        this.defautCountry = null;
        this.paypalMessage = '';
        this.reference = this.formUtil.getRandomId();
        this.tontineData = this.tontine.getCurrentTontineData();
        this.allPaymentMethods = [];
        this.contributionData = this.contribution.getContributionData();
        this.isMTNpayment = false;
        this.paymentLink = '';
        this.currentBalance = [];
        this.paypalLoading = false;
        this.loadingBalance = false;
        this.paypal_initialized = false;
        TopUpComponent_1.montant = 0;
        this.refernceId = '';
        this.hardwareBackButton();
    }
    ngOnInit() {
        this.initFormMessage();
        this.initPaymentForm();
        this.getAllMethodPaymentType();
        this.getCurrentBalance();
    }
    /******************************** START FORM  SERVICES *********************************************/
    // Form getters
    get phone() {
        return this.userPayMethodForm.get('phone');
    }
    get amountError() {
        return this.userPayMethodForm.get('montantSansFees');
    }
    get country() {
        return this.userPayMethodForm.get('country_id');
    }
    get device_name() {
        return this.userPayMethodForm.get('device_name');
    }
    get payementtype() {
        return this.userPayMethodForm.get('typePaymentIndex');
    }
    // Init form message
    initFormMessage() {
        this.translate.get(['REGISTER_PHONE_REQUIRED', 'AMOUNT_REQUIRED', 'PAID_MODE_REQUIRED', 'M_COUNTRY_REQUIRED'])
            .subscribe(value => {
            this.validationMessages = {
                payementtype: [
                    { type: 'required', message: value.PAID_MODE_REQUIRED }
                ],
                phone: [
                    { type: 'required', message: value.REGISTER_PHONE_REQUIRED },
                ],
                amount: [
                    { type: 'required', message: value.AMOUNT_REQUIRED }
                ],
                country_id: [
                    { type: 'required', message: value.M_COUNTRY_REQUIRED }
                ]
            };
        });
    }
    // Init form 
    initPaymentForm() {
        const currentPayment = this.paymentData.getDefaultPaymentMethod();
        this.userPayMethodForm = this.fb.group({
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country_prefix: [''],
            countryId: [''],
            handleFees: [''],
            handleFeesType: [''],
            device_depart: [''],
            device_arrivee: [''],
            montant_device_depart: [''],
            montant_device_arrivee: [''],
            device_name: [''],
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            currencyLabel: [''],
            pay_token: [''],
            url: [''],
            montant: [''],
            montantSansFees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            montantTotal: [''],
            type_payment_id: [currentPayment ? currentPayment.typepaiement_id : ''],
            type_payment_name: [currentPayment ? currentPayment.name : ''],
            typePaymentIndex: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: [currentPayment && this.formUtil.validatePhone(currentPayment.numero_compte) ? currentPayment.numero_compte : ''],
            numero: [''],
            operator: ['']
        });
    }
    // Remove space
    removeSpace() {
        this.userPayMethodForm.get('montantSansFees').setValue(this.paymentData.removeInputSpace(this.userPayMethodForm.value.montantSansFees));
    }
    // Remove space
    removeSpace1() {
        this.userPayMethodForm.get('phone').setValue(this.paymentData.removeInputSpace(this.userPayMethodForm.value.phone));
    }
    // Refresh the list
    refreSher(event) {
        this.refresher = true;
        this.getAllMethodPaymentType();
        this.getCurrentBalance();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    // check if it is not  mobile operator
    checkMobileOperator() {
        return this.paymentData.isMobileOperator(this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
    }
    // can show paypal message
    canShowPaypalMessage() {
        return this.userPayMethodForm.value.montantSansFees && this.paymentData.hasPaypalMessage(this.paypalMessage, this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
    }
    // can show  paypal button
    canShowPaypalButton() {
        return this.paymentData.hasPaypalButton(this.paypal_initialized, this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
    }
    // can make payment 
    canPay() {
        return this.paymentData.canShowPayment(this.userPayMethodForm.valid, this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex], this.userPayMethodForm.value.phone, this.errorPhone);
    }
    // check if emial or phone is valid
    checckEmailOrPhone(inputValue, index) {
        this.removeSpace1();
        this.userPayMethodForm.get('type_payment_id').setValue(this.paymentMethods[index].id);
        switch (this.paymentMethods[index].name) {
            case 'ORANGE MONEY':
                this.errorPhone = !this.formUtil.validatePhone(inputValue);
                if (!this.errorPhone) {
                    this.userPayMethodForm.get('numero').setValue(this.userPayMethodForm.value.country_prefix +
                        '' + this.userPayMethodForm.value.phone);
                }
                break;
            case 'MTN MOBILE MONEY':
                this.errorPhone = !this.formUtil.validatePhone(inputValue);
                if (!this.errorPhone) {
                    this.userPayMethodForm.get('numero').setValue(this.userPayMethodForm.value.country_prefix +
                        '' + this.userPayMethodForm.value.phone);
                }
                break;
            default:
                break;
        }
    }
    // get the current balamce of the user
    getCurrentBalance() {
        this.loadingBalance = true;
        this.contribution.getUserWallet().subscribe((reponse) => {
            this.loadingBalance = false;
            if (reponse && reponse.message === 'success') {
                this.storage.set('current-balance', reponse.PorteMonnaieUser);
                this.currentBalance = reponse.PorteMonnaieUser;
            }
        }, error => {
            this.loadingBalance = false;
            if (error && error.error && error.error.user_not_found) {
                this.loadingBalance = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getCurrentBalance();
                    }
                    else {
                        this.loadingBalance = false;
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
    // get all payment method
    getAllMethodPaymentType() {
        this.loadingOperator = true;
        this.userService.getAllMethodPaymentType().subscribe((reponse) => {
            this.paymentMethods = [];
            this.loadingOperator = false;
            if (reponse && reponse.typePayment && reponse.typePayment.length > 0) {
                this.paymentMethods = this.paymentData.formatPaymentMethodResponseContribution(reponse.typePayment);
            }
            this.allPaymentMethods = this.paymentMethods;
            // Get list of countries
            this.getCountries(false);
        }, error => {
            this.loadingOperator = false;
            this.errorService.manageError(error);
        });
    }
    // Set defaulft country parameter
    setDefaultCountry() {
        // Get the list of country
        let countryExist = false;
        this.listOfcountries.forEach(countryId => {
            if (countryId === this.userPayMethodForm.value.country_id) {
                this.updateCurrencyCountry(this.userPayMethodForm.value.country_id);
                countryExist = true;
            }
        });
        // We set the default coutry
        if (!countryExist) {
            this.userPayMethodForm.get('country_id').setValue(this.defautCountry);
            this.updateCurrencyCountry(this.defautCountry);
        }
    }
    // Update the country info country prfix
    updateCurrencyCountry(countryId) {
        this.zone.run(() => {
            this.paymentMethods = [];
        });
        setTimeout(() => {
            this.states.forEach(state => {
                if (parseInt(state.country_id, 10) === parseInt(countryId, 10)) {
                    this.updateFormData(state);
                }
            });
        }, 200);
    }
    // Set the default country
    getCurrentCountry(refresher) {
        const userCountry = this.location.getCurrentUserCountry();
        if (userCountry) {
            if (userCountry.active === 1) {
                setTimeout(() => {
                    this.updateFormData(userCountry);
                }, 200);
            }
            else {
                this.setDefaultCountry();
            }
        }
        else {
            this.location.getCurrentCountryInfo(refresher).then((country) => {
                if (country) {
                    this.defaultState = country.settings;
                    if (this.defaultState.active === 1) {
                        setTimeout(() => {
                            this.updateFormData(this.defaultState);
                        }, 200);
                    }
                    else {
                        this.setDefaultCountry();
                    }
                }
                else {
                    this.setDefaultCountry();
                }
            }).catch(error => {
            });
        }
    }
    // Get all countries
    getCountries(refresher) {
        this.location.getAllCountries(refresher).then((countries) => {
            countries.forEach(country => {
                if (country.active === 1) {
                    this.listOfcountries.push(country.country_id);
                    if (country.default_country === 'yes') {
                        this.defautCountry = country.country_id;
                    }
                }
            });
            this.states = this.paymentData.formatCountriesData(countries);
            // Get the the current country
            this.getCurrentCountry(false);
        });
    }
    // update the form data with country data
    updateFormData(country) {
        if (country) {
            this.userPayMethodForm.get('country_id').setValue(country.country_id);
            this.userPayMethodForm.get('country_prefix').setValue(country.country_prefixe);
            this.userPayMethodForm.get('currency').setValue(country.device_name);
            this.userPayMethodForm.get('device_arrivee').setValue(country.device_name);
            this.userPayMethodForm.get('handleFees').setValue(country.handling_fees);
            this.userPayMethodForm.get('handleFeesType').setValue(country.type_handling_fees);
            this.userPayMethodForm.get('currencyLabel').setValue(country.currency_label);
            this.updatePaymentsMethods(country.country_id);
        }
    }
    updatePaymentsMethods(countryId) {
        // update the payment method
        const paymentsMethods = [];
        this.paymentMethods = [];
        this.allPaymentMethods.forEach(payment => {
            if (payment.country_id === countryId) {
                paymentsMethods.push(payment);
            }
        });
        this.paymentMethods = paymentsMethods;
        if (this.paymentMethods && this.paymentMethods.length > 0) {
            this.updatePaymentMethod(0);
        }
    }
    // Update the form data with payment method data
    updatePaymentMethod(index) {
        if (this.paymentMethods && this.paymentMethods[index]) {
            this.userPayMethodForm.get('type_payment_id').setValue(this.paymentMethods[index].id);
            this.userPayMethodForm.get('type_payment_name').setValue(this.paymentMethods[index].name);
            this.userPayMethodForm.get('device_depart').setValue(this.paymentMethods[index].currency);
            this.userPayMethodForm.get('device_name').setValue(this.paymentMethods[index].currency);
            this.userPayMethodForm.get('handleFees').setValue(this.paymentMethods[index].handling_fees);
            this.userPayMethodForm.get('handleFeesType').setValue(this.paymentMethods[index].type_handling_fees);
            this.zone.run(() => {
                this.userPayMethodForm.get('typePaymentIndex').setValue(index);
            });
        }
        if (this.paymentMethods && this.paymentMethods[index] && this.paymentMethods[index].name === 'PAYPAL') {
            this.paypal_initialized = false;
        }
        this.updateAmount();
    }
    // Calucalte the payment with handlfees
    updateAmount() {
        this.removeSpace();
        let amount = 0;
        amount = parseFloat(this.userPayMethodForm.value.montantSansFees) > 0 ? parseFloat(this.userPayMethodForm.value.montantSansFees) : 0;
        if (parseFloat(this.userPayMethodForm.value.handleFees) > 0) {
            const handlefees = parseFloat(this.userPayMethodForm.value.handleFees) > 0 ? parseFloat(this.userPayMethodForm.value.handleFees) : 1;
            if (this.userPayMethodForm.value.handleFeesType === 'pourcentage') {
                amount = amount * (1 + (handlefees / 100));
            }
            else {
                amount = amount + handlefees;
            }
        }
        if (this.userPayMethodForm.value.currency === 'XAF' || this.userPayMethodForm.value.currency === 'XOF' || this.userPayMethodForm.value.currency === 'ZAR') {
            amount = Math.ceil(amount);
        }
        else {
            amount = parseFloat(Number(amount).toFixed(2));
        }
        this.userPayMethodForm.get('montantTotal').setValue(amount);
        this.userPayMethodForm.get('montant_device_arrivee').setValue(this.userPayMethodForm.value.montantSansFees);
        this.updatePayPalAmount();
    }
    // step 1 :  Show payment confirmation dialog with handle fees
    showPayment(data) {
        switch (this.paymentMethods[data.typePaymentIndex].name) {
            case 'ORANGE MONEY':
                this.updateParametersOrange();
                break;
            case 'MTN MOBILE MONEY':
                this.updateParametersMtn();
                break;
            case 'OZOW':
                this.updateParametersOzow();
                break;
            default:
                break;
        }
    }
    /******************************** END FORM  SERVICES *********************************************/
    /******************************** START ORANGE PAYMENT *********************************************/
    updateParametersOrange() {
        if (this.userPayMethodForm.value.currency === this.userPayMethodForm.value.device_name) {
            this.userPayMethodForm.get('montant').setValue(this.userPayMethodForm.value.montantTotal);
            this.userPayMethodForm.get('device_name').setValue(this.userPayMethodForm.value.currency);
            this.userPayMethodForm.get('numero').setValue(this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone);
            this.userPayMethodForm.get('operator').setValue('orange');
            this.userPayMethodForm.get('montant_device_depart').setValue(this.userPayMethodForm.value.montantSansFees); // not use now
            const messageConfirmation = { amount: this.userPayMethodForm.value.montantTotal, currency: this.userPayMethodForm.value.currency };
            this.confirmWalletMessage(messageConfirmation, this.userPayMethodForm.value);
        }
        else {
            this.translate.get('TOPUP_MSG1').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
    }
    /******************************** END ORANGE PAYMENT *********************************************/
    /******************************** START MTN PAYMENT *********************************************/
    updateParametersMtn() {
        if (this.userPayMethodForm.value.currency === this.userPayMethodForm.value.device_name) {
            this.userPayMethodForm.get('montant').setValue(this.userPayMethodForm.value.montantTotal);
            this.userPayMethodForm.get('device_name').setValue(this.userPayMethodForm.value.currency);
            this.userPayMethodForm.get('numero').setValue(this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone);
            this.userPayMethodForm.get('operator').setValue('MTN');
            this.userPayMethodForm.get('montant_device_depart').setValue(this.userPayMethodForm.value.montantSansFees); // not use now
            const messageConfirmation = { amount: this.userPayMethodForm.value.montantTotal, currency: this.userPayMethodForm.value.currency };
            this.confirmWalletMessage(messageConfirmation, this.userPayMethodForm.value);
        }
        else {
            this.translate.get('TOPUP_MSG1').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
    }
    /******************************** END MTN PAYMENT *********************************************/
    /******************************** START OZOW PAYMENT *********************************************/
    updateParametersOzow() {
        if (this.userPayMethodForm.value.currency === this.userPayMethodForm.value.device_name) {
            this.userPayMethodForm.get('montant').setValue(this.userPayMethodForm.value.montantTotal);
            this.userPayMethodForm.get('device_name').setValue(this.userPayMethodForm.value.currency);
            this.userPayMethodForm.get('operator').setValue('ozow');
            this.userPayMethodForm.get('numero').setValue(this.userPayMethodForm.value.country_prefix + this.currentUser.phone);
            this.userPayMethodForm.get('montant_device_depart').setValue(this.userPayMethodForm.value.montantSansFees); // not use now
            const messageConfirmation = { amount: this.userPayMethodForm.value.montantTotal, currency: this.userPayMethodForm.value.currency };
            this.confirmWalletMessage(messageConfirmation, this.userPayMethodForm.value);
        }
        else {
            this.translate.get('TOPUP_MSG1').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
    }
    /******************************** END OZOW PAYMENT *********************************************/
    /******************************** START PAYPAL PAYMENT *********************************************/
    // Update the paypal Amount
    updatePayPalAmount() {
        if (this.userPayMethodForm.value.montantTotal > 0) {
            if (this.paymentMethods && this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex] && this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex].name === 'PAYPAL') {
                if (this.userPayMethodForm.value.currency !== this.userPayMethodForm.value.device_name) {
                    this.currency.convert(this.userPayMethodForm.value.currency, this.userPayMethodForm.value.device_name, this.userPayMethodForm.value.montantTotal).then(montantAvecFees => {
                        if (montantAvecFees) {
                            this.userPayMethodForm.get('montant').setValue(montantAvecFees ? montantAvecFees : 0);
                            this.translate.get('PAIDMODE_MSG2').subscribe(value => {
                                this.paypalMessage = `${value}  ${this.userPayMethodForm.value.montantTotal} ${this.userPayMethodForm.value.currency} =
                ${this.userPayMethodForm.value.montant} ${this.userPayMethodForm.value.device_name}`;
                                // set paypal amount to pay
                                TopUpComponent_1.montant = this.userPayMethodForm.value.montant;
                                this.setupPayPalPay();
                            });
                        }
                        else {
                            this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
                                this.paypalMessage = value;
                            });
                        }
                    });
                }
                else {
                    this.userPayMethodForm.get('montant').setValue(this.userPayMethodForm.value.montantTotal);
                    this.translate.get('PAIDMODE_MSG2').subscribe(value => {
                        this.paypalMessage = `${value}  ${this.userPayMethodForm.value.montant} ${this.userPayMethodForm.value.currency}`;
                        // set paypal amount to pay
                        TopUpComponent_1.montant = this.userPayMethodForm.value.montant;
                        this.setupPayPalPay();
                    });
                }
            }
        }
    }
    // Update parameters PAYPAL
    updateParametersPaypal(payToken) {
        this.userPayMethodForm.get('pay_token').setValue(payToken);
        this.userPayMethodForm.get('operator').setValue('paypal');
        this.userPayMethodForm.get('device_depart').setValue(this.userPayMethodForm.value.device_name);
        if (this.userPayMethodForm.value.currency !== this.userPayMethodForm.value.device_name) {
            this.currency.convert(this.userPayMethodForm.value.currency, this.userPayMethodForm.value.device_name, this.userPayMethodForm.value.montantSansFees)
                .then(montantSansFees => {
                if (montantSansFees) {
                    this.userPayMethodForm.get('montant_device_depart').setValue(montantSansFees ? montantSansFees : 0);
                    this.recharcheWithConversionOperator(this.userPayMethodForm.value);
                }
                else {
                    this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
                        this.ui.presentToast(value);
                    });
                }
            });
        }
        else {
            this.userPayMethodForm.get('montant_device_depart').setValue(this.userPayMethodForm.value.montantSansFees);
            this.recharcheWithConversionOperator(this.userPayMethodForm.value);
        }
    }
    setupPayPalPay() {
        if (!this.paypal_initialized) {
            this.initPayPal();
        }
    }
    initPayPal() {
        if (TopUpComponent_1.montant > 0 && this.paypalbuttoncontainer) {
            this.paypalLoading = true;
            this.paypal_initialized = true;
            let paypalbuttoncontainer = this.paypalbuttoncontainer.nativeElement;
            let _this = this;
            if (paypal) {
                paypal.Button.render({
                    env: 'production',
                    style: {
                        size: 'responsive',
                        color: 'gold',
                        shape: 'pill',
                        label: 'checkout',
                        tagline: false
                    },
                    client: {
                        sandbox: 'ARIMcMamksC74CLp7Zavgn62RsKK0XDfjePxjU9gsWmcdzyI3AYz3PwADIktvUgCdhAwWCXPaBzCckOC',
                        production: 'AVdCN0ymBsPer15VtLbeNoZ3vkjkhap6vXoxwsWF3B0H4GM_mVQ5GVpJ2h4-G_AlVVIsBYWx4JpVVxLT'
                    },
                    // Show the buyer a 'Pay Now' button in the checkout flow
                    commit: true,
                    payment: function (data, actions) {
                        return actions.payment.create({
                            payment: {
                                transactions: [
                                    {
                                        amount: {
                                            total: TopUpComponent_1.montant,
                                            currency: _this.userPayMethodForm.value.device_name
                                        },
                                        description: 'Toupesu'
                                    }
                                ]
                            }
                        });
                    },
                    // onAuthorize() is called when the buyer approves the payment
                    onAuthorize: function (data, actions, error) {
                        if (error) {
                            _this.exitPayment();
                        }
                        if (error === 'INSTRUMENT_DECLINED') {
                            _this.exitPayment();
                        }
                        // Make a call to the REST api to execute the payment
                        return actions.payment.execute().then(function () {
                            const params = {
                                refID: _this.reference,
                                amount: TopUpComponent_1.montant,
                                moneyCode: _this.userPayMethodForm.value.device_name,
                                product: 'Toupesu',
                                paypalID: data.paymentToken.split('-')[1]
                            };
                            _this.api.post('livepaygateway/paypal/savePayRequest', JSON.stringify(params)).subscribe((ans) => {
                                if (ans && ans.success) {
                                    _this.updateParametersPaypal(data.paymentToken.split('-')[1]);
                                }
                            }, error => {
                                _this.updateParametersPaypal(data.paymentToken.split('-')[1]);
                            });
                        });
                    },
                    onCancel: function (data, actions) {
                        _this.exitPayment();
                    },
                    onClick: (data, actions) => {
                        _this.translate.get('TOPUP_TEXT1').subscribe(value => {
                            _this.ui.presentToast(value);
                        });
                    }
                }, paypalbuttoncontainer);
            }
            setTimeout(() => {
                this.paypalLoading = false;
            }, 2000);
        }
    }
    /******************************** END PAYPAL PAYMENT *********************************************/
    /******************************** PAYMENT SERVICES *********************************************/
    // comfrim wallet Message
    confirmWalletMessage(params, walletParam) {
        this.translate.get(['PAIDMODE_MSG2', 'TOPUP_CONFRIM_MSG1', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(value => {
            const messageText = `${value.PAIDMODE_MSG2}  ${params.amount} ${params.currency}`;
            const translation = [];
            translation.push(value.CANCEL_TEXT);
            translation.push(value.YES_TEXT);
            const meesageData = {
                message: messageText,
                title: value.TOPUP_CONFRIM_MSG1
            };
            this.confirmWalletRecharge(meesageData, walletParam, translation);
        });
    }
    // Confirm the wallet recharge
    confirmWalletRecharge(dataMessage, walletParam, translation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `${dataMessage.title}`,
                message: `${dataMessage.message}`,
                buttons: [
                    {
                        text: `${translation[0]}`,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: `${translation[1]}`,
                        handler: () => {
                            this.rechargeWithoutConversionOperator(walletParam);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // save the orange/mtn/ozow payment
    rechargeWithoutConversionOperator(rechargeData) {
        this.loading = true;
        this.showLoadingMessage(rechargeData);
        this.userPayMethodForm.get('numero').setValue(rechargeData.country_prefix + this.currentUser.phone);
        this.wallet.rechargeWallet(rechargeData).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.sendResponsePerOperator(reponse, rechargeData.operator);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.ui.dismissLoading();
                            this.rechargeWithoutConversionOperator(rechargeData);
                        }
                        else {
                            this.exitPayment();
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.walletError.manageWalletError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.errorService.manageError(error);
            }
        });
    }
    // save the paypal payment
    recharcheWithConversionOperator(rechargeData) {
        this.loading = true;
        this.showLoadingMessage(rechargeData);
        this.wallet.rechargeWalletWithConversion(rechargeData).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                this.sendResponsePerOperator(reponse, rechargeData.operator);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error && error.error && error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.ui.dismissLoading();
                            this.recharcheWithConversionOperator(rechargeData);
                        }
                        else {
                            this.exitPayment();
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.walletError.manageWalletError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.errorService.manageError(error);
            }
        });
    }
    // show the loading message
    showLoadingMessage(data) {
        switch (data.operator) {
            case 'orange':
                this.translate.get('ORANGE_PAYMENT_MESSAGE').subscribe(value => {
                    this.ui.presentLoading(value);
                });
                break;
            case 'MTN':
                this.translate.get('MTN_PAYMENT_MESSAGE').subscribe(value => {
                    this.ui.presentLoading(value);
                });
                break;
            case 'paypal':
                this.translate.get('TOPUP_TEXT1').subscribe(value => {
                    this.ui.presentLoading(value);
                });
                break;
            case 'ozow':
                this.translate.get('TOPUP_TEXT1').subscribe(value => {
                    this.ui.presentLoading(value);
                });
                break;
            default:
                break;
        }
    }
    // Send message per operator
    sendResponsePerOperator(data, operator) {
        this.checkPaymentStatusOperator(data.pay_token, operator);
        const reference = data && data.refID ? data.refID : '';
        this.refernceId = reference;
        this.paymentLink = data.url;
        this.cancelPaymentResult(reference);
        switch (operator) {
            case 'ozow':
                window.open(data.url, '_blank');
                break;
            default:
                break;
        }
    }
    // step 2 :  Check the status via Ozow
    checkPaymentStatusOperator(payToken, operator) {
        this.cron = setInterval(() => {
            this.checkPaymentStatusOperatorServer(payToken, operator);
        }, 20000);
    }
    // SHOW THE SUCCES MESSAGE
    showSuccesMessage() {
        this.translate.get('TOPUP_MSG7').subscribe(value => {
            this.ui.presentToast(value);
        });
    }
    // clear the time out
    clearTimeoutData() {
        if (this.timeOut) {
            clearTimeout(this.timeOut);
            this.timeOut = null;
        }
    }
    // clear the set interval
    clearSetIntervalData() {
        if (this.cron) {
            clearInterval(this.cron);
        }
        this.cron = null;
        for (let i = 0; i < 1000; i++) {
            clearInterval(i);
        }
    }
    // Check the payment Status
    checkPaymentStatusOperatorServer(payToken, operator) {
        this.wallet.getStatusPaymentOperator(payToken, operator).subscribe((reponse) => {
            if (reponse && reponse.message === 'OK') {
                this.showPaymentResult();
                this.showSuccesMessage();
            }
        }, error => {
            if (error && error.error && error.error.message === 'FAIL') {
                this.exitPayment();
                this.translate.get('TOPUP_MSG8').subscribe(value => {
                    this.ui.presentToast(value);
                });
            }
            else {
                this.exitPayment();
                this.translate.get('TOPUP_MSG8').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.errorService.manageError(error);
            }
        });
    }
    // Show payment confirmation dialog
    showPaymentResult() {
        this.loading = false;
        this.refresher = false;
        this.getCurrentBalance();
        this.initFormMessage();
        this.initPaymentForm();
        this.getAllMethodPaymentType();
        this.clearSetIntervalData();
        // clear the timeout
        this.clearTimeoutData();
        this.router.navigate(['dashboard/my-wallet/history']);
        this.ui.dismissLoading();
    }
    // Cancel the payment after 2 min
    cancelPaymentResult(refence) {
        this.timeOut = setTimeout(() => {
            this.exitPayment();
            this.translate.get(['TRANSACTION_CANCEL', 'TOPUP_MSG9']).subscribe(trans => {
                this.ui.presentAlert(`${trans.TRANSACTION_CANCEL}`, `${trans.TOPUP_MSG9} ${refence}`);
            });
        }, 300000);
    }
    // exit the payment directly
    exitPayment() {
        this.loading = false;
        this.refresher = false;
        this.initFormMessage();
        this.initPaymentForm();
        this.getAllMethodPaymentType();
        this.getCurrentBalance();
        this.clearTimeoutData();
        this.clearSetIntervalData();
        this.ui.dismissLoading();
    }
    ionicViewDidLeave() {
        if (this.loading) {
            this.exitPayment();
        }
    }
    // listen to back button
    hardwareBackButton() {
        this.platform.backButton.subscribe(() => {
            const url = this.router.url;
            if (url === '/dashboard/my-wallet') {
                if (this.refernceId) {
                    this.cancelPaymentResult(this.refernceId);
                }
                else {
                    this.exitPayment();
                }
            }
        });
    }
};
TopUpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_20__["UiService"] },
    { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_18__["PaymentGlobalDataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"] },
    { type: src_app_shared_service_currency_service__WEBPACK_IMPORTED_MODULE_12__["CurrencyService"] },
    { type: src_app_dashboard_my_tontines_services_contribution_service__WEBPACK_IMPORTED_MODULE_9__["ContributionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_dashboard_my_wallet_service_wallet_service__WEBPACK_IMPORTED_MODULE_10__["WalletService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_13__["ErrorService"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_14__["LocationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_13__["ErrorService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_15__["FormUtilsService"] },
    { type: src_app_dashboard_my_wallet_service_wallet_error_service__WEBPACK_IMPORTED_MODULE_16__["WalletErrorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TopUpComponent.propDecorators = {
    amountPay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    paypalbuttoncontainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['paypalbuttoncontainer', { static: false },] }]
};
TopUpComponent = TopUpComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-up',
        template: _raw_loader_top_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_up_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopUpComponent);



/***/ }),

/***/ "hrI0":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/my-wallet/top-up/top-up.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "omxy":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/my-wallet/my-wallet.page.ts ***!
  \*******************************************************/
/*! exports provided: MyWalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPage", function() { return MyWalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-wallet.page.html */ "zVt+");
/* harmony import */ var _my_wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-wallet.page.scss */ "QYh+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-wallet-menu/my-wallet-menu.component */ "Jc16");






let MyWalletPage = class MyWalletPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _my_wallet_menu_my_wallet_menu_component__WEBPACK_IMPORTED_MODULE_5__["MyWalletMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
};
MyWalletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
MyWalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-wallet',
        template: _raw_loader_my_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyWalletPage);



/***/ }),

/***/ "rHRy":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-wallet/top-up/top-up.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf=\"allPaymentMethods && allPaymentMethods.length === 0 && !loadingOperator && !refresher\">\r\n  <p  class=\"ion-padding ion-text-center\"> {{ 'PAYMENTS_METOHDS_REFRESH' | translate }}</p>\r\n</div>\r\n<ion-refresher class=\"ion-padding\" slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n  <ion-refresher-content\r\n    pullingIcon=\"reload-outline\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n  </ion-refresher-content>\r\n</ion-refresher>\r\n<form [formGroup]=\"userPayMethodForm\">\r\n<ion-grid>\r\n\r\n  <ion-row  *ngIf=\"loadingOperator && !refresher\">\r\n    <ion-col>\r\n      <p class=\"ion-text-center ion-padding\">\r\n        <ion-spinner  name=\"circles\"></ion-spinner>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row id=\"withdrawal\" *ngIf=\"!loadingBalance\">\r\n    <ion-col>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-card class=\"block-1\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-row>\r\n              <ion-col size=\"auto\" class=\"align-self-center\">\r\n                <span class=\"desc\">{{ 'WALLET_TEXT2' | translate }} </span>\r\n              </ion-col>\r\n              <ion-col class=\"col-button\">\r\n                <div class=\"menu-amount\" *ngIf=\"currentBalance && currentBalance.length > 0 && !loadingBalance\">\r\n                  <span *ngFor=\"let balance of currentBalance; let i = index\"> {{(balance.solde_device | commadumper)}}\r\n                    {{balance.device_name}} <span *ngIf=\"currentBalance[i+1]\"> | </span></span>\r\n                </div>\r\n                <div class=\"menu-amount\" *ngIf=\"currentBalance && currentBalance.length === 0 && !loadingBalance\">\r\n                  <span>0</span>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"!loadingBalance\">\r\n    <ion-col class=\"ion-padding\">\r\n      <ion-text color=\"dark\">\r\n        {{ 'WITHDRAWAL_RECHARGE_TEXT' | translate }}\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-card class=\"paidmode\">\r\n        <ion-card-content class=\"ion-text-center\">    \r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label>{{'COUNTRY_TEXT' | translate}}</ion-label>\r\n                <ion-select (ionChange)=\"updateCurrencyCountry(userPayMethodForm.value.country_id)\" name=\"country_id\" formControlName=\"country_id\">\r\n                  <ion-select-option [value]=\"country.country_id\" *ngFor=\"let country of states\">{{ country.country_label }}</ion-select-option>          \r\n                </ion-select>\r\n              </ion-item>   \r\n              <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.country_id\">\r\n                  <div class=\"error-message\" *ngIf=\"country.hasError(validation.type) && (country.dirty || country.touched)\">\r\n                    <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                    {{ validation.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div>     \r\n            </ion-col>\r\n          </ion-row>       \r\n            <ion-row class=\"ion-justify-content-end\" *ngIf=\"userPayMethodForm.value.country_id && paymentMethods && paymentMethods.length > 0\">\r\n              <ion-col size=\"4\">\r\n                <ion-img [src]=\"paymentMethods && paymentMethods[userPayMethodForm.value.typePaymentIndex] ? paymentMethods[userPayMethodForm.value.typePaymentIndex].logo : ' '\" class=\"logooperator\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>  \r\n            <ion-row *ngIf=\"userPayMethodForm.value.country_id && paymentMethods && paymentMethods.length > 0\">\r\n              <ion-col size=\"12\">\r\n                <ion-item>\r\n                  <ion-label>{{ 'USER_PROFILE_TEXT4' | translate }}</ion-label>\r\n                  <ion-select (ionChange)=\"updatePaymentMethod(userPayMethodForm.value.typePaymentIndex)\" name=\"typePaymentIndex\" formControlName=\"typePaymentIndex\">\r\n                    <ion-select-option *ngFor=\"let operator of paymentMethods; let operatorId = index\"\r\n                     [value]=\"operatorId\">{{ operator.name }}</ion-select-option>           \r\n                  </ion-select>\r\n                </ion-item>   \r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessages.payementtype\">\r\n                    <div class=\"error-message\" *ngIf=\"payementtype.hasError(validation.type) && (payementtype.dirty || payementtype.touched)\">\r\n                      <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>   \r\n              </ion-col>\r\n            </ion-row> \r\n            <ion-row  *ngIf=\"checkMobileOperator()\">\r\n              <ion-col size=\"4\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">+</ion-label>\r\n                  <ion-input placeholder=\"{{userPayMethodForm.value.country_prefix}}\" type=\"tel\"></ion-input>\r\n                </ion-item>        \r\n              </ion-col>\r\n              <ion-col size=\"8\">\r\n                <ion-item >\r\n                  <ion-label position=\"floating\">{{ 'REGISTER_MPHONE' | translate }}</ion-label>\r\n                  <ion-input (ionChange)=\"checckEmailOrPhone(userPayMethodForm.value.phone,userPayMethodForm.value.typePaymentIndex)\" type=\"tel\" formControlName=\"phone\"></ion-input>\r\n                </ion-item> \r\n              </ion-col>\r\n              <ion-col size=\"12\">\r\n                <div class=\"validation-errors\"  *ngIf=\"errorPhone\">\r\n                    <div class=\"error-message\">\r\n                      <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                     <span [innerHTML]=\"'USER_DETAIL_TEXT11' | translate\"></span>\r\n                    </div>\r\n                </div>         \r\n              </ion-col>\r\n            </ion-row> \r\n            <ion-row class=\"ion-padding-bottom\">\r\n              <ion-col size=\"12\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" >{{ 'AMOUNT_TEXT' | translate }}</ion-label>\r\n                  <ion-input  (ionChange)=\"updateAmount()\" type=\"number\" formControlName=\"montantSansFees\"></ion-input>\r\n                  <span slot=\"end\" class=\"slot-prefix ion-no-margin\"> {{ userPayMethodForm.value.currency }} </span>\r\n                </ion-item> \r\n                <div class=\"validation-errors\">\r\n                  <ng-container *ngFor=\"let validation of validationMessages.amount\">\r\n                    <div class=\"error-message\" *ngIf=\"amountError.hasError(validation.type) && (amountError.dirty || amountError.touched)\">\r\n                      <ion-icon name=\"information-circle-outline\" ></ion-icon>\r\n                      {{ validation.message }}\r\n                    </div>\r\n                  </ng-container>\r\n                </div>          \r\n              </ion-col>\r\n            </ion-row>  \r\n            <ion-row *ngIf=\"canShowPaypalMessage()\">\r\n              <ion-col size=\"12\">\r\n                <div class=\"padding\">\r\n                    <p style=\"color: red\">{{paypalMessage}}</p>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>                          \r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>      \r\n  </ion-row>\r\n  <ion-row>\r\n  \t<svg height=\"0\" width=\"0\" viewBox=\"0 0 27.7 28.93\">\r\n      <defs>\r\n        <clipPath id=\"pay-btn-shape2\" >\r\n          <path d=\"M2.57,17.21A11.18,11.18,0,0,1,9.17,5.77h.06l.17-.22.11-.23c-1-.73-1.56-1.42-1.39-2,.42-1.32,5-1.17,10.22.33S27.43,7.47,27,8.81c-.16.48-.86.76-1.88.86h0v.1a5,5,0,0,0,.08.66,3.77,3.77,0,0,0,.1.46l.07.23c2,4,1.7,8.37-1.73,12.53a12.23,12.23,0,0,1-18.42-.1A11.55,11.55,0,0,1,2.57,17.21Z\" />            \r\n        </clipPath>        \r\n      </defs>\r\n    </svg>\r\n    <ion-col size=\"12\" class=\"ion-text-center wrap-pay-btn\" *ngIf=\"canPay()\" (click)=\"showPayment(userPayMethodForm.value)\">\r\n      <svg id=\"pay-btn2\" preserveAspectRatio=\"xMidYMid slice\" viewBox=\"0 0 27.7 28.93\">\r\n        <path  class=\"arc-part\" d=\"M5.91,6.89a12.25,12.25,0,0,0-4.14,9.27,11.14,11.14,0,0,0,.16,1.7,12.82,12.82,0,0,0,.42,1.66c.08.27.19.54.29.8A8.24,8.24,0,0,0,3,21.1a14.85,14.85,0,0,0,.82,1.5,12.25,12.25,0,0,0,3.5,3.62,13.49,13.49,0,0,0,8,2.21,15.81,15.81,0,0,0,1.7-.17,13.74,13.74,0,0,0,1.69-.37,12.79,12.79,0,0,0,5.65-3.5,11.63,11.63,0,0,0,1.88-2.83,12.11,12.11,0,0,0,1.06-3.27,11,11,0,0,0-.94-6.84A10.42,10.42,0,0,1,27.23,13a10.65,10.65,0,0,1,.63,1.71,11.3,11.3,0,0,1,.22,3.64,12.78,12.78,0,0,1-.94,3.56,12.11,12.11,0,0,1-1.88,3.17,12.84,12.84,0,0,1-1.31,1.33,13.32,13.32,0,0,1-1.49,1.12,14,14,0,0,1-3.37,1.59,13,13,0,0,1-1.82.43,17.17,17.17,0,0,1-1.88.21,14.31,14.31,0,0,1-3.77-.27,14.55,14.55,0,0,1-5.12-2.19,11.53,11.53,0,0,1-1.41-1.17A13.92,13.92,0,0,1,.92,18a10.3,10.3,0,0,1-.08-1.88A12.36,12.36,0,0,1,3.31,9.34,10.42,10.42,0,0,1,5.91,6.89ZM7.27,3.35a1.52,1.52,0,0,1-.08-.78,1.82,1.82,0,0,1,.32-.76A2.29,2.29,0,0,1,9,1,6.31,6.31,0,0,1,9.78.89h2.36a25.76,25.76,0,0,1,6.19,1,23.94,23.94,0,0,1,5.74,2.5,20.58,20.58,0,0,1,2.56,1.83,3.84,3.84,0,0,1,1,1.27,1.29,1.29,0,0,1,.08.84,1.24,1.24,0,0,1-.47.64,1.21,1.21,0,0,0,.29-.67,1,1,0,0,0-.21-.65,3.64,3.64,0,0,0-1.07-.94c-.86-.53-1.75-1-2.66-1.47A34.29,34.29,0,0,0,18,3.06,38.16,38.16,0,0,0,12,1.84c-.5-.06-1-.11-1.52-.15l-.73-.13a6.42,6.42,0,0,0-.73,0A1.88,1.88,0,0,0,7.77,2,1.57,1.57,0,0,0,7.27,3.35Z\" />\r\n        <g class=\"pay-btn-border\">\r\n          <rect x=\"1.35\" y=\"0.56\" width=\"25.09\" height=\"26.44\" class=\"inner-pot\" />\r\n        </g>\r\n        <path class=\"pot-entry\" d=\"M22,6.27c-1.13-.38-2.45-.85-3.86-1.22-1-.28-2.17-.57-3.11-.75-2.64-.47-4.52-.57-4.62-.09-.09.19.19.57.75.85A24.19,24.19,0,0,0,17.46,7.4a22.19,22.19,0,0,0,7.07,1.13c.38-.09.66-.19.66-.28C25.32,7.9,24.05,7.15,22,6.27Z\" />\r\n        <text class=\"pay-text\"><tspan style=\"letter-spacing: -0.05859375em\">P</tspan><tspan x=\"4.94\" y=\"0\" style=\"letter-spacing: -0.087890625em\">A</tspan><tspan x=\"10.56\" y=\"0\">Y</tspan></text>\r\n      </svg>        \r\n      <div class=\"glow-wrap\">\r\n        <i class=\"glow\"></i>\r\n      </div>          \r\n    </ion-col>\r\n  </ion-row> \r\n  <ion-row  *ngIf=\"paypalLoading\">\r\n    <ion-col>\r\n      <p class=\"ion-text-center ion-padding\">\r\n        <ion-spinner  name=\"circles\"></ion-spinner>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row> \r\n  <ion-row *ngIf=\"canShowPaypalButton()\">\r\n    <ion-col class=\"ion-padding\" size=\"12\">\r\n      <div #paypalbuttoncontainer id=\"paypal-button-container\"></div> \r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</form> \r\n");

/***/ }),

/***/ "zVt+":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-wallet/my-wallet.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"with-logo2\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"/dashboard\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n        <ion-img class=\"logo\" [src]=\"'assets/logo-toupesu.svg'\"></ion-img>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"ellipsis-vertical\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title>{{ 'WALLET_TEXT1' | translate }}: <ion-text color=\"primary\" class=\"ion-text-capitalize\">{{ 'TONTINE_LIST_TEXT10' | translate }}</ion-text></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"wallet\">\r\n\r\n  <app-top-up></app-top-up>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=my-wallet-my-wallet-module.js.map