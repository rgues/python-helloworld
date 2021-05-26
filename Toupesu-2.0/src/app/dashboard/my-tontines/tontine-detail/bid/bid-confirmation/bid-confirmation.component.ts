import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EncheresService } from 'src/app/shared/service/encheres.service';

@Component({
  selector: 'app-bid-confirmation',
  templateUrl: './bid-confirmation.component.html',
  styleUrls: ['./bid-confirmation.component.scss'],
})
export class BidConfirmationComponent implements OnInit {

  @Input() batcheNum: any;
  @Input() TontineName: any;
  @Input() amount: any;
  @Input() currency: any;
  @Input() userId: any;
  @Input() Seance_Id_Bid: any;
  @Input() Increment_Bid: any;
  @Input() Current_Bid: any;
  @Input() numeroPart: any;
  constructor(
    private modatCtrl: ModalController,
    private encheresService: EncheresService
  ) { }

  ngOnInit() {}

  closeBidConfirmation() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  confirmBid(userId:any, numeroPart:any, seanceId:any,numeroLot:any,current_amount:any,increment:any) {
    this.encheresService.bider(userId, numeroPart, seanceId, numeroLot, current_amount, increment);
    this.closeBidConfirmation();
  }

}
