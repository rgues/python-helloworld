import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, ModalController, IonInfiniteScroll } from '@ionic/angular';
import { MemberMenuComponent } from './member-menu/member-menu.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { TontineErrorService } from '../../services/tontine-error.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  members: any[] = [];
  tontineId: number;
  membersData: any[] = [];
  userData: any;
  loading: boolean;
  tontineUsersTemp: any;
  activeMembers: any;
  filterData: any;
  allData: any;
  nbItems: any;
  myTontine: any;
  seance: any;
  membres: any;
  status: number;
  partialPaidMembers: any;
  avantDerniereSeance: any;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private popoverController: PopoverController,
    private tontine: TontineService,
    private tontinesData: TontineGlobalDataService,
    private error: ErrorService,
    private util: UtilService,
    private events: EventService,
    private tontineError: TontineErrorService,
    private userService: UserService,
    private modatCtrl: ModalController
  ) {
    const tontineData = this.tontine.getCurrentTontineData();
    this.tontineId = tontineData.tontine.tontine_id;
    this.myTontine = tontineData.tontine;
    this.status = this.myTontine.active;
    this.membres = tontineData.membres.liste_membre;
    this.seance = tontineData.seance_courante;
    this.avantDerniereSeance = tontineData.avant_derniere_seance;
    this.userData = this.userService.getUserData();
    this.allData = [];
    this.filterData = [];
    this.nbItems = 10;
    this.activeMembers = [];
    this.partialPaidMembers = [];
    this.events.subscribe('new-membre', () => {
      this.loading = true;
      this.refreSher(null);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getListOfUsers(null);
  }

  ionicViewDidEnter() {
    this.loading = true;
    this.getListOfUsers(null);
  }

   // Update the current user tontine
   updateCurrentUserTontine(tontineId) {
    this.tontine.getTontineDetail(tontineId, this.status).subscribe((reponse: any) => {
      if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
          this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
          const tontineData = this.tontine.getCurrentTontineData();
          this.tontineId = tontineData.tontine.tontine_id;
          this.myTontine = tontineData.tontine;
          this.membres = tontineData.membres.liste_membre;
          this.seance = tontineData.seance_courante;
      }
    }, error => {
      if (error && error.error && error.error.user_not_found){
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.updateCurrentUserTontine(tontineId);
          }
         });
    } else {
        this.error.manageError(error);
    }
    });
  }

  async openContextMenu(ev: any, mber: any) {
    const memberData = {
      member: mber,
      isAdmin: mber.administrator === 1  ? true: false,
      tontineId: this.tontineId,
      nbPart: this.getNumberPart(mber.id),
      nbPartMax : this.activeMembers.length
    };
    const popover = await this.popoverController.create({
      component: MemberMenuComponent,
      event: ev,
      componentProps: {
        selectedMber: memberData
      }
    });
    return await popover.present();
  }

  openAddMember() {
    this.modatCtrl
      .create({
        component: AddMemberComponent
      })
      .then(modalEl => modalEl.present());
  }

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

  // can add member
  canAddMember() {
    return this.myTontine.administrator === 1
    && (this.activeMembers && this.activeMembers.length < this.myTontine.nombre_part_max_tontine)
    && ((!this.seance && this.myTontine.active === 0)
        || (!this.seance && !this.avantDerniereSeance && this.myTontine.active === 1)
        || (this.seance && this.seance.numero_seance < 1 && this.myTontine.active === 1)
      );
  }

  // Get the list of tontine users
  getListOfUsers(event) {
    const current = this.tontine.getCurrentTontineData();
    this.tontine.getTontinesMembers(current.tontine.tontine_id).subscribe((reponse: any) => {

      console.log(reponse);
      if (reponse && reponse.members) {
        this.tontineUsersTemp = reponse.members;
        if (this.tontineUsersTemp && this.tontineUsersTemp.length > 0) {
          this.activeMembers = this.tontineUsersTemp.filter(data => { return data.active === 1 });
        }
        const members = [];
        this.tontineUsersTemp.forEach(member => {
          // Only active members and administrators can see the tontines
          if (member && this.tontinesData.memberNotInWithout(members, member.id) && (member.active === 1 || member.active === 0 &&  this.myTontine.administrator === 1)) {
            members.push({
              id: member.id,
              name: member.lastname || member.firstname ? member.firstname + ' ' + member.lastname : 'No name',
              phone: member.phone,
              email: member.email,
              sexe: member.sexe,
              active:  member.active,
              pays: member.pays,
              ville: member.ville,
              address: member.address,
              picture: member.picture,
              profession: member.profession,
              experience: member.experience,
              temporaire: member.temporaire,
              administrator: member.administrator,
              device_id: member.device_id,
              device_name: member.device_name,
              montant_cotisation: member.montant_cotisation || 0,
              pourcentage_cotisation: member.pourcentage_cotisation || 0,
              montant_restant_a_cotiser: member.montant_restant_a_cotiser || 0,
              numero_part: member.numero_part,
              caution: 'none'
            });
          }
        });

        this.filterData = this.util.orderByKey(members,'name');
        this.filterData = this.util.orderByKeyUp(members,'active');
        this.allData = this.filterData;
        if (this.allData.length > this.nbItems) {
          this.members = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.members.push(this.allData[this.members.length]);
          }
        } else {
          this.members = this.allData;
        }

        // check if a member has paid his caution
        if (this.checkTontineCaution(current.tontine) && current.cycle_courant && current.cycle_courant.id) {
            this.getPartialPaidCautionMember(current.cycle_courant.id,event);
        } else {
          this.loading = false;
        }

      }
      this.loading = false;
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
      if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getListOfUsers(event);
              } else {
                this.loading = false;
              }
        });
      } else {
        this.error.manageError(error);
      }
    }
    );
  }

   // check if a tontine has a caution
   checkTontineCaution(tontineData: any) {
    return this.tontinesData.hasTontineCaution(tontineData);
  }


    // get members who paid full caution
    getPartialPaidCautionMember(cycleId: any, event: any) {
      this.tontine.getMembersPaidPartialCautions(cycleId).subscribe(data => {
        if (data && data.message === 'success') {
          this.partialPaidMembers = data.liste_members;
          console.log(this.partialPaidMembers);

          this.filterData.forEach((data,index, arr)=> {
              this.filterData[index].caution = 1;
           });

          this.partialPaidMembers.forEach(member => {
            this.filterData.forEach((data,index, arr)=> {
                  if (member.infos_user.id === data.id) {
                    this.filterData[index].caution = 0;
                  }
            });
          });

          this.allData = this.filterData;
        }
        if (event) {
          event.target.complete();
        }
        this.loading = false;
      }, error => {
        if (event) {
          event.target.complete();
        }

        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.error.renewSession().then((session: any) => {
              if (session && session.result === "OK") {
                this.getPartialPaidCautionMember(cycleId, event);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.loading = false;
            this.tontineError.manageTontineError(error)
          }
        } else {
          this.loading = false;
          this.error.manageError(error);
        }
      });
    }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.updateCurrentUserTontine(this.tontineId);
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

  // Get the number part of a user
  getNumberPart(memberId: number) {
    return this.tontinesData.getNumberPart(this.tontineUsersTemp, memberId)
  }

  // has the user contribute
  hasContribute(members: any, memberId: number) {
    return this.tontinesData.hasContribute(members,memberId);
  }

}
