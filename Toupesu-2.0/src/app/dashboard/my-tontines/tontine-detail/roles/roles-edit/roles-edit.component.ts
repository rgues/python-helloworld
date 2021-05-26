import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss'],
})
export class RolesEditComponent implements OnInit {

  rolesEditForm: FormGroup;

  loading: boolean;
  tontineData:any;
  types: any[];
  nbValidatorsList: number [];

  constructor(
    private fb: FormBuilder,
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private events: EventService,
    private error: ErrorService,
    private translate: TranslateService,
    private tontineError: TontineErrorService,
    private ui: UiService
  ) { 
      this.loading = false;
      this.types = [{ name: '%', value: 'pourcentage' }, { name: 'value', value: 'valeur' }];
      this.tontineData = this.tontine.getCurrentTontineData();
      this.nbValidatorsList = [];
      this.getNbValidators();
  }

  ngOnInit() {
     this.InitRolesInformation();
  }

  closeShareEdit(response) {
    this.modatCtrl.dismiss(response, 'cancel');
  }

  // Init the tontine form
  InitRolesInformation() {
    let formData = this.tontine.getCurrentTontineData();
    this.rolesEditForm = this.fb.group({
      tontine_id: [formData.tontine.tontine_id],
      number_admin_max: [formData.tontine.number_admin_max, Validators.compose([Validators.required, Validators.pattern('^[\\d]+$')])],
      number_admin_current: [formData.tontine.number_admin_current],
      number_admin_that_validates_contributions: [formData.tontine.number_admin_that_validates_contributions, Validators.compose([Validators.required, Validators.pattern('^[\\d]+$')])],
      type_number_admin_that_validates_contributions: [this.types[1].value, Validators.required]
    });
  }

  // Nb admins max
  get nbAdminMax() {
    return this.rolesEditForm.get('number_admin_max');
  }

  // Numbers of validators
  get nbValidators() {
    return this.rolesEditForm.get('number_admin_that_validates_contributions');
  }

  // Get the numbers of validators
  getNbValidators() {
    this.nbValidatorsList = [];
    const nbVal =   this.tontineData.tontine.number_admin_current;
    for (let i= 1; i <= nbVal; i++ ) {
      this.nbValidatorsList.push(i);
    }
  }

   // Update tontine share
   updateRoles() {
   
    this.loading = true;
    this.tontine.updateAdminValidator(this.rolesEditForm.value).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('M_TONTINE_SUCCESSFUL_UPDATED').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.events.publish('new-tontine');
          this.closeShareEdit('success');
        }
      }, error => {
       
        if (error && error.error && error.error.message === 'error') {
          if (error && error.error && error.error.user_not_found){
            this.error.renewSession().then((data: any) => {
                if (data && data.result === "OK") {
                      this.updateRoles();
                } else {
                  this.loading = false;
                  this.closeShareEdit('cancel');
                }
            });
        } else  {
          this.loading = false;
          this.closeShareEdit('cancel');
          this.tontineError.manageTontineError(error);
        }
               
        } else {
          this.loading = false;
          this.closeShareEdit('cancel');
          this.error.manageError(error);
        }
      });
  }

}
