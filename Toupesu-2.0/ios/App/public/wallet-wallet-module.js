(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "4tB+":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/wallet-menu/wallet-menu.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "8J9p":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/wallet.page.ts ***!
  \****************************************************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet.page.html */ "tMiG");
/* harmony import */ var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.page.scss */ "Cgil");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_menu_wallet_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-menu/wallet-menu.component */ "oApj");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/wallet-tontine.service */ "0g9v");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_initiate_pay_initiate_pay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/initiate-pay/initiate-pay.component */ "Pb1I");
/* harmony import */ var _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paid-proofs/paid-proofs.component */ "ZDd0");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/debts-manager.service */ "ijC1");
/* harmony import */ var _beneficial_proofs_beneficial_proofs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beneficial-proofs/beneficial-proofs.component */ "SrBp");
/* harmony import */ var _fund_repartition_fund_repartition_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fund-repartition/fund-repartition.component */ "JC8y");
/* harmony import */ var src_app_shared_contribution_order_contribution_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/contribution-order/contribution-order.component */ "r0Dw");
/* harmony import */ var src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/payment-global-data.service */ "T8hk");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/service/storage.service */ "2+UW");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/wallet-tontine-error.service */ "aZHn");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
























let WalletPage = class WalletPage {
    constructor(popoverController, paymentData, walletError, tontine, tontineData, walletTontine, debt, user, events, modatCtrl, storage, translate, error, ui, util) {
        this.popoverController = popoverController;
        this.paymentData = paymentData;
        this.walletError = walletError;
        this.tontine = tontine;
        this.tontineData = tontineData;
        this.walletTontine = walletTontine;
        this.debt = debt;
        this.user = user;
        this.events = events;
        this.modatCtrl = modatCtrl;
        this.storage = storage;
        this.translate = translate;
        this.error = error;
        this.ui = ui;
        this.util = util;
        this.withdrawalList = [];
        this.approvalMembers = [];
        this.refusalMembers = [];
        this.paymentMethods = [];
        this.approvals = [];
        this.refusals = [];
        this.allData = [];
        this.tempData = [];
        this.listData = [];
        this.approvals = [];
        this.refusals = [];
        this.tradiBankList = [];
        this.withdrawalList = [];
        this.beneficiaries = [];
        this.beneficiariesInitiate = [];
        this.onlineBalance = 0;
        this.offlineBalance = 0;
        this.nbItems = 10;
        this.loadingList = false;
        this.loading = false;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentUser = this.user.getUserData();
        this.memberId = this.currentUser.id;
        this.nbValidator = this.tontineData.getValidators(this.currentTontine.tontine);
        this.isAdmin = this.tontineData.isAdministrator(this.currentTontine.tontine);
        this.token = this.user.getUserToken();
        this.events.subscribe('new-token', token => {
            this.token = token;
        });
        this.events.subscribe('wallet-recharge', () => {
            this.getWalletData(null);
        });
        this.events.subscribe('wallet-withdrawal', () => {
            this.getWalletData(null);
        });
        this.events.subscribe('payment-initiate', () => {
            this.getWalletData(null);
        });
        this.events.publish('payment-validate', () => {
            this.getWalletData(null);
        });
    }
    ngOnInit() {
        this.loading = true;
        this.getWalletData(null);
        this.getAllMethodPaymentType();
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getWalletData(event);
    }
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
    openContextMenu(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _wallet_menu_wallet_menu_component__WEBPACK_IMPORTED_MODULE_5__["WalletMenuComponent"],
                event: ev
            });
            return yield popover.present();
        });
    }
    // Open the initiate payment
    openInitiatePay(data) {
        this.debt.sendDebtsData(data);
        this.modatCtrl
            .create({
            component: src_app_shared_initiate_pay_initiate_pay_component__WEBPACK_IMPORTED_MODULE_10__["InitiatePayComponent"],
            componentProps: {
                tontineName: this.currentTontine.tontine.name,
                type: 'initiate',
            }
        })
            .then(modalEl => modalEl.present());
    }
    // make new payment
    newPayment() {
        this.modatCtrl
            .create({
            component: src_app_shared_initiate_pay_initiate_pay_component__WEBPACK_IMPORTED_MODULE_10__["InitiatePayComponent"],
            componentProps: {
                tontineName: this.currentTontine.tontine.name,
                type: 'new'
            }
        })
            .then(modalEl => modalEl.present());
    }
    // can validate deposit
    canValidateDeposit(data) {
        let ican = false;
        let hasValidate = false;
        data.liste_admin_approval.forEach(admin => {
            if (admin && admin.user_admin_id === this.memberId) {
                hasValidate = true;
            }
        });
        if (!hasValidate) {
            data.liste_admin_refusal.forEach(admin => {
                if (admin && admin.user_admin_id === this.memberId) {
                    hasValidate = true;
                }
            });
        }
        const nbAdminAproval = data.liste_admin_approval ? data.liste_admin_approval.length : 0;
        if (data && data.status_transaction === 'pending' && nbAdminAproval < this.nbValidator && !hasValidate && this.isAdmin) {
            ican = true;
        }
        return ican;
    }
    // can initiate the jackpot
    canInitiateJackpot(data) {
        let canInitiate = true;
        let ican = false;
        if (data.liste_admin_approval && data.liste_admin_approval.length > 0) {
            canInitiate = false;
        }
        if (data && data.status === 'pending' && canInitiate && this.isAdmin) {
            ican = true;
        }
        return ican;
    }
    // can validate the payment
    canValidateJackpot(data) {
        let ican = false;
        let hasValidate = false;
        data.liste_admin_approval.forEach(admin => {
            if (admin && admin.user_admin_id === this.memberId) {
                hasValidate = true;
            }
        });
        if (!hasValidate) {
            data.liste_admin_refusal.forEach(admin => {
                if (admin && admin.user_admin_id === this.memberId) {
                    hasValidate = true;
                }
            });
        }
        const nbAdminAproval = data.liste_admin_approval ? data.liste_admin_approval.length : 0;
        const nbAdminRefusal = data.liste_admin_refusal ? data.liste_admin_refusal.length : 0;
        if (data && data.status === 'pending' && nbAdminAproval < this.nbValidator && !hasValidate && this.isAdmin) {
            ican = true;
        }
        return ican;
    }
    // can make the payment
    canPayJackpot(data) {
        let ican = false;
        const nbAdminAproval = data.liste_admin_approval ? data.liste_admin_approval.length : 0;
        if (data && data.status === 'pending' && nbAdminAproval === this.nbValidator && this.isAdmin && data.reste_a_payer > 0) {
            ican = true;
        }
        return ican;
    }
    // can validate the payment
    canValidateWithdrawal(data, liste_admin_approval, liste_admin_refusal) {
        let ican = false;
        let hasValidate = false;
        if (liste_admin_approval && liste_admin_approval.length > 0) {
            liste_admin_approval.forEach(admin => {
                if (admin && admin.user_admin_id === this.memberId) {
                    hasValidate = true;
                }
            });
        }
        if (!hasValidate) {
            if (liste_admin_refusal && liste_admin_refusal.length > 0) {
                liste_admin_refusal.forEach(admin => {
                    if (admin && admin.user_admin_id === this.memberId) {
                        hasValidate = true;
                    }
                });
            }
        }
        const nbAdminAproval = liste_admin_approval ? liste_admin_approval.length : 0;
        if (data && data.status === 'in validation' && nbAdminAproval < this.nbValidator && !hasValidate && this.isAdmin) {
            ican = true;
        }
        return ican;
    }
    // check if it is traditionnal banking
    isTraditionnalBanking() {
        return this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.tontine_payment_type_id === 1;
    }
    // open the funf repartition fund for validation
    openFundRepartition(data) {
        this.debt.sendDebtsData({ bouffe: data, wallet: this.detailCaisses });
        this.modatCtrl
            .create({
            component: _fund_repartition_fund_repartition_component__WEBPACK_IMPORTED_MODULE_14__["FundRepartitionComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.data === 'validate') {
                    this.getWalletData(null);
                }
            });
        });
    }
    // Make the payment
    makePayment(data) {
        this.debt.sendDebtsData(data);
        this.modatCtrl
            .create({
            component: src_app_shared_contribution_order_contribution_order_component__WEBPACK_IMPORTED_MODULE_15__["ContributionOrderComponent"],
            componentProps: {
                tontineName: data.firstname + ' ' + data.lastname,
                amountPay: data.somme,
                balance: data.reste_a_payer,
                currency: data.device_name
            }
        })
            .then(modalEl => modalEl.present());
    }
    // view the transaction proofs
    viewDepositProof(data) {
        this.modatCtrl
            .create({
            component: _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_11__["PaidProofsComponent"],
            componentProps: {
                reference: data.reference_transaction
            }
        })
            .then(modalEl => modalEl.present());
    }
    // View the beneficial proofs
    viewBeneficialProof(data) {
        this.debt.sendDebtsData(data);
        this.modatCtrl
            .create({
            component: _beneficial_proofs_beneficial_proofs_component__WEBPACK_IMPORTED_MODULE_13__["BeneficialProofsComponent"]
        })
            .then(modalEl => modalEl.present());
    }
    // Validate the transaction
    validateDeposit(data) {
        this.loading = true;
        this.translate.get('VALIDATION_PROCESS_TEXT').subscribe(value => {
            this.ui.presentLoading(value);
        });
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            reference_transaction: data.reference_transaction,
            reason: ''
        };
        this.walletTontine.validateTransByAdmin(param)
            .subscribe((reponse) => {
            this.loading = false;
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.translate.get('VALIDATION_SUCCESS_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.getWalletData(null);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((ans) => {
                        this.ui.dismissLoading();
                        if (ans && ans.result === "OK") {
                            this.validateDeposit(data);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.walletError.manageWalletTontineError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // Reject the transaction
    rejectDeposit(data) {
        this.loading = true;
        this.translate.get('REJECT_PROCESS_TEXT').subscribe(value => {
            this.ui.presentLoading(value);
        });
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            reference_transaction: data.reference_transaction,
            reason: ''
        };
        this.walletTontine.cancelTransByAdmin(param)
            .subscribe((reponse) => {
            this.loading = false;
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.translate.get('REJECT_SUCCESS_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                // Get the wallet data
                this.getWalletData(null);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((ans) => {
                        this.ui.dismissLoading();
                        if (ans && ans.result === "OK") {
                            this.rejectDeposit(data);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.walletError.manageWalletTontineError(error);
                    this.ui.dismissLoading();
                }
            }
            else {
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // ====================== Withdrawal request =========================
    // Validate the withdrawal transaction
    validatePayment(data) {
        this.loading = true;
        this.translate.get('VALIDATION_PROCESS_TEXT').subscribe(value => {
            this.ui.presentLoading(value);
        });
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            withdraw_request_id: data.id,
            token: this.token
        };
        this.walletTontine.approveWithdrawalRequest(param)
            .subscribe((reponse) => {
            this.loading = false;
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.translate.get('VALIDATION_SUCCESS_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                // Get the wallet data
                this.getWalletData(null);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((ans) => {
                        this.ui.dismissLoading();
                        if (ans && ans.result === "OK") {
                            this.validatePayment(data);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.walletError.manageWalletTontineError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // Reject the transaction
    rejectPayment(data) {
        this.loading = true;
        this.translate.get('REJECT_PROCESS_TEXT').subscribe(value => {
            this.ui.presentLoading(value);
        });
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            withdraw_request_id: data.id,
            token: this.token
        };
        this.walletTontine.denyWithdrawalRequest(param)
            .subscribe((reponse) => {
            this.loading = false;
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.translate.get('REJECT_SUCCESS_MSG').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                // Get the wallet data
                this.getWalletData(null);
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((ans) => {
                        this.ui.dismissLoading();
                        if (ans && ans.result === "OK") {
                            this.rejectPayment(data);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.walletError.manageWalletTontineError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.error.manageError(error);
            }
        });
    }
    // Get approval members
    getApprovalMembers(requestId) {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            withdraw_request_id: requestId,
            token: this.token
        };
        this.approvalMembers = [];
        this.walletTontine.getAllApprovalRequest(param)
            .subscribe((reponse) => {
            if (reponse && reponse.data && reponse.data.length > 0) {
                this.approvalMembers = reponse.data;
                this.approvals[requestId] = this.approvalMembers;
            }
            else {
                this.approvals[requestId] = [];
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getApprovalMembers(requestId);
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get refusal members
    getRefusalMembers(requestId) {
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            withdraw_request_id: requestId,
            token: this.token
        };
        this.refusalMembers = [];
        this.walletTontine.getAllRefusalRequest(param)
            .subscribe((reponse) => {
            if (reponse && reponse.data && reponse.data.length > 0) {
                this.refusalMembers = reponse.data;
                this.refusals[requestId] = this.refusalMembers;
            }
            else {
                this.refusals[requestId] = [];
            }
        }, error => {
            if (error && error.error && error.error.user_not_found) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getRefusalMembers(requestId);
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
        return this.refusalMembers;
    }
    // get all operator payments method
    getAllMethodPaymentType() {
        this.user.getAllMethodPaymentType().subscribe((reponse) => {
            this.paymentMethods = [];
            if (reponse && reponse.typePayment && reponse.typePayment.length > 0) {
                reponse.typePayment.forEach(payment => {
                    if (payment.active === 1) {
                        this.paymentMethods.push(payment);
                    }
                });
            }
        }, error => {
            this.error.manageError(error);
        });
    }
    // Get the payment name
    getPaymentName(paymentId) {
        return this.paymentData.getPaymentName(this.paymentMethods, paymentId);
    }
    // Get the wallet data
    getWalletData(event) {
        const param = { tontine_id: this.currentTontine.tontine.tontine_id };
        this.walletTontine.getTontineWallet(param).subscribe((reponse) => {
            this.loading = false;
            this.onlineBalance = 0;
            this.offlineBalance = 0;
            if (reponse && reponse.message === 'success') {
                this.walletTontines = reponse.infos_wallet;
                reponse.detail_caisse.forEach(caisse => {
                    caisse && caisse.online_balance ? this.onlineBalance += parseFloat(caisse.online_balance) : this.onlineBalance += 0;
                    caisse && caisse.bank_balance ? this.offlineBalance += parseFloat(caisse.bank_balance) : this.onlineBalance += 0;
                });
                this.detailCaisses = reponse.detail_caisse;
                this.detailCaisses = this.tontineData.filterTontineBalance(this.detailCaisses, this.currentTontine.tontine);
            }
            this.tradiBankList = [];
            this.beneficiaries = [];
            this.beneficiariesInitiate = [];
            this.withdrawalList = [];
            this.listData = [];
            this.allData = [];
            this.tempData = [];
            this.getPendingTransactions(event);
        }, error => {
            this.loading = false;
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.message === 'error') {
                if (error.error.tontine_id_not_exist) {
                    this.translate.get('ADD_SHARE_MSG4').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.getWalletData(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
            else {
                this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                    this.walletTontines = walletData ? walletData.solde : null;
                    this.detailCaisses = walletData ? walletData.caisse : null;
                    this.onlineBalance = 0;
                    this.offlineBalance = 0;
                    if (this.detailCaisses) {
                        this.detailCaisses.forEach(caisse => {
                            caisse && caisse.online_balance ? this.onlineBalance += parseFloat(caisse.online_balance) : this.onlineBalance += 0;
                            caisse && caisse.bank_balance ? this.offlineBalance += parseFloat(caisse.bank_balance) : this.onlineBalance += 0;
                        });
                    }
                });
            }
        });
    }
    // Format the tontine wallet services response
    formatTontineWalletReponse(transactionData, typeData) {
        let formatDataFilter = [], formatData = [];
        this.listData = [];
        this.allData = [];
        this.tempData = [];
        formatDataFilter = this.util.orderByKeyUp(transactionData, 'updated_at');
        formatDataFilter.forEach(trans => {
            formatData.push({ type: typeData, data: trans });
            if (typeData === 'withdrawal') {
                this.approvals = [];
                this.refusals = [];
                this.getApprovalMembers(trans.id);
                this.getRefusalMembers(trans.id);
            }
        });
        switch (typeData) {
            case 'deposit':
                this.tradiBankList = [];
                this.withdrawalList = [];
                this.beneficiaries = [];
                this.beneficiariesInitiate = [];
                this.tradiBankList = formatData;
                this.allData = this.tradiBankList;
                this.tempData = this.allData;
                break;
            case 'withdrawal':
                this.withdrawalList = [];
                this.beneficiaries = [];
                this.beneficiariesInitiate = [];
                this.withdrawalList = formatData;
                this.allData = this.allData.concat(this.tradiBankList);
                this.allData = this.allData.concat(this.withdrawalList);
                this.tempData = this.allData;
                break;
            case 'beneficiary':
                this.beneficiaries = [];
                this.beneficiariesInitiate = [];
                this.beneficiaries = formatData;
                this.allData = this.allData.concat(this.tradiBankList);
                this.allData = this.allData.concat(this.withdrawalList);
                this.allData = this.allData.concat(this.beneficiaries);
                this.tempData = this.allData;
                break;
            case 'beneficiaryInitiate':
                this.beneficiariesInitiate = [];
                this.beneficiariesInitiate = formatData;
                this.allData = this.allData.concat(this.tradiBankList);
                this.allData = this.allData.concat(this.withdrawalList);
                this.allData = this.allData.concat(this.beneficiaries);
                this.allData = this.allData.concat(this.beneficiariesInitiate);
                this.tempData = this.allData;
                break;
            default:
                break;
        }
        if (this.allData.length > this.nbItems) {
            this.listData = [];
            for (let i = 0; i < this.nbItems; i++) {
                this.listData.push(this.allData[this.listData.length]);
            }
        }
        else {
            this.listData = this.allData;
        }
    }
    // Get pending deposit transactions of wallet to validate by admins
    getPendingTransactions(event) {
        if (!event) {
            this.loadingList = true;
        }
        const param = { tontine_id: this.currentTontine.tontine.tontine_id };
        this.walletTontine.getTradiBankingTransactionToValidate(param).subscribe((reponse) => {
            this.loadingList = false;
            if (reponse && reponse.transactions && reponse.transactions.length > 0) {
                this.formatTontineWalletReponse(reponse.transactions, 'deposit');
            }
            // Get the withdrawal request
            this.getWithdrawalTransactions(event);
        }, error => {
            this.loadingList = false;
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.loadingList = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getPendingTransactions(event);
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get pending deposit transactions of wallet to validate by admins
    getWithdrawalTransactions(event) {
        if (!event) {
            this.loadingList = true;
        }
        const param = {
            tontine_id: this.currentTontine.tontine.tontine_id,
            token: this.token
        };
        this.walletTontine.geAlltWithdrawallRequest(param).subscribe((reponse) => {
            this.loadingList = false;
            if (reponse && reponse.tontine_withdraw_request && reponse.tontine_withdraw_request.length > 0) {
                this.formatTontineWalletReponse(reponse.tontine_withdraw_request, 'withdrawal');
            }
            // Get the beneficiary not initiate
            this.getBeneficiary(event);
        }, error => {
            this.loadingList = false;
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.loadingList = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getWithdrawalTransactions(event);
                    }
                    else {
                        this.loadingList = false;
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Get the list of beneficiary not initiate
    getBeneficiary(event) {
        if (this.tontineData.isTraditionnalTontine(this.currentTontine.tontine)) {
            if (!event) {
                this.loadingList = true;
            }
            const param = {
                tontine_id: this.currentTontine.tontine.tontine_id
            };
            this.debt.getPendingBeneficiariesNotInitiate(param).subscribe((reponse) => {
                this.loadingList = false;
                if (reponse && reponse.message === 'success') {
                    this.formatTontineWalletReponse(reponse.bouffages, 'beneficiary');
                }
                // Get the beneficiary  initiate
                this.getBeneficiaryInitiate(event);
            }, error => {
                this.loadingList = false;
                if (event) {
                    event.target.complete();
                }
                if (error && error.error && error.error.message === 'error') {
                    if (error && error.error && error.error.user_not_found) {
                        this.loadingList = true;
                        this.error.renewSession().then((data) => {
                            if (data && data.result === 'OK') {
                                this.getBeneficiary(event);
                            }
                            else {
                                this.loadingList = false;
                            }
                        });
                    }
                    else {
                        this.walletError.manageWalletTontineError(error);
                    }
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }
    }
    // Get the list of beneficiary initiate
    getBeneficiaryInitiate(event) {
        if (this.tontineData.isTraditionnalTontine(this.currentTontine.tontine)) {
            if (!event) {
                this.loadingList = true;
            }
            const param = {
                tontine_id: this.currentTontine.tontine.tontine_id
            };
            this.debt.getPendingBeneficiariesInitiate(param).subscribe((reponse) => {
                this.loadingList = false;
                if (reponse && reponse.message === 'success') {
                    this.formatTontineWalletReponse(reponse.bouffages, 'beneficiaryInitiate');
                }
                if (event) {
                    setTimeout(() => {
                        event.target.complete();
                    }, 2000);
                }
            }, error => {
                this.loadingList = false;
                if (event) {
                    event.target.complete();
                }
                if (error && error.error && error.error.message === 'error') {
                    if (error && error.error && error.error.user_not_found) {
                        this.loadingList = true;
                        this.error.renewSession().then((data) => {
                            if (data && data.result === 'OK') {
                                this.getBeneficiaryInitiate(event);
                            }
                            else {
                                this.loadingList = false;
                            }
                        });
                    }
                    else {
                        this.walletError.manageWalletTontineError(error);
                    }
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }
    }
};
WalletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_shared_service_payment_global_data_service__WEBPACK_IMPORTED_MODULE_16__["PaymentGlobalDataService"] },
    { type: _services_wallet_tontine_error_service__WEBPACK_IMPORTED_MODULE_22__["WalletTontineErrorService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_17__["TontineGlobalDataService"] },
    { type: _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_8__["WalletTontineService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_12__["DebtsManagerService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_19__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_storage_service__WEBPACK_IMPORTED_MODULE_20__["StorageData"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_21__["UiService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_23__["UtilService"] }
];
WalletPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WalletPage);



/***/ }),

/***/ "Cgil":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/wallet.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "DoGW":
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/beneficial-proofs/beneficial-proofs.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5lZmljaWFsLXByb29mcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "JC8y":
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/fund-repartition/fund-repartition.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FundRepartitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRepartitionComponent", function() { return FundRepartitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fund_repartition_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fund-repartition.component.html */ "W3sC");
/* harmony import */ var _fund_repartition_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fund-repartition.component.scss */ "vgCT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_debts_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/debts-manager.service */ "ijC1");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");













let FundRepartitionComponent = class FundRepartitionComponent {
    constructor(modatCtrl, user, event, debt, tontine, ui, translate, error, tontineError) {
        this.modatCtrl = modatCtrl;
        this.user = user;
        this.event = event;
        this.debt = debt;
        this.tontine = tontine;
        this.ui = ui;
        this.translate = translate;
        this.error = error;
        this.tontineError = tontineError;
        this.listCaisse = [];
        this.loading = false;
        this.currentTontine = this.tontine.getCurrentTontineData();
        this.currentPaymentData = this.debt.getDebtsData();
        this.totalAmount = 0;
        this.currentUser = this.user.getUserData();
        this.nbValidator = this.currentTontine.tontine.number_admin_that_validates_contributions;
    }
    ngOnInit() {
        this.getWalletData();
    }
    closeContribute(ans) {
        this.modatCtrl.dismiss(ans, 'cancel');
    }
    // Get the wallet data
    getWalletData() {
        const param = { bouffe_id: this.currentPaymentData.bouffe.bouffe_id };
        this.loading = true;
        this.debt.getPaymentInitiateInformations(param).subscribe((reponse) => {
            this.loading = false;
            this.listCaisse = [];
            let index = 0;
            if (reponse && reponse.message === 'success') {
                reponse.infos_fund_repartition.forEach(caisse => {
                    this.currentPaymentData.wallet.forEach(type => {
                        if (type && type.type_caisse_tontine_id === caisse.type_caisse_tontine_id) {
                            this.listCaisse.push({
                                currency_name: caisse.currency_name,
                                type_caisse_tontine_id: caisse.type_caisse_tontine_id,
                                type_caisse_tontine_name: caisse.caisse_name,
                                montant_online: caisse.montant_online,
                                current_montant_online: type.online_balance > 0 ? parseFloat(type.online_balance) : 0,
                                montant_offline: caisse.montant_offline,
                                current_montant_offline: type.bank_balance > 0 ? parseFloat(type.bank_balance) : 0,
                            });
                        }
                    });
                    index++;
                });
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error.error.tontine_id_not_exist) {
                    this.translate.get('ADD_SHARE_MSG4').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                if (error.error.user_not_found) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result == 'OK') {
                            this.getWalletData();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
            }
        });
    }
    // Validate the payment by admin
    validatePayment() {
        this.translate.get('VALIDATING_TEXT').subscribe(value => {
            this.ui.presentLoading(value);
        });
        const param = { bouffe_id: this.currentPaymentData.bouffe.bouffe_id, reason: '' };
        this.debt.validateInitiatePayment(param).subscribe((reponse) => {
            this.ui.dismissLoading();
            if (reponse && reponse.message === 'success') {
                this.event.publish('payment-validate');
                if (reponse.last_admin) {
                    this.translate.get('LAST_JECKPOT_VALIDATOR').subscribe(trans => {
                        this.ui.presentToast(trans);
                    });
                }
                this.closeContribute('validate');
            }
        }, error => {
            if (error && error.error && error.error.message === 'error') {
                if (error.error.user_not_found) {
                    this.error.renewSession().then((data) => {
                        this.ui.dismissLoading();
                        if (data && data.result === "OK") {
                            this.validatePayment();
                        }
                        else {
                            this.closeContribute('not-validate');
                        }
                    });
                }
                else {
                    this.ui.dismissLoading();
                    this.closeContribute('not-validate');
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.ui.dismissLoading();
                this.closeContribute('not-validate');
                this.error.manageError(error);
            }
        });
    }
};
FundRepartitionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: src_app_dashboard_my_tontines_services_debts_manager_service__WEBPACK_IMPORTED_MODULE_7__["DebtsManagerService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_9__["TontineErrorService"] }
];
FundRepartitionComponent.propDecorators = {
    tontineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FundRepartitionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fund-repartition',
        template: _raw_loader_fund_repartition_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fund_repartition_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FundRepartitionComponent);



/***/ }),

/***/ "SrBp":
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/beneficial-proofs/beneficial-proofs.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BeneficialProofsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficialProofsComponent", function() { return BeneficialProofsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beneficial_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beneficial-proofs.component.html */ "sjAC");
/* harmony import */ var _beneficial_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beneficial-proofs.component.scss */ "DoGW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/view-proof/view-proof.component */ "xVFS");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine.service */ "/WEl");
/* harmony import */ var src_app_dashboard_my_tontines_services_debts_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/debts-manager.service */ "ijC1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");











let BeneficialProofsComponent = class BeneficialProofsComponent {
    constructor(modatCtrl, tontine, translate, error, ui, debt) {
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.translate = translate;
        this.error = error;
        this.ui = ui;
        this.debt = debt;
        this.currentProofsData = this.debt.getDebtsData();
        this.tontineData = this.tontine.getCurrentTontineData();
        this.loading = true;
        this.myProofs = [];
        this.allData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.getProofs(null);
    }
    closeContribute() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    // Get the list of proofs of a members
    getProofs(event) {
        const param = {
            bouffe_id: this.currentProofsData.bouffe_id
        };
        this.debt.getWithdrawalProof(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                let dataResp = [];
                if (reponse && reponse.liste_traditional_banking_proof && reponse.liste_traditional_banking_proof.length > 0) {
                    reponse.liste_traditional_banking_proof.forEach(proof => {
                        dataResp.push({ type: 'bank', data: proof });
                    });
                }
                if (reponse && reponse.liste_online_wallet_proof && reponse.liste_online_wallet_proof.length > 0) {
                    reponse.liste_online_wallet_proof.forEach(proof => {
                        dataResp.push({ type: 'online', data: proof });
                    });
                }
                if (reponse && reponse.liste_pay_with_caisse_tontine_proof && reponse.liste_pay_with_caisse_tontine_proof.length > 0) {
                    reponse.liste_pay_with_caisse_tontine_proof.forEach(proof => {
                        dataResp.push({ type: 'checkout', data: proof });
                    });
                }
                this.allData = dataResp;
                if (this.allData.length > this.nbItems) {
                    this.myProofs = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.myProofs.push(this.allData[this.myProofs.length]);
                    }
                }
                else {
                    this.myProofs = this.allData;
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
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getProofs(event);
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else if (error && error.error && error.error.bouffe_id_not_exist) {
                this.translate.get('BENEFICIARY_NOT_EXIST_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.myProofs.length < this.allData.length) {
                    this.myProofs.push(this.allData[this.myProofs.length]);
                }
                else if (this.myProofs.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    showProof(proofsData) {
        this.modatCtrl
            .create({
            component: src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_5__["ViewProofComponent"],
            componentProps: {
                proof: proofsData
            }
        })
            .then(modalEl => modalEl.present());
    }
};
BeneficialProofsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_dashboard_my_tontines_services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"] },
    { type: src_app_dashboard_my_tontines_services_debts_manager_service__WEBPACK_IMPORTED_MODULE_7__["DebtsManagerService"] }
];
BeneficialProofsComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }]
};
BeneficialProofsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-beneficial-proofs',
        template: _raw_loader_beneficial_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_beneficial_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BeneficialProofsComponent);



/***/ }),

/***/ "UBTA":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/wallet.module.ts ***!
  \******************************************************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "8J9p");
/* harmony import */ var _wallet_menu_wallet_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wallet-menu/wallet-menu.component */ "oApj");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paid-proofs/paid-proofs.component */ "ZDd0");
/* harmony import */ var _beneficial_proofs_beneficial_proofs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beneficial-proofs/beneficial-proofs.component */ "SrBp");
/* harmony import */ var _fund_repartition_fund_repartition_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fund-repartition/fund-repartition.component */ "JC8y");












const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]
    }
];
let WalletPageModule = class WalletPageModule {
};
WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"],
            _wallet_menu_wallet_menu_component__WEBPACK_IMPORTED_MODULE_7__["WalletMenuComponent"],
            _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_9__["PaidProofsComponent"],
            _beneficial_proofs_beneficial_proofs_component__WEBPACK_IMPORTED_MODULE_10__["BeneficialProofsComponent"],
            _fund_repartition_fund_repartition_component__WEBPACK_IMPORTED_MODULE_11__["FundRepartitionComponent"]
        ],
        entryComponents: [
            _wallet_menu_wallet_menu_component__WEBPACK_IMPORTED_MODULE_7__["WalletMenuComponent"],
            _paid_proofs_paid_proofs_component__WEBPACK_IMPORTED_MODULE_9__["PaidProofsComponent"],
            _beneficial_proofs_beneficial_proofs_component__WEBPACK_IMPORTED_MODULE_10__["BeneficialProofsComponent"],
            _fund_repartition_fund_repartition_component__WEBPACK_IMPORTED_MODULE_11__["FundRepartitionComponent"]
        ]
    })
], WalletPageModule);



/***/ }),

/***/ "W3sC":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/fund-repartition/fund-repartition.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'VALIDATE_PAIEMENT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"initiate-pay\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p>{{'VALIDATION_TEXT' | translate}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text color=\"primary\">\r\n          <h2>\r\n          <small>{{'BENEFICIARY_TEXT' | translate }}: \r\n          </small><b>{{currentPaymentData.bouffe.firstname ? currentPaymentData.bouffe.firstname : ''}} {{currentPaymentData.bouffe.lastname ? currentPaymentData.bouffe.lastname : ''}}</b>\r\n        </h2>\r\n        </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n        <ion-spinner  name=\"circles\"></ion-spinner>\r\n      </p>\r\n      <ion-row  *ngFor=\"let chechoutItem of listCaisse; let i = index\">\r\n        <ion-col >\r\n          <ion-row class=\"ion-align-items-center checkout-list\">\r\n            <ion-col size=\"4\">\r\n              <h6><ion-text color=\"primary\">{{(chechoutItem.type_caisse_tontine_name | translate)}} ({{chechoutItem.currency_name}})</ion-text></h6>\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-row>\r\n                <ion-col >\r\n                  <ion-text color=\"primary\">{{ 'ONLINE_TEXT' | translate }}: {{chechoutItem.current_montant_online - listCaisse[i].montant_online}}</ion-text>\r\n                  <ion-item>                    \r\n                    <ion-input type=\"number\" [disabled]=\"true\" [(ngModel)]=\"listCaisse[i].montant_online\" [ngModelOptions]=\"{standalone: true}\" ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-text color=\"primary\">{{ 'OFFLINE_TEXT' | translate }}: {{ chechoutItem.current_montant_offline - listCaisse[i].montant_offline }}</ion-text>\r\n                  <ion-item>                    \r\n                    <ion-input type=\"number\" [disabled]=\"true\" [(ngModel)]=\"listCaisse[i].montant_offline\" [ngModelOptions]=\"{standalone: true}\" ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row> \r\n  \r\n      <ion-row *ngIf=\"currentPaymentData.bouffe.somme > 0 && listCaisse && listCaisse.length > 0\">\r\n        <ion-col>\r\n          <ion-text class=\"ion-float-right\" color=\"danger\"><strong>{{ 'TOTAL_TEXT' | translate }} <sup>*</sup>: {{(currentPaymentData.bouffe.somme | commadumper)}} {{currentPaymentData.bouffe.device_name}}</strong></ion-text>\r\n        </ion-col>\r\n      </ion-row>  \r\n      <ion-row *ngIf=\"listCaisse && listCaisse.length > 0\">\r\n        <ion-col>\r\n            <ion-button expand=\"full\" \r\n                  color=\"warning\" \r\n                  class=\"ion-text-uppercase\"\r\n                  shape=\"round\" (click)=\"validatePayment()\" >\r\n                  {{ 'VALIDATE_TEXT' | translate }}\r\n            </ion-button>\r\n          </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>  \r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute('cancel')\">\r\n                {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "Ywny":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/paid-proofs/paid-proofs.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWlkLXByb29mcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZDd0":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/paid-proofs/paid-proofs.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PaidProofsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaidProofsComponent", function() { return PaidProofsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paid_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paid-proofs.component.html */ "ql7Q");
/* harmony import */ var _paid_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paid-proofs.component.scss */ "Ywny");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/debts-manager.service */ "ijC1");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/view-proof/view-proof.component */ "xVFS");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/wallet-tontine.service */ "0g9v");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");












let PaidProofsComponent = class PaidProofsComponent {
    constructor(modatCtrl, error, walletTontine, tontine, translate, ui, debt) {
        this.modatCtrl = modatCtrl;
        this.error = error;
        this.walletTontine = walletTontine;
        this.tontine = tontine;
        this.translate = translate;
        this.ui = ui;
        this.debt = debt;
        this.currentStatData = this.debt.getDebtsData();
        this.tontineData = this.tontine.getCurrentTontineData();
        this.loading = false;
        this.myProofs = [];
        this.allData = [];
        this.nbItems = 10;
    }
    ngOnInit() {
        this.loading = true;
        this.getProofs(null);
    }
    closeContribute() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    // Get the list of proofs of a members
    getProofs(event) {
        const param = {
            reference_transaction: this.reference
        };
        this.walletTontine.getWalletTransactionsProofs(param).subscribe((reponse) => {
            if (reponse && reponse.message === 'success') {
                let dataResp = [];
                dataResp = dataResp.concat(reponse.proof_traditional);
                dataResp = dataResp.concat(reponse.proof_online);
                this.allData = dataResp;
                if (this.allData.length > this.nbItems) {
                    this.myProofs = [];
                    for (let i = 0; i < this.nbItems; i++) {
                        this.myProofs.push(this.allData[this.myProofs.length]);
                    }
                }
                else {
                    this.myProofs = this.allData;
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
            if (event) {
                event.target.complete();
            }
            if (error && error.error && error.error.user_not_found) {
                this.loading = true;
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getProofs(event);
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else if (error && error.error && error.error.reference_transaction_not_exist) {
                this.translate.get('REFERENCE_NOT_EXIST_TEXT').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Refresh the list
    refreSher(event) {
        this.infiniteScroll.disabled = false;
        this.getProofs(event);
    }
    // Infinite scroll data
    infinteScrollData(event) {
        setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
                if (this.myProofs.length < this.allData.length) {
                    this.myProofs.push(this.allData[this.myProofs.length]);
                }
                else if (this.myProofs.length === this.allData.length) {
                    event.target.disabled = true;
                }
            }
            event.target.complete();
        }, 500);
    }
    showProof(proofs) {
        this.modatCtrl
            .create({
            component: src_app_shared_view_proof_view_proof_component__WEBPACK_IMPORTED_MODULE_8__["ViewProofComponent"],
            componentProps: {
                proof: proofs.receipt || proofs.image
            }
        })
            .then(modalEl => modalEl.present());
    }
};
PaidProofsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _services_wallet_tontine_service__WEBPACK_IMPORTED_MODULE_10__["WalletTontineService"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_9__["TontineService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: _services_debts_manager_service__WEBPACK_IMPORTED_MODULE_5__["DebtsManagerService"] }
];
PaidProofsComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false },] }],
    reference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PaidProofsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paid-proofs',
        template: _raw_loader_paid_proofs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paid_proofs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaidProofsComponent);



/***/ }),

/***/ "oApj":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/wallet-menu/wallet-menu.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WalletMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletMenuComponent", function() { return WalletMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet-menu.component.html */ "p4mw");
/* harmony import */ var _wallet_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-menu.component.scss */ "4tB+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");






let WalletMenuComponent = class WalletMenuComponent {
    constructor(popoverController, tontine) {
        this.popoverController = popoverController;
        this.tontine = tontine;
        this.currentTontine = this.tontine.getCurrentTontineData();
    }
    ngOnInit() { }
    closeMyWalletMenu() {
        this.popoverController.dismiss();
    }
    // check if is administrator
    isAdmin() {
        let admin = false;
        if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1) {
            admin = true;
        }
        return admin;
    }
};
WalletMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_5__["TontineService"] }
];
WalletMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet-menu',
        template: _raw_loader_wallet_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WalletMenuComponent);



