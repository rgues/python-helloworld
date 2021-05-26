import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { InvitationsService } from '../../invitations/service/invitations.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { NavController } from '@ionic/angular';
import { InivitationErrorService } from 'src/app/dashboard/invitations/service/inivitation-error.service';
import { TontinesEventsService } from '../../tontines-events/services/tontines-events.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Component({
  selector: 'my-invitation',
  templateUrl: './my-invitation.component.html',
  styleUrls: ['./my-invitation.component.scss'],
})
export class MyInvitationComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() code: number;
  @Input() contribution: number;
  @Input() dateStart: string;
  @Input() frequency: string;
  @Input() sender: string;

  isMenuOpen: boolean = false;
  loadingInvite: boolean;
  invitationData: any;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private event: EventService,
    private navController: NavController,
    private userService: UserService,
    private error: ErrorService,
    private invitation: InvitationsService,
    private invitationError: InivitationErrorService,
    private localStorage: LocalStorageService,
    private eventService: TontinesEventsService,
    private ui: UiService
  ) {
    this.event.subscribe('invitation-data', data => {
      this.invitationData = data;
    });
  }

  ngOnInit() { }

  // Toggle accordion
  toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.loadingInvite = false;
  }


  // Join to tontine or event
  joinTontine() {
    const type = this.invitationData.TypeInvitation;
    switch (type) {
      case 'EVENT':
        this.joinTontineEvent();
        break;

      case 'TONTINE':
        this.joinTontineNormal();
        break;

      default:
        break;
    }
  }

  // Join a tontine
  joinTontineNormal() {
    this.loadingInvite = true;
    let prefix = '';
    const credentials = this.userService.getUserSecret();
    prefix = credentials ? credentials.phone_prefix : '';

    const params = {
      code_invitation: this.invitationData.CodeInvitation,
      prefix: prefix,
      phone_prefix: prefix,
      phoneid: prefix,
      phone: this.invitationData && this.invitationData.InvitePhoneSansPrefix ? this.invitationData.InvitePhoneSansPrefix : '',
      emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
    };
    this.translate.get('M_ACCEPT_LOADING').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.invitation.acceptInvitationTontine(params)
      .subscribe((reponse: any) => {
        this.loadingInvite = false;
        this.ui.dismissLoading();
        if (reponse && reponse.success) {
          this.translate.get('USER_SECURITY_MSG10').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.event.publish('new-invitation');
          this.navController.setDirection('root');
          this.router.navigate(['dashboard/my-tontines']);
        }
      
      }, error => {
       
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.joinTontineNormal();
              } else {
                this.ui.dismissLoading();
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

  // Join an event
  joinTontineEvent() {
    this.loadingInvite = true;
    let prefix = '';
    const credentials = this.userService.getUserSecret();
    prefix = credentials ? credentials.phone_prefix : '';

    const params = {
      code_invitation: this.invitationData.CodeInvitation,
      prefix: prefix,
      phone_prefix: prefix,
      phoneid: prefix,
      phone: this.invitationData && this.invitationData.InvitePhoneSansPrefix ? this.invitationData.InvitePhoneSansPrefix : '',
      emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
    };
    this.translate.get('M_ACCEPT_LOADING').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.eventService.acceptInvitationEventWithToken(params)
      .subscribe((reponse: any) => {
        this.loadingInvite = false;
        this.ui.dismissLoading();
        if (reponse && reponse.success) {
          if (reponse.invitation.etat === 'en attente') {
            this.translate.get('USER_SECURITY_MSG10').subscribe(value => {
              this.ui.presentToast(value);
            });
          } else {
            this.translate.get('USER_SECURITY_MSG11').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
          this.localStorage.setItem('new-event', 'yes');
          this.event.publish('new-invitation');
          this.router.navigate(['dashboard/tontines-events']);
        }
    
      }, error => {
       
    
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.joinTontineNormal();
              } else {
                this.loadingInvite = false;
                this.ui.dismissLoading();
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


  // Cancel the invitation
  cancelTontine() {
    const type = this.invitationData.TypeInvitation;
    switch (type) {
      case 'EVENT':
        this.cancelTontineEvent();
        break;

      case 'TONTINE':
        this.cancelTontineNormal();
        break;

      default:
        break;
    }
  }


  // Cancel invitation
  cancelTontineNormal() {
    this.loadingInvite = true;
    let prefix = '';
    const credentials = this.userService.getUserSecret();
    prefix = credentials ? credentials.phone_prefix : '';
    const params = {
      code_invitation: this.invitationData.CodeInvitation,
      motif: 'Je ne veux pas',
      phone_prefix: prefix,
      emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
    };
    this.translate.get('M_DELETE_LOADING').subscribe(value => {
      this.ui.presentLoading(value);
    });

    this.invitation.cancelInvitationWithToken(params)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        this.loadingInvite = false;
        if (reponse && reponse.success) {
          this.translate.get('CANCEL_INVITATION_MSG').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.event.publish('new-invitation');
          this.navController.setDirection('root');
          this.router.navigate(['dashboard/my-tontines']);
        }
      }, error => {
 
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.cancelTontineNormal();
              } else {
                this.ui.dismissLoading();
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


  // Cancel invitation
  cancelTontineEvent() {
    this.loadingInvite = true;
    let prefix = '';
    const credentials = this.userService.getUserSecret();
    prefix = credentials ? credentials.phone_prefix : '';
    const params = {
      code_invitation: this.invitationData.CodeInvitation,
      motif: 'Je ne veux pas',
      phone_prefix: prefix,
      emailOrphone: this.invitationData && this.invitationData.InviteEmail ? this.invitationData.InviteEmail : this.invitationData.InvitePhoneSansPrefix
    };
    this.translate.get('M_DELETE_LOADING').subscribe(value => {
      this.ui.presentLoading(value);
    });

    this.eventService.declineEventInvitation(params)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        this.loadingInvite = false;
        if (reponse && reponse.success) {
          this.translate.get('CANCEL_INVITATION_MSG').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.event.publish('new-invitation');
          this.navController.setDirection('root');
          this.router.navigate(['dashboard']);
        }
      }, error => {
       
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.cancelTontineEvent();
              } else {
                this.ui.dismissLoading();
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
