import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll, NavController } from '@ionic/angular';
import { ValidationComponent } from '../validation/validation.component';
import { TontineService } from '../../../services/tontine.service';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ViewProofComponent } from 'src/app/shared/view-proof/view-proof.component';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-in-approval-detail',
  templateUrl: './in-approval-detail.page.html',
  styleUrls: ['./in-approval-detail.page.scss'],
})
export class InApprovalDetailPage implements OnInit {

  myDebts: any[] = [];
  proofsList: any[] = [];
  userData: any;

  allCurrencies: any;
  hasValidate: boolean;
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
  validation: any;
  nbValidator: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private debt: DebtsManagerService,
    private router: Router,
    private navController: NavController,
    private user: UserService,
    private error: ErrorService,
    private activate: ActivatedRoute
  ) {
    this.totalDue = 0;
    this.totalBill = 0;
    this.totalBalance = 0;
    this.itemsData = [];
    this.itemsList = [];
    this.loadingPay = false;
    this.loading = false;
    this.hasValidate = false;
    this.allData = [];
    this.nbItems = 10;
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.billId = this.activate.snapshot.params.id;
    this.nbValidator = this.currentTontine.tontine.number_admin_that_validates_contributions ? this.currentTontine.tontine.number_admin_that_validates_contributions : 1;
    this.userData = this.user.getUserData();
   }

  ngOnInit() {
    this.loading = true;
    this.getInApproveDetailDone(null);
  }

  openValidation(name, amount, option) {
    this.debt.sendDebtsData(this.currentFacture);
      this.modatCtrl
      .create({
        component: ValidationComponent,
        componentProps: {
          memberName: name,
          debtAmount: amount,
          debtOption: option,
          currency: this.currentFacture.device_name,
          reference: this.currentFacture.reference
        }
      })
      .then( modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(ans => {
              this.navController.setDirection('root');
            if (ans && ans.data === 'validate') {
              if (this.currentTontine.tontine.administrator === 1) {
                // ckech the quota of validation and redirect
                if (parseInt(this.validation.nbre_admin_ayant_valide) + 1 === parseInt(this.validation.nbre_admin_devant_valide) ) {
                  this.router.navigate(['/','dashboard','my-tontines',this.currentTontine.tontine.tontine_id,'debts','approved']);
                } else {
                  this.loading = true;
                  this.getInApproveDetailDone(null);
                }
              } else {
                this.router.navigate(['/','dashboard','my-tontines',this.currentTontine.tontine.tontine_id,'debts','approved-user']);
              }
            } else if (ans && ans.data === 'reject') {
              if (this.currentTontine.tontine.administrator === 1) {
                if (parseInt(this.validation.nbre_admin_ayant_valide) + 1 === parseInt(this.validation.nbre_admin_devant_valide) ) {
                  this.router.navigate(['/','dashboard','my-tontines',this.currentTontine.tontine.tontine_id,'debts','rejected']);
                } else {
                  this.loading = true;
                  this.getInApproveDetailDone(null);
                }
              } else {
                this.router.navigate(['/','dashboard','my-tontines',this.currentTontine.tontine.tontine_id,'debts','rejected-user']);
              }
            } 
        });
      });
  }

  // can validate or reject a payment
  canMakeAction() {
    return this.currentTontine.tontine && this.currentTontine.tontine.administrator===1 
    && this.myDebts && this.myDebts.length > 0 && this.validation 
    && this.validation.nbre_admin_ayant_valide < this.validation.nbre_admin_devant_valide 
    && !this.hasValidate
  }

  // format the bill data
  formatBillData(reponse) {
    this.validation = reponse.validate_quotation[0];
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
    this.hasValidate = false;
    if(reponse.liste_admin_approval) {
      reponse.liste_admin_approval.forEach(admin => {
            if (admin && admin.user_admin_id ===  this.userData.id) {
              this.hasValidate = true;
            }
      });
    }

    if (!this.hasValidate) {
      if(reponse.liste_admin_refusal) {
        reponse.liste_admin_refusal.forEach(admin => {
              if (admin && admin.user_admin_id ===  this.userData.id) {
                this.hasValidate = true;
              }
        });
      }
    }

    if (this.allData.length > this.nbItems) {
      this.proofsList = [];
      for (let i = 0; i < this.nbItems; i++) {
        this.proofsList.push(this.allData[this.proofsList.length]);
      }
    } else {
      this.proofsList = this.allData;
    }
  }

  // get the debts details done
  getInApproveDetailDone(event) {
    const param = {
      facture_id: this.billId
    };
    this.debt.getBillPaymentAdmin(param)
    .subscribe((reponse: any) => {
    
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
              this.getInApproveDetailDone(event);
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

  showProof(proofs: any) {
    console.log(proofs);
    this.modatCtrl
    .create({
      component: ViewProofComponent,
      componentProps: {
        proof: proofs.receipt
      }
    })
    .then(modalEl => modalEl.present());
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getInApproveDetailDone(event);
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

}
