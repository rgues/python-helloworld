import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonInfiniteScroll } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { MyTontinesMenuComponent } from './my-tontines-menu/my-tontines-menu.component';
import { Router } from '@angular/router';
import { TontineService } from './services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { EncheresService } from 'src/app/shared/service/encheres.service';
import { TranslateService } from '@ngx-translate/core';
import { ContributionService } from './services/contribution.service';
import { TontineGlobalDataService } from './services/tontine-global-data.service';
import { EventService } from 'src/app/shared/service/events.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { UserService } from '../user/service/user.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-my-tontines',
  templateUrl: './my-tontines.page.html',
  styleUrls: ['./my-tontines.page.scss'],
})
export class MyTontinesPage implements OnInit {

  myTontines: any;
  defaultListTontines: any;
  activelistTontines: any;
  // Pagination data
  totalPages: number;
  nbItems: number;
  nbItemsByPage: number;
  currentPage: number;
  numero: number;
  membersList: any;
  user: any;
  nbPartMember: any;
  canContribute: boolean[];
  loading: boolean;
  languageTranslation: any;
  backService: any;
  allData: any;
  currentDate: any;
  filterData: any;
  currentAmount: any;
  isAdmin: boolean;
  dateSeance: string;
  listTontinesBid: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  static canConnect: any[]

  constructor(
    private tontine: TontineService,
    private tontinesData: TontineGlobalDataService,
    private event: EventService,
    private contribution: ContributionService,
    private translate: TranslateService,
    private userService: UserService,
    private enchere: EncheresService,
    private router: Router,
    public popoverController: PopoverController,
    private error: ErrorService,
    private storage: StorageData,
    private util: UtilService
  ) {
    this.myTontines = [];
    this.listTontinesBid = [];
    this.totalPages = 0;
    this.nbItems = 10;
    this.membersList = [];
    this.user = this.userService.getUserData();
    this.nbPartMember = [];
    this.canContribute = [];
    this.loading = false;
    this.backService = null;
    this.allData = [];
    this.currentDate = new Date();
    this.currentAmount = [];
    this.event.subscribe('new-tontine', () => {
      this.infiniteScroll.disabled = false;
      this.getUserTontines(null);
    });
    this.isAdmin = false;
    this.filterData = [];
    MyTontinesPage.canConnect = [];
  }

  ngOnInit() {
    this.loading = true;
    this.getUserTontines(null);
  }

  // Go to the tontine detail
  goTotontineDetail(data: any) {
    this.tontine.setCurrentTontineData(data);
    this.router.navigateByUrl('/dashboard/my-tontines/' + data.tontine.tontine_id);
  }

  // get the tontine seance date
  getSeanceDate(tontineData: any) {
    let seance = '';
    this.translate.get('TONTINE_LIST_CONFIG').subscribe(trans => {
      this.dateSeance = trans;
    });

    if (tontineData && !tontineData.seance_courante) {
      this.dateSeance = tontineData.tontine.date_debut;
      this.dateSeance = formatDate(this.dateSeance, 'mediumDate', 'en-us');
    }

    if (tontineData && tontineData.seance_courante) {
      this.dateSeance = tontineData.seance_courante.date_debut.split(' ')[0];
      this.dateSeance = formatDate(this.dateSeance, 'mediumDate', 'en-us');
    }

    if (tontineData && tontineData.tontine.active === 0) {
      this.translate.get('CLOSE_TONTINE').subscribe(trans => {
        this.dateSeance = trans;
      });
    }
    seance = this.dateSeance;

    return seance;
  }

  // can contribute for seance
  canContributeSeance(memberList) {
    return this.tontinesData.canContributeSeance(memberList,this.user.id);
  }

  // Get the amount of contribution of the seance
  getAmountContributionSeance(memberList: any, shareAmount: any) {
    return this.tontinesData.getAmountContributionSeance(memberList, shareAmount,this.user.id);
  }

