import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from '../service/error.service';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { PaymentErrorService } from '../service/payment-error.service';
import { LoanService } from 'src/app/dashboard/my-tontines/tontine-detail/loans/service/loan.service';
import { EventService } from '../service/events.service';
import { UiService } from '../service/ui.service';
import { PluginService } from '../service/plugin.service';

@Component({
  selector: 'app-bankmode-loan',
  templateUrl: './bankmode-loan.component.html',
  styleUrls: ['./bankmode-loan.component.scss'],
})
export class BankmodeLoanComponent implements OnInit {

  @Input() amountPay: number;
  @Input() balance: number;
  @Input() type: string;

  paymentForm: FormGroup;
  validationMessages: any;
  loadingPay: boolean;
  currentTontine: any;
  contributionData: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private events: EventService,
    private tontine: TontineService,
    private error: ErrorService,
    private loanService: LoanService,
    private ui: UiService,
    private paymentError: PaymentErrorService,
    private plugin: PluginService
  ) {
    this.loadingPay = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.contributionData = this.loanService.getLoanData();
  }

  ngOnInit() {
    this.initFormMessage();
    this.initTradionnalPayment();
  }

  // Getters
  get amount() {
    return this.paymentForm.get('montant_total');
  }

  get proofMessage() {
    return this.paymentForm.get('proofMessage');
  }

  get proof() {
    return this.paymentForm.get('receipt');
  }


  // Init the form message
  initFormMessage() {
    this.translate.get(['REGISTER_PHONE_REQUIRED', 'AMOUNT_REQUIRED', 'PAID_MODE_REQUIRED', 'M_COUNTRY_REQUIRED'])
      .subscribe(value => {
        this.validationMessages = {
          payementtype: [
            { type: 'required', message: value.PAID_MODE_REQUIRED }
          ],
          phone: [
            { type: 'required', message: value.REGISTER_PHONE_REQUIRED },
          ],
          amount: [
            { type: 'required', message: value.AMOUNT_REQUIRED }
          ],
          country_id: [
            { type: 'required', message: value.M_COUNTRY_REQUIRED }
          ]
        };
      });
  }

  // Init traditional banking payment
  initTradionnalPayment() {
    this.paymentForm = this.fb.group({
      currency: [this.contributionData.currency_name],
      montant_total: [{ value: this.amountPay, disabled: this.type === 'interest' ? true : false }, Validators.compose([Validators.required, Validators.min(1), Validators.max(this.amountPay)])],
      proofMessage: [''],
      receipt: [''],
      liste_proof: [[]]
    });
  }

  // update parameters
  updateParameters(data: any) {
    let amountToPay = parseFloat(this.paymentForm.value.montant_total);
    const itemList = data.list_loan;
    let currentAmount = 0;
    const itemUpdates = [];
    itemList.forEach(loan => {
      currentAmount = amountToPay - parseFloat(loan.amount);
      if (currentAmount >= 0) {
        itemUpdates.push(loan);
        amountToPay = currentAmount;
      } else {
        if (amountToPay > 0) {
          itemUpdates.push({ loan_request_id: loan.loan_request_id, amount: amountToPay });
        }
        amountToPay = 0;
      }
    });
    data.list_loan = itemUpdates;
    return data;
  }

  // Get the payment proofs
  getProof() {
    this.plugin.getPicture().subscribe((picture: any) => {
      if (picture) {
        setTimeout(() => {
          this.paymentForm.get('receipt').setValue(picture);
        }, 200);
      }
    });
  }

  // paid loan with bank
  paidWithBank(contributionData: any) {
    this.paymentForm.get('liste_proof').setValue([{
      montant: contributionData.type === 'loan-interest' ? this.paymentForm.value.montant_total : this.amountPay,
      description: this.paymentForm.value.proofMessage,
      receipt: this.paymentForm.value.receipt
    }]);
    switch (contributionData.type) {
      case 'loan-interest':
        const param1 = this.updateParameters(contributionData);
        param1.liste_proof = this.paymentForm.value.liste_proof;
        param1.montant_total = this.paymentForm.value.montant_total;
        this.paidWithBankLoanAndInterest(param1);
        break;
      case 'interest':
        const param2 = contributionData;
        param2.liste_proof = this.paymentForm.value.liste_proof;
        param2.montant_total = this.amountPay;
        this.paidWithBankInterest(param2);
        break;
      default:
        break;
    }
  }

  // Paid the contribution with bank
  paidWithBankLoanAndInterest(contributionData: any) {
    this.loadingPay = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.loanService.payManyLoanAndInterestWithBankTradi(contributionData)
      .subscribe((reponse: any) => {
        this.loadingPay = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG1').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.initTradionnalPayment();
          this.events.publish('modal-close', { result: 'complete' });

        }
      }, error => {
      
      
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.paidWithBankLoanAndInterest(contributionData);
              } else {
                this.ui.dismissLoading();
                this.loadingPay = false;
              }
            });
          } else {
            this.loadingPay = false;
            this.ui.dismissLoading();
            this.paymentError.managePaymentOnlineError(error);
          }

        } else {
          this.loadingPay = false;
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }


  // Paid the contribution with bank
  paidWithBankInterest(contributionData: any) {
    this.loadingPay = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.loanService.payManyLoanInterestWithBankTradi(contributionData)
      .subscribe((reponse: any) => {
        this.loadingPay = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.translate.get('CONFIRM_PAY_CONTRIBUTION_MSG1').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.initTradionnalPayment();
          this.events.publish('modal-close', { result: 'complete' });
        }
      }, error => {
     
       
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                this.ui.dismissLoading();
                this.paidWithBankInterest(contributionData);
              } else {
                this.ui.dismissLoading();
                this.loadingPay = false;
              }
            });
          } else {
            this.loadingPay = false;
            this.ui.dismissLoading();
            this.paymentError.managePaymentOnlineError(error);
          }
        } else {
          this.loadingPay = false;
          this.ui.dismissLoading();
          this.error.manageError(error);
        }
      });
  }

}
