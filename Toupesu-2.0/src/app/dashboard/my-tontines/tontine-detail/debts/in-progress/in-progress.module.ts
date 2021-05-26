import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { InProgressPage } from './in-progress.page';
import { ContributionComponent } from '../../../../../shared/contribution/contribution.component';

const routes: Routes = [
  {
    path: '',
    component: InProgressPage
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
    InProgressPage
  ],
  entryComponents: [
    ContributionComponent
  ]
})
export class InProgressPageModule {}
