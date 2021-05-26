import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { TontineGlobalDataService } from '../../../services/tontine-global-data.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-bid-edit',
  templateUrl: './bid-edit.component.html',
  styleUrls: ['./bid-edit.component.scss'],
})
export class BidEditComponent implements OnInit {

  shareEditForm: FormGroup;
  startDateSelect: Date;
  loading: boolean;
  errorMiseaprix1: boolean;
  errorMiseaprix2: boolean;
  membersList: any;
  minMemberShare: number;
  minStokvelShare: number;


  constructor(
    private fb: FormBuilder,
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private tontineData: TontineGlobalDataService,
    private events: EventService,
    private error: ErrorService,
    private translate: TranslateService,
    private formUtil: FormUtilsService,
    private ui: UiService,
    private tontineError: TontineErrorService
  ) { 
      this.loading = false;
      this.membersList = [];
      this.minMemberShare = 1;
      this.minStokvelShare = this.tontineData.getNumberShareStokvel();
  }

  ngOnInit() {
     this.InitShareInformation();
     this.getListOfMembers();
  }

  closeShareEdit(response) {
    this.modatCtrl.dismiss(response, 'cancel');
  }

  // can edit bid data
  canEdit() {
    let icannot = false;
    if(this.shareEditForm.invalid 
      || (this.shareEditForm.value.nombre_part_max_tontine <  this.minStokvelShare) 
      || this.loading  
      || (this.shareEditForm.value.nombre_part_max_membre  > this.shareEditForm.value.nombre_part_max_tontine) || (this.shareEditForm.value.numberlot < 1)
    ) {
      icannot = false;
    }
    return icannot;
  }
  
  // Init the tontine form
  InitShareInformation() {
    let formData = this.tontine.getCurrentTontineData();
    const defaultData = {
      tontine: {
        tontine_id: '',
        drawingtype_id: '',
        nombre_part_max_membre: '',
        nombre_part_max_tontine: '',
        contribution_amount: '',
        numberlot: '',
        miseaprixcaisse1: '',
        typeMiseaprix1: 'pourcentage',
        liste_miseaprixcaisse1: [],
        miseaprixcaisse2: '',
        typeMiseaprix2: 'pourcentage',
        liste_miseaprixcaisse2: [],
        ajout_part_membre_en_contribuant_seances_passees_et_restantes: 'non',
        ajout_part_membre_en_contribuant_seulement_seances_restantes: 'oui',
      }
    };

    if (!formData) {
      formData = defaultData;
    }

    this.startDateSelect = new Date(formData.tontine.date_debut);

    this.shareEditForm = this.fb.group({
      tontine_id: [formData.tontine.tontine_id],
      tontine_type_id: [formData.tontine.drawingtype_id],
      nombre_part_max_membre: [formData.tontine.nombre_part_max_membre,
      Validators.compose([Validators.required, Validators.pattern('^[\\d]+$')])],
      nombre_part_max_tontine: [formData.tontine.nombre_part_max_tontine,
        Validators.compose([Validators.required, Validators.pattern('^[\\d]+$')])],
      numberlot: [formData.tontine.numberlot, Validators.compose([Validators.required, Validators.pattern('^[\\d]+$')])],
      contribution_amount: [formData.tontine.coutshare],
      miseaprixcaisse1: [formData.tontine.miseaprixcaisse1],
      typeMiseaprix1: [formData.tontine.typeMiseaprix1],
      liste_miseaprixcaisse1: [],
      miseaprixcaisse2: [formData.tontine.miseaprixcaisse2],
      typeMiseaprix2: [formData.tontine.typeMiseaprix2],
      liste_miseaprixcaisse2: [],
      contributeCas1:
        [formData.tontine.ajout_part_membre_en_contribuant_seances_passees_et_restantes === 'oui' ? true: false],
      contributeCas2:
        [formData.tontine.ajout_part_membre_en_contribuant_seulement_seances_restantes === 'oui' ? true: false],
        ajout_part_membre_en_contribuant_seances_passees_et_restantes: [''],
        ajout_part_membre_en_contribuant_seulement_seances_restantes: ['']
    });

  }

     // Get the list of tontine users
     getListOfMembers() {
      const current = this.tontine.getCurrentTontineData();
      this.tontine.getTontinesMembers(current.tontine.tontine_id).subscribe((reponse: any) => {  
        if (reponse && reponse.members && reponse.members.length > 0) {
          this.membersList = reponse.members;
          this.minMemberShare = this.tontineData.getMinNumberShareMember(this.membersList);
        }
      },error => {
        if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
          this.error.renewSession().then((data: any) => {
                if (data && data.result === 'OK') {
                  this.getListOfMembers();
                }
          });
        } else {
          this.error.manageError(error);
        }
      });
    }

  // Check the first mise à prix
  checkMiseaPrix1(value: any) {
    this.errorMiseaprix1 = this.formUtil.validateMisaPrix(value);
  }

  // Check the second mise à prix
  checkMiseaPrix2(value: any) {
    this.errorMiseaprix2 = this.formUtil.validateMisaPrix(value);
  }

   // Update tontine share
   updateShare() {
    this.loading = true;
    if (this.shareEditForm.value.tontine_type_id === 3) {
      this.shareEditForm.get('liste_miseaprixcaisse1')
        .setValue([{ miseaprixcaisse1: this.shareEditForm.value.miseaprixcaisse1, type: this.shareEditForm.value.typeMiseaprix1 }]);
      this.shareEditForm.get('liste_miseaprixcaisse2')
        .setValue([{ miseaprixcaisse2: this.shareEditForm.value.miseaprixcaisse2, type: this.shareEditForm.value.typeMiseaprix2 }]);
    } else {
      this.shareEditForm.get('liste_miseaprixcaisse1')
        .setValue([{ miseaprixcaisse1: 'NULL', type: 'NULL' }]);
      this.shareEditForm.get('liste_miseaprixcaisse2')
        .setValue([{ miseaprixcaisse2: 'NULL', type: 'NULL' }]);
    }
     this.shareEditForm.value.contributeCas1 ? 
    this.shareEditForm.get('ajout_part_membre_en_contribuant_seances_passees_et_restantes')
    .setValue('oui') :  this.shareEditForm.get('ajout_part_membre_en_contribuant_seances_passees_et_restantes')
    .setValue('non');

    this.shareEditForm.value.contributeCas2 ?
    this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
    .setValue('oui') :  this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
    .setValue('non');
   
    this.tontine.createAndUpdateParametreTontine(this.shareEditForm.value).subscribe(
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
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {
          if (error && error.error && error.error.user_unauthorized) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.updateShare();
              } else {
                this.loading = false;
                this.closeShareEdit('cancel');
              }
            });
          } else {
            this.closeShareEdit('cancel');
            this.tontineError.manageTontineError(error);
          }
        } else {
          this.closeShareEdit('cancel');
          this.error.manageError(error);
        }
      });
  }

}
