import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss'],
})
export class UpdateRoleComponent implements OnInit {

  @Input() selectedMber: any;
  tontineData: any;
  loading: boolean;

  constructor(
    public popoverController: PopoverController,
    private tontine: TontineService,
    private events: EventService,
    private ui: UiService,
    private storage: StorageData,
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

   // and or remove user role
   addOrRemovaUserRole(member: any) {
    this.loading = true;
    const param = {
      tontine_id: this.tontineData.tontine.tontine_id,
      user_id: member.id,
      administrator: member.administrator === 1 ? 0 : 1
    };

    this.tontine.addOrRemoveUserRole(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('TONTINE_USERS_MSG1').subscribe(value => {
          this.ui.presentToast(value);
        });
        this.storage.remove('app-tontines');
        this.events.publish('new-tontine');
        this.events.publish('new-membre');      
      }

      this.close();
    }, error => {


      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
      
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.addOrRemovaUserRole(member);
            } else {
              this.loading = false;
              this.close();
            }
          });
        } else {
          this.loading = false;
          this.close();
          this.tontineError.manageTontineError(error);
        }
 
      } else {
        this.loading = false;
        this.close();
        this.error.manageError(error);
      }
    
    });
  }

}
