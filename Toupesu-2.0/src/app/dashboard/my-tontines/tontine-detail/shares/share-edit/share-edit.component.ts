import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineGlobalDataService } from '../../../services/tontine-global-data.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-share-edit',
  templateUrl: './share-edit.component.html',
  styleUrls: ['./share-edit.component.scss'],
})
export class ShareEditComponent implements OnInit {

  shareEditForm: FormGroup;
  startDateSelect: Date;
  loading: boolean;
  errorMiseaprix0: boolean;
  errorMiseaprix1: boolean;
  errorMiseaprix2: boolean;
  tontineData: any;
  showField: boolean;
  typeMiseaprix: any[];
  minMemberShare: number;
  minStokvelShare: number;
  membersList: any[];

  constructor(
    private fb: FormBuilder,
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private tontinesData: TontineGlobalDataService,
    private events: EventService,
    private error: ErrorService,
    private translate: TranslateService,
    private ui: UiService
  ) {
    this.loading = false;
    this.showField = true;
    this.typeMiseaprix = [{ name: '%', value: 'pourcentage' }, { name: 'value', value: 'valeur' }];
    this.errorMiseaprix1 = false;
    this.errorMiseaprix2 = false;
    this.errorMiseaprix0 = false;
    this.tontineData = this.tontine.getCurrentTontineData();
    this.minMemberShare = 1;
    this.minStokvelShare = this.tontinesData.getNumberShareStokvel();
    this.membersList = [];
  }

  ngOnInit() {
    this.getListOfMembers();
    this.InitShareInformation();
  }

  // Get contribution
  get totalShare() {
    return this.shareEditForm.get('nombre_part_max_membre');
  }

  get maxShareMber() {
    return this.shareEditForm.get('nombre_part_max_tontine');
  }

  get tontinetype() {
    return this.shareEditForm.get('type_tontine_id');
  }

  get nbrOfBaches() {
    return this.shareEditForm.get('numberlot');
  }

  get contribution() {
    return this.shareEditForm.get('contribution_amount');
  }

  get miseaprixcaisse1() {
    return this.shareEditForm.get('miseaprixcaisse1');
  }

  get miseaprixcaisse2() {
    return this.shareEditForm.get('miseaprixcaisse2');
  }

  get type_starter_bid_increment() {
    return this.shareEditForm.get('type_starter_bid_increment');
  }

