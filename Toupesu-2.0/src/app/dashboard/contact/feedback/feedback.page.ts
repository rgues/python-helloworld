import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from '../service/contact.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UserService } from '../../user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  contactForm: FormGroup;
  validationMessages: any;
  loading: boolean;
  states: any[];
  ratingMsg: boolean;
  UserLoggedUsername: any='';
  UserLoggedEmail: any = '';

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private userService: UserService,
    private contact: ContactService,
    private errorService: ErrorService,
    private ui: UiService
  ) {
      this.loading = false;
      this.ratingMsg = false;
      this.states = [];
  }

  ngOnInit() {
    this.initContactForm();
    this.validationMessage();
  }


  // Form getters 
  get username() {
    return this.contactForm.get('username');
  }

  get suggestion() {
    return this.contactForm.get('suggestion');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get rating() {
    return this.contactForm.get('rating');
  }

  get typeSurvey() {
    return this.contactForm.get('typeSurvey');
  }

  
  // Validation message
  validationMessage() {
    this.translate.get(['REQUIRED_FIELD_INVALID','REQUIRED_FIELD_TEXT']).subscribe(trans => {
      this.validationMessages = {
        username: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ],
        typeSurvey: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ],
        suggestion: [
          { type: 'required', message: trans.REQUIRED_FIELD_TEXT },
          { type: 'invalid', message: trans.REQUIRED_FIELD_INVALID }
        ],
        rating: [
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
    if (this.userService.getUserData()) {
      this.UserLoggedEmail = this.userService.getUserData().email;
      this.UserLoggedUsername = this.userService.getUserData().username;
    } else {
      this.UserLoggedEmail = '';
      this.UserLoggedUsername = '';
    }
    this.contactForm = this.fb.group({
      username: [this.UserLoggedUsername],
      suggestion: ['', Validators.compose([Validators.maxLength(1000), Validators.required])],
      email: [this.UserLoggedEmail, Validators.compose([Validators.pattern('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}[.][a-z]{2,4}$'), Validators.required])],
      rating: ['4'],
      typeSurvey: ['', Validators.required]
    });
  }

  // Save the feedbacks
  saveFeedbacks() {
    this.loading = true;
    this.ratingMsg = false;
  
    if (this.contactForm.valid && this.contactForm.value.rating) { 
      this.ratingMsg = false;
      if (this.contactForm.value.typeSurvey === 1) { this.contactForm.value.typeSurvey = "Comments";}
      if (this.contactForm.value.typeSurvey === 2) { this.contactForm.value.typeSurvey = "Bug Reports";}
      if (this.contactForm.value.typeSurvey === 3) { this.contactForm.value.typeSurvey = "Customer Experience";}
      if (this.contactForm.value.typeSurvey === 4) { this.contactForm.value.typeSurvey = "Questions";}
      if (this.contactForm.value.typeSurvey === 5) { this.contactForm.value.typeSurvey = "Others";}
  
      this.contact.saveFeedbacks(this.contactForm.value).subscribe(
        (reponse: any) => {
          this.loading = false;
          if (reponse && reponse.message === 'success') {
            this.translate.get('FEEDBACK_MSG1').subscribe(value => {
              this.ui.presentToast(value);
            });
            this.initContactForm();
          }
        }, error => {
          this.loading = false;
          if (error && error.error && error.error.message === 'remplir_les_champs_username_et_note_sur_5') {
            this.translate.get('FEEDBACK_MSG2').subscribe(value => {
              this.ui.presentToast(value);
            });
          } else {
            this.errorService.manageError(error);
          }
          
        });
    }
    
  }

}
