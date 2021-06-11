import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TontineService } from '../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { ContributionService } from '../../services/contribution.service';
import { ContributeComponent } from '../contribute/contribute.component';
import { UpdateBatchesComponent } from './update-batches/update-batches.component';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { ContributeSeanceComponent } from '../contribute-seance/contribute-seance.component';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  tontineId: number;
  user: any;
  currentSeance: any;
  members: any;
  seance: any;
  bid: any;
  cycle: any;
  myTontine: any;
  showContributionBtn: boolean;
  hascheckPreviousSeance: boolean;
  seancesList: any;
  loadingPay: any;
  currentTontine: any;
  hasPaidCaution: boolean;
  checkPaidCaution: boolean;
  cautionAmount: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private tontinesData: TontineGlobalDataService,
    private ui: UiService,
    private tontineError: TontineErrorService,
    private tontine: TontineService,
    private events: EventService,
    private translate: TranslateService,
    private alertController: AlertController,
    private popop: PopoverController,
    private errorservice: ErrorService,
    private contribution: ContributionService,
    private modatCtrl: ModalController
  ) {
    this.tontineId = this.activeRoute.snapshot.params.tontineId;
    this.user = this.userService.getUserData();
    const tontineData = this.tontine.getCurrentTontineData();
    this.currentTontine = tontineData;
    this.myTontine = tontineData.tontine;
    this.currentSeance = tontineData.seance_courante;
    this.members = tontineData.membres;
    this.bid = tontineData.tontine;
    this.seance = tontineData.seance_courante;
    this.cycle = tontineData.cycle_courant;
    this.showContributionBtn = true;
    this.hascheckPreviousSeance = false;
    this.seancesList = [];
    this.hasPaidCaution = false;
    this.checkPaidCaution = false;
  }

  ngOnInit() {
    this.checkCaution();
    this.getContributions(null);
  }

  // Refresh the list
  refreSher(event) {
    this.getContributions(event);
    this.checkCaution();
  }

  // Get the amount of contribution of the seance
  getAmountContributionSeance(memberList: any, shareAmount: any) {
    return this.tontinesData.getAmountContributionSeance(memberList, shareAmount, this.user.id);
  }

  // check if the user can contribute
  canContributeSeance(memberList: any[]) {
    this.showContributionBtn = this.tontinesData.canShowContributionButton(memberList, this.user.id);
    return this.tontinesData.canContributeSeance(memberList, this.user.id);
  }

  // can update the number of batches
  canUpdateBatches() {
    let canUpdate = false;
    if (this.seance && this.seance.archived === 0 && this.myTontine.active === 1 && this.myTontine.administrator === 1) {
      canUpdate = true;
    }
    return canUpdate;
  }

  // Open the modal
  openContribute(param: any) {
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
      });
  }

  // Open the modal seance
  openContributeSeance(param: any) {
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
      });
  }

  // update the number of batches of a seance
  async updateBatches(ev, seance: any) {
    const popover = await this.popop.create({
      component: UpdateBatchesComponent,
      event: ev,
      cssClass: 'delete-popover',
      componentProps: {
        seanceId: seance.id,
        tontineId: seance.tontine_id
      }
    });

    popover.onDidDismiss().then(ans => {
      this.getDetailInfos();
    });

    return await popover.present();
  }

  // update the current data
  getDetailInfos() {
    this.tontine.getTontineDetail(this.myTontine.tontine_id).subscribe((reponse: any) => {
      if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
        this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
        const tontineData = this.tontine.getCurrentTontineData();
        this.myTontine = tontineData.tontine;
      }
    }, error => {
      if (error && error.error && error.error.user_not_found) {
        this.errorservice.renewSession().then((data: any) => {
          if (data && data.result === "OK") {
            this.getDetailInfos();
          }
        });
      } else {
        this.errorservice.manageError(error);
      }
    });
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
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData && tontineData.tontine.tontine_payment_type_id === 1 || tontineData.tontine.drawingtype_id === 6) {
      this.router.navigate(['/', 'dashboard', 'my-tontines', tontineData.tontine.tontine_id, 'debts']);
    } else {
      const userPin = this.userService.getUserSecret();
      if (this.seancesList && this.seancesList.length > 0) {
        // show the dialog for the payment type
        const translations = [];
        this.translate.get(['PAY_PREVIOUS_SEANCE_TITLE', 'PAY_PREVIOUS_SEANCE_MSG', 'PREVIOUSE_TEXT', 'CURRENT_TEXT'],
          { previousSeance: this.tontinesData.getDate(this.seancesList[0], 'date_debut'), currentSeance: this.tontinesData.getDate(this.currentSeance, 'date_debut') }).subscribe(trans => {
            translations.push(trans.PAY_PREVIOUS_SEANCE_TITLE);
            translations.push(trans.PAY_PREVIOUS_SEANCE_MSG);
            translations.push(trans.PREVIOUSE_TEXT);
            translations.push(trans.CURRENT_TEXT);
            this.canPayPreviousSeance(translations, userPin.password);
          });

      } else {
        this.selectPaymentMode(userPin.password, 'current');
      }
    }
  }

  getContributions(event?: any) {
    const currentTontine = this.tontine.getCurrentTontineData();
    const currentCycle = currentTontine.cycle_courant;
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
        this.errorservice.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getContributions(event);
          } else {
            this.hascheckPreviousSeance = true;
          }
        });
      } else {
        this.hascheckPreviousSeance = true;
        this.errorservice.manageError(error);
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
      type === 'previous' ? this.openContributeSeance(paymentData) : this.openContribute(paymentData);
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
          this.errorservice.renewSession().then((session: any) => {
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
        this.errorservice.manageError(error);
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
        this.events.publish('cautionPaid');
        this.checkIfcautionPaid(this.currentTontine.tontine, this.currentTontine.cycle_courant.id, this.user.id);
      }
      this.loadingPay = false;
      this.ui.dismissLoading();
    }, error => {
      this.loadingPay = false;

      if (error && error.error && error.error.message === 'error') {
        if (error.error.user_not_found) {
          this.loadingPay = true;
          this.errorservice.renewSession().then((session: any) => {
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
        this.errorservice.manageError(error);
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
