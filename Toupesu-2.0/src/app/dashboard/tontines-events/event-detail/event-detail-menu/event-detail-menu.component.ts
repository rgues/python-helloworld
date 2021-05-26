import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController, AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { TontinesEventsService } from '../../services/tontines-events.service';
import { EventInfoEditComponent } from '../event-info-edit/event-info-edit.component';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PluginService } from 'src/app/shared/service/plugin.service';

@Component({
  selector: 'app-event-detail-menu',
  templateUrl: './event-detail-menu.component.html',
  styleUrls: ['./event-detail-menu.component.scss'],
})
export class EventDetailMenuComponent implements OnInit {
  tontineEventData: any;
  loading: boolean;
  user: any;
  shareData: any[];

  constructor(
    public popoverController: PopoverController,
    public modatCtrl: ModalController,
    private event: TontinesEventsService,
    private router: Router,
    private translate: TranslateService,
    private ui: UiService,
    private userService: UserService,
    private auth: AuthService,
    private error: ErrorService,
    public alertController: AlertController,
    private platform: Platform,
    private plugin: PluginService
  ) {
    this.tontineEventData = this.event.getCurrentTontineEventData();
    this.user = this.userService.getUserData();
    this.shareData = [];
  }

  ngOnInit() { }

  // can invite 
  canIniviteForEvent() {
    let canInvite = false;
    if (this.tontineEventData.USER_ID === this.user.id && this.tontineEventData.status === 'approved'&& this.tontineEventData.visibility === 'private') {
      canInvite = true
    }
    return canInvite;
  }

  // can share event code
  canShareCode() {
    let canShare = false;
    if (this.tontineEventData.USER_ID === this.user.id && this.tontineEventData.status === 'approved'&& this.tontineEventData.visibility === 'private') {
      canShare = true
    }
    return canShare;
  }

  // can send notification
  canSendNotification() {
    let canSend = false;
    if (this.tontineEventData.USER_ID === this.user.id && this.tontineEventData.status === 'approved') {
      canSend = true
    }
    return canSend;
  }

  // check if it current user
  isCurrentUser() {
    return this.tontineEventData.USER_ID === this.user.id;
  }

  // can update
  canUpdateEvent() {
    return this.isCurrentUser() && this.tontineEventData.status === 'initiated';
  }

  // can delete
  canDeleteEvent() {
    return this.isCurrentUser() &&  (this.tontineEventData.status === 'initiated' || this.tontineEventData.status === 'refused');
  }

  closeEventDetailMenu() {
    this.popoverController.dismiss();
  }

  // Invite to join the tontine event
  inviteJoin() {
    this.closeEventDetailMenu();
    this.router.navigate(['dashboard/tontines-events/invitations']);
  }

  // Show the tickets of the event
  ticketsTontine() {
    this.closeEventDetailMenu();
    this.router.navigate(['dashboard/tontines-events', this.tontineEventData.id, 'my-tickets']);
  }

  // Open contextual menu
  openPayContribution() {
    this.modatCtrl
      .create({
        component: EventInfoEditComponent
      })
      .then(modalEl => modalEl.present());
  }

  // Send tontine Event notification
  sendNotification() {
    this.closeEventDetailMenu();
    this.router.navigate(['dashboard/tontines-events/' + this.tontineEventData.id + '/my-tickets']);
  }

  // Update the tontine event
  updateTontine() {
    this.closeEventDetailMenu();
    this.openPayContribution();
  }

  // Show confirm message
  async deleteEventConfirm(dataMessage: any, translation: string[]) {
    const alert = await this.alertController.create({
      header: `${dataMessage.title} ${this.tontineEventData.title}`,
      message: `${dataMessage.message}`,
      buttons: [
        {
          text: `${translation[0]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.closeEventDetailMenu();
          }
        }, {
          text: `${translation[1]}`,
          handler: () => {
            this.confirmDelete();
          }
        }
      ]
    });
    await alert.present();
  }

  // delete the tontine invitations
  confirmDelete() {
    this.loading = true;
    this.event.deleteTontine(this.tontineEventData.id).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('TONTINE_EVENT_DELETE_SUCCESS1').subscribe(value => {
          this.ui.presentToast(value);
        });
        this.closeEventDetailMenu();
        const currentDate = new Date();
        this.auth.setAppLastSession(currentDate.getTime());
        this.router.navigate(['dashboard/tontines-events']);
      }
    }, error => {
      this.closeEventDetailMenu();
      if (error && error.error && error.error.message === 'error') {
        if (error.error.tontine_not_found) {
          this.translate.get('TONTINE_EVENT_DELETE_ERROR1').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.loading = false;
        }
        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
                if (data && data.result === "OK") {
                      this.confirmDelete();
                } else {
                  this.loading = false;
                }
          });
        }
      } else {
        this.loading = false;
        this.error.manageError(error);
      }
    });
  }

  // Delete the tontine Event
  deleteTontine() {
    const translation = [];
    const dataMessage = { title: '', message: '' }
    this.translate.get(['EVENT', 'CONFIRM_EVENT_DELETE_SUBTEXT1', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translation.push(trans.CANCEL_TEXT);
      translation.push(trans.YES_TEXT);
      dataMessage.title = trans.EVENT;
      dataMessage.message = trans.CONFIRM_EVENT_DELETE_SUBTEXT1;
      this.deleteEventConfirm(dataMessage, translation);
    });
  }

  // Share the app with friends
  shareCode() {
    let link = '';
    if (this.platform.is('android')) {
      link = 'https://bit.ly/2Zr78Me';
    } else {
      link = 'https://apple.co/2yrfLeM';
    }
    this.translate.get(['SHARE_EVENT_MESSAGE', 'SHARE_EVENT_TITLE', 'DOWNLOAD_TEXT']).subscribe(trans => {
      this.shareData.push(trans.SHARE_CODE_MESSAGE);
      this.shareData.push(trans.DOWNLOAD_TEXT);
      this.shareData.push(trans.SHARE_CODE_TITLE);
    });
    this.plugin.share(`${this.shareData[0]} ${this.tontineEventData.title} \n\n Code :  ${this.tontineEventData.codeEvent} \n\n ${this.shareData[1]}`, `${this.shareData[2]}`,link);
  }

}
