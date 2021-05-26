import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from '../service/error.service';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { PaymentErrorService } from '../service/payment-error.service';
import { EventService } from '../service/events.service';
import { UiService } from '../service/ui.service';
import { PluginService } from '../service/plugin.service';

@Component({
  selector: 'app-bankmode',
  templateUrl: './bankmode.component.html',
  styleUrls: ['./bankmode.component.scss'],
})
export class BankmodeComponent implements OnInit {

  @Input() amountPay: number;
  @Input() balance: number;

  paymentForm: FormGroup;
  validationMessages: any;
  loadingPay: boolean;
  currentTontine: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private event: EventService,
    private tontine: TontineService,
    private error: ErrorService,
    private debt: DebtsManagerService,
    private ui: UiService,
    private paymentError: PaymentErrorService,
    private plugin: PluginService
  ) {

    this.loadingPay = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {
    this.initFormMessage();
    this.initTradionnalPayment();
  }


  // Getters
  get amount() {
    return this.paymentForm.get('amount');
  }

  get proofMessage() {
    return this.paymentForm.get('proofMessage');
  }

  get proof() {
    return this.paymentForm.get('receipt');
  }

  // Init the form message
  initFormMessage() {
    this.translate.get(['DEBT_AMOUNT_REQUIRED_TEXT', 'DEBT_PROOF_MSG_REQUIRED_TEXT']).subscribe(trans => {
      this.validationMessages = {
        amount: [
          { type: 'required', message: trans.DEBT_AMOUNT_REQUIRED_TEXT }
        ],
        proofMessage: [
          { type: 'required', message: trans.DEBT_PROOF_MSG_REQUIRED_TEXT }
        ]
      };
    });
  }

  // Init traditional banking payment
  initTradionnalPayment() {
    const params = this.debt.getDebtsData();
    const items = params.items;
    const itemsParams = [];
    items.forEach(item => {
      itemsParams.push({ seance_id: item.seance_id, numero_part: item.numero_part, montant: item.montant, typecontribution_id: item.typecontribution_id });
    });
    this.paymentForm = this.fb.group({
      reference_facture: [params.facture ? params.facture.reference : ''],
      device_id: [params.facture ? params.facture.device_id : ''],
      montant_total_facture: [params.facture ? params.facture.montant : 0],
      currency: [params.facture ? params.facture.device_name : 0],
      amount: [this.balance, Validators.compose([Validators.required, Validators.min(1)])],
      liste_item: [itemsParams, Validators.required],
      proofMessage: [''],
      receipt: [''],
      liste_proof: [[]],
      tontine_id: [params.facture ? params.facture.tontine_id : '']
    });
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

  // Make the payment
  makePayment() {
    this.paymentForm.get('liste_proof').setValue([{
      montant: this.paymentForm.value.amount,
      description: this.paymentForm.value.proofMessage,
      receipt: this.paymentForm.value.receipt
    }]);
    this.loadingPay = true;
    this.translate.get('TOPUP_TEXT1').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.debt.paidMemberBillTradiBanking(this.paymentForm.value).subscribe((reponse: any) => {
      this.loadingPay = false;
      this.ui.dismissLoading();
      if (reponse && reponse.message === 'success') {
        this.translate.get('DEBT_PAYMENT_SUCCES_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });

        if (this.balance - this.paymentForm.value.amount === 0) {
          this.event.publish('modal-close', { result: 'complete' });
        } else {
          this.event.publish('modal-close', { result: 'partial' });
        }
      }
    }, error => {
      this.loadingPay = false;
      if (error && error.error) {
        if (error.error.user_not_found) {
          this.loadingPay = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.ui.dismissLoading();
              this.makePayment();
            } else {
              this.loadingPay = false;
              this.ui.dismissLoading();
            }
          });
        } else {
          this.ui.dismissLoading();
          this.paymentError.managePaymentOfflineError(error);
        }
      } else {
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }

}
