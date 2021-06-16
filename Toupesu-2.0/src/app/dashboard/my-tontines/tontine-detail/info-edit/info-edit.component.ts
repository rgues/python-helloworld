import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TontineService } from '../../services/tontine.service';
import { LocationService } from 'src/app/shared/service/location.service';
import { TranslateService } from '@ngx-translate/core';
import { States } from 'src/app/shared/models/countries';
import { ErrorService } from 'src/app/shared/service/error.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { ConstantService } from 'src/app/shared/service/constant.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';

interface Periodicity {
  value: string;
  key: string;
  label: string;
}

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.scss'],
})
export class InfoEditComponent implements OnInit {

  infoEditForm: FormGroup;
  states: States[];
  statesList: States[];
  typeOfTontine: any;
  periodicities: Periodicity[] = [];
  defaultState: any;
  startDateSelect = new Date();
  validationMessages: any;
  minAmount: number;
  minAmountMessage: string;
  loading: boolean;
  isDateValid: boolean;
  currentSeance: any;
  currentTontine: any;
  minDate: string;
  typesCaution: any;

  MsgTontinePeriodicity: any = "";
  ShowTontinePeriodicityMonthly: boolean = false;
  MonthDayOccurency: number = 1;
  MonthDayOccurencyMsg: any = "";
  MonthDayOccurencyLabel: any = "";
  errorDocFormat: boolean;
  maxDate: any = (new Date()).getFullYear() + 5;
  previousSeance: any;

  constructor(
    private fb: FormBuilder,
    private modatCtrl: ModalController,
    private zone: NgZone,
    private events: EventService,
    private tontine: TontineService,
    private tontineData: TontineGlobalDataService,
    private tontineError: TontineErrorService,
    private paymentData: PaymentGlobalDataService,
    private location: TranslateService,
    private error: ErrorService,
    private locate: LocationService,
    private ui: UiService,
    private dateService: DateserviceService,
    private constant: ConstantService,
  ) {
    this.minAmount = 1;
    this.minAmountMessage = '';
    this.typeOfTontine = [];
    this.states = [];
    this.statesList = [];
    this.startDateSelect = new Date();
    this.loading = false;
    this.isDateValid = false;
    this.minDate = this.dateService.formatDateTiret(new Date());
    this.errorDocFormat = false;
    this.typesCaution = [];
    this.getPeriodicity();
  }

  ngOnInit() {
    this.initValidateMessage();
    let formData = this.tontine.getCurrentTontineData();
    this.currentTontine = formData;
    this.currentSeance = formData.seance_courante;
    this.previousSeance = formData.avant_derniere_seance;
    this.defaultState = this.locate.getCurrentUserCountry();
    this.initInfoEditForm(formData.tontine);
    this.getCountries(false);
    this.getTypes();
    this.getCautionList();
  }

  // Form getters
  get tontineName() {
    return this.infoEditForm.get('tontine_name');
  }

  get tontineDesc() {
    return this.infoEditForm.get('description');
  }

  get tontineType() {
    return this.infoEditForm.get('drawingtype_id');
  }

  get tontineCountry() {
    return this.infoEditForm.get('country');
  }

  get tontineCurrenccy() {
    return this.infoEditForm.get('currrency_form');
  }

  get tontineAmount() {
    return this.infoEditForm.get('contribution_amount_form');
  }

  get tontineFrequency() {
    return this.infoEditForm.get('periodicite');
  }

  get tontineDate() {
    return this.infoEditForm.get('startDate');
  }

