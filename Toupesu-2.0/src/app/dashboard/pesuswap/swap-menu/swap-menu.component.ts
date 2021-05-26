import { Component, OnInit } from '@angular/core';
import {  ModalController, NavParams, PopoverController } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { ArchiveComponent } from '../archive/archive.component';
import { DeleteComponent } from '../delete/delete.component';
import { SwapGlobalDataService } from '../services/swap-global-data.service';
import { SwapService } from '../services/swap.service';
import { SwapEditComponent } from '../swap-edit/swap-edit.component';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-swap-menu',
  templateUrl: './swap-menu.component.html',
  styleUrls: ['./swap-menu.component.scss'],
})
export class SwapMenuComponent implements OnInit {

  curentParams: any;
  wallet: any;

  constructor(
    public popoverController: PopoverController,
    private swapService: SwapService,
    private swapError: SwapErrorService,
    private swapData: SwapGlobalDataService,
    private event: EventService,
    public modatCtrl: ModalController,
    private navParams: NavParams,
    private errorService: ErrorService
  ) {
    this.curentParams = this.navParams.get('data');
    this.wallet = this.navParams.get('wallet');
  }

  ngOnInit() { }


  // Close popover
  close() {
    this.popoverController.dismiss();
  }

  // Delete the swap request
  async onDeletePopover() {
    this.close();
    const popover = await this.popoverController.create({
      component: DeleteComponent,
      cssClass: 'delete-popover',
      componentProps: {
        data: this.curentParams
      }
    });

    popover.onDidDismiss().then((ans) => {
      if (ans && ans.data === "deleted") {
        this.event.publish('update-request');
       }
    });
    return await popover.present();
  }

    // can delete swap 
    canDeleteSwap(request: any) {
      return this.swapData.canDeleteSwap(request);
    }
  
    // can delete swap 
    canEditSwap(request: any) {
      return this.swapData.canEditSwap(request);
    }

    // can archive the swap
    canArchiveSwap(request: any) {
      return this.swapData.canArchiveSwap(request);
    }

  // disable swap edition
  disableSwapEdition() {
    this.swapService.disableSwapEdition(this.curentParams.swap_request_id, 1).subscribe(reponse => {
    }, error => {
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.errorService.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.disableSwapEdition();
            }
          });
        } else {
          this.swapError.manageWalletError(error);
        }
      } else {
        this.errorService.manageError(error);
      }
    });
  }

  // Edit swap modal
  onEditSwapModal() {
    this.disableSwapEdition();
    this.close();
    this.modatCtrl
      .create({
        component: SwapEditComponent,
        componentProps: {
          data: this.curentParams,
          wallet: this.wallet 
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans: any) => {
          // update change
          if (ans && ans.data === "updated") {
              this.event.publish('update-request');
          }
        });
      });
  }


  // Archive the swap
  async onArchivePopover() {
    this.close();
    const popover = await this.popoverController.create({
      component: ArchiveComponent,
      cssClass: 'delete-popover',
      componentProps: {
        data: this.curentParams
      }
    });

    popover.onDidDismiss().then((ans) => {
      if (ans && ans.data === "archived") {
        this.event.publish('update-request');
       }
    });
    return await popover.present();
  }

}
