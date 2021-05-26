import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PenalitiesPage } from './penalities.page';
import { PenalityEditComponent } from './penality-edit/penality-edit.component';
import { PenalitiesListComponent } from './penalities-list/penalities-list.component';
import { PenalityPayComponent } from './penality-pay/penality-pay.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PenalitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    PenalitiesPage,
    PenalityEditComponent,
    PenalitiesListComponent,
    PenalityPayComponent
  ],
  entryComponents: [
    PenalityEditComponent,
    PenalitiesListComponent,
    PenalityPayComponent
  ]
})
export class PenalitiesPageModule {}
