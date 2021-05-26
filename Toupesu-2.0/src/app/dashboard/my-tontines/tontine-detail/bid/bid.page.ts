import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BidTimeEditComponent } from './bid-time-edit/bid-time-edit.component';
import { BidConfirmationComponent } from './bid-confirmation/bid-confirmation.component';
import { BidEditComponent } from './bid-edit/bid-edit.component';
import { TontineService } from '../../services/tontine.service';
import { EncheresService } from 'src/app/shared/service/encheres.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { ContributionService } from '../../services/contribution.service';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.page.html',
  styleUrls: ['./bid.page.scss'],
})
export class BidPage implements OnInit {
  currentTontine: any;
  bid: any;
  seance: any;
  cycle: any;
  members: any;
  currentAmount: any;
  user: any;
  myTontine: any;
  currentSeance: any;
  typesTontines: any;
  tontineId: any;
  canContribute: boolean;
  tontineCountryName: string;
  tontineFrequencyName: string;
  tontineTypeName: string;
  NberLotTab: any;
  currentAmountBidder: any;
  currentAmountBidderSearch: any;
  compteur: any = '';
  sessionInfo: any = '';
  userName: any = '';
  intervalId: any;
  bidNumeroLot: any = [];
  MembresBouffeList: any[] = [];
  MembresPasBouffeList: any[] = [];
  canBid: boolean;
  currentBidPart: number;
  static canConnect: any;
  loading: boolean;

  constructor(
    private modatCtrl: ModalController,
    private tontine: TontineService,
    private tontinesData: TontineGlobalDataService,
    private contribution: ContributionService,
    private encheresService: EncheresService,
    private userService: UserService,
    private error: ErrorService
  ) {
    this.currentAmount = [];
    this.user = this.userService.getUserData();
    this.typesTontines = [];
    this.members = [];
    this.NberLotTab = [];
    this.currentAmountBidder = [];
    this.currentAmountBidderSearch = [];
    this.seance = null;
    this.bid = null;
    this.canContribute = true;
    this.tontineCountryName = '';
    this.tontineFrequencyName = '';
    this.tontineTypeName = '';
    const tontineData = this.tontine.getCurrentTontineData();
    this.tontineId = tontineData.tontine.tontine_id;
    this.currentSeance = tontineData.seance_courante;
    this.canBid = true;
    BidPage.canConnect = null;
    this.currentBidPart = 1;
    this.loading = false;
  }

  ngOnInit() {
    // mettre a false pour le mobile 
    this.loading = true;
    this.getListOfMembresBouffeOuPasForACycle(null);
  }

  ionViewWillEnter() {
    this.loading = true;
    this.getListOfMembresBouffeOuPasForACycle(null);
  }

  openShareEdit(tontineData: any) {
    this.tontine.setCurrentTontineData(tontineData);
    this.modatCtrl
      .create({
        component: BidEditComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(() => {
          this.updateCurrentUserTontine(null);
        });
      }
      );
  }

  openbidtimeEdit(tontineData: any) {
    this.tontine.setCurrentTontineData(tontineData);
    this.modatCtrl
      .create({
        component: BidTimeEditComponent
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(() => {
          this.updateCurrentUserTontine(null);
        });
      });
  }

