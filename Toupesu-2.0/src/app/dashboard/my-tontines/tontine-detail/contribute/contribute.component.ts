import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss'],
})
export class ContributeComponent implements OnInit {

  
  @Input() tontineName: string;
  @Input() contribAmount: number;
  tontineData: any;

  constructor(
    private modatCtrl: ModalController,
    private event: EventService,
    params: NavParams
  ) {
      this.tontineData = params.get('data');
      this.event.subscribe('modal-pay-close', () => {
          this.closeContribute();
      });
   }

  ngOnInit() {}

  closeContribute() {
    if (this.modatCtrl) {
      this.modatCtrl.dismiss(null, 'cancel');
    }
  }

}
