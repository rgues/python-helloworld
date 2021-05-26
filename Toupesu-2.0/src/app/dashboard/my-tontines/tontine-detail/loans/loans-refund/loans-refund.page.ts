import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonInfiniteScroll, AlertController, ModalController } from '@ionic/angular';

import { LoanService } from '../service/loan.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { MessageComponent } from '../message/message.component';
import { LoansRefundMenuComponent } from './loans-refund-menu/loans-refund-menu.component';
import { PaidProofsLoanComponent } from '../paid-proofs/paid-proofs.component';
import { LoanGlobalDataService } from '../service/loan-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-loans-refund',
  templateUrl: './loans-refund.page.html',
  styleUrls: ['./loans-refund.page.scss'],
})
export class LoansRefundPage implements OnInit {

  members: any[] = [];
  loading: boolean;
  allData: any;
  filterData: any;
  currentUser: any;
  currentSeance: any;
  currentTontine: any;
  currentCycle: any;
  currentLoanData: any;
  allLoansData: any;
  allInterestData: any;
  nbItems: number;
  status: string;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private popoverController: PopoverController,
    private modatCtrl: ModalController,
    private alertController: AlertController,
    private constant: ConstantService,
    private userService: UserService,
    private loanService: LoanService,
    private loanData: LoanGlobalDataService,
    private translate: TranslateService,
    private tontine: TontineService,
    private loanError: LoanErrorService,
    private error: ErrorService,
    private events: EventService
  ) {
    this.loading = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentSeance = this.currentTontine.seance_courante;
    this.currentCycle = this.currentTontine.cycle_courant;
    this.currentUser = this.userService.getUserData();
    this.nbItems = 10;
    this.status = '';
    this.allLoansData = [];
    this.allData = [];
    this.allInterestData = [];
    this.events.subscribe('loan-refund', () => {
      this.loading = true;
      this.getAllLoansRefund(null);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getAllLoansRefund(null);
  }

  async openContextMenu(ev: any, member: any) {
    const popover = await this.popoverController.create({
      component: LoansRefundMenuComponent,
      componentProps: {
        data: member
      },
      event: ev
    });
    return await popover.present();
  }

  // Get all loans request
  getAllLoansRefund(refreSher: any) {
    if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.cycle_courant) {
      const param = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        cycle_id: this.currentTontine.cycle_courant.id
      };
      this.loanService.getLoanRefundList(param).subscribe((reponse: any) => {
        if (reponse && reponse.message === 'success') {
          if (reponse && reponse.liste_requests && reponse.liste_requests.length) {

            this.allLoansData = [];
            this.allData = [];
            this.filterData = [];

            reponse.liste_requests.forEach(request => {
              this.allLoansData.push({ type: 'loan', data: request });
            });
          
            this.filterData = this.allLoansData;
            this.currentLoanData = this.filterData && this.filterData.length > 0 ? this.filterData[0] : null;
            this.allData = this.allLoansData.filter(data => { return (data.data.infos_seance.id === this.currentLoanData.data.infos_seance.id && this.currentLoanData) });

            if (this.allData.length > this.nbItems) {
              this.members = [];
              for (let i = 0; i < this.nbItems; i++) {
                this.members.push(this.allData[this.members.length]);
              }
            } else {
              this.members = this.allData;
            }
          }

          this.getAllInterestRefund(refreSher);
        } else {
          this.loading = false;
          if (refreSher) {
            refreSher.target.complete();
          }
        }
        
      }, error => {
        this.loading = false;
        if (refreSher) {
          refreSher.target.complete();
        }
        if (error && error.error && error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getAllLoansRefund(refreSher);
            } else {
              this.loading = false;
            }
          });
        } else if (error && error.error && error.error.message === 'error') {
          this.loanError.manageLoanError(error);
        } else {
          this.error.manageError(error);
        }
      });
    } else {
      this.loading = false;
      if (refreSher) {
        refreSher.target.complete();
      }
    }
  }

  // Get all interest refund
  getAllInterestRefund(refreSher: any) {
    if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.cycle_courant) {
      const param = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        cycle_id: this.currentTontine.cycle_courant.id
      };
      this.loanService.getInterestRefundList(param).subscribe((reponse: any) => {
       
        if (reponse && reponse.message === 'success') {
          if (reponse && reponse.liste_requests && reponse.liste_requests.length) {
            this.allInterestData = [];
            this.allData = [];
            this.filterData = [];

            reponse.liste_requests.forEach(request => {
              this.allInterestData.push({ type: 'interest', data: request });
            });
        
            this.filterData = this.filterData.concat(this.allLoansData);
            this.filterData = this.filterData.concat(this.allInterestData);
            this.currentLoanData = this.filterData && this.filterData.length > 0 ? this.filterData[0] : null;
            this.allData = this.allInterestData.filter(data => { return (this.currentLoanData && data.data.infos_seance.id === this.currentLoanData.data.infos_seance.id) });
            this.allData = this.allData.concat(this.allLoansData);
           
            if (this.allData.length > this.nbItems) {
              this.members = [];
              for (let i = 0; i < this.nbItems; i++) {
                this.members.push(this.allData[this.members.length]);
              }
            } else {
              this.members = this.allData;
            }
        
          }
        }

        if (refreSher) {
          setTimeout(() => {
            refreSher.target.complete();
          }, 2000);
        }
        this.loading = false;
      }, error => {
        this.loading = false;
        if (refreSher) {
          refreSher.target.complete();
        }
        if (error && error.error && error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getAllInterestRefund(refreSher);
            } else {
              this.loading = false;
            }
          });
        } else if (error && error.error && error.error.message === 'error') {
          this.loanError.manageLoanError(error);
        } else {
          this.error.manageError(error);
        }
      });
    } else {
      this.loading = false;
      if (refreSher) {
        refreSher.target.complete();
      }
    }
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getAllLoansRefund(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.members.length < this.allData.length) {
          this.members.push(this.allData[this.members.length]);
        } else if (this.members.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Filter by loan seance 
  filterBySeance(cycleSeanceId: any) {
    this.currentLoanData = [];
    this.allData = [];
    const param = cycleSeanceId ? cycleSeanceId.split('#') : [];
    if (param && param.length > 0) {
      this.filterData.forEach(data => {
        if (data.data.infos_seance.cycle_id.toString() === param[0] && data.data.infos_seance.id.toString() === param[1]) {
          this.allData.push(data);
          this.currentLoanData = data;
        }
      });
    }


    if (this.allData.length > this.nbItems) {
      this.members = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.members.push(this.allData[this.members.length]);
      }
    } else {
      this.members = this.allData;
    }
  }

  selectPool() {
    const seanceData = [];
    const listSeance = [];
    let i = 0;
    this.filterData.forEach(loan => {
      if (!this.loanData.isSeanceNotIn(loan.data.infos_seance.cycle_id, loan.data.infos_seance.id, listSeance)) {
        listSeance.push(`${loan.data.infos_seance.cycle_id}${loan.data.infos_seance.id}`);
        this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
          seanceData.push({
            name: 'radio' + i,
            label: `${trans.SESSION_TEXT} :${loan.data.infos_seance.numero_seance}`,
            type: 'radio',
            value: `${loan.data.infos_seance.cycle_id}#${loan.data.infos_seance.id}`,
            checked: false
          });
        });
        i++;
      }
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
          handler: (ans) => {
            this.filterBySeance(ans)
          }
        }
      ]
    });

    await alert.present();
  }

  // get request statut
  getRequestStatut(status: string) {
    return this.constant.getRequestStatut(status);
  }


  // can accept or reject a loan request
  canAcceptOrRejectLoanRequest(data: any) {
    let ican = false;
    let hasValidate = false;
    data.liste_admin_approval.forEach(admin => {
      if (admin && admin.id === this.currentUser.id) {
        hasValidate = true;
      }
    });
    if (!hasValidate) {
      data.liste_admin_refusal.forEach(admin => {
        if (admin && admin.id === this.currentUser.id) {
          hasValidate = true;
        }
      });
    }
    const nbAdminAproval = data.liste_admin_approval ? data.liste_admin_approval.length : 0;
    const nbAdminRefusal = data.liste_admin_refusal ? data.liste_admin_refusal.length : 0;
    if (data && data.infos_request && data.infos_request.status === 'pending' && (nbAdminAproval < data.number_max_admin_that_validate_loan || nbAdminRefusal < data.number_max_admin_that_validate_loan) && !hasValidate && this.currentTontine.tontine.administrator === 1) {
      ican = true;
    }
    return ican;
  }

  
  // Filter the list of loans name
  searchForMember(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((data) => {
        return (data.data.infos_user.firstname ? data.data.infos_user.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          data.data.infos_user.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.members = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.members.push(this.allData[this.members.length]);
      }
    } else {
      this.members = this.allData;
    }
  }

  // Filter the list of loans by status
  searchForStatus(status) {
    this.infiniteScroll.disabled = false;
    const val = status;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((data) => {
        return data.data.infos_request.status.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.members = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.members.push(this.allData[this.members.length]);
      }
    } else {
      this.members = this.allData;
    }
  }

  // show reject reason
  showRejectReason(data: any) {
    this.modatCtrl
      .create({
        component: MessageComponent,
        componentProps: {
          data: data
        }
      })
      .then(modalEl => {
        modalEl.present();
      });
  }

  // show the proofs
  showProofs(proofs: any) {
    console.log(proofs);
    this.modatCtrl
    .create({
      component: PaidProofsLoanComponent,
      componentProps: {
        data: proofs
      }
    })
    .then(modalEl => {
      modalEl.present();
    });
  }

}
