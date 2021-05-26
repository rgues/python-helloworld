import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { WalletTontineService } from '../services/wallet-tontine.service';
import { TontineService } from '../../../services/tontine.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { WalletTontineErrorService } from '../services/wallet-tontine-error.service';

@Component({
  selector: 'app-add-bank-profil',
  templateUrl: './add-bank-profil.component.html',
  styleUrls: ['./add-bank-profil.component.scss'],
})
export class AddBankProfilComponent implements OnInit {

  addBankForm: FormGroup;
  loading: boolean;
  token: string;
  currentTontine: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private event: EventService,
    private userService: UserService,
    private tontine: TontineService,
    private error: ErrorService,
    private ui: UiService,
    private walletTontine: WalletTontineService,
    private modatCtrl: ModalController,
    private walletError: WalletTontineErrorService
  ) {
      this.loading = false;
      this.token = this.userService.getUserToken();
      this.event.subscribe('new-token', token => {
        this.token = token;
      });
      this.currentTontine  = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {
    this.initBankAccount();
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

  get proprietaryName() {
    return this.addBankForm.get('nom_proprietaire');
  }

  get accountNber() {
    return this.addBankForm.get('account_number');
  }

  get accountName() {
    return this.addBankForm.get('account_name');
  }

  get address() {
    return this.addBankForm.get('address');
  }

  initBankAccount() {
    this.addBankForm = this.fb.group({
      token: [this.token],
      tontine_id: [this.currentTontine.tontine.tontine_id],
      account_number: ['', Validators.required],
      nom_proprietaire: ['', Validators.required],
      bank_name: ['', Validators.required],
      branch_code: [''],
      branch_name: [''],
      account_name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  closeAddBank(result: string) {
    this.modatCtrl.dismiss(null, result);
  }

  // Add a new account
  addAccount() {
    this.loading = true;
    this.walletTontine.saveTontineBankProfile(this.addBankForm.value)
    .subscribe((reponse: any) => {
        console.log(reponse);
        this.loading = false;
        if (reponse && reponse.message === 'success') {
            this.translate.get('TONTINE_BANK_PROFIL_SUCCESS_MESSAGE').subscribe(trans => {
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
                    this.loading = false;
                    this.closeAddBank('cancel');
                  }
             });
          } else {
              this.closeAddBank('cancel');
              this.walletError.manageWalletTontineError(error);
          }
        } else {
          this.closeAddBank('cancel');
          this.error.manageError(error);
        }
    
    });
  }

}
