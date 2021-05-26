import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonInfiniteScroll, NavParams } from '@ionic/angular';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { TontineService } from '../../../services/tontine.service';

@Component({
  selector: 'app-paid-proofs',
  templateUrl: './paid-proofs.component.html',
  styleUrls: ['./paid-proofs.component.scss'],
})
export class PaidProofsLoanComponent implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  loading: boolean;
  myProofs: any;
  allData: any;
  nbItems: number;
  tontineData: any;
  @Input() reference: string;

  constructor(
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private navParams: NavParams
  ) {
    this.tontineData = this.tontine.getCurrentTontineData();
    this.loading = false;
    this.myProofs = [];
    this.allData = [];
    this.nbItems = 10;
    const param = this.navParams.get('data');
    this.getProofs(param.proof);
  }

  ngOnInit() {
  }

  closeContribute() {
    this.modatCtrl.dismiss(null, 'cancel');
  }


  // Get the list of proofs of a members
  getProofs(data) {
    if (data && data.length > 0) {
      this.allData = data;
      if (this.allData.length > this.nbItems) {
        this.myProofs = [];
        for (let i = 0; i < this.nbItems; i++) {
          this.myProofs.push(this.allData[this.myProofs.length]);
        }
      } else {
        this.myProofs = this.allData;
      }
    }
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
