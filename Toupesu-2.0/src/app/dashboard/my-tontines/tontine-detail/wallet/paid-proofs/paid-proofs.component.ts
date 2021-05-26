import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { TontineService } from '../../../services/tontine.service';
import { WalletTontineService } from '../services/wallet-tontine.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-paid-proofs',
  templateUrl: './paid-proofs.component.html',
  styleUrls: ['./paid-proofs.component.scss'],
})
export class PaidProofsComponent implements OnInit {

  currentStatData: any;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;
  loading: boolean;
  myProofs: any;
  allData: any;
  nbItems: number;
  tontineData:any;
  @Input() reference: string;

  constructor(
    private modatCtrl: ModalController,
    private error: ErrorService,
    private walletTontine: WalletTontineService,
    private tontine: TontineService,
    private translate: TranslateService,
    private ui: UiService,
    private debt: DebtsManagerService
  ) { 
      this.currentStatData = this.debt.getDebtsData();
      this.tontineData = this.tontine.getCurrentTontineData();
      this.loading = false;
      this.myProofs = [];
      this.allData = [];
      this.nbItems = 10;
  }

  ngOnInit() {
    this.loading = true;
    this.getProofs(null);
  }

  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  
  // Get the list of proofs of a members
  getProofs(event) {
    const param = {
      reference_transaction : this.reference
    }
    this.walletTontine.getWalletTransactionsProofs(param).subscribe((reponse: any) => {
      
      if(reponse && reponse.message === 'success') {
        let dataResp: any[] = [];
        dataResp = dataResp.concat(reponse.proof_traditional);
        dataResp = dataResp.concat(reponse.proof_online);
        this.allData = dataResp;
        if (this.allData.length > this.nbItems) {
          this.myProofs = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.myProofs.push(this.allData[this.myProofs.length]);
          }
        } else {
          this.myProofs = this.allData;
        }
      }

      this.loading = false;
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      this.loading = false;
      if (event) {
          event.target.complete();
      }
      if(error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getProofs(event);
          } else {
            this.loading = false;
          }
         });
      } else if (error && error.error && error.error.reference_transaction_not_exist) {
            this.translate.get('REFERENCE_NOT_EXIST_TEXT').subscribe(trans => {
                this.ui.presentToast(trans);
            });
     } else {
          this.error.manageError(error);
      }
    });
  }

    // Refresh the list
    refreSher(event) {
      this.infiniteScroll.disabled = false;
      this.getProofs(event);
    }
  
    // Infinite scroll data
    infinteScrollData(event) {
      setTimeout(() => {
        for (let i = 0; i < this.nbItems; i++) {
          if (this.myProofs.length < this.allData.length) {
            this.myProofs.push(this.allData[this.myProofs.length]);
          } else if (this.myProofs.length === this.allData.length) {
            event.target.disabled = true;
          }
        }
        event.target.complete();
      }, 500);
    }

    showProof(proofs: any) {
      this.modatCtrl
      .create({
        component: ViewProofComponent,
        componentProps: {
          proof: proofs.receipt || proofs.image
        }
      })
      .then(modalEl => modalEl.present());
    }

}
