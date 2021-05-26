import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineService } from '../../services/tontine.service';
import { ContributionService } from '../../services/contribution.service';
import { ContributeSeanceComponent } from '../contribute-seance/contribute-seance.component';
import { TontineGlobalDataService } from '../../services/tontine-global-data.service';
import { ContributeSeanceCautionComponent } from '../contribute-seance-caution/contribute-seance-caution.component';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-contribution-not-paid',
  templateUrl: './contribution-not-paid.page.html',
  styleUrls: ['./contribution-not-paid.page.scss'],
})
export class ContributionNotPaidPage implements OnInit {

  listData: any;
  loading: boolean;
  tontineData: any;
  allData: any;
  nbItems: number;
  currentCycle: any;
  currentSeance: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modatCtrl: ModalController,
    private contribution: ContributionService,
    private tontinesData: TontineGlobalDataService,
    private tontine: TontineService,
    private userService: UserService,
    private error: ErrorService,
    private util: UtilService
  ) {
    this.listData = [];
    this.tontineData = this.tontine.getCurrentTontineData();
    this.currentCycle = this.tontineData.cycle_courant;
    this.currentSeance = this.tontineData.seance_courante;
    this.allData = [];
    this.nbItems = 10;
  }

  ngOnInit() {
    this.loading = true;
    this.getContributions(null);
  }

  // check if a tontine has a caution 
  checkTontineCaution(tontineData: any) {
    return this.tontinesData.hasTontineCaution(tontineData);
  }


  // Get the list user contributionns not paid
  getContributions(event) {
    const currentTontine = this.tontine.getCurrentTontineData();
    const param = {
      tontine_id: currentTontine.tontine.tontine_id
    };
    this.contribution.getSeancesNotContribute(param).subscribe((reponse: any) => {

      this.loading = false;
      if (reponse && reponse.liste_seances && reponse.liste_seances.length > 0) {
        let allData = [];
        allData = this.util.orderByKeyUp(reponse.liste_seances, 'updated_at');
        allData = allData.filter(data => {
          return this.currentCycle && (data.cycle_id === this.currentCycle.id) && this.currentSeance && (this.currentSeance.id !== data.seance_id)
        });
        this.allData = [];
        // group by session and part
        allData.forEach(seance => {
          if (!this.tontinesData.notIn(seance, this.allData)) {
            const seanceData = seance;
            seanceData.share = 1;
            seanceData.liste_part = [{ numero_part: seance.numero_part }];
            seanceData.contribution = seance.montant;
            this.allData.push(seanceData);
          } else {
            this.allData.forEach((data, index, array) => {
              if (data.numero_seance === seance.numero_seance && data.numero_cycle === seance.numero_cycle) {
                this.allData[index].contribution += seance.montant;
                this.allData[index].share += 1;
                this.allData[index].liste_part.push({ numero_part: seance.numero_part });
              }
            });
          }
        });

        if (this.allData.length > this.nbItems) {
          this.listData = [];
          for (let i = 0; i < this.nbItems; i++) {
            this.listData.push(this.allData[this.listData.length]);
          }
        } else {
          this.listData = this.allData;
        }
      }
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      this.loading = false;
      this.error.manageError(error);

      if (event) {
        event.target.complete();
      }
      if (error && error.error && error.error.user_not_found) {
        this.loading = true;
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getContributions(event);
          } else {
            this.loading = false;
          }
        });
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    this.infiniteScroll.disabled = false;
    this.getContributions(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.listData.length < this.allData.length) {
          this.listData.push(this.allData[this.listData.length]);
        } else if (this.listData.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // open the tontine contribution modal
  selectPaymentMode(pin: any, data: any) {
    const tontineData = this.tontine.getCurrentTontineData();
    // Ask the user page pin before send data
    const paymentData = {
      title: tontineData.tontine.name,
      paymentMode: 'WALLET',
      contribution: data.contribution,
      seance_id: data.seance_id,
      device_name: tontineData.tontine.monnaie,
      montant: data.montant,
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
            this.loading = true;
            this.listData = [];
            this.allData = [];
            this.getContributions(null);
          }
        });
      });
  }

  // show the pin confirmation dilaog
  confirmPin(peanlity: any) {
    const userPin = this.userService.getUserSecret();
    this.selectPaymentMode(userPin.password, peanlity);
  }

}
