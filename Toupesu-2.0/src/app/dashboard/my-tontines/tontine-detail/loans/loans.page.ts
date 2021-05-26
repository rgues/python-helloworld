import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { LoansMenuComponent } from './loans-menu/loans-menu.component';
import { TontineService } from '../../services/tontine.service';
import { LoanService } from './service/loan.service';
import { ErrorService } from '../../../../shared/service/error.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { LoansRequestComponent } from './loans-request/loans-request.component';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  currentTontine: any;
  currentLoan: any;
  currentDebt: any;
  currentLoanRequest: any;
  loading: boolean;
  currentInterest: boolean;
  currentSessionLoanRequest: any;

  constructor(
    private popoverController: PopoverController,
    private modatCtrl: ModalController,
    private loanService: LoanService,
    private loanError: LoanErrorService,
    private error: ErrorService,
    private tontine: TontineService,
    private events: EventService
  ) {
    const tontineData =  this.tontine.getCurrentTontineData();
    this.currentTontine = tontineData.tontine;
    this.loading = false;
    this.events.subscribe('loan-request', () => {
      this.loading = true;
      this.getLoanData(null);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getLoanData(null);
  }

  // Open the context menu
  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: LoansMenuComponent,
      event: ev
    });
    return await popover.present();
  }

  // Get the loans data
  getLoanData(event: any) {
    const param = {
      tontine_id : this.currentTontine.tontine_id
    };
    this.loanService.getLoansInformations(param).subscribe((data: any) => {
      if (data && data.message === 'success') {
        this.currentDebt = data.debts;
        this.currentLoanRequest = data.loan_request;
        this.currentLoan = data.my_loan;
        this.currentInterest = data.my_interest;
        this.currentSessionLoanRequest = data.current_session_loan_status;
        if (data.info_tontine) {
          this.currentTontine = data.info_tontine[0];
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
  }

  // Refresh the list
  refreSher(event) {
    this.getLoanData(event);
  }

  // Get the request percentage
  getPercentage(data: number) {
    this.loanService.getPercentage(data);
  }

  // Can make a request 
  canMakeRequest() {
    let formData = this.tontine.getCurrentTontineData();
    const currentTontine = formData;
    const currentSeance = formData.seance_courante;
    const currentCycle = formData.cycle_courant;

    let canMakeRequest = false;
    if ((currentCycle && currentSeance && currentTontine.tontine.active === 1)) {
      canMakeRequest = true;
    }
     return canMakeRequest;
  }

  // Open the loan request
  openLoansRequest() {
    this.modatCtrl
      .create({
        component: LoansRequestComponent
      })
      .then( modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(ans => {
            if (ans && ans.data === "success") {
              this.loading = true;
              this.getLoanData(null);
            }
        });
      });
  }

}