  get cautionAmount() {
    return this.infoEditForm.get('caution_amount');
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

  // Can edit Info
  canEditInfo() {
    let canEdit = false;
    if (((!this.currentSeance && this.currentTontine.tontine.active === 0) || (!this.currentSeance && !this.previousSeance && this.currentTontine.tontine.active === 1) ||
      (this.currentSeance && this.currentSeance.numero_seance < 1 && this.currentTontine.tontine.active === 1)) && this.currentTontine.tontine.administrator === 1) {
      canEdit = true;
    }
    return canEdit
  }

  // can edit caution
  canEditCaution(cautiondId) {
    let ican = false;
    if (cautiondId && (this.currentSeance && this.currentSeance.numero_seance < 2)
       || !cautiondId && (this.currentSeance && this.currentSeance.numero_seance < 1)
       || !this.currentSeance
    ) {
      ican = true;
    }
    return ican;
  }

  // Form message init
  initValidateMessage() {
    this.location.get(['M_NAME_REQUIRED', 'M_DESCRIPTION_REQUIRED',
      'M_TYPE_REQUIRED', 'M_COUNTRY_REQUIRED', 'M_CURRENCY_REQUIRED', 'M_AMOUNT_REQUIRED'
      , 'M_FREQUENCY_REQUIRED', 'M_STARTDATE_REQUIRED']).subscribe(trans => {

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
          startDate: [
            { type: 'required', message: trans.M_STARTDATE_REQUIRED }
          ],
        };
      });
  }

  initInfoEditForm(formData: any) {

    if (formData.active === 0) {
      this.startDateSelect = this.dateService.addDays(new Date(), 1);
    } else {
      this.startDateSelect = formData && formData.date_debut ? new Date(formData.date_debut) : this.dateService.addDays(new Date(), 1);
    }

    const periode: string = formData && formData.periodicite ? formData.periodicite : null;
    this.infoEditForm = this.fb.group({
      tontine_id: [formData && formData.tontine_id ? formData.tontine_id : ''],
      slogan: [formData && formData.slogan ? formData.slogan : ''],
      monthFrequencyOption: [formData && formData.is_week_day === 0 ? 0 : 1],
      is_week_day: [formData && formData.is_week_day === 0 ? 0 : 1],
      frequence: [formData && formData.frequence ? formData.frequence : '1'],
      country_key: [''],
      periodicite_key: [formData && formData.periodicite_key ? formData.periodicite_key : 'TONTINE_PERIODICITY_MONTH'],
      type_tontine_key: [''],
      quality_id: [formData && formData.quality_id ? formData.quality_id : ''],
      drawingtype_id: [''],
      periodicite: [periode ? periode.charAt(0).toUpperCase() + periode.slice(1) : 'Month'],
      country: ['', Validators.compose([Validators.required])],
      tontine_name: [formData && formData.name ? formData.name : '', Validators.compose([Validators.required])],
      description: [formData && formData.description ? formData.description : ''],
      contribution_amount: [formData && formData.coutshare ? formData.coutshare : ''],
      contribution_amount_form: [{ value: formData && formData.coutshare ? formData.coutshare : '', disabled: this.canEditInfo() ? false : true },
      Validators.compose([Validators.required, Validators.min(this.minAmount), Validators.pattern('^[0-9]+$')])],
      currency: [formData && formData.monnaie ? formData.monnaie : this.defaultState ? this.defaultState.device_name : ''],
      currency_form: [{
        value: formData && formData.monnaie ? formData.monnaie : this.defaultState ? this.defaultState.device_name : '', disabled: this.canEditInfo() ? false : true
      }, Validators.compose([Validators.required])],
      startDate: [{ value: this.dateService.formatDateTiret(this.startDateSelect), disabled: this.canEditInfo() ? false : true }, Validators.compose([Validators.required])],
      tontine_date: [this.dateService.formatDateTiret(this.startDateSelect)],
      with_caution: [formData && formData.caution_id ? true : false],
      caution_id: [formData && formData.caution_id ? formData.caution_id : null],
      type_caution: [formData && formData.caution_type ? formData.caution_type : 'member'], //value = part ou member
      caution_amount: [formData && formData.caution_amount ? formData.caution_amount : 0, Validators.compose([Validators.min(0)])]
    });

    this.getCurrentDateInfo(this.infoEditForm.value.startDate, this.infoEditForm.value.periodicite);

    this.OptionChange(this.infoEditForm.value.monthFrequencyOption, this.infoEditForm.value.startDate);

    this.checkDate(this.infoEditForm.value.startDate);
  }

