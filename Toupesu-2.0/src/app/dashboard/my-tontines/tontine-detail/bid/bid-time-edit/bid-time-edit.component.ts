import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-bid-time-edit',
  templateUrl: './bid-time-edit.component.html',
  styleUrls: ['./bid-time-edit.component.scss'],
})
export class BidTimeEditComponent implements OnInit {

  tontine: any;

  bidTimeEditForm: FormGroup;
  dayList: any[] = [];
  hourList: any[] = [];
  secList: any[] = [];
  minList: any[] = [];
  loadingReg:boolean=false;
  errorUser: boolean=false;;
  errorTontine: boolean=false;
  errorFrequency: boolean=false;
  isDateValid: boolean;
  
  startDateSelect: Date;

  StartPeriod = [
      {label: 'startDay', checked: false},
      {label: 'startHour', checked: false},
      {label: 'startMin', checked: false},
      {label: 'startSnd', checked: false},
  ];

  EndPeriod = [
      {label: 'endDay', checked: false},
      {label: 'endHour', checked: false},
      {label: 'endMin', checked: false},
      {label: 'endSnd', checked: false},
  ];

  tontineBidTime: FormGroup;
  EditTimeBid: any=[];

  constructor(
    private fb: FormBuilder,
    private tontineService: TontineService,
    private ui: UiService,
    private error: ErrorService,
    private events: EventService,
    private translate: TranslateService,
    private modatCtrl: ModalController,
    private dateService: DateserviceService,
    private tontineError: TontineErrorService
  ) {

    this.isDateValid = false;
    this.tontine = this.tontineService.getCurrentTontineData();

    for (let i = 0; i <= 31; i++) {
      this.dayList.push(i);
    }

    for (let i = 0; i <= 24; i++) {
      this.hourList.push({label: i < 10 ? (0 + i.toString()) : i.toString(), value: i});
    }

    for (let i = 0; i <= 60; i++) {
      this.secList.push({label: i < 10 ? (0 + i.toString()) : i.toString(), value: i});
    }

    for (let i = 0; i <= 60; i++) {
      this.minList.push({label: i < 10 ? (0 + i.toString()) : i.toString(), value: i});
    }

    this.startDateSelect = new Date(this.tontine.tontine.date_debut);
  }

  ngOnInit() {
    this.tontineBidTime = this.fb.group({
      sessionTime: this.fb.group({
        startTime: this.fb.group({
          startDay: new FormControl({value: this.dateService.formatDateTiret(this.startDateSelect), disabled: true}, Validators.required),
          endDay: [''],
        })
      }),

      bidTime: this.fb.group({
        startTime: this.fb.group({
          startDay: [0, Validators.required],
          startHour: [0, Validators.required],
          startMin: [0, Validators.required],
          startSnd: [0, Validators.required],
        }),
        endTime: this.fb.group({
          endDay: [0, Validators.required],
          endHour: [0, Validators.required],
          endMin: [0, Validators.required],
          endSnd: [0, Validators.required],
        })
      })
    });

    this.initUserInfoForm();
  }

