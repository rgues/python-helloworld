import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ContributionService } from '../../services/contribution.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  periodForm: FormGroup;
  currentTontine: any;
  typesTontines: any;
  tontineId: any;
  user: any;
  tontineCountryName: string;
  tontineFrequencyName: string;
  tontineTypeName: string;
  loading: boolean;
  tontinesHistory: any;
  transactionType: string;
  transactionFlux: string;
  transactionsTemp: any;
  currentDate: Date;
  allData: any;
  backService: any;
  nbItems: number;
  tontinId: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private fb: FormBuilder,
    private tontine: TontineService,
    private util: UtilService,
    private dateService: DateserviceService,
    private events: EventService,
    private storage: StorageData,
    private error: ErrorService,
    private userService: UserService,
    private contribution: ContributionService,
    private constant: ConstantService
  ) {
    this.transactionType = '';
    this.transactionFlux = '';
    this.loading = false;
    this.tontinesHistory = [];
    this.typesTontines = [];
    this.transactionsTemp = [];
    this.tontineCountryName = '';
    this.tontineFrequencyName = '';
    this.tontineTypeName = '';
    this.tontinId = this.currentTontine ? this.currentTontine.tontine.tontine_id : '';
    this.currentDate = new Date();
    this.allData = [];
    this.nbItems = 10;
    this.backService = null;
    this.events.subscribe('new-tontine', () => {
      this.loading = true;
      this.refreSher(null);
    });
    this.user = this.userService.getUserData();
    this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {
    this.initPeriodForm();
    this.loading = true;
    this.getDataFormStorage(null);
  }

  // Init form
  initPeriodForm() {
    this.periodForm = this.fb.group({
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required]
    });
  }

  get startOn() {
    return this.periodForm.get('dateStart');
  }

  get endOn() {
    return this.periodForm.get('dateEnd');
  }

  // Get the reason of transaction
  getTransactionType(reason: string) {
    return this.constant.getTransactionReason(reason);
  }

  // Get the transaction type
  getTransactionFlux(type: string) {
    return this.constant.getTransactionType(type);
  }

  // Filter the history by date
  filterByDate(formData: any) {
    this.infiniteScroll.disabled = false;
    this.loading = true;
    const filterResult = [];
    const begin = this.dateService.formatDateTiret(formData.dateStart);
    const end = this.dateService.formatDateTiret(formData.dateEnd);
    const DateBegin = new Date(begin);
    const DateEnd = new Date(end);
    this.transactionsTemp.forEach(trans => {
      if (trans.updated_at) {
        const dateTrans = new Date(this.dateService.formatDateTiret(trans.updated_at));
        if (trans && DateBegin <= dateTrans && dateTrans <= DateEnd) {
          filterResult.push(trans);
        }
      }

    });
    setTimeout(() => {
      this.loading = false;
    }, 5000);

    this.allData = filterResult;
    if (this.allData.length > this.nbItems) {
      this.tontinesHistory = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
      }
    } else {
      this.tontinesHistory = this.allData;
    }
  }

  // Get the list history tontines
  getHistoryTontines(event) {
    const tontineData = this.tontine.getCurrentTontineData();
    this.contribution.historiqueTransactionTontine(tontineData.tontine.tontine_id).subscribe((reponse: any) => {

      if (reponse && reponse.trace) {
        if (reponse && reponse.trace) {
          this.allData = this.util.oderByNotificationDate(reponse.trace);
          this.transactionsTemp = reponse.trace;
          // Save to local storage
          // this.setToStorage(this.allData);
          if (this.allData.length > this.nbItems) {
            this.tontinesHistory = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
            }
          } else {
            this.tontinesHistory = this.allData;
          }
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
            this.getHistoryTontines(event);
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
    this.storage.set('app-tontine-trans', data);
  }

  getFromStorage(): Promise<any> {
    return this.storage.get('app-tontine-trans');
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getHistoryTontines(event);
  }

  // Get the data from session
  getDataFormStorage(event) {
    this.getFromStorage().then(data => {
      if (data && data.length > 0) {
        this.allData = data;
        if (this.allData.length > this.nbItems) {
          this.tontinesHistory = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
          }
        } else {
          this.tontinesHistory = this.allData;
        }
        this.loading = false;
        this.getHistoryTontines(event);
      } else {
        this.getHistoryTontines(event);
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
      this.getHistoryTontines(null);
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
        if (this.tontinesHistory.length < this.allData.length) {
          this.tontinesHistory.push(this.allData[this.tontinesHistory.length]);
        } else if (this.tontinesHistory.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

}
