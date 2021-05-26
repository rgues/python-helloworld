import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { ApprovedDetailUserPage } from './approved-detail-user.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedDetailUserPage
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
  declarations: [ApprovedDetailUserPage]
})
export class ApprovedDetailUserPageModule {}
