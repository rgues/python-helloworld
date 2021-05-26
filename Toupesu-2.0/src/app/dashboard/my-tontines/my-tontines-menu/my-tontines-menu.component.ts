import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ArchiveTontineComponent } from '../archive-tontine/archive-tontine.component';
import { StorageData } from 'src/app/shared/service/storage.service';


@Component({
  selector: 'app-my-tontines-menu',
  templateUrl: './my-tontines-menu.component.html',
  styleUrls: ['./my-tontines-menu.component.scss'],
})
export class MyTontinesMenuComponent implements OnInit {

  tontines: any;

  constructor(
    private popoverController: PopoverController,
    private modatCtrl: ModalController,
    private storage: StorageData,
    private router: Router
  ) { 
      this.tontines = [];
  }

  ngOnInit() { 
    this.getTontines();
  }

  // Close popover
  closeMyTontinesMenu() {
    this.popoverController.dismiss();
  }

  // Open create tontine page
  createTontinePage() {
    this.closeMyTontinesMenu();
    this.router.navigate(['/dashboard/my-tontines/new']);
  }

  // Join a tontine
  joinTontinePage() {
    this.closeMyTontinesMenu();
    this.router.navigate(['/dashboard/join-tontine']);
  }

  // open tontine wallet
  openWallet() {
    this.closeMyTontinesMenu();
    this.router.navigate(['/dashboard/my-wallet']);
  }

  // Invite members
  inviteMember() {
    this.popoverController.dismiss();
    this.router.navigate(['/', 'dashboard', 'invitations']);
  }

  // Go to the notifications
  notification() {
    this.closeMyTontinesMenu();
    this.router.navigate(['/dashboard/notifications']);
  }

  // Archive la tontine
  archiveTontine() {
    this.popoverController.dismiss();
    this.archiveModal();

  }

  // get the tontines from storage
  getTontines() {
    this.storage.get('app-tontines').then(data => {
        if (data && data.length > 0) {
          this.tontines = data.filter(tontine => {
            return tontine.tontine.administrator === 1 && tontine.tontine.active === 0;
          })
        }
    });
  }

    // open the countries modal
    archiveModal() {
      this.modatCtrl
        .create({
          component: ArchiveTontineComponent,
          componentProps : {
            tontines: this.tontines
          }
        })
        .then(modalEl => {
          modalEl.present();
          modalEl.onDidDismiss().then((ans) => {
        
          });
        });
    }


}