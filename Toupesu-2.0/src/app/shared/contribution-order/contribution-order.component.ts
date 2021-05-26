import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';
import { ErrorService } from '../service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../service/api.service';
import { EventService } from '../service/events.service';
import { UiService } from '../service/ui.service';

@Component({
  selector: 'app-contribution-order',
  templateUrl: './contribution-order.component.html',
  styleUrls: ['./contribution-order.component.scss'],
})
export class ContributionOrderComponent implements OnInit {

  @Input() tontineName: string;
  @Input() amountPay: number;
  @Input() balance: number;
  @Input() currency: string;
  
  isModeSelected: boolean;
  loading: boolean;
  totalOfflineAmount: number;
  totalOnlineAmount: number;
  balanceOfflineAmount: number;
  balanceOnlineAmount: number;

  constructor(
    private modatCtrl: ModalController,
    private debt: DebtsManagerService,
    private translate: TranslateService,
    private ui: UiService,
    private error: ErrorService,
    private event: EventService
  ) {

    this.event.subscribe('modal-close', () => {
      this.closeContribute('OK');
    });

    this.totalOfflineAmount = 0;
    this.totalOnlineAmount = 0;
    this.balanceOfflineAmount = 0;
    this.balanceOnlineAmount = 0;
  }

  ngOnInit() {
    this.isModeSelected = true;
    this.getInitiatePaymentData();
  }

  // check segment
  segmentChanged() {
    this.isModeSelected = !this.isModeSelected;
  }

  // Get the initiate payment data
  getInitiatePaymentData() {
    const params = this.debt.getDebtsData();
    const param = { bouffe_id: params.bouffe_id };
    this.loading = true;
    let montantOfflinePayer = 0;
    let montantOnlinePayer = 0;

    if (params.proof[0] && params.proof[0].liste_traditional_banking_proof) {
      params.proof[0].liste_traditional_banking_proof.forEach(proof => {
        montantOfflinePayer += proof.montant ? parseFloat(proof.montant) : 0;
      });
    }

    if (params.proof[0] && params.proof[0].liste_online_wallet_proof) {
      params.proof[0].liste_online_wallet_proof.forEach(proof => {
        montantOfflinePayer += proof.montant ? parseFloat(proof.montant) : 0;
      });
    }

    if (params.proof[0] && params.proof[0].liste_pay_with_caisse_tontine_proof) {
      params.proof[0].liste_pay_with_caisse_tontine_proof.forEach(proof => {
        montantOnlinePayer += proof.montant ? parseFloat(proof.montant) : 0;
      });
    }

    this.debt.getPaymentInitiateInformations(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.totalOfflineAmount = 0;
        this.totalOnlineAmount = 0;
        reponse.infos_fund_repartition.forEach(caisse => {
          this.totalOfflineAmount += caisse.montant_offline ? parseFloat(caisse.montant_offline) : 0;
          this.totalOnlineAmount += caisse.montant_online ? parseFloat(caisse.montant_online) : 0;
        });

        this.balanceOfflineAmount = this.totalOfflineAmount - montantOfflinePayer;
        this.balanceOnlineAmount = this.totalOnlineAmount - montantOnlinePayer;
        this.balanceOnlineAmount > 0 ? this.isModeSelected = true : this.isModeSelected = false;
      }
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
            if (data && data.result == 'OK') {
              this.getInitiatePaymentData();
            } else {
              this.loading = false;
            }
          });
        }
      }
    });
  }

  // close the modal
  closeContribute(message?: any) {
    this.modatCtrl.dismiss(message, 'cancel');
  }

}
