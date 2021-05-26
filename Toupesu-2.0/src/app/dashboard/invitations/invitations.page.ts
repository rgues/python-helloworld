import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.page.html',
  styleUrls: ['./invitations.page.scss'],
})
export class InvitationsPage implements OnInit {
  isInvitSelected: boolean;
  segmentValue: string;

  constructor(
    private events: EventService
  ) {
    this.segmentValue = 'invit';
    this.events.subscribe('new-invitation', () => {
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
