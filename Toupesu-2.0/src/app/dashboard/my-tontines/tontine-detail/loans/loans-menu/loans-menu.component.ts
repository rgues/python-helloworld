import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { LoansEditComponent } from '../loans-edit/loans-edit.component';
import { TontineService } from '../../../services/tontine.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/dashboard/user/service/user.service';
import { EventService } from 'src/app/shared/service/events.service';

@Component({
  selector: 'app-loans-menu',
  templateUrl: './loans-menu.component.html',
  styleUrls: ['./loans-menu.component.scss'],
})
export class LoansMenuComponent implements OnInit {

  user: any;
  currentTontine: any;

  constructor(
    private modatCtrl: ModalController,
    private userService: UserService,
    private router: Router,
    private tontine: TontineService,
    public popoverController: PopoverController,
    private events: EventService
  ) { 
      this.user = this.userService.getUserData();
      this.currentTontine = this.tontine.getCurrentTontineData();
  }

  ngOnInit() {}

  closeLoansMenu() {
    this.popoverController.dismiss();
  }

  openLoansEdit() {
    this.modatCtrl
      .create({
        component: LoansEditComponent
      })
      .then( modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(ans => {
            if(ans && ans.data === "success") {
              this.events.publish('loan-request');
            }
        });
      });
  }


  // open my loans request 
  openMyLoanRequest() {
    this.router.navigate(['/', 'dashboard', 'my-tontines',this.currentTontine.tontine.tontine_id, 'loans','loans-my-list']);
  }

  // open all requests
  openAllLoansRequest() {
    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans','all-loans']);
  }


  // Refund loan
  RefundRequest() {
    this.router.navigate(['/', 'dashboard', 'my-tontines', this.currentTontine.tontine.tontine_id, 'loans','refund-loans']);
  }

}
