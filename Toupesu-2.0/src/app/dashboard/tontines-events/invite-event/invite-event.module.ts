import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { InviteEventPage } from './invite-event.page';
import { InviteListComponent } from './invite-list/invite-list.component';

const routes: Routes = [
  {
    path: '',
    component: InviteEventPage,
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
    InviteEventPage,
    InviteListComponent
  ]
})
export class InviteEventPageModule {}
