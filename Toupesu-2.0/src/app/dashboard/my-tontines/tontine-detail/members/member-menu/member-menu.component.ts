import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { UpdateShareComponent } from '../update-share/update-share.component';
import { UpdateRoleComponent } from '../update-role/update-role.component';
import { DeleteComponent } from '../delete/delete.component';
import { ReduceShareComponent } from '../reduce-share/reduce-share.component';
import { TontineService } from '../../../services/tontine.service';
import { EnableMemberComponent } from '../enable-member/enable-member.component';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-member-menu',
  templateUrl: './member-menu.component.html',
  styleUrls: ['./member-menu.component.scss'],
})
export class MemberMenuComponent implements OnInit {

  @Input() selectedMber: any;
  myTontine: any;
  userData: any;
  curentMemberParams: any;
  user: any;
  seance: any;
  cycle: any;
  previousSeance: any;
  membersList: any;

  constructor(
    public popoverController: PopoverController,
    private userService: UserService,
    public tontine: TontineService,
    public navParams: NavParams
  ) { 
    const tontineData = this.tontine.getCurrentTontineData();
    this.myTontine = tontineData.tontine;
    this.membersList = tontineData.membres.liste_membre;
    this.userData = this.userService.getUserData();
    this.curentMemberParams = this.navParams.get('selectedMber');
    this.user = this.curentMemberParams.member;
    this.seance = tontineData.seance_courante;
    this.cycle = tontineData.cycle_courant;
    this.previousSeance = tontineData.avant_derniere_seance;
  }

  ngOnInit() { }

  // Can edit share 
  canEditShare() {
    let canEdit = false;
    if (((!this.seance && this.myTontine.active === 0) || (!this.seance && !this.previousSeance && this.myTontine.active === 1) || 
      (this.seance && this.seance.numero_seance < 2 && this.myTontine.active === 1)) && this.myTontine.administrator === 1) {
        canEdit = true;
    }
    return canEdit
  }

  // can enable member
  canEnable() {
    let canEnable = false;
    if ((this.cycle &&  this.myTontine.active === 1 && (!this.seance || this.seance && this.seance.numero_seance < 2 )) 
    && this.myTontine.administrator === 1 && this.myTontine.user_id && this.myTontine.user_id === this.userData.id && this.user.id !== this.myTontine.user_id) {
      canEnable = true;
    }
    return canEnable
  }

  // Can update role
  canUpdateRole() {  
    let canUpadte = false;
    if (this.myTontine.number_admin_current < this.myTontine.number_admin_max && this.myTontine.administrator === 1 
       && this.myTontine.user_id && this.myTontine.user_id === this.userData.id && this.user.id !== this.myTontine.user_id) {
      canUpadte = true;
    }
    return canUpadte ;
  }


  // can add share 
  canAddShare() {
    let canAdd = false;
      if (this.canEditShare() &&  this.curentMemberParams.nbPart < this.myTontine.nombre_part_max_membre 
      && this.curentMemberParams.nbPartMax < this.myTontine.nombre_part_max_tontine) {
        canAdd = true;
      }
    return canAdd;
  }


  // Can remove share
  canRemoveShare() {
    let canRemove = false;
    if (this.canEditShare() && this.curentMemberParams.nbPart > 1 &&  this.curentMemberParams.nbPart <= this.myTontine.nombre_part_max_membre) {
      canRemove = true;
    }
    return canRemove;
  }

  async onSharePopover() {
    const popover = await this.popoverController.create({
      component: UpdateShareComponent,
      cssClass: 'share-popover',
      componentProps: {
        selectedMber: this.curentMemberParams
      }
    });
    return await popover.present();
  }

  async onRolePopover() {
    const popover = await this.popoverController.create({
      component: UpdateRoleComponent,
      cssClass: 'role-popover',
      componentProps: {
        selectedMber: this.curentMemberParams
      }
    });
    return await popover.present();
  }

  async onDeletePopover() {
    const popover = await this.popoverController.create({
      component: DeleteComponent,
      cssClass: 'delete-popover',
      componentProps: {
        selectedMber: this.curentMemberParams
      }
    });
    return await popover.present();
  }

  async onReducePopover() {
    const popover = await this.popoverController.create({
      component: ReduceShareComponent,
      cssClass: 'delete-popover',
      componentProps: {
        selectedMber: this.curentMemberParams
      }
    });
    return await popover.present();
  }

  
  async onEnablePopover() {
    const popover = await this.popoverController.create({
      component: EnableMemberComponent,
      cssClass: 'delete-popover',
      componentProps: {
        selectedMber: this.curentMemberParams
      }
    });
    return await popover.present();
  }

  close() {
    this.popoverController.dismiss();
  }

  // enable or disable a member
  enableOrDisableMember() {
    this.close();
    this.onEnablePopover();
  }

  // Update the mumber of share
  updateShare() {
    this.close();
    this.onSharePopover();
  }

  // Update the role
  updateRole() {
    this.close();
    this.onRolePopover();
  }

  //delete the member
  deleteMember() {
    this.close();
    this.onDeletePopover();
  }

  //reduce the share
  reduceShare() {
    this.close();
    this.onReducePopover();
  }
}
