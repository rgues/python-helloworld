import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WalletTontineService } from 'src/app/dashboard/my-tontines/tontine-detail/wallet/services/wallet-tontine.service';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { ErrorService } from '../service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';
import { Router } from '@angular/router';
import { PaymentErrorService } from '../service/payment-error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from '../service/events.service';
import { UiService } from '../service/ui.service';

interface Caisse {
  choice: boolean;
  choice_name: string;
  currency_name: string;
  type_caisse_tontine_id: number,
  type_caisse_tontine_name: number,
  montant_online: number,
  current_montant_online: number,
  online_error: boolean;
  montant_offline: number
  current_montant_offline: number
  offline_error: boolean;
}

@Component({
  selector: 'app-initiate-pay',
  templateUrl: './initiate-pay.component.html',
  styleUrls: ['./initiate-pay.component.scss'],
})
export class InitiatePayComponent implements OnInit {

  @Input() tontineName: string;
  @Input() type: string;

  formPayment: FormGroup;
  listCaisse: Caisse[];
  loading: boolean;
  currentTontine: any;
  currentUser: any;
  currentPaymentData: any;
  validationMessages: any;
  totalAmount: number;
  nbValidator: number;

  constructor(
    private modatCtrl: ModalController,
    private fb: FormBuilder,
    private user: UserService,
    private router: Router,
    private walletTontine: WalletTontineService,
    private navControler: NavController,
    private event: EventService,
    private debt: DebtsManagerService,
    private tontine: TontineService,
    private ui: UiService,
    private translate: TranslateService,
    private error: ErrorService,
    private paymentError: PaymentErrorService
  ) {
    this.listCaisse = [];
    this.loading = false;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentPaymentData = this.debt.getDebtsData();
    this.totalAmount = 0;
    this.currentUser = this.user.getUserData();
    this.nbValidator = this.currentTontine.tontine.number_admin_that_validates_contributions ? this.currentTontine.tontine.number_admin_that_validates_contributions : 1;
  }

  ngOnInit() {
    this.getWalletData();
    this.initInitiateForm();
    this.validationMessage();
  }

  // Form getters
  get reason() {
    return this.formPayment.get('reason');
  }
  get chechoutList() {
    return this.formPayment.get('chechoutList');
  }

  // Init the validation message
  validationMessage() {
    this.translate.get(['REASON_TEXT', 'CHECKOUT_SELECT_MSG']).subscribe(trans => {
      this.validationMessages = {
        reason: [
          { type: 'required', message: trans.REASON_TEXT }
        ],
        chechoutList: [
          { type: 'required', message: trans.CHECKOUT_SELECT_MSG }
        ]
      };
    });
  }


  // Init the form
  initInitiateForm() {
    this.formPayment = this.fb.group({
      reason: [''],
      user_id: [this.currentUser.id],
      bouffe_id: [this.currentPaymentData.bouffe_id],
      device_id: [this.currentPaymentData.device_id],
      liste_caisse: [[], Validators.required],
      chechoutList: ['', Validators.required]
    });
  }

  // Close the contribution
  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  // check if we has an error
  hasError() {
    let error = false;
    let i = 0;
    while (!error && i < this.listCaisse.length) {
      if (this.listCaisse[i].online_error || this.listCaisse[i].offline_error) {
        error = true;
      }
      i++;
    }
    return error;
  }


  // Trigger form change
  hasFormChange() {
    this.formPayment.valueChanges.subscribe(allValues => {
      for (let fieldName in allValues) {
        if (fieldName != '') {

        }
      }
    });
  }

  // Update the select values
  updateChoice(choices: any[]) {
    this.totalAmount = 0;
    this.listCaisse.forEach((caisse, index) => {
      if (choices.indexOf(caisse.choice_name) > -1) {
        this.listCaisse[index].choice = true;
      } else {
        this.listCaisse[index].choice = false;
        this.listCaisse[index].montant_online = 0;
        this.listCaisse[index].montant_offline = 0;
      }
      this.totalAmount += caisse.montant_online;
      this.totalAmount += caisse.montant_offline;
    });
    this.formPayment.get('liste_caisse').setValue(this.listCaisse);
  }

  // Validate the initiate amount
  validateAmount(currentAount: number, newAmount: number, index: number, type: string) {
    switch (type) {
      case 'online':
        this.listCaisse[index].online_error = currentAount < newAmount;
        break;
      case 'offline':
        this.listCaisse[index].offline_error = currentAount < newAmount;
        break;
      default:
        break;
    }
  }

  // Get the wallet data
  getWalletData() {
    this.loading = true;
    const param = { tontine_id: this.currentTontine.tontine.tontine_id };
    this.walletTontine.getTontineWallet(param).subscribe((reponse: any) => {
     
      this.listCaisse = [];
      let index = 0;
      if (reponse && reponse.message === 'success') {
        reponse.detail_caisse.forEach(caisse => {
          if (parseFloat(caisse.online_balance) > 0 || parseFloat(caisse.bank_balance) > 0) {
            this.listCaisse.push(
              {
                choice: false,
                choice_name: `caisse_${index}`,
                currency_name: caisse.currency_name,
                type_caisse_tontine_id: caisse.type_caisse_tontine_id,
                type_caisse_tontine_name: caisse.caisse_name,
                montant_online: 0,
                online_error: false,
                current_montant_online: caisse && caisse.online_balance ? parseFloat(caisse.online_balance) : 0,
                montant_offline: 0,
                current_montant_offline: caisse && caisse.bank_balance ? parseFloat(caisse.bank_balance) : 0,
                offline_error: false
              }
            );
          }
          index++;
          this.formPayment.get('liste_caisse').setValue(this.listCaisse);
        });
      }

      this.loading = false;
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {

        if (error.error.tontine_id_not_exist) {
          this.translate.get('ADD_SHARE_MSG4').subscribe(trans => {
            this.ui.presentToast(trans);
          });
        }
        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getWalletData();
            } else {
              this.loading = false;
            }
          });
        }
      }
    });
  }

  // Paid the user contribution with Ozow without conversion
  iniatePayment() {
    this.loading = true;
    this.translate.get('INITIALIZE_TEXT').subscribe(value => {
      this.ui.presentLoading(value);
    });
    this.debt.initiatePayment(this.formPayment.value).subscribe((reponse: any) => {
      this.ui.dismissLoading();
      if (reponse && reponse.message === 'success') {
        if (reponse.last_admin) {
          this.translate.get('LAST_JECKPOT_VALIDATOR').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.navControler.setDirection('root');
          if (this.nbValidator === 1) {
            this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'session-no-paid']);
          } else {
            this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'wallet']);
          }
        }

        this.event.publish('payment-initiate');
        this.closeContribute();
      }
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.ui.dismissLoading();
              this.iniatePayment();
            } else {
              this.ui.dismissLoading();
              this.loading = false;
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
