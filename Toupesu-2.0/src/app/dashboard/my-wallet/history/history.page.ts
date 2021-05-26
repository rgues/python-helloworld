import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonInfiniteScroll, NavController } from '@ionic/angular';
import { MyWalletMenuComponent } from '../my-wallet-menu/my-wallet-menu.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ContributionService } from '../../my-tontines/services/contribution.service';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { UserService } from '../../user/service/user.service';
import { StorageData } from 'src/app/shared/service/storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  activelistTransactions: any;
  // Pagination data
  nbItems: number;
  user: any;
  loading: boolean;
  transactionFlux: string;
  transactionType: string;
  allData: any;
  backService: any;
  currentDate: Date;
  filterData: any;
  filterDataType: any;
  filterIndex: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private error: ErrorService,
    private userService: UserService,
    private storage: StorageData,
    private contribution: ContributionService,
    private navController: NavController,
    private constant: ConstantService,
    private router: Router,
    public popoverController: PopoverController
  ) {
    this.activelistTransactions = [];
    this.nbItems = 10;
    this.user = this.userService.getUserData();
    this.loading = false;
    this.transactionFlux = '';
    this.transactionType = '';
    this.allData = [];
    this.backService = null;
    this.currentDate = new Date();
    this.filterData = [];
    this.filterDataType = [];
    this.filterIndex = -1;
  }

  ngOnInit() {
    this.getDataFormStorage(null);
    this.getTransactionTypeFilter();
  }

  // filter by tontine
  filterTransType(index) {
    this.infiniteScroll.disabled = false;
    if (this.filterDataType[index] && index !== -1) {
      const transactions = [];
      this.filterData.forEach(tontine => {
        if (tontine.motif === this.filterDataType[index].type) {
          transactions.push(tontine);
        }
      });
      this.allData = transactions;
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.activelistTransactions = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);
      }
    } else {
      this.activelistTransactions = this.allData;
    }
  }

  // Get the transaction type
  getTransactionFlux(motif: string) {
    return this.constant.getTransactionReason(motif);
  }

    // Get the reason of transaction
    getTransactionType(statut: string) {
      return this.constant.getTransactionType(statut);
    }
  

  // Get the reason of transaction translation
  getTransactionTypeFilter() {
    this.constant.getTransactionReasonTranslation().subscribe(transactionReason => {
      this.filterDataType = transactionReason;
    });
  }

  // Go to the dashboard
  goDashboard() {
      this.navController.setDirection('root');
      this.router.navigate(['/dashboard']);
  }

  // Get the list user tontines
  getTransactions(event) {
    this.contribution.historiqueTransactionUtilsateurFromToken().subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.trace && reponse.trace.length > 0) {
        if (reponse && reponse.trace) {
          this.allData = reponse.trace;
          this.filterData = this.allData;
          // Save to local storage
          this.setToStorage(this.allData);
          if (this.allData.length > this.nbItems) {
            this.activelistTransactions = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);
            }
          } else {
            this.activelistTransactions = this.allData;
          }
        }
      }
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    },error => {
      if (event) {
        event.target.complete();
      }
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getTransactions(event);
          } else {
            this.loading = false;
          }
         });
      } else {
        this.error.manageError(error);
      }});
  }


  // set to local Stoirage
  setToStorage(data: any) {
    this.storage.set('app-wallet-trans',data);
  }

  getFromStorage() {
    return this.storage.get('app-wallet-trans');
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getTransactions(event);
  }

  // Get the data from session
  getDataFormStorage(event) {
    this.getFromStorage().then(data => {
      if (data && data.length > 0) {
        this.allData = data;
        if (this.allData.length > this.nbItems) {
          this.activelistTransactions = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);
          }
        } else {
          this.activelistTransactions = this.allData;
        }
        this.getTransactions(event);
  
      } else {
        this.loading = true;
        this.getTransactions(event);
      }
    });
  }

  // Launch the backgroud service
  ionicViewDidEnter() {
    this.backgroundService();
  }

  // Backgroung service
  backgroundService() {
    this.backService = setInterval(() => {
      this.getTransactions(null);
    }, 300000 + (Math.ceil(Math.random() * 10) + 1) * 1000);
  }

  // Launch the backgroud service
  ionicViewWillLeave() {
    clearInterval(this.backService);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.activelistTransactions.length < this.allData.length) {
          this.activelistTransactions.push(this.allData[this.activelistTransactions.length]);

        } else if (this.activelistTransactions.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }


  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MyWalletMenuComponent,
      event: ev
    });
    return await popover.present();
  }

}
