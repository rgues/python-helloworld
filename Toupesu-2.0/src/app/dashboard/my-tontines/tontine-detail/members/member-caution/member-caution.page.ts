import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, ModalController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { EventService } from 'src/app/shared/service/events.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { ContributionService } from '../../../services/contribution.service';
import { TontineGlobalDataService } from '../../../services/tontine-global-data.service';
import { TontineService } from '../../../services/tontine.service';
import { AddMemberComponent } from '../add-member/add-member.component';
import { MemberMenuComponent } from '../member-menu/member-menu.component';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-member-caution',
  templateUrl: './member-caution.page.html',
  styleUrls: ['./member-caution.page.scss'],
})
export class MemberCautionPage implements OnInit {

  fullPaidMembers: any;
  partialPaidMembers: any;
  members: any;
  allData: any;
  filterData: any;
  nbItems: number;
  tontineId: any;
  loading: boolean;
  currentTontine: any;
  currentUser: any;
  membres: any;
  loadingPay: boolean;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontine: TontineService,
    private error: ErrorService,
    private tontineError: TontineErrorService,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private contribution: ContributionService,
    private tontinesData: TontineGlobalDataService,
    private event: EventService,
    private userService: UserService,
    private ui: UiService,
    private translate: TranslateService,
    private util: UtilService,
    private modatCtrl: ModalController
  ) {
    this.fullPaidMembers = [];
    this.partialPaidMembers = [];
    this.members = [];
    this.allData = [];
    this.nbItems = 10;
    this.filterData = [];
    this.loading = true;
    this.loadingPay = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentUser = this.userService.getUserData();
    this.membres = this.currentTontine.membres.liste_membre;
    this.tontineId = this.currentTontine.tontine.tontine_id;
  }

  ngOnInit() {
    this.getMembers(null);
  }

  // Get the number part of a user
  getNumberPart(memberId: number) {
    return this.tontinesData.getNumberPart(this.members, memberId)
  }

  // has the user contribute
  hasContribute(members: any, memberId: number) {
    return this.tontinesData.hasContribute(members, memberId);
  }

  memberIsAdmin(members: any, memberId: number) {
    return this.tontinesData.isMemberAdmin(members, memberId);
  }

  // get the active members parts
  getActiveMembersPart(listPartsMembers: any, activeMembers: any[]) {
    let nbPart = 0;
    activeMembers.forEach(member => {
      nbPart += this.tontinesData.getNumberPart(listPartsMembers, member.id);
    });
    return nbPart;
  }

  // open the member option 
  async openContextMenu(ev: any, mber: any) {
    const memberData = {
      member: mber,
      isAdmin: this.memberIsAdmin(this.membres, mber.id),
      tontineId: this.tontineId,
      nbPart: this.getNumberPart(mber.id),
      nbPartMax: this.getActiveMembersPart(this.membres, this.fullPaidMembers)
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

  // check if a member it is an admin
  isAdmin(tontineData: any) {
    return this.tontinesData.isAdministrator(tontineData);
  }

  // check if a user can add member
  canAddMember() {
    let ican = false;
    if (this.isAdmin(this.currentTontine.tontine)
      && (this.fullPaidMembers && this.fullPaidMembers.length < this.currentTontine.tontine.nombre_part_max_tontine)
      && ((!this.currentTontine.seance_courante && this.currentTontine.tontine.active === 0)
        || (!this.currentTontine.seance_courante && !this.currentTontine.avantDerniereSeance && this.currentTontine.tontine.active === 1)
        || (this.currentTontine.seance_courante && this.currentTontine.seance_courante.numero_seance < 1 && this.currentTontine.tontine.active === 1)
      )
    ) {
      ican = true;
    }
    return ican;
  }

  // search a member
  searchForMber(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((member) => {
        member.name = member.firstname + ' ' + member.lastname;
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

  // get members
  getMembers(event: any) {
    const currentTontine = this.tontine.getCurrentTontineData();
    if (currentTontine && currentTontine.cycle_courant) {
      this.getFullPaidCautionMember(currentTontine.cycle_courant.id, event);
    } else {
      this.loading = false;
    }
  }

  // format the members response
  formatResponseData(members: any, event: any) {
    this.filterData = this.util.orderByKey(members, 'name');
    this.filterData = this.util.orderByKeyUp(members, 'active');
    this.allData = this.filterData;
    if (this.allData.length > this.nbItems) {
      this.members = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.members.push(this.allData[this.members.length]);
      }
    } else {
      this.members = this.allData;
    }

    if (event) {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }
  }

  formatMemberData(members: any[], statut: number) {
    for (let i = 0; i < members.length; i++) {
      const total_amount_to_pay = members[i].total_amount_to_pay;
      const amount_paid = members[i].amount_paid;
      const rest_amount_to_pay = members[i].rest_amount_to_pay;
      if (statut === 0) {
        members[i] = members[i].infos_user;
        members[i].total_amount_to_pay = total_amount_to_pay;
        members[i].amount_paid = amount_paid;
        members[i].rest_amount_to_pay = rest_amount_to_pay;
      }
      members[i].active = statut;
      members[i].name = members[i].firstname || members[i].lastname ? members[i].firstname + ' ' + members[i].lastname : 'No name';
    }
    return members;
  }

  // get the caution statut
  getStatusCaution(member: any) {
    if (parseFloat(member.rest_amount_to_pay ? member.rest_amount_to_pay : 0) > 0) {
      return 'M_ADVANCE_TEXT';
    } else if (parseFloat(member.amount_paid ? member.amount_paid : 0) + parseFloat(member.rest_amount_to_pay ? member.rest_amount_to_pay : 0) === parseFloat(member.total_amount_to_pay ? member.total_amount_to_pay : 0)) {
      return 'M_PAID_TEXT';
    } else {
      return 'M_UNPAID_TEXT';
    }
  }

  // get members who paid full caution
  getFullPaidCautionMember(cycleId: any, event: any) {
    this.tontine.getMembersPaidFullCautions(cycleId).subscribe(data => {
      if (data && data.message === 'success') {
        this.fullPaidMembers = data.liste_members;
        this.fullPaidMembers = this.formatMemberData(this.fullPaidMembers, 1);
        this.formatResponseData(this.fullPaidMembers, event);
      }
      this.getPartialPaidCautionMember(cycleId, event);
    }, error => {
      if (event) {
        event.target.complete();
      }
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.error.renewSession().then((session: any) => {
            if (session && session.result === "OK") {
              this.getFullPaidCautionMember(cycleId, event);
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

  // get members who paid full caution
  getPartialPaidCautionMember(cycleId: any, event: any) {
    this.tontine.getMembersPaidPartialCautions(cycleId).subscribe(data => {
      if (data && data.message === 'success') {
        this.partialPaidMembers = data.liste_members;
        this.partialPaidMembers = this.formatMemberData(this.partialPaidMembers, 0);
        this.formatResponseData(this.fullPaidMembers.concat(this.partialPaidMembers), event);
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
              this.getFullPaidCautionMember(cycleId, event);
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
    this.getMembers(event);
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

  // pay the cation
  payCaution(currentTontine: any, cautionAmount: number) {
    const param = {
      cycle_id: currentTontine.cycle_courant.id,
      amount: cautionAmount
    };
    this.loadingPay = true;
    this.translate.get('TOPUP_TEXT1').subscribe(trans => {
      this.ui.presentLoading(trans);
    });

    this.contribution.payMemberCaution(param).subscribe((reponse: any) => {

      if (reponse && reponse.message === 'success') {
        this.translate.get('PAY_CAUTION_RESULT_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.loading = true;
        this.event.publish('cautionPaid');
        this.getMembers(null);
      }
      this.loadingPay = false;
      this.ui.dismissLoading();
    }, error => {

      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.error.renewSession().then((session: any) => {
            this.ui.dismissLoading();
            if (session && session.result === "OK") {
              this.payCaution(currentTontine, cautionAmount);
            } else {
              this.loadingPay = false;
            }
          });
        } else {
          this.loadingPay = false;
          this.ui.dismissLoading();
          this.tontineError.manageTontineError(error)
        }
      } else {
        this.loadingPay = false;
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }

  // show option to pay previous seance
  async canPayCaution(translations: string[], currentTontine: any, cautionAmount: number) {
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      message: `${translations[1]}`,
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: `${translations[3]}`,
          handler: () => {
            this.payCaution(currentTontine, cautionAmount);
          }
        }
      ]
    });
    await alert.present();
  }

  // confim Payment
  confirmCautionPin(currentTontine: any, cautionAmount: number) {
    const translations = [];
    this.translate.get(['PAY_CAUTION_TEXT', 'PAY_CAUTION_OK_MSG', 'CANCEL_TEXT', 'YES_TEXT'],
      { amount: cautionAmount, currency: currentTontine.tontine.monnaie }).subscribe(trans => {
        translations.push(trans.PAY_CAUTION_TEXT);
        translations.push(trans.PAY_CAUTION_OK_MSG);
        translations.push(trans.CANCEL_TEXT);
        translations.push(trans.YES_TEXT);
        this.canPayCaution(translations, currentTontine, cautionAmount);
      });
  }

}
