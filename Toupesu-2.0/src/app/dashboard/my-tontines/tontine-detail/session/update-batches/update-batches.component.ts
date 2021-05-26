import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-update-batches',
  templateUrl: './update-batches.component.html',
  styleUrls: ['./update-batches.component.scss'],
})
export class UpdateBatchesComponent implements OnInit {

  seanceId: any;
  tontineId: any;
  numberlot: any;
  loading: boolean;

  constructor(
    public popoverController: PopoverController,
    private error: ErrorService,
    private ui: UiService,
    private tontine: TontineService,
    private storage: StorageData,
    private events: EventService,
    private translate: TranslateService,
    private navParam: NavParams,
    private tontineError: TontineErrorService
  ) { 

      this.numberlot = 1;
      this.seanceId = this.navParam.get('seanceId');
      this.tontineId = this.navParam.get('tontineId');
      this.loading = false;
  }

  ngOnInit() {

  }

  close() {
    this.popoverController.dismiss();
  }

  // edit batches
  setNbBatchesTontine() {
    this.loading = true;
    const params = {
      numberlot: this.numberlot, 
      tontine_id: this.tontineId,
      seance_id: this.seanceId
    };

    this.tontine.setNbBatches(params).subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
            this.translate.get('NB_BATCHES_UPDATED_MSG').subscribe(value => {
                  this.ui.presentToast(value);
            });
            this.storage.remove('app-tontines');
            this.events.publish('new-tontine');
        }
        this.close();
    }, error => {

        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.setNbBatchesTontine();
              } else {
                this.loading = false;
                this.close();
              }
            });
          } else {
            this.loading = false;
            this.close();
            this.tontineError.manageTontineError(error);
          }
         
        } else {
          this.loading = false;
          this.close();
          this.error.manageError(error);
        }
     
    });

  }

  setNbBatchesTontineGo() {
      if (this.numberlot && this.numberlot > 0) {
        this.setNbBatchesTontine();
      }
  }

}
