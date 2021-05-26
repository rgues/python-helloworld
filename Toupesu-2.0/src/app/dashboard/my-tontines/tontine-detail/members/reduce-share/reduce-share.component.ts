import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-reduce-share',
  templateUrl: './reduce-share.component.html',
  styleUrls: ['./reduce-share.component.scss'],
})
export class ReduceShareComponent implements OnInit {

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
    private events: EventService,
    private storage: StorageData,
    private tontine: TontineService,
    private translate: TranslateService,
    private navParam: NavParams,
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

  // step 0:  Get the current number of part of the user
  // step 1:  Get the number of part max of the tontine
  // step 2:  Get the number of part max of the member
  // step 3:  Get the current number of of the tontine
  // step 4:  Construct the liste of part available for tontine
  // step 5:  Get the current number of part of the user
  // step 6:  Construct the liste of part available for tontine


  // Get number of part available
  getPartAvailable() {
    const currentPartMember = this.memberData ? this.memberData.nbPart : 1;
    const partAvailable = parseInt(currentPartMember, 10) - 1;
    const nbPartShows = partAvailable > 0 ? partAvailable : 0;

    if (nbPartShows) {
      for (let i = 0; i < nbPartShows; i++) {
        this.nbPartList.push(i + 1);
      }
    }
    return this.nbPartList;
  }

  // Reduce the new part of a member
  reducePartMembreTontine() {
    this.loading = true;
    const params = {
      nbre_part: this.memberPart, // 1
      tontine_id: this.memberData.tontineId,
      user_id: this.memberData.member.id
    };

    this.tontine.removePartMembreTontine(params).subscribe((reponse: any) => {

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
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.reducePartMembreTontine();
            } else {
              this.loading = false;
              this.close();
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

  // Can reduce part
  canDisableReducePart() {
    let can = false;
    if (this.loading || this.memberPart === 0 || this.memberPart > this.nbPartList[this.nbPartList.length - 1]) {
      can = true;
    }
    return can;
  }

  // Keyboard validation
  reducePartMembreTontineGo() {
    if (!this.canDisableReducePart()) {
      this.reducePartMembreTontine();
    } else {
      this.translate.get('MIN_SHARES_TEXT').subscribe(trans => {
          this.ui.presentToast(`${trans} : ${this.nbPartList.length}`);
      });
    }
  }


}
