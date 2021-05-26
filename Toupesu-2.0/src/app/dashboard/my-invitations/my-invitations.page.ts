import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonInfiniteScroll, AlertController } from '@ionic/angular';
import { InvitationsService } from '../invitations/service/invitations.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontinesEventsService } from '../tontines-events/services/tontines-events.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-my-invitations',
  templateUrl: './my-invitations.page.html',
  styleUrls: ['./my-invitations.page.scss'],
})
export class MyInvitationsPage implements OnInit {

  invitFilter : any[];
  invitations : any[] = [];
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
  tontineInvitations: any;
  eventInvitations: any;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private fb: FormBuilder,
    private invitation: InvitationsService,
    private event: EventService,
    public alertController: AlertController,
    private eventService: TontinesEventsService,
    private userService: UserService,
    private error: ErrorService
  ) {
    this.invitations = [];
    this.tontines = [];
    this.tempData = [];
    this.user = this.userService.getUserData();
    this.loading = false;
    this.loadingInvite = false;
    this.loadingInviteBis = false;
    this.allData = [];
    this.tontineInvitations = [];
    this.eventInvitations = [];
    this.nbItems = 10;
    this.backService = null;
    this.event.subscribe('new-invitation', () =>{
      this.loading = true;
      this.getResquestedInvitation(null);
    });
  }

  ngOnInit() {
    this.initForm();
    this.loading = true;
    this.getResquestedInvitation(null);
  }

  // Init form
  initForm() {
    this.formInvited = this.fb.group({
      name: ['', Validators.required]
    });
  }

  // Filter the list of tontines
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.tempData.filter((invitation) => {
        return (invitation.tontine_name ? invitation.tontine_name.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          invitation.tontine_description.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

  // Get the requested invitations
  getResquestedInvitation(event) {
      this.invitation.getInvitations().subscribe((reponse: any) => {
        if (reponse && reponse.success) {
          if (reponse && reponse.liste) {
            const invitations = []; 
            reponse.liste.forEach(data => {
                if (data && data.EtatInvitation === 'en attente' && data.ValiditeCodeCoInvitation === 'valid') {
                  invitations.push(data);
                }
            });
            this.tontineInvitations = invitations;
            this.allData = this.tontineInvitations;
            this.tempData = this.allData;
            if (this.allData.length > this.nbItems) {
              this.invitations = [];
              for (let i = 0; i < this.nbItems; i++) {
                this.invitations.push(this.allData[this.invitations.length]);
              }
            } else {
              this.invitations = this.allData;
            }
          }

          this.getEventResquestedInvitation(event);
        } else {
          this.loading = false; 
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
                  this.getResquestedInvitation(event);
                } else {
                  this.loading = false;
                }
            });
          }
        } else {
          this.error.manageError(error);
        }
      });
  }

  
  // Get the event invitations
  getEventResquestedInvitation(event) {
    this.eventService.getAllEventsInvitation().subscribe((reponse: any) => {
      if (reponse && reponse.success) {
        if (reponse && reponse.liste) {
          const invitations = []; 
          reponse.liste.forEach(data => {
              if (data && data.EtatInvitation === 'en attente') {
                invitations.push(data);
              }
          });
          this.allData = [];
          this.eventInvitations = invitations;
          this.allData = this.allData.concat(this.tontineInvitations);
          this.allData = this.allData.concat(this.eventInvitations);
          this.tempData = this.allData;
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
                this.getResquestedInvitation(event);
              } else {
                this.loading = false;
              }
          });
        }
      } else {
        this.error.manageError(error);
      }
    });
}

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getResquestedInvitation(event);;
  }

  // Launch the backgroud service
  ionicViewDidEnter() {
    this.backgroundService();
  }

  // Backgroung service
  backgroundService() {
    this.backService = setInterval(() => {
      this.getResquestedInvitation(null);
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

  // Get the item
  getItem(data: any) {
      this.event.publish('invitation-data',data);
  }

}
