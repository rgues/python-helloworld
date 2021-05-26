import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';

@Component({
  selector: 'app-wallet-menu',
  templateUrl: './wallet-menu.component.html',
  styleUrls: ['./wallet-menu.component.scss'],
})
export class WalletMenuComponent implements OnInit {

  currentTontine: any;

  constructor(
    public popoverController: PopoverController,
    private tontine: TontineService
  ) {
      this.currentTontine = this.tontine.getCurrentTontineData();
   }

  ngOnInit() {}

  closeMyWalletMenu() {
    this.popoverController.dismiss();
  }

  // check if is administrator
  isAdmin() {
    let admin = false;
    if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1) {
      admin = true;
    }
    return admin;
  }

}