  // Close the modal
  closeInfoEdit(response: string) {
    this.modatCtrl.dismiss(response, 'cancel');
  }

  // initialize type
  typesInit(listTontinesTypes: any) {
    this.zone.run(() => {
      this.typeOfTontine = listTontinesTypes;
    });

    setTimeout(() => {
      const formData = this.tontine.getCurrentTontineData().tontine;
      const currentType = formData && formData.drawingtype_id ? formData.drawingtype_id : 1;
      this.infoEditForm.get('drawingtype_id').setValue(currentType);
      this.typeOfTontine.forEach(data => {
        if (data.type.id === parseInt(currentType, 10)) {
          this.infoEditForm.get('type_tontine_key').setValue(data.key ? data.key : 'TYPE_TONTINE_ID1');
        }
      });
    }, 200);
  }

  // Get the type of tontines
  getTypes() {
    this.tontine.getTypeTontine().subscribe((typeTontines: any) => {
      const listTontinesTypes = [];
      typeTontines.type.forEach(typeData => {
        this.location.get(`TYPE_TONTINE_ID${typeData.id}`).subscribe(value => {
          if (typeData.id === 1 || typeData.id === 2 || typeData.id === 3 || typeData.id === 5 || typeData.id === 6) {
            listTontinesTypes.push({ type: typeData, key: `TYPE_TONTINE_ID${typeData.id}`, label: value });
          }
        });
      });
      this.typesInit(listTontinesTypes);
    }, error => {
      this.error.manageError(error);
    });
  }

  // initialize country
  conutryInit(states: States[]) {
    this.zone.run(() => {
      this.statesList = states;
    });

    setTimeout(() => {
      const formData = this.tontine.getCurrentTontineData().tontine;
      this.infoEditForm.get('country').setValue(formData && formData.country ? formData.country : this.defaultState ? this.defaultState.country_name : '');
      this.infoEditForm.get('country_key').setValue(formData && formData.country_key ? formData.country_key : '');
    }, 200);
  }

  // Get the list of countries
  getCountries(refresher: boolean) {
    this.locate.getAllCountries(refresher).then((countries: any) => {
      this.states = this.paymentData.formatCountriesData(countries);
      this.conutryInit(this.states);
    });
  }

  // Check if the date is valid
  checkDate(date: any) {
    const currentDate = new Date();
    const inputDate = new Date(date);
    inputDate <= currentDate ? this.isDateValid = false : this.isDateValid = true;
  }

  /// choose your month frequency option
  OptionChange(value, DateChosen) {
    var t = 0;
    if (value === 0) {
      this.infoEditForm.get('is_week_day').setValue('0');
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
      this.infoEditForm.get('is_week_day').setValue('1');
      this.location.get(['MSG_TONTINE_MONTH5']).subscribe(data => {
        this.MonthDayOccurencyMsg = data.MSG_TONTINE_MONTH5 + this.MonthDayOccurencyLabel + ".";
      });
    }
  }

