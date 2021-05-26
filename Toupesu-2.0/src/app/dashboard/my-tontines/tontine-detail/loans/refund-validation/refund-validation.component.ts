import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from '../../../services/tontine.service';
import { LoanErrorService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan-error.service';
import { LoanService } from '../service/loan.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-refund-validation',
  templateUrl: './refund-validation.component.html',
  styleUrls: ['./refund-validation.component.scss'],
})
export class RefundValidationComponent implements OnInit {

  @Input() requestAmount: any;
  @Input() requestOption: any;
  @Input() currency: any;
  @Input() type: any;
  loading: boolean;
  reason: string;
  currentTontine: any;
  memberData: any;

  constructor(
    private modatCtrl: ModalController,
    private loanService: LoanService,
    private navParams: NavParams,
    private tontine: TontineService,
    private error: ErrorService,
    private ui: UiService,
    private translate: TranslateService,
    private loanError: LoanErrorService,
    private events: EventService
  ) {
      this.loading = false;
      this.reason = '';
      this.currentTontine = this.tontine.getCurrentTontineData();
      this.memberData = this.navParams.get('data');
   }

  ngOnInit() {}

  closeValidation(ans: any) {
    this.modatCtrl.dismiss(ans, 'cancel');
  }

  // validate the member debt
  validationAdmin(action: string, type: string) {
      switch(action) {
          case 'validate':
            this.approveType(type);
            break;
          case 'reject':
            this.rejectType(type);
            break;
          default:
            break;    
      }
  }


  // approve type
  approveType(type: string) {
    switch(type) {
      case 'loan':
        this.approveLoanPayment();
        break;
      case 'interest':
        this.approveInterestPayment();
        break;
      default:
        break;    
  }
  }

    
  // Approve the loan payment
  approveLoanPayment() {
    const param = {
      loan_payback_user_id: this.memberData.loan_payback_user_id,
      reason:  this.reason
    };
    this.loading = true;
    this.translate.get('APPROVE_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.loanService.validateLoanRefund(param).subscribe((reponse: any) => {

      this.loading = false;

      if (reponse && reponse.message === 'success') {
        this.translate.get('APPROVE_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
        });
      }
      this.events.publish('loan-refund');
      this.ui.dismissLoading();
      this.closeValidation('approve');


    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            this.ui.dismissLoading();
            if (data && data.result === "OK") {
              this.approveLoanPayment();
            } else {
              this.loading = false;
              this.closeValidation('exit');
            }
          });
        } else {
          this.loanError.manageLoanError(error);
          this.ui.dismissLoading();
          this.closeValidation('exit');
        }
      } else {
        this.ui.dismissLoading();
        this.closeValidation('exit');
        this.error.manageError(error);
      }
    });
  }

    // Approve the loan request
    approveInterestPayment() {
      const param = {
        interest_request_payment_id: this.memberData.interest_request_payment_id,
        reason:  this.reason
      };
      this.loading = true;
      this.translate.get('APPROVE_REQUEST_TEXT').subscribe(trans => {
        this.ui.presentLoading(trans);
      });
      this.loanService.validateInterestRefund(param).subscribe((reponse: any) => {
  
        this.loading = false;
  
        if (reponse && reponse.message === 'success') {
          this.translate.get('APPROVE_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
            this.ui.presentToast(trans);
          });
        }
        this.events.publish('loan-refund');
        this.ui.dismissLoading();
        this.closeValidation('approve');
  
  
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {

          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              this.ui.dismissLoading();
              if (data && data.result === "OK") {
                this.approveInterestPayment();
              } else{
                this.loading = false;
                this.closeValidation('exit');
              }
            });
          } else {
            
            this.loanError.manageLoanError(error);
            this.ui.dismissLoading();
            this.closeValidation('exit');
          }
         
        } else {
          this.ui.dismissLoading();
          this.closeValidation('exit');
          this.error.manageError(error);
        }
      });
    }


      // reject type
  rejectType(type: string) {
    switch(type) {
      case 'loan':
        this.rejectLoanPayment();
        break;
      case 'interest':
        this.rejectInterestPayment();
        break;
      default:
        break;    
  }
  }


  // Reject loan request
  rejectLoanPayment() {
    const param = {
      loan_payback_user_id: this.memberData.loan_payback_user_id,
      reason:  this.reason
    };
    this.loading = true;
    this.translate.get('REJECT_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.loanService.rejectLoanRefund(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('REJECT_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
        });
      }
      this.events.publish('loan-refund');
      this.ui.dismissLoading();
      this.closeValidation('reject');

    }, error => {
      this.loading = false;
   
      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            this.ui.dismissLoading();
            if (data && data.result === "OK") {
              this.rejectLoanPayment();
            } else {
              this.loading = false;
              this.closeValidation('exit');
            }
          });
        } else {
          this.loanError.manageLoanError(error);
          this.ui.dismissLoading();
          this.closeValidation('exit');
        }
      
      } else {
        this.ui.dismissLoading();
        this.closeValidation('exit');
        this.error.manageError(error);
      }
    });
  }

   // Reject interest request
   rejectInterestPayment() {
    const param = {
      interest_request_payment_id: this.memberData.interest_request_payment_id,
      reason:  this.reason
    };
    this.loading = true;
    this.translate.get('REJECT_REQUEST_TEXT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.loanService.rejectInterestRefund(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('REJECT_PAYMENT_SUCCESS_TEXT').subscribe(trans => {
          this.ui.presentToast(trans);
        });
      }
      this.events.publish('loan-refund');
      this.ui.dismissLoading();
      this.closeValidation('reject');

    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            this.ui.dismissLoading();
            if (data && data.result === "OK") {
              this.rejectInterestPayment();
            } else {
              this.loading = false;
              this.closeValidation('exit');
            }
          });
        } else {
          this.loanError.manageLoanError(error);
          this.ui.dismissLoading();
          this.closeValidation('exit');
        }
      } else {
        this.ui.dismissLoading();
        this.closeValidation('exit');
        this.error.manageError(error);
      }
    });
  }
}
