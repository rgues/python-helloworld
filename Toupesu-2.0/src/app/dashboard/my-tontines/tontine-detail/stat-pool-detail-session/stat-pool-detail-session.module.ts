import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SessionPaidProofsSessionComponent } from './session-paid-proofs-session/session-paid-proofs-session.component';
import { StatPoolDetailSessionPage } from './stat-pool-detail-session.page';

const routes: Routes = [
  {
    path: '',
    component: StatPoolDetailSessionPage
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
    StatPoolDetailSessionPage,
    SessionPaidProofsSessionComponent
  ],
  entryComponents:[
    SessionPaidProofsSessionComponent
  ]
})
export class StatPoolDetailSessionPageModule {}
