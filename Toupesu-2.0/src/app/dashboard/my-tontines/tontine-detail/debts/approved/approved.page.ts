import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.page.html',
  styleUrls: ['./approved.page.scss'],
})
export class ApprovedPage implements OnInit {

  debts: any[] = [];
  periodForm: FormGroup;
  allData: any;
  currentTontine: any;
  loading: boolean;
  nbItems: number;
  minDate: string;
  filterDebts: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private debt: DebtsManagerService,
    private dateservice: DateserviceService,
    private tontine: TontineService,
    private event: EventService,
    private util: UtilService,
    private error: ErrorService
  ) {
    this.allData = [];
    this.loading = false;
    this.nbItems = 10;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.minDate = this.dateservice.formatDateTiret(new Date());
    this.filterDebts = [];
    this.event.subscribe('bill-validate', () => {
      this.loading = true;
      this.getDebtsApproved(null);
    });
  }

  ngOnInit() {
    this.initPeriodForm();
    this.loading = true;
    this.getDebtsApproved(null);
  }

  initPeriodForm() {
    this.periodForm = this.fb.group({
      dateStart: ['', Validators.required],
      term: [''],
      dateEnd: ['', Validators.required]
    });
  }

  get startOn() {
    return this.periodForm.get('dateStart');
  }

  get endOn() {
    return this.periodForm.get('dateEnd');
  }

  // Search by name 
  searchByName(ev: any) {
    this.infiniteScroll.disabled = false;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.allData = this.filterDebts.filter((debt) => {
        return ((debt.infos_user.firstname ? debt.infos_user.firstname.toLowerCase().indexOf(val.toLowerCase()) : debt.infos_user.lastname.toLowerCase().indexOf(val.toLowerCase())) > -1);
      });
    } else {
      this.allData = this.filterDebts;
    }

    if (this.allData.length > this.nbItems) {
      this.debts = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.debts.push(this.allData[this.debts.length]);
      }
    } else {
      this.debts = this.allData;
    }
  }

  // Filter by date
  filterByDate(formData: any) {
    this.infiniteScroll.disabled = false;
    this.loading = true;
    const filterResult = [];
    const begin = this.dateservice.formatDateTiret(formData.dateStart);
    const end = this.dateservice.formatDateTiret(formData.dateEnd);
    const DateBegin = new Date(begin);
    const DateEnd = new Date(end);
    this.allData.forEach(data => {
      const dateTrans = new Date(this.dateservice.formatDateTiret(data.facture.created_at));
      if (data && dateTrans >= DateBegin && dateTrans <= DateEnd) {
        filterResult.push(data);
      }
    });
    setTimeout(() => {
      this.loading = false;
    }, 5000);
    this.debts = filterResult;
  }


  // get the debts in progress
  getDebtsApproved(event) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id
    };
    this.debt.getBillReadyForValidation(param).subscribe((reponse: any) => {

      if (reponse && reponse.message === 'success') {
        this.filterDebts = this.util.oderByFactureDate(reponse.factures);
        this.allData = this.filterDebts;
        if (this.allData.length > this.nbItems) {
          this.debts = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.debts.push(this.allData[this.debts.length]);
          }
        } else {
          this.debts = this.allData;
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
              this.getDebtsApproved(event);
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
    this.getDebtsApproved(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.debts.length < this.allData.length) {
          this.debts.push(this.allData[this.debts.length]);
        } else if (this.debts.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Go to payment detail approve process
  gotoApproveDebts(debt: any) {
    this.debt.sendDebtsData(debt);
    this.router.navigate(['/', 'dashboard', 'my-tontines', debt.facture.tontine_id, 'debts', debt.facture.id, 'approved-detail']);
  }

}
