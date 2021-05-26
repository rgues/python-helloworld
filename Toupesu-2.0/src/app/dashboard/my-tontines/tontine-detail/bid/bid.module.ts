import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { BidPage } from './bid.page';
import { BidTimeEditComponent } from './bid-time-edit/bid-time-edit.component';
import { BidConfirmationComponent } from './bid-confirmation/bid-confirmation.component';
import { BidEditComponent } from './bid-edit/bid-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    BidPage,
    BidTimeEditComponent,
    BidConfirmationComponent,
    BidEditComponent
  ],
  entryComponents: [
    BidTimeEditComponent,
    BidConfirmationComponent,
    BidEditComponent
  ]
})
export class BidPageModule {}
