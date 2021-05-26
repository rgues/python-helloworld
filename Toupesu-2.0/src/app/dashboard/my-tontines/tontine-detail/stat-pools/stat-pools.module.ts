import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatPoolsPage } from './stat-pools.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: StatPoolsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatPoolsPage]
})
export class StatPoolsPageModule {}
