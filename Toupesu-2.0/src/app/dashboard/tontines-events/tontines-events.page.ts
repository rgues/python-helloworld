import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonInfiniteScroll } from '@ionic/angular';
import { TontinesEventsService } from './services/tontines-events.service';
import { TontinesEventsMenuComponent } from './tontines-events-menu/tontines-events-menu.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/shared/service/location.service';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { UserService } from '../user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { StorageData } from 'src/app/shared/service/storage.service';

@Component({
  selector: 'app-tontines-events',
  templateUrl: './tontines-events.page.html',
  styleUrls: ['./tontines-events.page.scss'],
})
export class TontinesEventsPage implements OnInit {

  myEvents: any[];
  states: any[] = [];
  defaultImage = 'assets/default-event.jpg';
  loading: boolean;
  user: any;
  filter: any;

  // Pagination data
  nbItems: number;
  SearchEventUser: boolean;
  SearchEventUserAll: boolean;
  allData: any;
  currentDate: Date;
  backService: any;
  countryIndex: any;
  filterData: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontineEventService: TontinesEventsService,
    private popoverController: PopoverController,
    private error: ErrorService,
    private storage: StorageData,
    private event: EventService,
    private router: Router,
    private paymentData: PaymentGlobalDataService,
    private userService: UserService,
    private location: LocationService,
    private localStorage: LocalStorageService,
    private util: UtilService
  ) {
    this.user = this.userService.getUserData();
    this.loading = false;
    this.filter = true;
    if (this.localStorage.getItem('new-event') === 'yes') {
      this.filter = false;
      this.localStorage.setItem('new-event', 'no');
    }
    this.countryIndex = -1;
    this.filterData = [];
    this.myEvents = [];
    this.nbItems = 10;
    this.allData = [];
    this.backService = null;
    this.currentDate = new Date();
    this.SearchEventUser = true;
    this.SearchEventUserAll = false;
    this.event.subscribe('new-event', () => {
      this.refreSherData(null);
    });
  }

  ngOnInit() {
    this.getCountries(false);
    this.getDataFormStorage();
  }

  // Open the contextual menu
  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: TontinesEventsMenuComponent,
      event: ev
    });
    return await popover.present();
  }

  // Filter the list of tontines
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((tontine) => {
        return (tontine.title ? tontine.title.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          tontine.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.myEvents = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.myEvents.push(this.allData[this.myEvents.length]);
      }
    } else {
      this.myEvents = this.allData;
    }
  }

  // Get country public events
  getCountryEvent(refresher) {
    if (this.countryIndex === -1) {
      this.location.getCurrentCountryInfo(refresher).then((CurrCountry: any) => {
        // Get the current  active location country events
        if (CurrCountry && CurrCountry.settings && CurrCountry.settings.active === 1) {
          let index = 0;
          this.states.forEach(country => {
            if (country && country.country_id === CurrCountry.settings.country_id) {
              this.countryIndex = index;
              this.getAllTontinesEvent(refresher);
            }
            index++;
          });
        } else {
          let index = 0;
          // Get the current  default location country events
          this.states.forEach(country => {
            if (country && country.default_country === 'yes') {
              this.countryIndex = index;
              this.getAllTontinesEvent(refresher);
            }
            index++;
          });
        }
      }).catch(error => {
        if (error) {
          this.error.manageError(error);
        }
      });
    } else {
      if (this.states && this.states.length > 0) {
        // Get the current country event
        this.getAllTontinesEvent(refresher);
      }
    }
  }

  // Get the list of countries
  getCountries(refresher: boolean) {
    this.location.getAllCountries(refresher).then((countries: any) => {
      this.states = this.paymentData.formatCountriesData(countries);
    });
  }

  // choose with service to call
  onChangeToggle(enable: boolean, refreSher: any) {
    if (refreSher) {
      this.infiniteScroll.disabled = false;
    }
    if (enable) {
      this.getAllTontinesEvent(refreSher);
    } else {
      this.getUserTontinesEventDefault(refreSher);
    }
  }

  // change the visibility
  changeVisibility(enable: any) {
    this.loading = true;
    this.myEvents = [];
    this.filterData = [];
    this.allData = [];
    this.onChangeToggle(enable, null);
  }

  // format events data
  formatEventsData(events: any[]) {
    const countryEvents = [];
    events.forEach(event => {
      if (this.states && this.states.length === 0 || this.states[this.countryIndex] &&
        this.states[this.countryIndex].country_key === event.code_country || this.countryIndex === -1) {
        countryEvents.push(event);
      }
    });
    this.allData = this.util.orderByTontineEventDate(countryEvents);
    this.filterData = this.allData;
    this.setToStorage(this.allData);
    if (this.allData.length > this.nbItems) {
      this.myEvents = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.myEvents.push(this.allData[this.myEvents.length]);
      }
    } else {
      this.myEvents = this.allData;
    }
  }

  // Update the current country on search form
  updateCurrentCountryEvents() {
    this.infiniteScroll.disabled = false;
    this.loading = true;
    if (this.filterData && this.filterData.length > 0) {
      this.formatEventsData(this.filterData);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    } else {
      this.onChangeToggle(this.filter, null);
    }
  }

  // Get the list of events tontines by default
  getUserTontinesEventDefault(refreSher) {
    this.tontineEventService.getMyTontineEventDefault().subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        if (reponse && reponse.liste) {
          this.formatEventsData(reponse.liste);
        }

        if (refreSher) {
          setTimeout(() => {
            this.infiniteScroll.disabled = false;
            refreSher.target.complete();

          }, 2000);
        }
      }
    }, error => {

      if (refreSher) {
        setTimeout(() => {
          this.infiniteScroll.disabled = false;
          refreSher.target.complete();

        }, 2000);
      }
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getUserTontinesEventDefault(refreSher);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Get the list user tontines
  getAllTontinesEvent(refreSher) {
    this.tontineEventService.getAllCountriesTontineEvent().subscribe((reponse: any) => {

      if (reponse && reponse.message === 'success') {
        if (reponse && reponse.liste) {
          this.formatEventsData(reponse.liste);
        }
      }
      if (refreSher) {
        this.infiniteScroll.disabled = false;
        setTimeout(() => {
          refreSher.target.complete();
        }, 2000);
      }
      this.loading = false;
    }, error => {
      if (refreSher) {
        this.infiniteScroll.disabled = false;
        setTimeout(() => {
          refreSher.target.complete();
        }, 2000);
      }
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getAllTontinesEvent(refreSher);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Get the data from session
  getDataFormStorage() {
    this.myEvents = [];
    this.getFromStorage().then(data => {
      if (data && data.length > 0) {
        this.allData = data;
        this.filterData = this.allData;
        if (this.allData.length > this.nbItems) {
          this.myEvents = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.myEvents.push(this.allData[this.myEvents.length]);
          }
        } else {
          this.myEvents = this.allData;
        }
        this.onChangeToggle(this.filter, null);
      } else {
        this.loading = true;
        this.onChangeToggle(this.filter, null);
      }

    });
  }

  // set to local Stoirage
  setToStorage(data: any) {
    if (this.filter) {
      this.storage.set('app-events', data);
    } else {
      this.storage.set('app-events-user', data);
    }
  }

  getFromStorage(): Promise<any> {
    if (this.filter) {
      return this.storage.get('app-events');
    } else {
      return this.storage.get('app-events-user');
    }
  }

  // Refresh the list
  refreSherData(event) {
    this.infiniteScroll.disabled = false;
    this.onChangeToggle(this.filter, event);
  }

  // Launch the backgroud service
  ionicViewDidEnter() {
    this.backgroundService();
  }

  // Backgroung service
  backgroundService() {
    this.backService = setInterval(() => {
      this.onChangeToggle(this.filter, null);
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
        if (this.myEvents.length < this.allData.length) {
          this.myEvents.push(this.allData[this.myEvents.length]);
        } else if (this.myEvents.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Go to the event detail page
  gotoEventDetail(event: any) {
    this.tontineEventService.setCurrentTontineEventData(event);
    this.router.navigate(['/', 'dashboard', 'tontines-events', event.id]);
  }

}
