import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiService } from 'src/app/shared/service/api.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { TontineService } from '../../../services/tontine.service';
import { LoanGlobalDataService } from '../service/loan-global-data.service';
import { LoanService } from '../service/loan.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-loans-my-list',
  templateUrl: './loans-my-list.page.html',
  styleUrls: ['./loans-my-list.page.scss'],
})
export class LoansMyListPage implements OnInit {

  currentTontine: any;
  loading: boolean;
  currentLoan: any;
  creditLineApprove: any;
  creditLineApprovePaid: any;
  currentLoanData: any;
  interestsDue: any;
  infoSeance: any;
  infoCycle: any;
  allData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontine: TontineService,
    private api: ApiService,
    private util: UtilService,
    private events: EventService,
    private loanService: LoanService,
    private loanData: LoanGlobalDataService,
    private loanError: LoanErrorService,
    private error: ErrorService
  ) {
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentLoan = null;
    this.creditLineApprove = [];
    this.creditLineApprovePaid = [];
    this.interestsDue = [];
    this.infoSeance = null;
    this.infoCycle = null;
    this.loading = false;
    this.allData = [];
    this.nbItems = 10;
    this.events.subscribe('loans-paid', () => {
      this.loading = true;
      this.getLoanData(null);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getLoanData(null);
  }

  // Get the loans data
  getLoanData(event: any) {
    if (this.currentTontine && this.currentTontine.cycle_courant) {
      const param = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        cycle_id: this.currentTontine.cycle_courant.id
      };
      this.loanService.getMemberLoanDashBordCycle(param).subscribe((data: any) => {

        if (data && data.message === 'success' && data.liste_my_loan.length > 0) {
          this.allData = this.util.orderBySeanceKeyUp(data.liste_my_loan);
          this.currentLoan = this.allData[0];
          this.infoSeance = this.currentLoan.infos_seance;
          this.infoCycle = this.currentLoan.infos_cycle;

          if (this.allData.length > this.nbItems) {
            this.currentLoanData = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.currentLoanData.push(this.allData[this.currentLoanData.length]);
            }
          } else {
            this.currentLoanData = this.allData;
          }
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
              if (data && data.result === 'OK') {
                this.getLoanData(event);
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
      if (event) {
        event.target.complete();
      }
      this.loading = false;
    }
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getLoanData(event);
  }

  // get the cumule of loan due
  getLoanDueAmount() {
    return this.loanData.getLoanDueAmount(this.allData);
  }

  // get the cumule of loan paid
  getLoanPaidAmount() {
    return this.loanData.getLoanPaidAmount(this.allData);
  }

  // get the cumule of loan remain
  getLoanRemainAmount() {
    const loanDue = this.getLoanDueAmount();
    const loanPaid = this.getLoanPaidAmount();
    return loanDue - loanPaid;

  }

  // get interest generate
  getInterestGenerate() {
    return this.loanData.getInterestGenerate(this.allData);
  }

  // get loan paid percentage
  getLoanPaidPercentage() {
    const loanPaid = this.getLoanPaidAmount();
    const loanDue = this.getLoanDueAmount();
    return loanDue > 0 ? parseFloat(Number((loanPaid / loanDue) * 100).toFixed(0)) : 0;
  }


  // get loan paid percentage
  getLoanRemainPercentage() {
    let loanPaidPercent: number = this.getLoanPaidPercentage();
    return (100 - loanPaidPercent);
  }

  // Get all amount of a loan seance
  getLoanSeanceAmount(loanDue: any) {
    return this.loanData.getLoanSeanceAmount(loanDue);
  }

  // Get all amount of a loan seance
  getInterestDueAmount(loanDue: any) {
    return this.loanData.getInterestDueAmount(loanDue);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.currentLoanData.length < this.allData.length) {
          this.currentLoanData.push(this.allData[this.currentLoanData.length]);
        } else if (this.currentLoanData.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  getPercentage(data: number) {
    return this.loanService.getPercentage(data);
  }

}
