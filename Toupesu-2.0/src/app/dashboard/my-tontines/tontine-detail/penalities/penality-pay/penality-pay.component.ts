import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-penality-pay',
  templateUrl: './penality-pay.component.html',
  styleUrls: ['./penality-pay.component.scss'],
})
export class PenalityPayComponent implements OnInit {

  @Input() tontineName: string;
  @Input() subject: string;
  @Input() amountToPay: number;

  constructor(
    private modatCtrl: ModalController,
    private events: EventService
  ) {
    this.events.subscribe('modal-pay-close', () => {
      this.closePenalityPay();
    });
   }

  ngOnInit() {}

  closePenalityPay() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

}
