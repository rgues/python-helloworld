import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, AlertController } from '@ionic/angular';
import { ContributeComponent } from './contribute/contribute.component';
import { TontineDetailMenuComponent } from './tontine-detail-menu/tontine-detail-menu.component';
import { InfoEditComponent } from './info-edit/info-edit.component';
import { TontineService } from '../services/tontine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { ContributionService } from '../services/contribution.service';
import { EncheresService } from 'src/app/shared/service/encheres.service';
import { WalletTontineService } from './wallet/services/wallet-tontine.service';
import { TontineGlobalDataService } from '../services/tontine-global-data.service';
import { ContributeSeanceComponent } from './contribute-seance/contribute-seance.component';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UserService } from '../../user/service/user.service';
import { StorageData } from 'src/app/shared/service/storage.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Component({
  selector: 'app-tontine-detail',
  templateUrl: './tontine-detail.page.html',
  styleUrls: ['./tontine-detail.page.scss'],
})
export class TontineDetailPage implements OnInit {

  tontineId: number;
  members: any;
  currentTontine: any;
  myTontine: any;
  bid: any;
  seance: any;
  cycle: any;
  memberShows: any;
  tontineCountryName: string;
  tontineFrequencyName: string;
  tontineTypeName: string;
  user: any;
  currentSeance: any;
  typesTontines: any;
  currentAmount: any;
  userName: string;
  walletTontines: any;
  detailCaisses: any;
  loadingCaisse: boolean;
  userContribution: any;
  showContributionBtn: boolean;
  nbContributions: any;
  seancesList: any;
  hascheckPreviousSeance: boolean;
  static canConnect: any;
  hasPaidCaution: boolean;
  checkPaidCaution: boolean;
  loadingPay: boolean;
  cautionAmount: number;

  constructor(
    private userService: UserService,
    private alertController: AlertController,
    private walletTontine: WalletTontineService,
    private router: Router,
    private storage: StorageData,
    private modatCtrl: ModalController,
    private popoverController: PopoverController,
    private encheresService: EncheresService,
    private event: EventService,
    private translate: TranslateService,
    private tontine: TontineService,
    private tontinesData: TontineGlobalDataService,
    private tontineError: TontineErrorService,
    private activeRoute: ActivatedRoute,
    private error: ErrorService,
    private contribution: ContributionService,
    private util: UtilService,
    private ui: UiService,
    private localStorage: LocalStorageService
  ) {
    this.typesTontines = [];
    this.members = [];
    this.memberShows = [];
    this.tontineCountryName = '';
    this.tontineFrequencyName = '';
    this.tontineTypeName = '';
    this.tontineId = this.activeRoute.snapshot.params.tontineId;
    this.user = this.userService.getUserData();
    const tontineData = this.tontine.getCurrentTontineData();
    console.log(tontineData);
    this.currentSeance = tontineData.seance_courante;
    this.currentAmount = [];
    this.seancesList = [];
    this.userName = '';
    this.loadingCaisse = false;
    this.showContributionBtn = true;
    this.nbContributions = [];
    TontineDetailPage.canConnect = null;
    this.hascheckPreviousSeance = false;
    this.hasPaidCaution = false;
    this.checkPaidCaution = false;
    this.loadingPay = false;

    this.event.subscribe('cautionPaid', () => {
      this.checkCaution();
    });
  }

  ngOnInit() {
    this.getTontineTypes();
    this.checkCaution();
    this.updateCurrentUserTontine(null);
    // Get the number of pending contributions
    this.getContributions(null);
    this.getUserContributionData(null);
  }



