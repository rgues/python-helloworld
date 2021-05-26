import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss'],
})
export class ContributeComponent implements OnInit {

  @Input() eventName: string;
  @Input() amountToPay: number;

  constructor(
    private modatCtrl: ModalController
  ) { }

  ngOnInit() {}

  closePayContribution() {
    this.modatCtrl.dismiss('cancel', 'cancel');
  }

}
