import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { RolesEditComponent } from './roles-edit/roles-edit.component';
import { RolesPage } from './roles.page';

const routes: Routes = [
  {
    path: '',
    component: RolesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RolesPage,
    RolesEditComponent
  ],
  entryComponents: [
    RolesEditComponent
  ]
})
export class RolesPageModule {}
