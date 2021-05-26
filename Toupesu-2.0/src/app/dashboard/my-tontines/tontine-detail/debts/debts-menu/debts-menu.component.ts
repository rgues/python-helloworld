import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';

@Component({
  selector: 'debts-menu',
  templateUrl: './debts-menu.component.html',
  styleUrls: ['./debts-menu.component.scss'],
})
export class DebtsMenuComponent implements OnInit {

  currentTontine: any;

  constructor(
    public popoverController: PopoverController,
    private tontine: TontineService
  ) {
      this.currentTontine = this.tontine.getCurrentTontineData();
   }

  ngOnInit() {}

  closeDebtsMenu() {
    this.popoverController.dismiss();
  }

  // check if administrator
  checkIfAdmin() {
    return this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
  }

}
