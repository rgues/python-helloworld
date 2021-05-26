import { Component, OnInit, Input } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { SwapService } from '../services/swap.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {

  @Input() requestData: any;

  constructor(
    public popoverController: PopoverController,
    private swapService: SwapService,
    private translate: TranslateService,
    private ui: UiService,
    private swapError: SwapErrorService,
    private errorService: ErrorService,
    private navParams: NavParams
  ) { 
      this.requestData = this.navParams.get('data');
  }

  ngOnInit() {}

  // close popover
  close(ans ?: any) {
    this.popoverController.dismiss(ans, null);
  }

  // Archive the swap request
  archiveSwap() {
    const swapData = {list_swap_request_id : [{ swap_request_id : this.requestData.swap_request_id}]};
    this.translate.get('ARCHIVE_PROCESSING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.swapService.archiveSwapData(swapData)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        if (reponse && reponse.message ==="success") {
            this.close('archived');
            this.translate.get('SWAP_REQUEST_ARCHIVE_TEXT').subscribe(trans => {
              this.ui.presentToast(trans);
            });
        }
      }, error => {
       
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
              this.errorService.renewSession().then((data: any) => {
                    this.ui.dismissLoading();
                    if (data && data.result === "OK") {
                        this.archiveSwap();
                    } else {
                      this.close();
                    }
              });
          } else {
            this.close();
            this.ui.dismissLoading();
            this.swapError.manageWalletError(error);
          }
        } else {
          this.close();
          this.ui.dismissLoading();
            this.errorService.manageError(error);
        }
      });
  }

}
