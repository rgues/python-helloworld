import { Component, OnInit } from '@angular/core';
import { WalletTontineService } from '../services/wallet-tontine.service';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { StorageData } from 'src/app/shared/service/storage.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
})
export class TopUpPage implements OnInit {

  loading: boolean;
  currentTontine: any;
  walletTontines: any;
  constructor(
    private tontine: TontineService,
    private error: ErrorService,
    private storage: StorageData,
    private translate: TranslateService,
    private ui: UiService,
    private walletTontine: WalletTontineService 
  ) {
      this.loading = false;
      this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {
    this.loading= true;
    this.getWalletData(null);
  }


  // Get the wallet data
  getWalletData(event) {
    const param = {tontine_id: this.currentTontine.tontine.tontine_id};
    this.walletTontine.getTontineWallet(param).subscribe((reponse: any) => {
        if (reponse && reponse.message === 'success') {
            this.walletTontines = reponse.infos_wallet;
            this.storage.set(`tontine-wallet${param.tontine_id}`, { solde: this.walletTontines, caisse: reponse.detail_caisse });
        }
        if (event) {
          event.target.complete();
        }
        this.loading= false;
    }, error => {
        this.loading= false;
        if (event) {
          event.target.complete();
        }
    
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
                this.getWalletData(event);
              } else {
                this.loading = false;
                this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
                  this.walletTontines = walletData ? walletData.solde : [];
                }); 
              }
             });
          }
   
        } else {
          this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
            this.walletTontines = walletData ? walletData.solde : [];
          }); 
          this.error.manageError(error);
        }
    });
  }

  // refresh the wallet
   refreSher(event) {
    this.getWalletData(event);
   }


}
