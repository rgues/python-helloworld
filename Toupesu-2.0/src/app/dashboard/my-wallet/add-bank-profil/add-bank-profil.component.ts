import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { WalletService } from '../service/wallet.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { WalletErrorService } from 'src/app/dashboard/my-wallet/service/wallet-error.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-add-bank-profil',
  templateUrl: './add-bank-profil.component.html',
  styleUrls: ['./add-bank-profil.component.scss'],
})
export class AddBankProfilComponent implements OnInit {

  addBankForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private error: ErrorService,
    private ui: UiService,
    private wallet: WalletService,
    private modatCtrl: ModalController,
    private walletError: WalletErrorService
  ) {
    this.loading = false;
  }

  ngOnInit() {
    this.initBankAccount();
  }


  closeAddBank(result: string) {
    this.modatCtrl.dismiss(null, result);
  }

  initBankAccount() {
    this.addBankForm = this.fb.group({
      bank_name: ['', Validators.required],
      branch_name: [''],
      branch_code: [''],
      nom_proprietaire: ['', Validators.required],
      account_number: ['', Validators.required],
      address: ['', Validators.required]
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

  // Add a new account
  addAccount() {
    this.loading = true;
    this.wallet.saveBankProfile(this.addBankForm.value)
      .subscribe((reponse: any) => {
        this.loading = false;
        if (reponse && reponse.message === 'success') {
          this.translate.get('BANK_PROFIL_SUCCESS_MESSAGE').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          this.initBankAccount();
          this.closeAddBank('success');
        }
      }, error => {
        this.loading = false;
        if (error && error.error && error.error.message === 'error') {
          if (error.error.user_not_found) {
            this.loading = true;
            this.error.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                  this.addAccount();
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
