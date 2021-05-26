import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGlobalDataService } from './auth-global-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [AuthPage],
  providers : [
    AuthGlobalDataService
  ]
})
export class AuthPageModule {}
