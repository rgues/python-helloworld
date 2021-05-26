import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { PenalityPayComponent } from '../penality-pay/penality-pay.component';
import { ContributionService } from '../../../services/contribution.service';
import { TontineService } from '../../../services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/dashboard/user/service/user.service';

@Component({
  selector: 'app-penalities-list',
  templateUrl: './penalities-list.component.html',
  styleUrls: ['./penalities-list.component.scss'],
})
export class PenalitiesListComponent implements OnInit {

  penalities: any;
  loading: boolean;
  tontineData: any;
  allData: any;
  nbItems: number;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modatCtrl: ModalController,
    private contribution: ContributionService,
    private router: Router,
    private tontine: TontineService,
    private userService: UserService,
    private error: ErrorService,
    private translate: TranslateService
  ) {
    this.penalities = [];
    this.tontineData = this.tontine.getCurrentTontineData();
    this.allData = [];
    this.nbItems = 10;
  }

  ngOnInit() {
    this.loading = true;
    this.getPenalities(null);
  }


  closePenalitiesList() {
    this.modatCtrl.dismiss(null, 'cancel');
  }

  // Get the list user penalities
  getPenalities(event) {
    const currentTontine = this.tontine.getCurrentTontineData();
    this.contribution.getPenalitesImpayeMembre(currentTontine.tontine.tontine_id).subscribe((reponse: any) => {

      if (reponse && reponse.liste_penalite && reponse.liste_penalite.length > 0) {
        if (reponse && reponse.liste_penalite) {
          this.allData = reponse.liste_penalite;
          if (this.allData.length > this.nbItems) {
            this.penalities = [];
            for (let i = 0; i < this.nbItems; i++) {
              this.penalities.push(this.allData[this.penalities.length]);
            }
          } else {
            this.penalities = this.allData;
          }
        }
      }
      this.loading = false;
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, error => {
      if (event) {
        event.target.complete();
      }
      this.loading = false;
      if (error && error.error) {
        if (error && error.error && error.error.user_unauthorized) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.getPenalities(event);
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
    this.getPenalities(event);
  }

  // Infinite scroll data
  infinteScrollData(event) {
    setTimeout(() => {
      for (let i = 0; i < this.nbItems; i++) {
        if (this.penalities.length < this.allData.length) {
          this.penalities.push(this.allData[this.penalities.length]);
        } else if (this.penalities.length === this.allData.length) {
          event.target.disabled = true;
        }
      }
      event.target.complete();
    }, 500);
  }

  // Get the penalities type
  getPenalitiesTypeName(type: string) {
    let typeName = type;
    switch (type) {
      case 'absence':
        this.translate.get('PENALITY_ABSENCE').subscribe(value => {
          typeName = value;
        });
        break;
      case 'retard':
        this.translate.get('PENALITY_RETARD').subscribe(value => {
          typeName = value;
        });
        break;
      default:
        break;

    }
    return typeName;
  }

  // Open the 
  openPenalityPay(penality: any) {
    this.modatCtrl
      .create({
        component: PenalityPayComponent,
        componentProps: {
          tontineName: penality.title,
          amountToPay: penality.amount,
          subject: penality.type_penalite
        }
      })
      .then(modalEl => {
        modalEl.present();

        modalEl.onDidDismiss().then(() => {
          this.penalities = [];
          this.allData = [];
          this.loading = true;
          this.getPenalities(null);
        });
      });
  }

  // paid penalities with all payment mode
  paidPenalities(peanlity: any, pin: any) {
    const paymentData = {
      title: this.tontineData.tontine.name,
      contribution: peanlity.montant_restant_a_payer,
      seance_id: peanlity.seance_id ? peanlity.seance_id : null,
      type_penalite: this.getPenalitiesTypeName(peanlity.type_penalite),
      device_name: this.tontineData.tontine.monnaie,
      montant: peanlity.montant_restant_a_payer,
      typecontribution_id: 1,
      sens_contribution: 'sortant',
      liste_part: [{ numero_part: peanlity.numero_part }],
      pin: pin
    };
    this.contribution.sendContributionData(paymentData);
    this.openPenalityPay(paymentData);
  }

  // show the pin confirmation dilaog
  confirmPin(peanlity: any) {
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData && tontineData.tontine.tontine_payment_type_id === 1 || tontineData.tontine.drawingtype_id === 6) {
      this.closePenalitiesList();
      this.router.navigate(['/', 'dashboard', 'my-tontines', tontineData.tontine.tontine_id, 'debts']);
    } else {
      const userPin = this.userService.getUserSecret();
      this.paidPenalities(peanlity, userPin.password);
    }
  }

}
