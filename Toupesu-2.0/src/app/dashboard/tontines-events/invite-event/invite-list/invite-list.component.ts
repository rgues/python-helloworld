import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontinesEventsService } from '../../services/tontines-events.service';
import { IonInfiniteScroll, AlertController } from '@ionic/angular';
import { InivitationErrorService } from 'src/app/dashboard/invitations/service/inivitation-error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  styleUrls: ['./invite-list.component.scss'],
})
export class InviteListComponent implements OnInit {
  eventsList;
  mytontine;
  user: any;
  loading: boolean;
  loadingList: boolean;
  tontineData: any;
  backService: any;
  nbItems: number;
  allData: any;
  tempData: any;
  loadingInvite: boolean;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontine: TontinesEventsService,
    private userService: UserService,
    private events: EventService,
    private invitationError: InivitationErrorService,
    private alertController: AlertController,
    private error: ErrorService,
    private location: TranslateService,
    private event: TontinesEventsService,
    private ui: UiService
  ) {
    this.mytontine = [];
    this.eventsList = [];
    this.tempData = [];
    this.loading = false;
    this.loadingList = false;
    this.tontineData = this.event.getCurrentTontineEventData();
    this.backService = null;
    this.nbItems = 10;
    this.allData = [];
    this.events.subscribe('new-invitation-event', () =>{
        this.loading = true;
        this.loadingInvite = true;
        this.refreSher(null);
    });
  }

  ngOnInit() {
    this.user = this.userService.getUserData();
    this.loading = true;
    this.getListingInvitations(null);
  }

  
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled =false;
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
      this.eventsList = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.eventsList.push(this.allData[this.eventsList.length]);
      }
    } else {
      this.eventsList = this.allData;
    }
  }

  // check if the code is valid
  isCodeValid(invitation: any) {
    return invitation.ValiditeCodeCoInvitation === 'valid';
  }

  // check if it is admin
  isInvitationAdmin(invitation: any) {
    return invitation.IsAdminInvitation === 1;
  }

  // check if the is current user 
  isCurrentUser(invitation: any) {
    return invitation.tontine_admin_id === this.user.id;
  }

  // check if the statut is refused
  isStatutRefused(invitation: any) {
    return invitation.EtatInvitation === 'refused';
  }

  // check if the statut is activated
  isStatutActivated(invitation: any) {
    return invitation.EtatInvitation === 'activated';
  }

  // Get the requested invitation
  getListingInvitations(event) {
    this.tontine.getAllEventsInvitations(this.tontineData.id).subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.success) {
          if (reponse && reponse.liste) {
            this.allData = reponse.liste;
            this.tempData = reponse.liste;
            if (this.allData.length > this.nbItems) {
              this.eventsList = [];
              for (let i = 0; i < this.nbItems; i++) {
                this.eventsList.push(this.allData[this.eventsList.length]);
              }
            } else {
              this.eventsList = this.allData;
            }
          }
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
      }, error => {

        if (event) {
            event.target.complete();
        }
     
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) { 
            this.error.renewSession().then((data: any) => {
                  if (data && data.result === 'OK') {
                    this.getListingInvitations(event);
                  } else {
                    this.loading = false;
                  }
            });
          } else {
            this.loading = false;
            this.invitationError.manageInvitationError(error);
          }
        } else {
          this.loading = false;
          this.error.manageError(error);
        }
      });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled =false;
    this.getListingInvitations(event);
  }

  // Launch the backgroud service
  ionicViewDidEnter() {
    this.backgroundService();
  }

  // Backgroung service
  backgroundService() {
    this.backService = setInterval(() => {
      this.getListingInvitations(null);
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
        if (this.eventsList.length < this.allData.length) {
          this.eventsList.push(this.allData[this.eventsList.length]);
        } else if (this.eventsList.length === this.allData.length ) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
   
   }

  // Renew the tontine invitation code
  ResendInvitation(idItem: any) {
    const params = {
      tontine_id: this.tontineData.id,
      invitation_id: idItem
    };
    this.location.get('SENDING_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.tontine.resendInvitationEvent(params).subscribe((reponse: any) => {
        this.ui.dismissLoading();
        this.getListingInvitations(null);
        this.location.get('TONTINE_EVENT_INVIT_TEXT5').subscribe(value => {
          this.ui.presentToast(value);
        });
    }, error => {
      
      if (error && error.error && !error.error.success) {
        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
                this.ui.dismissLoading();
                if (data && data.result === 'OK') {
                  this.ResendInvitation(idItem);
                }
          });
        } else {
          this.ui.dismissLoading();
          this.invitationError.manageInvitationError(error);
        }   
      } else{
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }

  
  // confirmed the user invitation
  confirmUserInvitation(invitation: any) {
    this.loadingInvite = true;

    const param = {
      event_id: invitation.tontine_id,
      invitation_id: invitation.invitation_id,
      motif: "Tout est ok",
    };

    this.location.get('M_ACCEPT_LOADING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });

    this.tontine.AcceptEventInvitationAdmin(param).subscribe((reponse: any) => {
      this.loadingInvite = false;
      this.ui.dismissLoading();
      if (reponse && reponse.success) {
        this.getListingInvitations(null);
      }

    }, error => {
     
      if (error && error.error && !error.error.success) {
        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
                this.ui.dismissLoading();
                if (data && data.result === 'OK') {
                  this.confirmUserInvitation(invitation);
                } else {
                  this.loadingInvite = false;
                }
          });
        } else {
          this.loadingInvite = false;
          this.ui.dismissLoading();
          this.invitationError.manageInvitationError(error);
        }
      } else {
        this.loadingInvite = false;
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });

  }

    // Open dilalog delete invitation
    openDenyInvitationDialog(invitation: any, index: any) {
      const params = {
        id : invitation.invitation_id,
        adminId: invitation.tontine_admin_id,
        index: index
      };
      this.location.get(['M_INVITE_DENY_TITLE','M_INVITE_DENY_MSG','M_INVITE_DENY_PLACEHOLDER']).subscribe(trans => {
          this.confirmDenyAlert(trans.M_INVITE_DENY_TITLE,trans.M_INVITE_DENY_MSG,trans.M_INVITE_DENY_PLACEHOLDER,params);
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
              this.location.get('M_INVITATION_DENY_MSG').subscribe(trans => {
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
      event_id: this.eventsList[param.index].tontine_id,
      motif: motif,
      invitation_id: param.id
    };
    this.location.get('M_DENY_LOADING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.tontine.declineEventInvitationAdmin(params).subscribe((reponse: any) => {
      this.loadingInvite = false;
      this.ui.dismissLoading();
      this.getListingInvitations(null);
      this.location.get('DENY_MEMBER_INVITATION').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }, error => {

      if (error && error.error && !error.error.success) {
        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
                this.ui.dismissLoading();
                if (data && data.result === 'OK') {
                  this.refuseUserInvitation(param, motif);
                } else {
                  this.loadingInvite = false;
                }
          });
        } else {
          this.loadingInvite = false;
          this.ui.dismissLoading();
          this.invitationError.manageInvitationError(error);
        }
      } else {
        this.loadingInvite = false;
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }

}
