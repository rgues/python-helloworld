import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll, AlertController, NavController } from '@ionic/angular';
import { ContributionComponent } from '../../../../../shared/contribution/contribution.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage implements OnInit {

  myDebts: any[] = [];
  proofsList: any[] = [];
  allCurrencies: any;
  currentCurrency: any;
  currentTontine: any;
  currentUser: any;
  currentFacture: any;
  totalDue: number;
  totalBill: number;
  totalBalance: number;
  billId: any;
  itemsData: any;
  itemsList: any;
  reference: string;
  loadingPay: boolean;
  loading: boolean;
  allData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modatCtrl: ModalController,
    private activate: ActivatedRoute,
    private translate: TranslateService,
    private alertController: AlertController,
    private navcontroler: NavController,
    private route: Router,
    private ui: UiService,
    private debt: DebtsManagerService,
    private tontine: TontineService,
    private tontineError: TontineErrorService,
    private error: ErrorService
  ) {
    this.allCurrencies = [];
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.totalDue = 0;
    this.totalBill = 0;
    this.totalBalance = 0;
    this.itemsData = [];
    this.itemsList = [];
    this.loadingPay = false;
    this.loading = false;
    this.allData = [];
    this.nbItems = 10;
    this.billId = this.activate.snapshot.params.id;
  }

  ngOnInit() {
    this.loading = true;
    this.getDebtsDone(null);
  }

  openContribute(name: string, amount?: number, balance?: number) {
    const params = { facture: this.currentFacture, items: this.myDebts, title: this.currentTontine.tontine.name };
    this.debt.sendDebtsData(params);
    this.modatCtrl
      .create({
        component: ContributionComponent,
        componentProps: {
          tontineName: name,
          amountPay: amount,
          balance: balance,
          currency: this.currentFacture.device_name
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans: any) => {
          this.navcontroler.setDirection('root');
          if (ans && ans.data === 'complete-all') {
            this.currentTontine.tontine.administrator === 1 ? 
            this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts' ,this.currentFacture.id, 'approved-detail']) :
            this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts' ,this.currentFacture.id, 'approved-detail-user']) ;

          } else if (ans && ans.data === 'complete') {
              this.currentTontine.tontine.administrator === 1 ? 
               this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts' ,this.currentFacture.id, 'in-approval-detail']) :
               this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts' ,this.currentFacture.id, 'in-approval-detail-user']) ;
          } else if (ans && ans.data === 'partial')  {
              this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-progress']);
          } else {
            this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-progress']);
          }
        }); 
      });
  }

  // can delete the proof
  canDelete(proof: any) {
    return proof && proof.tontinte_payment_type_name ==='Traditional Banking' 
    && this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
  }

  // can show the proof
  canShow(proof: any) {
    return proof && proof.tontinte_payment_type_name ==='Traditional Banking' && proof.receipt;
  }

  // show the pin confirmation dilaog
  confirmPin(name: string, amount?: number, balance?: number) {
    this.openContribute(name, amount, balance);
  }

  // format the bill data
  formatBillData(reponse) {
    this.totalDue = reponse.infos_facture[0].total_due;
    this.totalBill = reponse.infos_facture[0].total_paid;
    this.totalBalance = reponse.infos_facture[0].balance;
    this.currentFacture = reponse.infos_facture[0].facture;
    this.myDebts = reponse.liste_item_facture[0];
    this.currentUser = reponse.infos_user;
    let proofs: any[] = [];
    proofs = proofs.concat(reponse.liste_payment_with_traditional_banking);
    proofs = proofs.concat(reponse.liste_payment_with_online_wallet);
    proofs = proofs.concat(reponse.liste_payment_with_wallet);
    this.allData = proofs;
    if (this.allData.length > this.nbItems) {
      this.proofsList = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.proofsList.push(this.allData[this.proofsList.length]);
      }
    } else {
      this.proofsList = this.allData;
    }
  }

  // get the debts already done
  getDebtsDone(event) {
    const param = {
      facture_id: this.billId
    };
    this.debt.getBillInformationWithPayment(param).subscribe((reponse: any) => {
    
      if (reponse && reponse.message === 'success') {
        this.formatBillData(reponse);
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
      if (error && error.error) {
        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK'){
              this.getDebtsDone(event);
            } else {
              this.loading = false;
            }
          });
        }
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getDebtsDone(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.proofsList.length < this.allData.length) {
          this.proofsList.push(this.allData[this.proofsList.length]);
        } else if (this.proofsList.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // show the proof of payment
  showProof(proofs: any) {
    this.modatCtrl
      .create({
        component: ViewProofComponent,
        componentProps: {
          proof: proofs.receipt
        }
      })
      .then(modalEl => modalEl.present());
  }

  async confirmDelete(param) {
    this.translate.get(['DEBT_PROOF_DELETE_TITLE', 'DEBT_PROOF_DELETE_MESG', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      this.showDelete(param, trans.DEBT_PROOF_DELETE_TITLE, trans.DEBT_PROOF_DELETE_MESG, trans.CANCEL_TEXT, trans.YES_TEXT);
    });
  }

  // Confirm delete
  async showDelete(param: any, title, message, cancel_text, ok_text) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: cancel_text,
          handler: () => { }
        }, {
          text: ok_text,
          handler: (ans) => {
            this.deleteProf(param);
          }
        }
      ]
    });
    await alert.present();
  }

  // delete the proof of payment
  deleteProf(proof) {
    const data = {
      reference_proof: proof.reference_transaction,
      facture_id: this.currentFacture.id,
      tontine_id: this.currentTontine.tontine.tontine_id
    };
    this.translate.get('DEBT_DELETING').subscribe(trans => {
      this.ui.presentLoading(trans);
    });

    this.debt.deleteProofPayment(data).subscribe((reponse: any) => {
      this.ui.dismissLoading();
      if (reponse && reponse.message === 'success') {
        this.translate.get('DEBT_PROOF_DELETE_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.getDebtsDone(null);
      }

    }, error => {

      if (error && error.error) {
          if (error && error.error && error.error.user_not_found) {
            this.error.renewSession().then((data: any) => {
                    this.ui.dismissLoading();
                  if (data && data.result === "OK") {
                      this.deleteProf(proof);
                  }
            });
          } else {
            this.ui.dismissLoading();
            this.tontineError.manageTontineError(error);
          }
      } else {
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }
}
