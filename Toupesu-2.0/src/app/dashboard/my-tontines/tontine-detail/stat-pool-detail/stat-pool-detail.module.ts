import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StatPoolDetailPage } from './stat-pool-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SessionPaidProofsComponent } from './session-paid-proofs/session-paid-proofs.component';

const routes: Routes = [
  {
    path: '',
    component: StatPoolDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StatPoolDetailPage,
    SessionPaidProofsComponent
  ],
  entryComponents:[
    SessionPaidProofsComponent
  ]
})
export class StatPoolDetailPageModule {}
