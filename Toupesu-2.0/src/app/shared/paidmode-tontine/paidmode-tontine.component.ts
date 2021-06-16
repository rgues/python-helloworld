import { Component, OnInit, Input, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { WalletTontineService } from 'src/app/dashboard/my-tontines/tontine-detail/wallet/services/wallet-tontine.service';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { ErrorService } from '../service/error.service';
import { ApiService } from '../service/api.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { CurrencyService } from '../service/currency.service';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/dashboard/my-wallet/service/wallet.service';
import { FormUtilsService } from '../service/form-utils.service';
import { PaymentErrorService } from '../service/payment-error.service';
import { PaymentGlobalDataService } from '../service/payment-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from '../service/events.service';
import { UiService } from '../service/ui.service';
import { PluginService } from '../service/plugin.service';
declare var paypal: any;

@Component({
  selector: 'app-paidmode-tontine',
  templateUrl: './paidmode-tontine.component.html',
  styleUrls: ['./paidmode-tontine.component.scss'],
})
export class PaidmodeTontineComponent implements OnInit {

  paymentForm: FormGroup;
  walletTypes: any[] = [];
  validationMessages: any;
  typesCaisses: any;
  currentTontine: any;
  states: any;
  paymentMethods: any;
  allPaymentMethods: any;
  paypal_initialized: boolean;
  paypalMessage: string;
  loadingOperator: boolean;
  errorPhone: boolean;
  paypalLoading: boolean
  loading: boolean;
  reference: string;
  timeOut: any;
  cron: any;
  refernceId: string;

  @Input() amountPay: number;
  @Input() balance: number;
  @ViewChild('paypalbuttoncontainer', { static: false }) paypalbuttoncontainer: ElementRef;

  constructor(
    private fb: FormBuilder,
    private walletTontine: WalletTontineService,
    private wallet: WalletService,
    private events: EventService,
    private platform: Platform,
    private formUtil: FormUtilsService,
    private paymentData: PaymentGlobalDataService,
    private zone: NgZone,
    private tontine: TontineService,
    private router: Router,
    private userService: UserService,
    private location: LocationService,
    private error: ErrorService,
    private api: ApiService,
    private translate: TranslateService,
    private alertController: AlertController,
    private currency: CurrencyService,
    private navController: NavController,
    private paymentError: PaymentErrorService,
    private ui: UiService,
    private plugin: PluginService
  ) {
    this.typesCaisses = [];
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.states = [];
    this.paymentMethods = [];
    this.paypalMessage = '';
    this.loadingOperator = false;
    this.errorPhone = false;
    this.paypalLoading = false;
    this.loading = false;
    this.timeOut = null;
    this.cron = null;
    this.reference = this.formUtil.getRandomId();
    if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.tontine_payment_type_id === 1) {
      this.walletTypes = ['offline', 'online'];
    } else {
      this.walletTypes = ['online'];
    }
    this.refernceId = '';
    this.hardwareBackButton();
  }

  ngOnInit() {
    this.getAllcashers();
    this.initPaymentForm();
    this.validationMessage();
  }

  /******************************** START FORM SERVICE *********************************************/


  // Getters
  get checkoutName() {
    return this.paymentForm.get('checkoutName');
  }

  get checkoutType() {
    return this.paymentForm.get('checkoutType');
  }

  get payementtype() {
    return this.paymentForm.get('typePaymentIndex');
  }

  get country() {
    return this.paymentForm.get('country_id');
  }

  get phone() {
    return this.paymentForm.get('phone');
  }

  get amount() {
    return this.paymentForm.get('amount');
  }

  get proof() {
    return this.paymentForm.get('proof');
  }

  // Validations message
  validationMessage() {
    this.translate.get(['M_COUNTRY_REQUIRED', 'AMOUNT_REQUIRED', 'REGISTER_PHONE_REQUIRED', 'PAID_MODE_REQUIRED',
      'CHECKOUT_TYPE_REQUIRED', 'DESTINATION_FUND_REQUIRED']).subscribe(trans => {
        this.validationMessages = {
          checkoutName: [
            { type: 'required', message: trans.DESTINATION_FUND_REQUIRED }
          ],
          walletType: [
            { type: 'required', message: trans.CHECKOUT_TYPE_REQUIRED }
          ],
          payementtype: [
            { type: 'required', message: trans.PAID_MODE_REQUIRED }
          ],
          phone: [
            { type: 'required', message: trans.REGISTER_PHONE_REQUIRED },
          ],
          amount: [
            { type: 'required', message: trans.AMOUNT_REQUIRED }
          ],
          country_id: [
            { type: 'required', message: trans.M_COUNTRY_REQUIRED }
          ]
        };
      });
  }

  // Init the form
  initPaymentForm() {
    this.paymentForm = this.fb.group({
      checkoutName: new FormControl('', Validators.required),
      checkoutType: new FormControl('online'),
      country_id: new FormControl('', Validators.required),
      currency_name: new FormControl('', Validators.required),
      country_prefix: new FormControl(''),
      handleFees: new FormControl(''),
      handleFeesType: new FormControl(''),
      currencyLabel: new FormControl(''),
      type_payment_id: new FormControl(''),
      type_payment_name: new FormControl(''),
      proof: new FormControl(''),
      reason: new FormControl(''),
      typePaymentIndex: new FormControl('', Validators.required),
      phone: new FormControl(''),
      amount: new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.pattern('^[\\d]+$')])),
      montantFees: new FormControl(''),
      montantFinal: new FormControl(''),
      numero: new FormControl('')
    });
  }

  // can get bank proof
  checkCaisse() {
    let canGet = false;
    if (this.paymentMethods && this.paymentMethods[this.paymentForm.value.typePaymentIndex] &&
      this.paymentMethods[this.paymentForm.value.typePaymentIndex].type &&
      this.paymentMethods[this.paymentForm.value.typePaymentIndex].type === 'CAISSE') {
      canGet = true;
    }
    return canGet;
  }

  // Remove space
  removeSpace() {
    this.paymentForm.get('phone').setValue(this.paymentData.removeInputSpace(this.paymentForm.value.phone));
  }

  removeSpaceAmount() {
    this.paymentForm.get('amount').setValue(parseFloat(this.paymentData.removeInputSpace(this.paymentForm.value.amount)));
  }

  // check if it is not  mobile operator
  checkMobileOperator() {
    let isMobile = false;
    if (this.paymentMethods && this.paymentMethods[this.paymentForm.value.typePaymentIndex]
      && this.paymentMethods[this.paymentForm.value.typePaymentIndex].type
      && this.paymentMethods[this.paymentForm.value.typePaymentIndex].type === 'OPERATOR'
      && this.paymentMethods[this.paymentForm.value.typePaymentIndex].name
      && (this.paymentMethods[this.paymentForm.value.typePaymentIndex].name === 'ORANGE MONEY' || this.paymentMethods[this.paymentForm.value.typePaymentIndex].name === 'MTN MOBILE MONEY')) {
      isMobile = true;
    }
    return isMobile;
  }

  // can show paypal message
  canShowPaypalMessage() {
    return this.paymentData.hasPaypalMessage(this.paypalMessage, this.paymentMethods[this.paymentForm.value.typePaymentIndex]);
  }

  // can get bank proof
  canGetProof() {
    let canGet = false;
    if (this.paymentMethods && this.paymentMethods[this.paymentForm.value.typePaymentIndex] &&
      this.paymentMethods[this.paymentForm.value.typePaymentIndex].type &&
      this.paymentMethods[this.paymentForm.value.typePaymentIndex].type === 'BANK') {
      canGet = true;
    }

    return canGet;
  }

  // can show  paypal button
  canShowPaypalButton() {
    return this.paymentData.hasPaypalButton(this.paypal_initialized, this.paymentMethods && this.paymentMethods[this.paymentForm.value.typePaymentIndex]);
  }

  // can make payment
  canRecharge() {
    return this.paymentData.canMakeRecharge(this.paymentForm.valid, this.paymentMethods[this.paymentForm.value.typePaymentIndex], this.paymentForm.value.phone, this.errorPhone);
  }

  // Update checkout type
  updateCheckout(index: number) {
    if (this.typesCaisses && this.typesCaisses.length > 0 && this.typesCaisses[index]) {
      const checkOutId = this.typesCaisses[index].id;
      const currentMethods = [];
      this.allPaymentMethods.forEach(method => {
        if (method.id !== checkOutId && (method.country_id && method.country_id === this.paymentForm.value.country_id || method.type === 'CAISSE')) {
          currentMethods.push(method);
        }
      });
      this.paymentMethods = currentMethods;
    }
  }

  // check if emial or phone is valid
  checckEmailOrPhone(inputValue: string, index: number) {
    this.removeSpace();
    this.paymentForm.get('type_payment_id').setValue(this.paymentMethods[index].id);
    switch (this.paymentMethods[index].name) {
      case 'ORANGE MONEY':
        this.errorPhone = !this.formUtil.validatePhone(inputValue);
        if (!this.errorPhone) {
          this.paymentForm.get('numero').setValue(this.paymentForm.value.country_prefix +
            '' + this.paymentForm.value.phone);
        }
        break;

      case 'MTN MOBILE MONEY':
        this.errorPhone = !this.formUtil.validatePhone(inputValue);
        if (!this.errorPhone) {
          this.paymentForm.get('numero').setValue(this.paymentForm.value.country_prefix +
            '' + this.paymentForm.value.phone);
        }
        break;

      default:
        break;
    }
  }

  // Get all the type of checkout
  getAllcashers() {
    const param = this.currentTontine.tontine.tontine_id;
    this.walletTontine.getAllCashiers(param).subscribe((reponse: any) => {
      if (reponse && reponse.caisses) {
        this.zone.run(() => {
          this.typesCaisses = [];
          let index = 0;
          reponse.caisses.forEach(caise => {
            this.translate.get(caise.caisse_name).subscribe(trans => {
              this.typesCaisses.push({
                index: index, id: caise.id, name: trans, tontine_id: caise.tontine_id, type: 'CAISSE',
                logo: 'assets/pesuwallet.jpg', currency: this.currentTontine.tontine.monnaie, country_id: 0
              });
            });
            index++;
          });
        });

        setTimeout(() => {
          this.paymentForm.get('checkoutName').setValue(0);
        }, 200);
        // Get the payment method
        this.getAllMethodPaymentType();
      }
    }, error => {
      this.error.manageError(error);
    });
  }

  // get all operator payments method
  getAllMethodPaymentType() {
    this.loadingOperator = true;
    this.userService.getAllMethodPaymentType().subscribe((reponse: any) => {
      this.loadingOperator = false;
      this.paymentMethods = [];

      if (reponse && reponse.typePayment && reponse.typePayment.length > 0) {
        this.paymentMethods = this.paymentData.formatPaymentMethodRecharge(reponse.typePayment,this.currentTontine);
      }

      const defaultCaisses = [];
      this.typesCaisses.forEach(caisse => {
        defaultCaisses.push(caisse);
      });

      if (defaultCaisses && defaultCaisses.length > 0) {
        this.paymentMethods = defaultCaisses.concat(this.paymentMethods);
      }

      if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.tontine_payment_type_id === 1) {
        this.translate.get('BANK_TEXT').subscribe(trans => {

          const defaultMethod = [{
            id: 0, country_id: 0, logo: 'assets/wallet-icon.svg',
            currency: this.currentTontine.tontine.monnaie, name: trans, placeholder: '',
            handling_fees: 0,
            type_handling_fees: 'valeur',
            type: 'BANK'
          }]
          this.paymentMethods = defaultMethod.concat(this.paymentMethods);
        });
      }

      this.allPaymentMethods = this.paymentMethods;
      this.getCountries(false);
    }, error => {
      this.loadingOperator = false;

      if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.tontine_payment_type_id === 1) {

        this.translate.get('BANK_TEXT').subscribe(trans => {
          this.paymentMethods.push({
            id: 0, country_id: 0, logo: 'assets/wallet-icon.svg',
            currency: this.currentTontine.tontine.monnaie, name: trans, placeholder: '',
            handling_fees: 0,
            type_handling_fees: 'valeur',
            type: 'BANK'
          });
        });
      }

      this.typesCaisses.forEach(caisse => {
        this.paymentMethods.push(caisse);
      });

      this.allPaymentMethods = this.paymentMethods;
      this.getCountries(false);
      this.error.manageError(error);
    });
  }

  // Get all countries
  getCountries(refresher: boolean) {
    this.location.getAllCountries(refresher).then((countries: any) => {
      this.states = this.paymentData.formatCountriesData(countries);
      if (this.states && this.states.length > 0) {
        setTimeout(() => {
          this.states.forEach(country => {
            if (country.country_key === this.currentTontine.tontine.country_key) {
              this.updateFormData(country);
            }
          });
        }, 200);
      }

    });
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

  // update the form data
  updateFormData(country: any) {
    if (country) {
      this.paymentForm.get('country_prefix').setValue(country.country_prefixe);
      this.paymentForm.get('currency_name').setValue(country.device_name);
      this.paymentForm.get('handleFeesType').setValue(country.type_handling_fees);
      this.paymentForm.get('handleFees').setValue(country.handling_fees);
      this.paymentForm.get('currencyLabel').setValue(country.currency_label);
      this.zone.run(() => {
        this.paymentForm.get('country_id').setValue(country.country_id);
      });
      this.updatePaymentsMethods(country.country_id);
    }
  }

  // Get the countries payments methods
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
    this.updateCheckout(this.paymentForm.value.checkoutName);
    if (this.paymentMethods && this.paymentMethods.length > 0) {
      this.updatePaymentMethod(0);
    }
  }

  // Update the payment method
  updatePaymentMethod(index) {
    if (this.paymentMethods[index]) {
      this.paymentForm.get('type_payment_id').setValue(this.paymentMethods[index].id);
      this.paymentForm.get('type_payment_name').setValue(this.paymentMethods[index].name);
      this.paymentForm.get('currency_name').setValue(this.paymentMethods[index].currency);
      this.paymentForm.get('handleFeesType').setValue(this.paymentMethods[index].type_handling_fees);
      this.paymentForm.get('handleFees').setValue(this.paymentMethods[index].handling_fees);
      this.zone.run(() => {
        this.paymentForm.get('typePaymentIndex').setValue(index);
      });
    }
    if (this.paymentMethods && this.paymentMethods[index] &&
      this.paymentMethods[index].name === 'PAYPAL') {
      this.paypal_initialized = false;
      this.updatePaypalAmount();
    }
  }

  // Get the payment proofs
  getProof() {
    this.plugin.getPicture().subscribe((picture: any) => {
      if (picture) {
        setTimeout(() => {
          this.paymentForm.get('proof').setValue(picture);
        }, 200);
      }
    });
  }

  // Calucalte the payment with handlfees
  getAmountFees(amountShare: any, devise: string) {
    return this.paymentData.getHandleFeesWithDevise(amountShare, devise, this.paymentForm.value.handleFees,this.paymentForm.value.handleFeesType);
  }

  // check the operator method to call
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

  // Check the method to call
  showPayment(data: any) {
    const type = this.paymentMethods[data.typePaymentIndex].type;
    switch (type) {

      case 'BANK':
        this.showConfirmationMessageOffline('bank', data);
        break;

      case 'CAISSE':
        this.showConfirmationMessageOffline('transfert', data);
        break

      case 'CASH':
        this.showConfirmationMessageOffline('cash', data);
        break;

      case 'OPERATOR':
        this.selectOperator(data);
        break;

      default:
        break;
    }
  }

  /******************************** END FORM SERVICE *********************************************/


  /******************************** START BANK PAYMENT *********************************************/
  // Make deposit with  traditionnal banking
  rechargeTradionnalBanking(data: any) {
    this.loading = true;

    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });

    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      currency_name: data.currency_name,
      montant: data.amount,
      type_caisse_tontine_id: this.typesCaisses[data.checkoutName].id,
      reason: data.reason,
      liste_proof: [
        { montant: data.amount, description: data.reason, receipt: data.proof }
      ]
    };

    this.walletTontine.makeDepositWithTraditionnalBanking(param)
      .subscribe((reponse: any) => {
        this.loading = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.translate.get('DEPOSIT_DONE_MSG').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.events.publish('wallet-recharge');
          this.router.navigate(['dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'wallet']);
        }
      }, error => {


        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {

            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.rechargeTradionnalBanking(data);
              } else {
                this.exitPayment();
              }
            });
          } else {
            this.loading = false;
            this.ui.dismissLoading();
            this.paymentError.managePaymentOfflineError(error);
          }
        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });

  }
  /******************************** END BANK PAYMENT *********************************************/



  /******************************** START CAISSE PAYMENT *********************************************/

  // transfert the money to another cashier
  transfertFromCaisseToCaisse(data: any) {
    this.loading = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      currency_name: data.currency_name,
      amount: data.amount,
      type_caisse_depart_id: this.paymentMethods[this.paymentForm.value.typePaymentIndex].id,
      type_caisse_arrivee_id: this.typesCaisses[data.checkoutName].id,
      offline: data.checkoutType === 'offline' ? 1 : 0,
      online: data.checkoutType === 'online' ? 1 : 0,
      reason: data.reason
    };

    this.walletTontine.transfertFromCashierToCashier(param)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('DEPOSIT_DONE_MSG').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.events.publish('wallet-recharge');
          this.router.navigate(['dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'wallet']);
        }
      }, error => {


        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_not_found) {

            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.transfertFromCaisseToCaisse(data);
              } else {
                this.exitPayment();
              }
            });
          } else {
            this.loading = false;
            this.ui.dismissLoading();
            this.paymentError.managePaymentOfflineError(error);
          }

        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });

  }
  /******************************** END CAISSE PAYMENT *********************************************/




  /******************************** START CASH PAYMENT *********************************************/
  // cash paiement
  cashPayment(data: any) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      currency_name: data.currency_name,
      montant: data.amount,
      type_caisse_tontine_id: this.typesCaisses[data.checkoutName].id,
      reason: '',
      liste_proof: [
        { montant: data.amount, description: '', receipt: '' }
      ]
    };

    this.loading = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });

    this.walletTontine.makeDepositWithCash(param).subscribe((reponse: any) => {
      this.loading = false;
      this.ui.dismissLoading();
      if (reponse && reponse.message === 'success') {
        this.translate.get('DEPOSIT_DONE_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.events.publish('wallet-recharge');
        this.router.navigate(['dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'wallet']);
      }
    }, error => {


      if (error && error.error) {
        if (error.error.user_not_found) {

          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.ui.dismissLoading();
              this.cashPayment(data);
            } else {
              this.exitPayment();
            }
          });
        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.paymentError.managePaymentOfflineError(error);
        }
      } else {
        this.loading = false;
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }
  /******************************** END CASH PAYMENT *********************************************/



  // ==================== START MTM PAYMENT =========================
  updateParametersMtn() {
    const amount = this.getAmountFees(this.paymentForm.value.amount, this.currentTontine.tontine.monnaie);
    this.paymentForm.get('montantFees').setValue(amount);

    if (this.currentTontine.tontine.monnaie !== this.paymentForm.value.currency_name) {

      this.currency.convert(this.currentTontine.tontine.monnaie, this.paymentForm.value.currency_name,
        this.paymentForm.value.amount).then((montantSansFees: any) => {
          if (montantSansFees) {
            const params = {
              device_depart_name: this.paymentForm.value.currency_name,
              device_arrivee_name: this.currentTontine.tontine.monnaie,
              montant_depart_avec_handling_fees: this.getAmountFees(montantSansFees, this.paymentForm.value.currency_name),
              montant_depart_sans_handling_fees: montantSansFees ? montantSansFees : 0,
              montant_arrivee_avec_handling_fees: this.paymentForm.value.montantFees,
              montant_arrivee_sans_handling_fees: this.paymentForm.value.amount,
              typepaiement_id: this.paymentForm.value.type_payment_id,
              numero: this.paymentForm.value.numero,
              country_id: this.paymentForm.value.country_id,
              tontine_id: this.currentTontine.tontine.tontine_id,
              type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
              operator: 'MTN'
            };

            const messageConfirmation = { amount: params.montant_depart_avec_handling_fees, currency: this.paymentForm.value.currency_name, type: 'converted' };
            this.showConfirmationMessageOperator(messageConfirmation, params);

          } else {
            this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
              this.ui.presentToast(value);
            });
          }

        });
    } else {

      const params = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        currency_name: this.paymentForm.value.currency_name,
        type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
        typepaiement_id: this.paymentForm.value.type_payment_id,
        country_id: this.paymentForm.value.country_id,
        montant_avec_handling_fees: this.paymentForm.value.montantFees,
        montant_sans_handling_fees: this.paymentForm.value.amount,
        numero: this.paymentForm.value.numero,
        operator: 'MTN'
      };
      const messageConfirmation = { amount: this.paymentForm.value.montantFees, currency: this.currentTontine.tontine.monnaie, type: 'notconverted' };
      this.showConfirmationMessageOperator(messageConfirmation, params);
    }
  }
  // ==================== END MTM PAYMENT =========================


  // ==================== START ORANGE PAYMENT ======================
  updateParametersOrange() {
    const amount = this.getAmountFees(this.paymentForm.value.amount, this.currentTontine.tontine.monnaie);
    this.paymentForm.get('montantFees').setValue(amount);

    if (this.currentTontine.tontine.monnaie !== this.paymentForm.value.currency_name) {
      this.currency.convert(this.currentTontine.tontine.monnaie, this.paymentForm.value.currency_name,
        this.paymentForm.value.amount).then((montantSansFees: any) => {
          if (montantSansFees) {
            const params = {
              device_depart_name: this.paymentForm.value.currency_name,
              device_arrivee_name: this.currentTontine.tontine.monnaie,
              montant_depart_avec_handling_fees: this.getAmountFees(montantSansFees, this.paymentForm.value.currency_name),
              montant_depart_sans_handling_fees: montantSansFees ? montantSansFees : 0,
              montant_arrivee_avec_handling_fees: this.paymentForm.value.montantFees,
              montant_arrivee_sans_handling_fees: this.paymentForm.value.amount,
              typepaiement_id: this.paymentForm.value.type_payment_id,
              numero: this.paymentForm.value.numero,
              country_id: this.paymentForm.value.country_id,
              tontine_id: this.currentTontine.tontine.tontine_id,
              type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
              operator: 'orange'
            };

            const messageConfirmation = { amount: params.montant_depart_avec_handling_fees, currency: this.paymentForm.value.currency_name, type: 'converted' };
            this.showConfirmationMessageOperator(messageConfirmation, params);

          } else {
            this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
        });
    } else {

      const params = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        currency_name: this.paymentForm.value.currency_name,
        type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
        typepaiement_id: this.paymentForm.value.type_payment_id,
        country_id: this.paymentForm.value.country_id,
        montant_avec_handling_fees: this.paymentForm.value.montantFees,
        montant_sans_handling_fees: this.paymentForm.value.amount,
        numero: this.paymentForm.value.numero,
        operator: 'orange'
      };


      const messageConfirmation = { amount: this.paymentForm.value.montantFees, currency: this.currentTontine.tontine.monnaie, type: 'notconverted' };
      this.showConfirmationMessageOperator(messageConfirmation, params);

    }
  }

  // ==================== END ORANGE PAYMENT ======================


  // ==================== START OZOW PAYMENT  ========================

  updateParametersOzow() {
    const amount = this.getAmountFees(this.paymentForm.value.amount, this.currentTontine.tontine.monnaie);
    this.paymentForm.get('montantFees').setValue(amount);

    if (this.currentTontine.tontine.monnaie !== this.paymentForm.value.currency_name) {
      this.currency.convert(this.currentTontine.tontine.monnaie, this.paymentForm.value.currency_name,
        this.paymentForm.value.amount).then((montantSansFees: any) => {
          if (montantSansFees) {
            const params = {
              device_depart_name: this.paymentForm.value.currency_name,
              device_arrivee_name: this.currentTontine.tontine.monnaie,
              montant_depart_avec_handling_fees: this.getAmountFees(montantSansFees, this.paymentForm.value.currency_name),
              montant_depart_sans_handling_fees: montantSansFees ? montantSansFees : 0,
              montant_arrivee_avec_handling_fees: this.paymentForm.value.montantFees,
              montant_arrivee_sans_handling_fees: this.paymentForm.value.amount,
              typepaiement_id: this.paymentForm.value.type_payment_id,
              country_id: this.paymentForm.value.country_id,
              tontine_id: this.currentTontine.tontine.tontine_id,
              type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
              operator: 'ozow'
            };

            const messageConfirmation = { amount: params.montant_depart_avec_handling_fees, currency: this.paymentForm.value.currency_name, type: 'converted' };
            this.showConfirmationMessageOperator(messageConfirmation, params);
          } else {
            this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
        });
    } else {

      const params = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        currency_name: this.paymentForm.value.currency_name,
        type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
        typepaiement_id: this.paymentForm.value.type_payment_id,
        country_id: this.paymentForm.value.country_id,
        montant_avec_handling_fees: this.paymentForm.value.montantFees,
        montant_sans_handling_fees: this.paymentForm.value.amount,
        operator: 'ozow'
      };

      const messageConfirmation = { amount: this.paymentForm.value.montantFees, currency: this.currentTontine.tontine.monnaie, type: 'notconverted' };
      this.showConfirmationMessageOperator(messageConfirmation, params);
    }
  }

  // ==================== END OZOW PAYMENT  ========================================================= /

  /******************************** START PAYPAL PAYMENT *********************************************/

  // Update parameters PAYPAL
  updateParametersPaypal(payToken: string) {
    if (this.currentTontine.tontine.monnaie === this.paymentForm.value.currency_name) {
      const params = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        currency_name: this.paymentForm.value.currency_name,
        type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
        typepaiement_id: this.paymentForm.value.type_payment_id,
        country_id: this.paymentForm.value.country_id,
        montant_avec_handling_fees: this.paymentForm.value.montantFees,
        montant_sans_handling_fees: this.paymentForm.value.amount,
        pay_token: payToken,
        operator: 'paypal'
      };
      this.makeDepositOperatorWithoutConversion(params);
    } else {

      this.currency.convert(this.currentTontine.tontine.monnaie, this.paymentForm.value.currency_name, this.paymentForm.value.amount).then(montantSansFees => {
        if (montantSansFees) {
          const params = {
            device_depart_name: this.paymentForm.value.currency_name,
            device_arrivee_name: this.currentTontine.tontine.monnaie,
            montant_depart_avec_handling_fees: this.getAmountFees(montantSansFees, this.paymentForm.value.currency_name),
            montant_depart_sans_handling_fees: montantSansFees ? montantSansFees : 0,
            montant_arrivee_avec_handling_fees: this.paymentForm.value.montantFees,
            montant_arrivee_sans_handling_fees: this.paymentForm.value.amount,
            typepaiement_id: this.paymentForm.value.type_payment_id,
            country_id: this.paymentForm.value.country_id,
            tontine_id: this.currentTontine.tontine.tontine_id,
            type_caisse_tontine_id: this.typesCaisses[this.paymentForm.value.checkoutName].id,
            pay_token: payToken,
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


  updatePaypalAmount() {

    if (this.paymentForm.value.amount) {
      if (this.paymentForm.value.type_payment_name === 'PAYPAL') {
        const amount = this.getAmountFees(this.paymentForm.value.amount, this.currentTontine.tontine.monnaie);
        this.paymentForm.get('montantFees').setValue(amount);
        if (this.currentTontine.tontine.monnaie !== this.paymentForm.value.currency_name) {
          this.currency.convert(this.currentTontine.tontine.monnaie, this.paymentForm.value.currency_name, this.paymentForm.value.amount).then(montantSansFees => {
            if (montantSansFees) {

              const amountFees = this.getAmountFees(montantSansFees, this.paymentForm.value.currency_name);
              this.paymentForm.get('montantFinal').setValue(amountFees);

              this.translate.get('PAIDMODE_MSG2').subscribe(trans => {
                this.paypalMessage = `${trans} ${this.paymentForm.value.montantFees}
               ${this.currentTontine.tontine.monnaie} =
              ${this.paymentForm.value.montantFinal}
              ${this.paymentForm.value.currency_name}`;
                this.setupPayPay();
              });

            } else {
              this.translate.get('CURRENCY_CONVERT_ERROR').subscribe(trans => {
                this.paypalMessage = trans;
              });
            }
          });
        } else {
          this.paymentForm.get('montantFinal').setValue(this.paymentForm.value.montantFees);
          this.translate.get('PAIDMODE_MSG2').subscribe(trans => {
            this.paypalMessage = `${trans}  ${this.paymentForm.value.montantFinal}
          ${this.paymentForm.value.currency_name}`;
            this.setupPayPay();
          });

        }
      }
    }
  }

  initPayPal() {

    if (this.paymentForm.value.montantFinal > 0) {
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
                    total: _this.paymentForm.value.montantFinal,
                    currency: _this.paymentForm.value.currency_name
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
              amount: _this.paymentForm.value.montantFinal,
              moneyCode: _this.paymentForm.value.currency_name,
              product: 'Toupesu',
              paypalID: data.paymentToken.split('-')[1]
            };
            // Save and check the payment result
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

  // Setup the paypal payment
  setupPayPay() {
    if (!this.paypal_initialized) {
      this.initPayPal();
    }
  }

  /******************************** END PAYPAL PAYMENT *********************************************/


  /******************************** START PAYMENT SERVICES *********************************************/


  // Show confirmation message operator
  showConfirmationMessageOperator(messageData: any, params: any) {
    this.translate.get(['DEPOSIT_TITLE', 'PAIDMODE_MSG2', 'CONFIRM_PAY_CONTRIBUTION_SUBTEXT2', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {

      const translation = [];
      translation.push(trans.PAIDMODE_MSG2);
      translation.push(trans.CONFIRM_PAY_CONTRIBUTION_SUBTEXT2);
      translation.push(trans.CANCEL_TEXT);
      translation.push(trans.YES_TEXT);
      const messageConfirmation = {
        title: trans.DEPOSIT_TITLE, contribution: messageData.amount,
        device_name: messageData.currency, type: messageData.type
      };
      this.paymentConfirm(messageConfirmation, params, translation);
    });
  }


  // Show confirmation message offline method
  showConfirmationMessageOffline(type: any, data: any) {
    const translation = [];
    this.translate.get(['DEPOSIT_TITLE', 'PAIDMODE_MSG2', 'CONFIRM_PAY_CONTRIBUTION_SUBTEXT2', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      const messageConfirmation = {
        title: trans.DEPOSIT_TITLE, contribution: data.amount,
        device_name: data.currency_name, type: type
      };
      translation.push(trans.PAIDMODE_MSG2);
      translation.push(trans.CONFIRM_PAY_CONTRIBUTION_SUBTEXT2);
      translation.push(trans.CANCEL_TEXT);
      translation.push(trans.YES_TEXT);
      this.paymentConfirm(messageConfirmation, data, translation);
    });
  }

  async paymentConfirm(dataMessage: any, contributionDataParams: any, translation: string[]) {
    const alert = await this.alertController.create({
      header: `${dataMessage.title}`,
      message: `${translation[0]} ${dataMessage.contribution}
    ${dataMessage.device_name} ${translation[1]} `,
      buttons: [
        {
          text: `${translation[2]} `,
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
            } else if (dataMessage.type === 'transfert') {
              this.transfertFromCaisseToCaisse(contributionDataParams)
            } else if (dataMessage.type === 'bank') {
              this.rechargeTradionnalBanking(contributionDataParams)
            } else if (dataMessage.type === 'cash') {
              this.cashPayment(contributionDataParams);
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
    this.walletTontine.makeDepositWithMobileMoneyWithConversion(data)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          // Send the reponse per operator
          this.sendResponsePerOperator(reponse, data.operator);
        }
      }, error => {

        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_not_found) {

            this.error.renewSession().then((data: any) => {
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
          this.error.manageError(error);
        }
      });

  }

  // make deposit  with operator without conversion
  makeDepositOperatorWithoutConversion(data: any) {
    this.loading = true;
    this.showLoadingMessage(data);
    this.walletTontine.makeDepositWithMobileMoneyWithoutConversion(data)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          // Send the reponse per operator
          this.sendResponsePerOperator(reponse, data.operator);

        }
      }, error => {


        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_not_found) {

            this.error.renewSession().then((data: any) => {
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
          this.error.manageError(error);
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
        this.translate.get('DEPOSIT_DONE_MSG').subscribe(value => {
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
        this.error.manageError(error);
      }

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

  // Show payment result
  showPaymentResult() {
    this.loading = false;
    this.ui.dismissLoading();

    this.getAllcashers();
    this.initPaymentForm();
    this.validationMessage();
    this.clearTimeoutData();
    this.clearSetIntervalData();

    this.navController.setDirection('root');
    this.events.publish('wallet-recharge');
    this.router.navigate(['dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'wallet']);
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

    this.getAllcashers();
    this.initPaymentForm();
    this.validationMessage();
    this.clearTimeoutData();
    this.clearSetIntervalData();
  }

  // Leave the page
  ionicViewDidLeave() {
    if (this.loading) {
      this.exitPayment();
    }
  }

  // listen to back button
  hardwareBackButton() {
    this.platform.backButton.subscribe(() => {
      const url = this.router.url;
      if (url === '/dashboard/my-tontines/' + this.currentTontine.tontine.tontine_id + '/wallet/top-up') {
        if (this.refernceId) {
          this.cancelPaymentResult(this.refernceId);
        } else {
          this.exitPayment();
        }
      }
    });
  }

  /******************************** END PAYMENT SERVICES *********************************************/

}
