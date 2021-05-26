import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-invite-event',
  templateUrl: './invite-event.page.html',
  styleUrls: ['./invite-event.page.scss'],
})
export class InviteEventPage implements OnInit {
  isInvitSelected: boolean;
  segmentValue: string;

  constructor(
    private events: EventService
  ) { 
    this.segmentValue = 'invit';
    this.events.subscribe('new-invitation-event', () =>{
      this.segmentValue = 'list';
    });
  }

  ngOnInit() {
    this.isInvitSelected = true;
  }

  segmentChanged() {
    this.isInvitSelected = !this.isInvitSelected;
  }
}
