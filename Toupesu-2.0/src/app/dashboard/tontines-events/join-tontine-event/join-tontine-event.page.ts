import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontinesEventsService } from '../services/tontines-events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PrefixComponent } from 'src/app/shared/prefix/prefix.component';
import { LocationService } from 'src/app/shared/service/location.service';
import { InivitationErrorService } from 'src/app/dashboard/invitations/service/inivitation-error.service';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { UserService } from '../../user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';


@Component({
  selector: 'app-join-tontine-event',
  templateUrl: './join-tontine-event.page.html',
  styleUrls: ['./join-tontine-event.page.scss'],
})
export class JoinTontineEventPage implements OnInit {

  joinTontineForm: FormGroup;
  validationMessages: any;
  name: string;
  loading: boolean;
  states: any[];
  currentUser: any;
  tontineEventData: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private modatCtrl: ModalController,
    private activeRoute: ActivatedRoute, 
    private userService: UserService,
    private location: LocationService,
    private invitationError: InivitationErrorService,
    private formUtil: FormUtilsService,
    private ui: UiService,
    private events: EventService,
    private router: Router,
    private event: TontinesEventsService,
    private localStorage: LocalStorageService,
    private error: ErrorService
  ) {
    this.loading = false;
    this.states = [];
    this.currentUser = this.userService.getUserData();
    this.tontineEventData = this.event.getCurrentTontineEventData();
    if (this.activeRoute.snapshot.params.hasTitle === 1) {
      this.name = this.tontineEventData ? this.tontineEventData.title : '';
    }
  }

  ngOnInit() {
    this.initValidationMessage();
    this.initjoinTontineForm();
  }

  // init Join tontine form
  initjoinTontineForm() {
    let prefix = '';
    const credentials = this.userService.getUserSecret();
    prefix = credentials ? credentials.phone_prefix : '';
    const currentUser = this.userService.getUserData();
    this.joinTontineForm = this.fb.group({
      code_invitation: ['', Validators.required],
      prefix: [prefix],
      phone_prefix: [prefix],
      sendMode: ['sms'],
      phoneid: [prefix],
      phone: [currentUser && currentUser.phone ? currentUser.phone : ''],
      emailOrphone: [currentUser && currentUser.phone ? currentUser.email : '', Validators.required]
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
      if (country && !this.joinTontineForm.value.prefix) {
        this.joinTontineForm.get('prefix').setValue(country.country_prefixe);
      }
    }).catch(error => {
    });
  }

  // update the phone value
  updatePhoneFormat(phone: string) {
    if (this.formUtil.validatePhone(phone)) {
      this.joinTontineForm.get('emailOrphone').setValue(this.joinTontineForm.value.prefix + this.joinTontineForm.value.emailOrphone);
    }
  }

  // open the prfix  modal
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
                this.joinTontineForm.get('prefix').setValue(country.country_prefixe);
              }
            });
          }
        });
      });
  }

  // Invitation Message
  initValidationMessage() {
    this.translate.get(['M_TONTINE_CODE_REQUIRED', 'M_EMAIL_PHONE_REQUIRED']).subscribe(trans => {
      this.validationMessages = {
        code: [
          { type: 'required', message: trans.M_TONTINE_CODE_REQUIRED }
        ],
        contact: [
          { type: 'required', message: trans.M_EMAIL_PHONE_REQUIRED }
        ]
      };
    });
  }

  get joinCode() {
    return this.joinTontineForm.get('code_invitation');
  }

  get joinContact() {
    return this.joinTontineForm.get('emailOrphone');
  }

  // Remove space
  removeSpace() {
    const input = String(this.joinTontineForm.value.emailOrphone);
    this.joinTontineForm.get('emailOrphone').setValue(input.trim());
  }

  // Join a tontine
  joinTontine() {
    this.loading = true;
    this.event.acceptInvitationEventWithToken(this.joinTontineForm.value)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.success) {
          this.initjoinTontineForm();
          if (reponse.invitation.etat === 'en attente') {
            this.translate.get('USER_SECURITY_MSG10').subscribe(value => {
              this.ui.presentToast(value);
            });
          } else {
            this.translate.get('USER_SECURITY_MSG11').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
       
          this.localStorage.setItem('new-event', 'yes');
          this.events.publish('new-event');
          this.router.navigate(['dashboard/tontines-events']);
        }
      }, error => {
        this.loading = false;
        if (error && error.error && !error.error.success) {
          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                  this.joinTontine();
              } else {
                this.loading = false;
              }
            }); 
          } else {
            this.invitationError.manageInvitationError(error);
          }
         
        } else {
          this.error.manageError(error);
        }
      });
  }

}
