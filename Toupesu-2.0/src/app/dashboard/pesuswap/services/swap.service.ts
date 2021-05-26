
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { EventService } from 'src/app/shared/service/events.service';


@Injectable({
  providedIn: 'root'
})
export class SwapService {

  token: string;

  constructor(
    private api: ApiService,
    public ui: UiService,
    private userService: UserService,
    private event: EventService,
    private localStorage: LocalStorageService,
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  // Get the current swap data
  getCurrentSwapData() {
    const data = this.localStorage.getItem('swap-data');
    if (data) { return data } else return [];
  }

  // Set the current swap data
  setCurrentSwapData(swapData: any) {
    this.localStorage.setItem('swap-data', swapData);
  }

  // Get the swap rate of Toupesu
  getSwapRate() {
    return this.api.get('pesu/swap/get/toupesu/rate');
  }

  // Get all the currencies available on user wallet  
  getAllWalletCurrenies() {
    this.token = this.userService.getUserToken();
    return this.api.get(`pesu/swap/get/currencies/user/${this.token}`);
  }

  // Get all the currencies available on the system
  getAllSystemCurrenies() {
    return this.api.get(`pesu/swap/get/currencies/system`);
  }

  // Get all type of swap
  getAllSwapType() {
    return this.api.get('pesu/swap/get/all/type/swap');
  }

  // make a swap request
  makeSwapRequest(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/make/request/${this.token}`, data);
  }

  // Get all users swap request
  getAllUserSwapRequest() {
    this.token = this.userService.getUserToken();
    return this.api.get(`pesu/swap/get/own/requests/user/${this.token}`);
  }

  getAllUserSwapRequestV2() {
    this.token = this.userService.getUserToken();
    return this.api.get(`pesu/swap/v2/get/own/requests/user/${this.token}`);
  }

  // Get all reverse request 
  getReverseRequest(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/get/inverse/requests/${this.token}`, data);
  }

  getReverseRequestV2(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/v2/get/inverse/requests/${this.token}`, data);
  }

  // Get all request without filter 
  getRequestWithoutFilter() {
    this.token = this.userService.getUserToken();
    return this.api.get(`pesu/swap/get/all/requests/without/filter/currency/${this.token}`);
  }

  getRequestWithoutFilterV2() {
    this.token = this.userService.getUserToken();
    return this.api.get(`pesu/swap/v2/get/all/requests/without/filter/currency/${this.token}`);
  }

  // Disable edition
  disableSwapEdition(swapRequestId: any, statusEdit: any) {
    this.token = this.userService.getUserToken();
    return this.api.get(`pesu/swap/update/field/status/edit/swap/request/${swapRequestId}/${statusEdit}/${this.token}`);
  }

  // update swap request
  updateSwapRequest(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/update/request/${this.token}`, data);
  }

  // Delete swap request
  deleteSwapRequest(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/delete/request/${this.token}`, data);
  }

  // matches swap request
  mathSwapRequest(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/match/request/${this.token}`, data);
  }

  // Get the swap in pending payment
  getSwapPendingRequest() {
    this.token = this.userService.getUserToken();
    return this.api.get(`pesu/swap/get/request/pending/waiting/to/pay/${this.token}`);
  }

  // Get the request that match the currencies
  getRequestMatchingCurrencies(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/get/requests/inverses/with/amount/combinaisons/${this.token}`, data);
  }

  getRequestMatchingCurrenciesV2(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/v2/get/requests/inverses/with/amount/combinaisons/${this.token}`, data);
  }

  // Paid pending swap request with wallet
  paidPendingSwapRequest(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/pay/amount/swap/with/wallet/${this.token}`, data);
  }

  /* Make swap payment with operator without conversion */
  paySwapRequestWithOperatorWithoutConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/pay/amount/swap/without/wallet/withoutConversion/${this.token}`, data);
  }

  /* Make swap payment with operator with conversion */
  paySwapRequestWithOperatorWithConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/pay/amount/swap/without/wallet/withConversion/${this.token}`, data);
  }

  /* Make swap notifications with toke */
  getSwapNotificationsWithToken() {
    this.token = this.userService.getUserToken();
    return this.api.get(`notification/v2/pesuSwap/getAllNotificationWithToken/${this.token}`);
  }

  /* Make swap notifications with toke */
  getSwapNotificationsWithId(userId: any) {
    return this.api.get(`notification/v2/pesuSwap/getAllNotificationWithUserId/${userId}`);
  }

  /* Archive swap data */
  archiveSwapData(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`pesu/swap/archived/swap/user/${this.token}`, data);
  }

}
