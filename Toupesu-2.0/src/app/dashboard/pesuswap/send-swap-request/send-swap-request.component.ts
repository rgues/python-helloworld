import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { CurrencyService } from 'src/app/shared/service/currency.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { SwapGlobalDataService } from '../services/swap-global-data.service';
import { SwapService } from '../services/swap.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-send-swap-request',
  templateUrl: './send-swap-request.component.html',
  styleUrls: ['./send-swap-request.component.scss'],
})
export class SendSwapRequestComponent implements OnInit {

  swapType: any;
  swapTypes: any;
  requestData: any;
  maxAmount: any;
  amountSwap: any;
  swapRequestForm: any;
  currentBalance: any;
  wallet: any;
  canMakeRequest: any;

  constructor(
    private modatCtrl: ModalController,
    private translate: TranslateService,
    private zone: NgZone,
    private constant: ConstantService,
    private swapData: SwapGlobalDataService,
    private currency: CurrencyService,
    private ui: UiService,
    private navParams: NavParams,
    private swapService: SwapService,
    private error: ErrorService,
    private swapError: SwapErrorService,
    private fb: FormBuilder
  ) {
    this.swapTypes = [];
    this.canMakeRequest = true;
    this.requestData = this.navParams.get('data');
    this.wallet = this.navParams.get('wallet');
    this.maxAmount = this.navParams.get('maxAmount');
    this.amountSwap = this.navParams.get('amountSwap');
    this.initSwapRequestForm(this.requestData);
  }

  ngOnInit() {
    this.getSwapTypes();
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

  get exchangeRate() {
    return this.swapRequestForm.get('exchange_rate');
  }

  get fees() {
    return this.swapRequestForm.get('fees');
  }
  
  get type_swapId() {
    return this.swapRequestForm.get('type_swap_id');
  }

  // Init the swap request form
  initSwapRequestForm(data: any) {
    this.swapRequestForm = this.fb.group({
      currency_from: [data.currency_from, Validators.required],
      currency_to: [data.currency_to, Validators.required],
      amount_from: [data.amount_from, Validators.required],
      amount_to: [data.amount_to, Validators.required],
      exchange_from: [{ value: `${1} ${data.currency_from} : `, disabled: true }],
      exchange_rate: [data.exchange_rate, Validators.required],
      fees: [data.fees, Validators.required],
      type_swap_id: [data.type_swap_id, Validators.required],
    });
    this.checkRequestCanInstantRequest(this.swapRequestForm.value.currency_from);
  }

  // check if the user can make instant request
  checkRequestCanInstantRequest(currency: any) {
    this.canMakeRequest = this.swapData.checkRequestCanInstantRequest(currency,this.wallet,this.swapRequestForm.value.amount_from,this.swapRequestForm.value.fees);
  }

  // Update the exchange rate
  updateExchangeRate(rate: any) {
    if (rate > 0) {
      let amountTo = 0;
      amountTo = parseFloat(rate) * parseFloat(this.swapRequestForm.value.amount_from);
      this.swapRequestForm.get('amount_to').setValue(Number(amountTo).toFixed(2));
    } else {
      this.swapRequestForm.get('amount_to').setValue(Number(0).toFixed(2));
    }
  }

  // close modal
  closeAddMember(ans?: any) {
    this.modatCtrl.dismiss(ans, 'cancel');
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
            this.swapType = this.canMakeRequest ? 1 : 2;
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

  // response with max amount
  reponseWithMaxAmount() {
    this.swapService.getSwapRate().subscribe((data: any) => {
      if (data && data.swap_rate && data.swap_rate.length > 0 && this.maxAmount > 0) {
        let exchangeFees = 0;
        data.swap_rate.forEach((currencyData: any) => {
          if (currencyData.currency_from === this.swapRequestForm.value.currency_from && currencyData.currency_to === this.swapRequestForm.value.currency_to) {
            const rate = currencyData;
            if (rate) {
              if (rate.type === "pourcentage") {
                exchangeFees = (parseFloat(rate.rate_value) / 100) * parseFloat(this.maxAmount);
              } else {
                exchangeFees = parseFloat(rate.rate_value);
              }
            }
          }
        });
        this.translate.get(['SOLDE_WALLET_IS_NOT_SUFFICIENT', 'MAX_SWAP_AMOUNT_MSG']).subscribe(trans => {
          this.ui.presentToast(`${trans.SOLDE_WALLET_IS_NOT_SUFFICIENT}. ${trans.MAX_SWAP_AMOUNT_MSG}  ${Number(parseFloat(this.maxAmount) - exchangeFees).toFixed(2)}`);
        });
        const param = this.swapRequestForm.value;
        param.fees = Number(exchangeFees).toFixed(2);
        param.amount_from = Number(parseFloat(this.maxAmount) - exchangeFees).toFixed(2);

        this.currency.conversionRateValue(param.currency_from, param.currency_to).then((rate: any) => {
          // set the conversion rate value
          param.exchange_rate = rate;
          param.amount_to = Number(parseFloat(param.amount_from) * parseFloat(rate)).toFixed(2);
          param.message = 'retry-request';
          this.modatCtrl.dismiss(param, 'cancel');
        });

      } else {
        this.translate.get(['SOLDE_WALLET_IS_NOT_SUFFICIENT', 'MAX_SWAP_AMOUNT_MSG']).subscribe(trans => {
          this.ui.presentToast(`${trans.SOLDE_WALLET_IS_NOT_SUFFICIENT}. ${trans.MAX_SWAP_AMOUNT_MSG}  ${this.maxAmount}`);
          this.modatCtrl.dismiss('make-request', 'cancel');
        });
      }
    });
  }

  // Make a swap request
  makeSwapRequest() {
    const swapData = this.swapRequestForm.value;
    swapData.type_swap_id = this.swapType;
    this.translate.get('MAKE_SWAP_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.swapService.makeSwapRequest(swapData)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        if (reponse && reponse.message === "success") {
          this.translate.get('MAKE_SWAP_SUCCESS_TEXT').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.closeAddMember('make-request');
        }
      }, error => {
     
        if (error && error.error && error.error.message === "error") {

          if (error && error.error && error.error.solde_wallet_is_not_sufficient) {
            this.ui.dismissLoading();
            this.reponseWithMaxAmount();
          } else if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              this.ui.dismissLoading();
              if (data && data.result === "OK") {
                this.makeSwapRequest();
              }
            });
          } else {
            this.ui.dismissLoading();
            this.swapError.manageWalletError(error);
          }
        } else {
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }

}
