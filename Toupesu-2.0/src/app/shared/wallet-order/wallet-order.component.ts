import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from '../service/error.service';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';

import { Router } from '@angular/router';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import {  NavController } from '@ionic/angular';
import { PaymentErrorService } from '../service/payment-error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from '../service/ui.service';
import { EventService } from '../service/events.service';

@Component({
  selector: 'app-wallet-order',
  templateUrl: './wallet-order.component.html',
  styleUrls: ['./wallet-order.component.scss'],
})
export class WalletOrderComponent implements OnInit {

  @Input() amountPay: number;
  @Input() balance: number;

  paymentForm: FormGroup;
  validationMessages: any;
  loadingPay: boolean;
  currentTontine: any;
  loading: boolean;
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private event: EventService,
    private user: UserService,
    private tontine: TontineService,
    private navController: NavController,
    private router: Router,
    private error: ErrorService,
    private debt: DebtsManagerService,
    private ui: UiService,
    private paymentError: PaymentErrorService
  ) {
    this.loadingPay = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.loading = false;
    this.currentUser = this.user.getUserData();
  }

  ngOnInit() {
    this.initFormMessage();
    this.initTradionnalPayment();
  }

  // Getters
  get montant() {
    return this.paymentForm.get('montantValue');
  }

  get receipt() {
    return this.paymentForm.get('receipt');
  }

  get reason() {
    return this.paymentForm.get('reason');
  }

  // Init traditional banking payment
  initTradionnalPayment() {
    const params = this.debt.getDebtsData();
    this.paymentForm = this.fb.group({
      user_id: [this.currentUser.id, Validators.required],
      bouffe_id: [params ? params.bouffe_id : '', Validators.required],
      device_id: [params ? params.device_id : '', Validators.required],
      reason: [''],
      montantValue: [{ value: this.balance, disabled: true }, Validators.compose([Validators.min(1)])],
      montant: [this.balance, Validators.compose([Validators.required, Validators.min(1), Validators.max(this.balance)])]
    });
  }

  // Init form message
  initFormMessage() {
    this.translate.get(['DEBT_AMOUNT_REQUIRED_TEXT', 'DEBT_PROOF_MSG_REQUIRED_TEXT', 'DEBT_REASON_MSG_REQUIRED_TEXT', 'ERROR_MIN_AMOUNT', 'ERROR_MAX_AMOUNT'])
      .subscribe(trans => {
        this.validationMessages = {
          montant: [
            { type: 'required', message: trans.DEBT_AMOUNT_REQUIRED_TEXT },
            { type: 'min', message: `${trans.ERROR_MIN_AMOUNT} ${1}` },
            { type: 'max', message: `${trans.ERROR_MAX_AMOUNT} ${this.balance}` }
          ],
          description: [
            { type: 'required', message: trans.DEBT_PROOF_MSG_REQUIRED_TEXT }
          ],
          reason: [
            { type: 'required', message: trans.DEBT_REASON_MSG_REQUIRED_TEXT }
          ]
        };
      });
  }

  // Make the payment with wallet
  makePayment() {
    this.loadingPay = true;
    this.debt.makePaymentTontineWallet(this.paymentForm.value).subscribe((reponse: any) => {
      this.loadingPay = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('DEBT_PAYMENT_BENEFICIAL_SUCCES_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.event.publish('modal-close');
        this.navController.setDirection('root');
        this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'session-no-paid']);
      }
    }, error => {
 
      if (error && error.error) {
        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.makePayment();
            } else {
              this.loadingPay = false;
            }
          });
        } else {
          this.loadingPay = false;
          this.paymentError.managePaymentOfflineError(error);
        }
      } else {
        this.loadingPay = false;
        this.error.manageError(error);
      }
    });
  }

}
