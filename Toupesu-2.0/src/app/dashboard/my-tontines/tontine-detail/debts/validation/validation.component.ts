import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DebtsManagerService } from '../../../services/debts-manager.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { TontineService } from '../../../services/tontine.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
})
export class ValidationComponent implements OnInit {

  @Input() memberName: any;
  @Input() debtAmount: any;
  @Input() debtOption: any;
  @Input() reference: any;
  @Input() currency: any;
  loading: boolean;
  reason: string;
  currentTontine: any;

  constructor(
    private modatCtrl: ModalController,
    private debt: DebtsManagerService,
    private tontine: TontineService,
    private error: ErrorService,
    private ui: UiService,
    private translate: TranslateService,
    private tontineError: TontineErrorService,
    private event: EventService
  ) {
    this.loading = false;
    this.reason = '';
    this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() { }

  closeValidation(ans: any) {
    this.modatCtrl.dismiss(ans, 'cancel');
  }

  // validate the member debt
  validationAdmin(action: string) {
    switch (action) {
      case 'validate':
        this.validatePayment();
        break;
      case 'reject':
        this.rejectPayment();
        break;
      default:
        break;
    }
  }

  // validate the debt payment
  validatePayment() {
    const facture = this.debt.getDebtsData();
    const data = {
      facture_id: facture.id,
      tontine_id: facture.tontine_id,
      reason: this.reason
    };
    this.loading = true;
    this.debt.validateBill(data).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('DEBT_BILL_VALIDATE_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.event.publish('bill-validate');
        this.closeValidation('validate');
      }
    }, error => {
      this.loading = false;
      if (error && error.error) {
        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.validatePayment();
            } else {
              this.loading = false;
            }
          });
        } else {
          this.tontineError.manageTontineError(error);
        }
      } else {
        this.error.manageError(error);
      }
    });

  }

  // reject the debt payment
  rejectPayment() {
    const facture = this.debt.getDebtsData();
    const data = {
      facture_id: facture.id,
      tontine_id: facture.tontine_id,
      reason: this.reason
    };
    this.loading = true;
    this.debt.cancelBill(data).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('DEBT_BILL_REJECT_MSG').subscribe(trans => {
          this.ui.presentToast(trans);
        });
        this.event.publish('bill-rejected');
        this.closeValidation('reject');
      }
    }, error => {
      this.loading = false;
      if (error && error.error) {
        if (error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.rejectPayment();
            } else {
              this.loading = false;
            }
          });
        } else {
          this.tontineError.manageTontineError(error);
        }
      } else {
        this.error.manageError(error);
      }
    });

  }
}
