import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/shared/service/location.service';
import { TranslateService } from '@ngx-translate/core';
import { States } from 'src/app/shared/models/countries';
import { ErrorService } from 'src/app/shared/service/error.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { TontinesEventsService } from '../../services/tontines-events.service';
import { ModalController } from '@ionic/angular';
import { EventErrorService } from 'src/app/dashboard/tontines-events/services/event-error.service';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { EventService } from 'src/app/shared/service/events.service';
import { PluginService } from 'src/app/shared/service/plugin.service';
import { UiService } from 'src/app/shared/service/ui.service';


@Component({
  selector: 'app-event-info-edit',
  templateUrl: './event-info-edit.component.html',
  styleUrls: ['./event-info-edit.component.scss'],
})
export class EventInfoEditComponent implements OnInit {

  infoEditForm: FormGroup;
  states: States[];
  defaultState: any;
  startDateSelect = new Date();
  loading: boolean;
  validationMessages: any;
  minAmountMessage: string;
  minAmount: number;
  invitationMessage: string;
  tontineName: string;
  tontineEventCode: any;
  eventPicture: any;
  isDateValid: boolean;
  minDate: string;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private location: LocationService,
    private event: TontinesEventsService,
    private events: EventService,
    private form: FormUtilsService,
    private dateService: DateserviceService,
    private paymentData: PaymentGlobalDataService,
    private error: ErrorService,
    private ui: UiService,
    public modatCtrl: ModalController,
    private eventError: EventErrorService,
    private plugin: PluginService
  ) {
    this.states = [];
    this.minAmountMessage = '';
    this.tontineName = '';
    this.minAmount = 1;
    this.loading = false;
    this.tontineEventCode = [];
    this.isDateValid = true;
    this.minDate = this.dateService.formatDateTiret(new Date());
  }

  ngOnInit() {
    this.initValidationMessage();
    this.getCountries(false);
    this.initTontineEventForm();
  }

  // Getters
  get eventName() {
    return this.infoEditForm.get('event_name');
  }

  get eventDesc() {
    return this.infoEditForm.get('description');
  }

  get eventCountry() {
    return this.infoEditForm.get('country');
  }

  get currency() {
    return this.infoEditForm.get('currency');
  }

  get eventAmount() {
    return this.infoEditForm.get('expected_amount');
  }

  get eventStartDate() {
    return this.infoEditForm.get('date_start');
  }

  get eventEndDate() {
    return this.infoEditForm.get('date_end');
  }

  // Init the validation message
  initValidationMessage() {
    this.translate.get(['M_TONTINE_NAME_IS_REQUIRED', 'M_DESCRIPTION_REQUIRED', 'TONTINE_EDIT_TEXT6',
      'M_EXPECTED_AMOUNT_REQUIRED', 'M_STARTDATE_REQUIRED', 'TONTINE_NEW_TEXT8']).subscribe(trans => {
        this.validationMessages = {
          name: [
            { type: 'required', message: trans.M_TONTINE_NAME_IS_REQUIRED }
          ],
          description: [
            { type: 'required', message: trans.M_DESCRIPTION_REQUIRED }
          ],
          country: [
            { type: 'required', message: trans.TONTINE_EDIT_TEXT6 }
          ],
          expected_amount: [
            { type: 'required', message: trans.M_EXPECTED_AMOUNT_REQUIRED }
          ],
          date_start: [
            { type: 'required', message: trans.M_STARTDATE_REQUIRED }
          ],
          date_end: [
            { type: 'required', message: trans.TONTINE_NEW_TEXT8 }
          ],
        };
      });
  }

  initTontineEventForm() {

    let formData = this.event.getCurrentTontineEventData();

    if (formData) {
      formData.date_debut = new Date(formData.date_debut);
      formData.date_fin = new Date(formData.date_fin);
      if (formData.visibility === 'public') { formData.private = false; } else { formData.private = true; }
    }

    this.defaultState = this.location.getCurrentUserCountry();

    const defaultData = {
      title: '',
      description: '',
      code_country: '',
      event_id: '',
      imgUrl: 'assets/default-event.jpg',
      budget: '',
      private: false,
      country: this.defaultState ? this.defaultState.country_name : '',
      country_id: this.defaultState ? this.defaultState.country_id : '',
      currency: this.defaultState ? this.defaultState.device_name : '',
      date_debut: this.dateService.formatDateTiret(this.startDateSelect),
      date_fin: this.dateService.formatDateTiret(this.startDateSelect)
    };

    if (!formData) {
      formData = defaultData;
    }

    this.infoEditForm = this.fb.group({
      event_name: [formData.title, Validators.required],
      event_id: [formData.id, Validators.required],
      privacy: [formData.private],
      code_country: [formData.code_country],
      description: [formData.description, Validators.required],
      image_url: [formData.imgUrl],
      country_id: [formData.country_id],
      country: [formData.country, Validators.required],
      expected_amount: [formData.budget, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      currency: [formData.currency, Validators.compose([Validators.required])],
      date_start: [this.dateService.formatDateTiret(formData.date_debut), Validators.required],
      date_end: [this.dateService.formatDateTiret(formData.date_fin), Validators.required]
    });

    this.eventPicture = formData.imgUrl ? formData.imgUrl : 'assets/default-event.jpg';
    this.checkDate(this.infoEditForm.value.date_start);
  }

  // Close the modal
  closeInfoEdit(message: string) {
    this.modatCtrl.dismiss(null, message);
  }

  checkDate(date: any) {
    const dateParm = new Date();
    const currentDate = new Date(dateParm.getFullYear(), dateParm.getMonth(), dateParm.getDate(), 0, 0, 0, 0);
    const inputDate = new Date(date);
    inputDate < currentDate ? this.isDateValid = false : this.isDateValid = true;
    const endDate = new Date(this.infoEditForm.value.date_end);
    if (this.isDateValid && endDate < inputDate) {
      this.infoEditForm.get('date_end').setValue(this.dateService.formatDateTiret(inputDate));
    }
  }

  // Remove space
  updateAmount() {
    this.infoEditForm.get('expected_amount').setValue(this.form.removeSpace(this.infoEditForm.value.expected_amount));
  }

  // Uplaod the image
  uploadImage() {
    this.plugin.getPicture().subscribe(picture => {
      if (picture) {
        this.infoEditForm.get('image_url').setValue(picture);
        this.eventPicture = picture;
      } else {
        this.infoEditForm.get('image_url').setValue('');
        this.eventPicture = 'assets/default-event.jpg';
      }
    });
  }

  // Get the list of countries
  getCountries(refresher: boolean) {
    this.location.getAllCountries(refresher).then((countries: any) => {
      this.states = this.paymentData.formatCountriesData(countries);
    });
  }

  // Get current counrty data
  getCurrentCountry(countryCode: string) {
    this.states.forEach(country => {
      if (country && country.country_key === countryCode) {
        this.infoEditForm.get('country_id').setValue(country.country_id);
      }
    });
  }

  // Get the tontine event detail
  getDetailTontinesEvent(currentTontineId: any) {
    this.event.getTontineDetail(currentTontineId).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.event.setCurrentTontineEventData(reponse.liste[0]);
        this.translate.get('TONTINE_EVENT_EDIT_SUCCESS1').subscribe(value => {
          this.ui.presentToast(value);
        });
        this.ui.dismissLoading();
        this.events.publish('new-event');
        this.closeInfoEdit('success');
      }
      this.loading = false;
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = false;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getDetailTontinesEvent(currentTontineId);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Update the currency
  updateCurrency() {
    const currentCountry = this.infoEditForm.value.country;
    this.states.forEach(state => {
      if (state.country_name === currentCountry) {
        this.infoEditForm.get('currency').setValue(state.device_name);
        this.infoEditForm.get('code_country').setValue(state.country_key);
        this.infoEditForm.get('country_id').setValue(state.country_id);
      }
    });
  }

  // Edit the tontine
  editTontineEvent() {
    // when the tontine is created, we get the code generee and display it
    this.loading = true;
    this.getCurrentCountry(this.infoEditForm.value.code_country);
    this.infoEditForm.get('date_start').setValue(this.dateService.formatDateTiret(this.infoEditForm.value.date_start));
    this.infoEditForm.get('date_end').setValue(this.dateService.formatDateTiret(this.infoEditForm.value.date_end));

    this.translate.get('EDITING_TEXT').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.event.editTontineEventPost(this.infoEditForm.value).subscribe(
      (reponse: any) => {
        if (reponse && reponse.message === 'success') {
          this.tontineEventCode = reponse.tontine_event.code;
          this.getDetailTontinesEvent(this.infoEditForm.value.event_id);
        } else {
          this.loading = false;
        }
      }, error => {
    
        if (error && error.error && error.error.message === 'error') {
          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              this.ui.dismissLoading();
              if (data && data.result === "OK") {
                this.editTontineEvent();
              } else {
                this.closeInfoEdit('cancel');
                this.loading = false;
              }
            });
          } else {
            this.loading = false;
            this.ui.dismissLoading();
            this.closeInfoEdit('cancel');
            this.eventError.manageEventError(error);
          }

        } else {
          this.loading = false;
          this.ui.dismissLoading();
          this.closeInfoEdit('cancel');
          this.error.manageError(error);
        }
      });
  }
}
