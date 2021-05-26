import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { WalletMenuComponent } from './wallet-menu/wallet-menu.component';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { WalletTontineService } from './services/wallet-tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { InitiatePayComponent } from 'src/app/shared/initiate-pay/initiate-pay.component';
import { PaidProofsComponent } from './paid-proofs/paid-proofs.component';
import { DebtsManagerService } from '../../services/debts-manager.service';
import { BeneficialProofsComponent } from './beneficial-proofs/beneficial-proofs.component';
import { FundRepartitionComponent } from './fund-repartition/fund-repartition.component';
import { ContributionOrderComponent } from 'src/app/shared/contribution-order/contribution-order.component';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { WalletTontineErrorService } from './services/wallet-tontine-error.service';
import { UtilService } from 'src/app/shared/service/util.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  currentTontine: any;
  currentUser: any;
  walletTontines: any;
  onlineBalance: any;
  offlineBalance: any;
  detailCaisses: any;
  loading: boolean;
  loadingList: boolean;
  allData: any;
  tempData: any;
  nbItems: number;
  listData: any;
  nbValidator: number;
  tradiBankList: any;
  beneficiaries: any;
  beneficiariesInitiate: any;
  token: string;
  withdrawalList: any[] = [];
  approvalMembers: any[] = [];
  refusalMembers: any[] = [];
  paymentMethods: any[] = [];
  approvals: any[] = [];
  refusals: any[] = [];
  isAdmin: boolean;
  memberId: number;


  constructor(
    private popoverController: PopoverController,
    private paymentData: PaymentGlobalDataService,
    private walletError: WalletTontineErrorService,
    private tontine: TontineService,
    private tontineData: TontineGlobalDataService,
    private walletTontine: WalletTontineService,
    private debt: DebtsManagerService,
    private user: UserService,
    private events: EventService,
    private modatCtrl: ModalController,
    private storage: StorageData,
    private translate: TranslateService,
    private error: ErrorService,
    private ui: UiService,
    private util: UtilService
  ) {

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
        } else if (this.listData.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 2000);
  }

  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: WalletMenuComponent,
      event: ev
    });
    return await popover.present();
  }

  // Open the initiate payment
  openInitiatePay(data: any) {
    this.debt.sendDebtsData(data);
    this.modatCtrl
      .create({
        component: InitiatePayComponent,
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
        component: InitiatePayComponent,
        componentProps: {
          tontineName: this.currentTontine.tontine.name,
          type: 'new'
        }
      })
      .then(modalEl => modalEl.present());
  }

  // can validate deposit
  canValidateDeposit(data: any) {
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
  canInitiateJackpot(data: any) {
    let canInitiate = true;
    let ican = false;
    if (data.liste_admin_approval && data.liste_admin_approval.length > 0) {
      canInitiate = false
    }
    if (data && data.status === 'pending' && canInitiate && this.isAdmin) {
      ican = true;
    }
    return ican;
  }

  // can validate the payment
  canValidateJackpot(data: any) {
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
  canValidateWithdrawal(data: any, liste_admin_approval: any[], liste_admin_refusal?: any[]) {
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
    return this.currentTontine&&this.currentTontine.tontine && this.currentTontine.tontine.tontine_payment_type_id === 1;
  }

  // open the funf repartition fund for validation
  openFundRepartition(data: any) {
    this.debt.sendDebtsData({ bouffe: data, wallet: this.detailCaisses });
    this.modatCtrl
      .create({
        component: FundRepartitionComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans: any) => {
          if (ans && ans.data === 'validate') {
            this.getWalletData(null);
          }
        })
      });
  }

  // Make the payment
  makePayment(data: any) {
    this.debt.sendDebtsData(data);
    this.modatCtrl
      .create({
        component: ContributionOrderComponent,
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
  viewDepositProof(data: any) {
    this.modatCtrl
      .create({
        component: PaidProofsComponent,
        componentProps: {
          reference: data.reference_transaction
        }
      })
      .then(modalEl => modalEl.present());
  }

  // View the beneficial proofs
  viewBeneficialProof(data: any) {
    this.debt.sendDebtsData(data);
    this.modatCtrl
      .create({
        component: BeneficialProofsComponent
      })
      .then(modalEl => modalEl.present());
  }

  // Validate the transaction
  validateDeposit(data: any) {
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
      .subscribe((reponse: any) => {
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
            this.error.renewSession().then((ans: any) => {
              this.ui.dismissLoading();
              if (ans && ans.result === "OK") {
                this.validateDeposit(data);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.ui.dismissLoading();
            this.walletError.manageWalletTontineError(error);
          }

        } else {
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }

  // Reject the transaction
  rejectDeposit(data: any) {
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
      .subscribe((reponse: any) => {
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
            this.error.renewSession().then((ans: any) => {
              this.ui.dismissLoading();
              if (ans && ans.result === "OK") {
                this.rejectDeposit(data);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.walletError.manageWalletTontineError(error);
            this.ui.dismissLoading();
          }

        } else {
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }

  // ====================== Withdrawal request =========================

  // Validate the withdrawal transaction
  validatePayment(data: any) {
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
      .subscribe((reponse: any) => {
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
            this.error.renewSession().then((ans: any) => {
              this.ui.dismissLoading();
              if (ans && ans.result === "OK") {
                this.validatePayment(data);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.ui.dismissLoading();
            this.walletError.manageWalletTontineError(error);
          }

        } else {
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }

  // Reject the transaction
  rejectPayment(data: any) {
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
      .subscribe((reponse: any) => {
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
            this.error.renewSession().then((ans: any) => {
              this.ui.dismissLoading();
              if (ans && ans.result === "OK") {
                this.rejectPayment(data);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.ui.dismissLoading();
            this.walletError.manageWalletTontineError(error);
          }

        } else {
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }

  // Get approval members
  getApprovalMembers(requestId: number) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      withdraw_request_id: requestId,
      token: this.token
    };
    this.approvalMembers = [];
    this.walletTontine.getAllApprovalRequest(param)
      .subscribe((reponse: any) => {
        if (reponse && reponse.data && reponse.data.length > 0) {
          this.approvalMembers = reponse.data;
          this.approvals[requestId] = this.approvalMembers;
        } else {
          this.approvals[requestId] = [];
        }
      }, error => {
        if (error && error.error && error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getApprovalMembers(requestId);
            }
          });
        } else {
          this.error.manageError(error);
        }
      });
  }

  // Get refusal members
  getRefusalMembers(requestId: number) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      withdraw_request_id: requestId,
      token: this.token
    };
    this.refusalMembers = [];
    this.walletTontine.getAllRefusalRequest(param)
      .subscribe((reponse: any) => {
        if (reponse && reponse.data && reponse.data.length > 0) {
          this.refusalMembers = reponse.data;
          this.refusals[requestId] = this.refusalMembers;
        } else {
          this.refusals[requestId] = [];
        }
      }, error => {
        if (error && error.error && error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getRefusalMembers(requestId);
            }
          });
        } else {
          this.error.manageError(error);
        }
      });
    return this.refusalMembers;
  }

  // get all operator payments method
  getAllMethodPaymentType() {
    this.user.getAllMethodPaymentType().subscribe((reponse: any) => {
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
  getPaymentName(paymentId: number) {
    return this.paymentData.getPaymentName(this.paymentMethods, paymentId);
  }

  // Get the wallet data
  getWalletData(event) {
    const param = { tontine_id: this.currentTontine.tontine.tontine_id };
    this.walletTontine.getTontineWallet(param).subscribe((reponse: any) => {
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
        this.detailCaisses = this.tontineData.filterTontineBalance(this.detailCaisses,this.currentTontine.tontine);
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
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getWalletData(event);
            } else {
              this.loading = false;
            }
          });
        }
      } else {
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
  formatTontineWalletReponse(transactionData: any, typeData: string) {

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
        this.getApprovalMembers(trans.id)
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
    } else {
      this.listData = this.allData;
    }
  }

  // Get pending deposit transactions of wallet to validate by admins
  getPendingTransactions(event) {
    if (!event) {
      this.loadingList = true;
    }
    const param = { tontine_id: this.currentTontine.tontine.tontine_id };
    this.walletTontine.getTradiBankingTransactionToValidate(param).subscribe((reponse: any) => {
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
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getPendingTransactions(event);
          }
        });
      } else {
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
    this.walletTontine.geAlltWithdrawallRequest(param).subscribe((reponse: any) => {
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
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getWithdrawalTransactions(event);
          } else {
            this.loadingList = false;
          }
        });
      } else {
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
      }
      this.debt.getPendingBeneficiariesNotInitiate(param).subscribe((reponse: any) => {
        this.loadingList = false;
        if (reponse && reponse.message === 'success') {
          this.formatTontineWalletReponse(reponse.bouffages, 'beneficiary');
        }
        // Get the beneficiary  initiate
        this.getBeneficiaryInitiate(event)
      }, error => {
        this.loadingList = false;
        if (event) {
          event.target.complete();
        }

        if (error && error.error && error.error.message === 'error') {
          if (error && error.error && error.error.user_not_found) {
            this.loadingList = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getBeneficiary(event);
              } else {
                this.loadingList = false;
              }
            });
          } else {
            this.walletError.manageWalletTontineError(error);
          }
        }
         else {
          this.error.manageError(error);
        }
      });
    } else {
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
      }
      this.debt.getPendingBeneficiariesInitiate(param).subscribe((reponse: any) => {
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
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getBeneficiaryInitiate(event);
              } else {
                this.loadingList = false;
              }
            });
          } else {
            this.walletError.manageWalletTontineError(error);
          }
        } else {
          this.error.manageError(error);
        }
      });
    } else {
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }
  }

}
