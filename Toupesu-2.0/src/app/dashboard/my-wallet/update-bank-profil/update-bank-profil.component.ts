import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { WalletService } from '../service/wallet.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { WalletErrorService } from 'src/app/dashboard/my-wallet/service/wallet-error.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-update-bank-profil',
  templateUrl: './update-bank-profil.component.html',
  styleUrls: ['./update-bank-profil.component.scss'],
})
export class UpdateBankProfilComponent implements OnInit {

  addBankForm: FormGroup;
  loading: boolean;
  data: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private alertController: AlertController,
    private error: ErrorService,
    private ui: UiService,
    private wallet: WalletService,
    private modatCtrl: ModalController,
    private params: NavParams,
    private walletError: WalletErrorService
  ) {
      this.loading = false;
      this.data = this.params.get('data'); 
  }

  ngOnInit() {
    this.initBankAccount();
  }

  
  closeAddBank(result: string) {
    this.modatCtrl.dismiss(null, result);
  }

  initBankAccount() {
    const data = this.data; 
    this.addBankForm = this.fb.group({
      user_bank_profile_id: [data.user_bank_profile_id ? data.user_bank_profile_id : '', Validators.required],
      bank_name: [data.bank_name ? data.bank_name : '', Validators.required],
      branch_name: [data.branch_name ? data.branch_name : ''],
      branch_code: [data.branch_code ? data.branch_code : ''],
      nom_proprietaire: [data.nom_proprietaire ? data.nom_proprietaire : '', Validators.required],
      account_number: [data.account_number ? data.account_number : '', Validators.required],
      address: [data.address ? data.address : '', Validators.required]
    });
  }


  get bank() {
    return this.addBankForm.get('bank_name');
  }

  get branchName() {
    return this.addBankForm.get('branch_name');
  }

  get branchCode() {
    return this.addBankForm.get('branch_code');
  }

  get accountName() {
    return this.addBankForm.get('nom_proprietaire');
  }

  get accountNber() {
    return this.addBankForm.get('account_number');
  }

  get address() {
    return this.addBankForm.get('address');
  }

  confirmUpdateAccount() {
    const translations = [];
    this.translate.get(['UPDATE_BANK_INFO', 'UPDATE_ACCOUNT_CONFIRMATION', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translations.push(trans.UPDATE_BANK_INFO);
      translations.push(trans.UPDATE_ACCOUNT_CONFIRMATION);
      translations.push(trans.CANCEL_TEXT);
      translations.push(trans.YES_TEXT);
      this.confirnMessage(translations);
    });

  }


  // confirm th update 
 async confirnMessage(translations: any) {
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      message : `${translations[1]}`,
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: `${translations[3]}`,
          handler: () => {
            this.updateAccount();
          }
        }
      ]
    });
    await alert.present();
  }

  // Update a new account
  updateAccount() {
    this.loading = true;
    this.wallet.updateBankProfile(this.addBankForm.value)
    .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
            this.translate.get('BANK_UPDATE_SUCCESS_MESSAGE').subscribe(trans => {
              this.ui.presentToast(trans);
            });
            this.initBankAccount();
            this.closeAddBank('success');
        } else {
          this.closeAddBank('cancel');
        }
    }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                  this.updateAccount();
              } else {
                this.closeAddBank('cancel');
                this.loading = false;
              }
            });
          } else {
            this.closeAddBank('cancel');
            this.walletError.manageWalletError(error);
          }
        } else {
          this.closeAddBank('cancel');
          this.error.manageError(error);
        }
        
    });
  }

}
