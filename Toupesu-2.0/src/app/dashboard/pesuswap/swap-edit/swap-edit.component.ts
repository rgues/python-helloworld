import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { CurrencyService } from 'src/app/shared/service/currency.service';
import { SwapService } from '../services/swap.service';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { TranslateService } from '@ngx-translate/core';
import { SwapGlobalDataService } from '../services/swap-global-data.service';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-swap-edit',
  templateUrl: './swap-edit.component.html',
  styleUrls: ['./swap-edit.component.scss'],
})
export class SwapEditComponent implements OnInit {

  swapRequestForm: FormGroup;
  currencies: any[] = [];
  userCurrencies: any;
  systemCurrencies: any;
  swapRates: any;
  matchRequests: any;
  getAmountText: any;
  paidAmountText: any;
  currentUserData: any;
  swapTypes: any;
  requestData: any;
  canUpdate: any;
  hasUpdateExchange: any;
  wallet: any;
  canMakeRequest: any;

  constructor(
    private fb: FormBuilder,
    private constant: ConstantService,
    private ui: UiService,
    private modatCtrl: ModalController,
    private translate: TranslateService,
    private zone: NgZone,
    private error: ErrorService,
    private swapService: SwapService,
    private swapData: SwapGlobalDataService,
    private currency: CurrencyService,
    private swapError: SwapErrorService,
    private userService: UserService,
    private navParams: NavParams
  ) {
    this.userCurrencies = [];
    this.systemCurrencies = [];
    this.swapRates = [];
    this.currentUserData = this.userService.getUserData();
    this.requestData = this.navParams.get('data');
    this.canUpdate = true;
    this.hasUpdateExchange = false;
    this.wallet = this.navParams.get('wallet');
    this.canMakeRequest = true;
  }

  ngOnInit() {
    this.swapRequestForm = this.fb.group({
      swap_request_id: [this.requestData.swap_request_id],
      currency_from: [this.requestData.infos_currency_from.name, Validators.required],
      currency_to: [this.requestData.infos_currency_to.name, Validators.required],
      amount_from: [this.requestData.amount_from, Validators.required],
      amount_to: [this.requestData.amount_to, Validators.required],
      exchange_from: [{ value: `${1} ${this.requestData.infos_currency_from.name} : `, disabled: true }],
      exchange_rate: [this.requestData.exchange_rate],
      fees: [this.requestData.fees],
      type_swap_id: ['']
    });

    this.checkRequestCanInstantRequest(this.requestData.infos_currency_from.name);
    this.getSwapTypes();
    this.getSwapRate();
  }


  get currencyHave() {
    return this.swapRequestForm.get('currency_from');
  }

  get currencyWant() {
    return this.swapRequestForm.get('currency_to');
  }

  get amountHave() {
    return this.swapRequestForm.get('amount_from');
  }

  get amountWant() {
    return this.swapRequestForm.get('amount_to');
  }

