import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';
import { StorageData } from 'src/app/shared/service/storage.service';

@Component({
  selector: 'app-update-share',
  templateUrl: './update-share.component.html',
  styleUrls: ['./update-share.component.scss'],
})
export class UpdateShareComponent implements OnInit {

  @Input() selectedMber: any;
  nbPartList: number[];
  currentTontine: any;
  memberData: any;
  spinner: any;
  loading: boolean;
  memberPart: any;

  constructor(
    public popoverController: PopoverController,
    private error: ErrorService,
    private ui: UiService,
    private tontine: TontineService,
    private storage: StorageData,
    private events: EventService,
    private translate: TranslateService,
    public navParam: NavParams,
    private tontineError: TontineErrorService
  ) { 
      this.nbPartList = [];
      this.memberPart = 1;
      this.currentTontine = this.tontine.getCurrentTontineData();
      this.memberData = this.navParam.get('selectedMber');
      this.loading = false;
  }

  ngOnInit() {
    this.getPartAvailable();
  }

  close() {
    this.popoverController.dismiss();
  }

  // step 0:  get the current number of part of the user
  // step 1:  get the number of part max of the tontine
  // step 2:  get the number of part max of the member
  // step 3:  get the current number of of the tontine
  // step 4:  Construct the liste of part available for tontine


  // Get number of part available
  getPartAvailable() {
    const currentPartMember = this.memberData ? this.memberData.nbPart : 1;
    const memberPartMax = this.currentTontine.tontine.nombre_part_max_membre;
    const tontinePartMax = this.currentTontine.tontine.nombre_part_max_tontine;
    const currentTontinePart = this.currentTontine.membres.liste_membre ? this.currentTontine.membres.liste_membre.length : 0;
    const partAvailable = parseInt(tontinePartMax, 10) - parseInt(currentTontinePart, 10);
    const nbPartShows = partAvailable >  memberPartMax ? (memberPartMax - currentPartMember) : 0;

    if (nbPartShows) {
        for (let i = 0; i < nbPartShows; i++) {
          this.nbPartList.push(i + 1);
        }
    }
    return this.nbPartList;
  }

  // add the new part of a member
  addPartMembreTontine() {
    this.loading = true;
    const params = {
      nbre_part: this.memberPart, // 1
      tontine_id: this.memberData.tontineId,
      user_id: this.memberData.member.id
    };

    this.tontine.addPartMembreTontine(params).subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
            this.translate.get('ADD_SHARE_MSG1').subscribe(value => {
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
                this.addPartMembreTontine();
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

  // can disable add member part
  canDisableAddMember() {
    let can = false;
    if (this.loading || this.memberPart > this.nbPartList[this.nbPartList.length - 1]  || this.memberPart === 0) {
      can = true;
    }
    return can;
  }

  // Add a member
  addPartMembreTontineGo() {
    if (!this.canDisableAddMember()) {
          this.addPartMembreTontine();
    } else {
        this.translate.get('MAX_SHARES_TEXT').subscribe(trans => {
            this.ui.presentToast(`${trans} : ${this.nbPartList.length}`)
        });
    }
  }

}
