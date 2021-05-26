import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ContributionLoanComponent } from 'src/app/shared/contribution-loan/contribution-loan.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { TontineService } from '../../../services/tontine.service';
import { LoanService } from '../service/loan.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-loans-interests',
  templateUrl: './loans-interests.page.html',
  styleUrls: ['./loans-interests.page.scss'],
})
export class LoansInterestsPage implements OnInit {

  tontineCurrency = 'XAF';
  totalPay = 0;
  totalAmount = 0;
  selectedDue = [];
  currentTontine: any;
  loading: boolean;
  currentInterestData: any;
  paymentInterestObject: any;
  interestsDue: any[] = [];
  cycleId: any;
  seanceId: any;

  constructor(
    private tontine: TontineService,
    private activeRoute: ActivatedRoute,
    private util: UtilService,
    private loanService: LoanService,
    private loanError: LoanErrorService,
    private error: ErrorService,
    private modatCtrl: ModalController
  ) {
    this.paymentInterestObject = [];
    this.selectLoanList();
    this.loading = false;
    this.cycleId = parseInt(this.activeRoute.snapshot.params.cycleId);
    this.seanceId = parseInt(this.activeRoute.snapshot.params.seanceId);
  }

  ngOnInit() {
    this.currentTontine = this.tontine.getCurrentTontineData();
  }

  // Select the loan list
  selectLoanList() {
    this.interestsDue = this.loanService.getLoanData();
    if (this.interestsDue && this.interestsDue.length > 0) {
      this.interestsDue = this.interestsDue.filter((loan) => { return loan.rest_amount_interest_to_pay > 0 });
      this.interestsDue = this.util.orderByKeyUp(this.interestsDue, 'updated');
    } else {
      this.interestsDue = [];
    }
  }

  // Check if the loan is select
  checkEvent(e, interest: any) {
    if (e.target.checked == true) {
      this.selectedDue.push(interest);
      this.totalPay = this.totalPay + interest.rest_amount_interest_to_pay;
      this.totalAmount += interest.amount_interest;
      this.paymentInterestObject.push({ loan_request_id: interest.id, amount: interest.rest_amount_interest_to_pay });
    } else {
      let interestId = this.selectedDue.indexOf(interest);
      this.selectedDue.splice(interestId, 1);
      this.paymentInterestObject.splice(interestId, 1);
      this.totalPay = this.totalPay - interest.rest_amount_interest_to_pay;
      this.totalAmount += interest.amount_interest;
    }
  }

  // Get the loans data
  getLoanData() {
    if (this.currentTontine && this.currentTontine.cycle_courant) {
      const param = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        cycle_id: this.currentTontine.cycle_courant.id
      };
      this.loanService.getMemberLoanDashBordCycle(param).subscribe((data: any) => {
       
        if (data && data.message === 'success' && data.liste_my_loan.length > 0) {
          data.liste_my_loan.forEach(loan => {
            if (this.interestsDue && this.interestsDue[0] && loan.infos_seance.id === this.interestsDue[0].seance_id && loan.infos_cycle.id === this.interestsDue[0].cycle_id) {
              this.interestsDue = this.util.orderByKeyUp(loan.interests_due, 'updated');
            }
          });
        }
        this.loading = false;
      }, error => {

        this.loading = false;
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data.result === 'OK') {
                this.getLoanData();
              } else {
                this.loading = false;
              }
            });
          } else {
            this.loanError.manageLoanError(error);
          }
        } else {
          this.error.manageError(error);
        }
      });
    } else {
      this.loading = false;
    }
  }

  // Pay the loan
  payLoan() {
    // Construct interest object
    const loanData = {
      currency_name: this.currentTontine.tontine.monnaie,
      title: this.currentTontine.tontine.name,
      list_interest_to_pay: this.paymentInterestObject,
      total_loan: this.totalAmount,
      all_Amount: this.totalPay,
      type: 'interest'
    };

    this.loanService.sendLoanData(loanData);
    this.modatCtrl
      .create({
        component: ContributionLoanComponent,
        componentProps: {
          tontineName: this.currentTontine.tontine.name,
          amountPay: this.totalPay,
          balance: this.totalAmount - this.totalPay,
          currency: this.currentTontine.tontine.monnaie,
          type: 'interest'
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.data === 'complete') {
            this.totalPay = 0;
            this.totalAmount = 0;
            this.selectedDue = [];
            this.interestsDue = this.loanService.getLoanData();
            this.loanService.RemoveLoanData();
            this.loading = true;
            this.getLoanData();
          }
        });
      });
  }

  // show the pin confirmation dilaog
  confirmPin() {
    this.payLoan();
  }

}
