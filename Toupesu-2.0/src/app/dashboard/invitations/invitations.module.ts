import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvitationsPage } from './invitations.page';
import { SharedModule } from '../../shared/shared.module';
import { InvitationListComponent } from './invitation-list/invitation-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvitationsPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    InvitationsPage,
    InvitationListComponent
  ], 
  providers : [

  ]
})
export class InvitationsPageModule {}
