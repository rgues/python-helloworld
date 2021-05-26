import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatPage } from './stat.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: StatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatPage]
})
export class StatPageModule {}
