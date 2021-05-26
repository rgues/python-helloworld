import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';

@Injectable({
  providedIn: 'root'
})
export class WalletTontineService {

  token: string;

  constructor(
    private userService: UserService,
    private api: ApiService,
    private event: EventService
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

    // Add a nez cashier
    addCashier(tontine: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/tontine/${this.token}`, tontine);
    }

    // Get all types of cashiers
    getAllCashiers(tontineId: number) {
      return this.api.get(`tontine/wallet/v1/get/all/caisses/${tontineId}`);
    }

    // Get the tontine wallet
    getTontineWallet(tontine: any) {
      this.token = this.userService.getUserToken();
      if (this.token) {
        return this.api.post(`tontine/wallet/v1/see/wallet/${this.token}`, tontine);
      }
     
    }

    // Get all wallet transaction
    getWalletTransaction(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/get/all/transaction/${this.token}`, data);
    }

    // Get traditionnnal banking wallet transaction to validate
    getTradiBankingTransactionToValidate(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/get/pending/transaction/${this.token}`, data);
    }

    // get proof of wallet transactions
    getWalletTransactionsProofs(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/get/proof/of/a/transaction/${this.token}`, data);
    }

    // Permit to admin to validate a transaction
    validateTransByAdmin(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/validate/a/deposit/transaction/${this.token}`, data);
    }

    // Cancel a deposit by admin
    cancelTransByAdmin(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/rejected/a/deposit/transaction/${this.token}`, data);
    }

    // transfert money from cashier to cashier
    transfertFromCashierToCashier(data: any) {
      this.token = this.userService.getUserToken();
        return this.api.post(`tontine/wallet/v1/transfert/cash/source/to/destination/fund/${this.token}`, data);
    }

    // Make a deposit with traditionnal banking
    makeDepositWithTraditionnalBanking(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/save/deposit/withTraditionalBanking/${this.token}`, data);
    }

    /* Make deposit with ORANGE, MTN, PAYPAL, OZOW  with and without  conversion */
    makeDepositWithMobileMoneyWithoutConversion(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/save/deposit/withOnlineWallet/without/conversion/${this.token}`, data);
    }

    makeDepositWithMobileMoneyWithConversion(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/save/deposit/withOnlineWallet/with/conversion/${this.token}`, data);
    }

    /* Withdrawal route specially for this route put token on body */

    // Make a new withdrawal request 
    newWithdrawalRequest(data: any) {
      return this.api.post(`reqwithdrawalTontine/new`, data);
    }

    // Save tontine bank profile
    saveTontineBankProfile(data: any) {
      return this.api.post(`reqwithdrawalTontine/savetontinebankprofile`, data);
    }

    // update tontine bank profile 
    updateTontineBankProfile(data: any) {
      return this.api.post(`reqwithdrawalTontine/updatetontinebankprofile`, data);
    }

    // Delete the tontine bank profile
    deleteTontineBankProfile(data: any) {
      return this.api.post(`reqwithdrawalTontine/deletetontinebankprofile`, data);
    }

    // Get all the bank profile
    getAllBankProfile(data: any) {
      return this.api.post(`reqwithdrawalTontine/getallbankprofiles`, data);
    }

    // get the detail informations of bank profile 
    getInfoBankProfile(data: any) {
      return this.api.post(`reqwithdrawalTontine/getinfobank`, data);
    }

    // Get all withdrawal request from a tontine
    geAlltWithdrawallRequest(data: any) {
      return this.api.post(`reqwithdrawalTontine/getallwithdrawrequest`, data);
    }

    // Get all approval request from a tontine withdrawal
    getAllApprovalRequest(data: any) {
      return this.api.post(`reqwithdrawalTontine/getallapprovalwithdraw`, data);
    }

    // Get all refusal request from a withdrawal 
    getAllRefusalRequest(data: any) {
      return this.api.post(`reqwithdrawalTontine/getallrefusalwithdraw`, data);
    }


    // Approve a request for request withdrawal
    approveWithdrawalRequest(data: any) {
       return this.api.post(`reqwithdrawalTontine/approvalwithdraw`, data);
    }

    // Deny a withdrawal request
    denyWithdrawalRequest(data: any) {
      return this.api.post(`reqwithdrawalTontine/denywithdraw`, data);
    }

    
    /* Make deposit with cash*/
    makeDepositWithCash(data: any) {
      this.token = this.userService.getUserToken();
      return this.api.post(`tontine/wallet/v1/save/deposit/withCash/${this.token}`, data);
    }



}
