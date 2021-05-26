import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { CountriesComponent } from '../../shared/countries/countries.component';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { PluginService } from 'src/app/shared/service/plugin.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.page.html',
  styleUrls: ['./register-phone.page.scss'],
})
export class RegisterPhonePage implements OnInit {

  phoneRegisterForm: FormGroup;
  states: any[] = [];
  spinner: any;
  isLoadingShow: boolean;
  hasFocus: boolean;
  validationMessages: any;
  defaultState: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private plugin: PluginService,
    private form: FormUtilsService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private location: LocationService,
    private userService: UserService,
    private router: Router,
    private modatCtrl: ModalController
  ) {
    this.isLoadingShow = false;
    this.hasFocus = false;
    this.initMessage();

  }

  ngOnInit() {
    this.initFormRegistration(null);
    this.isLoadingShow = true;
    this.getWordCountries(false);
    this.getUserUUID();
  }

  // Form getters
  get country() {
    return this.phoneRegisterForm.get('country_id');
  }

  get phoneid() {
    return this.phoneRegisterForm.get('phoneid');
  }

  get phone() {
    return this.phoneRegisterForm.get('phone_number');
  }

  // Initialize the form
  initFormRegistration(data) {
    this.phoneRegisterForm = this.fb.group({
      countryName: [data ? data.countryName : ''],
      phone_prefix: [data ? data.phone_prefix : ''],
      code_country: [data ? data.code_country : '', Validators.required],
      country_id: [data ? data.country_id : '', Validators.required],
      prefix_country_with_plus: [data && data.prefix_country_with_plus ? data.prefix_country_with_plus : ''],
      country_key: [data ? data.country_key : '', Validators.required],
      phoneid: [data ? data.phoneid : '', Validators.compose([
        Validators.required,
        Validators.maxLength(5)
      ])],
      phone_number: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{6,13}$')])
      ]
    });
  }

  // Init the form message
  initMessage() {
    this.translate.get([
      'REGISTER_COUNTRY_TEXT',
      'REGISTER_COUNTRY_PREFIX',
      'REGISTER_COUNTRY_PREFIX_LENGTH',
      'REGISTER_PHONE_REQUIRED',
      'REGISTER_PHONE_INVALID'
    ]).subscribe(value => {

      this.validationMessages = {
        country_id: [
          { type: 'required', message: value.REGISTER_COUNTRY_TEXT }
        ],
        phoneid: [
          { type: 'required', message: value.REGISTER_COUNTRY_PREFIX },
          { type: 'maxlength', message: value.REGISTER_COUNTRY_PREFIX_LENGTH }
        ],
        phone: [
          { type: 'required', message: value.REGISTER_PHONE_REQUIRED },
          { type: 'pattern', message: value.REGISTER_PHONE_INVALID }
        ]
      };
    });
  }

  // set focus
  setFocusOnInput() {
    this.hasFocus = true;
  }

  // Refresh the list
  refreSher(event) {
    this.getWordCountries(true);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  // Get the user Id
  getUserUUID() {
    this.plugin.getIds().subscribe(id => {
      if (id) {
        this.userService.setUserDevice(id);
      }
    });
  }

  // Get all the word countries
  getWordCountries(refresh) {
    this.location.getWordCountries(refresh).then((countries: any) => {
      this.isLoadingShow = false;
      if (countries && countries.length > 0) {
        this.states = countries;
        this.getCurrentCountry(false);
      }
    });
  }

  // get the country name
  getCountryName(formData: any) {
    return formData.countryName && formData.countryName.length < 10 ? formData.countryName : formData.countryName ? formData.countryName.substring(0, 9) + '...' : ''
  }

  // Set the default country
  getCurrentCountry(refresher: boolean) {
    this.location.getCurrentWordCountryInfo(refresher).then((country: any) => {
      if (country) {
        const formData = {
          countryName: country.country_label,
          code_country: country.code_country,
          country_id: country.country_id,
          country_key: country.country_key,
          phoneid: country.country_prefixe,
          phone_prefix: country.country_prefixe,
          prefix_country_with_plus: country.code_country !== 'CM' && country.code_country !== 'ZA' ? `+${country.country_prefixe}` : ''
        }
        this.initFormRegistration(formData);
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
            this.phoneRegisterForm.get('code_country').setValue(ans.data);
            this.updateCountry();
          }
        });
      });
  }

  // Update the country
  updateCountry() {
    if (this.states && this.states.length > 0) {
      const currentCountry = this.phoneRegisterForm.value.code_country;
      this.states.forEach(state => {
        if (state.code_country === currentCountry) {
          this.phoneRegisterForm.get('countryName').setValue(state.country_label);
          this.phoneRegisterForm.get('country_id').setValue(state.country_id);
          this.phoneRegisterForm.get('phoneid').setValue(state.country_prefixe);
          this.phoneRegisterForm.get('phone_prefix').setValue(state.country_prefixe);
          this.phoneRegisterForm.get('country_key').setValue(state.country_key);
          state.code_country !== 'CM' && state.code_country !== 'ZA' ? this.phoneRegisterForm.get('prefix_country_with_plus').setValue(`+${state.country_prefixe}`) :
            this.phoneRegisterForm.get('prefix_country_with_plus').setValue('');
        }
      });
    } else {
      this.getWordCountries(false);
    }
  }

  // Remove space
  removeSpace() {
    this.phoneRegisterForm.get('phone_number').setValue(this.form.removeSpace(this.phoneRegisterForm.value.phone_number));
  }

  // Show the confirm phone number message
  async confirmPhoneMessage(translation: string[]) {
    const alert = await this.alertController.create({
      header: `${translation[0]}`,
      message: `${translation[1]}`,
      buttons: [
        {
          text: `${translation[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.setFocusOnInput();
          }
        }, {
          text: `${translation[3]}`,
          handler: () => {
            this.gotoNextStep();
          }
        }
      ]
    });
    await alert.present();
  }

  // Check the confirm phone
  confirmPhone() {
    const messages = [];
    this.translate.get(['M_CONFIRM_PHONE_TITLE', 'M_CONFIRM_PHONE_MESSAGE', 'EDIT_TEXT', 'YES_TEXT'])
      .subscribe(trans => {
        messages.push(trans.M_CONFIRM_PHONE_TITLE);
        messages.push(`${trans.M_CONFIRM_PHONE_MESSAGE}  <strong>+${this.phoneRegisterForm.value.phone_prefix} ${this.formatPhoneNumber(this.phoneRegisterForm.value.phone_number, this.phoneRegisterForm.value.phone_prefix)} </strong>`);
        messages.push(trans.EDIT_TEXT);
        messages.push(trans.YES_TEXT);
        this.confirmPhoneMessage(messages);
      });
  }

  // Go to the next Step
  gotoNextStep() {
    this.userService.setRegistrationData(this.phoneRegisterForm.value);
    this.router.navigate(['/auth/verify-phone']);
  }

  // Format phone number
  formatPhoneNumber(phoneNumberString: any, prefix: string) {
    return this.form.formatPhoneNumber(phoneNumberString, prefix);
  }

}
