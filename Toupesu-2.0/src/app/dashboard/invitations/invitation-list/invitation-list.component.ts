import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TontineService } from '../../my-tontines/services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { InvitationsService } from '../service/invitations.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { InivitationErrorService } from 'src/app/dashboard/invitations/service/inivitation-error.service';
import { SelectDataComponent } from 'src/app/shared/select-data/select-data.component';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.scss'],
})
export class InvitationListComponent implements OnInit {
  invitations: any;
  formInvited: FormGroup;
  loading: boolean;
  tontines: any;
  user: any;
  loadingInvite: boolean;
  loadingInviteBis: boolean;
  allData: any;
  nbItems: number;
  backService: any;
  tempData: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private fb: FormBuilder,
    private tontine: TontineService,
    private invitation: InvitationsService,
    private modatCtrl: ModalController,
    private util: UtilService,
    private event: EventService,
    public alertController: AlertController,
    private userService: UserService,
    private error: ErrorService,
    private ui: UiService,
    private translate: TranslateService,
    private invitationError: InivitationErrorService,
    private zone: NgZone
  ) {
    this.invitations = [];
    this.tontines = [];
    this.tempData = [];
    this.user = this.userService.getUserData();
    this.loading = false;
    this.loadingInvite = false;
    this.loadingInviteBis = false;
    this.allData = [];
    this.nbItems = 10;
    this.backService = null;
    this.event.subscribe('new-invitation', () => {
      this.loading = true;
      this.getListOftontines(null);
    });
  }

  ngOnInit() {
    this.initForm();
    this.loading = true;
    this.getListOftontines(null);
  }

  // int form
  initForm() {
    this.formInvited = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

  // Filter the list of tontines
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.tempData.filter((invitation) => {
        return (invitation.InviteEmail ? invitation.InviteEmail.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          invitation.InvitePhone.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.allData = this.tempData;
    }

    if (this.allData.length > this.nbItems) {
      this.invitations = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.invitations.push(this.allData[this.invitations.length]);
      }
    } else {
      this.invitations = this.allData;
    }
  }

  // show the tontine modal
  showTontines() {
    this.modatCtrl
      .create({
        component: SelectDataComponent,
        componentProps: {
          tontine: this.tontines,
          type: 'invitation'
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.role === 'select') {
            this.formInvited.get('name').setValue(ans.data.name);
            this.formInvited.get('id').setValue(ans.data.id);
            this.loading = true;
            this.getResquestedInvitation(ans.data.id, null)
          }
        });
      });
  }

  // get truncate name 
  getTruncateName(formData: any, nbCar: number) {
    return formData.name && formData.name.length < nbCar ? formData.name : formData.name ? formData.name.substring(0, nbCar) + '...' : '';
  }

  // check if the code is not valid
  checkCodeInValid(invitation: any) {
    return invitation.ValiditeCodeCoInvitation !== 'valid' && invitation.tontine_admin_id === this.user.id;
  }

  // check if the user is admin
  isAdmin(invitation: any) {
    return invitation.tontine_admin_id === this.user.id;
  }

  // check if the code is valid
  checkCodeValid(invitation: any) {
    return invitation.ValiditeCodeCoInvitation === 'valid';
  }

  // Check if the invitation is activated
  isActivated(invitation: any) {
    return invitation.EtatInvitation === 'activated' && invitation.tontine_admin_id === this.user.id;
  }

  // chek if the invitation is refused
  isRefused(invitation: any) {
    return invitation.EtatInvitation === 'refused';
  }

  // chek if the invitation is cancelled
  isCancelled(invitation: any) {
    return invitation.EtatInvitation === 'canceled';
  }

  // chek if the invitation is accepted
  isAccepted(invitation: any) {
    return invitation.EtatInvitation === 'accepted';
  }

  // check if the invitation is refused or cancelled
  canDelete(invitation: any) {
    return invitation.tontine_admin_id === this.user.id && (invitation.EtatInvitation === 'refused' || invitation.EtatInvitation === 'canceled');
  }

  // Get the list of tontines
  getListOftontines(event: any) {
    this.tontine.getMyTontine().subscribe((reponse: any) => {

      if (reponse && reponse.message === 'success') {
        reponse.liste_tontine.forEach(tontine => {
          if (tontine.tontine.administrator === 1) {
            this.tontines.push(tontine);
          }
        });

        if (this.tontines && this.tontines.length > 0) {
          this.tontines = this.util.oderByTontineDate(this.tontines);
          this.zone.run(() => {
            this.getResquestedInvitation(0, event);
          });

          setTimeout(() => {
            this.formInvited.get('name').setValue(this.tontines[0].tontine.name);
            this.formInvited.get('id').setValue(0);
          }, 200);

        } else {
          this.loading = false;
        }
      } else {
        this.loading = false;
      }

    }, error => {

      if (event) {
        event.target.complete();
      }
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getListOftontines(event);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Get the requested invitations
  getResquestedInvitation(index: any, event) {
    const tontineData = this.tontines && this.tontines.length > 0 && index >= 0 ? this.tontines[index] : null;
    if (tontineData && tontineData.tontine && tontineData.tontine.administrator === 1) {
      this.invitation.getAllInvitation(tontineData.tontine.tontine_id, this.user.id).subscribe((reponse: any) => {

        if (reponse && reponse.success) {
          if (reponse && reponse.liste) {
            this.allData = reponse.liste;
            this.tempData = reponse.liste;
            if (this.allData.length > this.nbItems) {
              this.invitations = [];
              for (let i = 0; i < this.nbItems; i++) {
                this.invitations.push(this.allData[this.invitations.length]);
              }
            } else {
              this.invitations = this.allData;
            }
          }
        }
        this.loading = false;
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 500);
        }
      }, error => {
        if (event) {
          event.target.complete();
        }
        this.loading = false;
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getResquestedInvitation(index, event);
              } else {
                this.loading = false;
              }
            });
          } else {
            this.invitationError.manageInvitationError(error);
          }
        } else {
          this.error.manageError(error);
        }
      });
    } else {
      this.loading = false;
    }
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getResquestedInvitation(this.formInvited.value.id, event);
  }

  // Launch the backgroud service
  ionicViewDidEnter() {
    this.backgroundService();
  }

  // Backgroung service
  backgroundService() {
    this.backService = setInterval(() => {
      this.getResquestedInvitation(this.formInvited.value.name, null);
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
        if (this.invitations.length < this.allData.length) {
          this.invitations.push(this.allData[this.invitations.length]);
        } else if (this.invitations.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // confirmed the user invitation
  confirmUserInvitation(invitation: any, index: number) {

    const param = {
      tontine_id: invitation.tontine_id,
      invitation_id: invitation.invitation_id,
      ajout_part_membre_en_contribuant_seances_passees_et_restantes: 'oui',
      ajout_part_membre_en_contribuant_seulement_seances_restantes: 'non'
    };

    this.loadingInvite = true;
    this.translate.get('M_ACCEPT_LOADING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });

    this.invitation.acceptguestInvitation(invitation.tontine_admin_id, param).subscribe((reponse: any) => {
      this.loadingInvite = false;
      this.ui.dismissLoading();
      if (reponse && reponse.success) {
        this.loading = true;
        this.getResquestedInvitation(index, null);
        this.invitations.splice(index, 1);
      }

    }, error => {
      this.loadingInvite = false;
      this.ui.dismissLoading();
      if (error && error.error && !error.error.success) {
        this.invitationError.manageInvitationError(error);
      } else {
        this.error.manageError(error);
      }

    });

  }

  // Open dilalog delete invitation
  openDenyInvitationDialog(invitation: any, index: any) {
    const params = {
      id: invitation.invitation_id,
      adminId: invitation.tontine_admin_id,
      index: index
    };
    this.translate.get(['M_INVITE_DENY_TITLE', 'M_INVITE_DENY_MSG', 'M_INVITE_DENY_PLACEHOLDER']).subscribe(trans => {
      this.confirmDenyAlert(trans.M_INVITE_DENY_TITLE, trans.M_INVITE_DENY_MSG, trans.M_INVITE_DENY_PLACEHOLDER, params);
    });
  }

  async confirmDenyAlert(title: string, message: string, placeholder: string, params: any) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      inputs: [
        {
          name: 'motif',
          type: 'text',
          id: 'motif-id',
          placeholder: placeholder
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        }, {
          text: 'Ok',
          handler: (ans) => {
            this.translate.get('M_INVITATION_DENY_MSG').subscribe(trans => {
              this.refuseUserInvitation(params, ans.motif || trans);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  // Refuse the invitation
  refuseUserInvitation(param: any, motif: number) {
    this.loadingInvite = true;
    const params = {
      tontine_id: this.tontines[param.index].tontine.tontine_id,
      motif: motif,
      phone_prefix: '',
      invitation_id: param.id
    };
    this.translate.get('M_DENY_LOADING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.invitation.cancelguestInvitation(param.adminId, params).subscribe((reponse: any) => {
      this.loadingInvite = false;
      this.ui.dismissLoading();
      this.translate.get('DENY_MEMBER_INVITATION').subscribe(trans => {
        this.ui.presentToast(trans);
      });
      this.loading = true;
      this.getResquestedInvitation(param.index, null);

    }, error => {
      this.loadingInvite = false;
      this.ui.dismissLoading();
      if (error && error.error && !error.error.success) {
        this.invitationError.manageInvitationError(error);
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Open dilalog delete invitation
  openDeleteInvitationDialog(invitation: any, index: any) {
    const params = {
      id: invitation.invitation_id,
      index: index
    };
    this.translate.get(['M_INVITE_DELETE_TITLE', 'M_INVITE_DELETE_MSG', 'M_INVITE_DELETE_PLACEHOLDER']).subscribe(trans => {
      this.confirmDeleteAlert(trans.M_INVITE_DELETE_TITLE, trans.M_INVITE_DELETE_MSG, trans.M_INVITE_DELETE_PLACEHOLDER, params);
    });
  }

  async confirmDeleteAlert(title: string, message: string, placeholder: string, params: any) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      inputs: [
        {
          name: 'motif',
          type: 'text',
          id: 'motif-id',
          placeholder: placeholder
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        }, {
          text: 'Ok',
          handler: (ans) => {
            this.translate.get('M_INVITATION_DELETE_MSG').subscribe(trans => {
              this.deleteUserInvitation(params, ans.motif || trans);
            });
          }
        }
      ]
    });

    await alert.present();
  }


  // Delete the invitation
  deleteUserInvitation(param: any, motif: any) {

    this.loadingInviteBis = true;
    const params = {
      invitation_id: param.id,
      motif: motif
    };
    this.translate.get('M_DELETE_LOADING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.invitation.deleteInvitation(params).subscribe((reponse: any) => {
      this.loadingInviteBis = false;
      this.ui.dismissLoading();
      if (reponse && reponse.message === 'success') {
        this.translate.get('CANCEL_INVITATION_MESSAGE').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.loading = true;
        this.getResquestedInvitation(param.index, null);
      }
    }, error => {
      this.loadingInviteBis = false;
      if (error && error.error && error.error.message === 'error') {
        if (error.error.invalid_token) {
          this.loadingInviteBis = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.ui.dismissLoading();
              this.deleteUserInvitation(param, motif);
            } else {
              this.ui.dismissLoading();
              this.loadingInviteBis = false;
            }
          });
        } else {
          this.ui.dismissLoading();
          this.invitationError.manageInvitationError(error);
        }
      } else {
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }


  //  Renew the tontine invitation code
  getTontineInvitationCode(invitation: any, index) {
    this.loadingInviteBis = true;
    const params = {
      tontine_id: this.tontines[index].tontine.tontine_id,
      invitation_id: invitation.invitation_id
    };
    this.translate.get('M_CODE_LOADING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.invitation.getInvitationCode(invitation.tontine_admin_id, params).subscribe((reponse: any) => {
      this.loadingInviteBis = false;
      this.ui.dismissLoading();
      this.translate.get('TONTINE_INVITE_TEXT14').subscribe(value => {
        this.ui.presentToast(value);
      });
      this.loading = true;
      this.getResquestedInvitation(index, null);
    }, error => {
      this.loadingInviteBis = false;
      this.ui.dismissLoading();
      if (error && error.error && !error.error.success) {
        this.invitationError.manageInvitationError(error);
      } else {
        this.error.manageError(error);
      }
    });
  }


}
