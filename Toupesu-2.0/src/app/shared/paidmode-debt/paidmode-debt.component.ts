import { Component, OnInit, Input, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from '../service/error.service';
import { AlertController, Platform } from '@ionic/angular';
import { LocationService } from '../service/location.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { ApiService } from '../service/api.service';
import { CurrencyService } from '../service/currency.service';
import { WalletService } from 'src/app/dashboard/my-wallet/service/wallet.service';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';
import { FormUtilsService } from '../service/form-utils.service';
import { PaymentErrorService } from '../service/payment-error.service';
import { Router } from '@angular/router';
import { PaymentGlobalDataService } from '../service/payment-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from '../service/ui.service';
import { EventService } from '../service/events.service';
declare var paypal;

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
  selector: 'app-paidmode-debt',
  templateUrl: './paidmode-debt.component.html',
  styleUrls: ['./paidmode-debt.component.scss'],
})
export class PaidmodeDebtComponent implements OnInit {

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
  cron: any;
  timeOut: any;
  contributionDataParams: any;
  pin: string;
  spinner: any;
  allPaymentMethods: any;
  userData: any;
  paymentForm: FormGroup;
  reference: string;
  validationMessages: any;
  paypalLoading: boolean;
  paypal_initialized: boolean;
  refernceId: string;

