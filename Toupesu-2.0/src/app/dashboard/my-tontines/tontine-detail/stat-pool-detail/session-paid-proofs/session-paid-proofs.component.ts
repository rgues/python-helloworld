import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { TontineService } from '../../../services/tontine.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-session-paid-proofs',
  templateUrl: './session-paid-proofs.component.html',
  styleUrls: ['./session-paid-proofs.component.scss'],
})
export class SessionPaidProofsComponent implements OnInit {

  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;
  loading: boolean;
  myProofs: any;
  allData: any;
  nbItems: number;
  currentSeanceData: any;
  tontineData: any;
  @Input() bouffeId;

  constructor(
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private translate: TranslateService,
    private error: ErrorService,
    private ui: UiService,
    private debt: DebtsManagerService
  ) { 
      
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
      bouffe_id : this.bouffeId
    }
    this.debt.getWithdrawalProof(param).subscribe((reponse: any) => {
      this.loading = false;
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

      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      this.loading = false;
      if(error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getProofs(event);
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
