import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, IonInfiniteScroll } from '@ionic/angular';
import { DebtsMenuComponent } from '../debts-menu/debts-menu.component';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ContributionService } from '../../../services/contribution.service';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/shared/service/util.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-due',
  templateUrl: './due.page.html',
  styleUrls: ['./due.page.scss'],
})
export class DuePage implements OnInit {

  tontineCurrency = 'ZAR';
  totalPay = 0;
  totalBill = 0;
  totalDue = 0;
  balance = 0;
  selectedDebts = [];
  contributions: any;
  penalties:any;
  myDebts: any[] = [];
  allCurrencies:any;
  currentCurrency:any;
  reference: string;
  itemsData: any;
  itemsList: any;
  loadingPay: boolean;
  typesContributions: any;

  loading: boolean;
  currentTontine: any;
  currentSeance: any;
  currentCycle: any;
  members: any;
  allData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private popoverController: PopoverController,
    private tontine: TontineService,
    private translate: TranslateService,
    private ui: UiService,
    private error: ErrorService,
    private debt: DebtsManagerService,
    private contribution: ContributionService,
    private route: Router,
    private util: UtilService
  ) {
      this.loading = false;
      this.contributions = [];
      this.allData = [];
      this.penalties = [];
      this.currentTontine = this.tontine.getCurrentTontineData();
      this.currentSeance = this.currentTontine.seance_courante;
      this.currentCycle = this.currentTontine.cycle_courant;
      this.members = this.currentTontine.membres;
      this.nbItems = 10;
      this.allCurrencies = [];
      this.itemsData = [];
      this.loadingPay = false;
      this.myDebts = [];
      this.typesContributions = [];
      this.itemsList = [];
   }

  ngOnInit() {
    this.loading = true;
    this.getCurrentSeance();
    this.getSeances(null);
    this.getContributionType(false);
  }

  // Get the current seance of tontine
  getCurrentSeance(){
    this.contribution.getSeanceCurrentTontine(this.currentTontine.tontine.tontine_id).subscribe((reponse: any) =>{
      if (reponse && reponse.message === 'success') {
        this.currentSeance = reponse.seance;
      }
    }, error => {
        this.error.manageError(error);
    });
  }

  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: DebtsMenuComponent,
      event: ev
    });
    return await popover.present();
  }

  checkEvent(e, index:any){
    if (e.target.checked == true) {
      this.selectedDebts[index].choice = true;
   
    } else {
      this.selectedDebts[index].choice = false;
    }
    this.totalPay = 0;
    this.totalBill = 0;
    this.balance  = 0;
    this.totalDue = 0;
    this.itemsData = [];
    this.itemsList = [];
    this.selectedDebts.forEach(item => {
      this.totalDue  += parseFloat(item.value.montant);
      if (item.choice) {
        this.itemsList.push(item.value);
        this.totalPay  += parseFloat(item.value.montant);
        this.itemsData.push({seance_id: item.value.seance_id, numero_part: item.value.numero_part, montant: item.value.montant, typecontribution_id: item.value.typecontribution_id});
      }
    });
    this.balance = this.totalPay;
    // formattage de la monnaie
    this.totalPay = parseFloat(Number(this.totalPay).toFixed(2));
    this.totalDue =  parseFloat(Number(this.totalDue).toFixed(2));
    this.balance =  parseFloat(Number(this.balance).toFixed(2));
  }

  processPayment() {
    // Go to the payment process
    this.debt.sendDebtsData({
      items : this.itemsData, 
      itemsList:  this.itemsList,
      balance: this.balance,
      dueAmount: this.totalDue,
      billAmount: this.totalPay,
      dueList: this.allData,
      dueSelect: this.selectedDebts
    });
    this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts','in-progress-paiement']);
  }

  // debts in progress
  debtInProgress() {
    this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts','in-progress-list']);
  }

  // get the current contribution
  getContributionType(refresh) {
    this.contribution.getTypeContributionTontine(refresh).then((data: any)=> {
      this.typesContributions = [];
      data.forEach(contrib => {
        this.translate.get(`TYPE_CONTRIBUTION_${contrib.id}`).subscribe(trans=> {
          this.typesContributions.push({id:contrib.id ,value:trans});
        });
      });
    });
  }

  // get the current desscirption
  getDescription(typeContribId: any) {
    let des = '';
    this.typesContributions.forEach(contrib => {
        if (contrib.id === typeContribId ) {
          des = contrib.value;
        }
    });
    return des;
  }

  // Get the list of item with amount greather than 0
  filterItems(itemsList: any[]) {
    let dataList = [];
    if (itemsList && itemsList.length > 0) {
      dataList = itemsList.filter((current) => { return current.montant > 0 && (current.cycle_id === this.currentCycle.id) && this.currentCycle});
    }
    return dataList;
  }

  // Get the list of seances that member hasn't contrib
  getSeances(event) {
    const param = {
      tontine_id : this.tontine.getCurrentTontineData().tontine.tontine_id
    }
    this.contribution.getSeancesContributeOrPenalties(param).subscribe((reponse: any) => {
      this.loading = false;
      if(reponse && reponse.message === 'success') {
        let dueDatta : any[] =[];
        dueDatta = dueDatta.concat(this.util.orderByKeyUp(this.filterItems(reponse.liste_seances_contribution),'date_debut'));
        dueDatta = dueDatta.concat(this.util.orderByKeyUp(this.filterItems(reponse.liste_seances_penalite),'date_debut'));
        this.allData = dueDatta;
        console.log(this.allData);
        this.selectedDebts = [];
        this.allData.forEach(data => {
          this.selectedDebts.push({choice: false, value : data});
        });

        if (this.allData.length > this.nbItems) {
          this.myDebts = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.myDebts.push(this.allData[this.myDebts.length]);
          }
        } else {
          this.myDebts = this.allData;
        }
      }
     
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      this.loading = false;
      if (event) {
          event.target.complete();
      }
      if(error && error.error && error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK'){
              this.getSeances(event);
            } else {
              this.loading = false;
            }
          });
      } else if (error && error.error && error.error.tontine_id_not_exist) {
            this.translate.get('TONTINE_USERS_MSG4').subscribe(trans => {
                this.ui.presentToast(trans);
            });
     } else {
          this.error.manageError(error);
      }
    });
  }

    // Refresh the list
    refreSher(event) {
      this.infiniteScroll.disabled = false;
      this.getSeances(event);
    }
  
    // Infinite scroll data
    infinteScrollData(event) {
      setTimeout(() => {
        for (let i = 0; i < this.nbItems; i++) {
          if (this.myDebts.length < this.allData.length) {
            this.myDebts.push(this.allData[this.myDebts.length]);
          } else if (this.myDebts.length === this.allData.length) {
            event.target.disabled = true;
          }
        }
        event.target.complete();
      }, 500);
   
    }

}
