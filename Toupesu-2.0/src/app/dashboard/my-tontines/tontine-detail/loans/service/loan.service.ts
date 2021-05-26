import { Injectable } from '@angular/core';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { EventService } from 'src/app/shared/service/events.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  token: string;

  constructor(
    public api: ApiService,
    private userService: UserService,
    private event: EventService,
    private localStorage: LocalStorageService
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  // send loan data
  sendLoanData(data: any) {
    this.localStorage.setItem('loan-data', data);
  }

  // get loan data
  getLoanData() {
    const data = this.localStorage.getItem('loan-data');
    if (data) { return data } else return [];
  }

  // send loan data
  RemoveLoanData() {
    this.localStorage.removeItem('loan-data');
  }

  // Edit the loans request
  editLoanRequest(data: any) {
    return this.api.post('loan/v1/edit/params/' + this.token, data);
  }

  // Get loan dashbord informations
  getLoansInformations(data: any) {
    return this.api.post('loan/v1/get/dashboard/' + this.token, data);
  }

  // Get loan cash available and  maximum current cash for loan
  getCashAvalaible() {
    return this.api.get('loan/v1/get/cash/and/current/maximum/loan/' + this.token);
  }

  // Make a loan request
  makeLoanRequest(data: any) {
    return this.api.post('loan/v1/request/' + this.token, data);
  }

  // Get a loan 
  getLoanRequest(data: any) {
    return this.api.post('loan/v1/get/all/requests/' + this.token, data);
  }

  // Approve a loan request 
  approveLoanRequest(data: any) {
    return this.api.post('loan/v1/approve/request/' + this.token, data);
  }

  //Reject a loan request
  rejectLoanRequest(data: any) {
    return this.api.post('loan/v1/reject/request/' + this.token, data);
  }

  // Get memeber loan information for a seance
  getMemberLoanDashBordSeance(data: any) {
    return this.api.post('loan/v1/get/detail/seance/loan/user/' + this.token, data);
  }

  // Get memeber loan information for a cycle
  getMemberLoanDashBordCycle(data: any) {
    return this.api.post('loan/v1/get/detail/cycle/loan/user/' + this.token, data);
  }

  // Get loan history
  getLoanHistory(cycleId: any) {
    return this.api.get('loan/v1/get/history/loan/user/' + cycleId + '/' + this.token);
  }

  // pay loan and interest's with wallet
  payloanAndInterest(data: any) {
    return this.api.post('loan/v1/repay/with/wallet/' + this.token, data);
  }

  // pay loan Interest with wallet
  payloanInterest(data: any) {
    return this.api.post('loan/v1/repay/just/interest/with/wallet/' + this.token, data);
  }

  // pay loan and interest's with wallet
  payManyloanAndInterestWithWallet(data: any) {
    return this.api.post('loan/v1/repay/many/loan/with/wallet/' + this.token, data);
  }

  // pay loan Interest with wallet
  payManyloanInterestWithWallet(data: any) {
    return this.api.post('loan/v1/repay/many/interest/with/wallet/' + this.token, data);
  }

  /* Pay loan and Interest's with operator without conversion */
  payloanAndInterestWithOperatorWithoutConversion(data: any) {
    return this.api.post('loan/v1/repay/with/payment/method/withoutConversion/' + this.token, data);
  }

    /* Pay loan and Interest's with operator without conversion */
    payloanAndInterestWithOperatorWithConversion(data: any) {
      return this.api.post('loan/v1/repay/with/payment/method/withConversion/' + this.token, data);
    }
  

  /* Pay loan Interest with operator without conversion */
  payloanInterestWithOperatorWithoutConversion(data: any) {
    return this.api.post('loan/v1/repay/just/interest/with/payment/method/withoutConversion/' + this.token, data);
  }


  /* Pay loan Interest with operator without conversion */
  payloanInterestWithOperatorWithConversion(data: any) {
    return this.api.post('loan/v1/repay/just/interest/with/payment/method/withConversion/' + this.token, data);
  }


  /* Pay many loans and Interest's with operator without conversion */
  payManyloanAndInterestWithOperatorWithoutConversion(data: any) {
    return this.api.post('loan/v1/repay/many/with/payment/method/withoutConversion/' + this.token, data);
  }

  /* Pay many loans and Interests with operator without conversion */
  payManyloanAndInterestWithOperatorWithConversion(data: any) {
    return this.api.post('loan/v1/repay/many/with/payment/method/withConversion/' + this.token, data);
  }

  /* Pay many loans Interest with operator without conversion */
  payManyloanInterestWithOperatorWithoutConversion(data: any) {
    return this.api.post('loan/v1/repay/many/just/interest/with/payment/method/withoutConversion/' + this.token, data);
  }



  /* Pay many loans Interest with operator without conversion */
  payManyloanInterestWithOperatorWithConversion(data: any) {
    return this.api.post('loan/v1/repay/many/just/interest/with/payment/method/withConversion/' + this.token, data);
  }

  /* Pay many loans and Interests with bank traditionnel */
  payManyLoanAndInterestWithBankTradi(data: any) {
    return this.api.post('loan/v1/repay/many/loan/with/traditional/' + this.token, data);
  }

  /* Pay many loans Interest  with bank traditionnel */
  payManyLoanInterestWithBankTradi(data: any) {
    return this.api.post('loan/v1/repay/many/interest/with/traditional/' + this.token, data);
  }

  /* Pay many loans and Interests with cash */
  payManyLoanAndInterestWithCash(data: any) {
    return this.api.post('loan/v1/repay/many/loan/with/cash/' + this.token, data);
  }

  /* Pay many loans Interest  with cash */
  payManyLoanInterestWithCash(data: any) {
    return this.api.post('loan/v1/repay/many/interest/with/cash/' + this.token, data);
  }

  /* Get the list of loans refund for a stokvel cycle*/
  getLoanRefundList(data: any) {
    return this.api.post('loan/v1/repay/get/all/requests/' + this.token, data);
  }

  /* Get the list of interest refund for a stokvel cycle */
  getInterestRefundList(data: any) {
    return this.api.post('loan/v1/repay/get/all/requests/interests/' + this.token, data);
  }

  /* validate a loan refund*/
  validateLoanRefund(data: any) {
    return this.api.post('loan/v1/validate/repay/loan/' + this.token, data);
  }

  /* Validate an interest refund*/
  validateInterestRefund(data: any) {
    return this.api.post('loan/v1/validate/repay/interest/' + this.token, data);
  }

  /* Reject a loan refund*/
  rejectLoanRefund(data: any) {
    return this.api.post('loan/v1/refuse/repay/loan/' + this.token, data);
  }

  /* Reject a interest refund*/
  rejectInterestRefund(data: any) {
    return this.api.post('loan/v1/refuse/repay/interest/' + this.token, data);
  }

  getPercentage(data: number) {
    if (data > 0 && data <= 10) {
      return 'donut donut10';
    } else if (data >= 11 && data <= 20) {
      return 'donut donut20';
    } else if (data >= 21 && data <= 30) {
      return 'donut donut30';
    } else if (data >= 31 && data <= 40) {
      return 'donut donut40';
    } else if (data >= 41 && data <= 50) {
      return 'donut donut50';
    } else if (data >= 51 && data <= 60) {
      return 'donut donut60';
    } else if (data >= 61 && data <= 70) {
      return 'donut donut70';
    } else if (data >= 71 && data <= 80) {
      return 'donut donut80';
    } else if (data >= 81 && data <= 90) {
      return 'donut donut90';
    } else if (data >= 91 && data <= 99) {
      return 'donut donut90';
    } else if (data === 100) {
      return 'donut donut100';
    } else {
      return 'donut donut0';
    }
  }

}