  // Get the list user tontines
  getUserContributionData(event?: any) {
    const param = { tontine_id: this.currentTontine.tontine.tontine_id };
    this.tontine.getMemberStokvelContribution(param).subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        this.userContribution = reponse;
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getUserContributionData(event);
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Get the wallet data
  getWalletData(event?: any) {
    // this.loadingCaisse = true;
    const param = { tontine_id: this.currentTontine.tontine.tontine_id };
    this.walletTontine.getTontineWallet(param).subscribe((reponse: any) => {
      // this.loadingCaisse = false;
      if (reponse && reponse.message === 'success') {
        this.walletTontines = reponse.infos_wallet;
        this.detailCaisses = reponse.detail_caisse;

        this.detailCaisses = this.tontinesData.filterTontineBalance(this.detailCaisses, this.currentTontine.tontine);
        this.storage.set(`tontine-wallet${param.tontine_id}`, { solde: this.walletTontines, caisse: this.detailCaisses });
      }

      if (event) {
        event.target.complete();
      }

    }, error => {
      //  this.loadingCaisse = false;
      this.storage.get(`tontine-wallet${param.tontine_id}`).then(walletData => {
        this.walletTontines = walletData ? walletData.solde : null;
        this.detailCaisses = walletData ? walletData.caisse : null;
      });
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getWalletData(event);
            }
          });
        }
      }
    });
  }

  // Update the current user tontine
  updateCurrentUserTontine(event?: any) {
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData && tontineData.tontine) {
      this.setTontineData(tontineData);
      this.tontine.getTontineDetail(tontineData.tontine.tontine_id).subscribe((reponse: any) => {
        if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
          this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
          const tontineData = this.tontine.getCurrentTontineData();
          if (tontineData && tontineData.tontine) {
            this.initTontineData(tontineData);
          }
        }
        // get the tontine wallet
        this.getWalletData(event);
      }, error => {
        if (error && error.error && error.error.bad_token) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.updateCurrentUserTontine(event);
            }
          });
        } else {
          this.error.manageError(error);
        }
      });
    } else {
      if (event) {
        event.target.complete();
      }
    }
  }

  // set to local Stoirage
  setToStorage(data: any) {
    this.localStorage.setItem('app-tontines', JSON.stringify(data));
  }

  // Get the list user tontines
  getUserTontines() {
    this.tontine.getMyTontine().subscribe((reponse: any) => {
      if (reponse && reponse.message === 'success') {
        if (reponse && reponse.liste_tontine) {
          const allData = this.util.oderByTontineDate(reponse.liste_tontine);
          this.setToStorage(allData);
        }
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getUserTontines();
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    TontineDetailPage.canConnect = null;
    this.updateCurrentUserTontine(event);
    this.getContributions(null);
  }

  // Get the amount of contribution of the seance
  getAmountContributionSeance(memberList: any, shareAmount: any) {
    return this.tontinesData.getAmountContributionSeance(memberList, shareAmount, this.user.id);
  }

  // can contribute for seance
  canContributeSeance(memberList) {
    this.showContributionBtn = this.tontinesData.canShowContributionButton(memberList, this.user.id);
    return this.tontinesData.canContributeSeance(memberList, this.user.id);
  }



  // Open the modal current contribution
  openContributeCurrentSeance(param: any) {
    this.modatCtrl
      .create({
        component: ContributeComponent,
        componentProps: {
          tontineName: param.title,
          contribAmount: param.montant,
          data: param
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(() => {
          this.updateCurrentUserTontine(null);
          this.getContributions(null);
          this.getUserContributionData(null);

        });
      });
  }

  // Open the modal previous seance
  openContributePreviousSeance(param: any) {
    this.modatCtrl
      .create({
        component: ContributeSeanceComponent,
        componentProps: {
          tontineName: param.title,
          contribAmount: param.montant,
          data: param
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then((ans) => {
          this.updateCurrentUserTontine(null);
          this.getContributions(null);
          this.getUserContributionData(null);
        });
      });
  }

  // check bid socket
  checkBidStatus(seance: any, numlot: any) {
    const tontineData = this.tontine.getCurrentTontineData();
    this.contribution.getDataMembresAyantBouffe(tontineData.seance_courante.cycle_id, tontineData.tontine.tontine_id).then((reponse: any) => {

      const listPart = reponse.tontine && reponse.tontine.membres && reponse.tontine.membres.liste_membre ? reponse.tontine.membres.liste_membre : []
      const userId = this.user.id;
      const members = reponse.ans && reponse.ans.membres ? reponse.ans.membres : [];
      const numeroPart = this.tontinesData.getCurrentBidPart(listPart, userId, members);

      TontineDetailPage.canConnect = this.encheresService.connexion(seance.id);

      this.encheresService.memberConnection(userId, numeroPart, seance.id, numlot);
      let j = 1;
      while (j <= parseInt(numlot)) {
        this.encheresService.getWinnerCurrent(seance.id + '' + j).subscribe(data => {
          if (data !== null) {
            this.currentAmount.unshift({ somme: JSON.parse(data).somme, seanceID: JSON.parse(data).seance_id, userID: JSON.parse(data).user_id, numero_lot: JSON.parse(data).numero_lot });
            this.currentAmount = this.currentAmount.filter((elem, index, self) => self.findIndex(
              (t) => { return (t.seanceID === elem.seanceID && t.numero_lot === elem.numero_lot) }) === index);
          }
        });
        j++;
      }

    });
  }

  // set the tontine data
  setTontineData(data) {
    this.currentTontine = data;
    if (this.currentTontine) {
      this.myTontine = {
        name: this.currentTontine.tontine.name,
        description: this.currentTontine.tontine.description,
        type: this.currentTontine.tontine.drawingtype_id,
        type_tontine_key: this.currentTontine.tontine.type_tontine_key,
        country: this.currentTontine.tontine.country,
        country_key: this.currentTontine.tontine.country_key,
        currency: this.currentTontine.tontine.monnaie,
        contribution: this.currentTontine.tontine.coutshare,
        frequency: this.currentTontine.tontine.periodicite,
        frequency_key: this.currentTontine.tontine.periodicite_key,
        dateStart: this.currentSeance ? this.currentSeance.date_debut : this.currentTontine.tontine.date_debut,
        totalShare: this.currentTontine.tontine.nombre_part_max_tontine || '',
        maxShareMber: this.currentTontine.tontine.nombre_part_max_membre,
        nbrOfBaches: this.currentTontine.tontine.numberlot,
        penalityAbsence: this.currentTontine.tontine.penaliteabsencesurlacontributionayantbouffe,
        penalityAbsenceUnit: this.currentTontine.tontine.typepenaliteabsencesurlacontributionayantbouffe === 'pourcentage' ? '%'
          : this.currentTontine.tontine.typepenaliteabsencesurlacontributionayantbouffe,
        penalityContrib: this.currentTontine.tontine.penaliteabsencesurlacontributionayantbouffe,
        penalityContribUnit: this.currentTontine.tontine.typepenaliteretardsurlacontributionayantbouffe === 'pourcentage' ? '%'
          : this.currentTontine.tontine.typepenaliteretardsurlacontributionayantbouffe,
        penalityLoan: this.currentTontine.tontine.penalitesurleremboursement,
        penalityLoanUnit: this.currentTontine.tontine.typepenalitesurleremboursement === 'pourcentage' ? '%'
          : this.currentTontine.tontine.typepenalitesurleremboursement,
        timeDelay: this.currentTontine.tontine.dureesurleretard,
        timeDelayUnit: this.currentTontine.tontine.typedureesurleretard,
        balance: this.currentTontine.tontine.solde_en_caisse,
        contributionCashier: this.currentTontine.tontine.caisse_cotisation,
        penalitiesCashier: this.currentTontine.tontine.caisse_penalite
      };
      this.bid = this.currentTontine.tontine;
      this.seance = this.currentTontine.seance_courante;
      this.cycle = this.currentTontine.cycle_courant;
      this.members = this.currentTontine.membres;
      let i = 0;

      this.members.liste_membre.forEach(member => {
        if (i < 10 && this.tontinesData.memberNotInWithout(this.memberShows, member.id)) {
          this.memberShows.push(member);
          i++;
        }
      });

    }
  }

  // init the tontine data
  initTontineData(data: any) {
    this.setTontineData(data);
    // Get the current bid
    if (this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.drawingtype_id === 3) {
      if (this.seance && this.seance.id) {
        this.checkBidStatus(this.seance, this.myTontine.nbrOfBaches);
      }
    }
  }

  // Show the bid detail page
  showBidDetail(tontineId) {
    this.router.navigate(['/', 'dashboard', 'my-tontines', tontineId, 'bid']);
  }

  // Get the name of the creator
  getCreatorName(memberList: any, creatorId) {
    return this.tontinesData.getCreatorName(memberList, creatorId);
  }

  getTontineTypeName(typeKey: string) {
    this.translate.get(typeKey).subscribe(value => {
      this.tontineTypeName = value;
    });
    return this.tontineTypeName;
  }

  getCountryName(countryKey: string) {
    this.translate.get(countryKey).subscribe(value => {
      this.tontineCountryName = value;
    });
    return this.tontineCountryName;
  }

  getPeriodicityName(frequencyKey: string) {
    this.translate.get(frequencyKey).subscribe(value => {
      this.tontineFrequencyName = value;
    });
    return this.tontineFrequencyName;
  }

  // Get the type list
  getTontineTypes() {
    this.tontine.getTypeTontine().subscribe((reponse: any) => {
      if (reponse && reponse.type && reponse.type.length > 0) {
        this.typesTontines = reponse.type;
      }
    }, error => {
      this.error.manageError(error);
    });
  }

  openEditInfo() {
    this.modatCtrl
      .create({
        component: InfoEditComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(() => {
          this.updateCurrentUserTontine(null);
          setTimeout(() => {
            this.checkCaution();
          }, 5000);

        });
      });
  }

  async openContextMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: TontineDetailMenuComponent,
      event: ev
    });
    return await popover.present();
  }


  // show option to pay previous seance
  async canPayPreviousSeance(translations: string[], pin: any) {
    const alert = await this.alertController.create({
      header: `${translations[0]}`,
      message: `${translations[1]}`,
      buttons: [
        {
          text: `${translations[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.selectPaymentMode(pin, 'previous');
          }
        }, {
          text: `${translations[3]}`,
          handler: () => {

            this.selectPaymentMode(pin, 'current');
          }
        }
      ]
    });
    await alert.present();
  }

  // show the pin confirmation dilaog
  confirmPin() {
    const userPin = this.userService.getUserSecret();
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData) {
      if (tontineData.tontine.tontine_payment_type_id === 1 || tontineData.tontine.drawingtype_id === 6) {

        this.router.navigate(['/', 'dashboard', 'my-tontines', tontineData.tontine.tontine_id, 'debts']);
      } else {
        if (this.seancesList && this.seancesList.length > 0) {
          // show the dialog for the payment type
          const translationsData = [];
          this.translate.get(['PAY_PREVIOUS_SEANCE_TITLE', 'PAY_PREVIOUS_SEANCE_MSG', 'PREVIOUSE_TEXT', 'CURRENT_TEXT']
            , {
              previousSeance: this.tontinesData.getDate(this.seancesList[0], 'date_debut'),
              currentSeance: this.tontinesData.getDate(this.currentSeance, 'date_debut')
            }).subscribe(trans => {
              translationsData.push(trans.PAY_PREVIOUS_SEANCE_TITLE);
              translationsData.push(trans.PAY_PREVIOUS_SEANCE_MSG);
              translationsData.push(trans.PREVIOUSE_TEXT);
              translationsData.push(trans.CURRENT_TEXT);
              this.canPayPreviousSeance(translationsData, userPin.password);
            });

        } else {
          this.selectPaymentMode(userPin.password, 'current');
        }
      }
    }
  }

  // get number of contributions batches
  getContributions(event?: any) {
    this.nbContributions = [];
    const currentTontine = this.tontine.getCurrentTontineData();
    const currentCycle = currentTontine.cycle_courant;
    const currentSeance = currentTontine.seance_courante;
    const param = {
      tontine_id: currentTontine.tontine.tontine_id
    };
    this.hascheckPreviousSeance = false;
    this.contribution.getSeancesNotContribute(param).subscribe((reponse: any) => {
      if (reponse && reponse.liste_seances && reponse.liste_seances.length > 0) {

        // Get the seances of cycles
        const listSeances = reponse.liste_seances.filter(data => {
          return currentCycle && (data.cycle_id === currentCycle.id)
        });

        // Get the list of previous seances
        const seancesList = listSeances.filter(data => { return this.currentSeance && (parseInt(data.seance_id) !== parseInt(this.currentSeance.id)) });
        this.seancesList = this.tontinesData.getCurrentMemberPreviousSeanceData(seancesList, this.currentSeance);

        // Get the list of seances not contribute
        this.nbContributions = [];
        listSeances.forEach((value) => {
          if (!this.tontinesData.notIn(value, this.nbContributions) && currentSeance && (currentSeance.id !== value.seance_id)) {
            this.nbContributions.push(value);
          }
        });
      }
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 200);
      }
      this.hascheckPreviousSeance = true;

    }, error => {

      if (event) {
        event.target.complete();
      }
      if (error && error.error && error.error.user_not_found) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getContributions(event);
          } else {
            this.hascheckPreviousSeance = true;
          }
        });
      } else {
        this.hascheckPreviousSeance = true;
        this.error.manageError(error);
      }
    });
  }

  // open the tontine contribution modal
  selectPaymentMode(pin: any, type?: string) {
    const tontineData = this.tontine.getCurrentTontineData();
    const user = this.userService.getUserData();
    if (tontineData) {
      const paymentData = type === 'previous' ? this.formatPreviousSeanceData(pin, tontineData, user, this.seancesList) :
        this.formatCurrentSeanceData(pin, tontineData, user);

      this.contribution.sendContributionData(paymentData);
      type === 'previous' ? this.openContributePreviousSeance(paymentData) : this.openContributeCurrentSeance(paymentData);

    }
  }

  // format the current seance data
  formatCurrentSeanceData(pin: any, tontineData: any, user: any) {
    const paymentData = {
      title: tontineData.tontine.name,
      paymentMode: 'WALLET',
      contribution: this.getAmountContributionSeance(tontineData.membres.liste_membre, tontineData.tontine.coutshare),
      seance_id: tontineData.seance_courante.id,
      device_name: tontineData.tontine.monnaie,
      montant: tontineData.tontine.coutshare,
      typecontribution_id: 2,
      sens_contribution: 'sortant',
      liste_part: this.tontinesData.getListPart(tontineData.membres.liste_membre, user.id),
      pin: pin
    };
    return paymentData;
  }

  // format the previous seance data
  formatPreviousSeanceData(pin: any, tontineData: any, user: any, seances: any) {
    const paymentData = {
      title: tontineData.tontine.name,
      paymentMode: 'WALLET',
      contribution: this.tontinesData.getPreviousSeanceContribution(seances),
      seance_id: seances[0].seance_id,
      device_name: tontineData.tontine.monnaie,
      montant: tontineData.tontine.coutshare,
      typecontribution_id: 2,
      sens_contribution: 'sortant',
      liste_part: this.tontinesData.getListPart(tontineData.membres.liste_membre, user.id),
      pin: pin
    };
    return paymentData;
  }

  // check if i can contribute seance
  checkContributeCondition() {
    let ican = false;
    if (this.currentSeance
      && this.currentTontine
      && this.currentTontine.tontine
      && this.currentTontine.tontine.active === 1
      && this.checkPaidCaution
      && this.hasPaidCaution
      && this.hascheckPreviousSeance
    ) {
      ican = true;
    }
    return ican;
  }


  // can pay caution
  icanPayCaution(currentTontine: any) {
    let ican = false;
    if (!this.hasPaidCaution
      && this.checkPaidCaution
      && this.hascheckPreviousSeance
      && this.hasCycle(currentTontine)
      && this.cautionAmount > 0
      && (currentTontine.seance_courante && currentTontine.seance_courante.numero_seance < 2 || !currentTontine.seance_courante)
    ) {
      ican = true;
    }
    return ican;
  }

  // check if it is admin
  isAdmin() {
    return this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.administrator === 1;
  }

  isTraditionnal() {
    return this.currentTontine && this.currentTontine.tontine && this.currentTontine.tontine.tontine_payment_type_id === 1;
  }

  // check if it bid tontine
  isBid() {
    return this.myTontine && this.myTontine.type === 3;
  }

  // check if it loan tontine
  isLoan() {
    return this.myTontine && this.myTontine.type === 6;
  }

  // check if it loan tontine
  isClassement() {
    return this.myTontine && this.myTontine.type === 5;
  }

  // if the tontine has a caution
  checkCaution() {
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData && tontineData.tontine && tontineData.cycle_courant) {
      this.checkIfcautionPaid(tontineData.tontine, tontineData.cycle_courant.id, this.user.id);
    }
  }

  // check if a tontine has a caution
  checkTontineCaution(tontineData: any) {
    return this.tontinesData.hasTontineCaution(tontineData);
  }

  // check if a user has paid a caution
  checkIfcautionPaid(tontineData: any, cycleId: any, userId: any) {
    this.checkPaidCaution = false;
    if (this.checkTontineCaution(tontineData)) {
      this.getCautionData(cycleId, userId);
    } else {
      this.hasPaidCaution = true;
      this.checkPaidCaution = true;
    }
  }

  // Check if the cycle is define
  hasCycle(tontineData: any) {
    return this.tontinesData.hasTontineCycle(tontineData);
  }

  // get the caution data
  getCautionData(cycleId: any, userId: any) {
    this.checkPaidCaution = false;
    this.tontine.getMembersPaidPartialCautions(cycleId).subscribe(data => {
      if (data && data.message === 'success') {
        let members = data.liste_members;
        members = members.filter((member: any) => { return parseInt(member.infos_user.id, 10) === parseInt(userId, 10) });
        this.hasPaidCaution = members.length > 0 ? false : true;
        this.cautionAmount = members.length > 0 ? parseFloat(members[0].rest_amount_to_pay ? members[0].rest_amount_to_pay : 0) : 0;
        this.checkPaidCaution = true;
      }
    }, error => {
      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.error.renewSession().then((session: any) => {
            if (session && session.result === "OK") {
              this.getCautionData(cycleId, userId);
            } else {
              this.checkPaidCaution = true;
            }
          });
        } else {
          this.checkPaidCaution = true;
          this.tontineError.manageTontineError(error)
        }
      } else {
        this.checkPaidCaution = true;
        this.error.manageError(error);
      }
    });
  }

  // pay the cation
  payCaution(currentTontine: any, userId: number) {
    const param = {
      cycle_id: currentTontine.cycle_courant.id,
      amount: this.cautionAmount
    };

    this.loadingPay = true;
    this.translate.get('TOPUP_TEXT1').subscribe(trans => {
      this.ui.presentLoading(trans);
    });

    this.contribution.payMemberCaution(param).subscribe((reponse: any) => {

      if (reponse && reponse.message === 'success') {
        this.translate.get('PAY_CAUTION_RESULT_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.checkIfcautionPaid(this.currentTontine.tontine, this.currentTontine.cycle_courant.id, this.user.id);
      }
      this.loadingPay = false;
      this.ui.dismissLoading();
    }, error => {
      this.loadingPay = false;

      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.loadingPay = true;
          this.error.renewSession().then((session: any) => {
            this.ui.dismissLoading();
            if (session && session.result === "OK") {
              this.payCaution(currentTontine, userId);
            } else {
              this.loadingPay = false;
            }
          });
        } else {
          this.ui.dismissLoading();
          this.tontineError.manageTontineError(error)
        }
      } else {
        this.ui.dismissLoading();
        this.error.manageError(error);
      }
    });
  }

  // show option to pay previous seance
  async canPayCaution(translations: string[], currentTontine: any, userId: number) {
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
            this.payCaution(currentTontine, userId);
          }
        }
      ]
    });
    await alert.present();
  }

  // confim Payment
  confirmCautionPin(currentTontine: any, userId: number) {
    const translationsData = [];
    this.translate.get(['PAY_CAUTION_TEXT', 'PAY_CAUTION_OK_MSG', 'CANCEL_TEXT', 'YES_TEXT'],
      { amount: this.cautionAmount, currency: currentTontine.tontine.monnaie }).subscribe(trans => {
        translationsData.push(trans.PAY_CAUTION_TEXT);
        translationsData.push(trans.PAY_CAUTION_OK_MSG);
        translationsData.push(trans.CANCEL_TEXT);
        translationsData.push(trans.YES_TEXT);
        this.canPayCaution(translationsData, currentTontine, userId);
      });
  }

}
