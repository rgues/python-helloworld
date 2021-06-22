import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CurrencyService } from 'src/app/shared/service/currency.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { SwapGlobalDataService } from '../services/swap-global-data.service';
import { SwapService } from '../services/swap.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss'],
})
export class SwapComponent implements OnInit {

  requestData: any;
  swaprate: any;
  wallet: any;
  canMakeRequest: boolean;

  constructor(
    private modatCtrl: ModalController,
    private translate: TranslateService,
    private router: Router,
    private currency: CurrencyService,
    private errorService: ErrorService,
    private ui: UiService,
    private swapService: SwapService,
    private swapData: SwapGlobalDataService,
    private navParams: NavParams,
    private swapError: SwapErrorService
  ) {
    this.wallet = this.navParams.get('wallet');
    this.requestData = this.navParams.get('data');
    this.canMakeRequest = true;
    this.checkRequestCanInstantRequest(this.requestData.request[0].to);
  }

  ngOnInit() {
    this.getSwapRate();
  }

  closeSwap(ans?: any) {
    this.modatCtrl.dismiss(ans, 'cancel');
  }

  // Go to top up
  goToTopUp() {
    this.closeSwap();
    this.router.navigate(['/dashboard/my-wallet']);
  }

  // get the swap rate
  getSwapRate() {
    this.currency.conversionRateValue(this.requestData.request[0].from, this.requestData.request[0].to)
      .then(data => {
        this.swaprate = data;
      });
  }

  // check if the user can make instant request
  checkRequestCanInstantRequest(currency: any) {
    this.canMakeRequest = this.swapData.checkRequestCanInstantRequest(currency,this.wallet,this.requestData.request[0].amount,this.requestData.fees);
  }

  // Matched swap request
  matchedSwapRequest() {
    const swapData = { list_swap_request_id: this.requestData.request };
    this.translate.get('MAKE_SWAP_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.swapService.mathSwapRequest(swapData)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        if (reponse && reponse.message === "success") {

          if (reponse.completed_swap) {
            this.translate.get('MAKE_SWAP_SUCCESS_TEXT').subscribe(trans => {
              this.ui.presentToast(trans);
            });
          } else if (reponse.pending_swap) {
            this.translate.get('PENDING_SUCCESS_TEXT').subscribe(trans => {
              this.ui.presentToast(trans);
            });
          }

          this.closeSwap('match-request');
        }
      }, error => {

        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.errorService.renewSession().then((data: any) => {
              this.ui.dismissLoading();
              if (data && data.result === "OK") {
                this.matchedSwapRequest();
              }
            });
          } else {
            this.ui.dismissLoading();
            this.swapError.manageWalletError(error);
          }
        } else {
          this.ui.dismissLoading();
          this.errorService.manageError(error);
        }
      });
  }

}