/***/ }),

/***/ "p4mw":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/wallet-menu/wallet-menu.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-top\" class=\"wallet-menu-popover\">\r\n  <ion-item (click)=\"closeMyWalletMenu()\" [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'wallet']\" lines=\"none\">\r\n    <ion-label>\r\n     {{ 'OVERVIEW_TEXT' | translate }}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item  (click)=\"closeMyWalletMenu()\" [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'wallet', 'top-up']\" lines=\"none\">\r\n    <ion-label>\r\n     {{'TONTINE_LIST_TEXT10' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"isAdmin()\" (click)=\"closeMyWalletMenu()\" [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'wallet', 'withdrawal']\" lines=\"none\">\r\n    <ion-label>\r\n     {{'WITHDRAWAL_TEXT0' | translate}}\r\n    </ion-label>\r\n  </ion-item> \r\n  <ion-item (click)=\"closeMyWalletMenu()\" [routerLink]=\"['/', 'dashboard', 'my-tontines', currentTontine.tontine.tontine_id, 'wallet', 'history']\" lines=\"none\">\r\n    <ion-label>\r\n      {{'WALLET_TRANSACTION_HISTORY' | translate}}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "ql7Q":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/paid-proofs/paid-proofs.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'LIST_OF_PROOFS' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"session-proof\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid *ngIf=\"myProofs && myProofs.length >  0\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>     \r\n          <ion-item *ngFor=\"let proof of myProofs\">          \r\n            <ion-label>            \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof && proof.created_at ? proof.created_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text *ngIf=\"proof.typepaiement_id\" class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ proof.name ? proof.name : ''  }}</ion-text>\r\n                <ion-text *ngIf=\"proof.currency_id\" class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{'TRADITIONNAL_BANKING' | translate}}</ion-text>\r\n              </p>\r\n              <p *ngIf=\"proof.description\">\r\n                <ion-text class=\"ion-float-left\"><b>{{'DESCRIPTION_TEXT' | translate}}: </b>{{ proof.description ? proof.description : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\"><h3>{{'AMOUNT_TEXT' | translate}}: {{ proof.montant ? (proof.montant | commadumper) : 0  }}{{tontineData && tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}</h3></ion-text>\r\n              <p class=\"ion-text-right\" *ngIf=\"proof && (proof.receipt || proof.image)\">\r\n                <a (click)=\"showProof(proof)\" class=\"ion-text-capitalize\">\r\n                  {{'DEBT_VIEW_PROOF' | translate}}\r\n                </a>\r\n              </p>            \r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"myProofs && myProofs.length === 0  && !loading\">\r\n    <p class=\"ion-padding ion-text-center\" >{{ 'PROOFS_EMPTY_MSG' | translate}}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute()\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "sjAC":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/beneficial-proofs/beneficial-proofs.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'LIST_OF_PROOFS' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"session-proof\">\r\n  <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n    <ion-spinner  name=\"circles\"></ion-spinner>\r\n  </p>\r\n  <ion-grid *ngIf=\"myProofs && myProofs.length > 0\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>     \r\n          <div *ngFor=\"let proof of myProofs\">\r\n          <ion-item  *ngIf=\"proof.type === 'bank'\">          \r\n            <ion-label>            \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof.data && proof.data.updated_at ? proof.data.updated_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text  class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ 'TRADITIONNAL_BANKING' | translate  }}</ion-text>\r\n              </p>\r\n              <p *ngIf=\"proof.description\">\r\n                <ion-text class=\"ion-float-left\"><b>{{'DESCRIPTION_TEXT' | translate}}: </b>{{ proof.data && proof.data.description ? proof.data.description : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\">\r\n                <h3>{{'AMOUNT_TEXT' | translate }}: {{ proof && proof.data.montant ? (proof.data.montant | commadumper) : 0  }}{{tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}\r\n                </h3>\r\n              </ion-text>\r\n              <p class=\"ion-text-right\">\r\n                <a (click)=\"showProof(proof.data.receipt)\" class=\"ion-text-capitalize\">\r\n                  {{'DEBT_VIEW_PROOF' | translate}}\r\n                </a>\r\n              </p>            \r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item  *ngIf=\"proof.type === 'online'\">          \r\n            <ion-label>            \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof.data && proof.data.updated_at ? proof.data.updated_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text *ngIf=\"proof.data && proof.data.typepaiement_name\" class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ proof.data && proof.data.typepaiement_name ? proof.data.typepaiement_name : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\">\r\n                <h3>{{'AMOUNT_TEXT' | translate }}: {{ proof.data && proof.data.montant ? (proof.data.montant | commadumper ) : 0  }}{{tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}\r\n                </h3>\r\n              </ion-text>\r\n              <p class=\"ion-text-right\">\r\n                <a (click)=\"showProof(proof.data.receipt)\" class=\"ion-text-capitalize\">\r\n                  {{'DEBT_VIEW_PROOF' | translate}}\r\n                </a>\r\n              </p>            \r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item  *ngIf=\"proof.type === 'checkout'\">          \r\n            <ion-label>            \r\n              <p>\r\n                <ion-text class=\"ion-float-left\"><b>{{ 'DATE_TEXT' | translate }}: </b>{{ proof.data && proof.data.updated_at ? proof.data.updated_at.split(' ')[0] : '' }}</ion-text>\r\n                <ion-text  class=\"ion-float-right\"><b>{{'BY_TEXT' | translate}}: </b>{{ 'TYPE_PAYMENT_ID2' | translate  }}</ion-text>\r\n              </p>\r\n              <p *ngIf=\"proof.data.caisse_name\">\r\n                <ion-text class=\"ion-float-left\"><b>{{'DESCRIPTION_TEXT' | translate}}: </b>{{ proof.data && proof.data.caisse_name ? (proof.data.caisse_name | translate) : ''  }}</ion-text>\r\n              </p>\r\n              <ion-text color=\"warning\">\r\n                <h3>{{'AMOUNT_TEXT' | translate }}: {{ proof.data&& proof.data.montant ? (proof.data.montant | commadumper) : 0  }}{{tontineData.tontine && tontineData.tontine.monnaie ? tontineData.tontine.monnaie :'' }}\r\n                </h3>\r\n              </ion-text>            \r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n        </ion-list>\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"myProofs && myProofs.length === 0  && !loading\">\r\n    <p class=\"ion-padding ion-text-center\" >{{ 'PROOFS_EMPTY_MSG' | translate}}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeContribute()\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "tMiG":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/wallet/wallet.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + currentTontine.tontine.tontine_id\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n    {{ 'WALLET_TEXT' | translate }} <small *ngIf=\"walletTontines && walletTontines[0] && walletTontines[0].currency_name\">({{walletTontines[0].currency_name}})</small> \r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openContextMenu($event)\">\r\n        <ion-icon name=\"more\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"ion-text-center subtitle\">\r\n    <ion-title><ion-text color=\"primary\" class=\"ion-text-capitalize\">{{'OVERVIEW_TEXT' | translate}}</ion-text></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"tontine-wallet\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center\" *ngIf=\"!loading\">\r\n      <ion-col size=\"12\" class=\"t-balance\">\r\n        <div>\r\n          <ion-text color=\"danger\" class=\"desc\">{{ 'TONTINE_DETAIL_TEXT30' | translate }}: {{walletTontines && walletTontines[0] ? walletTontines[0].total_balance : 0}}</ion-text>  \r\n        </div>        \r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"sub-balance\" *ngIf=\"isTraditionnalBanking()\">\r\n        <ion-text class=\"desc\" color=\"primary\">{{ 'ONLINE_BALANCE_TEXT' | translate }}</ion-text><br/>\r\n        <ion-text class=\"menu-amount\" color=\"danger\">{{onlineBalance  | commadumper}}</ion-text> \r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"sub-balance\" *ngIf=\"isTraditionnalBanking()\">\r\n        <ion-text class=\"desc\" color=\"primary\">{{ 'OFFLINE_BALANCE_TEXT' | translate }}</ion-text><br/> \r\n        <ion-text class=\"menu-amount\" color=\"danger\">{{offlineBalance  | commadumper}}</ion-text>\r\n      </ion-col>\r\n      <ion-col class=\"line-height095\" *ngFor=\"let caisse of detailCaisses\">\r\n        <ion-text class=\"desc\">{{caisse.caisse_name ? (caisse.caisse_name.split(' ')[0] | translate) : ''}} <br/> {{caisse.caisse_name ? (caisse.caisse_name.replace(caisse.caisse_name.split(' ')[0],\"\") | translate) : ''}}</ion-text> <br/>\r\n        <ion-text class=\"menu-amount\" color=\"warning\">{{caisse.solde ? (caisse.solde  | commadumper) : 0}}</ion-text>\r\n        <div class=\"online-offline\" *ngIf=\"isTraditionnalBanking()\">\r\n          <ion-text class=\"desc\" color=\"primary\">{{'ONLINE_TEXT' | translate}}</ion-text> <br/>\r\n          <ion-text class=\"menu-amount\" color=\"dark\">{{caisse.online_balance ? (caisse.online_balance  | commadumper) : 0 }}</ion-text> <br/>\r\n          <ion-text class=\"desc\" color=\"primary\">{{'OFFLINE_TEXT' | translate}}</ion-text> <br/>\r\n          <ion-text class=\"menu-amount\" color=\"dark\">{{caisse.bank_balance ? (caisse.bank_balance  | commadumper) : 0 }}</ion-text>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"ion-text-center\"  *ngIf=\"loading || loadingList\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n<!--  <ion-row>\r\n      <ion-col>\r\n        <ion-button fill=\"outline\" \r\n              color=\"dark\"\r\n              size=\"small\"\r\n              class=\"ion-text-capitalize\">\r\n          New checkout\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col class=\"padding-trans\">\r\n        <ion-row class=\"ion-justify-content-between\" *ngIf=\"allData && allData.length > 0\">\r\n          <ion-col size=\"auto\">\r\n            <h6>{{ 'PENDING_TRANSACTIONS' | translate }} <span>({{listData.length}}/{{allData.length}})</span></h6>\r\n          </ion-col>\r\n    <!--   <ion-col size=\"auto\">\r\n            <ion-button fill=\"outline\" \r\n                  color=\"dark\"\r\n                  size=\"small\"\r\n                  class=\"ion-text-capitalize\"  (click)=\"newPayment()\">\r\n              {{'NEW_PAYMENT' | translate}}\r\n            </ion-button>\r\n          </ion-col> -->\r\n        </ion-row> \r\n\r\n      <ion-row *ngFor=\"let trans of listData\">\r\n\r\n          <ion-col class=\"trans-item\" *ngIf=\"trans.type === 'beneficiary'\" > \r\n            <ion-card class=\"ion-no-margin\">     \r\n              <ion-card-content>\r\n                <div>\r\n                  <ion-text color=\"dark\">{{trans.data && trans.data.firstname ? trans.data.firstname : ''}} {{trans.data && trans.data.lastname ? trans.data.lastname : ''}}</ion-text><br />\r\n                  <small>{{'DATE_TEXT' | translate }}: {{trans.data && trans.data.updated_at ? trans.data.updated_at.split(' ')[0] : ''}}</small><br />\r\n                  <small>{{'CYCLE_TEXT' | translate }}: {{trans.data && trans.data.infos_seance && trans.data.infos_seance.numerocycle ? trans.data.infos_seance.numerocycle: ''}}/{{trans.data && trans.data.infos_seance && trans.data.infos_seance.numero_seance ? trans.data.infos_seance.numero_seance: ''}} | \r\n                    {{'AMOUNT_TEXT' | translate }} : {{trans.data && trans.data.somme ? (trans.data.somme  | commadumper) : 0}} {{trans.data && trans.data.device_name ? trans.data.device_name : ''}} | {{'REMAIN_TEXT' | translate}}: \r\n                    {{trans.data && trans.data.reste_a_payer ? (trans.data.reste_a_payer  | commadumper) : 0}} {{trans.data && trans.data.device_name ? trans.data.device_name : ''}}</small><br />\r\n                  <ion-text color=\"danger\">{{'STATUS_TEXT' | translate}}: {{trans.data && trans.data.status ? (trans.data.status | translate) : ''}} ({{trans.data && trans.data.liste_admin_approval ? trans.data.liste_admin_approval.length : 0 }}/{{nbValidator}})</ion-text>\r\n                </div>\r\n              </ion-card-content>\r\n              <ion-item lines=\"none\">\r\n                <ion-button fill=\"outline\" slot=\"end\" *ngIf=\"canInitiateJackpot(trans.data)\" (click)=\"openInitiatePay(trans.data)\">{{'INITIATE_PAIEMENT' | translate}}</ion-button>            \r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col> \r\n\r\n          <ion-col class=\"trans-item\" *ngIf=\"trans.type === 'beneficiaryInitiate'\" > \r\n            <ion-card class=\"ion-no-margin\">     \r\n              <ion-card-content>\r\n                <div>\r\n                  <ion-text color=\"dark\">{{trans.data && trans.data.firstname ? trans.data.firstname : ''}} {{trans.data && trans.data.lastname ? trans.data.lastname : ''}}</ion-text><br />\r\n                  <small>{{'DATE_TEXT' | translate }}: {{trans.data && trans.data.updated_at ? trans.data.updated_at.split(' ')[0] : ''}}</small><br />\r\n                  <small>{{'CYCLE_TEXT' | translate }}: {{trans.data && trans.data.infos_seance && trans.data.infos_seance.numerocycle ? trans.data.infos_seance.numerocycle: ''}}/{{trans.data && trans.data.infos_seance && trans.data.infos_seance.numero_seance ? trans.data.infos_seance.numero_seance: ''}} | \r\n                    {{'AMOUNT_TEXT' | translate }} : {{trans.data && trans.data.somme ? (trans.data.somme  | commadumper) : 0}} {{trans.data && trans.data.device_name ? trans.data.device_name : ''}} | {{'REMAIN_TEXT' | translate}}: \r\n                    {{trans.data && trans.data.reste_a_payer ? (trans.data.reste_a_payer  | commadumper) : 0}} {{trans.data && trans.data.device_name ? trans.data.device_name : ''}}</small><br />\r\n                  <ion-text color=\"danger\">{{'STATUS_TEXT' | translate}}: {{trans.data && trans.data.status ? (trans.data.status | translate) : ''}} ({{trans.data && trans.data.liste_admin_approval ? trans.data.liste_admin_approval.length : 1 }}/{{nbValidator}})</ion-text>\r\n                </div>\r\n              </ion-card-content>\r\n              <ion-item lines=\"none\">\r\n               <ion-button fill=\"outline\" slot=\"start\" (click)=\"viewBeneficialProof(trans.data)\">{{ 'VIEW_DETAIL_TEXT' | translate }}</ion-button> \r\n                <ion-button fill=\"outline\" slot=\"end\" *ngIf=\"canValidateJackpot(trans.data)\" (click)=\"openFundRepartition(trans.data)\">{{'FUND_REPARTITION' | translate}}</ion-button> \r\n                <ion-button fill=\"outline\" slot=\"end\" *ngIf=\"canPayJackpot(trans.data)\" (click)=\"makePayment(trans.data)\">{{'MAKE_PAYMENT_TEXT' | translate}}</ion-button>              \r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"trans-item\" *ngIf=\"trans.type === 'deposit'\">\r\n            <ion-card class=\"ion-no-margin\">     \r\n              <ion-card-content>\r\n                <div>\r\n                  <ion-text color=\"dark\">{{ 'TOPUP_WALLET_TEXT' | translate }}</ion-text><br />\r\n                  <small>{{'DATE_TEXT' | translate }}: {{trans.data && trans.data.updated_at ? trans.data.updated_at.split(' ')[0] : ''}}</small><br />\r\n                  <small>{{'AMOUNT_TEXT' | translate }}:{{trans.data && trans.data.amount ? (trans.data.amount  | commadumper) : 0 }} {{trans.data && trans.data.currency_name ? trans.data.currency_name : '' }}  \r\n                    <span>|</span> {{'METHOD_TEXT' | translate}}: \r\n                    <span *ngIf=\"trans.data && trans.data.with_cash===0\">{{trans.data && trans.data.method_payment_name ? trans.data.method_payment_name : '' }}</span>\r\n                    <span *ngIf=\"trans.data && trans.data.with_cash===1\">{{'CASH_PAYMENT' | translate }}</span>\r\n                  </small><br />\r\n                  <ion-text color=\"danger\">{{'STATUS_TEXT' | translate}}: {{trans.data && trans.data.status_transaction ? (trans.data.status_transaction | translate) : '' }} \r\n                     <span> ({{trans.data && trans.data.liste_admin_approval ? trans.data.liste_admin_approval.length : 1 }}/{{nbValidator}})</span>\r\n                    </ion-text>\r\n                </div>\r\n              </ion-card-content>\r\n              <ion-item lines=\"none\">\r\n                <ion-button fill=\"outline\" slot=\"start\" (click)=\"viewDepositProof(trans.data)\" >{{ 'VIEW_DETAIL_TEXT' | translate }}</ion-button>\r\n                <ion-button fill=\"outline\" slot=\"end\" *ngIf=\"canValidateDeposit(trans.data)\"   (click)=\"validateDeposit(trans.data)\">{{ 'VALIDATE_TEXT' | translate }}</ion-button>       \r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"trans-item\"  *ngIf=\"trans.type === 'withdrawal'\">\r\n            <ion-card class=\"ion-no-margin\">     \r\n              <ion-card-content>\r\n                <div>\r\n                  <ion-text color=\"dark\">{{ 'WITHDRAWAL_TEXT0' | translate }}</ion-text><br />\r\n                  <small>{{'DATE_TEXT' | translate }}: {{trans.data && trans.data.updated_at ? trans.data.updated_at.split(' ')[0] : ''}}</small><br />\r\n                  <small>{{'AMOUNT_TEXT' | translate }}: {{trans.data && trans.data.amount ? (trans.data.amount | commadumper) : 0 }} {{currentTontine && currentTontine.tontine ? currentTontine.tontine.monnaie : '' }}| {{'METHOD_TEXT' | translate}}: {{getPaymentName(trans.data.method_payment_id)}}</small><br />\r\n                  <ion-text color=\"danger\">{{'STATUS_TEXT' | translate}}: {{trans.data && trans.data.status ? (trans.data.status | translate) : '' }} ({{trans && trans.data && approvals[trans.data.id] ? approvals[trans.data.id].length : 1 }}/{{nbValidator}})</ion-text>\r\n                </div>\r\n              </ion-card-content>\r\n              <ion-item lines=\"none\">\r\n             <!--<ion-button fill=\"outline\" slot=\"start\" [disabled]=\"!canRefuseWithdrawal(trans.data,refusals[trans.data.id])\" (click)=\"rejectPayment(trans.data)\" >{{ 'REJECT_TEXT' | translate }}</ion-button>-->\r\n                <ion-button fill=\"outline\" slot=\"end\" [disabled]=\"!canValidateWithdrawal(trans.data,approvals[trans.data.id])\" (click)=\"validatePayment(trans.data)\">{{ 'VALIDATE_TEXT' | translate}}</ion-button>                \r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div  *ngIf=\"listData && listData.length === 0 && (!loadingList && !loading)\">\r\n    <p  class=\"ion-text-center\"> {{ 'HISTORY_TEXT3' | translate }}</p>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infinteScrollData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"{{ 'M_LOADING_MORE_DATA' | translate }}\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "vgCT":
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/wallet/fund-repartition/fund-repartition.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5kLXJlcGFydGl0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=wallet-wallet-module.js.map