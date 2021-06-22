import { Component, NgZone, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { States } from 'src/app/shared/models/countries';
import { LocationService } from 'src/app/shared/service/location.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from '../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { TontineGlobalDataService } from '../services/tontine-global-data.service';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

interface Periodicity {
  value: string;
  key: string;
  label: string;
}

@Component({
  selector: 'app-tontine-new-demo',
  templateUrl: './tontine-new-demo.page.html',
  styleUrls: ['./tontine-new-demo.page.scss'],
})
export class TontineNewDemoPage implements OnInit {

  createTontineForm: FormGroup;
  states: States[] = [];
  typeOfTontine: any[] = [];
  periodicities: Periodicity[] = [];
  defaultState: any;
  startDateSelect = new Date();
  validationMessages: any;
  minAmount: number;
  minAmountMessage: string;
  user: any;
  isDateValid: boolean;
  loading: boolean;
  tontineCode: string;
  errorTontine: boolean;
  errorUser: boolean;
  invitationMessage: string;
  currentTontineData: any;
  errorFields: boolean;
  tontinename: string;
  minDate: string;

  MsgTontinePeriodicity: any = "";
  ShowTontinePeriodicityMonthly: boolean = false;
  MonthDayOccurency: number = 1;
  MonthDayOccurencyMsg: any = "";
  MonthDayOccurencyLabel: any = "";
  maxDate: any = (new Date()).getFullYear() + 5;
  paymentTypesAll: any;
  typesCaution: any;

  constructor(
    private fb: FormBuilder,
    private locate: LocationService,
    private event: EventService,
    private location: TranslateService,
    private tontineData: TontineGlobalDataService,
    private paymentData: PaymentGlobalDataService,
    private userService: UserService,
    private tontine: TontineService,
    private errorService: ErrorService,
    private dateService: DateserviceService,
    private zone: NgZone,
    private formUtil: FormUtilsService,
    private router: Router,
    private ui: UiService,
    private alertController: AlertController,
    private auth: AuthService,
    private navController: NavController,
    private tontineError: TontineErrorService,
    private localStorage: LocalStorageService
  ) {
    this.minAmount = 1;
    this.isDateValid = true;
    this.minAmountMessage = '';
    this.user = this.userService.getUserData();

    this.tontinename = '';
    this.minDate = this.dateService.formatDateTiret(new Date ());
    this.getPeriodicity();
  }

  ngOnInit() {
    this.initCreateTontineForm();
    this.initValidateMessage();
    this.getTypes();
    this.getCountries(false);
    this.getCurrentCountry(false);
  }

  get tontineName() {
    return this.createTontineForm.get('tontine_name');
  }

  get tontineDesc() {
    return this.createTontineForm.get('description');
  }

  get tontineType() {
    return this.createTontineForm.get('type_tontine_id');
  }

   get tontineTypePayment() {
    return this.createTontineForm.get('tontine_payment_type_id');
  }

  get tontineCountry() {
    return this.createTontineForm.get('country');
  }

  get tontineCurrenccy() {
    return this.createTontineForm.get('currrency');
  }

  get tontineAmount() {
    return this.createTontineForm.get('contribution_amount');
  }

  get tontineFrequency() {
    return this.createTontineForm.get('frequency');
  }

  // Init periodicity
  getPeriodicity() {
    this.location.get(['TONTINE_PERIODICITY_DAY', 'TONTINE_PERIODICITY_WEEK', 'TONTINE_PERIODICITY_MONTH'])
    .subscribe(data => {
      this.periodicities.push({ value: 'Day', key: 'TONTINE_PERIODICITY_DAY', label: data.TONTINE_PERIODICITY_DAY });
      this.periodicities.push({ value: 'Week', key: 'TONTINE_PERIODICITY_WEEK', label: data.TONTINE_PERIODICITY_WEEK });
      this.periodicities.push({ value: 'Month', key: 'TONTINE_PERIODICITY_MONTH', label: data.TONTINE_PERIODICITY_MONTH });
    });
  }

  initValidateMessage() {
    this.location.get(['M_NAME_REQUIRED', 'M_DESCRIPTION_REQUIRED', 'M_TYPE_REQUIRED'
    ,'M_COUNTRY_REQUIRED','M_CURRENCY_REQUIRED','M_AMOUNT_REQUIRED','M_FREQUENCY_REQUIRED'
    ,'M_PHONE_REQUIRED','M_STARTDATE_REQUIRED'],{amount: 1 }).subscribe(trans => {

      this.validationMessages = {
        name: [
          { type: 'required', message: trans.M_NAME_REQUIRED }
        ],
        description: [
          { type: 'required', message: trans.M_DESCRIPTION_REQUIRED }
        ],
        type: [
          { type: 'required', message: trans.M_TYPE_REQUIRED }
        ],
        typepayment : [
          { type: 'required', message: trans.M_TYPEPAYMENT_REQUIRED }
        ],
        country: [
          { type: 'required', message: trans.M_COUNTRY_REQUIRED }
        ],
        currency: [
          { type: 'required', message: trans.M_CURRENCY_REQUIRED }
        ],
        amount: [
          { type: 'required', message: trans.M_AMOUNT_REQUIRED }
        ],
        frequency: [
          { type: 'required', message: trans.M_FREQUENCY_REQUIRED }
        ],
        phone: [
          { type: 'required', message: trans.M_PHONE_REQUIRED }
        ],
        startDate: [
          { type: 'required', message: trans.M_STARTDATE_REQUIRED }
        ]
      };
    });
  }


  // Get the type of tontines
  getTypes() {
    this.tontine.getTypeTontine().subscribe((typeTontines: any) => {
      const listTontinesTypes = [];
      this.zone.run( () => {
      typeTontines.type.forEach(typeData => {
        this.location.get(`TYPE_TONTINE_ID${typeData.id}`).subscribe(value => {
          if (typeData.id === 1 || typeData.id === 2 || typeData.id === 3 || typeData.id === 5 || typeData.id === 6) {
            listTontinesTypes.push({ type: typeData, key: `TYPE_TONTINE_ID${typeData.id}`, label: value });
          }
        });
      });
        this.typeOfTontine = listTontinesTypes;
      });

      setTimeout(() => {
        this.createTontineForm.get('type_tontine_id').setValue(1);
      }, 200);
    }, error => {
      this.errorService.manageError(error);
    });
  }

  // Update the type
  updateType() {
    const currentType = this.createTontineForm.value.type_tontine_id;
    this.typeOfTontine.forEach(data => {
      if (data.type.id === currentType) {
        this.createTontineForm.get('type_tontine_key').setValue(data.key);
      }
    });
  }

  initCreateTontineForm() {
    this.createTontineForm = this.fb.group({
      frequency: ['Week', Validators.compose([Validators.required])],
      user_id:[''],
      type_tontine_id: [''],
      monthFrequencyOption: [0],
      is_week_day: ['0'],
      active:[0],
      type_tontine_key: ['TYPE_TONTINE_ID1'],
      country_key: [''],
      tontine_payment_type_id:[2],
      frequency_key: ['TONTINE_PERIODICITY_WEEK'],
      country: ['', Validators.compose([Validators.required])],
      tontine_name: ['', Validators.compose([Validators.required])],
      description: [''],
      amount: [{value:'500',disabled: true}],
      contribution_amount: ['500'],
      currency: ['', Validators.compose([Validators.required])],
      tontine_date: [''],
      date_fin:[null],
      startDate: [this.dateService.formatDateTiret(this.startDateSelect), Validators.compose([Validators.required])]
    });
    this.getCurrentDateInfo(this.createTontineForm.value.startDate, this.createTontineForm.value.frequency);
    this.OptionChange(this.createTontineForm.value.monthFrequencyOption, this.createTontineForm.value.startDate);
  }

  // Remove space
  updateAmount() {
      this.createTontineForm.get('contribution_amount').setValue(this.tontineData.removeSpace(this.createTontineForm.value.contribution_amount));
  }

  // Update the periodicity
  updatePeriodicity(periode: string) {
    this.periodicities.forEach(period => {
      if (period.value === periode) {
        this.createTontineForm.get('frequency_key').setValue(period.key);
      }
    });
  }

  /// choose your month frequency option
  OptionChange(value, DateChosen) {
    var t = 0;
    if (value === 0) {
      this.createTontineForm.get('is_week_day').setValue('0');
      t = t + 1;
      let currentDate = new Date(DateChosen);
      var d = currentDate.getDate();
      currentDate.setMonth(currentDate.getMonth() + t);
      if (currentDate.getDate() != d) {
        currentDate.setDate(0);
      }
      this.location.get(['MSG_TONTINE_MONTH4']).subscribe(data => {
        this.MonthDayOccurencyMsg = data.MSG_TONTINE_MONTH4 + "<b><u>" + this.dateService.formatDateTiret(currentDate) + " </u></b>.";
      });
    }

    if (value === 1) {
      this.createTontineForm.get('is_week_day').setValue('1');
      this.location.get(['MSG_TONTINE_MONTH5']).subscribe(data => {
        this.MonthDayOccurencyMsg = data.MSG_TONTINE_MONTH5 + this.MonthDayOccurencyLabel + ".";
      });
    }
  }

  getCurrentDateInfo(date: any, periodicity: any) {
    const inputDate = new Date(date);
    var currentMonth = inputDate.toLocaleString('en-us', { month: 'numeric' });
    var currentYear = inputDate.toLocaleString('en-us', { year: 'numeric' });
    var currentDayName = inputDate.toLocaleString('en-us', { weekday: 'long' });
    this.MsgTontinePeriodicity = "";
    this.MonthDayOccurencyMsg = "";
    this.ShowTontinePeriodicityMonthly = false;
    this.createTontineForm.get('is_week_day').setValue('0');

    if (periodicity === "Month") {
      let currentWeekList = this.tontineData.numDaysInMonth(currentMonth, currentYear, this.tontineData.getDayDif(currentDayName));
      // remove days which starts at position 0 or negative positions
      currentWeekList = currentWeekList.filter(function (x) { return x > 0 });
      let currentDayChosen = new Date(date).getDate();
      this.MonthDayOccurency = 1;
      for (var i = 0; i < currentWeekList.length; i++) {
        if (currentWeekList[i] === currentDayChosen) {
          this.MonthDayOccurency += i;
          break;
        }
      }
      this.ShowTontinePeriodicityMonthly = true;
      this.location.get(['MSG_TONTINE_WEEK1', 'MSG_TONTINE_MONTH1', 'MSG_TONTINE_MONTH3',
        'MSG_TONTINE_MONTH3A', 'MSG_TONTINE_MONTH3B', 'MSG_TONTINE_MONTH3C', 'MSG_TONTINE_MONTH3D']).subscribe(data => {

          var OcurrencyPosition
          switch (this.MonthDayOccurency) {
            case 1:
              OcurrencyPosition = data.MSG_TONTINE_MONTH3A;
              break;
            case 2:
              OcurrencyPosition = data.MSG_TONTINE_MONTH3B;
              break;
            case 3:
              OcurrencyPosition = data.MSG_TONTINE_MONTH3C;
              break;
            default:
              OcurrencyPosition = data.MSG_TONTINE_MONTH3D;
              break;
          }

          this.tontineData.getDayTranslation(currentDayName).subscribe(trans => {
            this.MsgTontinePeriodicity = data.MSG_TONTINE_WEEK1 + this.dateService.formatDateTiret(date) + ".";
            this.MsgTontinePeriodicity += data.MSG_TONTINE_MONTH1 + ".";
            this.MonthDayOccurencyLabel = OcurrencyPosition + trans + data.MSG_TONTINE_MONTH3;
          });

        });

      // Check if Radio button for monthly option is checked - begin
      let OptionMonthChoosen = this.createTontineForm.value.monthFrequencyOption;
      var t = 0;

      if (OptionMonthChoosen === 0) {
        this.createTontineForm.get('is_week_day').setValue('0');
        t = t + 1;
        let currentDate = new Date(date);
        var d = currentDate.getDate();
        currentDate.setMonth(currentDate.getMonth() + t);
        if (currentDate.getDate() != d) {
          currentDate.setDate(0);
        }
        this.location.get(['MSG_TONTINE_MONTH4']).subscribe(data => {
          this.MonthDayOccurencyMsg = "" + data.MSG_TONTINE_MONTH4 + "<b><u>" + this.dateService.formatDateTiret(currentDate) + " </u></b>.";
        });

      }

      if (OptionMonthChoosen === 1) {
        this.createTontineForm.get('is_week_day').setValue('1');
        this.location.get(['MSG_TONTINE_MONTH5']).subscribe(data => {
          this.MonthDayOccurencyMsg = "" + data.MSG_TONTINE_MONTH5 + this.MonthDayOccurencyLabel + ".";
        });
      }

      //// Check if Radio button for monthly option is checked - end
    }
    if (periodicity === "Week") {
      this.ShowTontinePeriodicityMonthly = false;
      this.MonthDayOccurencyMsg = "";
      this.location.get(['MSG_TONTINE_WEEK1', 'MSG_TONTINE_WEEK2', 'MSG_TONTINE_WEEK3']).subscribe(data => {
        this.tontineData.getDayTranslation(currentDayName).subscribe(trans => {
          this.MsgTontinePeriodicity = data.MSG_TONTINE_WEEK1 + this.dateService.formatDateTiret(date) +
            data.MSG_TONTINE_WEEK2 + trans + data.MSG_TONTINE_WEEK3;
        });
      });
    }

    if (periodicity === "Day") {
      this.ShowTontinePeriodicityMonthly = false;
      this.MonthDayOccurencyMsg = "";
    }
  }

  // set to local Stoirage
  setToStorage(data: any) {
    this.localStorage.setItem('app-tontines', JSON.stringify(data));
  }

  // Set the default active country
  getCurrentCountry(refresher: boolean) {
    this.locate.getCurrentCountryInfo(refresher).then((country: any) => {
      if (country) {
        this.defaultState = country.settings;
        if (this.defaultState && this.defaultState.active === 1) {
          this.createTontineForm.get('country').setValue(this.defaultState.country_name);
          this.createTontineForm.get('active').setValue(this.defaultState.active);
          this.createTontineForm.get('currency').setValue(this.defaultState.device_name);
          const countryLabel = `COUNTRY_${this.defaultState.code_country}`;
          this.createTontineForm.get('country_key').setValue(countryLabel);
          this.createTontineForm.get('country_id').setValue(this.defaultState.country_id);
          this.locate.setCurrentUserCountry(this.defaultState);
          this.minAmountMessage = `${this.minAmount} ${this.defaultState.device_name}`;
        } else {
          this.createTontineForm.get('active').setValue(this.defaultState.active);
        }
      }
    }).catch(error => {
    });
  }

  // Get the list of countries
  getCountries(refresher: boolean) {
    this.locate.getAllCountries(refresher).then((countries: any) => {
      this.states =  this.paymentData.formatCountriesData(countries,true);
    });
  }

    // show tontine message alert
    async  showMessage(translations: string[], country: any) {
      let currentLang = this.locate.getCurrentUserLanguage();
      currentLang = currentLang && currentLang.code_langue ? currentLang.code_langue.toLocaleLowerCase() : 'en';
      const alert = await this.alertController.create({
        header: `${translations[0]}`,
        subHeader: `${translations[1]}`,
        inputs: [
          {
            name: 'email',
            type: 'email',
            placeholder: `${translations[2]}`,
          }
        ],
        buttons: [
          {
            text: `${translations[3]}`,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }, {
            text: `${translations[4]}`,
            handler: (ans) => {
              if (ans && this.formUtil.validateEmail(ans.email)) {
                const params = {
                  country_id:country.country_id,
                 country_name:country.country_name,
                 user_id:this.user.id,
                 lang:currentLang,
                 email:ans.email
               };
               this.userService.requestNews(params).subscribe((reponse: any) => {
                 if (reponse && reponse.success) {
                   this.location.get(['NEWS_TITLE', 'NEWS_MESSAGE']).subscribe(trans => {
                     this.ui.presentAlert(trans.NEWS_TITLE, trans.NEWS_MESSAGE);
                   });
                 }
               }, error => {
                   if (error && error.error && error.error.message === 'error'){
                     if (error.error.already_sent) {
                       this.location.get('NEWS_ALREADY_SENT').subscribe(trans => {
                         this.ui.presentToast(trans);
                       });
                     }
                   } else {
                       this.errorService.manageError(error);
                   }
               });
              } else {
                this.location.get('USER_DETAIL_TEXT13').subscribe(trans => {
                  this.ui.presentToast(trans);
                });
              }

            }
          }
        ]
      });

      await alert.present();
    }

  // Update the currency
  updateCurrency(currentCountry) {
    if (currentCountry) {
      this.states.forEach(state => {
        if (state.country_name === currentCountry) {
          this.createTontineForm.get('active').setValue(state.active);
          this.createTontineForm.get('currency').setValue(state.device_name);
          this.createTontineForm.get('country_key').setValue(state.country_key);
          this.minAmountMessage = `${this.minAmount} ${state.device_name}`;
          if (state.active === 0 ) {
            const translation = [];
            this.location.get(['NEWS_TITLE', 'NEWSLETTER_TEXT1','NEWSLETTER_TEXT2', 'NEWS_EMAIL','CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
              translation.push(trans.NEWS_TITLE);
              translation.push(`${trans.NEWSLETTER_TEXT1} ${state.country_name} ${trans.NEWSLETTER_TEXT2}`);
              translation.push(trans.NEWS_EMAIL);
              translation.push(trans.CANCEL_TEXT);
              translation.push(trans.YES_TEXT);
              this.showMessage(translation, state);
            });
          }
        }
      });
    }
  }

  // Show the tontine invitation code and redirect
  async showInvitationMessage(message, alerttMessage, OkText) {
    const alert = await this.alertController.create({
      header: alerttMessage,
      message: message,
      buttons: [
       {
          text: OkText,
          handler: () => {
            const currentDate = new Date();
            this.auth.setAppLastSession(currentDate.getTime());
            this.navController.setDirection('root');
            this.router.navigate(['/dashboard/my-tontines'])
          }
        }
      ]
    });
    await alert.present();
  }


    // can create a tontine
    canCreateTontine() {
      let ican = false;
      if (this.loading
        || !this.isDateValid
        || this.createTontineForm.invalid
        || this.createTontineForm.value.active === 0
        || (this.createTontineForm.value.frequency==='Month'
        && (this.createTontineForm.value.monthFrequencyOption !== 0
        && this.createTontineForm.value.monthFrequencyOption !== 1))
      ) {
        ican = true;
      }
      return ican;
    }

  // Create the tontine
  createTontine() {
    // when the tontine is created, we get the code generee and display it
    this.loading = true;

    const user = this.userService.getUserData();
    this.createTontineForm.get('user_id').setValue(user.id);

    this.tontine.createDemoTontine(this.createTontineForm.value).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.tontineCode = reponse.code_invitation;
          this.location.get(['TONTINE_NEW_DEMO_MSG1','TONTINE_NEW_MSG1']).subscribe(value => {
            this.invitationMessage = `${value.TONTINE_NEW_MSG1}  <strong>${this.tontineCode}
              </strong>, ${value.TONTINE_NEW_DEMO_MSG1}`;
          });
          const tontineData = reponse.tontine;
          this.location.get('TONTINE_CREATION_TEXT',  { tontineName: `<strong>${tontineData.name}</strong>` }).subscribe(value => {
            this.tontinename = `${value}.`;
          });
          this.currentTontineData = reponse.info_tontine[0];
          this.tontine.setCurrentTontineData(this.currentTontineData);
          this.initCreateTontineForm();
          this.event.publish('new-tontine');
          this.location.get(['TONTINE_NEW_TEXT31','MENU_GO']).subscribe(trans => {
              const message = `<p>${this.tontinename}</p> <p>${this.invitationMessage}</p>`;
              this.showInvitationMessage(message, trans.TONTINE_NEW_TEXT31, trans.MENU_GO);
          });
        }
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {
            this.tontineError.manageTontineError(error);
        } else {
          this.errorService.manageError(error);
        }
      });
  }

}
