import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll, NavParams, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { SwapErrorService } from 'src/app/dashboard/pesuswap/services/swap-error.service';
import { SwapService } from '../services/swap.service';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';



@Component({
  selector: 'app-archive-swap',
  templateUrl: './archive-swap.component.html',
  styleUrls: ['./archive-swap.component.scss'],
})
export class ArchiveSwapComponent implements OnInit {

  loading: boolean;
  swapSelected: any;
  filterData: any[];
  listData: any[];
  allData: any[];
  nbItems: number;
  option: boolean;
  param: any;
  currentUserData:any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modal: ModalController,
    private userService: UserService,
    private alertController: AlertController,
    private swapService: SwapService,
    private translate: TranslateService,
    private swapError: SwapErrorService,
    private errorService: ErrorService,
    private ui: UiService,
    private navParams: NavParams
  ) {
    this.filterData = [];
    this.listData = [];
    this.loading = false;
    this.option = false;
    this.allData = [];
    this.swapSelected = [];
    this.nbItems = 15;
    this.param = this.navParams.get('swaps');
    this.currentUserData = this.userService.getUserData();
  }

  ngOnInit() {
    this.getData(this.param);
  }

  // Get all data
  getData(data: any) {
    this.allData = [];
    data.forEach(element => {
      this.allData.push({ select: false, swap_request_id: element.swap_request_id, data: element, name : element.infos_user_from && (element.infos_user_from.firstname || element.infos_user_from.lastname) ? element.infos_user_from.firstname +' '+ element.infos_user_from.lastname  : '' });
    });
    this.filterData = this.allData;
    if (this.allData.length > this.nbItems) {
      for (let i = 0; i < this.nbItems; i++) {
        this.listData.push(this.allData[this.listData.length]);
      }
    } else {
      this.listData = this.allData;
    }
  }

  // Filter the list of tontines
  searchForInvitation(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterData.filter((data) => {
        if (data) {
          return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }

      });
      if (this.allData.length > this.nbItems) {
        for (let i = 0; i < this.nbItems; i++) {
          this.listData.push(this.allData[this.listData.length]);
        }
      } else {
        this.listData = this.allData;
      }
    } else {
      this.listData = this.filterData;
    }
  }

  // select or deselect all tontinies
  selectAll(option: boolean) {
    this.loading = true;
    this.allData.forEach((data, index, arr) => {
      arr[index].select = option ? true : false;
    });

    this.filterData = this.allData;

    if (this.allData.length > this.nbItems) {
      for (let i = 0; i < this.nbItems; i++) {
        this.listData.push(this.allData[this.listData.length]);
      }
    } else {
      this.listData = this.allData;
    }

    // resole after changed pb
    setTimeout(() => {
      this.loading = false;
    }, 200);
  }



  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.listData.length < this.allData.length) {
          this.listData.push(this.allData[this.listData.length]);
        } else if (this.listData.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 2000);
  }


  // close modal
  closeModal(ans?: string ) {
    this.modal.dismiss(ans, 'cancel');
  }

  // confirm archivation
  confirmArchiveMessage() {
    const messages = [];
    this.translate.get(['ARCHIVE_SWAP_TEXT', 'M_ALL_ARCHIVE_SWAP_MESSAGE', 'CANCEL_TEXT', 'YES_TEXT'])
      .subscribe(trans => {
        messages.push(trans.ARCHIVE_SWAP_TEXT);
        messages.push(trans.M_ALL_ARCHIVE_SWAP_MESSAGE);
        messages.push(trans.CANCEL_TEXT);
        messages.push(trans.YES_TEXT);
        this.archiveMessage(messages);
      });
  }

  // archive message
  async archiveMessage(translation: string[]) {

    const alert = await this.alertController.create({
      header: `${translation[0]}`,
      message: `${translation[1]}`,
      buttons: [
        {
          text: `${translation[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: `${translation[3]}`,
          handler: () => {
            // send the archivation answer

            this.archiveSwap();
          }
        }
      ]
    });

    await alert.present();
  }

  // update the tontine selected
  updateTontineSelected() {
    this.swapSelected = this.listData.filter(data => { return data.select === true });
  }

 // Archive the swap request
 archiveSwap() {
  const swapData = {list_swap_request_id : this.swapSelected};
 
  this.translate.get('ARCHIVE_PROCESSING').subscribe(trans => {
    this.ui.presentLoading(trans);
  });
  this.loading = true;

  this.swapService.archiveSwapData(swapData)
    .subscribe((reponse: any) => {
      this.ui.dismissLoading();
      if (reponse && reponse.message ==="success") {
          this.closeModal('archived');
          this.translate.get('SWAP_REQUEST_ARCHIVE_TEXT').subscribe(trans => {
            this.ui.presentToast(trans);
          });
      }
      this.loading = false;
    }, error => {
      
      this.loading = false;
      if (error && error.error && error.error.message === "error") {
        if (error && error.error && error.error.user_not_found) {
            this.loading = true;
            this.errorService.renewSession().then((data: any) => {
                  this.ui.dismissLoading();
                  if (data && data.result === "OK") {
                      this.archiveSwap();
                  } else {
                    this.loading = false;
                    this.closeModal();
                  }
            });
        } else {
          this.closeModal();
          this.ui.dismissLoading();
          this.swapError.manageWalletError(error);
        }
      } else {
        this.closeModal();
        this.ui.dismissLoading();
          this.errorService.manageError(error);
      }
    }); 
}

}
