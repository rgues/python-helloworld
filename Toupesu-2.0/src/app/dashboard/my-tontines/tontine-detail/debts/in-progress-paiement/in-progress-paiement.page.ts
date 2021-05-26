import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll, NavController } from '@ionic/angular';
import { ContributionComponent } from '../../../../../shared/contribution/contribution.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../../services/tontine.service';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ContributionService } from '../../../services/contribution.service';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';

@Component({
  selector: 'app-in-progress-paiement',
  templateUrl: './in-progress-paiement.page.html',
  styleUrls: ['./in-progress-paiement.page.scss'],
})
export class InProgressPaiementPage implements OnInit {

  myDebts: any[] = [];
  proofsList: any[] = [];
  allCurrencies: any;
  currentCurrency: any;
  currentTontine: any;
  currentUser: any;
  currentCycle: any;
  currentFacture: any;
  totalDue: number;
  totalPay: number;
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
    private userService: UserService,
    private translate: TranslateService,
    private contribution: ContributionService,
    private navcontroler: NavController,
    private formUtil: FormUtilsService,
    private route: Router,
    private ui: UiService,
    private debt: DebtsManagerService,
    private tontine: TontineService,
    private tontineError: TontineErrorService,
    private error: ErrorService
  ) {
    this.allCurrencies = [];
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.currentCycle = this.currentTontine.cycle_courant;
    this.totalDue = 0;
    this.totalBill = 0;
    this.totalBalance = 0;
    this.itemsData = [];
    this.reference = this.formUtil.getRandomId();
    this.itemsList = [];
    this.loadingPay = false;
    this.loading = false;
    this.allData = [];
    this.nbItems = 10;
    this.billId = this.activate.snapshot.params.id;
  }

  ngOnInit() {
    this.loading = false;
    this.getCurrency();
    this.storageBillData();
  }

  // Get all the currency
  getCurrency() {
    this.contribution.getCurrencies().subscribe((reponse: any) => {
      this.allCurrencies = reponse.device;
      this.allCurrencies.forEach(cur => {
        if (cur && cur.name === this.currentTontine.tontine.monnaie) {
          this.currentCurrency = cur.id;
        }
      });
    }, error => {
      this.error.manageError(error);
    });
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
              this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'approved-detail']) :
              this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'approved-detail-user']);
          } else if (ans && ans.data === 'complete') {
            this.currentTontine.tontine.administrator === 1 ?
              this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-approval-detail']) :
              this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-approval-detail-user']);
          } else if (ans && ans.data === 'partial') {
            this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-progress']);
          } else {
            this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', this.currentFacture.id, 'in-progress']);
          }
        })
      });
  }

  // show the pin confirmation dilaog
  confirmPin() {
    this.saveBill(1);
  }

  // format the bill data
  storageBillData() {
    const billData = this.debt.getDebtsData();
    this.totalPay = billData.billAmount;
    this.totalDue = billData.dueAmount;
    this.totalBill = billData.billAmount;
    this.totalBalance = billData.balance;
    this.myDebts = billData.itemsList;
    this.itemsData = billData.items;
    this.currentUser = this.userService.getUserData();
    console.log(this.myDebts);
  }

  // Save a member bill 
  saveBill(index: number) {
    if (this.currentCurrency) {
      const data = {
        reference_facture: this.reference,
        device_id: this.currentCurrency,
        montant_total_facture: this.totalPay,
        liste_item: this.itemsData,
        tontine_id: this.currentTontine.tontine.tontine_id
      };

      if (index === 0) {
        this.translate.get('SAVING_TEXT').subscribe(trans => {
          this.ui.presentLoading(trans);
        });
      } else {
        this.translate.get('PAYMENT_PROCESS').subscribe(trans => {
          this.ui.presentLoading(trans);
        });
      }

      this.loadingPay = true;
      this.debt.saveMemberBill(data).subscribe((reponse: any) => {
        this.loadingPay = false;
        this.ui.dismissLoading();
        if (reponse && reponse.message === 'success') {
          this.translate.get('DEBT_BILL_SAVE_MSG').subscribe(trans => {
            this.ui.presentToast(trans);
          });
          if (index === 0) {
            this.navcontroler.setDirection('root');
            this.route.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts', 'in-progress-list']);
          } else {
            // construct object for make payment
            this.currentFacture = reponse.facture;
            this.openContribute(this.currentTontine.tontine.name, this.totalPay, this.totalBalance);
          }
        }
      }, error => {
        this.loadingPay = false;
        if (error && error.error) {
          if (error && error.error && error.error.user_not_found) {
            this.loadingPay = true;
            this.error.renewSession().then((data: any) => {
              this.ui.dismissLoading();
              if (data && data.result === "OK") {
                this.saveBill(index);
              } else {
                this.loadingPay = false;
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
    } else {
      this.translate.get('TRY_AGAIN_MSG').subscribe(trans => {
        this.ui.presentToast(trans);
        this.getCurrency();
      });
    }
  }

}
