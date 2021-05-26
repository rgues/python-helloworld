import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WithdrawalPage } from './withdrawal.page';
import { AddBankProfilComponent } from '../add-bank-profil/add-bank-profil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpdateBankProfilComponent } from '../update-bank-profil/update-bank-profil.component';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WithdrawalPage,
    AddBankProfilComponent,
    UpdateBankProfilComponent
  ],
  entryComponents: [
    AddBankProfilComponent,
    UpdateBankProfilComponent
  ]
})
export class WithdrawalPageModule {}
