import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { ContributionService } from 'src/app/dashboard/my-tontines/services/contribution.service';
import { WalletService } from 'src/app/dashboard/my-wallet/service/wallet.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { CurrencyService } from 'src/app/shared/service/currency.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { LocationService } from 'src/app/shared/service/location.service';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { WalletErrorService } from 'src/app/dashboard/my-wallet/service/wallet-error.service';
import { Storage } from '@ionic/storage';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
declare var paypal: any;

interface PaymentMethod {
  id: number;
  logo: string;
  currency: string;
  country_id: number;
  name: string;
  placeholder ?: string;
  handling_fees?: number;
  type_handling_fees?: string;
}

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss'],
})
export class TopUpComponent implements OnInit {

  paymentMethods: PaymentMethod[];
  paypalMessage: string;
  userPayMethodForm: FormGroup;
  currentCountryId: number;
  states: any;
  loadingOperator: boolean;
  tontineData: any;
  contributionData: any;
  errorPhone: boolean;
  loading: boolean;
  defaultState: any;
  cron: any;
  timeOut: any;
  contributionDataParams: any;
  pin: string;
  spinner: any;
  browser: any;
  allPaymentMethods: any;
  isMTNpayment: boolean;
  paymentLink: string;
  currentBalance: any;
  paypalLoading: boolean;
  refresher: boolean;
  operatorId: number;
  paymentForm: FormGroup;
  reference: string;
  defautCountry: any;
  listOfcountries: any;
  currentUser: any;
  validationMessages: any;
  paypal_initialized: boolean;
  loadingBalance: boolean;
  walletData: any;
  refernceId: string;

