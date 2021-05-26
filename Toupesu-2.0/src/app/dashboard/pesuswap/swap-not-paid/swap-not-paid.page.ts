import { Component, OnInit, ViewChild } from '@angular/core';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapService } from '../services/swap.service';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { PaidModalComponent } from '../paid-modal/paid-modal.component';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { SwapGlobalDataService } from '../services/swap-global-data.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UserService } from '../../user/service/user.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-swap-not-paid',
  templateUrl: './swap-not-paid.page.html',
  styleUrls: ['./swap-not-paid.page.scss'],
})
export class SwapNotPaidPage implements OnInit {

  allRequests: any;
  myRequests: any;
  pendingRequests: any;
  activeRequests: any;
  getAmountText: any;
  paidAmountText: any;
  selectRequests: any;
  currentUserData: any;
  amount: any;
  currency: any;
  loading: boolean;
  nbItems: number;
  fees: any
  refresh: boolean;

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private ui: UiService,
    private util: UtilService,
    private constant: ConstantService,
    private error: ErrorService,
    private modatCtrl: ModalController,
    private swapService: SwapService,
    private swapData: SwapGlobalDataService,
    private swapError: SwapErrorService,
    private userService: UserService,
    private translate: TranslateService
  ) {
    this.allRequests = [];
    this.myRequests = [];
    this.pendingRequests = [];
    this.nbItems = 10;
    this.loading = true;
    this.refresh = false;
    this.activeRequests = [];
    this.selectRequests = [];
    this.currentUserData = this.userService.getUserData();
    this.amount = 0;
    this.fees = 0;
    this.currency = '';

  }

  ngOnInit() {
    this.getAllPendingRequest();
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getAllPendingRequest(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.allRequests.length < this.activeRequests.length) {
          this.allRequests.push(this.activeRequests[this.allRequests.length]);
        } else if (this.allRequests.length === this.activeRequests.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Get the percentage of succes
  getSuccessPercentage(percent: any) {
    return this.swapData.getSuccessPercentage(percent);
  }

  // get the expired time
  expiredTime(request: any) {
    return this.constant.expiredTime(request);
  }

  // get percentage of loss
  getLossPercentage(percent) {
    return this.swapData.getLossPercentage(percent);
  }

  // can pay request
  canPayRequest(request: any) {
    let ican = true;
    // check if user has matched the request
    if (request.user_id_to && (request.user_id_to === this.currentUserData.id || request.user_id_from === this.currentUserData.id)) { 

      if ((request.infos_status_request && request.infos_status_request.description === 'pending')) {
        if (request && request.user_id_from === this.currentUserData.id) {
          if (request.liste_user && request.liste_user.length > 0) {
            request.liste_user.forEach(user => {
              if (user.direction === 'from' && user.infos_user.user_id === this.currentUserData.id) {
                ican = false
              }
            });
          }
        } else {
          if (request.liste_user && request.liste_user.length > 0) {
            request.liste_user.forEach(user => {
              if (user.direction === 'to' && user.infos_user.user_id === this.currentUserData.id) {
                ican = false
              }
            });
          }
        }
      } else {
        ican = false
      }
    } else {
      ican = false
    }
    return ican;
  }

  // format pending swap response
  formatPendingSwapReponse(requests: any) {
    this.pendingRequests = this.util.orderByKeyUp(requests, 'updated_at');
    const formatData = [];
    if (this.pendingRequests && this.pendingRequests.length > 0) {
      this.pendingRequests.forEach(request => {
        if (this.canPayRequest(request)) {
          formatData.push({ select: false, canSelect: true, data: request });
        }
      });
    }
    this.activeRequests = formatData;
    if (this.activeRequests.length > this.nbItems) {
      this.allRequests = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.allRequests.push(this.activeRequests[this.allRequests.length]);
      }
    } else {
      this.allRequests = this.activeRequests;
    }
  }

  //  Get all the pending request
  getAllPendingRequest(event?: any) {
    this.selectRequests = [];
    this.refresh = true;
    this.swapService.getSwapPendingRequest()
      .subscribe((reponse: any) => {
        this.refresh = false;
        if (reponse && reponse.requests) {
          this.formatPendingSwapReponse(reponse.requests);
          this.loading = false;
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
      }, error => {

        if (event) {
          event.target.complete();
        }
        this.refresh = false;
        this.loading = false;
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.getAllPendingRequest(event);
              } else {
                this.loading = false;
              }
            });
          }
        } else {
          this.swapError.manageWalletError(error);
        }
      });
  }

  // check selection
  checkSelection(index: number) {
    let requestData = [];
    this.getAmountText = '';
    this.paidAmountText = '';
    let getAmount = 0;
    let paidAmount = 0;
    let direction = '';
    let userId = '';
    let currencyForm = '';
    let currencyTo = '';
    let type = 0;
    let position = 0;
    let fees = 0;

    // Get the current devise and type of request
    this.allRequests.forEach(request => {
      if (position !== index && request.select) {
        currencyForm = request.data.infos_currency_from.name;
        currencyTo = request.data.infos_currency_to.name;
        userId = request.data.user_id_from === this.currentUserData.id ? request.data.user_id_from : request.data.user_id_to;
        type = request.data.type_swap_id;
        direction = request.data.user_id_from === this.currentUserData.id ? 'user_id_from' : 'user_id_to';
      }
      position++;
    });

    this.allRequests.forEach(request => {
      if (request.select) {
        if (currencyForm === '' && currencyTo === '' && type === 0) {
          currencyForm = request.data.infos_currency_from.name;
          currencyTo = request.data.infos_currency_to.name;
          type = request.data.type_swap_id;
          userId = request.data.user_id_from === this.currentUserData.id ? request.data.user_id_from : request.data.user_id_to;
          direction = request.data.user_id_from === this.currentUserData.id ? 'user_id_from' : 'user_id_to';
        }

        if ((currencyForm === request.data.infos_currency_from.name) && (currencyTo === request.data.infos_currency_to.name) && (type === request.data.type_swap_id) && (userId === request.data[direction])) {
          requestData.push({ swap_request_id: request.data.swap_request_id, from: currencyForm, to: currencyTo, fees: request.data.fees });
          paidAmount += parseFloat(request.data.amount_from);
          getAmount += parseFloat(request.data.amount_to);
          fees += parseFloat(request.data.fees);

        } else {
          this.allRequests[index] = { select: false, canSelect: this.allRequests[index].canSelect, data: this.allRequests[index].data };
          this.translate.get(['INSTANT_TEXT', 'DELAYED_TEXT', 'MATCH_TEXT', 'INITIATE_TEXT']).subscribe(trans => {
            this.translate.get('SELECTION_MESSAGE_SWAP_TEXT', {
              from: currencyForm, to: currencyTo, direction: direction === 'user_id_to' ? `${trans.MATCH_TEXT}` : `${trans.INITIATE_TEXT}`,
              type: type === 1 ? `${trans.INSTANT_TEXT}` : `${trans.DELAYED_TEXT}`
            }).subscribe(trans => {
              this.ui.presentToast(trans);
            });
          });
        }
      }
    });

    this.amount = direction === 'user_id_from' ? parseFloat((paidAmount).toFixed(2)) : parseFloat((getAmount).toFixed(2));
    this.currency = direction === 'user_id_from' ? currencyForm : currencyTo;
    this.fees = fees > 0 ? parseFloat(Number(fees).toFixed(2)) : 0;

    this.selectRequests = requestData;
    this.getAmountText = direction === 'user_id_from' ? `${Number(getAmount).toFixed(2)} ${currencyTo}` : `${Number(paidAmount).toFixed(2)} ${currencyForm}`;
    this.paidAmountText = direction === 'user_id_from' ? `${Number(paidAmount).toFixed(2)} ${currencyForm}` : `${Number(getAmount).toFixed(2)} ${currencyTo}`;
  }


  // open the tontine contribution modal
  selectPaymentMode(pin: any) {

    const paymentData = {
      title: `${this.paidAmountText} => ${this.getAmountText}`,
      amount: Number(parseFloat(this.amount) + parseFloat(this.fees)).toFixed(2),
      fees: this.fees,
      currency: this.currency,
      list_swap_request_id: this.selectRequests,
      pin: pin
    };
    this.openContribute(paymentData);

  }

  // Open the modal
  openContribute(param: any) {
    this.swapService.setCurrentSwapData(param);
    this.modatCtrl
      .create({
        component: PaidModalComponent,
        componentProps: {
          exchange: param.title,
          amount: param.amount,
          data: param
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(
          (ans) => {
            this.loading = true;
            this.allRequests = [];
            this.getAllPendingRequest();
          }
        );
      });
  }

  // show the pin confirmation dilaog
  confirmPin() {
    const userPin = this.userService.getUserSecret();
    this.selectPaymentMode(userPin.password);
  }

}
