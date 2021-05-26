import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonInfiniteScroll, AlertController, ModalController } from '@ionic/angular';
import { LoansRequestMenuComponent } from './loans-request-menu/loans-request-menu.component';
import { LoanService } from '../service/loan.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';

import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { MessageComponent } from '../message/message.component';
import { LoanGlobalDataService } from '../service/loan-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.page.html',
  styleUrls: ['./loans-list.page.scss'],
})
export class LoansListPage implements OnInit {

  members: any[] = [];
  loading: boolean;
  allData: any;
  filterData: any;
  currentUser: any;
  currentTontine: any;
  currentLoanData: any;
  allLoansData: any;
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
    private util: UtilService,
    private tontine: TontineService,
    private loanError: LoanErrorService,
    private error: ErrorService,
    private events: EventService
  ) {
    this.loading = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentUser = this.userService.getUserData();

    this.nbItems = 10;
    this.status = '';
    this.allLoansData = [];
    this.events.subscribe('loan-action', () => {
      this.loading = true;
      this.getAllLoans(null);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getAllLoans(null);
  }

  async openContextMenu(ev: any, member: any) {
    const popover = await this.popoverController.create({
      component: LoansRequestMenuComponent,
      componentProps: {
        data: member
      },
      event: ev
    });
    return await popover.present();
  }

  // Get all loans request
  getAllLoans(refreSher: any) {
    if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.cycle_courant) {
      const param = {
        tontine_id: this.currentTontine.tontine.tontine_id,
        cycle_id: this.currentTontine.cycle_courant.id
      };
      this.loanService.getLoanRequest(param).subscribe((reponse: any) => {
    
        if (reponse && reponse.message === 'success') {
          if (reponse && reponse.liste_seances && reponse.liste_seances.length) {
            this.allLoansData = reponse.liste_seances;
            this.currentLoanData = reponse.liste_seances[0];
            this.allData = this.util.orderByKeyUp(reponse.liste_seances[0].liste_request_loan, 'updated_at');
            this.filterData = this.allData;
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
              this.getAllLoans(refreSher);
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
    }
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getAllLoans(event);
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
    const param = cycleSeanceId.split('#');
    this.allLoansData.forEach(data => {
      if (data.numero_cycle.toString() === param[0] && data.numero_seance.toString() === param[1]) {
        this.currentLoanData = data;
      }
    });
    if (this.currentLoanData && this.currentLoanData.liste_request_loan && this.currentLoanData.liste_request_loan.length > 0) {
      this.allData = this.util.orderByKeyUp(this.currentLoanData.liste_request_loan, 'updated_at');
      this.filterData = this.allData;
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
    this.translate.get(['OK_TEXT', 'CANCEL_TEXT', 'FILTER_TEXT']).subscribe(trans => {
      this.presentAlertRadio(this.loanData.selectPoolData(this.allLoansData), `${trans.OK_TEXT}`, `${trans.CANCEL_TEXT}`, `${trans.FILTER_TEXT}`);
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

  // get request statut
  getRequestStatut(status: string) {
    return this.constant.getRequestStatut(status);
  }

  // Filter the list of loans name
  searchForMember(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((data) => {
        return (data.infos_user.firstname ? data.infos_user.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          data.infos_user.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
        return data.status_loan.toLowerCase().indexOf(val.toLowerCase()) > -1;
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
    if (data && data.status_loan === 'pending' && (nbAdminAproval < data.number_max_admin_that_validate_loan || nbAdminRefusal < data.number_max_admin_that_validate_loan) && !hasValidate && this.currentTontine.tontine.administrator === 1) {
      ican = true;
    }
    return ican;
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

}
