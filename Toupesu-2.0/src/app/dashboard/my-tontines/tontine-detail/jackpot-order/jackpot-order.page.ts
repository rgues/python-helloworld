import { Component, OnInit, ViewChild } from '@angular/core';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { JackpotBeneficiaryPage } from './jackpot-beneficiary/jackpot-beneficiary.page';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UtilService } from 'src/app/shared/service/util.service';

interface JackpotList {
  id: number,
  name: string,
  email: string,
  phone: string,
  sharenbr: number,
  numero_part: number,
  hasJackpot: boolean,
  isAvaliste: boolean,
  isAdmin: boolean,
  weights: number
}

@Component({
  selector: 'app-jackpot-order',
  templateUrl: './jackpot-order.page.html',
  styleUrls: ['./jackpot-order.page.scss'],
})
export class JackpotOrderPage implements OnInit {
  tontineId: number;
  membersData: any[] = [];
  userData: any;
  loading: boolean;
  tontineUsersTemp: any;
  filterData: any;
  allData: any;
  nbItems: any;
  myTontine: any;
  seance: any;
  membres: any;
  avantDerniereSeance: any;
  members: JackpotList[] = [];
  jackpotList: any[] = [];
  currentTontine: any;
  loadingSave: boolean;
  currentSeance: any;
  previousSeance: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontine: TontineService,
    private tontinesData: TontineGlobalDataService,
    private translate: TranslateService,
    private modatCtrl: ModalController,
    private error: ErrorService,
    private ui: UiService,
    private util: UtilService
  ) {
    const tontineData = this.tontine.getCurrentTontineData();
    this.membres = tontineData.membres.liste_membre;
    this.currentSeance = tontineData.seance_courante;
    this.previousSeance = tontineData.avant_derniere_seance;
    this.currentTontine = tontineData;

    this.allData = [];
    this.filterData = [];
    this.nbItems = 10;
    this.loadingSave = false;
  }

  ngOnInit() {
    this.loading = true;
    this.getListOfUsers(null);
  }

  // Search a member
  searchForMber(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((member) => {
        return (member.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

  // Set the jackpot beneficiaries
  setJackpot() {
    this.modatCtrl
      .create({
        component: JackpotBeneficiaryPage,
        componentProps: {
          data: this.allData
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.data === 'success') {
            this.getListOfUsers(null);
          }
        });
      });
  }

  // Can edit Info 
  canEditInfo() {
    let canEdit = false;
    if (((!this.currentSeance && this.currentTontine.tontine.active === 0) || (!this.currentSeance && !this.previousSeance && this.currentTontine.tontine.active === 1) ||
      (this.currentSeance && this.currentSeance.numero_seance < 1 && this.currentTontine.tontine.active === 1)) && this.currentTontine.tontine.administrator === 1) {
      canEdit = true;
    }
    return canEdit
  }

  // Get the list of tontine users
  getListOfUsers(event) {
    this.tontine.getTontinesMembers(this.currentTontine.tontine.tontine_id).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        if (reponse && reponse.members && reponse.members.length > 0) {
          this.filterData = [];
          let index = 1;
          reponse.members.forEach(member => {
            if (member && this.tontinesData.memberNotIn(reponse.membre_ayant_deja_bouffe, member)) {
              this.filterData.push({
                id: member.id,
                name: member.firstname + ' ' + member.lastname,
                email: member.email,
                numero_part: member.numero_part,
                phone: member.phone,
                sharenbr: this.util.occurenceOfId(reponse.members, 'id', member.id),
                hasJackpot: false,
                isAvaliste: false,
                isAdmin: member.administrator && member.administrator === 1 ? true : false,
                weights: member.weight
              });
              index++;
            }
          });
          this.loading = false;
          this.filterData = this.util.orderByKey(this.filterData, 'weights');
          this.allData = this.filterData;
          if (this.allData.length > this.nbItems) {
            this.members = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.members.push(this.allData[this.members.length]);
            }
          } else {
            this.members = this.allData;
          }
        }
        this.jackpotList = reponse.membre_ayant_deja_bouffe;
      }

      this.loading = false;
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
  
      if (event) {
        event.target.complete();
      }
      if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getListOfUsers(event);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.loading = false;
        this.error.manageError(error);
      }
    });
  }

  // can show the jackpost message
  canShowMessage() {
    return this.members && this.members.length > 2 && this.currentTontine && this.currentTontine.tontine &&  this.currentTontine.tontine.administrator === 1;
  }

  // disable the reorder
  disableReorder() {
    return (this.members&&this.members.length === 1 || this.currentTontine && this.currentTontine.tontine &&  this.currentTontine.tontine.administrator === 0);
  }

  // show the reorder icon
  isAdmin() {
    return this.currentTontine && this.currentTontine.tontine &&  this.currentTontine.tontine.administrator === 1;
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getListOfUsers(event);
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

  // Reoder the item list
  reorderItems(ev) {
    // Permute the weigths
    if (this.members && this.members.length > 1) {
      const currentWeight = this.members[ev.detail.from].weights;
      this.members[ev.detail.from].weights = this.members[ev.detail.to].weights;
      this.members[ev.detail.to].weights = currentWeight;
      const itemMove = this.members.splice(ev.detail.from, 1);
      this.members.splice(ev.detail.to, 0, itemMove[0]);
      ev.detail.complete();
      // order the list
      this.members = this.util.orderByKey(this.members, 'weights');
    }
  }

  // Save the jacpot order
  saveJackpotOrder() {
    const listMembers = [];
    this.allData.forEach(data => {
      listMembers.push({ user_id: data.id, numero_part: data.numero_part, weight: data.weights });
    });

    this.jackpotList.forEach(data => {
      listMembers.push({ user_id: data.id, numero_part: data.numero_part, weight: data.weight });
    });

    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id,
      liste_membre: listMembers
    };
    this.loadingSave = true;
    this.tontine.orderMembersList(param).subscribe((reponse: any) => {
      this.loadingSave = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('ORDER_SUCCES_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.getListOfUsers(null);
      }
    }, error => {
   
      if (error && error.error) {


        if (error.error.remplir_tous_les_champs) {
          this.translate.get('DEBT_PARAMETER_NOTFOUND').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.loadingSave = false;
        }

        if (error.error.tontine_id_not_exist) {
          this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.loadingSave = false;
        }

        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.saveJackpotOrder();
            } else {
              this.loadingSave = false;
            }
          });
        }

      } else {
        this.loadingSave = false;
        this.error.manageError(error);
      }
    });
  }

}
