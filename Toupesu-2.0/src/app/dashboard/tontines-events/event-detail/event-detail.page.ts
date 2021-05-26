import { Component, OnInit, ViewChild } from '@angular/core';
import { EventMember, TontinesEventsService } from '../services/tontines-events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, ModalController, IonInfiniteScroll } from '@ionic/angular';
import { EventDetailMenuComponent } from './event-detail-menu/event-detail-menu.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ContributionService } from '../../my-tontines/services/contribution.service';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  currentEvent: any;
  currentEventData: any;
  membersList: EventMember[];
  collectionSize: number;
  defaultImage = 'assets/default-event.jpg';
  hasImage = true;
  currentTontineId: number;
  user: any;
  members: any;
  notifications: any;
  loading: boolean;
  currentUser: any;
  allData: any;
  filterData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contribution: ContributionService,
    private tontineEventService: TontinesEventsService,
    private popoverController: PopoverController,
    private modatCtrl: ModalController,
    private userService: UserService,
    private error: ErrorService
  ) {
    this.members = [];
    this.notifications = [];
    this.loading = false;
    this.allData = [];
    this.filterData = [];
    this.nbItems = 10;
  }

  ngOnInit() {
    this.currentTontineId = this.route.snapshot.params.eventID;
    this.currentEvent = this.tontineEventService.getCurrentTontineEventData();
    this.user = this.userService.getUserData();
  }

  ionViewWillEnter() {
    this.loading = true;
    this.getDetailTontinesEvent(null);
  }

  // Open contextual menu
  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: EventDetailMenuComponent,
      event: ev
    });
    return await popover.present();
  }

  // Open contextual menu
  openPayContribution() {
    const contributionParams = {
      title: this.currentEvent.title,
      device_name: this.currentEvent.currency,
      idEvent: this.currentEvent.id
    };
    this.contribution.sendContributionData(contributionParams);
    this.modatCtrl
      .create({
        component: ContributeComponent,
        componentProps: {
          eventName: this.currentEvent.title
        }
      })
      .then(modalEl => {
        modalEl.present();
        this.loading = true;
        this.getDetailTontinesEvent(null);
      });
  }

  // show the pin confirmation dilaog
  confirmPin() {
    this.openPayContribution();
  }


  // Filter the list of tontines
  searchForMembers(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((member) => {
        return (member.FIRSTNAME ? member.FIRSTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1 :
          member.LASTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getDetailTontinesEvent(event);
  }

  // Get the tontine event detail
  getDetailTontinesEvent(event) {
    this.tontineEventService.getTontineDetail(this.currentTontineId).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.currentEventData = reponse.liste[0];
        this.currentEvent = this.currentEventData;
        this.allData = this.currentEventData.members;
        this.filterData = this.allData;

        if (this.allData.length > this.nbItems) {
          this.members = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.members.push(this.allData[this.members.length]);
          }
        } else {
          this.members = this.allData;
        }

        if (event) {
          event.target.complete();
        }
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
            this.getDetailTontinesEvent(event);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Reply a notification
  replyNotification(event: any) {
    this.router.navigate(['dashboard/tontines-events', event.id, 'my-tickets']);
  }

}