  initUserInfoForm() {
    this.EditTimeBid = {
      tontine_id: this.tontine.tontine.tontine_id,
      date_debut: this.tontine.tontine.date_debut,
      time_debut: this.tontine.tontine.time_debut,
      date_fin: [{"valeur":this.tontine.tontine.date_fin,"type":this.tontine.tontine.type_date_fin}],
      time_debut_bid: '',
      time_fin_bid: '',
      date_fin_tontine_event: this.tontine.tontine.date_debut
    };

    switch (this.tontine.tontine.type_time_debut_bid) {
        case 'jours':
            this.tontineBidTime.get('bidTime.startTime.startDay').setValue(this.tontine.tontine.time_debut_bid);
            this.EditTimeBid.time_debut_bid = [{"valeur":this.tontineBidTime.get('bidTime.startTime.startDay').value,"type":"jours"}];
            break;
        case 'heures':
            this.tontineBidTime.get('bidTime.startTime.startHour').setValue(this.tontine.tontine.time_debut_bid);
            this.EditTimeBid.time_debut_bid = [{"valeur":this.tontineBidTime.get('bidTime.startTime.startHour').value,"type":"heures"}];
            break;
        case 'minutes':
            this.tontineBidTime.get('bidTime.startTime.startMin').setValue(this.tontine.tontine.time_debut_bid);
            this.EditTimeBid.time_debut_bid = [{"valeur":this.tontineBidTime.get('bidTime.startTime.startMin').value,"type":"minutes"}];
            break;
        case 'secondes':
            this.tontineBidTime.get('bidTime.startTime.startSnd').setValue(this.tontine.tontine.time_debut_bid);
            this.EditTimeBid.time_debut_bid = [{"valeur":this.tontineBidTime.get('bidTime.startTime.startSnd').value,"type":"secondes"}];
            break;
      default :
        break;
   }

   switch (this.tontine.tontine.type_time_fin_bid) {
    case 'jours':
        this.tontineBidTime.get('bidTime.endTime.endDay').setValue(this.tontine.tontine.time_fin_bid);
        this.EditTimeBid.time_fin_bid = [{"valeur":this.tontineBidTime.get('bidTime.endTime.endDay').value,"type":"jours"}];
        break;
    case 'heures':
        this.tontineBidTime.get('bidTime.endTime.endHour').setValue(this.tontine.tontine.time_fin_bid);
        this.EditTimeBid.time_fin_bid = [{"valeur":this.tontineBidTime.get('bidTime.endTime.endHour').value,"type":"heures"}];
        break;
    case 'minutes':
        this.tontineBidTime.get('bidTime.endTime.endMin').setValue(this.tontine.tontine.time_fin_bid);
        this.EditTimeBid.time_fin_bid = [{"valeur":this.tontineBidTime.get('bidTime.endTime.endMin').value,"type":"minutes"}];
        break;
    case 'secondes':
        this.tontineBidTime.get('bidTime.endTime.endSnd').setValue(this.tontine.tontine.time_fin_bid);
        this.EditTimeBid.time_fin_bid = [{"valeur":this.tontineBidTime.get('bidTime.endTime.endSnd').value,"type":"secondes"}];
        break;
    default :
      break;
  }

}

checkDate(date: any) {
  const currentDate = new Date();
  const inputDate = new Date(date);
  inputDate <= currentDate ? this.isDateValid = false : this.isDateValid = true;
}


OnDateChange(value) {
  let ValueDate = this.dateService.formatDateTiret(value);
  this.EditTimeBid.date_debut = ValueDate;
}


SelectStartPeriod(label: string) {
  let typeVal='';
  switch (label) {
      case 'startDay':
          typeVal='jours';
          break;
      case 'startHour':
          typeVal='heures';
          break;
      case 'startMin':
          typeVal='minutes';
          break;
      case 'startSnd':
          typeVal='secondes';
          break;
    default :
      break;
  }

   this.EditTimeBid.time_debut_bid = [{"valeur":this.tontineBidTime.get('bidTime.startTime.'+label).value,"type":typeVal}];
   this.StartPeriod.forEach(x => {
       this.tontineBidTime.get('bidTime.startTime.'+x.label).disable();
       if(x.label === label) {
           this.tontineBidTime.get('bidTime.startTime.'+label).enable();
       }
   });
}

SelectEndPeriod(label: string) {

  let typeVal='';
  switch (label) {
      case 'endDay':
          typeVal='jours';
          break;
      case 'endHour':
          typeVal='heures';
          break;
      case 'endMin':
          typeVal='minutes';
          break;
      case 'endSnd':
          typeVal='secondes';
          break;
    default :
      break;
  }
  
  this.EditTimeBid.time_fin_bid = [{"valeur":this.tontineBidTime.get('bidTime.endTime.'+label).value,"type":typeVal}];
    
  this.EndPeriod.forEach(y => {
       this.tontineBidTime.get('bidTime.endTime.'+y.label).disable();
       if(y.label === label) {
           this.tontineBidTime.get('bidTime.endTime.'+label).enable();
       }
  });
}

resetForm(): void {

  this.EditTimeBid.time_debut_bid ='';
  this.EditTimeBid.time_fin_bid ='';

  this.StartPeriod.forEach(x => {
       this.tontineBidTime.get('bidTime.startTime.'+x.label).enable();
       this.tontineBidTime.get('bidTime.startTime.'+x.label).setValue(0);
   });

  this.EndPeriod.forEach(y => {
       this.tontineBidTime.get('bidTime.endTime.'+y.label).enable();
       this.tontineBidTime.get('bidTime.endTime.'+y.label).setValue(0);
   });
}

  closeBidTimeEdit() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  editTimeFunc() {
    this.loadingReg = true;
    this.tontineService.createAndUpdateDateTontine(this.EditTimeBid).subscribe(
      (reponse: any) => {
        this.loadingReg = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('TONTINE_BID_SUCCESS1').subscribe(value => {
              this.ui.presentToast(value);
          });
          this.events.publish('new-tontine');
          this.closeBidTimeEdit();
        }
      }, error => {
        this.loadingReg = false;
        if (error && error.error) {
            if (error.error.user_unauthorized) {
              this.loadingReg = true;
              this.error.renewSession().then((data: any) => {
                  if (data && data.result === "OK") {
                    this.editTimeFunc();
                  } else {
                    this.loadingReg = false;
                    this.closeBidTimeEdit();
                  }
              });
            } else {
              this.closeBidTimeEdit();
              this.tontineError.manageTontineError(error);
            }
        } else {
          this.closeBidTimeEdit();
          this.error.manageError(error);
        }
      });
  }
}
