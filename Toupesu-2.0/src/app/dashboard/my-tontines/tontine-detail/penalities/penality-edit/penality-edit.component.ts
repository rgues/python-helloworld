import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-penality-edit',
  templateUrl: './penality-edit.component.html',
  styleUrls: ['./penality-edit.component.scss'],
})
export class PenalityEditComponent implements OnInit {

  penalityEditForm: FormGroup;
  loading: boolean;
  timeDelayUnit: any;
  penalityUnit: any;
  isTimeCorrect: boolean;

  constructor(
    private fb: FormBuilder,
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private error: ErrorService,
    private ui: UiService,
    private translate: TranslateService,
    private tontineError: TontineErrorService
  ) {
    this.loading = false;
    this.isTimeCorrect = true;
    this.penalityUnit = [{ label: 'num', value: 'valeur' }, { label: '%', value: 'pourcentage' }];
    this.timeDelayUnit = [
      { label: 'ss', value: 'secondes' },
      { label: 'mm', value: 'minutes' },
      { label: 'hh', value: 'heures' },
      { label: 'dd', value: 'jours' }
    ];
   }


  ngOnInit() {
    this.InitPenalitiesInformation();
  }

  // Check if the limite time is correct
  checkTime() {
    switch(this.penalityEditForm.value.typedureesurleretard) {

      case 'secondes' : 
          0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 60  ? 
          this.isTimeCorrect = true : this.isTimeCorrect = false;
        break;

      case 'minutes' : 
      0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 60  ? 
      this.isTimeCorrect = true : this.isTimeCorrect = false;
        break;
        
      case 'heures' : 
      0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 24  ? 
      this.isTimeCorrect = true : this.isTimeCorrect = false;
        break;

      case 'jours' : 
      0 <= this.penalityEditForm.value.dureesurleretard && this.penalityEditForm.value.dureesurleretard < 32  ? 
        this.isTimeCorrect = true : this.isTimeCorrect = false;
        break;

      default: 
        break;
    }
  }

  closePenalityEdit(reponse: string) {
    this.modatCtrl.dismiss(reponse, 'cancel');
  }

  get penalityAbsence() {
    return this.penalityEditForm.get('penaliteabsencesurlacontributionnayantpasbouffe');
  }

  get penalityContrib() {
    return this.penalityEditForm.get('penaliteretardsurlacontributionnayantpasbouffe');
  }

  get penalityContribBid() {
    return this.penalityEditForm.get('delairemboursementcaisse2');
  }

  get penalityLoan() {
    return this.penalityEditForm.get('penalitesurleremboursement');
  }

  get timeDelay() {
    return this.penalityEditForm.get('dureesurleretard');
  }

    // Init the tontine form
    InitPenalitiesInformation() {

      let formData = this.tontine.getCurrentTontineData();
      const defaultData = {
        tontine: {
          tontine_id: '',
          drawingtype_id: 1,

          penalitesurleremboursement: [''],
          typepenalitesurleremboursement: [''],
          liste_penalitesurleremboursement: [],
  
          delairemboursementcaisse2: [''],
          typedelairemboursementcaisse2: [''],
          liste_delairemboursementcaisse2: [],
  
          penaliteretardsurlacontributionnayantpasbouffe: [''],
          typepenaliteretardsurlacontributionnayantpasbouffe: [''],
          liste_penaliteretardsurlacontributionnayantpasbouffe: [],
         
  
          penaliteretardsurlacontributionayantbouffe: [''],
          typepenaliteretardsurlacontributionayantbouffe: [''],
          liste_penaliteretardsurlacontributionayantbouffe: [],
      
          penaliteabsencesurlacontributionayantbouffe: [''],
          typepenaliteabsencesurlacontributionayantbouffe: [''],
          liste_penaliteabsencesurlacontributionayantbouffe: [],
  
          penaliteabsencesurlacontributionnayantpasbouffe: [''],
          typepenaliteabsencesurlacontributionnayantpasbouffe: [''],
          liste_penaliteabsencesurlacontributionnayantpasbouffe: [],
  
          dureesurleretard: [''],
          typedureesurleretard: [''],
          liste_dureesurleretard: []
        }
      };
  
      if (!formData) {
        formData = defaultData;
      }
  
      this.penalityEditForm = this.fb.group({
        tontine_id: [formData.tontine.tontine_id],
        drawingtype_id: [formData.tontine.drawingtype_id],
  
         penalitesurleremboursement: [formData.tontine.penalitesurleremboursement, Validators.required],
      typepenalitesurleremboursement: [formData.tontine.typepenalitesurleremboursement, Validators.required],
      liste_penalitesurleremboursement: [],

      delairemboursementcaisse2: [formData.tontine.delairemboursementcaisse2],
      typedelairemboursementcaisse2: [formData.tontine.typedelairemboursementcaisse2],
      liste_delairemboursementcaisse2: [],


      penaliteretardsurlacontributionnayantpasbouffe: [formData.tontine.penaliteretardsurlacontributionnayantpasbouffe,
      Validators.required],
      typepenaliteretardsurlacontributionnayantpasbouffe: [formData.tontine.typepenaliteretardsurlacontributionnayantpasbouffe,
      Validators.required],
      liste_penaliteretardsurlacontributionnayantpasbouffe: [],

      penaliteretardsurlacontributionayantbouffe: [formData.tontine.penaliteretardsurlacontributionayantbouffe],
      typepenaliteretardsurlacontributionayantbouffe: [formData.tontine.typepenaliteretardsurlacontributionayantbouffe],
      liste_penaliteretardsurlacontributionayantbouffe: [],

      penaliteabsencesurlacontributionayantbouffe: [formData.tontine.penaliteabsencesurlacontributionayantbouffe],
      typepenaliteabsencesurlacontributionayantbouffe: [formData.tontine.typepenaliteabsencesurlacontributionayantbouffe],
      liste_penaliteabsencesurlacontributionayantbouffe: [],

      penaliteabsencesurlacontributionnayantpasbouffe: [formData.tontine.penaliteabsencesurlacontributionnayantpasbouffe,
      Validators.required],
      typepenaliteabsencesurlacontributionnayantpasbouffe: [formData.tontine.typepenaliteabsencesurlacontributionnayantpasbouffe,
      Validators.required],
      liste_penaliteabsencesurlacontributionnayantpasbouffe: [],

      dureesurleretard: [formData.tontine.dureesurleretard, Validators.required],
      typedureesurleretard: [formData.tontine.typedureesurleretard, Validators.required],
      liste_dureesurleretard: []
      });
    }

