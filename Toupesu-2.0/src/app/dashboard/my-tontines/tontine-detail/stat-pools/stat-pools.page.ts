import { Component, OnInit, ViewChild } from '@angular/core';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-stat-pools',
  templateUrl: './stat-pools.page.html',
  styleUrls: ['./stat-pools.page.scss'],
})
export class StatPoolsPage implements OnInit {

  seances: any;
  defaultList: any;
  tontineData: any;
  nbreCycle: number;
  currentCycle: any;
  tontineId: number;
  loading: boolean;
  allData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private tontine: TontineService,
    private error: ErrorService,
    private util: UtilService,
  ) {
    this.seances = [];
    this.defaultList = [];
    this.tontineData = this.tontine.getCurrentTontineData();
    this.tontineId = this.tontineData.tontine.tontine_id;
    this.nbreCycle = 0;
    this.loading = true;
    this.allData = [];
    this.nbItems = 15;
  }

  ngOnInit() {
    this.getCycleSeances(null);
  }

  // Get the tontine's seances of cycles
  getCycleSeances(event: any) {
    this.tontine.getCurrentSeanceData().then((cycle: any) => {
      this.currentCycle = cycle.data.cycle;
      this.nbreCycle = cycle.nbCycles;
      this.getTontinesSeanceData(this.currentCycle, event);
    });
  }

  // Get the tontine's cycles
  getTontinesSeanceData(cycleData: any, event) {
    this.tontine.getTontinesCyclesSeances(cycleData.id).subscribe((reponse: any) => {
      console.log(reponse);
      if (reponse && reponse.message === 'success') {
        if (reponse.seances && reponse.seances.length > 0) {
          this.defaultList = reponse.seances;
          this.defaultList = this.util.oderBySeanceDate(this.defaultList);

          this.tontine.setCurrentSeanceData({ nbCycles: this.nbreCycle, data: { cycle: this.currentCycle, seances: this.defaultList } });

          this.allData = this.defaultList;
          if (this.allData.length > this.nbItems) {
            this.seances = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.seances.push(this.allData[this.seances.length]);
            }
          } else {
            this.seances = this.allData;
          }
        }
      }
      this.loading = false;
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      if (event) {
        event.target.complete();
      }
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getTontinesSeanceData(cycleData, event);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getCycleSeances(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.seances.length < this.allData.length) {
          this.seances.push(this.allData[this.seances.length]);

        } else if (this.seances.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

}
