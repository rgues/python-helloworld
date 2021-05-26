import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ContactService } from '../service/contact.service';
import { LocationService } from 'src/app/shared/service/location.service';
import { PrefixComponent } from 'src/app/shared/prefix/prefix.component';
import { ModalController } from '@ionic/angular';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  contactForm: FormGroup;
  validationMessages: any;
  loading: boolean;
  states: any[];


  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private modatCtrl: ModalController,
    private formUtil: FormUtilsService,
    private location: LocationService,
    private contact: ContactService,
    private errorService: ErrorService,
    private ui: UiService
  ) {
    this.loading = false;
    this.states = [];
  }


  ngOnInit() {
    this.initContactForm();
    this.validationMessage();
    this.getWordCountries(false);
  }


  // Form getters
  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get message() {
    return this.contactForm.get('message');
  }


  // Validation message
  validationMessage() {
    this.translate.get(['REQUIRED_FIELD_INVALID', 'REQUIRED_FIELD_TEXT']).subscribe(trans => {
      this.validationMessages = {
        firstname: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ],
        lastname: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ],
        message: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ],
        phone: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ],
        email: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ]
      };
    });

  }


  // Init the user form with his data
  initContactForm() {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      lastname: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      prefix: [''],
      country: [''],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}[.][a-z]{2,4}$'), Validators.required])],
      phone: ['', Validators.compose([Validators.pattern('^[0-9]{7,10}$'), Validators.required])],
      message: ['', Validators.compose([Validators.maxLength(1000), Validators.required])]
    });
  }


  // Get all the word countries
  getWordCountries(refresh) {
    this.location.getWordCountries(refresh).then((countries: any) => {
      if (countries && countries.length > 0) {
        this.states = countries;
        this.getCurrentCountry(false);
      }
    });
  }

  // Set the default country
  getCurrentCountry(refresher: boolean) {
    this.location.getCurrentWordCountryInfo(refresher).then((country: any) => {
      if (country) {
        this.contactForm.get('prefix').setValue(country.country_prefixe);
        this.contactForm.get('country').setValue(country.code_country);
      }
    }).catch(error => {
    });
  }


  // Update the phone value
  updatePhoneFormat(phone: string) {
    if (this.formUtil.validatePhone(phone)) {
      this.contactForm.get('phone').setValue(this.contactForm.value.prefix + this.contactForm.value.phone);
    }
  }

  // Open the prfix  modal
  showPrefix() {
    this.modatCtrl
      .create({
        component: PrefixComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.role === 'select') {
            this.states.forEach(country => {
              if (country.code_country === ans.data) {
                this.contactForm.get('prefix').setValue(country.country_prefixe);
                this.contactForm.get('country').setValue(country.code_country);
              }
            });
          }
        });
      });
  }


  // Save the contact
  saveContact() {
    this.loading = true;
    this.updatePhoneFormat(this.contactForm.value.phone);
    this.contact.sendContact(this.contactForm.value).subscribe(
      (reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('CONTACT_MSG_SENT_TEXT').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.initContactForm();
          this.getWordCountries(false);
        }
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.remplir_tous_les_champs) {
          this.translate.get('TOPUP_MSG2').subscribe(value => {
            this.ui.presentToast(value);
          });
        } else {
          this.errorService.manageError(error);
        }
      });
  }


}
