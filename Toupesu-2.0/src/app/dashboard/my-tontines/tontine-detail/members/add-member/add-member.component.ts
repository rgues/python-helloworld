import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { TontineService } from '../../../services/tontine.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  tontineData: any;
  timeRemainHour: number;

  constructor(
    private modatCtrl: ModalController,
    private dateService: DateserviceService,
    private tontine: TontineService
  ) {
      this.tontineData = this.tontine.getCurrentTontineData();
      this.getRemainTime(this.tontineData.tontine);
      
   }

  ngOnInit() {}

  closeAddMember() {
    this.modatCtrl.dismiss(null, 'cancel');
  }


  // get the remain time
  getRemainTime(data: any) {
    this.timeRemainHour =  this.dateService.getRemainTime(data);
  }


}
