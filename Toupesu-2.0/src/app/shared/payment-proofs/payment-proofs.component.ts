import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { TontineService } from 'src/app/dashboard/my-tontines/services/tontine.service';
import { DebtsManagerService } from 'src/app/dashboard/my-tontines/services/debts-manager.service';

@Component({
  selector: 'app-payment-proofs',
  templateUrl: './payment-proofs.component.html',
  styleUrls: ['./payment-proofs.component.scss'],
})
export class PaymentProofsComponent implements OnInit {

  currentProofsData: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
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
    this.currentProofsData = this.debt.getDebtsData();
    this.tontineData = this.tontine.getCurrentTontineData();
    this.loading = false;
    this.myProofs = [];
    this.allData = [];
    this.nbItems = 10;
  }

  ngOnInit() {
    this.loading = true;
    this.getProofs();
  }

  // close the modal
  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  // Get the list of proofs of a members
  getProofs() {
    let dataResp: any[] = [];
    dataResp = dataResp.concat({ type: 'bank', data: this.currentProofsData.proof[0].liste_traditional_banking_proof });
    dataResp = dataResp.concat({ type: 'online', data: this.currentProofsData.proof[0].liste_online_wallet_proof });
    dataResp = dataResp.concat({ type: 'checkout', data: this.currentProofsData.proof[0].liste_pay_with_caisse_tontine_proof });
    this.allData = dataResp;
    if (this.allData.length > this.nbItems) {
      this.myProofs = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.myProofs.push(this.allData[this.myProofs.length]);
      }
    } else {
      this.myProofs = this.allData;
    }
    this.loading = false;
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
