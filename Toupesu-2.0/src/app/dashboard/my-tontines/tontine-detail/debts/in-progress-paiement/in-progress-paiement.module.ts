import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContributionComponent } from '../../../../../shared/contribution/contribution.component';
import { InProgressPaiementPage } from './in-progress-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: InProgressPaiementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InProgressPaiementPage
  ],
  entryComponents: [
    ContributionComponent
  ]
})
export class InProgressPaiementPageModule {}