  getCurrentDateInfo(date: any, periodicity: any) {
    this.checkDate(date);
    const inputDate = new Date(date);
    var currentMonth = inputDate.toLocaleString('en-us', { month: 'numeric' });
    var currentYear = inputDate.toLocaleString('en-us', { year: 'numeric' });
    var currentDayName = inputDate.toLocaleString('en-us', { weekday: 'long' });
    this.MsgTontinePeriodicity = "";
    this.MonthDayOccurencyMsg = "";
    this.ShowTontinePeriodicityMonthly = false;
    this.infoEditForm.get('is_week_day').setValue('0');

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
      let OptionMonthChoosen = this.infoEditForm.value.monthFrequencyOption;
      var t = 0;

      if (OptionMonthChoosen === 0) {
        this.infoEditForm.get('is_week_day').setValue('0');
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
        this.infoEditForm.get('is_week_day').setValue('1');
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

  // Remove space
  updateAmount() {
    this.infoEditForm.get('contribution_amount_form').setValue(this.tontineData.removeSpace(this.infoEditForm.value.contribution_amount_form));
  }

  // Update the type
  updateType() {
    const currentType = this.infoEditForm.value.drawingtype_id;
    this.typeOfTontine.forEach(data => {
      if (data.type.id === parseInt(currentType, 10)) {
        this.infoEditForm.get('type_tontine_key').setValue(data.key);
      }
    });
  }

  // Update the currency
  updateCurrency() {
    const currentCountry = this.infoEditForm.value.country;
    this.states.forEach(state => {
      if (state.country_name === currentCountry) {
        this.infoEditForm.get('currency_form').setValue(state.device_name);
        this.infoEditForm.get('country_key').setValue(state.country_key);
        this.minAmountMessage = `${this.minAmount} ${state.device_name}`;
      }
    });
  }

  // update the periodicity key
  updatePeriodicity() {
    const currentperiod = this.infoEditForm.value.periodicite;
    this.periodicities.forEach(period => {
      if (period.value === currentperiod) {
        this.infoEditForm.get('periodicite_key').setValue(period.key);
      }
    });
  }

  // get the list of caution
  getCautionList() {
    this.constant.getCautionType().subscribe(cautions => {
      this.typesCaution = cautions;
    });
  }

  // validate caution
  isCautionValid(formData: any) {
    return this.tontineData.isCautionValid(formData);
  }

  // can create a tontine
  canEditTontine() {
    let ican = false;
    if (!this.isDateValid
      || this.infoEditForm.invalid
      || this.loading
      || (this.infoEditForm.value.periodicite === 'Month'
        && (this.infoEditForm.value.monthFrequencyOption !== 0 && this.infoEditForm.value.monthFrequencyOption !== 1))
      || !this.isCautionValid(this.infoEditForm.value)
    ) {
      ican = true;
    }
    return ican;
  }

  // Create the tontine
  updateGeneralInfoTontine() {
    // when the tontine is created, we get the code generee and display it
    this.loading = true;
    this.infoEditForm.get('tontine_date').setValue(this.dateService.formatDateTiret(this.infoEditForm.value.startDate));
    const data = this.infoEditForm.value;
    data.contribution_amount = data.contribution_amount_form ? data.contribution_amount_form : data.contribution_amount;
    data.currency = data.currency_form ? data.currency_form : data.currency;

    const formData = this.tontineData.updateCaution(data);

    this.tontine.updateTontine(formData).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.location.get('TONTINE_EDIT_INFO_TEXT3').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.events.publish('new-tontine');
          this.closeInfoEdit('success');
        }
      }, error => {
        this.loading = false;
        if (error && error.error) {

          if (error.error.user_unauthorized) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.updateGeneralInfoTontine();
              } else {
                this.loading = false;
              }
            });
          } else {
            this.tontineError.manageTontineError(error);
          }

        } else {
          this.error.manageError(error);
        }
      });
  }

  uploadFile() {
    const param = {
      picture: '',
      tontine_id: this.currentTontine.value.tontine_id
    };
    this.uploadDocumentation(param);
  }

  // Upload documentation
  uploadDocumentation(param) {
    this.loading = true;
    this.tontine.createAndUpdateDocumentationTontine(param).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.location.get('TONTINE_EDIT_INFO_TEXT3').subscribe(value => {
            this.ui.presentToast(value);
          });
        }
      }, error => {
        this.loading = false;
        if (error && error.error) {
          if (error.error.user_unauthorized) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.uploadDocumentation(param);
              }
            });
          }

          if (error.error.tontine_not_found) {
            this.location.get('TONTINE_INVITE_TEXT10').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
        } else {
          this.error.manageError(error);
        }
      });
  }

}
