import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { States } from '../models/countries';
import { LocationService } from '../service/location.service';
import { TontinesEventsService } from 'src/app/dashboard/tontines-events/services/tontines-events.service';
import { ModalController } from '@ionic/angular';
import { CountriesComponent } from '../countries/countries.component';
import { FormUtilsService } from '../service/form-utils.service';
import { InivitationErrorService } from '../../dashboard/invitations/service/inivitation-error.service';
import { ErrorService } from '../service/error.service';
import { UiService } from '../service/ui.service';
import { EventService } from '../service/events.service';
import { AuthService } from 'src/app/auth/service/auth.service';

interface Invitations {
  emailOrPhone: string;
  PhoneOnly?: any;
  platform: string;
}

@Component({
  selector: 'app-tontine-invited-event',
  templateUrl: './tontine-invited-event.component.html',
  styleUrls: ['./tontine-invited-event.component.scss'],
})
export class TontineInvitedEventComponent implements OnInit {

  formInvited: FormGroup;
  validationMessages: any;
  states: States[];
  errorPhone: boolean;
  errorEmail: boolean;
  loading: boolean;
  spinner: any;
  tontineEventData: any;
  sendListContact: Invitations[];

  constructor(
    private fb: FormBuilder,
    private modatCtrl: ModalController,
    private event: TontinesEventsService,
    private events: EventService,
    private translate: TranslateService,
    private error: ErrorService,
    private locate: LocationService,
    private formUtil: FormUtilsService,
    private inviteError: InivitationErrorService,
    private authService: AuthService,
    private ui: UiService
  ) {
    this.states = [];
    this.errorPhone = false;
    this.errorEmail = false;
    this.loading = false;
    this.tontineEventData = this.event.getCurrentTontineEventData();
    this.sendListContact = [];
  }

  ngOnInit() {
    this.initFormInvitation();
    this.getValidationsMessage();
    this.getWordCountries(false);
  }

  // Form getters
  get sendMode() {
    return this.formInvited.get('sendMode');
  }

  get sendList() {
    return this.formInvited.get('sendList') as FormArray;
  }

  get emailOrPhone() {
    return this.formInvited.get('emailOrPhone');
  }

  get phoneId() {
    return this.formInvited.get('phoneid');
  }

  get countryId() {
    return this.formInvited.get('country_id');
  }

  // init the form 
  initFormInvitation() {
    this.formInvited = this.fb.group({
      tontine_event_id: [this.tontineEventData && this.tontineEventData.id ? this.tontineEventData.id : '', Validators.required],
      members: [[]],
      sendMode: ['sms', Validators.required],
      emailOrPhone: [''],
      sendList: new FormArray([]),
      phoneid: [''],
      country_id: [''],
      countryName: ['']
    });
  }

  // Remove space
  removeSpace() {
    this.formInvited.get('emailOrPhone').setValue(this.formUtil.removeSpace(this.formInvited.value.emailOrPhone));
  }

  // can add member
  canAddMember() {
    return !this.formInvited.value.phoneid 
            || !this.formInvited.value.emailOrPhone 
            || this.formInvited.value.emailOrPhone && ((!this.errorPhone && this.sendMode.value === 'sms') || (!this.errorEmail && this.sendMode.value === 'email'));
  }

  // can show  contact message
  canShowContactMessage() {
    return this.formInvited.value.emailOrPhone && (!this.errorPhone && (this.sendMode.value === 'sms') || !this.errorEmail && (this.sendMode.value === 'email'));
  }

  // can send invitation
  canSendInvitation() {
    return this.formInvited.invalid 
           || this.loading 
           || this.formInvited.value.emailOrPhone && (!this.errorPhone && !this.errorEmail) || (!this.formInvited.value.emailOrPhone && this.sendList.length === 0);
  }

  // Get validations messages
  getValidationsMessage() {
    this.translate.get(['M_SEND_MODE_ERROR_MSG']).subscribe(trans => {
      this.validationMessages = {
        sendMode: [
          { type: 'required', message: trans.M_SEND_MODE_ERROR_MSG }
        ]
      };
    });
  }

  // validate the field
  validateFields(mode: string) {
    this.removeSpace();
    this.errorPhone = false;
    this.errorEmail = false;
    if (mode === 'sms') {
      this.errorPhone = this.formUtil.validatePhone(this.formInvited.value.emailOrPhone);
    } else if (mode === 'email') {
      this.errorEmail = this.formUtil.validateEmail(this.formInvited.value.emailOrPhone);
    }
  }

