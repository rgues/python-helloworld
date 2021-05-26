import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PenalityEditComponent } from './penality-edit/penality-edit.component';
import { PenalitiesListComponent } from './penalities-list/penalities-list.component';
import { ActivatedRoute } from '@angular/router';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-penalities',
  templateUrl: './penalities.page.html',
  styleUrls: ['./penalities.page.scss'],
})
export class PenalitiesPage implements OnInit {

  tontineId: number;
  user: any;
  myTontine: any;
  currentSeance: any;
  members: any;
  bid: any;
  seance: any;
  cycle: any;

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
    this.cycle = tontineData.cycle_courant;
   }

   ngOnInit() {

   }

   // Get detail infor;ation of tontines
   getDetailInfos() {
    this.tontine.getTontineDetail(this.myTontine.tontine_id).subscribe((reponse: any) => {
      if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
          this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
          this.myTontine = reponse.infos_tontine[0].tontine;
      }
    }, error => {
      if (error && error.error && error.error.user_not_found){
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

  openPenalityEdit() {
    this.modatCtrl
      .create({
        component: PenalityEditComponent
      })
      .then( modalEl => { 
        modalEl.present();
        modalEl.onDidDismiss().then(res =>{
          if (res.data === 'success') {
              this.getDetailInfos();
          }
      });
      
      });

  }

  openPenalitiesList() {
    this.modatCtrl
      .create({
        component: PenalitiesListComponent
      })
      .then( modalEl => modalEl.present());
  }

}
