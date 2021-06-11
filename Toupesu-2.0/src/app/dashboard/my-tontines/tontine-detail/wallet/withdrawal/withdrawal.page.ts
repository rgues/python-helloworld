import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { AddBankProfilComponent } from '../add-bank-profil/add-bank-profil.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { States } from 'src/app/shared/models/countries';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router } from '@angular/router';
import { UpdateBankProfilComponent } from '../update-bank-profil/update-bank-profil.component';
import { TontineService } from '../../../services/tontine.service';
import { WalletTontineService } from '../services/wallet-tontine.service';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { Storage } from '@ionic/storage';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { WalletTontineErrorService } from '../services/wallet-tontine-error.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.page.html',
  styleUrls: ['./withdrawal.page.scss'],
})
export class WithdrawalPage implements OnInit {
  currentBalance: any;
  bankList: any[];
  paymentMethods: any[];
  withdrawal: FormGroup;
  loading: boolean;
  currencyList: any;
  amounValid: boolean;
  maxAmount: number;
  amountErrorMessage: string;
  currentIndex: number;
  states: States[] = [];
  errorEmail: boolean;
  currentTontine: any;
  token: string;
  typesCaisses: any[] = [];
  listOfcountries: any;
  defautCountry: any;
  errorPhone: boolean;

  constructor(
    private walletError: WalletTontineErrorService,
    private storage: Storage,
    private modatCtrl: ModalController,
    private walletTontine: WalletTontineService,
    private paymentData: PaymentGlobalDataService,
    private zone: NgZone,
    private navcontroler: NavController,
    private tontine: TontineService,
    private translate: TranslateService,
    private ui: UiService,
    private event: EventService,
    private fb: FormBuilder,
    private router: Router,
    private error: ErrorService,
    private userService: UserService,
    private formUtil: FormUtilsService,
    private location: LocationService,
    private alertController: AlertController
  ) {
    this.bankList = [];
    this.currentIndex = 0;
    this.maxAmount = 0;
    this.currencyList = [];
    this.listOfcountries = [];
    this.loading = false;
    this.amountErrorMessage = '';
    this.amounValid = true;
    this.paymentMethods = [];
    this.errorEmail = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
    this.typesCaisses = [];
    this.errorPhone = false;
  }

  ngOnInit() {
    this.initForm();
    this.getBankList();
    this.getCurrentBalance();
    this.getCountries(false);
  }


  // Form getters
  get phoneId() {
    return this.withdrawal.get('phoneid');
  }

  get beneficiary() {
    return this.withdrawal.get('nom_beneficiaire');
  }


  get countryId() {
    return this.withdrawal.get('country_id');
  }

  get operatortype() {
    return this.withdrawal.get('method_payment_id');
  }

  get devise() {
    return this.withdrawal.get('device_name');
  }

  get amount() {
    return this.withdrawal.get('amount');
  }

  get bank() {
    return this.withdrawal.get('bank_name');
  }

  get branchCode() {
    return this.withdrawal.get('branch_code');
  }

  get branchName() {
    return this.withdrawal.get('branch_name');
  }

  get proprietaryName() {
    return this.withdrawal.get('nom_proprietaire');
  }

  get accountNber() {
    return this.withdrawal.get('account_number');
  }

  get accountName() {
    return this.withdrawal.get('account_name');
  }

  get address() {
    return this.withdrawal.get('address');
  }

  get phone() {
    return this.withdrawal.get('phoneNumber');
  }

  get email() {
    return this.withdrawal.get('email');
  }

  get checkoutName() {
    return this.withdrawal.get('type_caisse_tontine');
  }



