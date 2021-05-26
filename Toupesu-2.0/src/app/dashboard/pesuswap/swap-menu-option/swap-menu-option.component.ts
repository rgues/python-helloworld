import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { ArchiveSwapComponent } from '../archive-swap/archive-swap.component';
import { SwapService } from '../services/swap.service';
import { EventService } from 'src/app/shared/service/events.service';


@Component({
  selector: 'app-swap-menu-option',
  templateUrl: './swap-menu-option.component.html',
  styleUrls: ['./swap-menu-option.component.scss'],
})
export class SwapMenuOptionComponent implements OnInit {

  curentParams: any;
  requests: any;

  constructor(
    public popoverController: PopoverController,
    private swapError: SwapErrorService,
    private modatCtrl: ModalController,
    private event: EventService,
    private error: ErrorService,
    private swapService: SwapService,
    public router: Router
  ) {
    this.requests = [];
  }

  ngOnInit() {
    this.getAllUserRequest();
  }


  // Close popover
  close() {
    this.popoverController.dismiss();
  }

  // Delete the swap request
  gotoSwapNotPaid() {
    this.close();
    this.router.navigate(['/dashboard/pesuswap/swap-not-paid']);
  }

  // Go the swap notifications
  gotoSwapNotifications() {
    this.close();
    this.router.navigate(['/dashboard/pesuswap/notifs']);
  }


  // can archive text
  canArchiveSwap(request: any) {
    let ican = false;
    if ((request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'expired'))) {
      ican = true;
    }
    return ican;
  }

  archiveSwap() {
    this.close();
    this.modatCtrl
      .create({
        component: ArchiveSwapComponent,
        componentProps: {
          swaps: this.requests
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.data === "archived") {
            this.event.publish('update-request');
          }
        });
      });
  }

  //  Get all the user request
  getAllUserRequest() {
    this.requests = [];
    this.swapService.getAllUserSwapRequest()
      .subscribe((reponse: any) => {
        if (reponse && reponse.requests) {
          this.requests = reponse.requests;
          this.requests = this.requests.filter(data => { return this.canArchiveSwap(data) })
        }
      }, error => {
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.getAllUserRequest();
              }
            });
          }
        } else {
          this.swapError.manageWalletError(error);
        }
      });
  }

}
