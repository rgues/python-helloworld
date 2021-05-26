import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { SharedModule } from 'src/app/shared/shared.module';
import { RejectedDetailUserPage } from './rejected-detail-user.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedDetailUserPage
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
  declarations: [RejectedDetailUserPage]
})
export class RejectedDetailUserPageModule {}
