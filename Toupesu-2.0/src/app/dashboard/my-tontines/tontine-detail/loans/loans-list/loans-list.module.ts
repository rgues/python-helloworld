import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoansListPage } from './loans-list.page';
import { LoansRequestMenuComponent } from './loans-request-menu/loans-request-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LoansListPage
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
  declarations: [
    LoansListPage,
    LoansRequestMenuComponent
  ],
  entryComponents: [
    LoansRequestMenuComponent
  ]
})
export class LoansListPageModule {}
