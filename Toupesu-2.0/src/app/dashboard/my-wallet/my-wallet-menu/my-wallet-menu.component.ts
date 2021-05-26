import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-wallet-menu',
  templateUrl: './my-wallet-menu.component.html',
  styleUrls: ['./my-wallet-menu.component.scss'],
})
export class MyWalletMenuComponent implements OnInit {

  constructor(
    public popoverController: PopoverController,
    private router: Router
  ) { }

  ngOnInit() {}

  closeMyWalletMenu() {
    this.popoverController.dismiss();
  }

  // Open the tontines page
  openTontines() {
    this.closeMyWalletMenu();
    this.router.navigate(['/dashboard/my-tontines']);
  }

  // Show the wallet transaction history
  walletTransaction() {
    this.closeMyWalletMenu();
    this.router.navigate(['/dashboard/my-wallet/history']);
  }

  // Show the wallet withdrawal
  walletWithdrawal() {
    this.closeMyWalletMenu();
    this.router.navigate(['/dashboard/my-wallet/withdrawal']);
  }

}
