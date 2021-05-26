import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TontineService } from '../../my-tontines/services/tontine.service';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { EventService } from 'src/app/shared/service/events.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { UserErrorService } from '../service/user-error.service';

interface TontineList {
  name: string;
  tontine_id: number;
  automatic_payment_from_wallet: number;
  choice: boolean;
}

@Component({
  selector: 'app-auto-pay-tontine',
  templateUrl: './auto-pay-tontine.page.html',
  styleUrls: ['./auto-pay-tontine.page.scss'],
})
export class AutoPayTontinePage implements OnInit {
  tontineCtrl = new FormControl();
  filteredTontines: Observable<string[]>;
  tontines: string[] = [];
  allTontines: string[];
  tontineSelected: TontineList[];
  loading: boolean;
  loadingList: boolean;
  userData: any;
  userPicture: string;

  constructor(
    private tontineService: TontineService,
    private userService: UserService,
    private router: Router,
    private userError: UserErrorService,
    private ui: UiService,
    private event: EventService,
    private error: ErrorService,
    private translate: TranslateService
  ) {
    this.allTontines = [];
    this.tontineSelected = [];
    this.loading = false;
    this.userData = this.userService.getUserData();
    this.userPicture = this.userData && this.userData.picture ? `${this.userData.picture}` : null;
    this.event.subscribe('user-data', user => {
      this.userPicture = user && user.picture ? user.picture : null;
    });
  }

  ngOnInit() {
    this.loadingList = true;
    this.getUserTontines(null);
  }

  // check if a tontine is selected
  checkTontine(tontineList: any[]) {
    let isTontineIn = false;
    tontineList.forEach(tontine => {
      if (tontine.choice) {
        isTontineIn = true;
      }
    });
    return isTontineIn;
  }

  // save the auto pay method
  saveAutoPay() {
    let i = 0;
    while (i < this.tontineSelected.length) {
      if (this.tontineSelected[i].choice) {
        this.tontineSelected[i].automatic_payment_from_wallet = 1;
      } else {
        this.tontineSelected[i].automatic_payment_from_wallet = 0;
      }
      i++;
    }
    this.loading = true;
    this.userService.payTontineAutomatically({ liste_tontine: this.tontineSelected }).subscribe((reponse: any) => {
      this.loading = false;
      if (reponse && reponse.message === 'success') {
        this.translate.get('TONTINE_PAY_AUTO_SUCCESS').subscribe(data => {
          this.ui.presentToast(data);
        });
        this.getUserTontines(null);
        this.router.navigate(['dashboard/user']);
      }
    }, error => {
      this.loading = false;
      if (error && error.error && error.error.message === 'error') {
        if (error && error.error.user_not_found) {
          this.loading = true;
          this.error.renewSession().then((data: any) => {
            if (data && data.result === "OK") {
              this.saveAutoPay();
            } else {
              this.loading = false;
            }
          });
        } else {
          this.userError.manageUserError(error);
        }
      } else {
        this.error.manageError(error);
      }
    });
  }

  // Refresh the list
  refreSher(event) {
    this.getUserTontines(event);
  }

  // Get the list user tontines
  getUserTontines(event) {
    this.tontineService.getMyTontine().subscribe((reponse: any) => {
      this.loadingList = false;
      if (reponse && reponse.message === 'success') {
        this.tontineSelected = [];
        reponse.liste_tontine.forEach(data => {
          if (data && data.tontine.automatic_payment_from_wallet === 1) {
            this.tontineSelected.unshift({
              name: data.tontine.name,
              tontine_id: data.tontine.tontine_id,
              automatic_payment_from_wallet: data.tontine.automatic_payment_from_wallet,
              choice: data.tontine.automatic_payment_from_wallet = true
            });
          } else {
            this.tontineSelected.push({
              name: data.tontine.name,
              tontine_id: data.tontine.tontine_id,
              automatic_payment_from_wallet: data.tontine.automatic_payment_from_wallet,
              choice: data.tontine.automatic_payment_from_wallet = false
            });
          }
        });
      }
      if (event) {
        setTimeout(() => {
          event.target.complete();
        }, 200);
      }
    }, error => {
      if (event) {
        event.target.complete();
      }

      if (error && error.error && error.error.user_not_found) {
        this.error.renewSession().then((data: any) => {
          if (data && data.result === 'OK') {
            this.getUserTontines(event);
          } else {
            this.loadingList = false;
          }
        });
      } else {
        this.loadingList = false;
        this.error.manageError(error);
      }
    });
  }

}
