import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShareEditComponent } from './share-edit/share-edit.component';
import { ActivatedRoute } from '@angular/router';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.page.html',
  styleUrls: ['./shares.page.scss'],
})
export class SharesPage implements OnInit {

  tontineId: number;
  user: any;
  myTontine: any;
  currentSeance: any;
  members: any;
  bid: any;
  seance: any;
  cycle: any;
  previousSeance: any;

  constructor(
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private tontine: TontineService,
    private modatCtrl: ModalController,
    private errorService: ErrorService
  ) {
    this.tontineId = this.activeRoute.snapshot.params.tontineId;
    this.user = this.userService.getUserData();
    const tontineData = this.tontine.getCurrentTontineData();
    this.myTontine = tontineData.tontine;
    this.currentSeance = tontineData.seance_courante;
    this.members = tontineData.membres;
    this.bid = tontineData.tontine;
    this.seance = tontineData.seance_courante;
    this.previousSeance = tontineData.avant_derniere_seance;
    this.cycle = tontineData.cycle_courant;
  }

  ngOnInit() {
  }

  // Can edit share 
  canEditShare() {
    let canEdit = false;
    if (((!this.seance && this.myTontine.active === 0) || (!this.currentSeance && !this.previousSeance && this.myTontine.active === 1) ||
      (this.seance && this.seance.numero_seance < 1 && this.myTontine.active === 1)) && this.myTontine.administrator === 1) {
      canEdit = true;
    }
    return canEdit
  }

  // Open the modal
  openShareEdit() {
    this.modatCtrl
      .create({
        component: ShareEditComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(res => {
          if (res && res.data === 'success') {
            this.getDetailInfos();
          }
        });
      });
  }
  
  // get the detail infos
  getDetailInfos() {
    this.tontine.getTontineDetail(this.myTontine.tontine_id).subscribe((reponse: any) => {
      if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
        this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
        const tontineData = this.tontine.getCurrentTontineData();
        this.myTontine = tontineData.tontine;
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.errorService.renewSession().then((data: any) => {
          if (data && data.result === "OK") {
            this.getDetailInfos();
          }
        });
      } else {
        this.errorService.manageError(error);
      }
    });
  }

}
