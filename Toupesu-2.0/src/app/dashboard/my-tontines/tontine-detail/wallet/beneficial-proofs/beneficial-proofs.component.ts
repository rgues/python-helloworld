import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-beneficial-proofs',
  templateUrl: './beneficial-proofs.component.html',
  styleUrls: ['./beneficial-proofs.component.scss'],
})
export class BeneficialProofsComponent implements OnInit {

  loading: boolean;
  myProofs: any;
  allData: any;
  nbItems: number;
  tontineData: any;
  currentSeanceData: any;
  currentProofsData: any;

  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private translate: TranslateService,
    private error: ErrorService,
    private ui: UiService,
    private debt: DebtsManagerService
  ) { 
      this.currentProofsData = this.debt.getDebtsData();
      this.tontineData = this.tontine.getCurrentTontineData();
      this.loading = true;
      this.myProofs = [];
      this.allData = [];
      this.nbItems = 10;
  }

  ngOnInit() {
    this.getProofs(null);
  }

  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  // Get the list of proofs of a members
  getProofs(event) {
    const param = {
      bouffe_id : this.currentProofsData.bouffe_id
    }
    this.debt.getWithdrawalProof(param).subscribe((reponse: any) => {
     
      if(reponse && reponse.message === 'success') {
        let dataResp: any[] = [];
        if (reponse&& reponse.liste_traditional_banking_proof&& reponse.liste_traditional_banking_proof.length > 0) {
          reponse.liste_traditional_banking_proof.forEach(proof => {
            dataResp.push({type:'bank', data: proof}) ;
          });
        }
        if (reponse && reponse.liste_online_wallet_proof&& reponse.liste_online_wallet_proof.length > 0) {
          reponse.liste_online_wallet_proof.forEach(proof => {
            dataResp.push({type:'online', data: proof}) ;
          });
        }
    
        if (reponse && reponse.liste_pay_with_caisse_tontine_proof&& reponse.liste_pay_with_caisse_tontine_proof.length > 0) {
          reponse.liste_pay_with_caisse_tontine_proof.forEach(proof => {
            dataResp.push({type:'checkout', data: proof}) ;
          });
        }
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
      if (event) {
        event.target.complete();
      }
      this.loading = false;
      if(error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getProofs(event);
          } else {
            this.loading = false;
          }
         });
      } else if (error && error.error && error.error.bouffe_id_not_exist) {
            this.translate.get('BENEFICIARY_NOT_EXIST_TEXT').subscribe(trans => {
                this.ui.presentToast(trans);
            });
     } else {
          this.error.manageError(error);
      }
    });
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

    showProof(proofsData: any) {
      this.modatCtrl
      .create({
        component: ViewProofComponent,
        componentProps: {
          proof: proofsData
        }
      })
      .then(modalEl => modalEl.present());
    }

}
