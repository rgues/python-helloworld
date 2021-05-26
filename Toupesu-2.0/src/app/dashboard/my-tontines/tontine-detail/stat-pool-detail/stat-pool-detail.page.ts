import { Component, OnInit } from '@angular/core';
import { TontineService } from '../../services/tontine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ContributionOrderComponent } from 'src/app/shared/contribution-order/contribution-order.component';
import { SessionPaidProofsComponent } from './session-paid-proofs/session-paid-proofs.component';
import { DebtsManagerService } from '../../services/debts-manager.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { faFrown, faGrin } from '@fortawesome/free-solid-svg-icons';
import { ContributeSeanceComponent } from '../contribute-seance/contribute-seance.component';
import { ContributionService } from '../../services/contribution.service';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { ContributeSeanceCautionComponent } from '../contribute-seance-caution/contribute-seance-caution.component';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-stat-pool-detail',
  templateUrl: './stat-pool-detail.page.html',
  styleUrls: ['./stat-pool-detail.page.scss'],
})
export class StatPoolDetailPage implements OnInit {

  members: any[];
  seances: any;
  currentSeances: any;
  seanceId: number;
  tontineData: any;
  currentCycle: any;
  nbreCycle: number;
  tontineUsersTemp: any;
  defaultList: any;
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
  loadingPay: boolean;
  status: string;
  user: any;
  allStatsData: any;
  currentUser: any;

  faFrown = faFrown;
  faGrin = faGrin;


  constructor(
    private tontine: TontineService,
    private tontinesData: TontineGlobalDataService,
    private activeRoute: ActivatedRoute,
    private alertController: AlertController,
    private api: ApiService,
    private contribution: ContributionService,
    private router: Router,
    private userService: UserService,
    private translate: TranslateService,
    private error: ErrorService,
    private debt: DebtsManagerService,
    private modatCtrl: ModalController,
    private ui: UiService,
    private util: UtilService
  ) {
    this.members = [];
    this.searchTerm = '';
    this.filter = false;
    this.seances = [];
    this.tontineUsersTemp = [];
    this.defaultList = [];
    this.nbItems = 0;
    this.nbItemsByPage = 10;
    this.totalPages = 0;
    this.currentPage = 1;
    this.numero = 1;
    this.loading = false;
    this.beneficiaryList = [];
    this.loadingPay = false;
    this.allStatsData = [];
    this.currentUser = [];
    this.user = this.userService.getUserData();
    this.seanceId = parseInt(this.activeRoute.snapshot.params.id, 10);
    this.tontineData = this.tontine.getCurrentTontineData();
    this.tontineId = this.tontineData.tontine.tontine_id;
  }

  ngOnInit() {
    this.getSeanceData();
  }

  // get size
  getSize() {
  return this.tontinesData.getSize(this.tontineData.tontine);
  }

  // Get the status
  getStatus(data: any) {
    return this.tontinesData.getStatus(data);
  }

     // check if a tontine has a caution 
     checkTontineCaution(tontineData: any) {
      return this.tontinesData.hasTontineCaution(tontineData);
    }