  // Init the form
  initForm() {
    const currentUser = this.userService.getUserData();
    this.withdrawal = this.fb.group({
      token: [this.token],
      tontine_id: [this.currentTontine ? this.currentTontine.tontine.tontine_id : ''],
      method_payment_id: ['', Validators.required],
      device_name: [''],
      nom_beneficiaire: ['', Validators.compose([Validators.maxLength(100)])],
      direct_transfert_to_bank_account: [''],
      tontine_bank_profile_id: [0],
      type_caisse_tontine: ['', Validators.required],
      is_offline_withdraw: [0],
      amount: ['', Validators.compose([Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')])],
      bank_name: [''],
      account_name: [''],
      nom_proprietaire: [''],
      account_number: [''],
      branch_code: [''],
      branch_name: [''],
      address: [''],
      phone_number: [''],
      email: [currentUser && currentUser.email && this.formUtil.validateEmail(currentUser.email) ? currentUser.email : ''],
      phoneNumber: ['', Validators.compose([Validators.pattern('^[0-9]{6,13}$')])],
      phoneid: [''],
      country_id: ['']
    });
  }

  // check Email address
  checkEmail(email) {
    this.errorEmail = !this.formUtil.validateEmail(email);
  }

  // check phone
  checkPhone(phone) {
    this.errorPhone = !this.formUtil.validatePhone(phone);
  }

  // Remove space
  removeSpace() {
    this.withdrawal.get('amount').setValue(this.paymentData.removeInputSpace(this.withdrawal.value.amount));
  }

  // Remove space
  removeSpace1() {
    this.withdrawal.get('phoneNumber').setValue(this.paymentData.removeInputSpace(this.withdrawal.value.phoneNumber));
  }

  // Refresh the list
  refreSher(event) {
    this.getBankList();
    this.getCurrentBalance();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }


  // Get the list of the bank
  getBankList() {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      token: this.token
    }
    if (this.currentTontine.tontine.administrator === 1) {
      this.walletTontine.getAllBankProfile(param).subscribe((reponse: any) => {
        if (reponse && reponse.message === 'success') {
          this.bankList = [];
          reponse.data.forEach(bank => {
            if (bank && bank.active === 1) {
              this.bankList.push(bank);
            }
          });
          if (this.bankList && this.bankList.length > 0) {
            this.getBankdetail(this.bankList[0].id);
          }
        }
      }, error => {
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getBankList();
              }
            });
          } else {
            this.walletError.manageWalletTontineError(error);
          }
        } else {
          this.error.manageError(error);
        }
      });
    }

  }

  getCurrentBalance() {
    const param = { tontine_id: this.currentTontine.tontine.tontine_id };
    this.walletTontine.getTontineWallet(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.currentBalance = reponse.infos_wallet;
        this.storage.set(`tontine-wallet${param.tontine_id}`, { solde: this.currentBalance, caisse: reponse.detail_caisse });
        this.typesCaisses = [];
        let index = 0;
        reponse.detail_caisse.forEach(caise => {
          if (caise && caise.online_balance && caise.online_balance > 0) {
            this.translate.get(caise.caisse_name).subscribe(trans => {
              this.typesCaisses.push({
                index: index, id: caise.type_caisse_tontine_id, name: trans, tontine_id: caise.tontine_id,
                currency: this.currentTontine.tontine.monnaie, country_id: 0
              });
            });
            index++;
          }
        });
        this.getAllMethodPaymentType();
      }
    }, error => {


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
              this.getCurrentBalance();
            } else {
              this.loading = false;
              this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                this.currentBalance = walletData ? walletData.solde : [];
              });
            }
          });
        } else {
          this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
            this.currentBalance = walletData ? walletData.solde : [];
          });
        }

      } else {
        this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
          this.currentBalance = walletData ? walletData.solde : [];
        });
        this.error.manageError(error);
      }
    });

  }

  // Check the amount
  checkAmount(amount: any) {
    this.removeSpace();
    this.amounValid = true;
    this.loading = false;
    if (amount) {
      this.currentBalance.forEach(wallet => {
        if (wallet && wallet.device_name === this.withdrawal.value.device_name) {
          this.maxAmount = parseFloat(wallet.solde_device);
          parseFloat(amount) <= parseFloat(wallet.solde_device) ? this.amounValid = true : this.amounValid = false;
          this.translate.get('MAX_AMOUNT_MESSAGE').subscribe(trans => {
            this.amountErrorMessage = `${trans} ${this.maxAmount} ${wallet.device_name}`;
          });
        }
      });
    }
  }

  // ccheck if operator
  isOperator() {
    return this.paymentMethods && this.paymentMethods[this.currentIndex]
    && (this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY');
  }

  // check if it paypal
  isPayPal() {
    return this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name === 'PAYPAL';
  }

  // can make withdrawal
  canPay() {
    return !this.amounValid || (this.withdrawal.value.method_payment_id !== 0
       && !this.withdrawal.value.phoneNumber && this.paymentMethods && this.paymentMethods[this.currentIndex]
      && (this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY' || this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY'))
      || this.loading || this.withdrawal.invalid || (this.errorEmail && this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name === 'PAYPAL')
      || (this.errorPhone && this.paymentMethods && this.paymentMethods[this.currentIndex]
      && (this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY' ));
  }

  // Get the list of countries
  getCountries(refresher: boolean) {
    this.states = [];
    this.location.getAllCountries(refresher).then((countries: any) => {
      countries.forEach(country => {
        if (country && country.active === 1) {
          this.listOfcountries.push(country.country_id);
          if (country.default_country === 'yes') {
            this.defautCountry = country.country_id;
          }
        }
      });
      this.states = this.paymentData.formatCountriesData(countries);
      this.getCurrentCountry(false);
    });
  }


  // Set defaulft country parameter
  setDefaultCountry(prefix?: string, phone?: string) {
    // Get the list of country
    let countryExist = false;
    this.listOfcountries.forEach(countryId => {
      if (countryId === this.withdrawal.value.country_id) {
        this.updateCountryPrefix(this.withdrawal.value.country_id);
        countryExist = true;
      }
    });

    // We set the default country
    if (!countryExist) {
      this.updateCountryPrefix(this.defautCountry);
    }
  }


  // Set the default country
  getCurrentCountry(refresher: boolean) {
    const userCountry = this.location.getCurrentUserCountry();
    if (userCountry) {
      if (userCountry.active === 1) {
        this.updateCountryPrefix(userCountry.country_id);
      } else {
        this.setDefaultCountry();
      }
    } else {
      this.location.getCurrentCountryInfo(refresher).then((country: any) => {
        if (country) {
          if (country.settings.active === 1) {
            this.updateCountryPrefix(country.settings.country_id);
          } else {
            this.setDefaultCountry();
          }
        } else {
          this.setDefaultCountry();
        }
      }).catch(error => {
      });
    }
  }

  // Update the country
  updateCountryPrefix(currentCountry: any) {
    this.states.forEach(state => {
      if (state.country_id === currentCountry) {
        this.withdrawal.get('phoneid').setValue(state.country_prefixe);
        this.withdrawal.get('country_id').setValue(state.country_id);
      }
    });
  }

  // update the payment device
  updatePayment(paymentId: number) {
    let index = 0;
    this.paymentMethods.forEach(payment => {
      if (payment.id === paymentId && paymentId !== 0) {
        this.currentIndex = index;
        if (payment.name === 'PAYPAL') {
          this.errorPhone = false;
          this.checkEmail(this.withdrawal.value.email);
        } else {
          this.errorEmail = false;
          this.checkPhone(this.withdrawal.value.phoneNumber);
        }
        this.withdrawal.get('device_name').setValue(payment.currency);
      } else if (paymentId === 0) {
        this.currentIndex = index;
        this.errorEmail = false;
        this.errorPhone = false;
      }
      index++;
    });
  }

  // Get a bank detail informations
  getBankdetail(bankId: number) {
    this.withdrawal.get('tontine_bank_profile_id').setValue(bankId);
    this.bankList.forEach(bank => {
      if (bank.id === bankId) {
        this.withdrawal.get('bank_name').setValue(bank.bank_name);
        this.withdrawal.get('branch_name').setValue(bank.branch_name ? bank.branch_name : '');
        this.withdrawal.get('branch_code').setValue(bank.branch_code ? bank.branch_code : '');
        this.withdrawal.get('address').setValue(bank.address);
        this.withdrawal.get('account_name').setValue(bank.account_name);
        this.withdrawal.get('nom_proprietaire').setValue(bank.name_proprietaire);
        this.withdrawal.get('account_number').setValue(bank.account_number);
      }
    });
  }


  // get all payment method
  getAllMethodPaymentType() {
    this.userService.getAllMethodPaymentType().subscribe((reponse: any) => {
      this.paymentMethods = [];
      const paymentList = this.paymentData.filterPaymentMethodByDevise(reponse.typePayment, this.currentBalance);
      if (paymentList && paymentList.length > 0) {
          this.paymentMethods = this.paymentData.formatWithdrawData(paymentList);
      }
      this.translate.get('BANK_TRANSFER').subscribe(trans => {
        this.paymentMethods.push({
          id: 0, country_id: 0,
          logo: 'assets/wallet-icon.svg', name: trans, label: trans, currency: ''
        });
      });

      this.zone.run(() => {
        this.paymentMethods = this.paymentMethods;
      });

      // By default Select the fisrt element

      setTimeout(() => {
        this.withdrawal.get('method_payment_id').setValue(0);
        this.currentIndex = 0;
      }, 200);

      this.updatePayment(0);
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getAllMethodPaymentType();
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }



   // get the user pin
   async getUserPin(translations: string[]) {
    const userPin = this.userService.getUserSecret();
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      inputs: [
        {
          name: 'pin',
          type: 'tel',
          placeholder: `${translations[1]}`,
        }
      ],
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: `${translations[3]}`,
          handler: (ans) => {

            // Check if the pin is correct
            if (parseInt(ans.pin, 10) === parseInt(userPin.password, 10)) {
              // call function
              this.sendBankRequest();
            } else {
              this.translate.get('M_PIN_INVALID').subscribe(trans => {
                this.ui.presentToast(trans);
              });
            }

          }
        }
      ]
    });
    await alert.present();
  }

  // check the number
  checkNumberAndPin() {
    const user = this.userService.getUserSecret();
    if (this.withdrawal.value.phoneNumber === user.email_or_phone) {
      this.sendBankRequest();
    } else {
       const transalation =  this.ui.confirmPin();
       console.log(transalation);
       this.getUserPin(transalation);
    }
  }

  // Add a new account
  sendBankRequest() {

     this.loading = true;
    if (this.withdrawal.value.method_payment_id === 0) {
      this.withdrawal.get('direct_transfert_to_bank_account').setValue(1);
    } else {
      this.withdrawal.get('direct_transfert_to_bank_account').setValue(0);
      this.withdrawal.get('phone_number').setValue(this.withdrawal.value.phoneid + this.withdrawal.value.phoneNumber);
    }
    this.walletTontine.newWithdrawalRequest(this.withdrawal.value)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get(['BANK_REQUEST_SUBMIT', 'WITHDRAWAL_TEXT0', 'WITHDRAWAL_DEBIT_ORDER']).subscribe(trans => {
            this.ui.presentAlert(trans.WITHDRAWAL_TEXT0, `${trans.BANK_REQUEST_SUBMIT} ${trans.WITHDRAWAL_DEBIT_ORDER} ${this.withdrawal.value.amount} ${this.withdrawal.value.device_name}`);
          });
          this.event.publish('wallet-withdrawal');
          this.getBankList();
          this.getCurrentBalance();
          this.initForm();
          this.getCountries(false);
          this.getCurrentCountry(false);
          this.navcontroler.setDirection('root');
          this.router.navigate(['dashboard', 'tontine', this.currentTontine.tontine.tontine_id, 'wallet']);
        }
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.sendBankRequest();
              } else {
                this.loading = false;
              }
            });
          } else {
            this.walletError.manageWalletTontineError(error);
          }
        } else {
          this.error.manageError(error);
        }
      });
  }

  // Open add bank profile Modal
  openAddBank() {
    this.modatCtrl
      .create({
        component: AddBankProfilComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(() => {
          this.getBankList();
        });
      });
  }

  // Open update bank profile Modal
  openUpdateBank(param: any) {
    this.modatCtrl
      .create({
        component: UpdateBankProfilComponent,
        componentProps: {
          data: param
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(() => {
          this.getBankList();
        });
      });
  }

  // Confirm the delete message
  confirmDeleteAccount(bankId: any) {
    const translations = [];
    this.translate.get(['DELETE_BANK_INFO', 'DELETE_ACCOUNT_CONFIRMATION', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translations.push(trans.DELETE_BANK_INFO);
      translations.push(trans.DELETE_ACCOUNT_CONFIRMATION);
      translations.push(trans.CANCEL_TEXT);
      translations.push(trans.YES_TEXT);
      this.confirmMessage(translations, bankId);
    });
  }

  // Delete message
  async confirmMessage(translations: any, bankId: any) {
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      message: `${translations[1]}`,
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: `${translations[3]}`,
          handler: () => {
            this.deleteAccount(bankId);
          }
        }
      ]
    });
    await alert.present();
  }

  // Delete a new account
  deleteAccount(bankId: any) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      tontine_bank_profile_id: bankId,
      token: this.token
    }
    this.loading = true;
    this.walletTontine.deleteTontineBankProfile(param)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('BANK_DELETE_SUCCESS_MESSAGE').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.getBankList();
        }
      }, error => {

        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.deleteAccount(bankId);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.loading = false;
            this.walletError.manageWalletTontineError(error);
          }
        } else {
          this.loading = false;
          this.error.manageError(error);
        }
      });
  }

}
