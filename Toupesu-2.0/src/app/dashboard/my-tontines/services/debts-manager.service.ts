import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { UserService } from '../../user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DebtsManagerService {

  token: string;
  constructor(
    private userService: UserService,
    private api: ApiService,
    private event: EventService,
    private localStorage: LocalStorageService
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  // send the debts Data
  sendDebtsData(data) {
    this.localStorage.setItem('debts-data', data);
  }

  // Get the debts Data
  getDebtsData() {
    return this.localStorage.getItem('debts-data');
  }

  removeDebtsData() {
    this.localStorage.removeItem('debts-data');
  }

  // Get the list of bills to approve by admin
  getBillsToApproveByAdmin(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/receipt/to/approve/${this.token}`, data);
  }

  // get member bill rejected by admin
  getMembreBillRejected(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/refuse/receipt/for/a/member/${this.token}`, data);
  }

  // Delete a proof rejected by a user
  deleteProofRejetected(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/delete/proof/for/a/member/${this.token}`, data);
  }

  // get member bill in approval by admin
  getMembreBillInapproval(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/receipt/withStatus/pending/forAMember/${this.token}`, data);
  }

  // get member bill in approval by admin
  getMembreBillComplete(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/complete/receipt/forA/member/${this.token}`, data);
  }

  // Get bill infromations with payment detail done by admin
  getBillPaymentAdmin(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/infos/receipt/with/payment/for/admin/${this.token}`, data);
  }

  // Get a member bill in progress with status "created"
  getMemberBillInProgress(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/receipt/in/progress/${this.token}`, data);
  }

  // Get bill information with payment done
  getBillInformationWithPayment(data: any) {
    return this.api.post(`contribution/v1/get/infos/receipt/with/payment/${this.token}`, data);
  }

  // Validate a bill by admin
  validateBill(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/validate/receipt/by/admin/${this.token}`, data);
  }

  // Cancel a bill by admin
  cancelBill(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/refuse/receipt/by/admin/${this.token}`, data);
  }

  // Get bill ready for validation 
  getBillReadyForValidation(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/complete/receipt/${this.token}`, data);
  }

  // Get bill that refusal is completed
  getBillRefusalComplete(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/refuse/receipt/${this.token}`, data);
  }

  // Save a member bill
  saveMemberBill(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/save/receipt/${this.token}`, data);
  }

  // Delete a proof of payment by admin
  deleteProofPayment(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/get/delete/proof/${this.token}`, data);
  }

  /* Wallet payment */

  // Paid member contribution/penalties/ bill with Traditionnal Banking
  paidMemberBillTradiBanking(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/pay/receipt/with/payment/mode/traditional/${this.token}`, data);
  }

  // Paid member contribution/penalties/ bill with Online wallet
  paidMemberBillOnlineWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/pay/receipt/with/wallet/${this.token}`, data);
  }


  /* MTN / OZOW / ORANGE / PAYPAL  payment */

  // Paid member contribution/penalties/ bill with Online payment (MTN/OZOW/PAYPAL/ORANGE) without conversion
  paidMemberBillOnlineWithoutConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/pay/receipt/with/payment/mode/online/NotConvertCurrency/${this.token}`, data);
  }

  // Paid member contribution/penalties/ bill with Online payment (MTN/OZOW/PAYPAL/ORANGE) with conversion
  paidMemberBillOnlineWithConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/pay/receipt/with/payment/mode/online/WithConvertCurrency/${this.token}`, data);
  }


  /* withdrawal management */

  // Validate a withdrawal by an admin with traditional banking
  validateWithdrawalTBank(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/validate/bouffe/withTraditional/Banking/${this.token}`, data);
  }

  // Validate a withdrawal by an admin with online banking
  validateWithdrawalOBank(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/validate/bouffe/withOnline/Wallet/${this.token}`, data);
  }

  // cancel a withdrawal by admin with the reason
  cancelWithdrawal(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/refuse/bouffe/${this.token}`, data);
  }

  // Get the list of accepted withdrawal for a tontine
  getAcceptedWithdrawalOfTontine(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/list/approval/bouffe/to/a/tontine/${this.token}`, data);
  }

  // Get the list of accepted withdrawal for a seance
  getAcceptedWithdrawalOfSeance(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/list/approval/bouffe/to/a/seance/${this.token}`, data);
  }

  // Get the list of cancel withdrawal for a tontine
  getListWithdrawalCancelTontine(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/list/refusal/bouffe/to/a/tontine/${this.token}`, data);
  }

  // Get the list of cancel withdrawal for a seance
  getListWithdrawalCancelSeance(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/list/refusal/bouffe/to/a/seance/${this.token}`, data);
  }

  // Get all the proof of withdrawal
  getWithdrawalProof(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/all/proof/OfABouffe/${this.token}`, data);
  }

  // Cancel a withdrawal cancel
  reCancelWithdrawal(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/cancel/a/reject/bouffe/${this.token}`, data);
  }

  /**  Get list of proof of a member*/
  getListOfProofMember(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`statistique/v1/get/proof/of/a/member/${this.token}`, data);
  }

  /* Confirm that the user receive the money*/
  confirmMemberPayment(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`statistique/v1/confirm/receipt/by/aMember/${this.token}`, data);
  }

  // Get the list of pending beneficiaries not initiate by admin  for a seance 
  getPendingWithdrawal(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/getListBouffage/withStatus/pending/${this.token}`, data);
  }

  // Get the list of pending beneficiaries not initiate by admin  for a seance 
  getPendingInitiateWithdrawal(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/getListInitiate/validation/bouffage/withStatus/pending/${this.token}`, data);
  }

  /* Get the list of pending beneficiaries not initiate by admin  for a tontine */
  getPendingBeneficiariesNotInitiate(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/getListBouffage/tontine/withStatus/pending/${this.token}`, data);
  }

  /* Get the list of pending beneficiaries  initiate by admin  for a tontine */
  getPendingBeneficiariesInitiate(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/getListInitiate/validation/bouffage/tontine/withStatus/pending/${this.token}`, data);
  }


  /* Initiate the payment */
  initiatePayment(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/initiate/bouffage/payment/toComplete/after/${this.token}`, data);
  }

  /* Get the detail of payment initiation */
  getPaymentInitiateInformations(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/infos/fund/repartition/${this.token}`, data);
  }

  /* Validate the initiate payment by the admin */
  validateInitiatePayment(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/validate/initiate/bouffage/byAdmin/${this.token}`, data);
  }

  /* Make payment with traditionnal banking */
  makePaymentTradiBank(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/pay/bouffe/withTraditional/Banking/${this.token}`, data);
  }

  /* make the payment with Tontine wallet*/
  makePaymentTontineWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/pay/bouffe/withTontine/Wallet/${this.token}`, data);
  }

  /*Make paiement with operator (MTN, ORANGE, OZOW)*/
  makePaymentOperatorWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/pay/bouffe/withOnline/Wallet/${this.token}`, data);
  }

  /* List of Confirm the payment of jackpot for a tontine*/
  confirmJackpotPaiementTontine(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/list/approval/bouffe/to/a/tontine/${this.token}`, data);
  }

  /* List of  Confirm a jackpot payment for a seance */
  confirmJackpotPaiementSeance(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/get/list/approval/bouffe/to/a/seance/${this.token}`, data);
  }

  /* Confirm the payment by the user */
  confirmPaymentByUser(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`bouffe/v1/confirm/receipt/${this.token}`, data);
  }

  /* Pay the due with cash */
  PayDueWithCash(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`contribution/v1/pay/receipt/with/payment/mode/cash/${this.token}`, data);
  }

}
