import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { NotificationsService } from 'src/app/dashboard/notifications/service/notifications.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from '../my-tontines/services/tontine.service';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { SelectDataComponent } from 'src/app/shared/select-data/select-data.component';
import { StorageData } from 'src/app/shared/service/storage.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  loading: boolean;
  notifications: any;
  sessionKey: string;
  backService: any;
  nbItems: number;
  allData: any;
  currentDate: Date;
  tontines: any;
  tontineIndex: any;
  filterData: any;
  tontineName: string;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private notification: NotificationsService,
    private tontine: TontineService,
    private modatCtrl: ModalController,
    private events: EventService,
    private storage: StorageData,
    private translate: TranslateService,
    private formUtils: FormUtilsService,
    private util: UtilService,
    private error: ErrorService
  ) {
    this.notifications = [];
    this.nbItems = 10;
    this.allData = [];
    this.backService = null;
    this.currentDate = new Date();
    this.tontines = [];
    this.filterData = [];
    this.tontineIndex = -1;
    this.translate.get('ALL_TONTINE').subscribe(trans => {
      this.tontineName = trans
    });
    this.events.subscribe('new-tontine', () => {
      this.refreSher(null);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getDataFormStorage(null);
    this.getListOftontines();
  }


  // Get the troncate name
  troncateName(value: string, nbDigit: number) {
    return this.formUtils.troncateName(value,nbDigit);
  }

  // Get the list of tontines
  getListOftontines() {
    this.tontine.getMyTontine().subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {

        if (reponse.liste_tontine && reponse.liste_tontine.length > 0) {
          let activeTontine = reponse.liste_tontine.filter(data => {
            return data.tontine.active === 1
          });
          activeTontine = this.util.oderByTontineDate(activeTontine);
          let inactiveTontine = reponse.liste_tontine.filter(data => {
            return data.tontine.active === 0
          });
          inactiveTontine = this.util.oderByTontineDate(inactiveTontine);
          this.tontines = []
          this.tontines = this.tontines.concat(activeTontine);
          this.tontines = this.tontines.concat(inactiveTontine);
        }
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getListOftontines();
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // show the tontine modal
  showTontines() {
    this.modatCtrl
      .create({
        component: SelectDataComponent,
        componentProps: {
          tontine: this.tontines,
          type: 'notification'
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.role === 'select') {
            this.tontineName = ans.data.name;
            this.filterNotifications(ans.data.id);
          }
        });
      });
  }

  // filter by tontine
  filterNotifications(index) {
    if (this.tontines[index] && index !== -1) {
      const notifications = [];
      this.filterData.forEach(tontine => {
        if (tontine.tontine_id === this.tontines[index].tontine.tontine_id) {
          notifications.push(tontine);
        }
      });
      this.allData = notifications;
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.notifications = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.notifications.push(this.allData[this.notifications.length]);
      }
    } else {
      this.notifications = this.allData;
    }
  }

  // Get the list history tontines from server
  getUserNotifications(event) {
    this.notification.getUserTokenNotifications().subscribe((reponse: any) => {

      if (reponse && reponse.notifications) {

        reponse.notifications.forEach(item => {
          if (item.description.toString().startsWith('Cher utilisateur, vous venez de payer la pénalité à la tontine')) {
            this.translate.get(['TONTINE_NOTIF_DESC1'])
              .subscribe(data => {
                item.description = data.TONTINE_NOTIF_DESC1 + ' ' + item.name_tontine;
              });
          }
          if (item.description.toString().startsWith('Cher utilisateur, vous venez de contribuer à la tontine')) {
            this.translate.get(['TONTINE_NOTIF_DESC2'])
              .subscribe(data => {
                item.description = data.TONTINE_NOTIF_DESC2 + ' ' + item.name_tontine;
              });
          }
          if (item.description.toString().startsWith('Vous avez reçu')) {
            var removeString = item.description.toString().replace(/Vous avez reçu/g, '');
            let removeStringFinal = removeString.toString().replace(/dans votre portemonnaie comme partage de la caisse pénalité./g, '');
            this.translate.get(['TONTINE_NOTIF_DESC3', 'TONTINE_NOTIF_DESC4'])
              .subscribe(data => {
                item.description = data.TONTINE_NOTIF_DESC3 + removeStringFinal + data.TONTINE_NOTIF_DESC4;
              });
          }
        });
        this.allData = reponse.notifications;
        this.filterData = this.allData;
        // Save to local storage
        // this.setToStorage(this.allData);
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
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getUserNotifications(event);
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
    this.storage.set('app-notif', data);
  }

  getFromStorage(): Promise<any> {
    return this.storage.get('app-notif');
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getUserNotifications(event);
  }


  // Get the data from session
  getDataFormStorage(event) {
    this.getFromStorage().then(data => {
      if (data && data.length > 0) {
        this.allData = data;
        this.filterData = this.allData;
        if (this.allData.length > this.nbItems) {
          this.notifications = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.notifications.push(this.allData[this.notifications.length]);
          }
        } else {
          this.notifications = this.allData;
        }
        this.loading = false;
        this.getUserNotifications(event);
      } else {
        this.getUserNotifications(event);
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
      this.getUserNotifications(null);
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

        } else if (this.notifications.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);

  }
}