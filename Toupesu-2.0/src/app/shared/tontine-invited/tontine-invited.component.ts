import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { States } from '../models/countries';
import { LocationService } from '../service/location.service';
import { InvitationsService } from 'src/app/dashboard/invitations/service/invitations.service';
import { ErrorService } from '../service/error.service';
import { ModalController } from '@ionic/angular';
import { CountriesComponent } from '../countries/countries.component';
import { FormUtilsService } from '../service/form-utils.service';
import { InivitationErrorService } from '../../dashboard/invitations/service/inivitation-error.service';
import { SelectDataComponent } from '../select-data/select-data.component';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from '../service/events.service';
import { UiService } from '../service/ui.service';
import { UtilService } from '../service/util.service';
import { AuthService } from 'src/app/auth/service/auth.service';

interface Invitations {
  emailOrPhone: string;
  PhoneOnly?: any;
  platform: string;
}

@Component({
  selector: 'app-tontine-invited',
  templateUrl: './tontine-invited.component.html',
  styleUrls: ['./tontine-invited.component.scss'],
})
export class TontineInvitedComponent implements OnInit {

  formInvited: FormGroup;
  validationMessages: any;
  tontines: any;
  states: States[];
  errorPhone: boolean;
  errorEmail: boolean;
  loading: boolean;
  sendListContact: Invitations[];
  spinner: any;
  curentTontine: any;

  constructor(
    private fb: FormBuilder,
    private tontine: TontineService,
    private zone: NgZone,
    private translate: TranslateService,
    private modatCtrl: ModalController,
    private invitation: InvitationsService,
    private formUtil: FormUtilsService,
    private errorService: ErrorService,
    private locate: LocationService,
    private ui: UiService,
    private util: UtilService,
    private userService: UserService,
    private authService: AuthService,
    private inviteError: InivitationErrorService,
    private event: EventService
  ) {
    this.tontines = [];
    this.states = [];
    this.errorPhone = false;
    this.errorEmail = false;
    this.loading = false;
    this.sendListContact = [];
    this.curentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {
    this.initFormInvitation();
    this.getListOftontines();
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

  // Init the form 
  initFormInvitation() {
    this.formInvited = this.fb.group({
      tontine_id: ['', Validators.required],
      tontineName:[''],
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

  // Truncate the name
  truncateName(value: any, nbCar: number) {
    return this.formUtil.troncateName(value,nbCar);
  }

  // can add new member
  canAddNewMember() {
    return !this.formInvited.value.phoneid 
           || !this.formInvited.value.emailOrPhone 
           || this.formInvited.value.emailOrPhone && ((!this.errorPhone && this.sendMode.value === 'sms') || (!this.errorEmail && this.sendMode.value === 'email'));
  }

  // can show contact member
  canShowContactMember() {
    return this.formInvited.value.emailOrPhone && (!this.errorPhone && (this.sendMode.value === 'sms') || !this.errorEmail && (this.sendMode.value === 'email'));
  }

  // Can invite member
  canInviteMember() {
    return this.formInvited.invalid 
           || this.loading 
           || this.formInvited.value.emailOrPhone && (!this.errorPhone && !this.errorEmail) 
           || (!this.formInvited.value.emailOrPhone && this.sendList.length === 0);
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

  // Validate the field
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

  // Add a member
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

   // show the tontine modal
   showTontines() {
    this.modatCtrl
      .create({
        component: SelectDataComponent,
        componentProps: {
          tontine: this.tontines,
          type: 'tontine'
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.role === 'select') {
            this.formInvited.get('tontine_id').setValue(ans.data.id);
            this.formInvited.get('tontineName').setValue(ans.data.name);
          }
        });
      });
  }

  // Get the list of tontines
  getListOftontines() {
    this.tontine.getMyTontine().subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        if (reponse.liste_tontine && reponse.liste_tontine.length > 0) {
          this.zone.run(() => {
            reponse.liste_tontine = this.util.oderByTontineDate(reponse.liste_tontine);
            this.tontines =  reponse.liste_tontine.filter(data => { return data.tontine.administrator === 1});
          });

          if (this.tontines &&  this.tontines.length) {
            setTimeout(() => {
              if (this.curentTontine && this.curentTontine.tontine && this.curentTontine.tontine.tontine_id) {
                const currentTontine = this.tontines.filter(data => { return data.tontine.tontine_id === this.curentTontine.tontine.tontine_id});
                if (currentTontine && currentTontine.length > 0) {
                  this.formInvited.get('tontine_id').setValue(currentTontine[0].tontine.tontine_id);
                  this.formInvited.get('tontineName').setValue(currentTontine[0].tontine.name);
                } else {
                  this.formInvited.get('tontine_id').setValue(this.tontines[0].tontine.tontine_id);
                  this.formInvited.get('tontineName').setValue(this.tontines[0].tontine.name);
                }
              } else {
                this.formInvited.get('tontine_id').setValue(this.tontines[0].tontine.tontine_id);
                this.formInvited.get('tontineName').setValue(this.tontines[0].tontine.name);
              }
            }, 500);
          }
     
        }
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.errorService.renewSession().then((data:any) => {
            if (data && data.result === "OK") {
                this.getListOftontines();
            }
        });
      } else {
        this.errorService.manageError(error);
      }
    });
  }

  // send invitations to the user
  sendInvitation() {
    this.loading = true;
    this.translate.get('SENDING_INVITATION').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    const user = this.userService.getUserData();

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
    this.invitation.sendInvitationTontine(this.formInvited.value, user.id)
      .subscribe((reponse: any) => {
        this.ui.dismissLoading();
        this.loading = false;
        this.initFormInvitation();
        this.getListOftontines();
        this.getWordCountries(false);
        this.translate.get('TONTINE_INVITED_TEXT5').subscribe(value => {
          this.ui.presentToast(value);
        });
        const currentDate = new Date();
        this.authService.setAppLastSession(currentDate.getTime());
        this.event.publish('new-invitation');
      }, error => {
        this.ui.dismissLoading();
        this.loading = false;
        if (error && error.error && !error.error.success) {
            this.inviteError.manageInviteError(error);
        } else {
            this.errorService.manageError(error);
        }
      });
  }
}