  static montant: number;
  @Input() amountPay: number;
  @ViewChild('paypalbuttoncontainer', { static: false }) paypalbuttoncontainer: ElementRef;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public zone: NgZone,
    private ui: UiService,
    private api : ApiService,
    private paymentData: PaymentGlobalDataService,
    private storage: Storage,
    private currency: CurrencyService,
    private contribution: ContributionService,
    private platform: Platform,
    private alertController: AlertController,
    private wallet: WalletService,
    private tontine: TontineService,
    private errorService: ErrorService,
    private location: LocationService,
    private translate: TranslateService,
    private error: ErrorService,
    private formUtil: FormUtilsService,
    private walletError: WalletErrorService,
    private router: Router
  ) {
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
    TopUpComponent.montant = 0;
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
      country_id: ['', Validators.required],
      country_prefix: [''],
      countryId: [''],
      handleFees: [''],
      handleFeesType: [''],
      device_depart: [''],
      device_arrivee: [''],
      montant_device_depart: [''],
      montant_device_arrivee: [''],
      device_name: [''], // payment method country
      currency: ['', Validators.required], // country currency
      currencyLabel: [''],
      pay_token: [''],
      url: [''],
      montant: [''],
      montantSansFees: ['', Validators.compose([Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')])],
      montantTotal: [''],
      type_payment_id: [currentPayment ? currentPayment.typepaiement_id : ''],
      type_payment_name: [currentPayment ? currentPayment.name : ''],
      typePaymentIndex: [0, Validators.required],
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
    return this.userPayMethodForm.value.montantSansFees && this.paymentData.hasPaypalMessage(this.paypalMessage,this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
  }


  // can show  paypal button
  canShowPaypalButton() {
    return this.paymentData.hasPaypalButton(this.paypal_initialized,this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
  }

  // can make payment 
  canPay() {
    return this.paymentData.canShowPayment(this.userPayMethodForm.valid,this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex],this.userPayMethodForm.value.phone,this.errorPhone);
  }

  // check if emial or phone is valid
  checckEmailOrPhone(inputValue: string, index: number) {
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
    this.contribution.getUserWallet().subscribe((reponse: any) => {
      this.loadingBalance = false;
      if (reponse && reponse.message === 'success') {
        this.storage.set('current-balance', reponse.PorteMonnaieUser);
        this.currentBalance = reponse.PorteMonnaieUser;
      }
    }, error => {
      this.loadingBalance = false;
      if (error && error.error && error.error.user_not_found) {
        this.loadingBalance = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getCurrentBalance();
          } else {
            this.loadingBalance = false;
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

  // get all payment method
  getAllMethodPaymentType() {
    this.loadingOperator = true;
    this.userService.getAllMethodPaymentType().subscribe((reponse: any) => {
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
  updateCurrencyCountry(countryId: any) {
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
  getCurrentCountry(refresher: boolean) {
    const userCountry = this.location.getCurrentUserCountry();
    if (userCountry) {
      if (userCountry.active === 1) {
        setTimeout(() => {
          this.updateFormData(userCountry);
        }, 200);
      } else {
        this.setDefaultCountry();
      }
    } else {
      this.location.getCurrentCountryInfo(refresher).then((country: any) => {
        if (country) {
          this.defaultState = country.settings;
          if (this.defaultState.active === 1) {
            setTimeout(() => {
              this.updateFormData(this.defaultState);
            }, 200);
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

  // Get all countries
  getCountries(refresher: boolean) {
    this.location.getAllCountries(refresher).then((countries: any) => {
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
  updateFormData(country: any) {
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


  updatePaymentsMethods(countryId: number) {
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
      } else {
        amount = amount + handlefees;
      }
    }

    if (this.userPayMethodForm.value.currency === 'XAF' || this.userPayMethodForm.value.currency === 'XOF' || this.userPayMethodForm.value.currency === 'ZAR') {
      amount = Math.ceil(amount);
    } else {
      amount = parseFloat(Number(amount).toFixed(2));
    }

    this.userPayMethodForm.get('montantTotal').setValue(amount);
    this.userPayMethodForm.get('montant_device_arrivee').setValue(this.userPayMethodForm.value.montantSansFees);

    this.updatePayPalAmount();
    
  }


  // step 1 :  Show payment confirmation dialog with handle fees
  showPayment(data: any) {

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

    } else {

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

    } else {
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

    } else {
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
            TopUpComponent.montant = this.userPayMethodForm.value.montant;
            this.setupPayPalPay();
          });

        } else {
          this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
              this.paypalMessage = value;
          });
        }

        });
      } else {

        this.userPayMethodForm.get('montant').setValue(this.userPayMethodForm.value.montantTotal);

        this.translate.get('PAIDMODE_MSG2').subscribe(value => {
          this.paypalMessage = `${value}  ${this.userPayMethodForm.value.montant} ${this.userPayMethodForm.value.currency}`;
          // set paypal amount to pay
          TopUpComponent.montant = this.userPayMethodForm.value.montant;
          this.setupPayPalPay();
        });

      }
    }
  }
  }


  // Update parameters PAYPAL
  updateParametersPaypal(payToken: string) {
    this.userPayMethodForm.get('pay_token').setValue(payToken);
    this.userPayMethodForm.get('operator').setValue('paypal');
    this.userPayMethodForm.get('device_depart').setValue(this.userPayMethodForm.value.device_name);

    if (this.userPayMethodForm.value.currency !== this.userPayMethodForm.value.device_name) {

      this.currency.convert(this.userPayMethodForm.value.currency, this.userPayMethodForm.value.device_name, this.userPayMethodForm.value.montantSansFees)
        .then(montantSansFees => {
          if (montantSansFees) {
          this.userPayMethodForm.get('montant_device_depart').setValue(montantSansFees ? montantSansFees : 0);
          this.recharcheWithConversionOperator(this.userPayMethodForm.value);
        } else {
          this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
            this.ui.presentToast(value);
          });
        }
        });

    } else {

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
    if (TopUpComponent.montant > 0 && this.paypalbuttoncontainer) {
      this.paypalLoading = true;
      this.paypal_initialized = true;
      let paypalbuttoncontainer = this.paypalbuttoncontainer.nativeElement as HTMLDivElement
      let _this = this;

      if (paypal) {
        paypal.Button.render({
          env: 'production', // sandbox | production
          style: {
            size: 'responsive',
            color: 'gold',
            shape: 'pill',
            label: 'checkout', //label: checkout, buynow, credit, pay, paypal
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
                      total: TopUpComponent.montant,
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
              const params: any = {
                refID: _this.reference,
                amount: TopUpComponent.montant,
                moneyCode: _this.userPayMethodForm.value.device_name,
                product: 'Toupesu',
                paypalID: data.paymentToken.split('-')[1]
              };

              _this.api.post('livepaygateway/paypal/savePayRequest', JSON.stringify(params)).subscribe(
                (ans: any) => {
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
  confirmWalletMessage(params: any, walletParam: any) {
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
  async confirmWalletRecharge(dataMessage: any, walletParam: any, translation: string[]) {

    const alert = await this.alertController.create({
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

    await alert.present();
  }

  // save the orange/mtn/ozow payment
  rechargeWithoutConversionOperator(rechargeData: any) {
    this.loading = true;
    this.showLoadingMessage(rechargeData);
    this.userPayMethodForm.get('numero').setValue(rechargeData.country_prefix + this.currentUser.phone);
    this.wallet.rechargeWallet(rechargeData).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.sendResponsePerOperator(reponse, rechargeData.operator);
      }
    }, error => {
      this.loading = false;

      if (error && error.error && error.error.message === 'error') {
        if (error && error.error && error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.ui.dismissLoading();
              this.rechargeWithoutConversionOperator(rechargeData);
            } else {
              this.exitPayment();
            }
          });
        } else {
          this.ui.dismissLoading();
          this.walletError.manageWalletError(error);
        }

      } else {
        this.ui.dismissLoading();
        this.errorService.manageError(error);
      }
    });
  }

  // save the paypal payment
  recharcheWithConversionOperator(rechargeData: any) {
    this.loading = true;
    this.showLoadingMessage(rechargeData);

    this.wallet.rechargeWalletWithConversion(rechargeData).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.sendResponsePerOperator(reponse, rechargeData.operator);
      }
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {
        if (error && error.error && error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.ui.dismissLoading();
              this.recharcheWithConversionOperator(rechargeData);
            } else {
              this.exitPayment();
            }
          });
        } else {
          this.ui.dismissLoading();
          this.walletError.manageWalletError(error);
        }

      } else {
        this.ui.dismissLoading();
        this.errorService.manageError(error);
      }
    });
  }

  // show the loading message
  showLoadingMessage(data: any) {
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
  sendResponsePerOperator(data: any, operator: string) {
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
  checkPaymentStatusOperator(payToken: string, operator: string) {
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
  checkPaymentStatusOperatorServer(payToken: string, operator: string) {
    this.wallet.getStatusPaymentOperator(payToken, operator).subscribe((reponse: any) => {
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
      } else {
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
  cancelPaymentResult(refence?: string) {
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
        } else {
          this.exitPayment();
        }
      }
    });
  }

  /******************************** PAYMENT SERVICES *********************************************/

}
