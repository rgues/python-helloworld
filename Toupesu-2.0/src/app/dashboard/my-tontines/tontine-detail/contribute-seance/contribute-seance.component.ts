import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-contribute-seance',
  templateUrl: './contribute-seance.component.html',
  styleUrls: ['./contribute-seance.component.scss'],
})
export class ContributeSeanceComponent implements OnInit {

  
  @Input() tontineName: string;
  @Input() contribAmount: number;
  tontineData: any;

  constructor(
    private modatCtrl: ModalController,
    private event: EventService,
    private params: NavParams
  ) {
      this.tontineData = this.params.get('data');
      this.event.subscribe('modal-pay-seance', () => {
          this.closeContribute('OK');
      });
   }

  ngOnInit() {}

  closeContribute(message?: any) {
    if (this.modatCtrl) {
      this.modatCtrl.dismiss(message, 'cancel');
    }
  }

}
