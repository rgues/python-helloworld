import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContributionNotPaidPage } from './contribution-not-paid.page';

const routes: Routes = [
  {
    path: '',
    component: ContributionNotPaidPage
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
    ContributionNotPaidPage 
  ]
})
export class ContributionNotPaidPageModule {}
