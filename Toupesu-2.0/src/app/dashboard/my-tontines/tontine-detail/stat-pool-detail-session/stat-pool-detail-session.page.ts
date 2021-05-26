import { Component, OnInit } from '@angular/core';
import { TontineService } from '../../services/tontine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { ContributionOrderComponent } from 'src/app/shared/contribution-order/contribution-order.component';
import { DebtsManagerService } from '../../services/debts-manager.service';
import { SessionPaidProofsSessionComponent } from './session-paid-proofs-session/session-paid-proofs-session.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { faFrown, faGrin } from '@fortawesome/free-solid-svg-icons';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-stat-pool-detail-session',
  templateUrl: './stat-pool-detail-session.page.html',
  styleUrls: ['./stat-pool-detail-session.page.scss'],
})
export class StatPoolDetailSessionPage implements OnInit {

  members: any[];
  seances: any;
  currentSeances: any;
  seanceId: number;
  tontineData: any;
  currentCycle: any;
  nbreCycle: number;
  tontineUsersTemp: any;
  defaultList: any;
  activeList: any;
  nbItems: number;
  nbItemsByPage: number;
  totalPages: number;
  currentPage: number;
  numero: number;
  filter: boolean;
  tontineId: number;
  searchTerm: any;
  loading: boolean;
  balance: any;
  beneficiaryList: any[];
  statData: any;
  allData: any[];
  currentDebtData: any;
  currentUser: any;
  loadingPay: boolean;

  faFrown = faFrown;
  faGrin = faGrin;

  constructor(
    private tontine: TontineService,
    private activeRoute: ActivatedRoute,
    private tontinesData: TontineGlobalDataService,
    private navControler: NavController,
    private translate: TranslateService,
    private alertController: AlertController,
    private user: UserService,
    private event: EventService,
    private router: Router,
    private error: ErrorService,
    private debt: DebtsManagerService,
    private modatCtrl: ModalController,
    private ui: UiService,
    private api: ApiService,
    private util: UtilService
  ) {
    this.members = [];
    this.searchTerm = '';
    this.filter = false;
    this.seances = [];
    this.tontineUsersTemp = [];
    this.defaultList = [];
    this.activeList = [];
    this.nbItems = 0;
    this.nbItemsByPage = 10;
    this.totalPages = 0;
    this.currentPage = 1;
    this.numero = 1;
    this.loading = false;
    this.seanceId = parseInt(this.activeRoute.snapshot.params.id, 10);
    this.tontineData = this.tontine.getCurrentTontineData();
    this.tontineId = this.tontineData.tontine.tontine_id;
    this.statData = [];
    this.allData = [];
    this.currentDebtData = this.debt.getDebtsData();
    this.beneficiaryList = [this.debt.getDebtsData()];
    this.currentUser = this.user.getUserData();
  }

  ngOnInit() {
    this.loading = true;
    this.getTontineStatData();
  }

   // get size
   getSize() {
    return this.tontinesData.getSize(this.tontineData.tontine);
    }

