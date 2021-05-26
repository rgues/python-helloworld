import { Component, OnInit, ViewChild } from '@angular/core';
import { TontineService } from '../../services/tontine.service';
import { DebtsManagerService } from '../../services/debts-manager.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { EventService } from 'src/app/shared/service/events.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-session-no-paid',
  templateUrl: './session-no-paid.page.html',
  styleUrls: ['./session-no-paid.page.scss'],
})
export class SessionNoPaidPage implements OnInit {

  currentTontine: any;
  faFrown = faFrown;
  beneficiaryList: any;
  allData: any;
  nbItems: number;
  loading: boolean;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  status: string;
  currentCycle: any;

  constructor(
    private tontine: TontineService,
    private error: ErrorService,
    private ui: UiService,
    private util: UtilService,
    private event: EventService,
    private router: Router,
    private translate: TranslateService,
    private debt: DebtsManagerService
  ) {
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentCycle = this.currentTontine.cycle_courant;
    this.beneficiaryList = [];
    this.allData = [];
    this.nbItems = 10;
    this.status = '';

    this.event.publish('confirmPayment', () => {
      this.loading = true;
      this.getBeneficiary(null);
    });

    this.event.publish('modal-close', () => {
      this.loading = true;
      this.getBeneficiary(null);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getBeneficiary(null);
  }

  // check if the user has confirmed the payment
  checkConfirmation(data: any) {
    let hasConfirm = true;
    if (data && data.proof[0].liste_traditional_banking_proof) {
      data.proof[0].liste_traditional_banking_proof.forEach(proof => {
        if (proof.confirm_member === 0) {
          hasConfirm = false;
        }
      });
    }

    if (hasConfirm && data && data.proof[0].liste_online_wallet_proof) {
      data.proof[0].liste_online_wallet_proof.forEach(proof => {
        if (proof.confirm_member === 0) {
          hasConfirm = false;
        }
      });
    }
    return hasConfirm;
  }

  // Get the list of beneficiary
  getBeneficiary(event) {
    const param = {
      tontine_id: this.currentTontine.tontine.tontine_id
    }
    this.debt.confirmJackpotPaiementTontine(param).subscribe((reponse: any) => {

      this.loading = false;
      if (reponse && reponse.message === 'success') {
        if (reponse.liste_bouffes && reponse.liste_bouffes.length > 0) {
          const currentCycle = this.currentCycle && this.currentCycle.numerocycle ? this.currentCycle.numerocycle : 0;
          const previousCycle = this.currentCycle && this.currentCycle.numerocycle ? this.currentCycle.numerocycle - 1 : 0;
          let beneficiaryList = [];
          beneficiaryList = reponse.liste_bouffes.filter(data => { return data.infos_cycle.numerocycle === currentCycle || data.infos_cycle.numerocycle === previousCycle });
          this.allData = this.util.orderByObjetKeyUp(beneficiaryList, 'infos_bouffe', 'updated_at');
          if (this.allData.length > this.nbItems) {
            this.beneficiaryList = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.beneficiaryList.push(this.allData[this.beneficiaryList.length]);
            }
          } else {
            this.beneficiaryList = this.allData;
          }
        }
      }
     
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
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getBeneficiary(event);
          } else {
            this.loading = false;
          }
        });
      } else if (error && error.error && error.error.seance_id_not_exist) {
        this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
          this.ui.presentToast(trans);
        });
      } else if (error && error.error && error.error.user_not_authorized) {
        this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
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
    this.getBeneficiary(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.beneficiaryList.length < this.allData.length) {
          this.beneficiaryList.push(this.allData[this.beneficiaryList.length]);
        } else if (this.beneficiaryList.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // view Proof and make the payment
  viewProof(beneficiary) {
    this.debt.sendDebtsData(beneficiary);
    this.router.navigate(['/', 'dashboard', 'my-tontines', beneficiary.infos_bouffe.tontine_id, 'stat', 'pools-session', beneficiary.infos_bouffe.seance_id]);
  }

  // Get the status
  getStatus(data: any) {
    if (this.checkConfirmation(data)) {
      this.translate.get(['CONFIRM_TEXT']).subscribe(trans => {
        this.status = trans.CONFIRM_TEXT;
      });
    } else {
      this.translate.get(['NOT_CONFIRM']).subscribe(trans => {
        this.status = trans.NOT_CONFIRM;
      });
    }
    return this.status;
  }

}