  // Format the bid data
  formatBidData(tontines: any[]) {
    let index = 0;
    this.listTontinesBid = [];

    tontines.forEach(() => {
      this.listTontinesBid.push([]);
    });

    while (index < tontines.length) {
      if (tontines[index].tontine && tontines[index].tontine.drawingtype_id === 3 && tontines[index].seance_courante !== null) {
        this.contribution.getDataMembresAyantBouffe(tontines[index].seance_courante.cycle_id, tontines[index].tontine.tontine_id, tontines[index], index)
        .then((reponse: any) => {

          const listPart = reponse.tontine && reponse.tontine.membres && reponse.tontine.membres.liste_membre ?  reponse.tontine.membres.liste_membre : []
          const userId = this.user.id;
          const members = reponse.ans && reponse.ans.membres ? reponse.ans.membres : [];
          const numeroPart =  this.tontinesData.getCurrentBidPart(listPart,userId,members);

          this.currentAmount.push({ somme: 0, seanceID: reponse.tontine.seance_courante.id, userID: 0, numero_lot: 0 });

          MyTontinesPage.canConnect[reponse.index] = this.enchere.connexion(reponse.tontine.seance_courante.id);

          this.enchere.memberConnection(userId, numeroPart, reponse.tontine.seance_courante.id, reponse.tontine.tontine.numberlot);
          let i = 1;
          while (i <= reponse.tontine.tontine.numberlot) {
            this.enchere.getWinnerCurrent(reponse.tontine.seance_courante.id + '' + i).subscribe(data => {

              if (data !== null) {
                this.currentAmount.unshift({ somme: JSON.parse(data).somme, seanceID: JSON.parse(data).seance_id, userID: JSON.parse(data).user_id, numero_lot: JSON.parse(data).numero_lot });
                this.currentAmount = this.currentAmount.filter((elem, index, self) => self.findIndex(
                  (t) => { return ((t.seanceID === elem.seanceID && t.numero_lot !== 0)) || (t.seanceID === elem.seanceID && t.numero_lot === elem.numero_lot) }) === index);

              }
            });
            i++;
          }
          this.listTontinesBid[reponse.index] = this.currentAmount;
        });
      } else {
        this.listTontinesBid[index] = [];
      }
      index++;
    }
  }

  // Get the list user tontines
  getUserTontines(refreSher: any) {
    this.tontine.getMyTontine().subscribe((reponse: any) => {

      if (reponse && reponse.message === 'success') {
        if (reponse && reponse.liste_tontine) {
          this.listTontinesBid = [];

          let activeTontine = reponse.liste_tontine.filter(data => {
            return data.tontine.active === 1;
          });
          activeTontine = this.util.oderByTontineDate(activeTontine);
          let inactiveTontine = reponse.liste_tontine.filter(data => {
            return data.tontine.active === 0;
          });
          inactiveTontine = this.util.oderByTontineDate(inactiveTontine);
          this.allData = [];
          this.allData = this.allData.concat(activeTontine);
          this.allData = this.allData.concat(inactiveTontine);

          this.formatBidData(this.allData);

          this.filterData = this.allData;
          this.setToStorage(this.allData);
          if (this.allData.length > this.nbItems) {
            this.myTontines = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.myTontines.push(this.allData[this.myTontines.length]);
            }
          } else {
            this.myTontines = this.allData;
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
            this.getUserTontines(refreSher);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.getDataFormStorage();
        this.error.manageError(error);
      }
    });
  }

  // Get the data from session
  getDataFormStorage() {
    this.getFromStorage().then(data => {
      if (data && data.length > 0) {
        this.allData = data;
        if (this.allData.length > this.nbItems) {
          this.myTontines = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.myTontines.push(this.allData[this.myTontines.length]);
          }
        } else {
          this.myTontines = this.allData;
        }
      } else {
        this.myTontines = [];
      }
      this.loading = false;
    });
  }

  // set to local Stoirage
  setToStorage(data: any) {
    this.storage.set('app-tontines', data);
  }

  getFromStorage(): Promise<any> {
    return this.storage.get('app-tontines');
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getUserTontines(event);
  }

  // Launch the backgroud service
  ionicViewDidEnter() {
    this.backgroundService();
  }

  // Backgroung service
  backgroundService() {
    this.backService = setInterval(() => {
      this.getUserTontines(null);
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
        if (this.myTontines.length < this.allData.length) {
          this.myTontines.push(this.allData[this.myTontines.length]);
        } else if (this.myTontines.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MyTontinesMenuComponent,
      event: ev
    });
    return await popover.present();
  }

  // Filter the list of tontines
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((data) => {
        return (data.tontine.name ? data.tontine.name.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          data.tontine.name.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.myTontines = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.myTontines.push(this.allData[this.myTontines.length]);
      }
    } else {
      this.myTontines = this.allData;
    }
  }

  // change the visibility
  changeVisibility(enable: any) {
    this.infiniteScroll.disabled = false;
    this.loading = true;
    if (enable) {
      this.allData = [];
      this.filterData.forEach((data) => {
        if (data.tontine.administrator === 1) {
          this.allData.push(data);
        }
      });
    } else {
      this.allData = this.filterData;
    }

    if (this.allData.length > this.nbItems) {
      this.myTontines = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.myTontines.push(this.allData[this.myTontines.length]);
      }
    } else {
      this.myTontines = this.allData;
    }
    setTimeout(() => {
      this.loading = false;
    }, 200)
  }


  // Go to tontine demo
  goToTontineDemo() {
    this.router.navigate(['dashboard','my-tontines','new-demo']);
  }

}
