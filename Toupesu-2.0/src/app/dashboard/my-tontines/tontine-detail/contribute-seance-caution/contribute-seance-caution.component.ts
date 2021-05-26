import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-contribute-seance-caution',
  templateUrl: './contribute-seance-caution.component.html',
  styleUrls: ['./contribute-seance-caution.component.scss'],
})
export class ContributeSeanceCautionComponent implements OnInit {

  
  @Input() tontineName: string;
  @Input() contribAmount: number;
  tontineData: any;

  constructor(
    private modatCtrl: ModalController,
    private event: EventService,
    params: NavParams
  ) {
      this.tontineData = params.get('data');
      this.event.subscribe('modal-pay-seance', () => {
          this.closeContribute('OK');
      });

      console.log('caution components');
   }

  ngOnInit() {}

  closeContribute(message?: any) {
    if (this.modatCtrl) {
      this.modatCtrl.dismiss(message, 'cancel');
    }
  }

}
