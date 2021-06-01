import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyWalletPage } from './my-wallet.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyWalletMenuComponent } from './my-wallet-menu/my-wallet-menu.component';
import { TopUpComponent } from './top-up/top-up.component';

const routes: Routes = [
  {
    path: '',
    component: MyWalletPage
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
},
{
    path: 'withdrawal',
    loadChildren: () => import('./withdrawal/withdrawal.module').then(m => m.WithdrawalPageModule)
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    MyWalletPage,
    MyWalletMenuComponent,
    TopUpComponent
  ],
  entryComponents: [
    MyWalletMenuComponent
  ]
})
export class MyWalletPageModule {}
