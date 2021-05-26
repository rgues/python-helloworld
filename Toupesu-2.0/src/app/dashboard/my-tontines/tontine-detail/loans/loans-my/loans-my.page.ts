import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ContributionLoanComponent } from 'src/app/shared/contribution-loan/contribution-loan.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { TontineService } from '../../../services/tontine.service';
import { LoanService } from '../service/loan.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-loans-my',
  templateUrl: './loans-my.page.html',
  styleUrls: ['./loans-my.page.scss'],
})
export class LoansMyPage implements OnInit {
  currentTontine: any;
  loading: boolean;
  currentLoan: any;
  creditLineApprove: any;
  creditLineApprovePaid: any;
  currentLoanData: any;
  interestsDue: any;
  infoSeance: any;
  infoCycle: any;
  currentCycleId: any;
  currentSeanceId: any;

  constructor(
    private tontine: TontineService,
    private params: ActivatedRoute,
    private alertController: AlertController,
    private modatCtrl: ModalController,
    private events: EventService,
    private router: Router,
    private translate: TranslateService,
    private util: UtilService,
    private loanService: LoanService,
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
    this.currentCycleId = parseInt(this.params.snapshot.params.cycleId);
    this.currentSeanceId = parseInt(this.params.snapshot.params.seanceId);
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
          this.currentLoanData = this.util.orderBySeanceKeyUp(data.liste_my_loan);
          if (this.currentLoanData && this.currentLoanData.length > 0) {
            const currentLoan = this.currentLoanData.filter((loan) => { return loan.infos_cycle.id === this.currentCycleId && loan.infos_seance.id === this.currentSeanceId });
            this.currentLoan = currentLoan[0];
            this.creditLineApprove = this.util.orderByKeyUp(this.currentLoan.credit_line_approve, 'updated');
            this.creditLineApprovePaid = this.util.orderByKeyUp(this.currentLoan.credit_line_paid, 'updated');
            this.interestsDue = this.currentLoan.interests_due;
            this.infoSeance = this.currentLoan.infos_seance;
            this.infoCycle = this.currentLoan.infos_cycle;
          }

        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
        this.loading = false;
      }, error => {
        if (event) {
          event.target.complete();
        }
       
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data.result === 'OK') {
                this.getLoanData(event);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.loading = false;
            this.loanError.manageLoanError(error);
          }
        } else {
          this.loading = false;
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

  // Filter by loan seance 
  filterBySeance(SeanceCycleId: any) {
    this.currentLoan = [];
    const param = SeanceCycleId.split('#');
    this.currentLoanData.forEach(data => {
      if (data.infos_cycle.id.toString() === param[0] && data.infos_seance.id.toString() === param[1]) {
        this.currentLoan = data;
        this.creditLineApprove = this.currentLoan.credit_line_approve;
        this.interestsDue = this.currentLoan.interests_due;
        this.infoSeance = this.currentLoan.infos_seance;
        this.infoCycle = this.currentLoan.infos_cycle;
      }
    });
  }

  selectPool() {
    const seanceData = [];
    let i = 0;
    this.currentLoanData.forEach(loan => {
      this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
        seanceData.push({
          name: 'radio' + i,
          label: `${trans.CYCLE_TEXT}/${trans.SESSION_TEXT} : ${loan.infos_cycle.numerocycle}/${loan.infos_seance.numero_seance}`,
          type: 'radio',
          value: `${loan.infos_cycle.id}#${loan.infos_seance.id}`,
          checked: false
        });
      });
      i++;
    });
    this.translate.get(['OK_TEXT', 'CANCEL_TEXT', 'FILTER_TEXT']).subscribe(trans => {
      this.presentAlertRadio(seanceData, `${trans.OK_TEXT}`, `${trans.CANCEL_TEXT}`, `${trans.FILTER_TEXT}`);
    });
  }

  async presentAlertRadio(data: any, okText: string, cancelText: string, filterText: string) {
    const alert = await this.alertController.create({
      header: filterText,
      inputs: data,
      buttons: [
        {
          text: cancelText,
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: okText,
          handler: (data) => {
            this.filterBySeance(data)
          }
        }
      ]
    });
    await alert.present();
  }

  // show loan interest
  showInterest(interest: any) {
    this.loanService.sendLoanData(interest);
    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans', 'loans-interests', this.currentCycleId, this.currentSeanceId]);
  }


  // Refresh the list
  refreSher(event) {
    this.getLoanData(event);
  }

  getPercentage(data: number) {
    return this.loanService.getPercentage(data);
  }


  // Pay the loan
  payLoan() {
    let amountPayLoan = 0;
    let totalAmount = 0;

    // Construct loan object
    const paymentLoanObject = [];
    this.creditLineApprove.forEach(loan => {
      totalAmount += loan.amount;
      if (loan && loan.rest_amount_loan_to_pay > 0) {
        amountPayLoan += loan.rest_amount_loan_to_pay;
        paymentLoanObject.push({ loan_request_id: loan.id, amount: loan.rest_amount_loan_to_pay });
      }
    });

    const loanData = {
      currency_name: this.currentTontine.tontine.monnaie,
      title: this.currentTontine.tontine.name,
      list_loan: paymentLoanObject,
      total_loan: totalAmount,
      all_Amount: amountPayLoan,
      type: 'loan-interest'
    };

    this.loanService.sendLoanData(loanData);
    this.modatCtrl
      .create({
        component: ContributionLoanComponent,
        componentProps: {
          tontineName: this.currentTontine.tontine.name,
          amountPay: amountPayLoan,
          balance: totalAmount - amountPayLoan,
          currency: this.currentTontine.tontine.monnaie,
          type: 'loan-interest'
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.data === 'complete') {
            this.loading = true;
            this.getLoanData(null);
            this.events.publish('loans-paid');
          }
        });
      });
  }

  // show the pin confirmation dialog
  confirmPin() {
    this.payLoan();
  }

}
