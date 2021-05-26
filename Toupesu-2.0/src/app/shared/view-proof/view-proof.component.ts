import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-view-proof',
  templateUrl: './view-proof.component.html',
  styleUrls: ['./view-proof.component.scss'],
})
export class ViewProofComponent implements OnInit {

  @Input() proof: number;

  constructor(
    private modatCtrl: ModalController
  ) { 

  }

  ngOnInit() {
  }

  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }


}
