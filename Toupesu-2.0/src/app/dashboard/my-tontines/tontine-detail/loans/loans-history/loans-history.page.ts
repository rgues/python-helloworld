import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { TontineService } from '../../../services/tontine.service';
import { LoanGlobalDataService } from '../service/loan-global-data.service';
import { LoanService } from '../service/loan.service';

@Component({
  selector: 'app-loans-history',
  templateUrl: './loans-history.page.html',
  styleUrls: ['./loans-history.page.scss'],
})
export class LoansHistoryPage implements OnInit {
  currentTontine: any;
  loading: boolean;
  history: any[] = [];
  allData: any;
  periodForm: FormGroup;
  isAll: boolean;
  nbItems: number;
  cycleId: any;
  seanceId: any;
  filterData: any;
  currentUser: any;
  infoSeance: any;
  infoCycle: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontine: TontineService,
    private activeRoute: ActivatedRoute,
    private alertController: AlertController,
    private loanService: LoanService,
    private loanData: LoanGlobalDataService,
    private translate: TranslateService,
    private error: ErrorService,
    private userService: UserService,
    private util: UtilService
  ) {
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.loading = false;
    this.allData = [];
    this.nbItems = 10;
    this.cycleId = parseInt(this.activeRoute.snapshot.params.cycleId);
    this.seanceId = parseInt(this.activeRoute.snapshot.params.seanceId);
    this.currentUser = this.userService.getUserData();
    this.isAll = false;
  }

  ngOnInit() {
    this.loading = true;
    this.getHistoryTLoan(null);
  }

  // Filter the list of tontines
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((loan) => {
        return (loan.data.infos_client.firstname ? loan.data.infos_client.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          loan.data.infos_client.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.history = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.history.push(this.allData[this.history.length]);
      }
    } else {
      this.history = this.allData;
    }
  }

  // change the visibility
  changeVisibility(enable: any) {
    this.infiniteScroll.disabled = false;
    this.loading = true;
    if (!enable) {
      this.allData = [];
      this.filterData.forEach((loan) => {
        if (loan.data.infos_client.id === this.currentUser.id) {
          this.allData.push(loan);
        }
      });
    } else {
      this.allData = this.filterData;
      this.infoSeance = null;
      this.infoCycle = null;
    }

    if (this.allData.length > this.nbItems) {
      this.history = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.history.push(this.allData[this.history.length]);
      }
    } else {
      this.history = this.allData;
    }
    setTimeout(() => {
      this.loading = false;
    }, 200)
  }

  // Get the list history loans
  getHistoryTLoan(event) {
    this.loanService.getLoanHistory(this.cycleId).subscribe((reponse: any) => {
    
      if (reponse && reponse.message === "success") {
        this.allData = [];

        let loanPayment = reponse.loan_payment;
        if (loanPayment && loanPayment.length > 0) {
          loanPayment = this.util.orderByKeyUp(loanPayment, 'updated_at');
          loanPayment.forEach(loan => {
            this.translate.get('LOAN_PAYMENT_TEXT').subscribe(trans => {
              this.allData.push({ type: 'payment', desc: `${trans}`, data: loan });
            });
          });
        }


        let interestPayment = reponse.interest_payment;
        if (interestPayment && interestPayment.length > 0) {
          interestPayment = this.util.orderByKeyUp(interestPayment, 'updated_at');
          interestPayment.forEach(loan => {
            this.translate.get('INTEREST_PAYMENT_TEXT').subscribe(trans => {
              this.allData.push({ type: 'interest', desc: `${trans}`, data: loan });
            });
          });
        }

        let loanApprove = reponse.loan_approve;
        if (loanApprove && loanApprove.length > 0) {
          loanApprove = this.util.orderByKeyUp(loanApprove, 'updated_at');
          loanApprove.forEach(loan => {
            if (loan.forced_loan === 1) {
              this.translate.get('FORCE_LOAN_APPROVE_TEXT').subscribe(trans => {
                this.allData.push({ type: 'approve', desc: `${trans}`, data: loan });
              });
            } else {
              this.translate.get('LOAN_APPROVE_TEXT').subscribe(trans => {
                this.allData.push({ type: 'approve', desc: `${trans}`, data: loan });
              });
            }
          });
        }


        let loanReject = reponse.loan_reject;
        if (loanReject && loanReject.length > 0) {
          loanReject = this.util.orderByKeyUp(loanReject, 'updated_at');
          loanReject.forEach(loan => {

            if (loan.forced_loan === 1) {
              this.translate.get('FORCE_LOAN_REJECT_TEXT').subscribe(trans => {
                this.allData.push({ type: 'approve', desc: `${trans}`, data: loan });
              });
            } else {
              this.translate.get('LOAN_REJECT_TEXT').subscribe(trans => {
                this.allData.push({ type: 'reject', desc: `${trans}`, data: loan });
              });
            }
          });
        }

        let loanInterestInterest = reponse.interest_of_interest;
        if (loanInterestInterest && loanInterestInterest.length > 0) {
          loanReject = this.util.orderByKeyUp(loanInterestInterest, 'updated_at');
          loanReject.forEach(loan => {
            //   if (loan.infos_seance.id === this.seanceId && loan.infos_cycle.id === this.cycleId) {
            this.translate.get('LOAN_INTEREST_INTEREST_TEXT').subscribe(trans => {
              this.allData.push({ type: 'interest_interest', desc: `${trans}`, data: loan });
            });
            // }
          });
        }

        this.filterData = this.allData;
        this.changeVisibility(false);
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
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getHistoryTLoan(event);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Filter by loan seance 
  filterBySeance(SeanceCycleId: any) {
    const param = SeanceCycleId.split('#');
    const currentSessionData = [];
    this.allData.forEach(loan => {
      if (loan.data.infos_cycle.numerocycle.toString() === param[0] && loan.data.infos_seance.numero_seance.toString() === param[1]) {
        this.infoSeance = loan.data.infos_seance;
        this.infoCycle = loan.data.infos_cycle;
        currentSessionData.push(loan);
      }
    });
    
    if (currentSessionData.length > this.nbItems) {
      this.history = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.history.push(currentSessionData[this.history.length]);
      }
    } else {
      this.history = currentSessionData;
    }
  }

  selectPool() {
    this.translate.get(['OK_TEXT', 'CANCEL_TEXT', 'FILTER_TEXT']).subscribe(trans => {
      this.presentAlertRadio(this.util.orderByKeyUp(this.loanData.selectPoolDataLoanHistory(this.filterData), 'label'), 
      `${trans.OK_TEXT}`, `${trans.CANCEL_TEXT}`, `${trans.FILTER_TEXT}`);
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

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getHistoryTLoan(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.history.length < this.allData.length) {
          this.history.push(this.allData[this.history.length]);
        } else if (this.history.length === this.allData.length) {

          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

}
