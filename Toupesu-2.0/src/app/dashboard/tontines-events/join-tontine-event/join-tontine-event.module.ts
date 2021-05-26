import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { SharedModule } from 'src/app/shared/shared.module';
import { JoinTontineEventPage } from './join-tontine-event.page';

const routes: Routes = [
  {
    path: '',
    component: JoinTontineEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoinTontineEventPage]
})
export class JoinTontineEventPageModule {}
