import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { InvitationsService } from '../invitations/service/invitations.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InivitationErrorService } from 'src/app/dashboard/invitations/service/inivitation-error.service';
import { UserService } from '../user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-join-tontine',
  templateUrl: './join-tontine.page.html',
  styleUrls: ['./join-tontine.page.scss'],
})
export class JoinTontinePage implements OnInit {

  joinTontineForm: FormGroup;
  validationMessages: any;
  name: string;
  loading: boolean;
  states: any[];
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private userService: UserService,
    private navigator: NavController,
    private events: EventService,
    private ui: UiService,
    private router: Router,
    private invitation: InvitationsService,
    private invitationError: InivitationErrorService,
    private error: ErrorService
  ) {
    this.loading = false;
    this.name = '';
    this.states = [];
    this.currentUser = this.userService.getUserData();
  }

  ngOnInit() {
    this.initValidationMessage();
    this.initjoinTontineForm();
  }

  
  // Form getters
  get joinCode() {
    return this.joinTontineForm.get('code_invitation');
  }

  get joinContact() {
    return this.joinTontineForm.get('emailOrphone');
  }

  // Init the form message
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


  // Init Join tontine form
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
      emailOrphone: [currentUser && currentUser.phone ? currentUser.phone : currentUser.email, Validators.required]
    });
  }


  // Join a tontine
  joinTontine() {
    this.loading = true;
    this.invitation.acceptInvitationTontineWithToken(this.joinTontineForm.value)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.success) {
          this.initjoinTontineForm();
          this.translate.get('USER_SECURITY_MSG10').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.events.publish('new-tontine');
          this.navigator.setDirection('root');
          this.router.navigate(['dashboard/my-tontines']);
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
