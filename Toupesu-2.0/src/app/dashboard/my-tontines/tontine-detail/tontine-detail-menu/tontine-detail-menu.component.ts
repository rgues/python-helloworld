import { Component, OnInit } from '@angular/core';
import { PopoverController, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TontineService } from '../../services/tontine.service';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TontineErrorService } from 'src/app/dashboard/my-tontines/services/tontine-error.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';
import { PluginService } from 'src/app/shared/service/plugin.service';

@Component({
  selector: 'app-tontine-detail-menu',
  templateUrl: './tontine-detail-menu.component.html',
  styleUrls: ['./tontine-detail-menu.component.scss'],
})
export class TontineDetailMenuComponent implements OnInit {
  currentTontine: any;
  seance: any;
  previousSeance: any;
  shareData: any[];

  constructor(
    public popoverController: PopoverController,
    private platform: Platform,
    private tontine: TontineService,
    private event: EventService,
    private ui: UiService,
    private error: ErrorService,
    private tontineError: TontineErrorService,
    private router: Router,
    private translate: TranslateService,
    private alertController: AlertController,
    private plugin: PluginService
  ) {
    this.currentTontine = this.tontine.getCurrentTontineData();
    this.seance = this.currentTontine.seance_courante;
    this.previousSeance = this.currentTontine.avant_derniere_seance;
    this.shareData = [];
  }

  ngOnInit() { }

  // Close the menu
  closeTontineDetailMenu() {
    this.popoverController.dismiss();
  }

  // Get the financial statistique
  financialStats() {
    this.popoverController.dismiss();
    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'stat']);
  }

  // Get the transaction History
  transactionHistory() {
    this.popoverController.dismiss();
    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'history']);
  }

  // Open create tontine page
  createTontinePage() {
    this.closeTontineDetailMenu();
    this.router.navigate(['/dashboard/my-tontines/new']);
  }

  // Join a tontine
  joinTontinePage() {
    this.closeTontineDetailMenu();
    this.router.navigate(['/dashboard/join-tontine']);
  }

  // Loan manager
  loan() {
    this.closeTontineDetailMenu();
    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans']);
  }


  // open tontine wallet
  openWallet() {
    this.closeTontineDetailMenu();
    this.router.navigate(['/dashboard/my-wallet']);
  }

  // open the debt manager page
  debtManagerPage() {
    this.popoverController.dismiss();
    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'debts']);
  }

  // Invite members
  inviteMember() {
    this.popoverController.dismiss();
    this.router.navigate(['/', 'dashboard', 'invitations']);
  }


  // Share the app with friends
  shareCode() {
    let link = '';
    if (this.platform.is('android')) {
      link = 'https://bit.ly/2Zr78Me';
    } else {
      link = 'https://apple.co/2yrfLeM';
    }
    this.translate.get(['SHARE_CODE_MESSAGE', 'SHARE_CODE_TITLE', 'DOWNLOAD_TEXT']).subscribe(trans => {
      this.shareData.push(trans.SHARE_CODE_MESSAGE);
      this.shareData.push(trans.DOWNLOAD_TEXT);
      this.shareData.push(trans.SHARE_CODE_TITLE);
    });
    this.plugin.share(`${this.shareData[0]}  ${this.currentTontine.tontine.name} \n\n Code : ${this.currentTontine.tontine.code_invitation} \n\n ${this.shareData[1]} \n `, `${this.shareData[2]}`, link);
  }

  // Can edit share 
  canShareCode() {
    let canEdit = false;
    if (((!this.seance && this.currentTontine.tontine.active === 0) || (!this.seance && !this.previousSeance && this.currentTontine.tontine.active === 1) ||
      (this.seance && this.seance.numero_seance < 1 && this.currentTontine.tontine.active === 1)) && this.currentTontine.tontine.administrator === 1) {
      canEdit = true;
    }
    return canEdit
  }

  // Who can archive the tontine
  canArchive() {
    let canEdit = false;
    if ((!this.seance && this.currentTontine.tontine.active === 0) && this.currentTontine.tontine.administrator === 1) {
      canEdit = true;
    }
    return canEdit
  }

  // Archive la tontine
  archiveTontine() {
    this.popoverController.dismiss();
    this.confirmArchiveMessage();

  }

  // check if it is traditionnal payment
  isTraditionnalBanking() {
    return this.currentTontine && this.currentTontine.tontine.tontine_payment_type_id === 1;
  }

 // check if it is tontine loan
 isLoan() {
  return this.currentTontine &&  this.currentTontine.tontine.drawingtype_id === 6;
 }

  // confirm archivation
  confirmArchiveMessage() {
    const messages = [];
    this.translate.get(['M_ARCHIVE_TITLE', 'M_ARCHIVE_MESSAGE', 'CANCEL_TEXT', 'YES_TEXT'], { tontine: this.currentTontine.tontine.name })
      .subscribe(trans => {
        messages.push(trans.M_ARCHIVE_TITLE);
        messages.push(trans.M_ARCHIVE_MESSAGE);
        messages.push(trans.CANCEL_TEXT);
        messages.push(trans.YES_TEXT);
        this.archiveMessage(messages);
      });
  }

  // archive message
  async archiveMessage(translation: string[]) {

    const alert = await this.alertController.create({
      header: `${translation[0]}`,
      message: `${translation[1]}`,
      buttons: [
        {
          text: `${translation[2]}`,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: `${translation[3]}`,
          handler: () => {
            // send the archivation answer
            this.archviveTontineService();
          }
        }
      ]
    });

    await alert.present();
  }

  // Archive tontine service
  archviveTontineService() {
    const data = {
      liste_tontine:
        [{ tontine_id: this.currentTontine.tontine.tontine_id, archived: 1 }]
    };

    this.translate.get(['ARCHIVE_PROCESSING']).subscribe(trans => {
      this.ui.presentLoading(trans.ARCHIVE_PROCESSING);
    });
    this.tontine.disableTontine(data).subscribe((reponse: any) => {
      if (reponse && reponse.message === "success") {
        this.translate.get(['ARCHIVE_SUCCESS_MSG'], { tontine: this.currentTontine.tontine.name }).subscribe(trans => {
          this.ui.presentToast(trans.ARCHIVE_SUCCESS_MSG);
        });
        this.event.publish('new-tontine');
        this.router.navigate(['/dashboard/my-tontines']);
      }
      this.ui.dismissLoading();

    }, error => {


      if (error && error.error && error.error.message === "error") {
        if (error && error.error && error.error.user_not_found) {
          this.error.renewSession().then((ans: any) => {
            this.ui.dismissLoading();
            if (ans && ans.result === "OK") {
              this.archviveTontineService();
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

  }

}
