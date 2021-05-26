import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { Router } from '@angular/router';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-in-progress-list',
  templateUrl: './in-progress-list.page.html',
  styleUrls: ['./in-progress-list.page.scss'],
})
export class InProgressListPage implements OnInit {

  periodForm: FormGroup;
  allData: any;
  filterData: any;
  currentTontine: any;
  proofsList: any;
  loading: boolean;
  nbItems: number;
  minDate: string;
  myPaidDebts: any;

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private debt: DebtsManagerService,
    private event: EventService,
    private tontine: TontineService,
    private dateService: DateserviceService,
    private util: UtilService,
    private error: ErrorService
  ) {
    this.allData = [];
    this.filterData = [];
    this.proofsList = [];
    this.loading = false;
    this.nbItems = 10;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.minDate = this.dateService.formatDateTiret(new Date());
    this.myPaidDebts = [];
    this.event.subscribe('modal-close', () => {
      this.loading = true;
      this.getDebtsInProgress(null);
    });
  }

  ngOnInit() {
    this.initPeriodForm();
    this.loading = true;
    this.getDebtsInProgress(null);
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

  // Filter by date
  filterByDate(formData: any) {
    this.infiniteScroll.disabled = false;
    this.loading = true;
    const filterResult = [];
    const begin = this.dateService.formatDateTiret(formData.dateStart);
    const end = this.dateService.formatDateTiret(formData.dateEnd);
    const DateBegin = new Date(begin);
    const DateEnd = new Date(end);
    this.filterData.forEach(data => {
      const dateTrans = new Date(this.dateService.formatDateTiret(data.facture.created_at));
      if (data && dateTrans >= DateBegin && dateTrans <= DateEnd) {
        filterResult.push(data);
      }
    });
    setTimeout(() => {
      this.loading = false;
    }, 5000);
    this.myPaidDebts = filterResult;
  }

  // Get the description typecontribution_name
  getDescription(items: any) {
    items.forEach(item => {
    });
  }

  // get the debts in progress
  getDebtsInProgress(event) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id
    };
    this.debt.getMemberBillInProgress(param).subscribe((reponse: any) => {
    
      if (reponse && reponse.message === 'success') {
        this.filterData = this.util.oderByFactureDate(reponse.factures);
        this.allData = this.filterData;
        if (this.allData.length > this.nbItems) {
          this.myPaidDebts = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.myPaidDebts.push(this.allData[this.myPaidDebts.length]);
          }
        } else {
          this.myPaidDebts = this.allData;
        }
      }
      this.loading = false;
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      this.loading = false;
      if (event) {
        event.target.complete();
      }
      if (error && error.error) {
        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getDebtsInProgress(event);
            } else {
              this.loading = false;
            }
          });
        }
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getDebtsInProgress(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.myPaidDebts.length < this.allData.length) {
          this.myPaidDebts.push(this.allData[this.myPaidDebts.length]);
        } else if (this.myPaidDebts.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Go to payment detail process
  gotoProgressDebts(debt: any) {
    this.router.navigate(['/', 'dashboard', 'my-tontines', debt.facture.tontine_id, 'debts', debt.facture.id, 'in-progress']);
  }
}
