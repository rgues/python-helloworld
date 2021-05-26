import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';

import { TranslateService } from '@ngx-translate/core';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

interface Caisse {
  currency_name: string;
  type_caisse_tontine_id : number,
  type_caisse_tontine_name : number,
  montant_online: number,
  current_montant_online: number,
  montant_offline: number
  current_montant_offline: number
}

@Component({
  selector: 'app-fund-repartition',
  templateUrl: './fund-repartition.component.html',
  styleUrls: ['./fund-repartition.component.scss'],
})
export class FundRepartitionComponent implements OnInit {

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
    private user: UserService,
    private event : EventService,
    private debt: DebtsManagerService,
    private tontine: TontineService,
    private ui: UiService,
    private translate: TranslateService,
    private error: ErrorService,
    private tontineError: TontineErrorService
  ) { 
      this.listCaisse = [];
      this.loading = false;
      this.currentTontine = this.tontine.getCurrentTontineData();
      this.currentPaymentData  = this.debt.getDebtsData();
      this.totalAmount = 0;
      this.currentUser = this.user.getUserData();
      this.nbValidator = this.currentTontine.tontine.number_admin_that_validates_contributions;
  }

  ngOnInit() {
    this.getWalletData();
  }

  closeContribute(ans) {
    this.modatCtrl.dismiss(ans, 'cancel');
  }

    // Get the wallet data
    getWalletData() {
      const param = {bouffe_id: this.currentPaymentData.bouffe.bouffe_id};
      this.loading= true;
      this.debt.getPaymentInitiateInformations(param).subscribe((reponse: any) => {
          this.loading= false;
          this.listCaisse = [];
          let index = 0;
          if (reponse && reponse.message === 'success') {
              reponse.infos_fund_repartition.forEach(caisse => {
                this.currentPaymentData.wallet.forEach(type => {
                  if (type && type.type_caisse_tontine_id === caisse.type_caisse_tontine_id) {
                    this.listCaisse.push(
                      {
                        currency_name: caisse.currency_name,
                        type_caisse_tontine_id : caisse.type_caisse_tontine_id,
                        type_caisse_tontine_name : caisse.caisse_name,
                        montant_online: caisse.montant_online,
                        current_montant_online:  type.online_balance > 0 ?  parseFloat(type.online_balance)  : 0,
                        montant_offline: caisse.montant_offline,
                        current_montant_offline: type.bank_balance > 0 ?  parseFloat(type.bank_balance)  : 0,
                      }
                    );
                  }
                });
                index++;
              });
          }
          }, error => {
          this.loading= false;
          if (error && error.error && error.error.message === 'error') {

            if (error.error.tontine_id_not_exist) {
              this.translate.get('ADD_SHARE_MSG4').subscribe(trans => {
                this.ui.presentToast(trans);
              });
          }
            if (error.error.user_not_found) {
                this.loading= true;
                this.error.renewSession().then((data: any) => {
                      if (data && data.result == 'OK') {
                          this.getWalletData();
                      } else {
                        this.loading= false;
                      }
                });
            }
        
          }
      });
    }

 // Validate the payment by admin
 validatePayment() {
    this.translate.get('VALIDATING_TEXT').subscribe(value => {
      this.ui.presentLoading(value);
    });
    const param = {bouffe_id: this.currentPaymentData.bouffe.bouffe_id, reason: ''};
    this.debt.validateInitiatePayment(param).subscribe((reponse: any) => {
      this.ui.dismissLoading();
      if (reponse && reponse.message === 'success') {
        this.event.publish('payment-validate');
        if (reponse.last_admin) {
          this.translate.get('LAST_JECKPOT_VALIDATOR').subscribe(trans => {
            this.ui.presentToast(trans);
          });
        } 
        this.closeContribute('validate');      
      }
    }, error => {
    
      if (error && error.error && error.error.message === 'error') {

        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
               this.ui.dismissLoading();
               if (data && data.result === "OK") {
                 this.validatePayment();
               } else {
                this.closeContribute('not-validate'); 
               }
          });
       } else {
        this.ui.dismissLoading();
        this.closeContribute('not-validate'); 
        this.tontineError.manageTontineError(error);
       }
        
      } else {
        this.ui.dismissLoading();
        this.closeContribute('not-validate');  
        this.error.manageError(error);
      }
    });

  }
}
