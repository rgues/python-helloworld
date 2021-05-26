import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoansPage } from './loans.page';
import { LoansMenuComponent } from './loans-menu/loans-menu.component';
import { LoansEditComponent } from './loans-edit/loans-edit.component';
import { LoansRequestComponent } from './loans-request/loans-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoansRouting } from './loans-routing-module';
import { ReasonComponent } from './reason/reason.component';
import { MessageComponent } from './message/message.component';
import { PaidProofsLoanComponent } from './paid-proofs/paid-proofs.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    LoansRouting 
  ],
  declarations: [
    LoansPage,
    LoansMenuComponent,
    PaidProofsLoanComponent,
    LoansEditComponent,
    LoansRequestComponent,
    ReasonComponent,
    MessageComponent
  ],
  entryComponents: [
    LoansMenuComponent,
    LoansEditComponent,
    LoansRequestComponent,
    PaidProofsLoanComponent,
    ReasonComponent,
    MessageComponent
  ]
})
export class LoansPageModule {}
