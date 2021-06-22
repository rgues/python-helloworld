import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { States } from 'src/app/shared/models/countries';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { TontinesEventsService } from '../services/tontines-events.service';
import { DateserviceService } from 'src/app/shared/service/dateservice.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { EventErrorService } from 'src/app/dashboard/tontines-events/services/event-error.service';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { UserService } from '../../user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { PluginService } from 'src/app/shared/service/plugin.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  createEventForm: FormGroup;
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
  user: any;
  isDateValid: boolean;
  minDate: string;
  maxDate: any = (new Date()).getFullYear() + 5;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private userService: UserService,
    private auth: AuthService,
    private location: LocationService,
    private events: EventService,
    private event: TontinesEventsService,
    private paymentData: PaymentGlobalDataService,
    private dateService: DateserviceService,
    private error: ErrorService,
    private alertController: AlertController,
    private router: Router,
    private ui: UiService,
    private navController: NavController,
    private formUtil: FormUtilsService,
    private eventError: EventErrorService,
    private plugin: PluginService,
    private localStorage: LocalStorageService
  ) {
    this.states = [];
    this.minAmountMessage = '';
    this.tontineName = '';
    this.minAmount = 1;
    this.loading = false;
    this.tontineEventCode = [];
    this.eventPicture = 'assets/default-event.jpg';
    this.user = this.userService.getUserData();
    this.isDateValid = true;
    this.minDate = this.dateService.formatDateTiret(new Date());
  }

  ngOnInit() {
    this.initValidationMessage();
    this.getCountries(false);
    this.initTontineEventForm();
    this.getCurrentCountry(false);
  }

  // Getters
  get eventName() {
    return this.createEventForm.get('event_name');
  }

  get eventDesc() {
    return this.createEventForm.get('description');
  }

  get eventCountry() {
    return this.createEventForm.get('country');
  }

  get currency() {
    return this.createEventForm.get('currency');
  }

  get eventAmount() {
    return this.createEventForm.get('expected_amount');
  }

  get eventStartDate() {
    return this.createEventForm.get('date_start');
  }

  get eventEndDate() {
    return this.createEventForm.get('date_end');
  }

  // Init the validation message
  initValidationMessage() {
    this.translate.get(['M_TONTINE_NAME_IS_REQUIRED', 'M_DESCRIPTION_REQUIRED', 'TONTINE_EDIT_TEXT6'
      , 'M_EXPECTED_AMOUNT_REQUIRED', 'M_STARTDATE_REQUIRED', 'TONTINE_NEW_TEXT8']).subscribe(trans => {
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
    this.createEventForm = this.fb.group({
      active: [0, Validators.required],
      event_name: ['', Validators.required],
      privacy: [false],
      description: ['', Validators.required],
      image_url: [''],
      country_key: [''],
      country_id: [''],
      country: ['', Validators.required],
      expected_amount: ['', Validators.compose([Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')])],
      currency: ['', Validators.compose([Validators.required])],
      date_start: [this.dateService.formatDateTiret(this.startDateSelect), Validators.required],
      date_end: [this.dateService.formatDateTiret(this.startDateSelect), Validators.required]
    });
  }

  // Remove space
  updateAmount() {
    this.createEventForm.get('expected_amount').setValue(this.formUtil.removeSpace(this.createEventForm.value.expected_amount));
  }

  // Uplaod the image
  uploadImage() {
    this.plugin.getPicture().subscribe(picture => {
      if (picture) {
        this.createEventForm.get('image_url').setValue(picture);
        this.eventPicture = picture;
      } else {
        this.createEventForm.get('image_url').setValue('');
        this.eventPicture = 'assets/default-event.jpg';
      }
    });
  }

  // check the date
  checkDate(date: any) {
    const dateParm = new Date();
    const currentDate = new Date(dateParm.getFullYear(), dateParm.getMonth(), dateParm.getDate(), 0, 0, 0, 0);
    const inputDate = new Date(date);
    inputDate < currentDate ? this.isDateValid = false : this.isDateValid = true;
    const endDate = new Date(this.createEventForm.value.date_end);
    if (this.isDateValid && endDate < inputDate) {
      this.createEventForm.get('date_end').setValue(this.dateService.formatDateTiret(inputDate));
    }
  }

  // Get the list of countries
  getCountries(refresher: boolean) {
    this.location.getAllCountries(refresher).then((countries: any) => {
      this.states = this.paymentData.formatCountriesData(countries, true);
    });
  }

  // Set the default country
  getCurrentCountry(refresher: boolean) {
    this.location.getCurrentCountryInfo(refresher).then((country: any) => {
      if (country) {
        this.defaultState = country.settings;
        if (this.defaultState && this.defaultState.active === 1) {
          const countryLabel = `COUNTRY_${this.defaultState.code_country}`;
          this.createEventForm.get('active').setValue(this.defaultState.active);
          this.createEventForm.get('currency').setValue(this.defaultState.device_name);
          this.createEventForm.get('country').setValue(this.defaultState.country_name);
          this.createEventForm.get('country_key').setValue(countryLabel);
          this.createEventForm.get('country_id').setValue(this.defaultState.country_id);
          this.location.setCurrentUserCountry(this.defaultState);
          this.minAmountMessage = `${this.minAmount} ${this.defaultState.device_name}`;
        } else {
          this.createEventForm.get('active').setValue(this.defaultState.active);
        }

      }
    }).catch(error => {
    });
  }

  // show tontine message alert
  async showMessage(translations: string[], country: any) {
    let currentLang = this.location.getCurrentUserLanguage();
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
                country_id: country.country_id,
                country_name: country.country_name,
                user_id: this.user.id,
                lang: currentLang,
                email: ans.email
              };
              this.userService.requestNews(params).subscribe((reponse: any) => {
                if (reponse && reponse.success) {
                  this.translate.get(['NEWS_TITLE', 'NEWS_MESSAGE']).subscribe(trans => {
                    this.ui.presentAlert(trans.NEWS_TITLE, trans.NEWS_MESSAGE);
                  });
                }
              }, error => {
                if (error && error.error && error.error.message === 'error') {
                  if (error.error.already_sent) {
                    this.translate.get('NEWS_ALREADY_SENT').subscribe(trans => {
                      this.ui.presentToast(trans);
                    });
                  }
                } else {
                  this.error.manageError(error);
                }
              });
            } else {
              this.translate.get('USER_DETAIL_TEXT13').subscribe(trans => {
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
  updateCurrency() {
    const currentCountry = this.createEventForm.value.country;
    this.states.forEach(state => {
      if (state.country_name === currentCountry) {
        this.createEventForm.get('active').setValue(state.active);
        this.createEventForm.get('currency').setValue(state.device_name);
        this.createEventForm.get('country_key').setValue(state.country_key);
        this.createEventForm.get('country_id').setValue(state.country_id);
        if (state.active === 0) {
          const translation = [];
          this.translate.get(['NEWS_TITLE', 'NEWSLETTER_TEXT1', 'NEWSLETTER_TEXT2', 'NEWS_EMAIL', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
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

  // Show the tontine invitation code and redirect
  async showInvitationMessage(message, alerttMessage, OkText) {
    const alert = await this.alertController.create({
      header: alerttMessage,
      message: message,
      buttons: [
        {
          text: OkText,
          handler: () => {
            this.navController.setDirection('root');
            const event = this.event.getCurrentTontineEventData();
            if (event && event.visibility === 'private') {
              this.router.navigate(['/dashboard/tontines-events/invitations']);
            } else {
              this.router.navigate(['/dashboard/tontines-events']);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Create the tontine
  createTontineEvent() {
    // when the tontine is created, we get the code generee and display it
    this.loading = true;
    this.createEventForm.get('date_start').setValue(this.dateService.formatDateTiret(this.createEventForm.value.date_start));
    this.createEventForm.get('date_end').setValue(this.dateService.formatDateTiret(this.createEventForm.value.date_end));

    const user = this.userService.getUserData();
    this.event.createTontineEventPost(this.createEventForm.value).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.tontineEventCode = reponse.tontine_event.code;

          if (this.tontineEventCode.length == 0) {
            this.invitationMessage = ``;
          } else {
            this.translate.get(['TONTINE_EVENT_NEW_TEXT0', 'TONTINE_NEW_MSG2', 'TONTINE_EVENT_NEW_TEXT1']).subscribe(value => {
              this.invitationMessage = `${value['TONTINE_EVENT_NEW_TEXT0']} <span>${this.tontineEventCode}
                    </span>. ${value['TONTINE_EVENT_NEW_TEXT1']}`;
            });
          }

          const tontineData = reponse.tontine_event;
          this.event.setCurrentTontineEventData(tontineData);
          const currentDate = new Date();
          this.auth.setAppLastSession(currentDate.getTime());
          this.localStorage.setItem('new-event', 'yes');

          this.initTontineEventForm();
          this.translate.get(['TONTINE_EVENT_TEXT4']).subscribe(value => {
            this.tontineName = `<span>${tontineData.title}</span> ${value['TONTINE_EVENT_TEXT4']}`;
          });
          this.events.publish('new-event');
          this.translate.get(['TONTINE_NEW_TEXT31', 'MENU_GO']).subscribe(trans => {
            const message = `<p>${this.tontineName}</p> <p>${this.invitationMessage}</p>`;
            this.showInvitationMessage(message, trans.TONTINE_NEW_TEXT31, trans.MENU_GO);
          });

        }
      }, error => {

        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.createTontineEvent();
              } else {
                this.loading = false;
              }
            });
          } else {
            this.loading = false;
            this.eventError.manageEventError(error);
          }

        } else {
          this.loading = false;
          this.error.manageError(error);
        }
      });
  }
}
