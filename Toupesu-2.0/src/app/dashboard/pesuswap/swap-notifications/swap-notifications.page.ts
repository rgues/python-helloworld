import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { SwapService } from '../services/swap.service';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-swap-notifications',
  templateUrl: './swap-notifications.page.html',
  styleUrls: ['./swap-notifications.page.scss'],
})
export class SwapNotificationsPage implements OnInit {
  loading: boolean;
  notifications: any;
  backService: any;
  nbItems: number;
  allData: any;
  currentUser: any;
  filterData: any;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private swapService: SwapService,
    private userService: UserService,
    private translate: TranslateService,
    private error: ErrorService
  ) {
    this.notifications = [];
    this.nbItems = 10;
    this.filterData = [];
    this.allData = [];
    this.backService = null;
    this.currentUser = this.userService.getUserData();
  }

  ngOnInit() {
    this.loading = true;
    this.getSwapNotifications(null);
  }

  // format the notification data
  formatNotificationData(notifications: any[]) {

     notifications.forEach(item => {
      if (item.titre.toString().startsWith('SWAP MATCH COMPLETED')) {
        this.translate.get(['SWAP_MATCH_COMPLETED_TITLE','SWAP_MATCH_COMPLETED_DESC'])
          .subscribe( trans => {
            item.titre = trans.SWAP_MATCH_COMPLETED_TITLE;
            item.description = trans.SWAP_MATCH_COMPLETED_DESC;
          });
      }

      if (item.titre.toString().startsWith('EXPIRATION PESU SWAP')) {
        this.translate.get(['EXPIRATION_PESU_SWAP_TITLE','EXPIRATION_PESU_SWAP_DESC'])
          .subscribe( trans => {
            item.titre = trans.EXPIRATION_PESU_SWAP_TITLE;
            item.description = trans.EXPIRATION_PESU_SWAP_DESC;
          });
      }

      if (item.titre.toString().startsWith('SWAP MATCH PENDING')) {
        this.translate.get(['SWAP_MATCH_PENDING_TITLE','SWAP_MATCH_PENDING_DESC'])
          .subscribe( trans => {
            item.titre = trans.SWAP_MATCH_PENDING_TITLE;
            item.description = trans.SWAP_MATCH_PENDING_DESC;
          });
      }

      if (item.titre.toString().startsWith('REQUETE PESU SWAP')) {
        this.translate.get(['REQUETE_PESU_SWAP_TITLE','REQUETE_PESU_SWAP_DESC'])
          .subscribe( trans => {
            item.titre = trans.REQUETE_PESU_SWAP_TITLE;
            item.description = trans.REQUETE_PESU_SWAP_DESC;
          });
      }

      if (item.titre.toString().startsWith('MODIFICATION PESU SWAP')) {
        this.translate.get(['MODIFICATION_PESU_SWAP_TITLE','MODIFICATION_PESU_SWAP_DESC'])
          .subscribe( trans => {
            item.titre = trans.MODIFICATION_PESU_SWAP_TITLE;
            item.description = trans.MODIFICATION_PESU_SWAP_DESC;
          });
      }

      if (item.titre.toString().startsWith('SUPPRESSION PESU SWAP')) {
        this.translate.get(['SUPPRESSION_PESU_SWAP_TITLE','SUPPRESSION_PESU_SWAP_DESC'])
          .subscribe( trans => {
            item.titre = trans.SUPPRESSION_PESU_SWAP_TITLE;
            item.description = trans.SUPPRESSION_PESU_SWAP_DESC;
          });
      }
    
    });

  }

  // Get swap notifications
  getSwapNotifications(event) {
    this.swapService.getSwapNotificationsWithId(this.currentUser.id).subscribe((reponse: any) => {
      if (reponse && reponse.notifications) {
        this.formatNotificationData(reponse.notifications);
        this.allData = reponse.notifications;
        this.filterData = this.allData;
        if (this.allData.length > this.nbItems) {
          this.notifications = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.notifications.push(this.allData[this.notifications.length]);
          }
        } else {
          this.notifications = this.allData;
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
      this.error.manageError(error);
    });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getSwapNotifications(event);
  }

  // Launch the backgroud service
  ionicViewDidEnter() {
    this.backgroundService();
  }

  // Backgroung service
  backgroundService() {
    this.backService = setInterval(() => {
      this.getSwapNotifications(null);
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
        if (this.notifications.length < this.allData.length) {
          this.notifications.push(this.allData[this.notifications.length]);
  
        } else if (this.notifications.length === this.allData.length ) {
          event.target.disabled = true;
        }
      }
    event.target.complete();
    }, 500);
    
    }
}