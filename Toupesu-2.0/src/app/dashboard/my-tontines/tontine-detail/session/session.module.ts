import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SessionPage } from './session.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpdateBatchesComponent } from './update-batches/update-batches.component';

const routes: Routes = [
  {
    path: '',
    component: SessionPage
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
  declarations: [
    SessionPage,
    UpdateBatchesComponent
  ],
  entryComponents:[
    UpdateBatchesComponent
  ]
})
export class SessionPageModule {}
