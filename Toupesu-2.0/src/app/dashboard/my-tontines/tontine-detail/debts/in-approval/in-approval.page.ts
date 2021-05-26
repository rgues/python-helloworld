import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-in-approval',
  templateUrl: './in-approval.page.html',
  styleUrls: ['./in-approval.page.scss'],
})
export class InApprovalPage implements OnInit {

  periodForm: FormGroup;
  allData: any;
  currentTontine: any;
  loading: boolean;
  nbItems: number;
  minDate: string;
  filterData: any[];
  debtsInApproval: any[];
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private util: UtilService,
    private debt: DebtsManagerService,
    private dateService: DateserviceService,
    private tontine: TontineService,
    private error: ErrorService
  ) { 
      this.allData = [];
      this.loading = false;
      this.nbItems = 10;
      this.currentTontine = this.tontine.getCurrentTontineData();
      this.minDate = this.dateService.formatDateTiret(new Date());
      this.debtsInApproval = [];
      this.filterData = [];
  }

  ngOnInit() {
    this.initPeriodForm();
    this.loading = true;
    this.getDebtsInApproval(null);
  }

  initPeriodForm() {
    this.periodForm = this.fb.group({
      dateStart: ['', Validators.required],
      searchTerm:[''],
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
              if (data && dateTrans >= DateBegin  && dateTrans <= DateEnd) {
                filterResult.push(data);
              }
        });
        setTimeout(() => {
          this.loading = false;
        }, 200);
        this.debtsInApproval = filterResult;
      }

      // Search by name 
      searchByName(ev: any) {
        this.infiniteScroll.disabled = false;
        const val = ev.target.value;
        if (val && val.trim() !== '') {
          this.allData = this.filterData.filter((debt) => {
            return ((debt.infos_user.firstname ? debt.infos_user.firstname.toLowerCase().indexOf(val.toLowerCase()) 
            : debt.infos_user.lastname.toLowerCase().indexOf(val.toLowerCase())) > -1);
          });
        } else {
          this.allData = this.filterData;
        }
    
        if (this.allData.length > this.nbItems) {
          this.debtsInApproval = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.debtsInApproval.push(this.allData[this.debtsInApproval.length]);
          }
        } else {
          this.debtsInApproval = this.allData;
        }
      }

     // get the debts in approval
     getDebtsInApproval(event) {
      const param = {
        tontine_id : this.currentTontine.tontine.tontine_id
      };
      this.debt.getBillsToApproveByAdmin(param).subscribe((reponse: any) => {
  
        if (reponse && reponse.message === 'success') {
            this.filterData = this.util.oderByFactureDate(reponse.factures);
            this.allData =  this.filterData;
        if (this.allData.length > this.nbItems) {
          this.debtsInApproval = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.debtsInApproval.push(this.allData[this.debtsInApproval.length]);
          }
        } else {
          this.debtsInApproval = this.allData;
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
              if (data && data.result === 'OK'){
                this.getDebtsInApproval(event);
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
      this.getDebtsInApproval(event);
    }

        // Infinite scroll data
        infinteScrollData(event) {
          setTimeout(() => {
            for (let i = 0; i < this.nbItems; i++) {
              if (this.debtsInApproval.length < this.allData.length) {
                this.debtsInApproval.push(this.allData[this.debtsInApproval.length]);
              } else if (this.debtsInApproval.length === this.allData.length) {
                event.target.disabled = true;
              }
            }
            event.target.complete();
          }, 500);
       
        }
    

    // go to the approval detail
    approvalDetail(debt: any) {
      this.debt.sendDebtsData(debt);
      this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', debt.facture.id, 'in-approval-detail']);
    }
}
