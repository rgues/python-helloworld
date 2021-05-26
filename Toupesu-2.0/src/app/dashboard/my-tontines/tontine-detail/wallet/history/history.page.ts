import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonInfiniteScroll } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { MyWalletMenuComponent } from 'src/app/dashboard/my-wallet/my-wallet-menu/my-wallet-menu.component';
import { WalletTontineService } from '../services/wallet-tontine.service';
import { TontineService } from '../../../services/tontine.service';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  activelistTransactions: any;
  currentTontine: any;
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
    private util: UtilService,
    private tontine: TontineService,
    private userService: UserService,
    private storage: StorageData,
    private walletTontine: WalletTontineService,
    private constant: ConstantService,
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
    this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {
    this.getDataFormStorage(null);
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
  getTransactionFlux(type: string) {
    return this.constant.getTransactionType(type);
  }

  // Get the reason of transaction
  getTransactionType(reason: string) {
    return this.constant.getTransactionReason(reason);

  }

  // Get the list user tontines
  getTransactions(event) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id
    };

    this.walletTontine.getWalletTransaction(param)
      .subscribe((reponse: any) => {
       
        if (reponse && reponse.transactions && reponse.transactions.length > 0) {
          this.allData = this.util.oderByUpdatedAt(reponse.transactions);
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
        this.loading = false;
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
        }
      });
  }


  // set to local Stoirage
  setToStorage(data: any) {
    this.storage.set('app-wallet-tontines-trans',data);
  }

  getFromStorage(): Promise<any> {
    return this.storage.get('app-wallet-tontines-trans');
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
