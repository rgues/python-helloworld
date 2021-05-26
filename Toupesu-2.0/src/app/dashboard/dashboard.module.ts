import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { DashboardPage } from './dashboard.page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardPage,
    DashboardMenuComponent
  ],
  entryComponents: [
    DashboardMenuComponent
  ]
})
export class DashboardPageModule {}
