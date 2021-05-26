import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyTontinesPage } from './my-tontines.page';
import { MyTontinesMenuComponent } from './my-tontines-menu/my-tontines-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchiveTontineComponent } from './archive-tontine/archive-tontine.component';

const routes: Routes = [
  {
    path: '',
    component: MyTontinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MyTontinesPage,
    MyTontinesMenuComponent,
    ArchiveTontineComponent
  ],
  entryComponents: [
    MyTontinesMenuComponent,
    ArchiveTontineComponent
  ]
})
export class MyTontinesPageModule {}
