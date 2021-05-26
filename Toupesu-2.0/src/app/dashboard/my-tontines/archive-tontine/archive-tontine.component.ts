import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll, NavParams, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { TontineService } from '../services/tontine.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';


@Component({
  selector: 'app-archive-tontine',
  templateUrl: './archive-tontine.component.html',
  styleUrls: ['./archive-tontine.component.scss'],
})
export class ArchiveTontineComponent implements OnInit {

  loading: boolean;
  tontineSelected: any;
  filterData: any[];
  listData: any[];
  allData: any[];
  nbItems: number;
  option: boolean;
  param: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modal: ModalController,
    private event: EventService,
    private alertController: AlertController,
    private tontine: TontineService,
    private translate: TranslateService,
    private tontineError: TontineErrorService,
    private error: ErrorService,
    private ui: UiService,
    private navParams: NavParams
  ) {
    this.filterData = [];
    this.listData = [];
    this.loading = false;
    this.option = false;
    this.allData = [];
    this.tontineSelected = [];
    this.nbItems = 15;
    this.param = this.navParams.get('tontines');
  }

  ngOnInit() {
    this.getData(this.param);
  }

  // Get all data
  getData(data: any) {
    this.allData = [];
    data.forEach(element => {
      this.allData.push({ select: false, tontine_id: element.tontine.tontine_id, name: element.tontine.name, archived: 1 });
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
  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  // confirm archivation
  confirmArchiveMessage() {
    const messages = [];
    this.translate.get(['M_ARCHIVE_TITLE', 'M_ALL_ARCHIVE_MESSAGE', 'CANCEL_TEXT', 'YES_TEXT'])
      .subscribe(trans => {
        messages.push(trans.M_ARCHIVE_TITLE);
        messages.push(trans.M_ALL_ARCHIVE_MESSAGE);
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

            this.archviveTontineService();
          }
        }
      ]
    });

    await alert.present();
  }

  // update the tontine selected
  updateTontineSelected() {
    this.tontineSelected = this.listData.filter(data => { return data.select === true });
  }

  // Archive tontine service
  archviveTontineService() {
    const data = {
      liste_tontine: this.tontineSelected
    };

    this.loading = true;

    if (this.tontineSelected && this.tontineSelected.length > 0) {

      this.translate.get(['ARCHIVE_PROCESSING']).subscribe(trans => {
        this.ui.presentLoading(trans.ARCHIVE_PROCESSING);
      });

      this.tontine.disableTontine(data).subscribe((reponse: any) => {

        if (reponse && reponse.message === "success") {
          this.translate.get(['ALL_ARCHIVE_SUCCESS_MSG']).subscribe(trans => {
            this.ui.presentToast(trans.ALL_ARCHIVE_SUCCESS_MSG);
          });
          this.event.publish('new-tontine');
        }
        this.loading = false;
        this.ui.dismissLoading();
        this.closeModal();

      }, error => {
   
        if (error && error.error && error.error.message === "error") {
          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((ans: any) => {
              this.ui.dismissLoading();
              if (ans && ans.result === "OK") {
                this.archviveTontineService();
              } else {
                this.loading = false;
                this.closeModal();
              }
            });

          } else {
            this.loading = false;
            this.ui.dismissLoading();
            this.closeModal();
            this.tontineError.manageTontineError(error);
          }
        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.closeModal();
          this.error.manageError(error);
        }
      });
    } else {
      this.loading = false;
      this.translate.get(['ERROR_SELECT_TONTINES_MSG']).subscribe(trans => {
        this.ui.presentToast(trans.ERROR_SELECT_TONTINES_MSG);
      });
    }

  }


}