     // Create the tontine
  updatePenalities() {
    this.loading = true;

    if (this.penalityEditForm.value.drawingtype_id === 3) {
      this.penalityEditForm.get('liste_delairemboursementcaisse2')
        .setValue([{
          delairemboursementcaisse2: this.penalityEditForm.value.delairemboursementcaisse2,
          type: this.penalityEditForm.value.typedelairemboursementcaisse2
        }]);
    } else {
      this.penalityEditForm.get('liste_delairemboursementcaisse2')
        .setValue([{
          delairemboursementcaisse2: 'NULL',
          type: 'NULL'
        }]);
    }

    this.penalityEditForm.get('liste_penalitesurleremboursement')
      .setValue([{
        penalitesurleremboursement: this.penalityEditForm.value.penalitesurleremboursement,
        type: this.penalityEditForm.value.typepenalitesurleremboursement
      }]);

    this.penalityEditForm.get('liste_penaliteretardsurlacontributionnayantpasbouffe')
      .setValue([{
        penaliteretardsurlacontributionnayantpasbouffe:
          this.penalityEditForm.value.penaliteretardsurlacontributionnayantpasbouffe,
        type: this.penalityEditForm.value.typepenaliteretardsurlacontributionnayantpasbouffe
      }]);

      this.penalityEditForm.get('liste_penaliteretardsurlacontributionayantbouffe')
      .setValue([{
        penaliteretardsurlacontributionayantbouffe:
          this.penalityEditForm.value.penaliteretardsurlacontributionayantbouffe,
        type: this.penalityEditForm.value.typepenaliteretardsurlacontributionayantbouffe
      }]);

      
    this.penalityEditForm.get('liste_penaliteabsencesurlacontributionnayantpasbouffe')
    .setValue([{
      penaliteabsencesurlacontributionnayantpasbouffe:
        this.penalityEditForm.value.penaliteabsencesurlacontributionnayantpasbouffe,
      type: this.penalityEditForm.value.typepenaliteabsencesurlacontributionnayantpasbouffe
    }]);

      this.penalityEditForm.get('liste_penaliteabsencesurlacontributionayantbouffe')
      .setValue([{
        penaliteabsencesurlacontributionayantbouffe:
          this.penalityEditForm.value.penaliteabsencesurlacontributionayantbouffe,
        type: this.penalityEditForm.value.typepenaliteabsencesurlacontributionayantbouffe
      }]);

    this.penalityEditForm.get('liste_dureesurleretard')
      .setValue([{
        dureesurleretard:
          this.penalityEditForm.value.dureesurleretard,
        type: this.penalityEditForm.value.typedureesurleretard
      }]);

    this.tontine.createAndUpdatePenaliteTontine(this.penalityEditForm.value).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('M_PENALTY_SUCCESSFUL_UPDATED').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.closePenalityEdit('success');
        }
      }, error => {
        this.loading = false;
     
        if (error && error.error) {
          if (error && error.error && error.error.user_unauthorized){
            this.loading = true;
            this.error.renewSession().then((data: any) => {
                if (data && data.result === "OK") {
                      this.updatePenalities();
                } else {
                  this.loading = false;
                  this.closePenalityEdit('cancel');
                }
            });
        } else {
          this.closePenalityEdit('cancel');
          this.tontineError.manageTontineError(error);
        }
         
        } else {
          this.closePenalityEdit('cancel');
          this.error.manageError(error);
        }
      });
    }

}