  @Input() amountPay: number;
  @Input() balance: number;
  @ViewChild('paypalbuttoncontainer', { static: false }) paypalbuttoncontainer: ElementRef;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tontine: TontineService,
    private platform: Platform,
    private router: Router,
    private events: EventService,
    private ui: UiService,
    private api: ApiService,
    private debt: DebtsManagerService,
    private paymentData: PaymentGlobalDataService,
    private currency: CurrencyService,
    private formUtil: FormUtilsService,
    private alertController: AlertController,
    private paymentError: PaymentErrorService,
    private wallet: WalletService,
    private errorService: ErrorService,
    private location: LocationService,
    private translate: TranslateService,
    private zone: NgZone
  ) {
    this.cron = null;
    this.timeOut = null;
    this.loadingOperator = false;
    this.loading = false;
    this.errorPhone = false;
    this.states = [];
    this.paymentMethods = [];
    this.paypalMessage = '';
    this.reference = this.formUtil.getRandomId();
    this.tontineData = this.tontine.getCurrentTontineData();
    this.userData = this.userService.getUserData();
    this.allPaymentMethods = [];
    const params = this.debt.getDebtsData();
    this.contributionData = params.facture;
    this.paypalLoading = false;
    this.paypal_initialized = false;
    this.refernceId = '';
    this.hardwareBackButton();
  }


  ngOnInit() {
    this.getAllMethodPaymentType();
    this.initFormMessage();
    this.initPaymentForm();
  }


  /******************************** END FORM SERVICES *********************************************/


  // Form getters
  get phone() {
    return this.userPayMethodForm.get('phone');
  }

  get amountError() {
    return this.userPayMethodForm.get('montantAvecFees');
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

  get montantContributeError() {
    return this.userPayMethodForm.get('montant');
  }


  // init form message
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

  // Init form message
  initPaymentForm() {
    const currentPayment = this.paymentData.getDefaultPaymentMethod();
    this.userPayMethodForm = this.fb.group({
      country_id: ['', Validators.required],
      country_prefix: [''],
      countryId: [''],
      handleFees: [''],
      handleFeesType: [''],
      device_name: [''],
      currency: [''],
      currencyLabel: [''],
      pay_token: [''],
      url: [''],
      montant: [this.balance, Validators.compose([Validators.required, Validators.min(1)])],
      montantAvecFees: ['0'],
      montantTotal: ['0'],
      type_payment_id: [currentPayment ? currentPayment.typepaiement_id : ''],
      type_payment_name: [currentPayment ? currentPayment.name : ''],
      typePaymentIndex: [0, Validators.required],
      phone: [currentPayment  && this.formUtil.validatePhone(currentPayment.numero_compte) ? currentPayment.numero_compte : ''],
      numero: ['']
    });
  }


  // Remove space
  removeSpace() {
    this.userPayMethodForm.get('phone').setValue(this.paymentData.removeInputSpace(this.userPayMethodForm.value.phone));
  }

  // Check if it's not  mobile operator
  checkMobileOperator() {
    return this.paymentData.isMobileOperator(this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
  }

  // Can show paypal message
  canShowPaypalMessage() {
    return this.userPayMethodForm.value.montant && this.paymentData.hasPaypalMessage(this.paypalMessage,this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
  }

  // can show  paypal button
  canShowPaypalButton() {
    return this.paymentData.hasPaypalButton(this.paypal_initialized, this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
  }

  // can make payment
  canPay() {
    return this.paymentData.canShowPayment(this.userPayMethodForm.valid,this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex],this.userPayMethodForm.value.phone,this.errorPhone);
  }

  // check if emial or phone is valid
  checckEmailOrPhone(inputValue: string, index: number) {
    this.removeSpace();
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

  // get all payment method
  getAllMethodPaymentType() {
    this.loadingOperator = true;
    this.userService.getAllMethodPaymentType().subscribe((reponse: any) => {
      this.paymentMethods = [];
      this.loadingOperator = false;
      if (reponse && reponse.typePayment && reponse.typePayment.length > 0) {
        this.paymentMethods = this.paymentData.formatPaymentMethodResponseContribution(reponse.typePayment);
      }
      const defaultMethod: PaymentMethod[] = [{
        id: 0, country_id: 0, logo: 'assets/pesuwallet.jpg',
        currency: this.contributionData.device_name, name: 'WALLET', placeholder: '',
        handling_fees: 0,
        type_handling_fees: 'valeur'
      }];
      this.paymentMethods = defaultMethod.concat(this.paymentMethods);
      this.allPaymentMethods = this.paymentMethods;
      this.getCountries(false);
    }, error => {
      this.loadingOperator = false;
      this.paymentMethods.push({
        id: 0, country_id: 0, logo: 'assets/pesuwallet.jpg',
        currency: this.contributionData.device_name, name: 'WALLET', placeholder: '',
        handling_fees: 0,
        type_handling_fees: 'valeur'
      });
      this.allPaymentMethods = this.paymentMethods;
      this.getCountries(false);
      this.errorService.manageError(error);
    });
  }

  // Get all countries
  getCountries(refresher: boolean) {
    this.location.getAllCountries(refresher).then((countries: any) => {
      this.states = this.paymentData.formatCountriesData(countries);
      // Set the country of the tontine
      if (this.states && this.states.length > 0) {
        setTimeout(() => {
          this.states.forEach(country => {
            if (country.country_key === this.tontineData.tontine.country_key) {
              this.updateFormData(country);
            }
          });
        }, 200);
      }
    });
  }

  // update the form data
  updateFormData(country: any) {
    if (country) {
      this.userPayMethodForm.get('countryId').setValue(country.country_id);
      this.userPayMethodForm.get('country_prefix').setValue(country.country_prefixe);
      this.userPayMethodForm.get('currency').setValue(country.device_name);
      this.userPayMethodForm.get('handleFees').setValue(country.handling_fees);
      this.userPayMethodForm.get('handleFeesType').setValue(country.type_handling_fees);
      this.userPayMethodForm.get('currencyLabel').setValue(country.currency_label);
      this.zone.run(() => {
        this.userPayMethodForm.get('country_id').setValue(country.country_id);
      });
      this.updatePaymentsMethods(country.country_id);
    }
  }

  // Update the payment method
  updatePaymentMethod(index) {
    if (this.paymentMethods[index]) {
      this.userPayMethodForm.get('type_payment_id').setValue(this.paymentMethods[index].id);
      this.userPayMethodForm.get('type_payment_name').setValue(this.paymentMethods[index].name);
      this.userPayMethodForm.get('device_name').setValue(this.paymentMethods[index].currency);
      this.userPayMethodForm.get('handleFees').setValue(this.paymentMethods[index].handling_fees);
      this.userPayMethodForm.get('handleFeesType').setValue(this.paymentMethods[index].type_handling_fees);
      this.zone.run(() => {
        this.userPayMethodForm.get('typePaymentIndex').setValue(index);
      });
    }
    if (this.paymentMethods && this.paymentMethods[index] &&
      this.paymentMethods[index].name === 'PAYPAL') {
      this.paypal_initialized = false;
      this.updatePaypalAmount();
    }
  }

  updatePaymentsMethods(countryId: number) {
    // update the payment method
    const paymentsMethods = [];
    this.paymentMethods = [];
    this.allPaymentMethods.forEach(payment => {
      if (payment.country_id === countryId || payment.country_id === 0) {
        paymentsMethods.push(payment);
      }
    });
    this.paymentMethods = paymentsMethods;
    if (this.paymentMethods && this.paymentMethods.length > 0) {
      this.updatePaymentMethod(0);
    }
  }

  // Calucalte the payment with handlfees
  geetAmountWithFees(amountShare: any, devise: string) {
    return this.paymentData.getHandleFeesWithDevise(amountShare,devise,this.userPayMethodForm.value.handleFees,this.userPayMethodForm.value.handleFeesType);
  }

  // Update the country info country prfix
  updateCurrencyCountry(countryId: number) {
    this.zone.run(() => {
      this.paymentMethods = [];
    });

    setTimeout(() => {
      this.states.forEach(state => {
        if (state.country_id === countryId) {
          this.updateFormData(state);
        }
      });
    }, 300);
  }


  // Show the payment mode
  showPayment(mode: any) {

    switch (mode.type_payment_name) {

      case 'ORANGE MONEY':
        this.updateParametersOrange();
        break;

      case 'OZOW':
        this.updateParametersOzow();
        break;

      case 'MTN MOBILE MONEY':
        this.updateParametersMtn();
        break;

      case 'WALLET':
        this.updateParametersWallet();
        break;

      default:
        break;
    }
  }

  /******************************** END FORM SERVICES *********************************************/


  /******************************** START WALLET PAYMENT *********************************************/

  async paymentWalletConfirm(dataMessage: any, translation: string[]) {
    const alert = await this.alertController.create({
      header: `${dataMessage.title}`,
      message: `${translation[0]} ${dataMessage.montant}
        ${dataMessage.device_name} ${translation[1]}`,
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
            this.paidWithWallet(dataMessage);
          }
        }
      ]
    });

    await alert.present();
  }


  updateParametersWallet() {
    const translation = [];
    this.translate.get(['CONFIRM_PAY_CONTRIBUTION_SUBTEXT1', 'CONFIRM_PAY_CONTRIBUTION_SUBTEXT2', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translation.push(trans.CONFIRM_PAY_CONTRIBUTION_SUBTEXT1);
      translation.push(trans.CONFIRM_PAY_CONTRIBUTION_SUBTEXT2);
      translation.push(trans.CANCEL_TEXT);
      translation.push(trans.YES_TEXT);
      const params = this.debt.getDebtsData();
      const items = params.items;
      const itemsParams = [];
      items.forEach(item => {
        itemsParams.push({ seance_id: item.seance_id, numero_part: item.numero_part, montant: item.montant, typecontribution_id: item.typecontribution_id });
      });
      const data = {
        title: this.tontineData.tontine.name,
        reference_facture: params.facture ? params.facture.reference : '',
        device_name: params.facture ? params.facture.device_name : '',
        montant_total_facture: params.facture ? params.facture.montant : 0,
        montant: this.userPayMethodForm.value.montant,
        country_id: this.userPayMethodForm.value.countryId,
        liste_item: itemsParams,
        tontine_id: params.facture ? params.facture.tontine_id : ''
      };
      this.paymentWalletConfirm(data, translation);
    });
  }

  // Paid the contribution with wallet
  paidWithWallet(contributionData: any) {
    this.loading = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.debt.paidMemberBillOnlineWallet(contributionData)
      .subscribe((reponse: any) => {
        this.loading = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG1').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.initPaymentForm();
          if (this.balance - this.userPayMethodForm.value.montant === 0) {
            this.events.publish('modal-close', { result: 'complete-all' });
          } else {
            this.events.publish('modal-close', { result: 'partial' });
          }
        }
      }, error => {


        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.errorService.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.paidWithWallet(contributionData);
              } else {
                this.exitPayment();
              }
            });
          } else {
            this.loading = false;
            this.ui.dismissLoading();
            this.paymentError.managePaymentOnlineError(error);
          }
        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.errorService.manageError(error);
        }
      });
  }

  /******************************** START WALLET PAYMENT *********************************************/



  /******************************** START PAYPAL PAYMENT *********************************************/

  // update the paypal total amount
  updatePaypalAmount() {
    if (this.userPayMethodForm.value.montant > 0) {
    if (this.userPayMethodForm.value.type_payment_name === 'PAYPAL') {
      const amount = this.geetAmountWithFees(this.userPayMethodForm.value.montant, this.contributionData.device_name);
      this.userPayMethodForm.get('montantAvecFees').setValue(amount);

      if (this.contributionData.device_name !== this.userPayMethodForm.value.device_name) {
        this.currency.convert(this.contributionData.device_name, this.userPayMethodForm.value.device_name, this.userPayMethodForm.value.montant)
          .then(montantSansFees => {
            if (montantSansFees) {
              const amountWithFees = this.geetAmountWithFees(montantSansFees, this.userPayMethodForm.value.device_name);
              this.userPayMethodForm.get('montantTotal').setValue(amountWithFees);
              this.translate.get('PAIDMODE_MSG2').subscribe(value => {
                this.paypalMessage = `${value} ${this.userPayMethodForm.value.montantAvecFees}
                 ${this.contributionData.device_name} =
                ${this.userPayMethodForm.value.montantTotal}
                ${this.userPayMethodForm.value.device_name}`;
                this.setupPayPay();
              });
            } else {
              this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
                this.paypalMessage = value;
              });
            }
          });

      } else {
        this.userPayMethodForm.get('montantTotal').setValue(this.userPayMethodForm.value.montantAvecFees);
        this.translate.get('PAIDMODE_MSG2').subscribe(value => {
          this.paypalMessage = `${value}  ${this.userPayMethodForm.value.montantTotal}
            ${this.userPayMethodForm.value.device_name}`;
          this.setupPayPay();
        });
      }
    }
  }
  }

  setupPayPay() {
    if (!this.paypal_initialized) {
      this.initPayPal();
    }
  }

  initPayPal() {

    if (this.userPayMethodForm.value.montantTotal > 0) {
      this.paypalLoading = true;
      this.paypal_initialized = true;
      let paypalbuttoncontainer = this.paypalbuttoncontainer.nativeElement as HTMLDivElement
      let _this = this;

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
                    total: _this.userPayMethodForm.value.montantTotal,
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

          // Make a call to the REST ui to execute the payment
          return actions.payment.execute().then(function () {
            const params: any = {
              refID: _this.reference,
              amount: _this.userPayMethodForm.value.montantTotal,
              moneyCode: _this.userPayMethodForm.value.device_name,
              product: 'Toupesu',
              paypalID: data.paymentToken.split('-')[1]
            };
            // Save and check the payment result
            _this.userPayMethodForm.get('pay_token').setValue(data.paymentToken.split('-')[1]);
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

      setTimeout(() => {
        this.paypalLoading = false;
      }, 2000);
    }
  }

  // Update parameters PAYPAL
  updateParametersPaypal(payToken) {
    const params = this.debt.getDebtsData();
    const items = params.items;
    const itemsParams = [];
    items.forEach(item => {
      itemsParams.push({ seance_id: item.seance_id, numero_part: item.numero_part, montant: item.montant, typecontribution_id: item.typecontribution_id });
    });

    const amount = this.geetAmountWithFees(this.userPayMethodForm.value.montant, params.facture.device_name);
    this.userPayMethodForm.get('montantAvecFees').setValue(amount);

    if (params.facture.device_name === this.userPayMethodForm.value.device_name) {
      const paramsData = {
        reference_facture: params.facture ? params.facture.reference : '',
        device_name: params.facture ? params.facture.device_name : '',
        montant_total_facture: params.facture ? params.facture.montant : 0,
        montant_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
        montant_sans_handling_fees: this.userPayMethodForm.value.montant,
        numero: this.userData.phone_with_prefix,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        country_id: this.userPayMethodForm.value.countryId,
        liste_item: itemsParams,
        tontine_id: params.facture ? params.facture.tontine_id : '',
        pay_token: payToken,
        operator: 'paypal'
      };
      this.paidWithoutConversionOperator(paramsData);
    } else {
      this.currency.convert(params.facture.device_name, this.userPayMethodForm.value.device_name, this.userPayMethodForm.value.montant).then(montantsansFees => {
        if (montantsansFees) {
          const paramsData = {
            reference_facture: params.facture ? params.facture.reference : '',
            device_depart_name: this.userPayMethodForm.value.device_name,
            device_arrivee_name: params.facture ? params.facture.device_name : '',
            montant_total_facture: params.facture ? params.facture.montant : 0,
            montant_depart_avec_handling_fees: this.geetAmountWithFees(montantsansFees, this.userPayMethodForm.value.device_name),
            montant_depart_sans_handling_fees: montantsansFees ? montantsansFees : 0,
            montant_arrivee_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
            montant_arrivee_sans_handling_fees: this.userPayMethodForm.value.montant,
            numero: this.userData.phone_with_prefix,
            typepaiement_id: this.userPayMethodForm.value.type_payment_id,
            country_id: this.userPayMethodForm.value.countryId,
            liste_item: itemsParams,
            tontine_id: params.facture ? params.facture.tontine_id : '',
            pay_token: payToken,
            operator: 'paypal'
          };
          this.paidWithConversionOperator(paramsData);
        } else {
          this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
            this.ui.presentToast(value);
          });
        }
      });
    }
  }

  /******************************** END PAYPAL PAYMENT *********************************************/


  /******************************** START MTN PAYMENT *********************************************/

  // Update parameters  Mtn payment
  updateParametersMtn() {

    const params = this.debt.getDebtsData();
    const items = params.items;
    const itemsParams = [];
    items.forEach(item => {
      itemsParams.push({ seance_id: item.seance_id, numero_part: item.numero_part, montant: item.montant, typecontribution_id: item.typecontribution_id });
    });

    const amount = this.geetAmountWithFees(this.userPayMethodForm.value.montant, params.facture.device_name);
    this.userPayMethodForm.get('montantAvecFees').setValue(amount);

    if (params.facture.device_name !== this.userPayMethodForm.value.device_name) {

      this.currency.convert(params.facture.device_name, this.userPayMethodForm.value.device_name,
        this.userPayMethodForm.value.montant).then(montantsansFees => {

          if (montantsansFees) {
            const dataParams = {
              reference_facture: params.facture ? params.facture.reference : '',
              device_depart_name: this.userPayMethodForm.value.device_name,
              device_arrivee_name: params.facture ? params.facture.device_name : '',
              montant_total_facture: params.facture ? params.facture.montant : 0,
              montant_depart_avec_handling_fees: this.geetAmountWithFees(montantsansFees, this.userPayMethodForm.value.device_name),
              montant_depart_sans_handling_fees: montantsansFees ? montantsansFees : 0,
              montant_arrivee_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
              montant_arrivee_sans_handling_fees: this.userPayMethodForm.value.montant,
              numero: this.userPayMethodForm.value.numero,
              typepaiement_id: this.userPayMethodForm.value.type_payment_id,
              country_id: this.userPayMethodForm.value.countryId,
              liste_item: itemsParams,
              tontine_id: params.facture ? params.facture.tontine_id : '',
              operator: 'MTN'
            };
            this.contributionDataParams = dataParams;
            const messageConfirmation = {
              title: params.title, contribution: this.contributionDataParams.montant_depart_avec_handling_fees,
              device_name: this.userPayMethodForm.value.device_name, type: 'converted'
            };
            this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);

          } else {
            this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
        });
    } else {

      const paramsData = {
        reference_facture: params.facture ? params.facture.reference : '',
        device_name: params.facture ? params.facture.device_name : '',
        montant_total_facture: params.facture ? params.facture.montant : 0,
        montant_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
        montant_sans_handling_fees: this.userPayMethodForm.value.montant,
        numero: this.userPayMethodForm.value.numero,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        country_id: this.userPayMethodForm.value.countryId,
        liste_item: itemsParams,
        tontine_id: params.facture ? params.facture.tontine_id : '',
        operator: 'MTN'
      };
      this.contributionDataParams = paramsData;
      const messageConfirmation = {
        title: params.title, contribution: this.userPayMethodForm.value.montantAvecFees,
        device_name: params.facture ? params.facture.device_name : '', type: 'notconverted'
      };
      this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);
    }
  }


  /******************************** END MTN PAYMENT *********************************************/


  /******************************** START ORANGE PAYMENT *********************************************/

  // Update parameters  Orange payment
  updateParametersOrange() {

    const params = this.debt.getDebtsData();
    const items = params.items;
    const itemsParams = [];
    items.forEach(item => {
      itemsParams.push({ seance_id: item.seance_id, numero_part: item.numero_part, montant: item.montant, typecontribution_id: item.typecontribution_id });
    });

    const amount = this.geetAmountWithFees(this.userPayMethodForm.value.montant, params.facture.device_name);
    this.userPayMethodForm.get('montantAvecFees').setValue(amount);

    if (params.facture.device_name !== this.userPayMethodForm.value.device_name) {
      this.currency.convert(params.facture.device_name, this.userPayMethodForm.value.device_name,
        this.userPayMethodForm.value.montant).then(montantsansFees => {

          if (montantsansFees) {
            const dataParams = {
              reference_facture: params.facture ? params.facture.reference : '',
              device_depart_name: this.userPayMethodForm.value.device_name,
              device_arrivee_name: params.facture ? params.facture.device_name : '',
              montant_total_facture: params.facture ? params.facture.montant : 0,
              montant_depart_avec_handling_fees: this.geetAmountWithFees(montantsansFees, this.userPayMethodForm.value.device_name),
              montant_depart_sans_handling_fees: montantsansFees ? montantsansFees : 0,
              montant_arrivee_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
              montant_arrivee_sans_handling_fees: this.userPayMethodForm.value.montant,
              numero: this.userPayMethodForm.value.numero,
              typepaiement_id: this.userPayMethodForm.value.type_payment_id,
              country_id: this.userPayMethodForm.value.countryId,
              liste_item: itemsParams,
              tontine_id: params.facture ? params.facture.tontine_id : '',
              operator: 'orange'
            };
            this.contributionDataParams = dataParams;
            const messageConfirmation = {
              title: params.title, contribution: this.contributionDataParams.montant_depart_avec_handling_fees,
              device_name: this.userPayMethodForm.value.device_name, type: 'converted'
            };

            this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);

          } else {
            this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
        });

    } else {

      const paramsData = {
        reference_facture: params.facture ? params.facture.reference : '',
        device_name: params.facture ? params.facture.device_name : '',
        montant_total_facture: params.facture ? params.facture.montant : 0,
        montant_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
        montant_sans_handling_fees: this.userPayMethodForm.value.montant,
        numero: this.userPayMethodForm.value.numero,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        country_id: this.userPayMethodForm.value.countryId,
        liste_item: itemsParams,
        tontine_id: params.facture ? params.facture.tontine_id : '',
        operator: 'orange'
      };
      this.contributionDataParams = paramsData;
      const messageConfirmation = {
        title: params.title, contribution: this.userPayMethodForm.value.montantAvecFees,
        device_name: params.facture ? params.facture.device_name : '', type: 'notconverted'
      };
      this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);
    }
  }


  /******************************** END ORANGE PAYMENT *********************************************/



  /******************************** START OZOW PAYMENT *********************************************/

  // Update parameters OZOW payment
  updateParametersOzow() {

    const params = this.debt.getDebtsData();
    const items = params.items;
    const itemsParams = [];
    items.forEach(item => {
      itemsParams.push({ seance_id: item.seance_id, numero_part: item.numero_part, montant: item.montant, typecontribution_id: item.typecontribution_id });
    });

    const amount = this.geetAmountWithFees(this.userPayMethodForm.value.montant, params.facture.device_name);
    this.userPayMethodForm.get('montantAvecFees').setValue(amount);

    if (params.facture.device_name !== this.userPayMethodForm.value.device_name) {

      this.currency.convert(params.facture.device_name, this.userPayMethodForm.value.device_name,
        this.userPayMethodForm.value.montant).then(montantsansFees => {

          if (montantsansFees) {

            const dataParams = {
              reference_facture: params.facture ? params.facture.reference : '',
              device_depart_name: this.userPayMethodForm.value.device_name,
              device_arrivee_name: params.facture ? params.facture.device_name : '',
              montant_total_facture: params.facture ? params.facture.montant : 0,
              montant_depart_avec_handling_fees: this.geetAmountWithFees(montantsansFees, this.userPayMethodForm.value.device_name),
              montant_depart_sans_handling_fees: montantsansFees ? montantsansFees : 0,
              montant_arrivee_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
              montant_arrivee_sans_handling_fees: this.userPayMethodForm.value.montant,
              numero: this.userData.phone_with_prefix,
              typepaiement_id: this.userPayMethodForm.value.type_payment_id,
              country_id: this.userPayMethodForm.value.countryId,
              liste_item: itemsParams,
              tontine_id: params.facture ? params.facture.tontine_id : '',
              operator: 'ozow'
            };
            this.contributionDataParams = dataParams;
            const messageConfirmation = {
              title: params.title, contribution: this.contributionDataParams.montant_depart_avec_handling_fees,
              device_name: this.userPayMethodForm.value.device_name, type: 'converted'
            };

            this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);

          } else {
            this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
        });

    } else {

      const paramsData = {
        reference_facture: params.facture ? params.facture.reference : '',
        device_name: params.facture ? params.facture.device_name : '',
        montant_total_facture: params.facture ? params.facture.montant : 0,
        montant_avec_handling_fees: this.userPayMethodForm.value.montantAvecFees,
        montant_sans_handling_fees: this.userPayMethodForm.value.montant,
        numero: this.userData.phone_with_prefix,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        country_id: this.userPayMethodForm.value.countryId,
        liste_item: itemsParams,
        tontine_id: params.facture ? params.facture.tontine_id : '',
        operator: 'ozow'
      };
      this.contributionDataParams = paramsData;
      const messageConfirmation = {
        title: params.title, contribution: this.userPayMethodForm.value.montantAvecFees,
        device_name: params.facture ? params.facture.device_name : '', type: 'notconverted'
      };
      this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);

    }
  }

  /******************************** END OZOW PAYMENT *********************************************/


  /******************************** START COMMON PAYMENT SERVICES *********************************************/

  showConfirmationMessage(messageConfirmation: any, contributionDataParams: any) {
    const translation = [];
    this.translate.get(['CONFIRM_PAY_CONTRIBUTION_SUBTEXT1', 'CONFIRM_PAY_CONTRIBUTION_SUBTEXT2', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translation.push(trans.CONFIRM_PAY_CONTRIBUTION_SUBTEXT1);
      translation.push(trans.CONFIRM_PAY_CONTRIBUTION_SUBTEXT2);
      translation.push(trans.CANCEL_TEXT);
      translation.push(trans.YES_TEXT);
      this.paymentOperatorConfirm(messageConfirmation, contributionDataParams, translation);
    });

  }


  async paymentOperatorConfirm(dataMessage: any, contributionDataParams: any, translation: string[]) {
    const alert = await this.alertController.create({
      header: `${dataMessage.title}`,
      message: `${translation[0]} ${dataMessage.contribution}
    ${dataMessage.device_name}  ${translation[1]}`,
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
            if (dataMessage.type === 'converted') {
              this.paidWithConversionOperator(contributionDataParams);
            } else if (dataMessage.type === 'notconverted') {
              this.paidWithoutConversionOperator(contributionDataParams);
            }
          }
        }
      ]
    });

    await alert.present();
  }


  // Paid the user contribution with operator after conversion
  paidWithConversionOperator(contributionData: any) {
    this.loading = true;
    this.showLoadingMessage(contributionData);

    this.debt.paidMemberBillOnlineWithConversion(contributionData).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.sendResponsePerOperator(reponse, contributionData.operator);
      }
    }, error => {


      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.errorService.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.ui.dismissLoading();
              this.paidWithConversionOperator(contributionData);
            } else {
              this.exitPayment();
            }
          });
        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.paymentError.managePaymentOnlineError(error);
        }

      } else {
        this.loading = false;
        this.ui.dismissLoading();
        this.errorService.manageError(error);
      }
    });

  }

  // Paid the user contribution with operator without conversion
  paidWithoutConversionOperator(contributionData: any) {
    this.loading = true;
    this.showLoadingMessage(contributionData);
    this.debt.paidMemberBillOnlineWithoutConversion(contributionData).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.sendResponsePerOperator(reponse, contributionData.operator);
      }
    }, error => {

      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {

          this.errorService.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.ui.dismissLoading();
              this.paidWithoutConversionOperator(contributionData);
            } else {
              this.exitPayment();
            }
          });
        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.paymentError.managePaymentOnlineError(error);
        }

      } else {
        this.loading = false;
        this.ui.dismissLoading();
        this.errorService.manageError(error);
      }
    });

  }


  // Send message per operator
  sendResponsePerOperator(data: any, operator: string) {
    this.checkPaymentStatusOperator(data.pay_token, operator);
    const reference = data && data.refID ? data.refID : '';
    this.refernceId = reference;
    this.cancelPaymentResult(reference);
    switch (operator) {
      case 'ozow':
        window.open(data.url, '_blank');
        break;
      default:
        break;
    }
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


  // step 2 :  Check the status via Ozow
  checkPaymentStatusOperator(payToken: string, operator: string) {
    this.cron = setInterval(() => {
      this.checkPaymentStatusOperatorServer(payToken, operator);
    }, 20000);
  }


  // SHOW THE SUCCES MESSAGE
  showSuccesMessage() {
    this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG1').subscribe(value => {
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
        this.translate.get('ERROR_PAY_CONTRIBUTION_MSG').subscribe(value => {
          this.ui.presentToast(value);
        });
      } else {
        this.exitPayment();
        this.translate.get('ERROR_PAY_CONTRIBUTION_MSG').subscribe(value => {
          this.ui.presentToast(value);
        });
        this.errorService.manageError(error);
      }
    });
  }


  // Show payment confirmation dialog
  showPaymentResult() {
    this.loading = false;
    this.ui.dismissLoading();
    this.initPaymentForm();
    this.clearTimeoutData();
    this.clearSetIntervalData();

    if (this.balance - this.userPayMethodForm.value.montant === 0) {
      this.events.publish('modal-close', { result: 'complete-all' });
    } else {
      this.events.publish('modal-close', { result: 'partial' });
    }
  }


  // Cancel the payment
  cancelPaymentResult(refence?: string) {
    this.timeOut = setTimeout(() => {
      this.exitPayment();
      this.translate.get(['TRANSACTION_CANCEL', 'TOPUP_MSG9']).subscribe(trans => {
        this.ui.presentAlert(`${trans.TRANSACTION_CANCEL}`, `${trans.TOPUP_MSG9} ${refence}`);
      });
    }, 120000);
  }


  // exit the payment directly
  exitPayment() {
    this.loading = false;
    this.ui.dismissLoading();
    this.getAllMethodPaymentType();
    this.initPaymentForm();
    this.initFormMessage();
    this.clearTimeoutData();
    this.clearSetIntervalData();
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
      if (url === '/dashboard/my-tontines/' + this.tontineData.tontine.tontine_id + '/debts/in-progress-paiement') {
        if (this.refernceId) {
          this.cancelPaymentResult(this.refernceId);
        } else {
          this.exitPayment();
        }
      }
    });
  }

  /******************************** END COMMON PAYMENT SERVICES *********************************************/
}
