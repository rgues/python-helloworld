import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, ModalController } from '@ionic/angular';
import { ReasonComponent } from '../../reason/reason.component';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-loans-request-menu',
  templateUrl: './loans-request-menu.component.html',
  styleUrls: ['./loans-request-menu.component.scss'],
})
export class LoansRequestMenuComponent implements OnInit {

  memberData: any;
  currentTontine: any;

  constructor(
    public popoverController: PopoverController,
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private params: NavParams,
    private events: EventService
  ) {
    this.memberData = this.params.get('data');
    this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() { }

  close() {
    this.popoverController.dismiss();
  }

  openValidation(option) {
    this.close();
      this.modatCtrl
      .create({
        component: ReasonComponent,
        componentProps: {
          requestAmount: this.memberData.current_request,
          requestOption: option,
          currency: this.currentTontine.tontine.monnaie,
          data: this.memberData
        }
      })
      .then( modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(ans => {
            if (ans && (ans.data === 'approve' || ans.data === 'reject')) {
              this.events.publish('loan-request');
            }
        });
      });
  }

}
