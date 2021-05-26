import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PopoverController, ModalController, IonInfiniteScroll } from '@ionic/angular';
import { SwapMenuComponent } from './swap-menu/swap-menu.component';
import { SendSwapRequestComponent } from './send-swap-request/send-swap-request.component';
import { SwapService } from './services/swap.service';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapComponent } from './swap/swap.component';
import { ContributionService } from '../my-tontines/services/contribution.service';
import { CurrencyService } from 'src/app/shared/service/currency.service';
import { TranslateService } from '@ngx-translate/core';
import { SwapMenuOptionComponent } from './swap-menu-option/swap-menu-option.component';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { SwapGlobalDataService } from './services/swap-global-data.service';
import { EventService } from 'src/app/shared/service/events.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UserService } from '../user/service/user.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-pesuswap',
  templateUrl: './pesuswap.page.html',
  styleUrls: ['./pesuswap.page.scss'],
})
export class PesuswapPage implements OnInit {

  swapRequestForm: FormGroup;
  currencies: any[] = [];
  userCurrencies: any;
  systemCurrencies: any;
  swapRates: any;
  allRequests: any;
  requests: any;
  currentBalance: any;
  activeRequests: any;
  getAmountText: any;
  paidAmountText: any;
  selectRequests: any;
  currentUserData: any;
  loading: boolean;
  loadingWallet: boolean;
  type: any;
  nbItems: number;
  canUpdate: boolean;
  amount: any;
  filterRequests: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private fb: FormBuilder,
    private ui: UiService,
    private util: UtilService,
    private popoverController: PopoverController,
    private translate: TranslateService,
    private modatCtrl: ModalController,
    private zone: NgZone,
    private error: ErrorService,
    private swapService: SwapService,
    private swapData: SwapGlobalDataService,
    private currency: CurrencyService,
    private contribution: ContributionService,
    private event: EventService,
    private storage: StorageData,
    private constant: ConstantService,
    private swapError: SwapErrorService,
    private userService: UserService
  ) {
    this.userCurrencies = [];
    this.filterRequests = [];
    this.systemCurrencies = [];
    this.swapRates = [];
    this.allRequests = [];
    this.requests = [];
    this.currentBalance = [];
    this.activeRequests = [];
    this.selectRequests = [];
    this.loading = false;
    this.loadingWallet = true;
    this.nbItems = 10;
    this.type = 1;
    this.canUpdate = true;
    this.amount = 0;
    this.currentUserData = this.userService.getUserData();
    this.event.subscribe('update-request', () => {
      this.upadteSwapDashBoard(null, 'my');
    });
  }


  ngOnInit() {
    this.getSwapRate();
    this.getSystemCurrencies();
    this.upadteSwapDashBoard(null, 'all');
  }

  // Form getters
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


  // Init the swap request form
  initSwapRequestForm(type: string) {
    this.swapRequestForm = this.fb.group({
      currency_from: ['', Validators.required],
      currency_to: ['', Validators.required],
      amount_from: [0, Validators.required],
      amount_to: [0, Validators.required],
      exchange_rate: [''],
      fees: [''],
      type_swap_id: [1],
      request: [1],
      allRequest: [type === 'all' ? true : false]
    });
  }

  // Init the request with data
  initSwapRequestFormWithData(data: any) {
    this.swapRequestForm.get('currency_from').setValue(data.currency_from);
    this.canUpdate = false;
    this.swapRequestForm.get('currency_to').setValue(data.currency_to);
    this.canUpdate = true;
    this.swapRequestForm.get('amount_from').setValue(data.amount_from);
    this.swapRequestForm.get('exchange_rate').setValue(data.exchange_rate);
    this.swapRequestForm.get('fees').setValue(data.fees);
    this.swapRequestForm.get('type_swap_id').setValue(data.type_swap_id);
    this.swapRequestForm.get('request').setValue(1);
    this.swapRequestForm.get('allRequest').setValue(true);
  }

  // check max swap amount
  checkMaxSwapAmount() {
    let amount = 0;
    if (this.currentBalance && this.currentBalance.length > 0) {
      const currencyData = this.currentBalance.filter(data => { return data.device_name === this.swapRequestForm.value.currency_from });
      if (currencyData && currencyData.length > 0) {
        amount = (parseFloat(currencyData[0].solde_device) - (parseFloat(this.swapRequestForm.value.amount_from) + parseFloat(this.swapRequestForm.value.fees)));
        amount = amount >= 0 ? (parseFloat(currencyData[0].solde_device) - parseFloat(this.swapRequestForm.value.fees)) : parseFloat(currencyData[0].solde_device);
      }
    }
    return Number(amount).toFixed(2) + ' ' + this.swapRequestForm.value.currency_from;
  }

  // can send swap request
  canSendRequest() {
    return this.swapRequestForm.value.request === 1 
    && this.swapRequestForm.valid && !this.loading 
    && (this.swapRequestForm.value.amount_from > 0 && this.swapRequestForm.value.amount_to > 0 ) 
    && (this.swapRequestForm.value.currency_from !== this.swapRequestForm.value.currency_to);
  }

  // check if swap is completed
  isSwapCompleted(request: any) {
    return request && request.data && request.data.infos_status_request 
    && request.data.infos_status_request.description && request.data.infos_status_request.description ==='completed' && !this.swapRequestForm.value.allRequest;
  }

  // can show swap menu
  canShowMenu(request: any) {
    return !this.swapRequestForm.value.allRequest
    &&(request &&  request.data.user_id_from === this.currentUserData.id 
      &&(this.canDeleteSwap(request.data) || this.canEditSwap(request.data)) || this.canArchiveSwap(request.data));
  }

  // can show the expired time
  canShowExpiredTime(request: any) {
    return request && request.data && request.data.infos_status_request&& request.data.infos_status_request.description 
    && request.data.infos_status_request.description !=='completed'
  }

  // can show the currency error message
  canShowCurrencyErrorMsg() {
    return (this.currencyHave.dirty || this.currencyWant.dirty) 
    && (this.swapRequestForm.value.currency_from === this.swapRequestForm.value.currency_to) 
    && (this.swapRequestForm.value.currency_from !== '' && this.swapRequestForm.value.currency_to !== '');
  }

  // get the expired time
  expiredTime(request: any) {
    return this.constant.expiredTime(request);
  }

  // can delete swap 
  canDeleteSwap(request: any) {
    return this.swapData.canDeleteSwap(request);
  }

  // can delete swap 
  canEditSwap(request: any) {
    return this.swapData.canEditSwap(request);
  }

  // can archive the swap
  canArchiveSwap(request: any) {
    return this.swapData.canArchiveSwap(request);
  }

  // Update the swap DashBoard
  upadteSwapDashBoard(event?: any, typeRequest?: string) {
    this.initSwapRequestForm(typeRequest);
    this.getCurrentBalance(event, typeRequest);
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.upadteSwapDashBoard(event, 'all');
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.requests.length < this.activeRequests.length) {
          this.requests.push(this.activeRequests[this.requests.length]);
        } else if (this.requests.length === this.activeRequests.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Go to pending request
  async gotoPendingRequest(ev: any) {
    const popover = await this.popoverController.create({
      component: SwapMenuOptionComponent,
      event: ev
    });
    return await popover.present();
  }

  async openContextMenu(ev: any, request: any) {
    const popover = await this.popoverController.create({
      component: SwapMenuComponent,
      componentProps: {
        data: request,
        wallet: this.currentBalance
      },
      event: ev
    });
    return await popover.present();
  }

  // Open the swap request modal
  openSendSwapRequest() {
    this.modatCtrl
      .create({
        component: SendSwapRequestComponent,
        componentProps: {
          data: this.swapRequestForm.value,
          amountSwap: Number(parseFloat(this.swapRequestForm.value.amount_from) + parseFloat(this.swapRequestForm.value.fees)).toFixed(2),
          maxAmount: this.checkMaxSwapAmount(),
          wallet: this.currentBalance
        }
      })
      .then(
        modalEl => {
          modalEl.present();
          modalEl.onDidDismiss().then(ans => {
            if (ans && ans.data === "make-request") {
              this.upadteSwapDashBoard(null, 'my');
            } else if (ans.data && ans.data.message === 'retry-request') {
              this.canUpdate = false;
              this.initSwapRequestFormWithData(ans.data);
              this.getCurrentBalance(null, 'all');
            }
          });
        });
  }

  // Open the swap matching modal
  openSwap() {
    this.modatCtrl
      .create({
        component: SwapComponent,
        componentProps: {
          data: {
            request: this.selectRequests,
            amountFrom: this.getAmountText,
            amountSwap: Number(parseFloat(this.amount) + parseFloat(this.swapRequestForm.value.fees)).toFixed(2),
            amountTo: this.paidAmountText,
            type: this.type,
            exchange_rate: this.swapRequestForm.value.exchange_rate,
            fees: this.swapRequestForm.value.fees
          },
          wallet: this.currentBalance
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(ans => {
          if (ans && ans.data === "match-request") {
            this.upadteSwapDashBoard(null, 'all');
          }
        });
      });
  }

  getRequestColor(status: any) {

      let color = 'light';
    if (status && status.description) {
      switch(status.description) {

        case 'initiated':
          color = 'primary';
          break;

        case 'pending':
          color = 'warning';
          break;  

        case 'expired':
          color = 'danger';
          break;
              
        case 'completed':
          color = 'success';
          break;  

        default:
          break;     
      }
    }
    return color;
  }

  // Get the percentage of succes
  getSuccessPercentage(percent: any) {
    return this.swapData.getSuccessPercentage(percent);
  }

  // get percentage of loss
  getLossPercentage(percent) {
    return this.swapData.getLossPercentage(percent);
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

  // Get the sytem currencies
  getSystemCurrencies() {
    this.swapService.getAllSystemCurrenies()
      .subscribe((reponse: any) => {
        if (reponse && reponse.currencies_system) {
          this.zone.run(() => {
            this.systemCurrencies = reponse.currencies_system;
            this.userCurrencies = reponse.currencies_system;
          });
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

  // Get the users currencies
  getUserCurrencies(event?: any, typeRequest?: string) {
    this.swapService.getAllWalletCurrenies()
      .subscribe((reponse: any) => {
        if (reponse && reponse.currencies_user) {
          this.zone.run(() => {
            this.userCurrencies = reponse.currencies_user;
          });
        }
        this.loadingWallet = false;
        // Get the user request without filter 
      }, error => {
        this.loadingWallet = false;
        if (event) {
          event.target.complete();
        }
        if (error && error.error && error.error.message === "error") {

          if (error && error.error && error.error.user_not_exist) {
            this.loadingWallet = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getUserCurrencies(event, typeRequest);
              } else {
                this.loadingWallet = false;
              }
            });
          } else {
            this.swapError.manageWalletError(error);
          }
        }
      });
  }

  // get the current balamce of the user
  getCurrentBalance(event?: any, typeRequest?: string) {
    this.contribution.getUserWallet().subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.storage.set('current-balance', reponse.PorteMonnaieUser);
        this.zone.run(() => {
          this.currentBalance = reponse.PorteMonnaieUser;
        });
        this.loadingWallet = false;
        if (typeRequest === 'all') {
          this.getAllRequestWithoutFilter(event);
        } else {
          this.getAllUserRequest(event);
        }
      }
    }, error => {
      this.loadingWallet = false;
      if (event) {
        event.target.complete();
      }
      if (error && error.error && error.error.user_not_found) {
        this.loadingWallet = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getCurrentBalance(event, typeRequest);
          } else {
            this.loadingWallet = false;
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

  // select request filter
  filterRequest() {

    console.log(this.swapRequestForm.value.allRequest);
    if (this.swapRequestForm.value.allRequest) {
      this.requests = [];
      this.getAllRequestWithoutFilter();
    } else {
      this.requests = [];
      this.getAllUserRequest();
    }
  }

  // format user swap request response
  formatUserSwapResponse(requests: any) {

    let requestInitiated = [];
    let requestPending = [];
    let requestExpired = [];
    let requestCompleted = [];
    let Allrequest = [];
 

    // List of  initiated requests
    requestInitiated = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'initiated') });
    requestInitiated = requestInitiated && requestInitiated.length > 0 ? this.util.orderByKeyUp(requestInitiated, 'updated_at') : [];
    requestInitiated = requestInitiated && requestInitiated.length > 0 ? this.util.orderByKeyUpTime(requestInitiated, 'temps_restant') : [];

    // List of  pending requests
    requestPending = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'pending') });
    requestPending = requestPending && requestPending.length > 0 ? this.util.orderByKeyUp(requestPending, 'updated_at') : [];
    requestPending = requestPending && requestPending.length > 0 ? this.util.orderByKeyUpTime(requestPending, 'temps_restant') : [];

    // List of  expired requests
    requestExpired = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'expired') });
    requestExpired = requestExpired && requestExpired.length > 0 ? this.util.orderByKeyUp(requestExpired, 'updated_at') : [];

    // List of  complete requests
    requestCompleted = requests.filter(data => { return (data.infos_status_request && data.infos_status_request.description && data.infos_status_request.description === 'completed') });
    requestCompleted = requestCompleted && requestCompleted.length > 0 ? this.util.orderByKeyUp(requestCompleted, 'updated_at') : [];

    // Concat all request
    Allrequest = Allrequest.concat(requestInitiated);
    Allrequest = Allrequest.concat(requestPending);
    Allrequest = Allrequest.concat(requestExpired);
    Allrequest = Allrequest.concat(requestCompleted);

    const formatData = [];
    if (Allrequest && Allrequest.length > 0) {
      Allrequest.forEach(request => {
        formatData.push({ select: false, data: request });
      });
    }

    this.activeRequests = formatData;


    if (this.activeRequests.length > this.nbItems) {
      this.requests = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.requests.push(this.activeRequests[this.requests.length]);
      }
    } else {
      this.requests = this.activeRequests;
    }
  }

  // format all swap requests data
  formatAllSwapRequestData(requests: any) {

    console.log(requests);
    if (requests && requests.length > 0) {
      this.allRequests = this.swapData.filterALLRequestData(requests);
      this.activeRequests =  this.allRequests;
      this.filterRequests = this.activeRequests;
      if (this.activeRequests.length > this.nbItems) {
        this.requests = [];
        for (let i = 0; i < this.nbItems; i++) {
          this.requests.push(this.activeRequests[this.requests.length]);
        }
      } else {
        this.requests = this.activeRequests;
      }
    }
  }

  // format the match request
  formatMatchRequests(requests: any) {
    if (requests && requests.length > 0) {
      this.allRequests = this.swapData.filterALLRequestData(requests);
      this.activeRequests = this.allRequests;
      this.filterRequests = this.activeRequests;
      if (this.activeRequests.length > this.nbItems) {
        this.requests = [];
        for (let i = 0; i < this.nbItems; i++) {
          this.requests.push(this.activeRequests[this.requests.length]);
        }
      } else if (this.activeRequests.length === 0) {
        this.getAllRequestWithFilter(this.swapRequestForm.value.currency_from, this.swapRequestForm.value.currency_to);
      } else {
        this.requests = this.activeRequests;
      }
    }
  }

  //  Get all the user request
  getAllUserRequest(event?: any) {
    this.selectRequests = [];
    this.activeRequests = [];
    this.requests = [];
    this.filterRequests = [];

    this.loading = true;
    this.swapService.getAllUserSwapRequestV2()
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.requests) {
          this.formatUserSwapResponse(reponse.requests);
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
        this.loading = false;
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.getAllUserRequest(event);
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

  //  Get all  request
  getAllRequestWithFilter(currencyFrom: string, currencyTo: string) {
    const data = {
      currency_from: currencyFrom,
      currency_to: currencyTo
    };
    this.selectRequests = [];
    this.activeRequests = [];
    this.requests = [];
    this.filterRequests = [];
    if (currencyFrom && currencyTo) {
      this.loading = true;
      this.swapService.getReverseRequestV2(data)
        .subscribe((reponse: any) => {
          this.loading = false;
          if (reponse && reponse.requests) {
            this.formatAllSwapRequestData(reponse.requests);
          }
        }, error => {
          this.loading = false;
          if (error && error.error && error.error.message === "error") {
            if (error && error.error && error.error.user_not_found) {
              this.loading = true;
              this.error.renewSession().then((data: any) => {
                if (data && data.result === "OK") {
                  this.getAllRequestWithFilter(currencyFrom, currencyTo);
                } else {
                  this.loading = false;
                }
              });
            }
          } else {
            this.swapError.manageWalletError(error);
          }
        });

    } else {
      this.getAllRequestWithoutFilter();
    }
  }

  //  Get all  request
  getAllRequestWithoutFilter(event?: any) {
    this.loading = true;
    this.activeRequests = [];
    this.selectRequests = [];
    this.requests = [];
    this.filterRequests = [];
    this.swapService.getRequestWithoutFilterV2()
      .subscribe((reponse: any) => {
        if (reponse && reponse.requests) {
          this.formatAllSwapRequestData(reponse.requests);
        }
        this.loading = false;

        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
      }, error => {
        if (event) {
          event.target.complete();
        }
        this.loading = false;
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.getAllRequestWithoutFilter(event);
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

  // Get the exchange that match user request
  getMatchRequest(data: any) {
    this.selectRequests = [];
    this.activeRequests = [];
    this.requests = [];
    this.filterRequests = [];
    if (data.exchange_rate !== '' && data.fees !== '' && data.currency_from && data.currency_to) {
      this.loading = true;
      this.swapService.getRequestMatchingCurrenciesV2(data).subscribe((reponse: any) => {
        if (reponse && reponse.requests) {
          this.formatMatchRequests(reponse.requests);
        }
        this.loading = false;
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getMatchRequest(data);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.swapError.manageWalletError(error);
          }
        }
      });
    }
  }

  // check selection
  checkSelection(index: number) {
    const requestData = [];
    this.getAmountText = '';
    this.paidAmountText = '';
    let getAmount = 0;
    let paidAmount = 0;
    let currencyForm = '';
    let currencyTo = '';
    let type = 0;
    let position = 0;
    let rate = 0;
    let fees = 0;

    // find request which hqs been selected
    this.allRequests.forEach(request => {
      if (position !== index && request.select) {
        currencyForm = request.data.infos_currency_from.name;
        currencyTo = request.data.infos_currency_to.name;
        type = request.data.type_swap_id;
      }
      position++;
    });

    this.swapRequestForm.get('request').setValue(0);
    if (this.requests && this.requests.length > 0) {
      this.requests.forEach(request => {
        if (request.select) {
          if (currencyForm === '' && currencyTo === '' && type === 0) {
            currencyForm = request.data.infos_currency_from.name;
            currencyTo = request.data.infos_currency_to.name;
            type = request.data.type_swap_id;
          }

          if ((currencyForm === request.data.infos_currency_from.name) && (currencyTo === request.data.infos_currency_to.name) && (type === request.data.type_swap_id)) {
            requestData.push({
              swap_request_id: request.data.swap_request_id,
              from: currencyForm,
              to: currencyTo,
              amount: request.data.amount_to,
              fees: 0
            });
            paidAmount += request.data.amount_from;
            getAmount += request.data.amount_to;
            paidAmount = parseFloat(Number(paidAmount).toFixed(2));
            getAmount = parseFloat(Number(getAmount).toFixed(2));

            // Get the max rate
            rate += parseFloat(request.data.exchange_rate);

          } else {
            this.requests[index] = { select: false, canSelect: this.requests[index].canSelect, data: this.requests[index].data };
            this.translate.get(['INSTANT_TEXT', 'DELAYED_TEXT']).subscribe(trans => {
              this.translate.get('SELECTION_MESSAGE_TEXT', { from: currencyForm, to: currencyTo, type: type === 1 ? `${trans.INSTANT_TEXT}` : `${trans.DELAYED_TEXT}` }).subscribe(trans => {
                this.ui.presentToast(trans);
              });
            });
          }
        }
      });

      this.type = type;
      this.paidAmountText = `${paidAmount} ${currencyForm}`;
      this.getAmountText = `${getAmount} ${currencyTo}`;
      this.amount = getAmount;

      // Get average rate off all requests
      this.swapRequestForm.get('exchange_rate').setValue(requestData && requestData.length === 1 ? rate : 0);

      // set the matching fees of each select request
      this.swapData.matchingExchageFees(this.swapRates, currencyTo, currencyForm, requestData).then(data => {
        this.selectRequests = data;
        this.selectRequests.forEach(request => {
          fees += parseFloat(request.fees);
        });
        this.swapRequestForm.get('fees').setValue(fees);
      });
    }
  }

  // filter the current list of swap request
  filterRequestData(currencyFrom: string, currencyTo: string) {
    let requests = [];
    requests = this.filterRequests;
    if (currencyFrom) {
      requests = requests.filter(request => { return request.data.infos_currency_to.name === currencyFrom });
    }
    if (currencyTo) {
      requests = requests.filter(request => { return request.data.infos_currency_from.name === currencyTo });
    }
    if (currencyFrom === '' && currencyTo === '') {
      this.activeRequests = this.filterRequests;
    }
    this.activeRequests = requests;
    if (this.activeRequests.length > this.nbItems) {
      this.requests = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.requests.push(this.activeRequests[this.requests.length]);
      }
    } else {
      this.requests = this.activeRequests;
    }
  }

  // Get exchange fees
  getExchangeFees(currencyFrom: string, currencyTo: string, amount: number) {
    if (currencyFrom !== '' && currencyTo !== '' && amount > 0) {
      this.swapData.getExchangeFees(this.swapRates, currencyFrom, currencyTo, amount).then(exchangeFees => {
        this.swapRequestForm.get('fees').setValue(exchangeFees);
      });
    } else {
      this.swapRequestForm.get('fees').setValue(0);
    }
  }

  // Get the exchange rate
  getExchangeRate(currencyFrom: string, currencyTo: string) {
    if (currencyFrom !== '' && currencyTo !== '' && currencyFrom !== currencyTo) {
      this.currency.conversionRateValue(currencyFrom, currencyTo).then(rate => {
        this.swapRequestForm.get('exchange_rate').setValue(rate);
      });
    } else {
      this.swapRequestForm.get('exchange_rate').setValue(0);
    }
  }

  // Update the amount  destination
  updateAmountDestination(currencyFrom: string, currencyTo: string, direction: string) {
    this.swapRequestForm.get('request').setValue(1);
    this.filterRequestData(currencyFrom, currencyTo);
    const amount = direction === 'from' ? this.swapRequestForm.value.amount_from : this.swapRequestForm.value.amount_to;
    if (currencyFrom && currencyTo && amount >= 0 && this.canUpdate) {
      this.getExchangeRate(currencyFrom, currencyTo);
      const param1 = direction === 'from' ? currencyFrom : currencyTo
      const param2 = direction === 'from' ? currencyTo : currencyFrom
      this.swapData.getConversionValue(param1, param2, amount).then(data => {
        this.canUpdate = false; // state value 
        direction === 'from' ? this.swapRequestForm.get('amount_to').setValue(data) : this.swapRequestForm.get('amount_from').setValue(data);
        this.getExchangeFees(currencyFrom, currencyTo, this.swapRequestForm.value.amount_from);
        // Get the exchange that match user request
        this.getMatchRequest(this.swapRequestForm.value);
      });
    } else {
      this.canUpdate = true;
    }
  }
}