  get starter_bid_increment() {
    return this.shareEditForm.get('starter_bid_increment');
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
        typemiseaprixcaisse1: this.typeMiseaprix[0].value,
        starter_bid_increment: '',
        type_starter_bid_increment: this.typeMiseaprix[1].value,
        liste_miseaprixcaisse1: [],
        miseaprixcaisse2: '',
        typemiseaprixcaisse2: this.typeMiseaprix[0].value,
        liste_miseaprixcaisse2: [],
        ajout_part_membre_en_contribuant_seances_passees_et_restantes: 'non',
        ajout_part_membre_en_contribuant_seulement_seances_restantes: 'oui',
      }
    };

    if (!formData) {
      formData = defaultData;
    }

    this.startDateSelect = new Date(formData.tontine.date_debut);

    if (formData.tontine.starter_bid_increment < 0) {
      this.showField = false;
      formData.tontine.miseaprixcaisse1 = parseFloat(formData.tontine.starter_bid_increment) * (-1);
      formData.tontine.typemiseaprixcaisse1 = 'valeur';
    }

    if (!formData.tontine.typemiseaprixcaisse1 && formData.tontine.starter_bid_increment >= 0) {
      formData.tontine.typemiseaprixcaisse1 = 'valeur';
    }

    if (!formData.tontine.type_starter_bid_increment) {
      formData.tontine.type_starter_bid_increment = 'valeur';
    }

    this.shareEditForm = this.fb.group({
      tontine_id: [formData.tontine.tontine_id],
      tontine_type_id: [formData.tontine.drawingtype_id],
      nombre_part_max_membre: [formData.tontine.nombre_part_max_membre,
      Validators.compose([Validators.required, Validators.pattern('^[\\d]+$'), Validators.min(this.minMemberShare)])],
      nombre_part_max_tontine: [formData.tontine.nombre_part_max_tontine,
      Validators.compose([Validators.required, Validators.pattern('^[\\d]+$'), Validators.min(this.tontinesData.getNumberShareStokvel())])],
      numberlot: [formData.tontine.numberlot, Validators.compose([Validators.required, Validators.pattern('^[\\d]+$'), Validators.min(1)])],
      contribution_amount: [formData.tontine.coutshare],
      miseaprixcaisse1: [formData.tontine.miseaprixcaisse1],
      typeMiseaprix1: [formData.tontine.typemiseaprixcaisse1],
      starter_bid_increment: [formData.tontine.starter_bid_increment],
      type_starter_bid_increment: [formData.tontine.type_starter_bid_increment],
      liste_miseaprixcaisse1: [],
      miseaprixcaisse2: [formData.tontine.miseaprixcaisse2],
      typeMiseaprix2: [formData.tontine.typemiseaprixcaisse2],
      liste_miseaprixcaisse2: [],
      contributeCas1:
        [formData.tontine.ajout_part_membre_en_contribuant_seances_passees_et_restantes === 'oui' ? true : false],
      contributeCas2:
        [formData.tontine.ajout_part_membre_en_contribuant_seulement_seances_restantes === 'oui' ? true : false],
      ajout_part_membre_en_contribuant_seances_passees_et_restantes: [''],
      ajout_part_membre_en_contribuant_seulement_seances_restantes: ['']
    });

  }

  closeShareEdit(response) {
    this.modatCtrl.dismiss(response, 'cancel');
  }

  //remove spaces 
  removeSpaces(value: any) {
    this.shareEditForm.get('contribution_amount').setValue(this.tontinesData.removeSpace(value));
  }

  // can edit share
  canDisableEditShare() {
    return this.loading || this.shareEditForm.invalid 
    || (this.shareEditForm.value.nombre_part_max_tontine <  this.minStokvelShare) 
    || (this.shareEditForm.value.nombre_part_max_membre > this.shareEditForm.value.nombre_part_max_tontine)  
    || (this.shareEditForm.value.numberlot < 1)
    || (this.shareEditForm.value.tontine_type_id === 3 && (this.showField && (!this.shareEditForm.value.miseaprixcaisse1 || !this.shareEditForm.value.typeMiseaprix1)) 
    || (this.errorMiseaprix1 || this.errorMiseaprix2 || this.errorMiseaprix0));
  }

  // Get the list of tontine users
  getListOfMembers() {
    const current = this.tontine.getCurrentTontineData();
    this.tontine.getTontinesMembers(current.tontine.tontine_id).subscribe((reponse: any) => {
      if (reponse && reponse.members && reponse.members.length > 0) {
        this.membersList = reponse.members.filter(member => { return member.active === 1 });
        this.minMemberShare = this.tontinesData.getMinNumberShareMember(this.membersList);
      }
    }, error => {
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

  // Select Amount Bid Type & Value for increment and starting bid 
  updateStarterBid() {
    if (this.shareEditForm.value.starter_bid_increment < 0) {
      this.shareEditForm.get('starter_bid_increment').setValue("");
      this.starter_bid_increment.setErrors({ invalid: true });
    }
  }

  updateBidIncrement() {
    if (this.shareEditForm.value.miseaprixcaisse1 < 0) {
      this.shareEditForm.get('miseaprixcaisse1').setValue("");
      this.miseaprixcaisse1.setErrors({ invalid: true });
    }
  }

  // hide or show the field for increment
  HideOrShowIncrementField(value: any) {
    let valueInput = value ? String(value).replace(/\s/g, "") : value;
    valueInput = parseFloat(valueInput);
    if (valueInput) {
      this.shareEditForm.get('starter_bid_increment').setValue(valueInput);
    }
    if (valueInput && valueInput < 0) {
      this.showField = false;

      // Reset the step amount to default value
      this.shareEditForm.get('miseaprixcaisse1').setValue(valueInput * (-1));
      this.shareEditForm.get('typeMiseaprix1').setValue('valeur');
    }
    if (valueInput && valueInput >= 0) {
      this.showField = true;
    }
  }

  // Check the first mise à prix
  checkMiseaPrix1(misAprix: any) {
    this.errorMiseaprix0 = false;
    let valueInput = misAprix ? String(misAprix).replace(/\s/g, "") : misAprix;
    this.errorMiseaprix0 = this.tontinesData.validateMisaPrix(valueInput);
    this.shareEditForm.get('starter_bid_increment').setValue(valueInput);

    if (valueInput && isNaN(valueInput)) {
      this.errorMiseaprix0 = true;
    }

    if (this.shareEditForm.value.type_starter_bid_increment === "pourcentage") {
      if (25 <= parseFloat(valueInput)) {
        this.errorMiseaprix0 = true;
      }
    }

    if (this.shareEditForm.value.type_starter_bid_increment === "valeur") {
      let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 4);
      if (ValueInputCheck <= parseFloat(valueInput)) {
        this.errorMiseaprix0 = true;
      }
    }
    // (valueInput === "0") || 
    if ((valueInput === "-0") || (parseFloat(this.shareEditForm.value.contribution_amount) <= parseFloat(valueInput))) {
      this.errorMiseaprix0 = true;
    }
    if (this.errorMiseaprix0) {
      this.starter_bid_increment.setErrors({ invalid: true });
    }
  }

  // Check the second mise à prix
  checkMiseaPrix2(value: any) {
    this.errorMiseaprix2 = this.tontinesData.validateMisaPrix(value);
  }

  // Check the increment
  checkIncrement(value: any) {
    this.errorMiseaprix1 = false;
    let valueInput = value ? String(value).replace(/\s/g, "") : value;
    this.errorMiseaprix1 = this.tontinesData.validateIncrement(valueInput);
    this.shareEditForm.get('miseaprixcaisse1').setValue(valueInput);

    if (this.shareEditForm.value.typeMiseaprix1 === "pourcentage") {
      if (50 <= parseFloat(valueInput)) {
        this.errorMiseaprix1 = true;
      }
    }

    if (this.shareEditForm.value.typeMiseaprix1 === "valeur") {
      let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 2);
      if (ValueInputCheck <= parseFloat(valueInput)) {
        this.errorMiseaprix1 = true;
      }
    }
    
    if ((parseFloat(valueInput) < 1) || (parseFloat(this.shareEditForm.value.contribution_amount) <= parseFloat(valueInput))) {
      this.errorMiseaprix1 = true;
    }

    if (this.errorMiseaprix1) {
      this.miseaprixcaisse1.setErrors({ invalid: true });
    }
  }

  // Check the contribution amount
  checkContribution() {

    if (this.tontineData && this.tontineData.tontine && this.tontineData.tontine.drawingtype_id === 3) {

      this.shareEditForm.get('miseaprixcaisse1').setValue(String(this.shareEditForm.value.miseaprixcaisse1).replace(/\s/g, ""));
      this.shareEditForm.get('starter_bid_increment').setValue(String(this.shareEditForm.value.starter_bid_increment).replace(/\s/g, ""));
      this.errorMiseaprix0 = false;
      this.errorMiseaprix1 = false;

      // check field for increment -  CASE A
      let firstCaseA = false;
      let secCaseA = false;
      let thirdCaseA = false;
      //case A-1
      if (this.shareEditForm.value.typeMiseaprix1 === "pourcentage") {
        if (50 <= parseFloat(this.shareEditForm.value.miseaprixcaisse1)) {
          firstCaseA = true;
        }
        else {
          firstCaseA = false;
        }
      }
      //case A-2
      if (this.shareEditForm.value.typeMiseaprix1 === "valeur") {
        let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 2);
        if (ValueInputCheck <= parseFloat(this.shareEditForm.value.miseaprixcaisse1)) {
          secCaseA = true;
        }
        else {
          secCaseA = false;
        }
      }
      //case A-3
      if ((parseFloat(this.shareEditForm.value.miseaprixcaisse1) < 1) || (parseFloat(this.shareEditForm.value.contribution_amount)
        <= parseFloat(this.shareEditForm.value.miseaprixcaisse1))) {
        thirdCaseA = true;
      } else {
        thirdCaseA = false;
      }

      if (firstCaseA || secCaseA || thirdCaseA) {
        this.errorMiseaprix1 = true;
      }
      else {
        this.errorMiseaprix1 = false;
      }
      if (this.errorMiseaprix1) {
        this.miseaprixcaisse1.setErrors({ invalid: true });
      } else {
        this.miseaprixcaisse1.setErrors(null);
      }

      // check field for bid starting amount - CASE B
      let firstCaseB = false; let secCaseB = false; let thirdCaseB = false;
      //case B-1
      if (this.shareEditForm.value.type_starter_bid_increment === "pourcentage") {
        if (25 <= parseFloat(this.shareEditForm.value.starter_bid_increment)) {
          firstCaseB = true;
        } else {
          firstCaseB = false;
        }
      }
      //case B-2
      if (this.shareEditForm.value.type_starter_bid_increment === "valeur") {
        let ValueInputCheck = (parseFloat(this.shareEditForm.value.contribution_amount) / 4);
        if (ValueInputCheck <= parseFloat(this.shareEditForm.value.starter_bid_increment)) {
          secCaseB = true;
        }
        else {
          secCaseB = false;
        }
      }
      //case B-3
      if ((this.shareEditForm.value.starter_bid_increment === "0") ||
        (this.shareEditForm.value.starter_bid_increment === "-0") ||
        (parseFloat(this.shareEditForm.value.contribution_amount) <=
          parseFloat(this.shareEditForm.value.starter_bid_increment))) {
        thirdCaseB = true;
      }
      else {
        thirdCaseB = false;
      }

      if (firstCaseB || secCaseB || thirdCaseB) {
        this.errorMiseaprix0 = true;
      }
      else {
        this.errorMiseaprix0 = false;
      }
      if (this.errorMiseaprix0) {
        this.starter_bid_increment.setErrors({ invalid: true });
      } else {
        this.starter_bid_increment.setErrors(null);
      }
    }

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
        .setValue('oui') : this.shareEditForm.get('ajout_part_membre_en_contribuant_seances_passees_et_restantes')
          .setValue('non');

    this.shareEditForm.value.contributeCas2 ?
      this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
        .setValue('oui') : this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
          .setValue('non');
    this.shareEditForm.get('contribution_amount').setValue(this.shareEditForm.value.contribution_amount.toString().replace(/\s/g, ""));
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

          if (error && error.error && error.error.tontine_not_found) {
            this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
              this.ui.presentToast(trans);
            });
            this.closeShareEdit('cancel');
          }

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
          }

        } else {
          this.closeShareEdit('cancel');
          this.error.manageError(error);
        }
      });
  }

}
