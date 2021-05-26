import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TermsPage } from './terms.page';
import { TermsRoutingModule } from './terms-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TermsRoutingModule
  ],
  declarations: [TermsPage]
})
export class TermsPageModule {}
