import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-enable-member',
  templateUrl: './enable-member.component.html',
  styleUrls: ['./enable-member.component.scss'],
})
export class EnableMemberComponent implements OnInit {

  @Input() selectedMber: any;
  tontineData: any;
  loading: boolean;

  constructor(
    public popoverController: PopoverController,
    private tontine: TontineService,
    private events: EventService,
    private ui: UiService,
    private translate: TranslateService,
    private error: ErrorService,
    private tontineError: TontineErrorService
  ) {
      this.tontineData = this.tontine.getCurrentTontineData();
   }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

   //enable or disable
   enableRole(member: any) {
    this.loading = true;
    const param = {
      cycle_id: this.tontineData.cycle_courant.id,
      tontine_id: this.tontineData.tontine.tontine_id,
      liste_membre:[{member_id: member.id , active: member.active === 1 ? 0 : 1}] 
    };
    this.tontine.disableTontineMember(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('TONTINE_VISIBILITY_MSG').subscribe(value => {
          this.ui.presentToast(value);
        });
        this.events.publish('new-tontine');
        this.events.publish('new-membre');      
      }
      this.close();
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.enableRole(member);
            } else {
              this.close();
              this.loading = false;
            }
          });
        } else {
          this.close();
          this.tontineError.manageTontineError(error);
        }
      
      } else {
        this.close();
        this.error.manageError(error);
      }
    
    });
  }

}
