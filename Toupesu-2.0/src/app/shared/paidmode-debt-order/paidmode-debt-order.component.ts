import { Component, OnInit, Input, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from '../service/error.service';
import {  AlertController, NavController } from '@ionic/angular';
import { LocationService } from '../service/location.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { ApiService } from '../service/api.service';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';
import { Router } from '@angular/router';
import { PaymentErrorService } from '../service/payment-error.service';
import { PaymentGlobalDataService } from '../service/payment-global-data.service';
import { EventService } from '../service/events.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from '../service/ui.service';
import { PluginService } from '../service/plugin.service';


interface PaymentMethod {
  id: number;
  logo: string;
  currency: string;
  country_id: number;
  name: string;
  placeholder ?: string;
  handling_fees?: number ;
  type_handling_fees ?: string; 
}

@Component({
  selector: 'app-paidmode-debt-order',
  templateUrl: './paidmode-debt-order.component.html',
  styleUrls: ['./paidmode-debt-order.component.scss'],
})
export class PaidmodeDebtOrderComponent implements OnInit {

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
  browser: any;
  allPaymentMethods: any;
  userData:any;
  currentDebtData: any;
  paymentForm: FormGroup;
  reference: string;
  validationMessages: any;
  paypalLoading: boolean;
  paypal_initialized: boolean;

  @Input() amountPay: number;
  @Input() balance: number;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tontine: TontineService,
    private events: EventService,
    private api: ApiService,
    private router: Router,
    private debt:DebtsManagerService,
    private paymentData: PaymentGlobalDataService,
    private navController: NavController,
    private alertController: AlertController,
    private errorService: ErrorService,
    private location: LocationService,
    private translate: TranslateService,
    private paymentError: PaymentErrorService,
    private zone: NgZone,
    private ui: UiService,
    private plugin: PluginService
  ) {
    this.cron = null;
    this.timeOut = null;
    this.loadingOperator = false;
    this.loading = false;
    this.errorPhone = false;
    this.states = [];
    this.paymentMethods = [];
    this.paypalMessage = '';
    this.tontineData = this.tontine.getCurrentTontineData();
    this.userData = this.userService.getUserData();
    this.allPaymentMethods = [];
    this.currentDebtData = this.debt.getDebtsData();
    this.contributionData =  this.currentDebtData;

    this.paypalLoading = false;
    this.paypal_initialized = false;
  }

  ngOnInit() {
    this.getAllMethodPaymentType();
    this.initFormMessage();
    this.initPaymentForm();
  }

  // Form getters
  get amountError() {
    return this.userPayMethodForm.get('montantRef');
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

  get reason() {
    return this.userPayMethodForm.get('reason');
  }

  get proof() {
    return this.userPayMethodForm.get('receipt');
  }


  // form init message
  initFormMessage() {
    this.translate.get(['REGISTER_PHONE_REQUIRED', 'AMOUNT_REQUIRED', 'PAID_MODE_REQUIRED','M_COUNTRY_REQUIRED','DEBT_REASON_MSG_REQUIRED_TEXT'])
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
          ],
          
        reason: [
          { type: 'required', message: value.DEBT_REASON_MSG_REQUIRED_TEXT }
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
      device_name: [''],
      currency: [''],
      currencyLabel: [''],
      user_id:[ this.userData.id, Validators.required],
      bouffe_id:[this.currentDebtData ? this.currentDebtData.bouffe_id : '', Validators.required],
      device_id:[this.currentDebtData ? this.currentDebtData.device_id : '', Validators.required],
      reason:[''],
      receipt:[''],
      liste_proof:[''],
      montant: [this.balance, Validators.compose([Validators.required,Validators.min(1),Validators.max(this.balance)])],
      type_payment_id: [currentPayment ? currentPayment.typepaiement_id : ''],
      type_payment_name: [currentPayment ? currentPayment.name : ''],
      typePaymentIndex: [0, Validators.required]
    });
  }

  // Get the payment proofs
   getProof() {
      this.plugin.getPicture().subscribe((picture : any) => {
          if (picture) {
            setTimeout(() => {
              this.userPayMethodForm.get('receipt').setValue(picture);
            }, 200);
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
        this.paymentMethods = this.paymentData.formatPaymentMethodForDebt(reponse.typePayment);
      }
      const defaultMethod: PaymentMethod[] = [{
        id: 0, country_id: 0, logo: 'assets/wallet-icon.svg',
        currency: this.contributionData.device_name, name: 'BANK TRANSFERT', placeholder: '',
        handling_fees :  0,
        type_handling_fees : 'valeur'
      }];
      this.paymentMethods = defaultMethod.concat(this.paymentMethods);
      this.allPaymentMethods = this.paymentMethods;
      this.getCountries(false);
    }, error => {
      this.loadingOperator = false;
      this.paymentMethods.push({
        id: 0, country_id: 0, logo: 'assets/wallet-icon.svg',
        currency: this.contributionData.device_name, name: 'BANK TRANSFERT', placeholder: '',
        handling_fees :  0,
        type_handling_fees : 'valeur'
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
        setTimeout(()  => {
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
      this.userPayMethodForm.get('currency').setValue(country.device_name);
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
      this.zone.run(() => {
        this.userPayMethodForm.get('typePaymentIndex').setValue(index);
      });
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

  // make the payment
  async paymentWalletConfirm(dataMessage: any, translation: string[]) {
    const alert = await this.alertController.create({
      header: `${translation[4]}`,
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
            switch(dataMessage.type_payment_name) {
            
              case 'BANK TRANSFERT': 
                this.bankPayment();
                break;
  
              default : 
              this.paidWithOperatorWallet();
              break;  
            }
          }
        }
      ]
    });

    await alert.present();
  }


  // Show the payment mode
  showPayment(data: any) {
        const translation = [];
        this.translate.get(['BENEFICIARY_PAY_TEXT', 'CONFIRM_PAY_CONTRIBUTION_SUBTEXT2', 'CANCEL_TEXT', 'YES_TEXT','BENEFICIARY_PAMENT']).subscribe(trans => {
          translation.push(trans.BENEFICIARY_PAY_TEXT);
          translation.push(trans.CONFIRM_PAY_CONTRIBUTION_SUBTEXT2);
          translation.push(trans.CANCEL_TEXT);
          translation.push(trans.YES_TEXT);
          translation.push(trans.BENEFICIARY_PAMENT);
          this.paymentWalletConfirm(data, translation);
        });
  }


  /******************************** START OPERATOR PAYMENT *********************************************/

  // Paid the contribution with wallet
  paidWithOperatorWallet() {
    this.userPayMethodForm.get('liste_proof').setValue([{
      montant: this.userPayMethodForm.value.montant, 
      typepaiement_id: this.userPayMethodForm.value.type_payment_id,
      receipt : this.userPayMethodForm.value.receipt
    }]);
    this.loading = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.debt.makePaymentOperatorWallet(this.userPayMethodForm.value)
      .subscribe((reponse: any) => {
        this.loading = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.translate.get('DEBT_PAYMENT_BENEFICIAL_SUCCES_MSG').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.events.publish('modal-close');
          this.navController.setDirection('root');
          this.router.navigate(['/', 'dashboard', 'my-tontines', this.tontineData.tontine.tontine_id]);
        }
      }, error => {
       
       
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
      
            this.errorService.renewSession().then((data: any) => {
                if (data && data.result === "OK") {
                    this.ui.dismissLoading();
                    this.paidWithOperatorWallet();
                } else {
                  this.loading = false;
                  this.ui.dismissLoading();
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


  /******************************** START BANK PAYMENT *********************************************/
  // bank paiement
      bankPayment() {
        this.userPayMethodForm.get('liste_proof').setValue([{
          montant: this.userPayMethodForm.value.montant, 
          description: this.userPayMethodForm.value.reason, 
          receipt: this.userPayMethodForm.value.receipt   
        }]);
        this.loading = true;
        this.translate.get('TOPUP_TEXT1').subscribe(value => {
          this.ui.presentLoading(value);
        });
        this.debt.makePaymentTradiBank(this.userPayMethodForm.value).subscribe((reponse: any) => {
          this.loading = false;
          this.ui.dismissLoading();
          if (reponse && reponse.message === 'success') {
              this.translate.get('DEBT_PAYMENT_BENEFICIAL_SUCCES_MSG').subscribe(trans => {
                this.ui.presentToast(trans);
              });
            this.events.publish('modal-close');
            this.navController.setDirection('root');
            this.router.navigate(['/', 'dashboard', 'my-tontines', this.tontineData.tontine.tontine_id,'session-no-paid']);
          }
        }, error => {
          
            if (error && error.error) {
              if (error.error.user_not_found) {
        
                this.errorService.renewSession().then((data: any) => {
                    if (data && data.result === "OK") {
                        this.ui.dismissLoading();
                        this.bankPayment();
                    } else {
                      this.loading = false;
                      this.ui.dismissLoading();
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

}