  openbidConfirm(tontine: any, userId: number, numPart: number, seanceId: any, numeroLot: any, current_amount: any, increment: any) {

    this.modatCtrl
      .create({
        component: BidConfirmationComponent,
        componentProps: {
          userId: userId,
          TontineName: tontine.name,
          batcheNum: numeroLot,
          amount: this.tontinesData.SumFloat(current_amount, increment),
          Current_Bid: parseFloat(current_amount),
          Increment_Bid: parseFloat(increment),
          Seance_Id_Bid: seanceId,
          currency: tontine.currency,
          numeroPart: numPart
        }
      })
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(() => {
          BidPage.canConnect = null;
          this.loading = true;
          this.getListOfMembresBouffeOuPasForACycle(null);
        });
      });
  }


  // Get the list of members n ayant pas bouffe et ayant bouffe pour un cycle_id
  getListOfMembresBouffeOuPasForACycle(event?: any) {
    const current = this.tontine.getCurrentTontineData();
    const nbPart = this.tontinesData.getNumberPart(current.membres.liste_membre, this.user.id);
    /*   console.log('nb parts');
      console.log(nbPart); */
    this.MembresBouffeList = [];
    this.MembresPasBouffeList = [];
    this.canBid = true;
    this.currentBidPart = 1;

    if (current.seance_courante) {
      this.contribution.getDataMembresAyantBouffe(current.seance_courante.cycle_id, current.tontine.tontine_id).then((reponse: any) => {
        /*   console.log(' cycle beneficiaries');
          console.log(reponse); */
        if (reponse && reponse.ans && reponse.ans.membres && reponse.ans.membres.length > 0) {

          this.MembresBouffeList = reponse.ans.membres;
          let currentPartBenef = 0;
          for (let i = 0; i < this.MembresBouffeList.length; i++) {
            if (this.MembresBouffeList[i].id === this.user.id) {
              currentPartBenef++;
              this.currentBidPart++;
              if (currentPartBenef === nbPart) {
                this.canBid = false;
                break;
              }
            }
          }
        }

        // set default configuration
        const tontineData = this.tontine.getCurrentTontineData();
        this.initTontineData(tontineData, event);
      });
    } else {
      this.canBid = false;
      this.initTontineData(current, event);
    }
  }

  // init the tontine data
  initTontineDataOnly(data) {
    this.currentTontine = data;
    this.getTontineDataFunc(this.currentTontine);
  }

  // init the tontine data
  initTontineData(data: any, event?: any) {

    this.initTontineDataOnly(data);
    if (this.seance) {
      this.bidStatusFunc(event);
    } else {
      this.loading = false;
      if (event) {
        event.target.complete();
      }
    }

    this.currentTontine.tontine.type_time_debut_bid = this.tontinesData.getFormatTimeBid(this.currentTontine.tontine.type_time_debut_bid);
    this.currentTontine.tontine.type_time_fin_bid = this.tontinesData.getFormatTimeBid(this.currentTontine.tontine.type_time_fin_bid);
  }

  getTontineDataFunc(data: any) {
    this.currentTontine = data;
    this.myTontine = {
      name: data.tontine.name,
      description: data.tontine.description,
      type: data.tontine.drawingtype_id,
      type_tontine_key: data.tontine.type_tontine_key,
      country: data.tontine.country,
      country_key: data.tontine.country_key,
      currency: data.tontine.monnaie,
      contribution: data.tontine.coutshare,
      frequency: data.tontine.periodicite,
      frequency_key: data.tontine.periodicite_key,
      dateStart: data.tontine.date_debut,
      totalShare: data.tontine.nombre_part_max_tontine || '',
      maxShareMber: data.tontine.nombre_part_max_membre,
      nbrOfBaches: data.tontine.numberlot,
      penalityAbsence: data.tontine.penaliteabsencesurlacontributionayantbouffe,
      penalityAbsenceUnit: data.tontine.typepenaliteabsencesurlacontributionayantbouffe === 'pourcentage' ? '%'
        : data.tontine.typepenaliteabsencesurlacontributionayantbouffe,
      penalityContrib: data.tontine.penaliteabsencesurlacontributionayantbouffe,
      penalityContribUnit: data.tontine.typepenaliteretardsurlacontributionayantbouffe === 'pourcentage' ? '%'
        : data.tontine.typepenaliteretardsurlacontributionayantbouffe,
      penalityLoan: data.tontine.penalitesurleremboursement,
      penalityLoanUnit: data.tontine.typepenalitesurleremboursement === 'pourcentage' ? '%'
        : data.tontine.typepenalitesurleremboursement,
      timeDelay: data.tontine.dureesurleretard,
      timeDelayUnit: data.tontine.typedureesurleretard,
      balance: data.tontine.solde_en_caisse,
      contributionCashier: data.tontine.caisse_cotisation,
      penalitiesCashier: data.tontine.caisse_penalite
    };
    this.bid = data.tontine;
    this.seance = data.seance_courante;
    this.cycle = data.cycle_courant;
    this.members = data.membres;
  }

  // bid service 
  bidStatusFunc(event?: any) {
    // BidPage.canConnect = this.encheresService.connexion(this.currentTontine.seance_courante.id);
    this.bidService(event);
  }


  bidService(event?: any) {

    if (this.currentTontine.tontine.numberlot !== null) {
      let j = 1;
      let bid_starter = 0;
      let cagnote = 0;

      cagnote = parseFloat(((parseFloat(this.currentTontine.tontine.coutshare) * parseFloat(this.currentTontine.membres.nombre_membre)) /
        (parseFloat(this.currentTontine.tontine.numberlot))).toFixed(2));

      if (this.currentTontine.tontine.type_starter_bid_increment === "pourcentage") {
        bid_starter = parseFloat(this.currentTontine.tontine.coutshare) *
          (parseFloat(this.currentTontine.tontine.starter_bid_increment ? this.currentTontine.tontine.starter_bid_increment : 0) / 100);
      } else {
        bid_starter = parseFloat(this.currentTontine.tontine.starter_bid_increment);
      }

      this.currentAmount = [];
      this.currentAmountBidder = [];
      this.currentAmountBidderSearch = [];

      // if (!BidPage.canConnect) {
      BidPage.canConnect = this.encheresService.connexion(this.currentTontine.seance_courante.id);
      //  }

      this.encheresService.memberConnection(this.user.id, this.currentBidPart, this.currentTontine.seance_courante.id, this.currentTontine.tontine.numberlot);

      while (j <= parseFloat(this.currentTontine.tontine.numberlot)) {

        this.currentAmount.push({
          MiseAPrix: cagnote,
          tontine_id: this.currentTontine.seance_courante.tontine_id,
          monnaie: this.currentTontine.tontine.monnaie,
          somme: 0,
          seanceID: this.currentTontine.seance_courante.id,
          StarterAmount: bid_starter,
          userID: 0,
          numero_lot: j
        });

        this.encheresService.getWinnerCurrent(this.currentTontine.seance_courante.id + '' + j).subscribe(data => {
          //  console.log('Last Biddeur socket');
          // console.log(JSON.stringify(data));
          if (data !== null) {
            // add on head of array
            this.currentAmount.unshift({
              MiseAPrix: cagnote,
              tontine_id: this.currentTontine.seance_courante.tontine_id,
              monnaie: this.currentTontine.tontine.monnaie,
              somme: JSON.parse(data).somme,
              seanceID: JSON.parse(data).seance_id,
              StarterAmount: bid_starter,
              userID: JSON.parse(data).user_id,
              numero_lot: JSON.parse(data).numero_lot
            });
            // remove same element occurrence
            this.currentAmount = this.currentAmount.filter((elem, index, self) => self.findIndex(
              (t) => { return (t.numero_lot === elem.numero_lot && t.seanceID === elem.seanceID) }) === index);

            // order by numpart   
            this.currentAmount = this.currentAmount.sort((a, b) => { return parseFloat(a.numero_lot) - parseFloat(b.numero_lot); });
          }

        });

        this.encheresService.getBidderHistory(this.currentTontine.seance_courante.id, j).subscribe((data: any) => {

          // console.log('Biddeur history socket');
          //  console.log(JSON.stringify(data));

          if (data && data.bider.length > 0) {
            data.bider.forEach(item => {
              // console bidder history
              this.currentAmountBidder.push({ somme: item.somme, seanceID: item.seance_id, userID: item.user_id, numero_lot: item.numero_lot });

              // set the bider of seance batches
              this.currentAmountBidderSearch.push({ searchIndex: item.seance_id + '' + item.user_id, numero_lot: item.numero_lot });

              // remove same occurrence
              this.currentAmountBidderSearch = this.currentAmountBidderSearch.filter((elem, index, self) => self.findIndex(
                (t) => { return (t.numero_lot === elem.numero_lot && t.searchIndex === elem.searchIndex) }) === index);
            });
          }
        }, error => {
          this.error.manageError(error);
        });

        j = j + 1;

      }

      // console.log('Biddeur history');
      //  console.log(JSON.stringify(this.currentAmountBidder));

      //  console.log('Biddeur filter');
      //  console.log(JSON.stringify(this.currentAmountBidderSearch));

      //  console.log('last bid');
      //  console.log(JSON.stringify(this.currentAmount));

      this.encheresService.getCounter().subscribe(data => {
        // console.log('compteur');
        // console.log(data);
        if (data <= 0) {
          this.compteur = 0;
        } else {
          this.compteur = data;
        }
      });

      this.encheresService.getSessionInfo().subscribe(data => {
        // console.log('session');
        // console.log(data);
        this.sessionInfo = data;
      });

      this.loading = false;
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }

    } else {
      this.loading = false;
      event.target.complete();
    }
  }

  // Refresh the list
  refreSher(event) {
    BidPage.canConnect = null;
    this.getListOfMembresBouffeOuPasForACycle(event);
  }
  checkMemberContributionSeance(membersList: any[]) {
    return this.tontinesData.checkMemberContributionSeance(membersList);
  }

  ConvertToFloat(miseAprix) {
    return  this.tontinesData.ConvertToFloat(miseAprix);
  }

  getPourcentageCurrentBid(miseAprix: any, somme: any) {
    return  this.tontinesData.getPourcentageCurrentBid(miseAprix, somme);
  }

  getCreatorName(liste_membre: any, userId: any) {
    return  this.tontinesData.getPourcentageCurrentBid(liste_membre, userId);
  }

  SumFloat(somme: any, increment: any) {
    return this.tontinesData.SumFloat(somme,increment);
  }

  // check if a user can bid 
  // pb here can be the condition on somme value
  canBidLot(data: any) {
    /*  console.log(data);
     console.log(this.checkMemberContributionSeance(this.members.liste_membre) );
     console.log(this.compteur);
     console.log(this.canBid);
     console.log(this.getCreatorName(this.members.liste_membre, data.userID));
     console.log(data.somme);
     console.log(this.lookup(data.seanceID+''+this.user.id,data.numero_lot,this.currentAmountBidderSearch));
     console.log(this.getPourcentageCurrentBid(data.MiseAPrix, data.somme !== 0 ? data.somme : 1)); */

    let icanBid = false;
    // this condition (data.somme !== '0') is for bid with negative increment 
    const membersList = this.members && this.members.liste_membre && this.members.liste_membre.length > 0 ? this.members.liste_membre : [];
    if (this.tontinesData.checkMemberContributionSeance(membersList) &&
      (this.compteur && this.compteur > 0) && this.canBid &&
      ((this.tontinesData.getCreatorName(membersList, data.userID) === '' || (this.tontinesData.getCreatorName(membersList, data.userID) !== this.tontinesData.getCreatorName(membersList, this.user.id))) && (data.somme !== '0')) &&
      this.tontinesData.hasBidForBatecheSession(data.seanceID + '' + this.user.id, data.numero_lot, this.currentAmountBidderSearch) &&
      this.tontinesData.getPourcentageCurrentBid(data.MiseAPrix, data.somme !== 0 ? data.somme : 1) < 90) {
      icanBid = true;
    }
    //  console.log(icanBid);
    return icanBid;
  }

  // Update the current user tontine
  updateCurrentUserTontine(event?: any) {
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData && tontineData.tontine) {
      this.tontine.getTontineDetail(tontineData.tontine.tontine_id).subscribe((reponse: any) => {
        if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
          this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
          const tontineData = this.tontine.getCurrentTontineData();
          if (tontineData && tontineData.tontine) {
            this.initTontineDataOnly(tontineData);
          }
        }
        this.loading = false;
        if (event) {
          event.target.complete();
        }
      }, error => {
        this.loading = false;
        if (event) {
          event.target.complete();
        }
        if (error && error.error && error.error.bad_token) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.updateCurrentUserTontine(event);
            } else {
              this.loading = false;
            }
          });
        } else {
          this.error.manageError(error);
        }
      });
    } else {
      this.loading = false;
      if (event) {
        event.target.complete();
      }
    }
  }

}
