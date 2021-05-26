import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  reasonList: any;

  constructor(
    private modatCtrl: ModalController,
    private navparams: NavParams
  ) {
      const reasons = this.navparams.get('data');
      this.reasonList = reasons.liste_admin_refusal;
  }

  ngOnInit() {}

  closeValidation() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

}
