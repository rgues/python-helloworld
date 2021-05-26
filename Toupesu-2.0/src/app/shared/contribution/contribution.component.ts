import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { EventService } from '../service/events.service';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss'],
})
export class ContributionComponent implements OnInit {

  @Input() tontineName: string;
  @Input() amountPay: number;
  @Input() balance: number;
  @Input() currency: string;

  isModeSelected: boolean[];
  currentTontine: any;

  constructor(
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private event: EventService
  ) { 
      this.event.subscribe('modal-close', data => {
        if (data && data.result){
          this.closeContribute(data.result);
        } 
      });
      this.initSelect();
      this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {
    this.isModeSelected[0] = true;
  }

  // init select mode
  initSelect() {
    this.isModeSelected = [];
    for(let i = 0; i < 3; i++) {
      this.isModeSelected.push(false);
    }
  }

  segmentChanged(event) {
    let i = 0;
    while(i < this.isModeSelected.length) {
      if (i === parseInt(event.detail.value)) {
        this.isModeSelected[i] = true;
      } else {
        this.isModeSelected[i] = false;
      }
      i++;
    }
  }

  closeContribute(ans: any) {
    this.modatCtrl.dismiss(ans, 'cancel');
  }

}