  // Get the tontine's cycles
  getTontineStatData() {
    const param = {
      tontine_id: this.tontineData.tontine.tontine_id
    };
    this.tontine.getAllStatisticsData(param).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        reponse.result.forEach(data => {
          if (this.currentDebtData.infos_cycle.id === data.cycle.id) {
            this.currentCycle = data.cycle;
            this.nbreCycle = reponse.result.length;
            this.seances = data;
          }
        });
        this.getSeanceData();
      }
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getTontineStatData();
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }

    });
  }

  // Get the status
  getStatus(data: any) {
    return this.tontinesData.getStatus(data);
  }

  // Get the not contribute members
  getNonContributeMembers() {
    const cycle = this.currentCycle.id;
    this.tontine.getMembersSeanceList(cycle).subscribe((reponse: any) => {
      if (reponse && reponse.members && reponse.members.length > 0) {
        
        const memberPart = [];
        reponse.members.forEach(member => {
          // if (member.user_id&& member.cycle_id === this.currentCycle.id){
          memberPart.push({
            user_id: member.user_id,
            username: member.username,
            firstname: member.firstname,
            lastname: member.lastname,
            ispenality: false,
            iscaution:  false,
            phone: member.phone,
            montant: 0,
            share: 1,
            liste_part: [{ numero_part: member.numero_part }],
            coutshare: member.coutshare,
            contribution: parseFloat(member.coutshare),
            numero_part: member.numero_part,
            contribution_id: 0,
          });
          // }
        });

        memberPart.forEach(member => {
          if (member && this.tontinesData.memberNotInWithCoutShareAndWithShare(this.defaultList, member)) {
            this.defaultList.push(member);
          }
        });

        // cumulate the user shares data
        const allData = [];
        // group by session and part
        this.defaultList.forEach(member => {
          if (!this.tontinesData.notInWithAmount(member, allData)) {
            allData.push(member);
          } else {
            allData.forEach((data, index, array) => {
              if (data.user_id === member.user_id && member.montant === data.montant) {
                allData[index].contribution += member.coutshare ? parseFloat(member.coutshare) : 0;
                allData[index].share += 1;
                allData[index].liste_part.push({ numero_part: member.numero_part });
              }
            });
          }
        });

        this.defaultList = allData;
        this.defaultList = this.util.orderByKey(this.defaultList, 'firstname');
        this.tontineUsersTemp = this.defaultList;

        // cotisation
        let cotisation = [];
        cotisation = this.defaultList.filter(data => { return data.ispenality === false });

        // Penalite 
        let penalites = [];
        penalites = this.defaultList.filter(data => { return data.ispenality === true });
        this.defaultList = cotisation.concat(penalites);

        this.members = this.defaultList;
        this.totalPages = this.members.length;
        this.nbItems = this.defaultList.length;
        this.loading = false;
      } else {
        this.loading = false;
      }

    }, error => {
      this.loading = false;
      if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getNonContributeMembers();
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Get the seance data
  getSeanceData() {
    if (this.seances && this.seances.seances) {
      this.seances.seances.forEach(data => {
        if (data && data.seance.id === this.seanceId) {
          this.currentSeances = data;
          const members = [];
          if (data && data.membres_ayant_contribue && data.membres_ayant_contribue.length > 0) {
            data.membres_ayant_contribue.forEach(member => {

              members.push({
                user_id: member.user_id,
                username: member.username,
                firstname: member.firstname,
                lastname: member.lastname,
                ispenality: member.typecontribution_id === 1 && member.with_caution === 0 ? true : false,
                iscaution: member.with_caution === 1 ? true : false,
                phone: member.phone,
                montant: member.montant,
                coutshare: member.montant,
                share: 1,
                liste_part: [{ numero_part: member.numero_part }],
                contribution: parseFloat(member.montant),
                numero_part: member.numero_part,
                contribution_id: member.contribution_id,
              });

            });
          }
          this.defaultList = this.util.orderByKeyUp(members, 'firstname');
          this.loading = true;
          this.getNonContributeMembers();

        }
      });
    }
  }

  openContribute(name: string, amount?: number, balance?: number, currency?: string, beneficiary?: any) {
    this.debt.sendDebtsData(beneficiary);
    this.modatCtrl
      .create({
        component: ContributionOrderComponent,
        componentProps: {
          tontineName: name,
          amountPay: amount,
          balance: balance,
          currency: currency
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.data === "OK") {
            this.loading = true;
            this.getTontineStatData();
          }
        });
      });
  }

  // show the pin confirmation dilaog
  confirmPin(name: string, amount?: number, balance?: number, currency?: string, beneficiary?: any) {
    this.openContribute(name, amount, balance, currency, beneficiary);
  }

  // Jackpot proofs
  openProofsList() {
    this.modatCtrl
      .create({
        component: SessionPaidProofsSessionComponent,
      })
      .then(modalEl => modalEl.present());
  }

  // Download the rapport of the tontine
  downloadRapportXlsx() {
    const url = `${this.api.baseUrl}excel/export/excel/xlsx/${this.tontineData.tontine.tontine_id}/
      ${this.currentSeances.seance.cycle_id}`;
    window.open(url, '_blank');
  }

  // Filter by name
  filterByKeyword(keyword: string) {
    this.filter = true;
    const resultFilter = [];
    let words = '';
    let key = '';
    this.tontineUsersTemp.forEach(member => {
      if (member) {
        words = member.firstname + '' + member.lastname;
        words = words.toLowerCase();
        key = keyword.trim().toLowerCase();
        if (words.match(key)) {
          resultFilter.push(member);
        }
      }
    });
    this.defaultList = resultFilter;
    this.members = this.defaultList;
    this.totalPages = this.members.length;
    this.nbItems = this.defaultList.length;
  }

  // Confirm the member payment
  confirmPayment(data: any) {
    this.translate.get('CONFIRM_PAYMENT').subscribe(trans => {
      this.ui.presentLoading(trans);
    });
    this.loadingPay = true;
    const listProof = [];
    if (data && data.proof[0] && data.proof[0].liste_traditional_banking_proof && data.proof[0].liste_traditional_banking_proof.length > 0) {
      data.proof[0].liste_traditional_banking_proof.forEach(proof => {
        if (proof && proof.confirm_member === 0) {
          listProof.push({ proof_id: proof.id, is_traditional: 1 });
        }

      });
    }
    if (data && data.proof[0] && data.proof[0].liste_online_wallet_proof && data.proof[0].liste_online_wallet_proof.length > 0) {
      data.proof[0].liste_online_wallet_proof.forEach(proof => {
        if (proof && proof.confirm_member === 0) {
          listProof.push({ proof_id: proof.id, is_traditional: 0 });
        }
      });
    }

    const param = {
      bouffe_id: data.infos_bouffe.id,
      liste_proof_id: listProof
    };

    this.debt.confirmPaymentByUser(param).subscribe((reponse: any) => {
      this.ui.dismissLoading();
      this.loadingPay = false;
      if (reponse && reponse.message === 'success') {
        this.event.publish('confirmPayment');
        this.translate.get('BOUFFE_CONFIRM_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.navControler.setDirection('root');
        this.router.navigate(['/', 'dashboard', 'my-tontines', data.infos_bouffe.tontine_id, 'session-no-paid']);
      }

    }, error => {

      this.loadingPay = false;
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.loadingPay = true;
          this.error.renewSession().then((ans: any) => {
            this.ui.dismissLoading();
            if (ans && ans.result === "OK") {
              this.confirmPayment(data);
            } else {
              this.loadingPay = false;
            }
          });
        }

        if (error.error.bouffe_id_not_exist) {
          this.translate.get('BOUFFE_NOT_EXIST').subscribe(trans => {
            this.ui.presentLoading(trans);
          });
          this.ui.dismissLoading();
        }

      } else {
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }

  getContributionAmount(amount: any, share: any) {
    return this.tontinesData.getContributionAmount(amount,share);
  }

  // check if the user has confirmed the payment
  checkConfirmation(data: any) {
    return this.tontinesData.checkConfirmation(data);
  }

  // get the user pin 
  async confirmPaymentAlert(translations: string[], beneficiary: any) {
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      message: `${translations[1]}`,
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: `${translations[3]}`,
          handler: () => {
            this.confirmPayment(beneficiary);
          }
        }
      ]
    });

    await alert.present();
  }

  // show the pin confirmation dialog
  confirmShow(beneficiary?: any) {
    const translations = [];
    this.translate.get(['CONFIRM_TITLE_MSG', 'CONFIRM_PAYMENT_TEXT_MSG', 'CANCEL_TEXT', 'CONFIRM_TEXT']).subscribe(trans => {
      translations.push(trans.CONFIRM_TITLE_MSG);
      translations.push(trans.CONFIRM_PAYMENT_TEXT_MSG);
      translations.push(trans.CANCEL_TEXT);
      translations.push(trans.CONFIRM_TEXT);
      this.confirmPaymentAlert(translations, beneficiary);
    });
  }

}
