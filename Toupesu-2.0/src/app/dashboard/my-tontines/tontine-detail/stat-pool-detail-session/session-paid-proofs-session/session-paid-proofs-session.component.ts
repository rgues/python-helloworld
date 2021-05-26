import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { TontineService } from '../../../services/tontine.service';

@Component({
  selector: 'app-session-paid-proofs-session',
  templateUrl: './session-paid-proofs-session.component.html',
  styleUrls: ['./session-paid-proofs-session.component.scss'],
})
export class SessionPaidProofsSessionComponent implements OnInit {

  currentStatData: any;
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;
  loading: boolean;
  myProofs: any;
  allData: any;
  nbItems: number;
  currentSeanceData: any;
  tontineData: any;

  constructor(
    private modatCtrl: ModalController,
    private tontine: TontineService,
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
    this.getProofs();
  }

  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  // Get the list of proofs of a members
  getProofs() {
    let dataResp: any[] = [];

    if (this.currentStatData && this.currentStatData.proof[0] && this.currentStatData.proof[0].liste_traditional_banking_proof&& this.currentStatData.proof[0].liste_traditional_banking_proof.length > 0) {
      this.currentStatData.proof[0].liste_traditional_banking_proof.forEach(proof => {
        dataResp.push({type:'bank', data: proof}) ;
      });
    }
    if (this.currentStatData && this.currentStatData.proof[0] && this.currentStatData.proof[0].liste_online_wallet_proof&& this.currentStatData.proof[0].liste_online_wallet_proof.length > 0) {
      this.currentStatData.proof[0].liste_online_wallet_proof.forEach(proof => {
        dataResp.push({type:'online', data: proof}) ;
      });
    }

    if (this.currentStatData && this.currentStatData.proof[0] && this.currentStatData.proof[0].liste_pay_with_caisse_tontine_proof&& this.currentStatData.proof[0].liste_pay_with_caisse_tontine_proof.length > 0) {
      this.currentStatData.proof[0].liste_pay_with_caisse_tontine_proof.forEach(proof => {
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

    showProof(proofData: any) {
      this.modatCtrl
      .create({
        component: ViewProofComponent,
        componentProps: {
          proof: proofData
        }
      })
      .then(modalEl => modalEl.present());
    }

}