  // Update the country
  updateCountryPrefix(currentCountry: any) {
    this.states.forEach(state => {
      if (state.country_id === currentCountry) {
        this.formInvited.get('phoneid').setValue(state.country_prefixe);
        this.formInvited.get('country_id').setValue(state.country_id);
        this.formInvited.get('countryName').setValue(state.country_label);
      }
    });
  }

  // Get all the word countries
  getWordCountries(refresh) {
    this.locate.getWordCountries(refresh).then((countries: any) => {
      if (countries && countries.length > 0) {
        this.states = countries;
        this.getCurrentCountry(false);
      }
    });
  }

  // Set the default country
  getCurrentCountry(refresher: boolean) {
    this.locate.getCurrentWordCountryInfo(refresher).then((country: any) => {
      if (country) {
        this.updateCountryPrefix(country.country_id);
      }
    }).catch(error => {
    });
  }

  // open the countries modal
  showCountries() {
    this.modatCtrl
      .create({
        component: CountriesComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.role === 'select') {
            this.states.forEach(state => {
              if (state.code_country === ans.data) {
                this.formInvited.get('countryName').setValue(state.country_label);
                this.formInvited.get('phoneid').setValue(state.country_prefixe);
                this.formInvited.get('country_id').setValue(state.country_id);
              }
            });
          }
        });
      });
  }

  // add a member
  addMberContact(mberContact: HTMLInputElement) {
    if (this.formUtil.validatePhone(mberContact.value)) {
      const phoneNumber = this.formInvited.value.phoneid + mberContact.value;
      this.sendList.push(new FormControl(phoneNumber));
      this.sendListContact.push({ emailOrPhone: phoneNumber, PhoneOnly: mberContact.value, platform: 'mobile' });
    } else {
      this.sendList.push(new FormControl(mberContact.value));
      this.sendListContact.push({ emailOrPhone: mberContact.value, PhoneOnly: null, platform: 'mobile' });
    }
    mberContact.value = '';
    this.formInvited.value.emailOrPhone = '';
  }

  // Remove contact
  removeContact(contact: FormControl) {
    const index = this.sendList.controls.indexOf(contact);
    this.sendList.removeAt(index);
    const objIndex = this.sendListContact.findIndex(o => o.emailOrPhone === contact.value);
    if (objIndex > -1) {
      this.sendListContact.splice(objIndex, 1);
    }
  }

  // send invitations to the user
  sendInvitation() {
    this.loading = true;
    this.translate.get('SENDING_INVITATION').subscribe(trans => {
      this.ui.presentLoading(trans);
    });

    if (this.formInvited.value.emailOrPhone) {
      if (this.formInvited.value.sendMode === 'sms') {
        const phoneNumber = this.formInvited.value.phoneid + this.formInvited.value.emailOrPhone;
        this.sendListContact.push({ emailOrPhone: phoneNumber, PhoneOnly: this.formInvited.value.emailOrPhone, platform: 'mobile' });
      } else {
        this.sendListContact.push({ emailOrPhone: this.formInvited.value.emailOrPhone, PhoneOnly: null, platform: 'mobile' });
      }
    }

    // Remove double
    this.sendListContact = this.sendListContact.filter((elem, index, self) => self.findIndex(
      (t) => { return (t.emailOrPhone === elem.emailOrPhone && t.PhoneOnly === elem.PhoneOnly) }) === index);

    this.formInvited.get('members').setValue(this.sendListContact);
    this.formInvited.get('tontine_event_id').setValue(this.tontineEventData.id);
    this.event.sendInvitation(this.formInvited.value)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        this.loading = false;
        this.initFormInvitation();
        this.getWordCountries(false);
        this.translate.get('TONTINE_INVITED_TEXT5').subscribe(value => {
          this.ui.presentToast(value);
        });
        const currentDate = new Date();
        this.authService.setAppLastSession(currentDate.getTime());
        this.events.publish('new-invitation-event');
      }, error => {
        this.loading = false;
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.sendInvitation();
              } else {
                this.loading = false;
                this.ui.dismissLoading();
              }
            });
          } else {
            this.ui.dismissLoading();
            this.inviteError.manageInviteError(error);
          }
        } else {
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }
}