  // Enable swap edition
  enableSwapEdition() {
    this.swapService.disableSwapEdition(this.requestData.swap_request_id, 0).subscribe(reponse => {
    }, error => {
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.enableSwapEdition();
            }
          });
        } else {
          this.swapError.manageWalletError(error);
        }
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Close the modal
  closeModal(ans: any) {
    this.enableSwapEdition();
    this.modatCtrl.dismiss(ans, null);
  }

  // disable swap edition
  disableEdition() {
    return this.swapRequestForm.invalid 
    || (this.swapRequestForm.value.type_swap_id === 1 && !this.canMakeRequest) ||  (this.swapRequestForm.value.amount_from < 0 || this.swapRequestForm.value.amount_to < 0 );
  } 

  // Get the swap type
  getType(type: string) {
    return this.constant.getTypeSwap(type);
  }

  // Get the list of type of swap
  getSwapTypes() {
    this.swapService.getAllSwapType()
      .subscribe((reponse: any) => {
        if (reponse && reponse.type_swap) {
          this.zone.run(() => {
            this.swapTypes = reponse.type_swap;
          });

          setTimeout(() => {
            if (this.swapTypes && this.swapTypes.length > 0) {
              this.swapRequestForm.get('type_swap_id').setValue(this.requestData.type_swap_id);
            }
          }, 500);
        }
      }, error => {
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getSwapTypes();
              }
            });
          } else {
            this.swapError.manageWalletError(error);
          }
        }
      });
  }

  // Get the users currencies
  getUserCurrencies() {
    this.swapService.getAllWalletCurrenies()
      .subscribe((reponse: any) => {
        if (reponse && reponse.currencies_user) {
          this.userCurrencies = reponse.currencies_user;
          setTimeout(() => {
            if (this.userCurrencies && this.userCurrencies.length > 0) {
              this.swapRequestForm.get('currency_from').setValue(this.requestData.infos_currency_from.name);
            }
          }, 500);
        }
      }, error => {
        if (error && error.error && error.error.message === "error") {

          if (error && error.error && error.error.user_not_exist) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getUserCurrencies();
              }
            });
          } else {
            this.swapError.manageWalletError(error);
          }
        }
      });
  }

  // Get the sytem currencies
  getSystemCurrencies() {
    this.swapService.getAllSystemCurrenies()
      .subscribe((reponse: any) => {
        if (reponse && reponse.currencies_system) {

          this.zone.run(() => {
            this.systemCurrencies = reponse.currencies_system;
          });

          setTimeout(() => {
            if (this.systemCurrencies && this.systemCurrencies.length > 0) {
              this.swapRequestForm.get('currency_to').setValue(this.requestData.infos_currency_to.name);
            }
          }, 500);
        }
      }, error => {
        if (error && error.error && error.error.message === "error") {

          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getSystemCurrencies();
              }
            });
          } else {
            this.swapError.manageWalletError(error);
          }

        }
      });
  }

  // Get all swap rate 
  getSwapRate() {
    this.swapService.getSwapRate()
      .subscribe((reponse: any) => {
        if (reponse && reponse.swap_rate) {
          this.swapRates = reponse.swap_rate;
        }
      }, error => {
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getSwapRate();
              }
            });
          } else {
            this.swapError.manageWalletError(error);
          }
        }
      });
  }

  // check if the user can make instant request
  checkRequestCanInstantRequest(currency: any) {
    this.canMakeRequest =this.swapData.checkRequestCanInstantRequest(currency,this.wallet,this.swapRequestForm.value.amount_from,this.swapRequestForm.value.fees);
  }

  // Get exchange fees
  getExchangeFees(currencyFrom: string, currencyTo: string, amount: number) {
    this.swapData.getExchangeFees(this.swapRates,currencyFrom, currencyTo,amount).then(exchangeFees => {
      this.swapRequestForm.get('fees').setValue(exchangeFees);
    });
  }

  // Get the exchange rate
  getExchangeRate(currencyFrom: string, currencyTo: string) {
    this.currency.conversionRateValue(currencyFrom, currencyTo).then(rate => {
      this.swapRequestForm.get('exchange_rate').setValue(rate);
    });
  }

  // Update amount 
  updateAmount(currencyFrom: string, currencyTo: string, direction: string, rate: any, type: any) {
    if (type === 'rate') {
      this.updateExchangeRate(currencyFrom, currencyTo, rate);
    } else if (type === 'exchange' && !this.hasUpdateExchange) {
      this.updateAmountDestination(currencyFrom, currencyTo, direction);
    } else {
      this.updateExchangeRate(currencyFrom, currencyTo, rate);
    }
  }

  // Update the exchange rate
  updateExchangeRate(currencyFrom: string, currencyTo: string, rate: any) {
    this.hasUpdateExchange = true;
    if (rate >= 0 && this.canUpdate) {
      let amountTo = 0;
      amountTo = parseFloat(rate) * parseFloat(this.swapRequestForm.value.amount_from);
      this.canUpdate = false;
      this.swapRequestForm.get('amount_to').setValue(Number(amountTo).toFixed(2));
      this.getExchangeFees(currencyFrom, currencyTo, this.swapRequestForm.value.amount_from);
    } else {
      if (rate < 0) {
        this.canUpdate = false;
        this.swapRequestForm.get('amount_to').setValue(0);
      } else {
        this.canUpdate = true;
      }
    }
    this.checkRequestCanInstantRequest(currencyFrom);
  }


  // Update the amount  destination
  updateAmountDestination(currencyFrom: string, currencyTo: string, direction: string) {
    const amount = direction === 'from' ? this.swapRequestForm.value.amount_from : this.swapRequestForm.value.amount_to;
    if (currencyFrom && currencyTo && amount >= 0 && this.canUpdate) {
      this.getExchangeRate(currencyFrom, currencyTo);
      const param1 = direction === 'from' ? currencyFrom : currencyTo
      const param2 = direction === 'from' ? currencyTo : currencyFrom
      this.swapData.getConversionValue(param1, param2, amount).then(data => {
        this.canUpdate = false;
        direction === 'from' ? this.swapRequestForm.get('amount_to').setValue(data) : this.swapRequestForm.get('amount_from').setValue(data);
        this.getExchangeFees(currencyFrom, currencyTo, this.swapRequestForm.value.amount_from);
      });
    } else {
      this.canUpdate = true;
    }
    this.checkRequestCanInstantRequest(currencyFrom);
  }

  // edit a swap request
  editSwapRequest() {
    const swapData = this.swapRequestForm.value;
    this.translate.get('EDIT_SWAP_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.swapService.updateSwapRequest(swapData)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        if (reponse && reponse.message === "success") {
          this.translate.get('EDIT_SWAP_SUCCESS_TEXT').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.closeModal('updated');
        }
      }, error => {

        if (error && error.error && error.error.message === "error") {

          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              this.ui.dismissLoading();
              if (data && data.result === "OK") {
                this.editSwapRequest();
              } else {
                this.closeModal(null);
              }
            });
          } else {
            this.closeModal(null);
            this.ui.dismissLoading();
            this.swapError.manageWalletError(error);
          }
        } else {
          this.closeModal(null);
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }

}
