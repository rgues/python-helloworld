import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, ModalController } from '@ionic/angular';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { EventService } from 'src/app/shared/service/events.service';
import { RefundValidationComponent } from '../../refund-validation/refund-validation.component';

@Component({
  selector: 'app-loans-refund-menu',
  templateUrl: './loans-refund-menu.component.html',
  styleUrls: ['./loans-refund-menu.component.scss'],
})
export class LoansRefundMenuComponent implements OnInit {

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
        component: RefundValidationComponent,
        componentProps: {
          requestAmount: this.memberData.data.infos_request.amount,
          requestOption: option,
          type: this.memberData.type,
          currency: this.currentTontine.tontine.monnaie,
          data: this.memberData.data
        }
      })
      .then( modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(ans => {
            if (ans && (ans.data === 'approve' || ans.data === 'reject')) {
              this.events.publish('loan-refund');
            }
        });
      });
  }

}
