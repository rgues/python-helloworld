import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import { AddBankProfilComponent } from '../add-bank-profil/add-bank-profil.component';
import { ContributionService } from '../../my-tontines/services/contribution.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { States } from 'src/app/shared/models/countries';
import { WalletService } from '../service/wallet.service';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router } from '@angular/router';
import { UpdateBankProfilComponent } from '../update-bank-profil/update-bank-profil.component';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { WalletErrorService } from 'src/app/dashboard/my-wallet/service/wallet-error.service';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { UserService } from '../../user/service/user.service';

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
  defautCountry: any;
  listOfcountries: any;
  validationMessages: any;
  errorPhone: boolean;

  constructor(
    private contribution: ContributionService,
    private wallet: WalletService,
    private modatCtrl: ModalController,
    private paymentData: PaymentGlobalDataService,
    private ui: UiService,
    private zone: NgZone,
    private translate: TranslateService,
    private storage: StorageData,
    private fb: FormBuilder,
    private router: Router,
    private error: ErrorService,
    private userService: UserService,
    private location: LocationService,
    private formUtil: FormUtilsService,
    private alertController: AlertController,
    private walletError: WalletErrorService
  ) {
    this.bankList = [];
    this.currentIndex = 0;
    this.maxAmount = 0;
    this.currencyList = [];
    this.loading = false;
    this.amountErrorMessage = '';
    this.amounValid = true;
    this.paymentMethods = [];
    this.errorEmail = false;
    this.errorPhone = false;
    this.listOfcountries = [];
  }

  ngOnInit() {
    this.initForm();
    this.getBankList();
    this.getCurrentBalance();
  }


  // Form getters
  get phoneId() {
    return this.withdrawal.get('phoneid');
  }

  get countryId() {
    return this.withdrawal.get('country_id');
  }

  get beneficiary() {
    return this.withdrawal.get('nom_beneficiaire');
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

  get accountName() {
    return this.withdrawal.get('nom_proprietaire');
  }

  get accountNber() {
    return this.withdrawal.get('account_number');
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

  // Init the form
  initForm() {
    const currentUser = this.userService.getUserData();
    this.withdrawal = this.fb.group({
      method_payment_id: ['', Validators.required],
      device_name: [''],
      direct_transfert_to_bank_account: [''],
      user_bank_profile_id: [''],
      nom_beneficiaire: ['', Validators.compose([Validators.maxLength(100)])],
      amount: ['', Validators.compose([Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')])],
      bank_name: [''],
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

    this.checkEmail(this.withdrawal.value.email);
  }

  // Refresh the list
  refreSher(event) {
    this.getBankList();
    this.getCurrentBalance();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
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

  // check if is operator
  isOperator() {
    return this.paymentMethods && this.paymentMethods[this.currentIndex] &&(this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY');
  }

  // check if is paypal
  isPaypal() {
    return this.paymentMethods && this.paymentMethods[this.currentIndex] &&this.paymentMethods[this.currentIndex].name === 'PAYPAL';
  }

  // can make disable the withdrawal
  canDisabledWithdrawal() {
    return !this.amounValid 
    || (this.withdrawal.value.method_payment_id !== 0 && this.paymentMethods && this.paymentMethods[this.currentIndex] &&this.paymentMethods[this.currentIndex].name !== 'PAYPAL' && !this.withdrawal.value.phoneNumber) 
    || this.loading || this.withdrawal.invalid ||
    (this.errorEmail && this.paymentMethods && this.paymentMethods[this.currentIndex] && this.paymentMethods[this.currentIndex].name === 'PAYPAL') 
    || (this.errorPhone && this.paymentMethods && this.paymentMethods[this.currentIndex] && (this.paymentMethods[this.currentIndex].name === 'MTN MOBILE MONEY' || this.paymentMethods[this.currentIndex].name === 'ORANGE MONEY' ));
  }

  // Get the list of the bank
  getBankList() {
    this.wallet.getAllBank().subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.bankList = [];
        reponse.bank.forEach(bank => {
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
        }
      } else {
        this.error.manageError(error);
      }

    });
  }

  // get the current balamce of the user
  getCurrentBalance() {
    this.contribution.getUserWallet().subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.currentBalance = reponse.PorteMonnaieUser;
        this.storage.set('current-balance', reponse.PorteMonnaieUser);
        this.getAllMethodPaymentType();
      }
    }, error => {

      if (error && error.error && error.error.user_not_found) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getCurrentBalance();
          } else {
            this.storage.get('current-balance').then(data => {
              this.currentBalance = data ? data : [];
            });
          }
        });
      } else {
        this.storage.get('current-balance').then(data => {
          this.currentBalance = data ? data : [];
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

  // Get the list of countries
  getCountries(refresher: boolean) {
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
        this.updateCountryPrefix(this.withdrawal.value.country_id, prefix, phone);
        countryExist = true;
      }
    });

    // We set the default country
    if (!countryExist) {
      this.updateCountryPrefix(this.defautCountry, prefix, phone);
    }
  }

  // Set the default country
  getCurrentCountry(refresher: boolean) {
    const userCountry = this.location.getCurrentUserCountry();
    const credentials = this.userService.getUserSecret();
    const prefix = credentials ? credentials.phone_prefix : '';
    const phone = credentials ? credentials.email_or_phone : '';

    if (userCountry) {
      if (userCountry.active === 1) {
        this.updateCountryPrefix(userCountry.country_id, prefix, phone);
      } else {
        this.setDefaultCountry(prefix, phone);
      }
    } else {
      this.location.getCurrentCountryInfo(refresher).then((country: any) => {
        if (country) {
          if (country.settings.active === 1) {
            this.updateCountryPrefix(country.settings.country_id, prefix, phone);
          } else {
            this.setDefaultCountry(prefix, phone);
          }
        } else {
          this.setDefaultCountry(prefix, phone);
        }
      }).catch(error => {
      });
    }
  }

  // Update the country
  updateCountryPrefix(currentCountry: any, prefix?: string, phone?: string) {
    this.states.forEach(state => {
      if (state.country_id === currentCountry) {
        this.withdrawal.get('phoneid').setValue(state.country_prefixe);
        this.withdrawal.get('country_id').setValue(state.country_id);

        // set the default phone number
        if (state.country_prefixe === prefix && phone) {
          this.withdrawal.get('phoneNumber').setValue(phone);
          this.checkPhone(this.withdrawal.value.phoneNumber);
        }
      }
    });
  }

  // update the payment device
  updatePayment(paymentId: number) {
    let index = 0;
    this.paymentMethods.forEach(payment => {
      if (payment.id === paymentId && paymentId !== 0) {
        this.currentIndex = index;
        this.withdrawal.get('device_name').setValue(payment.currency);
        if (payment.name === 'PAYPAL') {
          this.errorPhone = false;
          this.checkEmail(this.withdrawal.value.email);
        } else {
          this.errorEmail = false;
          this.checkPhone(this.withdrawal.value.phoneNumber);
        }

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
    this.withdrawal.get('user_bank_profile_id').setValue(bankId);
    this.bankList.forEach(bank => {
      if (bank.id === bankId) {
        this.withdrawal.get('bank_name').setValue(bank.bank_name);
        this.withdrawal.get('branch_name').setValue(bank.branch_name ? bank.branch_name : '');
        this.withdrawal.get('branch_code').setValue(bank.branch_code ? bank.branch_code : '');
        this.withdrawal.get('address').setValue(bank.address);
        this.withdrawal.get('nom_proprietaire').setValue(bank.name_proprietaire);
        this.withdrawal.get('account_number').setValue(bank.account_number);
      }
    });
  }

  // get all payment method
  getAllMethodPaymentType() {
    this.userService.getAllMethodPaymentType().subscribe((reponse: any) => {

      this.paymentMethods = [];
      const paymentList = this.paymentData.filterPaymentMethodByCurrency(reponse.typePayment, this.currentBalance);
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
      this.currentIndex = 0;
      setTimeout(() => {
        this.withdrawal.get('method_payment_id').setValue(0);
      }, 200);

      this.updatePayment(0);
      this.getCountries(false);
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
  confirmDeleteAccount(data: any) {
    const translations = [];
    this.translate.get(['DELETE_BANK_INFO', 'DELETE_ACCOUNT_CONFIRMATION', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translations.push(trans.DELETE_BANK_INFO);
      translations.push(trans.DELETE_ACCOUNT_CONFIRMATION);
      translations.push(trans.CANCEL_TEXT);
      translations.push(trans.YES_TEXT);
      this.confirmMessage(translations, data);
    });
  }

  // Delete message
  async confirmMessage(translations: any, data: any) {
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
            this.deleteAccount(data);
          }
        }
      ]
    });
    await alert.present();
  }

  // Delete a new account
  deleteAccount(data: any) {
    this.loading = true;
    this.wallet.DeleteBankProfile({ user_bank_profile_id: data })
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('BANK_DELETE_SUCCESS_MESSAGE').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.getBankList();
        }
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_bank_profile_id_not_exist) {
            this.translate.get('BANK_NAME_NOT_EXIST').subscribe(trans => {
              this.ui.presentToast(trans);
            });
          }
          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((ans: any) => {
              if (ans && ans.result === "OK") {
                this.deleteAccount(data);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.walletError.manageWalletError(error);
          }
        } else {
          this.error.manageError(error);
        }
      });
  }

    // check the number 
    checkNumberAndPin() {
      const user = this.userService.getUserSecret();
      if (this.withdrawal.value.phoneNumber === user.email_or_phone) {
        this.sendBankRequest();
      } else {
          this.ui.confirmPin(this.sendBankRequest);
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

    this.wallet.submitRequest(this.withdrawal.value)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get(['BANK_REQUEST_SUBMIT', 'WITHDRAWAL_TEXT0', 'WITHDRAWAL_DEBIT_ORDER']).subscribe(trans => {
            this.ui.presentAlert(trans.WITHDRAWAL_TEXT0, `${trans.BANK_REQUEST_SUBMIT} ${trans.WITHDRAWAL_DEBIT_ORDER} ${this.withdrawal.value.amount} ${this.withdrawal.value.device_name}`);
          });
          this.getBankList();
          this.getCurrentBalance();
          this.initForm();
          this.getCountries(false);
          this.router.navigate(['dashboard/my-wallet/history']);
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
            this.walletError.manageWalletError(error);
          }
        } else {
          this.error.manageError(error);
        }
      }); 
  }

}
