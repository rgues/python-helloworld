import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MyWalletMenuComponent } from './my-wallet-menu/my-wallet-menu.component';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.page.html',
  styleUrls: ['./my-wallet.page.scss'],
})
export class MyWalletPage implements OnInit {

  constructor(
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
  }

  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MyWalletMenuComponent,
      event: ev
    });
    return await popover.present();
  }

}
