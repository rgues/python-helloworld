import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JackpotOrderPage } from './jackpot-order.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { JackpotBeneficiaryPage } from './jackpot-beneficiary/jackpot-beneficiary.page';
import { TontineService } from '../../services/tontine.service';

const routes: Routes = [
  {
    path: '',
    component: JackpotOrderPage
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
  providers:[
    TontineService
  ],
  declarations: [
    JackpotOrderPage,
    JackpotBeneficiaryPage
  ],
  entryComponents: [
    JackpotBeneficiaryPage
  ]
})
export class JackpotOrderPageModule {}
