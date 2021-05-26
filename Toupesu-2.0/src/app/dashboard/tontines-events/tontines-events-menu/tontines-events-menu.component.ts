import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tontines-events-menu',
  templateUrl: './tontines-events-menu.component.html',
  styleUrls: ['./tontines-events-menu.component.scss'],
})
export class TontinesEventsMenuComponent implements OnInit {


  constructor(
    private popoverController: PopoverController,
    private router: Router,
  ) {

   }

  ngOnInit() {}

  closeTontinesEventsMenu() {
    this.popoverController.dismiss();
  }

  // open new tontine Event page
  newTontineEvent() {
    this.closeTontinesEventsMenu();
    this.router.navigate(['dashboard/tontines-events/new']);
  }

  // Join a tontine event
  joinTontineEvent() {
    this.closeTontinesEventsMenu();
    this.router.navigate(['dashboard/tontines-events/join/0']);
  }

  // Open a wallet
  openWallet() {
    this.closeTontinesEventsMenu();
    this.router.navigate(['dashboard/my-wallet']);
  }


}
