import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { Subject, Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/service/error.service';
import { UserService } from '../../user/service/user.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { EventService } from 'src/app/shared/service/events.service';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  private subject = new Subject<any>();
  token: string;

  constructor(
    private api: ApiService,
    private userService: UserService,
    private error: ErrorService,
    private event: EventService,
    private localStorage: LocalStorageService
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  sendMessageContribute(message: any) {
    this.subject.next({ contribute: message });
  }

  getMessageContribute(): Observable<any> {
    return this.subject.asObservable();
  }

  // send the contribution Data
  sendContributionData(data) {
    this.localStorage.setItem('contrib-data', data);
  }

  // Get the contribution Data
  getContributionData() {
    return this.localStorage.getItem('contrib-data');
  }

  // Get all the currenies
  getCurrencies() {
    return this.api.get('contribution/v1/getAll/device');
  }

  // Show the user wallet
  getUserWallet() {
    this.token = this.userService.getUserToken();
    return this.api.get(`contribution/v1/affiche/portemonnaie/${this.token}`);
  }


  // save the conversion of a currency
  saveCurrencyConversion() {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/convert/device/' + this.token);
  }

  // Get all contributions of tontines
  getTypeContributionTontine(refresh) {
    return new Promise((resolve) => {
      let typeContributions = this.localStorage.getItem('type-contribution');
      typeContributions = typeContributions ? typeContributions: [];
      if (refresh || typeContributions.length === 0) {
        this.api.get('contribution/v1/getAll/typecontribution').subscribe((reponse: any) => {
          this.localStorage.setItem('type-contribution', reponse.typecontribution);
          resolve(reponse.typecontribution);
        }, error => {
          resolve(typeContributions);
        });
      } else {
        resolve(typeContributions);
      }
    });
  }

  // Get the seances that a member does not contribute
  getSeancesNotContribute(data: any) {
    this.token = this.userService.getUserToken();
    if (this.token) {
      return this.api.post('contribution/v1/get/seances/to/contribute/' + this.token, data);
    }
  }

  // Get the seances that has not contribute or that have penalties
  getSeancesContributeOrPenalties(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/get/seances/to/contribute/and/penalties/ofAMember/' + this.token, data);
  }

  // get Seances where has unpaid penalties
  getSeanceUnpaidPenality(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/get/seances/with/penalties/ofAMember/' + this.token, data);
  }

  // Permit to the user to contribute with wallet add pin
  contributeWithWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/avec/portemonnaie/' + this.token, data);
  }

  // Contribute without make a conversion and without wallet
  contributeWithoutWalletAndConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/sans/portemonnaie/NotConvertDevice/'
      + this.token, data);
  }

  // Contribute and convert without wallet
  contributeAndconvertWithoutWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/sans/portemonnaie/WithConvertDevice/'
      + this.token, data);
  }


  // Contribute without make a conversion and without wallet
  contributeWithoutWalletAndConversionAllshare(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/toutes/ses/parts/sans/portemonnaie/NotConvertDevice/'
      + this.token, data);
  }

  // Contribute and convert without wallet
  contributeAndconvertWithoutWalletAllshare(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/toutes/ses/parts/sans/portemonnaie/WithConvertDevice/'
      + this.token, data);
  }

  // Contribute  with wallet after conversion
  contributeAndconvertWithWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/charger/portemonnaie/afterConvertDevice/'
      + this.token, data);
  }

  // Convert a member wallet to another currency
  convertMemberWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/convertDevice/Portemonnaie/'
      + this.token, data);
  }

  // Convert the currency automaticcaly before paid with the member wallet
  convertMemberWalletAutomatically(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/convertDevice/ToContribueWithPortemonnaie/'
      + this.token, data);
  }


  // Get the list of tontines  seances
  getSeanceTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/getAll/seance/' + tontineId + '/' + this.token);
  }

  // Get the current seance of a tontine
  getSeanceCurrentTontine(tontineId: number) {
    return this.api.get('contribution/v1/seance/courante/' + tontineId);
  }


  // Get level of member's contributions for a tontine seance
  getNiveauContributionMembreTontineForAseance(tontineId: number, seanceId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/getAllMember/withContribution/' + tontineId + '/' + seanceId +
      '/' + this.token);
  }

  // Get level of member's contributions for all tontine seances
  getNiveauContributionMembreTontineForAllseance(tontineId: number, seanceId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/getAllMemberTontine/withContribution/' + tontineId + '/' + seanceId +
      '/' + this.token);
  }

  // Save the seance of a tontine
  saveTontineSeance(seance: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/save/seance/tontine/' +
      '/' + this.token, seance);
  }

  // Get users tontines with members contribution by seance
  getMyTontineWithMembersContributionBySeance() {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/getAllTontineUser/WithContributionMember' + this.token);
  }


  // Get the percentage of contributions for tontine seance
  getPercentageContributionTontineSeance(tontineId, seanceId) {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/getPourcentageContributionTontine/' + tontineId + '/' + seanceId + '/' +
      this.token);
  }

  // Get the remaind amount contributions of member for a seance with token
  getRemaindContributionMemberForSeance(seanceId) {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/getMontantRestantAContribuer/' + seanceId + '/' + this.token);
  }

  // Get the remaind amount contributions of member for a seance with user_id
  getEtatContributionUserTontine(seanceId, userId) {
    return this.api.get('contribution/v1/getMontantRestantAContribuerAvecUserId/' + seanceId + '/' + userId);
  }

  // Get the state of contribution of a user part
  getEtatContributionPartUserTontine(seanceId, userId, numeroPart) {
    return this.api.get('contribution/v1/getMontantRestantAContribuerPourUnePartAvecUserId/' + seanceId + '/' +
      numeroPart + '/' + userId);
  }

  // Get the amount that remaind for a contribution of a part WITH TOKEN
  remaindAmountForPartForAseance(seanceId, numeroPart, userId) {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v1/getMontantRestantAContribuerPourUnePart/' + seanceId + '/' +
      numeroPart + '/' + this.token);
  }

  // confirm the contribution with wallet with negative balance
  confirmContributionWithWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/confirm/contribue/avec/portemonnaie/' + this.token, data);
  }

  // confirm the contribution with wallet with without conversion
  confirmContributionWithWalletWithoutConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/confirm/contribue/sans/portemonnaie/NotConvertDevice/'
      + this.token, data);
  }

  // confirm the contribution with wallet with  conversion
  confirmContributionWithWalletWithConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/confirm/contribue/sans/portemonnaie/WithConvertDevice/'
      + this.token, data);
  }

  // confirm the contribution with wallet with after conversion
  confirmContributionWithWalletAfterConversion(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/confirm/convertDevice/ToContribueWithPortemonnaie/'
      + this.token, data);
  }

  // Get all level of  contribution of tontine  not ended
  getNiveauContributionNotEndMembreTontineSeances(tontineId): Observable<any> {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v2/getAllMemberTontine/withContribution/' +
      tontineId + '/' + this.token);
  }

  // Get all level of  contribution of tontine seance not ended
  getNiveauContributionNotEndForAMembreTontineSeances(tontineId, seanceId): Observable<any> {
    this.token = this.userService.getUserToken();
    return this.api.get('contribution/v2/getAllMember/withContribution/' +
      tontineId + seanceId + '/' + this.token);
  }

  // contribute with wallet all part
  contributionAllShareWithWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/toutes/parts/avec/portemonnaie/'
      + this.token, data);
  }

  // Get the list of members invite in a tontine
  getInvitationMembre() {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine/invitation/v1/getAllTontineUserInvited/' + this.token);
  }

  // Get the list of member that has take seance
  getmembreJackpotSeance(seanceId) {
    this.token = this.userService.getUserToken();
    return this.api.get('bouffe/v1/getMemberAyantBouffe/' + seanceId + '/' + this.token);
  }


  // Get the cycle of current tontine
  getCycleCurrentTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('bouffe/v1/getCycleCourantTontine/' + tontineId + '/' + this.token);
  }


  // Get the  cycle of the tontine
  getSeancesCycleTontine(cycleId) {
    this.token = this.userService.getUserToken();
    return this.api.get('bouffe/v1/getAllSeanceCycle/' + cycleId + '/' + this.token);
  }

  // Get the members that doesn't take the tontine
  getMembresPasBouffe(cycleId, tontineId) {
    this.token = this.userService.getUserToken();
    return this.api.get('bouffe/v1/getAllMemberNayantPasBouffePourUnCycle/' + tontineId + '/' + cycleId +
      '/' + this.token);
  }

  // Get the members that take the tontine
  getMembresAyantBouffe(cycleId: any, tontineId: number) {
    this.token = this.userService.getUserToken();
    if (this.token) {
      return this.api.get('bouffe/v1/getAllMemberAyantBouffePourUnCycle/' + tontineId + '/' + cycleId + '/' + this.token);
    }

  }

  // Get member who are already beneficiate
  getDataMembresAyantBouffe(cycleId, tontineId: number, tontineData?: any, index?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getMembresAyantBouffe(cycleId, tontineId).subscribe(data => {
        resolve({ ans: data, tontine: tontineData, index: index });
      }, error => {

        if (error && error.error && error.error.user_not_found) {
          this.error.renewSession().then((data: any) => {
            if (data && data.result === 'OK') {
              this.getDataMembresAyantBouffe(cycleId, tontineId, tontineData, index);
            } else {
              resolve([]);
            }
          });
        } else {
          resolve([]);
          this.error.manageError(error);
        }

      });
    });
  }

  // Get the penalities of the seance
  getPenaliteSeance(seanceId, tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('penalite/v1/getPenaliteSeanceTontine/' + tontineId + '/' + seanceId + '/' +
      this.token);
  }

  // Get the list of penality not paid
  getPenalitesImpayeMembre(tontineId) {
    this.token = this.userService.getUserToken();
    return this.api.get('penalite/v1/getPenaliteMember/' + tontineId + '/' + this.token);
  }

  // Get the list of penality  paid
  getPenalitesPayeMembre(tontineId) {
    this.token = this.userService.getUserToken();
    return this.api.get('penalite/v1/getPenalitePayeByMember/' + tontineId + '/' + this.token);
  }


  // Get the seance penality of cycle
  getSeanceById(seanceId) {
    this.token = this.userService.getUserToken();
    return this.api.get('penalite/v1/getSeanceWithCycle/' + seanceId + '/' + this.token);
  }


  // Get all past seance contribution of a user
  getContributionSeancesPasseesPourAjoutPart(userId, numeroPart) {
    this.token = this.userService.getUserToken();
    return this.api.get('part/v1/seancePasseeTocContribueWithUserId/' + this.token + '/' +
      numeroPart + '/' + userId);
  }

  // Get all past seance contribution of a user
  getContributionSeancesPasseesPourAjoutPartUserCurrent(numeroPart, tontineId) {
    this.token = this.userService.getUserToken();
    return this.api.get('part/v1/seancePasseeTocContribue/' + tontineId + '/' + numeroPart + '/' +
      this.token);
  }


  // History of user transaction
  historiqueTransactionUtilsateurFromToken() {
    this.token = this.userService.getUserToken();
    return this.api.get('trace/v1/getAllTransactionPorteMonnaieUserWithToken/' + this.token);
  }

  // Get the amount of cotisation of a user
  getMontantCotisationSeance(seanceId) {
    return this.api.get('bouffe/v1/montant_total/byseance/' + seanceId);
  }

  // History of tontine transaction
  historiqueTransactionTontine(tontineId: number) {
    return this.api.get('trace/v1/getAllTransactionPorteMonnaieTontine/' + tontineId);
  }


  // Contribute without make a conversion and without wallet for event
  contributeWithoutWalletAndConversionForEvent(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/contribue/pour/un/event/sans/portemonnaie/NotConvertDevice/'
      + this.token, data);
  }

  // Contribute and convert without wallet for event
  contributeAndConvertWithoutWalletForEvent(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/contribue/pour/un/event/sans/portemonnaie/WithConvertDevice/'
      + this.token, data);
  }

  // contribute with wallet for event
  contributeEventWithWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v1/contribue/pour/un/event/avec/portemonnaie/'
      + this.token, data);
  }

  /* Contribute for past seance  */

  // contribute with wallet 
  contributeWithWalletPastSeance(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/toutes/parts/avec/portemonnaie/old/seance/'
      + this.token, data);
  }

  // contribute with OPERATOR (Orange/ MTN / PAYPAL / OZOW) without conversion
  contributeWithOperatorWithoutConversionPastSeance(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/toutes/ses/parts/sans/portemonnaie/NotConvertDevice/old/seance/'
      + this.token, data);
  }

  // contribute with OPERATOR (Orange/ MTN / PAYPAL / OZOW) with conversion
  contributeWithOperatorWithConversionPastSeance(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('contribution/v2/contribue/toutes/ses/parts/sans/portemonnaie/WithConvertDevice/old/seance/'
      + this.token, data);
  }


  /* Caution management */

  // Add caution member
  payMemberCaution(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('caution/member/pay/' + this.token, data);
  }

  // get members who have paid partial cautions
  paidOldSessionTontineCautionWithWallet(data: any) {
    this.token = this.userService.getUserToken();
    return this.api.post(`caution/contribute/all/share/withWallet/oldSeance/` + this.token, data);
  }

}
