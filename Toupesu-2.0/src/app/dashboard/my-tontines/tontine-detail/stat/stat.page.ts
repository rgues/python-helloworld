import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TontineService } from '../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-tontine-stat',
  templateUrl: './stat.page.html',
  styleUrls: ['./stat.page.scss'],
})
export class StatPage implements OnInit {

  periodForm: FormGroup;
  currentDate: Date;
  cycles: any;
  cyclesTemp: any;
  loading: boolean;
  tontineData: any;
  allStatsData: any;
  currentStatData: any;
  tontineId: number;
  allData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private fb: FormBuilder,
    private tontine: TontineService,
    private dateService: DateserviceService,
    private util: UtilService,
    private error: ErrorService,
    private router: Router
  ) {
    this.loading = false;
    this.currentStatData = null;
    this.cyclesTemp = [];
    this.tontineData = this.tontine.getCurrentTontineData();
    this.tontineId = this.tontineData.tontine.tontine_id;
    this.allStatsData = [];
    this.currentDate = new Date();
    this.cycles = [];
    this.allData = [];
    this.nbItems = 10;
  }

  ngOnInit() {
    this.initPeriodForm();
    this.loading = true;
    this.getTontinesCycle(null);
  }

  initPeriodForm() {
    this.periodForm = this.fb.group({
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required]
    });
  }

  get startOn() {
    return this.periodForm.get('dateStart');
  }

  get endOn() {
    return this.periodForm.get('dateEnd');
  }

  // Filter the history by date
  filterByDate(formData: any) {
    this.infiniteScroll.disabled = false;
    const filterResult = [];
    const begin = this.dateService.formatDateTiret(formData.dateStart);
    const end = this.dateService.formatDateTiret(formData.dateEnd);
    const DateBegin = new Date(begin);
    const DateEnd = new Date(end);
    this.cyclesTemp.forEach(trans => {
      const dateTrans = new Date(this.dateService.formatDateTiret(trans.cycle.created_at));
      if (trans && dateTrans >= DateBegin && dateTrans <= DateEnd) {
        filterResult.push(trans);
      }
    });
    this.cycles = filterResult;
  }

  // Get the tontine's cycles
  getTontinesCycle(event) {
     this.tontine.getTontinesCycles(this.tontineData.tontine.tontine_id).subscribe((reponse: any) => {      
      if (reponse && reponse.message === 'success') {
        if (reponse.cycles && reponse.cycles.length > 0) {
          this.allStatsData = reponse.cycles;
          this.cyclesTemp = this.util.orderByObjetKeyUp(this.allStatsData,'cycle','created_at');
          this.allData = this.cyclesTemp;
          if (this.allData.length > this.nbItems) {
            this.cycles = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.cycles.push(this.allData[this.cycles.length]);
            }
          } else {
            this.cycles = this.allData;
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
            this.getTontinesCycle(event);
          } else {
            this.loading = false;
          }
         });
      } else  {
        this.error.manageError(error);
      }
    }); 
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getTontinesCycle(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.cycles.length < this.allData.length) {
          this.cycles.push(this.allData[this.cycles.length]);
     
        } else if (this.cycles.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Get all seances of a cycle
  getSeance(cycleId: number) {
    this.allStatsData.forEach(data => {
    if (data.cycle.id === cycleId) {
        this.currentStatData = data;
        const nbreCyle = this.allStatsData.length;
        this.tontine.setCurrentSeanceData({ nbCycles: nbreCyle, data: this.currentStatData });
      }
    });
    this.router.navigateByUrl('/dashboard/my-tontines/' + this.tontineId + '/stat/pools');
  }

}