  // Get the tontine's cycles
  getTontinesCycle() {
    this.loading = true;
    this.tontine.getTontinesCyclesSeances(this.currentCycle.id).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.allStatsData = reponse.seances;
        this.tontine.setCurrentSeanceData({ nbCycles: this.nbreCycle, data: {cycle: this.currentCycle, seances:  this.allStatsData } });
        setTimeout(() => {
          this.loading = true;
          this.getSeanceData();
        }, 200);
       
      }
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getTontinesCycle();
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Get the seance data
  getSeanceData() {
    this.loading = true;
    this.tontine.getCurrentSeanceData().then(seances => {
      this.seances = seances;
      this.currentCycle = seances.data.cycle;
      this.nbreCycle = seances.nbCycles;
      this.seances.data.seances.forEach(data => {
        if (data && data.seance.id === this.seanceId) {
          this.currentSeances = data;
          console.log(this.currentSeances);
          if (data && data.membres_ayant_contribue && data.membres_ayant_contribue.length > 0) {
            const members = [];
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
                share: 1,
                liste_part: [{ numero_part: member.numero_part }],
                coutshare: member.montant,
                contribution: parseFloat(member.montant), // amount the member should buy 
                numero_part: member.numero_part,
                contribution_id: member.contribution_id,
              });
            });
            this.defaultList = this.util.orderByKey(members, 'firstname');
          }

        }
      });

      this.loading = true;
      this.getNonContributeMembers();
    });

  }

  // get contribution amaount
  getContributionAmount(amount: any, share: any) {
    return this.tontinesData.getContributionAmount(amount, share);
  }

  // Get the not contribute members
  getNonContributeMembers() {
    const cycle = this.currentCycle.id;
    this.tontine.getMembersSeanceList(cycle).subscribe((reponse: any) => {

      if (reponse && reponse.members && reponse.members.length > 0) {
        const memberPart = [];
        reponse.members.forEach(member => {
          //  if (member.user_id && member.cycle_id === this.currentCycle.id ) {
          memberPart.push({
            user_id: member.user_id,
            firstname: member.firstname,
            lastname: member.lastname,
            ispenality: false,
            iscaution:  false,
            phone: member.phone,
            montant: 0,
            share: 1,
            liste_part: [{ numero_part: member.numero_part }],
            coutshare: member.coutshare,
            contribution: parseFloat(member.coutshare),  // amount the member should buy 
            numero_part: member.numero_part,
            contribution_id: 0,
          });
          //  }

        });

        this.currentUser = [];
        memberPart.forEach(member => {
          if (member && this.tontinesData.memberNotInWithCoutShareAndWithShare(this.defaultList, member)) {
            if (member && member.user_id === this.user.id) {
              this.currentUser.push(member);
            } else {
              this.defaultList.push(member);
            }
          }
        });
        this.defaultList = this.util.orderByKey(this.defaultList, 'firstname');
        if (this.currentUser && this.currentUser.length > 0) {
          this.defaultList = this.currentUser.concat(this.defaultList);
        }
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

        // cotisation
        let cotisation = [];
        cotisation = this.defaultList.filter(data => { return data.ispenality === false });
        // Penalite 
        let penalites = [];
        penalites = this.defaultList.filter(data => { return data.ispenality === true });

        this.defaultList = cotisation.concat(penalites);



        this.tontineUsersTemp = this.defaultList;
        this.members = this.defaultList;
        this.totalPages = this.members.length;
        this.nbItems = this.defaultList.length;
        this.loading = false;
      } else {
        this.loading = false;
      }

      // Get beneficiaries 
      this.getBeneficiary();
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

  openContribute(name: string, amount?: number, balance?: number, currency?: string, beneficiary?: any) {
    let currencyId = '';
    this.members.forEach(member => {
      if (member && member.user_id === beneficiary.user_id) {
        currencyId = member.device_id;
      }
    });
    const data = {
      user_id: beneficiary.user_id,
      bouffe_id: beneficiary.id,
      device_id: currencyId
    };
    this.debt.sendDebtsData(data);
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
      .then(modalEl => modalEl.present());
  }

  // show the pin confirmation dilaog
  confirmPin(name: string, amount?: number, balance?: number, currency?: string, beneficiary?: any) {
    const translations = [];
    this.translate.get(['M_ENTER_YOUR_PIN', 'M_PIN', 'CANCEL_TEXT', 'YES_TEXT']).subscribe(trans => {
      translations.push(trans.M_ENTER_YOUR_PIN);
      translations.push(trans.M_PIN);
      translations.push(trans.CANCEL_TEXT);
      translations.push(trans.YES_TEXT);
      this.getUserPin(translations, name, amount, balance, currency, beneficiary);
    });
  }

  // get the user pin 
  async getUserPin(translations: string[], name: string, amount?: number, balance?: number, currency?: string, beneficiary?: any) {
    const userPin = this.userService.getUserSecret();
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      inputs: [
        {
          name: 'pin',
          type: 'tel',
          placeholder: `${translations[1]}`,
        }
      ],
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: `${translations[3]}`,
          handler: (ans) => {

            // Check if the pin is correct
            if (parseInt(ans.pin, 10) === parseInt(userPin.password, 10)) {
              this.openContribute(name, amount, balance, currency, beneficiary);
            } else {
              this.translate.get('M_PIN_INVALID').subscribe(trans => {
                this.ui.presentToast(trans);
              });
            }

          }
        }
      ]
    });

    await alert.present();
  }

  // Jackpot proofs
  openProofsList(bouffe: any) {
    this.modatCtrl
      .create({
        component: SessionPaidProofsComponent,
        componentProps: {
          bouffeId: bouffe.infos_bouffe.id
        }
      })
      .then(modalEl => modalEl.present());
  }

  // Download the rapport of the tontine
  downloadRapportXlsx() {
    const url = `${this.api.baseUrl}excel/export/excel/xlsx/${this.tontineData.tontine.tontine_id}/${this.currentSeances.seance.cycle_id}`;
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
        this.translate.get('BOUFFE_CONFIRM_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
      }

      this.getBeneficiary();

    }, error => {

      this.loadingPay = false;
      if (error && error.error && error.error.message === 'error') {

        if (error.error.bouffe_id_not_exist) {
          this.translate.get('BOUFFE_NOT_EXIST').subscribe(trans => {
            this.ui.presentLoading(trans);
          });
          this.ui.dismissLoading();
        }

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

      } else {
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
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

  // show the pin confirmation dilaog
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

  // Get the list of beneficiary
  getBeneficiary() {
    if (this.tontineData.tontine.tontine_payment_type_id === 1) {
      const param = {
        seance_id: this.seanceId
      }
      this.debt.confirmJackpotPaiementSeance(param).subscribe((reponse: any) => {
        if (reponse && reponse.message === 'success') {
          this.beneficiaryList = reponse.liste_bouffes;
        }
      }, error => {
        if (error && error.error && error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getBeneficiary();
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
  }

  // check if the user has confirmed the payment
  checkConfirmation(data: any) {
    return this.tontinesData.checkConfirmation(data);
  }

  // show the pin confirmation dilaog
  confirmUserPin(data: any) {
    if (this.tontineData.tontine.tontine_payment_type_id === 1) {
      this.router.navigate(['/', 'dashboard', 'my-tontines', this.tontineData.tontine.tontine_id, 'debts']);
    } else {
      const userPin = this.userService.getUserSecret();
      this.selectPaymentMode(userPin.password, data);
    }
  }

  // open the tontine contribution modal
  selectPaymentMode(pin: any, data: any) {
    const tontineData = this.tontine.getCurrentTontineData();
    // Ask the user page pin before send data
    const paymentData = {
      title: tontineData.tontine.name,
      paymentMode: 'WALLET',
      contribution: data.contribution,
      seance_id: this.seanceId,
      device_name: tontineData.tontine.monnaie,
      montant: data.coutshare,
      typecontribution_id: 2,
      sens_contribution: 'sortant',
      liste_part: data.liste_part,
      pin: pin
    };
    this.contribution.sendContributionData(paymentData);
    this.openContributeSeance(paymentData);
  }

  // Open the modal
  openContributeSeance(param: any) {
    const componentView = this.checkTontineCaution(this.tontineData.tontine) ? ContributeSeanceCautionComponent : ContributeSeanceComponent;
    this.modatCtrl
      .create({
        component: componentView,
        componentProps: {
          tontineName: param.title,
          contribAmount: param.montant,
          data: param
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          if (ans && ans.data === 'OK') {
            this.getTontinesCycle();
          }
        });
      });
  }

}
