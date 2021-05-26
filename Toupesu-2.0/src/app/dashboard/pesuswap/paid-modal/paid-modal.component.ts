import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-paid-modal',
  templateUrl: './paid-modal.component.html',
  styleUrls: ['./paid-modal.component.scss'],
})
export class PaidModalComponent implements OnInit {

  
  @Input() exchange: string;
  @Input() amount: number;
  swapData: any;

  constructor(
    private modatCtrl: ModalController,
    private event: EventService,
    private params: NavParams
  ) {
      this.swapData = this.params.get('data');
      this.event.subscribe('modal-close', () => {
          this.closeContribute();
      });
   }

  ngOnInit() {}

  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

}
