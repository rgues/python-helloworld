import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoansRefundPage } from './loans-refund.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoansRefundMenuComponent } from './loans-refund-menu/loans-refund-menu.component';
import { RefundValidationComponent } from '../refund-validation/refund-validation.component';

const routes: Routes = [
  {
    path: '',
    component: LoansRefundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoansRefundPage,
    LoansRefundMenuComponent,
    RefundValidationComponent
  ],
  entryComponents: [
    LoansRefundMenuComponent,
    RefundValidationComponent
  ]
})
export class LoansRefundPageModule {}
