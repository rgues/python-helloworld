import { Component, OnInit, Input, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from '../service/error.service';
import { AlertController, Platform } from '@ionic/angular';
import { LocationService } from '../service/location.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { ContributionService } from 'src/app/dashboard/my-tontines/services/contribution.service';
import { ApiService } from '../service/api.service';
import { CurrencyService } from '../service/currency.service';
import { WalletService } from 'src/app/dashboard/my-wallet/service/wallet.service';
import { FormUtilsService } from '../service/form-utils.service';
import { PaymentErrorService } from '../service/payment-error.service';
import { Router } from '@angular/router';
import { PaymentGlobalDataService } from '../service/payment-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from '../service/events.service';
import { UiService } from '../service/ui.service';
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
  type ?: string;
}

@Component({
  selector: 'app-paidmode-seance',
  templateUrl: './paidmode-seance.component.html',
  styleUrls: ['./paidmode-seance.component.scss'],
})
export class PaidmodeSenceComponent implements OnInit {

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
  paymentForm: FormGroup;
  reference: string;
  validationMessages: any;
  paypalLoading: boolean;
  paypal_initialized: boolean;
  refernceId: string;

  @Input() amountPay: number;
  @ViewChild('paypalbuttoncontainer', { static: false }) paypalbuttoncontainer: ElementRef;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private platform: Platform,
    private paymentData: PaymentGlobalDataService,
    private router: Router,
    private api: ApiService,
    private currency: CurrencyService,
    private events: EventService,
    private contribution: ContributionService,
    private alertController: AlertController,
    private wallet: WalletService,
    private tontine: TontineService,
    private errorService: ErrorService,
    private location: LocationService,
    private translate: TranslateService,
    private formUtil: FormUtilsService,
    private zone: NgZone,
    private paymentError: PaymentErrorService,
    private ui: UiService
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
    this.allPaymentMethods = [];
    this.paypalLoading = false;
    this.paypal_initialized = false;
    this.contributionData = this.contribution.getContributionData();
    this.refernceId = '';
    this.hardwareBackButton();
  }


  ngOnInit() {
    this.getAllMethodPaymentType();
    this.initPaymentForm();
    this.initFormMessage();
  }


  /******************************** START FORM PAYMENT SERVICES*********************************************/


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


  // Init Form 
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
      montant: [''],
      montantAvecFees: ['0'],
      montantTotal: ['0'],
      type_payment_id: [currentPayment ? currentPayment.typepaiement_id : ''],
      type_payment_name: [currentPayment ? currentPayment.name : ''],
      typePaymentIndex: [0, Validators.required],
      phone: [currentPayment  && this.formUtil.validatePhone(currentPayment.numero_compte) ? currentPayment.numero_compte : ''],
      numero: ['']
    });
  }

  // Init form message
  initFormMessage() {
    this.translate.get(['REGISTER_PHONE_REQUIRED', 'AMOUNT_REQUIRED', 'PAID_MODE_REQUIRED'])
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

  // Remove space
  removeSpace() {
    this.userPayMethodForm.get('phone').setValue(this.paymentData.removeInputSpace(this.userPayMethodForm.value.phone));
  }

  // check if it is not  mobile operator
  checkMobileOperator() {
    return this.paymentData.isMobileOperator(this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
  }

  // can show paypal message
  canShowPaypalMessage() {
    return this.paymentData.hasPaypalMessage(this.paypalMessage, this.paymentMethods[this.userPayMethodForm.value.typePaymentIndex]);
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
      this.loadingOperator = false;
      this.paymentMethods = [];
      if (reponse && reponse.typePayment && reponse.typePayment.length > 0) {
        this.paymentMethods = this.paymentData.formatPaymentMethodResponseContribution(reponse.typePayment);
      }

      const defaultMethod: PaymentMethod[] = [{
        id: 0, country_id: 0, logo: 'assets/pesuwallet.jpg',
        currency: this.tontineData.tontine.monnaie, name: 'WALLET', placeholder: '',
        handling_fees: 0,
        type_handling_fees: 'valeur',
        type: 'WALLET'
      }];
      this.paymentMethods = defaultMethod.concat(this.paymentMethods);
      this.allPaymentMethods = this.paymentMethods;
      this.getCountries(false);
    }, error => {
      this.loadingOperator = false;
      this.paymentMethods.push({
        id: 0, country_id: 0, logo: 'assets/pesuwallet.jpg',
        currency: this.tontineData.tontine.monnaie, name: 'WALLET', placeholder: '',
        handling_fees: 0,
        type_handling_fees: 'valeur',
        type: 'WALLET'
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
  getAmountWithFees(amountShare: any, devise: string) {
    return this.paymentData.getHandleFeesWithDevise(amountShare, devise, this.userPayMethodForm.value.handleFees, this.userPayMethodForm.value.handleFeesType);
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


  selectOperator(data: any) {
    const operator = this.paymentMethods[data.typePaymentIndex].name;
    switch (operator) {
      case 'ORANGE MONEY':
        this.updateParametersOrange();
        break;

      case 'OZOW':
        this.updateParametersOzow();
        break;

      case 'MTN MOBILE MONEY':
        this.updateParametersMtn();
        break;

      default:
        break;
    }
  }


  // Show the payment mode
  showPayment(data: any) {

    const type = this.paymentMethods[data.typePaymentIndex].type;

    switch (type) {

      case 'OPERATOR':
        this.selectOperator(data);
        break;

      case 'WALLET':
        this.updateParametersWallet();
        break;

      default:
        break;
    }
  }

  /******************************** END FORM PAYMENT SERVICES*********************************************/


  /******************************** START WALLET PAYMENT *********************************************/

  async paymentWalletConfirm(dataMessage: any, translation: string[]) {
    const alert = await this.alertController.create({
      header: `${dataMessage.title}`,
      message: `${translation[0]} ${dataMessage.contribution}
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
            this.paidWithWallet();
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
      this.paymentWalletConfirm(this.contributionData, translation);
    });
  }

  // Send the user contribution
  paidWithWallet() {
    this.loading = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.contribution.contributeWithWalletPastSeance(this.contributionData)
      .subscribe((reponse: any) => {
        this.loading = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG1').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.events.publish('modal-pay-seance');
        }
      }, error => {

     
        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_not_found) {
            this.errorService.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.paidWithWallet();
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
    if (this.userPayMethodForm.value.type_payment_name === 'PAYPAL') {

      const amount = this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name) * this.contributionData.liste_part.length;
      this.userPayMethodForm.get('montantAvecFees').setValue(amount);

      if (this.contributionData.device_name !== this.userPayMethodForm.value.device_name) {
        this.currency.convert(this.contributionData.device_name, this.userPayMethodForm.value.device_name, this.contributionData.montant).then(montantSansFees => {
          if (montantSansFees) {
            const amountFees = this.getAmountWithFees(montantSansFees, this.userPayMethodForm.value.device_name) * this.contributionData.liste_part.length;
            this.userPayMethodForm.get('montantTotal').setValue(amountFees);

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
    // Add the handlefees to the amount
    if (this.contributionData.device_name === this.userPayMethodForm.value.device_name) {
      const params = {
        seance_id: this.contributionData.seance_id,
        country_id: this.userPayMethodForm.value.countryId,
        typecontribution_id: this.contributionData.typecontribution_id,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        montant_d_une_part_sans_handing_fees: this.contributionData.montant,
        montant_d_une_part_avec_handling_fees: this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name),
        device_name: this.contributionData.device_name,
        sens_contribution: 'entrant',
        liste_part: this.contributionData.liste_part,
        pay_token: payToken,
        pin: this.contributionData.pin,
        operator: 'paypal'
      };
      this.makeDepositOperatorWithoutConversion(params);
    } else {
      this.currency.convert(this.contributionData.device_name, this.userPayMethodForm.value.device_name, this.contributionData.montant).then(montantSansFees => {
        if (montantSansFees) {
          const params = {
            seance_id: this.contributionData.seance_id,
            country_id: this.userPayMethodForm.value.countryId,
            typecontribution_id: this.contributionData.typecontribution_id,
            typepaiement_id: this.userPayMethodForm.value.type_payment_id,
            device_depart: this.userPayMethodForm.value.device_name,
            device_arrivee: this.contributionData.device_name,
            montant_device_depart_d_une_part_sans_handling_fees: montantSansFees ? montantSansFees : 0,
            montant_device_depart_d_une_part_avec_handling_fees: this.getAmountWithFees(montantSansFees, this.userPayMethodForm.value.device_name),
            montant_device_arrivee_d_une_part_sans_handling_fees: this.contributionData.montant,
            sens_contribution: 'entrant',
            liste_part: this.contributionData.liste_part,
            pay_token: payToken,
            pin: this.contributionData.pin,
            operator: 'paypal'
          };
          this.makeDepositOperatorWithConversion(params);
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
    const amount = this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name) * this.contributionData.liste_part.length;
    this.userPayMethodForm.get('montantAvecFees').setValue(amount);

    if (this.contributionData.device_name !== this.userPayMethodForm.value.device_name) {
      this.currency.convert(this.contributionData.device_name, this.userPayMethodForm.value.device_name,
        this.contributionData.montant).then(montantSansFees => {
          if (montantSansFees) {
            const params = {
              seance_id: this.contributionData.seance_id,
              typecontribution_id: this.contributionData.typecontribution_id,
              typepaiement_id: this.userPayMethodForm.value.type_payment_id,
              country_id: this.userPayMethodForm.value.countryId,
              device_depart: this.userPayMethodForm.value.device_name,
              device_arrivee: this.contributionData.device_name,
              montant_device_depart_d_une_part_sans_handling_fees: montantSansFees ? montantSansFees : 0,
              montant_device_depart_d_une_part_avec_handling_fees: this.getAmountWithFees(montantSansFees, this.userPayMethodForm.value.device_name),
              montant_device_arrivee_d_une_part_sans_handling_fees: this.contributionData.montant,
              sens_contribution: 'entrant',
              numero: this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone,
              liste_part: this.contributionData.liste_part,
              pin: this.contributionData.pin,
              operator: 'MTN'
            };
            this.contributionDataParams = params;
            const messageConfirmation = {
              title: this.contributionData.title, contribution: this.contributionDataParams.montant_device_depart_d_une_part_avec_handling_fees * this.contributionData.liste_part.length,
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

      const params = {
        seance_id: this.contributionData.seance_id,
        typecontribution_id: this.contributionData.typecontribution_id,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        device_name: this.contributionData.device_name,
        country_id: this.userPayMethodForm.value.countryId,
        montant_d_une_part_sans_handing_fees: this.contributionData.montant,
        montant_d_une_part_avec_handling_fees: this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name),
        sens_contribution: 'entrant',
        numero: this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone,
        liste_part: this.contributionData.liste_part,
        pin: this.contributionData.pin,
        operator: 'MTN'
      };
      this.contributionDataParams = params;
      const messageConfirmation = {
        title: this.contributionData.title, contribution: this.userPayMethodForm.value.montantAvecFees,
        device_name: this.contributionData.device_name, type: 'notconverted'
      };
      this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);
    }
  }

  /******************************** END MTN PAYMENT *********************************************/


  /******************************** START ORANGE PAYMENT *********************************************/

  // Update parameters  Orange payment
  updateParametersOrange() {
    const amount = this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name) * this.contributionData.liste_part.length;
    this.userPayMethodForm.get('montantAvecFees').setValue(amount);

    if (this.contributionData.device_name !== this.userPayMethodForm.value.device_name) {
      this.currency.convert(this.contributionData.device_name, this.userPayMethodForm.value.device_name,
        this.contributionData.montant).then(montantSansFees => {
          if (montantSansFees) {
            const params = {
              seance_id: this.contributionData.seance_id,
              typecontribution_id: this.contributionData.typecontribution_id,
              typepaiement_id: this.userPayMethodForm.value.type_payment_id,
              country_id: this.userPayMethodForm.value.countryId,
              device_depart: this.userPayMethodForm.value.device_name,
              device_arrivee: this.contributionData.device_name,
              montant_device_depart_d_une_part_sans_handling_fees: montantSansFees ? montantSansFees : 0,
              montant_device_depart_d_une_part_avec_handling_fees: this.getAmountWithFees(montantSansFees, this.userPayMethodForm.value.device_name),
              montant_device_arrivee_d_une_part_sans_handling_fees: this.contributionData.montant,
              montant_device_arrivee_d_une_part_avec_handling_fees: this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name),
              sens_contribution: 'entrant',
              numero: this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone,
              liste_part: this.contributionData.liste_part,
              pin: this.contributionData.pin,
              operator: 'orange'
            };
            this.contributionDataParams = params;
            const messageConfirmation = {
              title: this.contributionData.title, contribution: this.contributionDataParams.montant_device_depart_d_une_part_avec_handling_fees * this.contributionData.liste_part.length,
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

      const params = {
        seance_id: this.contributionData.seance_id,
        typecontribution_id: this.contributionData.typecontribution_id,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        device_name: this.contributionData.device_name,
        country_id: this.userPayMethodForm.value.countryId,
        montant_d_une_part_sans_handing_fees: this.contributionData.montant,
        montant_d_une_part_avec_handling_fees: this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name),
        sens_contribution: 'entrant',
        numero: this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone,
        liste_part: this.contributionData.liste_part,
        pin: this.contributionData.pin,
        operator: 'orange'
      };
      this.contributionDataParams = params;
      const messageConfirmation = {
        title: this.contributionData.title, contribution: this.userPayMethodForm.value.montantAvecFees,
        device_name: this.contributionData.device_name, type: 'notconverted'
      };
      this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);
    }
  }


  /******************************** END ORANGE PAYMENT *********************************************/



  /******************************** START OZOW PAYMENT *********************************************/

  // Update parameters OZOW payment
  updateParametersOzow() {
    const amount = this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name) * this.contributionData.liste_part.length;
    this.userPayMethodForm.get('montantAvecFees').setValue(amount);

    if (this.contributionData.device_name !== this.userPayMethodForm.value.device_name) {
      this.currency.convert(this.contributionData.device_name, this.userPayMethodForm.value.device_name,
        this.contributionData.montant).then(montantSansFees => {
          if (montantSansFees) {
            const params = {
              seance_id: this.contributionData.seance_id,
              typecontribution_id: this.contributionData.typecontribution_id,
              typepaiement_id: this.userPayMethodForm.value.type_payment_id,
              country_id: this.userPayMethodForm.value.countryId,
              device_depart: this.userPayMethodForm.value.device_name,
              device_arrivee: this.contributionData.device_name,
              montant_device_depart_d_une_part_sans_handling_fees: montantSansFees ? montantSansFees : 0,
              montant_device_depart_d_une_part_avec_handling_fees: this.getAmountWithFees(montantSansFees, this.userPayMethodForm.value.device_name),
              montant_device_arrivee_d_une_part_sans_handling_fees: this.contributionData.montant,
              sens_contribution: 'entrant',
              numero: this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone,
              liste_part: this.contributionData.liste_part,
              pin: this.contributionData.pin,
              operator: 'ozow'
            };
            this.contributionDataParams = params;
            const messageConfirmation = {
              title: this.contributionData.title, contribution: this.contributionDataParams.montant_device_depart_d_une_part_avec_handling_fees * this.contributionData.liste_part.length,
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

      const params = {
        seance_id: this.contributionData.seance_id,
        typecontribution_id: this.contributionData.typecontribution_id,
        typepaiement_id: this.userPayMethodForm.value.type_payment_id,
        device_name: this.contributionData.device_name,
        country_id: this.userPayMethodForm.value.countryId,
        montant_d_une_part_sans_handing_fees: this.contributionData.montant,
        montant_d_une_part_avec_handling_fees: this.getAmountWithFees(this.contributionData.montant, this.contributionData.device_name),
        sens_contribution: 'entrant',
        numero: this.userPayMethodForm.value.country_prefix + this.userPayMethodForm.value.phone,
        liste_part: this.contributionData.liste_part,
        pin: this.contributionData.pin,
        operator: 'ozow'
      };
      this.contributionDataParams = params;
      const messageConfirmation = {
        title: this.contributionData.title, contribution: this.userPayMethodForm.value.montantAvecFees,
        device_name: this.contributionData.device_name, type: 'notconverted'
      };
      this.showConfirmationMessage(messageConfirmation, this.contributionDataParams);
    }
  }


  /******************************** END OZOW PAYMENT *********************************************/


  /******************************** START FORM COMMON PAYMENT SERVICES *********************************************/

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
              this.makeDepositOperatorWithConversion(contributionDataParams);
            } else if (dataMessage.type === 'notconverted') {
              this.makeDepositOperatorWithoutConversion(contributionDataParams);
            }
          }
        }
      ]
    });

    await alert.present();
  }


  // make deposit  with operator and conversion
  makeDepositOperatorWithConversion(data: any) {
    this.loading = true;
    this.showLoadingMessage(data);
    this.contribution.contributeWithOperatorWithConversionPastSeance(data)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          // Send the reponse per operator
          this.sendResponsePerOperator(reponse, data.operator);

        }
      }, error => {
      
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.errorService.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.makeDepositOperatorWithConversion(data);
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

  // make deposit  with operator without conversion
  makeDepositOperatorWithoutConversion(data: any) {
    this.loading = true;
    this.showLoadingMessage(data);
    this.contribution.contributeWithOperatorWithoutConversionPastSeance(data)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          // Send the reponse per operator
          this.sendResponsePerOperator(reponse, data.operator);
        }
      }, error => {
       
        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_not_found) {
            this.errorService.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.makeDepositOperatorWithoutConversion(data);
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

  // =======  Payment process result ===================

  // Check the status througth operator
  checkPaymentStatus(payToken: string, operator: string) {
    this.cron = setInterval(() => {
      this.checkPaymentStatusServer(payToken, operator);
    }, 30000);
  }

  // Check the payment Status
  checkPaymentStatusServer(payToken: string, operator: string) {
    this.wallet.getStatusPaymentOperator(payToken, operator).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'OK') {
        this.showPaymentResult();
        this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG1').subscribe(value => {
          this.ui.presentToast(value);
        });
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

  // Send message per operator
  sendResponsePerOperator(data: any, operator: string) {
    this.checkPaymentStatus(data.pay_token, operator);
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

  // Show payment confirmation dialog
  showPaymentResult() {
    this.loading = false;
    this.ui.dismissLoading();
    this.initPaymentForm();
    this.clearTimeoutData();
    this.clearSetIntervalData();

    this.events.publish('modal-pay-seance');
  }

  // Cancel the payment
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
      if (url === '/dashboard/my-tontines/' + this.tontineData.tontine.tontine_id + '/contrib-not-paid') {
        if (this.refernceId) {
          this.cancelPaymentResult(this.refernceId);
        } else {
          this.exitPayment();
        }
      }
    });
  }

  /******************************** END FORM COMMON PAYMENT SERVICES *********************************************/

}
