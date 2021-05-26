import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, NavController} from '@ionic/angular';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { Router } from '@angular/router';
import { InvitationsService } from './invitations/service/invitations.service';
import { ErrorService } from '../shared/service/error.service';
import { UserService } from './user/service/user.service';
import { UiService } from '../shared/service/ui.service';
import { AuthService } from '../auth/service/auth.service';
import { LocalStorageService } from '../shared/service/local-storage.service';
import { EventService } from '../shared/service/events.service';
import { TontinesEventsService } from './tontines-events/services/tontines-events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  haveInvitation: boolean;
  nbInvitations: number;
  backService: any;

  constructor(
    private popoverController: PopoverController,
    private event: EventService,
    private error: ErrorService,
    private invitation: InvitationsService,
    private eventService: TontinesEventsService,
    public alertController: AlertController,
    private navController: NavController,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private ui: UiService,
    private localStorage: LocalStorageService,
  ) {
    this.ui.hardwareBackButton();
    this.ckeckSessionData();
    this.haveInvitation = false;
    this.nbInvitations = 0;
    this.event.subscribe('new-invitation', () => {
      this.getResquestedInvitation();
    });
    this.backService = null;
  }

  ngOnInit() {
    this.getResquestedInvitation();
    this.checkInvitations();
    this.authService.getVersion();
  }

  // Launch the backgroud service
  ionicViewWillLeave() {
    clearInterval(this.backService);
  }

  // check invitations 
  checkInvitations() {
    this.backService = setInterval(() => {
      this.getResquestedInvitation();
    }, 120000);
  }

  // check if the user has already fill the basic profile informations
  ckeckSessionData() {
    const data = this.userService.getUserData();
    if (data && (!data.firstname || !data.lastname)) {
      this.localStorage.setItem('fisrt-login', 'yes');
      this.navController.setDirection('root');
      this.router.navigateByUrl('/dashboard/user/profil');
    }
  }

  // Open contextual menu
  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: DashboardMenuComponent,
      event: ev
    });
    return await popover.present();
  }

  // check event Invitations
  getEventInvitation(invitations) {
    if (this.userService.getUserData()) {
      this.eventService.getAllEventsInvitation().subscribe((reponse: any) => {
        reponse.liste.forEach(data => {
          if (data && data.EtatInvitation === 'en attente') {
            invitations.push(data);
          }
        });
        this.nbInvitations = invitations.length;
        this.haveInvitation = true;
      }, error => {
  
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getEventInvitation(invitations);
              }
            });
          }
        }
      });
    }
  }

  // Get the requested invitations
  getResquestedInvitation() {
    if (this.userService.getUserData()) {
      this.invitation.getInvitations().subscribe((reponse: any) => {
        if (reponse && reponse.success) {
          if (reponse && reponse.liste) {
            const invitations = [];
            reponse.liste.forEach(data => {
              if (data && data.EtatInvitation === 'en attente' && data.ValiditeCodeCoInvitation === 'valid') {
                invitations.push(data);
              }
            });
            this.nbInvitations = invitations.length;
            this.haveInvitation = true;
            this.getEventInvitation(invitations);
          }
        }
      }, error => {

        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === 'OK') {
                this.getResquestedInvitation();
              } else {
                this.haveInvitation = false;
              }
            });
          } else {
            this.haveInvitation = false;
          }
        } else {
          this.haveInvitation = false;
        }
      });
    }
  }

}
