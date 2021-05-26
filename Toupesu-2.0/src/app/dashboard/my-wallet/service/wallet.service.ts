import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UserService } from '../../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private subject = new Subject<any>();
  token: string;

  constructor(
    public api: ApiService,
    private userService: UserService,
    private event: EventService
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  sendMessageWalletRecharge(message: any) {
    this.subject.next({ recharge: message });
  }

  getMessageWalletRecharge(): Observable<any> {
    return this.subject.asObservable();
  }

  sendMessageAddAccount(message: any) {
    this.subject.next({ account: message });
  }

  getMessageAddAccount(): Observable<any> {
    return this.subject.asObservable();
  }

  // Permit to the user to recharge his wallet without conversion
  rechargeWallet(wallet: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/charger/portemonnaie/' + this.token, wallet);
  }

  // Permit to the user to recharge his wallet after conversion
  rechargeWalletWithConversion(wallet: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/charger/portemonnaie/afterConvertDevice/' + this.token, wallet);
  }

  // Check the payment status throught Operator (MTN, orange, paypal, ozow )
  getStatusPaymentOperator(payToken: string, operator: any) {
    return this.api.get(`get/status/paiement/${operator}/${payToken}`);
  }


  // Check the payment status throught Operator (MTN, orange, paypal, ozow )
  getStatusPaymentEventOperator(payToken: string, operator: any) {
    return this.api.get(`get/status/paiementEvent/${operator}/${payToken}`);
  }


  /*======= Begin  paiement de Orange  ======*/

  // Check the payment status throught Orange
  getStatusOrangePayment(payToken: string) {
    return this.api.get(`get/status/paiement/orange/${payToken}`);
  }

  // Check the payment status throught Orange
  getStatusOrangePaymentEvent(payToken: string) {
    return this.api.get(`get/status/paiementEvent/orange/${payToken}`);
  }

    // Get all  Orange Transaction inittiate on the system
    getOrangeTransactionInitiate(payToken: string) {
      return this.api.get(`get/status/paiement/orange/${payToken}`);
    }

  // Check the status paymnent throught SDK GAMES SERVER
  checkPaymentStatusViaOrange(wallet: any) {
    return this.api.post('paygateway/orange/checkTransation', wallet);
  }

  /*======= End paiement de Orange  ======*/



  /*======= Begin paiement de Payapal  ======*/

  // Check the payment status throught Paypal
  getStatusPaypalPayment(payToken: string) {
    return this.api.get(`get/status/paiement/paypal/${payToken}`);
  }

  // Check the payment status throught Paypal
  getStatusPaypalPaymentEvent(payToken: string) {
    return this.api.get(`get/status/paiementEvent/paypal/${payToken}`);
  }

  // Get all  paypal Transaction inittiate on the system
   getPaypalTransactionInitiate(payToken: string) {
      return this.api.get(`get/status/paiement/paypal/${payToken}`);
  }

  // Check the status paymnent for Paypal throught SDK GAMES SERVER
  checkPaymentStatusViaPaypal(wallet: any) {
    return this.api.post('paygateway/paypal/checkTransation', wallet);
  }

  /*======= End Mode de paiement de Payapal  ======*/



  /*======= Begin Mode de paiement de Ozow  ======*/


  // Check the payment status throught Ozow
  getStatusOzowPayment(payToken: string) {
    return this.api.get(`get/status/paiement/ozow/${payToken}`);
  }

  // Check the payment event status throught Ozow
  getStatusOzowPaymentEvent(payToken: string) {
    return this.api.get(`get/status/paiementEvent/ozow/${payToken}`);
  }

  // Get all  Ozow Transaction inittiate on the system
    getOzowTransactionInitiate(payToken: string) {
      return this.api.get(`get/status/paiement/Ozow/${payToken}`);
    }

  // Check the status paymnent for Ozow throught SDK GAMES SERVER
  checkPaymentStatusViaOzow(wallet: any) {
    return this.api.post('paygateway/ozow/checkTransation', wallet);
  }

  /*======= End Mode de paiement de Ozow   =======*/



  /*======= Begin Mode de paiement de MTN  ======*/


  // Check the payment status throught MTN
  getStatusMtnPayment(payToken: string) {
    return this.api.get(`get/status/paiement/MTN/${payToken}`);
  }

  // Check the payment event status throught MTN
  getStatusMtnPaymentEvent(payToken: string) {
    return this.api.get(`get/status/paiementEvent/MTN/${payToken}`);
  }

  getMtnTransactionInitiate(payToken: string) {
    return this.api.get(`get/pending/payment/MTN/${payToken}`);
  }

    // Check the status paymnent for mtn throught SDK GAMES SERVER
    checkPaymentStatusViaMtn(wallet: any) {
      return this.api.post('paygateway/mtn/checkTransation', wallet);
    }

  /*======= End Mode de paiement de MTN   =======*/




  /* ================== Withdrawal service ===================== */

  // save a bank profile
  saveBankProfile(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`cash/out/v1/bank/profil/save/` + this.token, data);
  }

  // save a bank profile
  updateBankProfile(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`cash/out/v1/bank/profil/update/` + this.token, data);
  }

  // save a bank profile
  DeleteBankProfile(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`cash/out/v1/bank/profil/delete/` + this.token, data);
  }

  // Get all bank
  getAllBank() {
    this.token = this.userService.getUserToken();
    return this.api.get(`cash/out/v1/get/bank/profil/` + this.token);
  }

  // Get all the detail of the bank
  getBankDetail(bankId: number) {
    return this.api.get(`cash/out/v1/get/infos/bank/` + bankId);
  }

  // Submit a request of bank
  submitRequest(bankInfos: number) {
    this.token = this.userService.getUserToken();
    return this.api.post(`cash/out/v1/request/save/` + this.token, bankInfos);
  }
}
