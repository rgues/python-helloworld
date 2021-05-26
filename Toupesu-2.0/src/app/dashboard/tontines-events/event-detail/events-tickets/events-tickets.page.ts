import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TontinesEventsService } from '../../services/tontines-events.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { EventErrorService } from 'src/app/dashboard/tontines-events/services/event-error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-events-tickets',
  templateUrl: './events-tickets.page.html',
  styleUrls: ['./events-tickets.page.scss'],
})
export class EventsTicketsPage implements OnInit {

  currentEvent: any = [];
  LastNotifsEvent: any = [];
  defaultImage = 'assets/images/default-event.jpg';
  notificationForm: FormGroup;
  p: number = 1;
  user: any;
  urlLinkId: any;
  loading: boolean = false;
  errorMessage: boolean = false;
  intervalId: any;
  FileData: any;
  validationMessages: any;
  allData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private tontineEventService: TontinesEventsService,
    private errorService: ErrorService,
    private translate: TranslateService,
    private events: EventService,
    private ui: UiService,
    private eventError: EventErrorService,
    private userService: UserService,
    private event: TontinesEventsService
  ) {
    this.user = this.userService.getUserData();
    this.currentEvent = this.event.getCurrentTontineEventData();
    this.allData = [];
    this.nbItems = 10;
  }

  ngOnInit() {
    this.initErrorMessage();
    this.urlLinkId = this.route.snapshot.params.eventID;
    this.getDetailTontinesEvent();
    this.initNotificationForm();
    this.getMessagingEvent(null);
    this.intervalId = setInterval(() => this.getMessagingEvent(null), 120000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get ticketSubject() {
    return this.notificationForm.get('subject');
  }

  get tickectMessage() {
    return this.notificationForm.get('message');
  }

  get ticketFile() {
    return this.notificationForm.get('attachFiles');
  }

  // Init message Error
  initErrorMessage() {
    this.translate.get(['M_SUBJECT_REQUIRED', 'M_MESSAGE_REQUIRED']).subscribe(trans => {
      this.validationMessages = {
        subject: [
          { type: 'required', message: trans.M_SUBJECT_REQUIRED }
        ],
        message: [
          { type: 'required', message: trans.M_MESSAGE_REQUIRED }
        ]
      };
    });
  }

  // Init form
  initNotificationForm() {
    const userLogged = this.userService.getUserData();
    this.notificationForm = this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required],
      event_id: [this.urlLinkId, Validators.required],
      event_status: [''],
      user_id: [userLogged.id, Validators.required],
      attachFiles: ['']
    });
  }

  getMessagingEvent(event) {
    this.tontineEventService.getMessagingEvent(this.urlLinkId).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.allData = reponse.liste;
        if (this.allData.length > this.nbItems) {
          this.LastNotifsEvent = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.LastNotifsEvent.push(this.allData[this.LastNotifsEvent.length]);
          }
        } else {
          this.LastNotifsEvent = this.allData;
        }
      }
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.errorService.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
                this.getMessagingEvent(event);
            }
        });
      } else {
        this.errorService.manageError(error);
      }
    });
  }

  // Get the tontine event detail
  getDetailTontinesEvent() {
    this.tontineEventService.getTontineDetail(this.urlLinkId).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.currentEvent = reponse.liste[0];
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getMessagingEvent(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.LastNotifsEvent.length < this.allData.length) {
          this.LastNotifsEvent.push(this.allData[this.LastNotifsEvent.length]);

        } else if (this.LastNotifsEvent.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);

  }

  sendNotification() {
    this.loading = true;
    this.translate.get('LOADING_TEXT').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.notificationForm.get('event_status').setValue(this.currentEvent.status);
    this.tontineEventService.sendNotification(this.notificationForm.value).subscribe(
      (reponse: any) => {
        this.loading = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.initNotificationForm();
          this.getMessagingEvent(null);
          this.events.publish('new-event');
          this.translate.get('TONTINE_EVENT_NOTIF_TEXT1').subscribe(value => {
            this.ui.presentToast(value);
          });
        }
      }, error => {
        
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.errorService.renewSession().then((data: any) => {
              this.ui.dismissLoading();
              if (data && data.result === "OK") {
                  this.sendNotification();
              } else {
                this.loading = false;
              }
            }); 
          } else {
            this.loading = false;
            this.ui.dismissLoading();
            this.eventError.manageEventError(error);
          }
        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.errorService.manageError(error);
        }
      });
  }

}
