import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DebtsRouting } from './debts-routing-module';

import { DebtsPage } from './debts.page';
import { DebtsMenuComponent } from './debts-menu/debts-menu.component';
import { ValidationComponent } from './validation/validation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    DebtsRouting
  ],
  declarations: [
    DebtsPage,
    DebtsMenuComponent,
    ValidationComponent
  ],
  entryComponents: [
    DebtsMenuComponent,
    ValidationComponent
  ]
})
export class DebtsPageModule {}
