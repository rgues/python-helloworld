import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WalletPage } from './wallet.page';
import { WalletMenuComponent } from './wallet-menu/wallet-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaidProofsComponent } from './paid-proofs/paid-proofs.component';
import { BeneficialProofsComponent } from './beneficial-proofs/beneficial-proofs.component';
import { FundRepartitionComponent } from './fund-repartition/fund-repartition.component';

const routes: Routes = [
  {
    path: '',
    component: WalletPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WalletPage,
    WalletMenuComponent,
    PaidProofsComponent,
    BeneficialProofsComponent,
    FundRepartitionComponent
  ],
  entryComponents: [
    WalletMenuComponent,
    PaidProofsComponent,
    BeneficialProofsComponent,
    FundRepartitionComponent
  ]
})
export class WalletPageModule {}
