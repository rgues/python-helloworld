import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TontineDetailPage } from './tontine-detail.page';
import { TontineDetailRouting } from './tontine-detail-routing.module';
import { ContributeComponent } from './contribute/contribute.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TontineDetailMenuComponent } from './tontine-detail-menu/tontine-detail-menu.component';
import { InfoEditComponent } from './info-edit/info-edit.component';
import { ContributeSeanceComponent } from './contribute-seance/contribute-seance.component';
import { ContributeSeanceCautionComponent } from './contribute-seance-caution/contribute-seance-caution.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TontineDetailRouting,
    SharedModule
  ],
  declarations: [
    TontineDetailPage,
    ContributeComponent,
    TontineDetailMenuComponent,
    InfoEditComponent,
    ContributeSeanceComponent,
    ContributeSeanceCautionComponent
  ],
  entryComponents: [
    ContributeComponent,
    TontineDetailMenuComponent,
    InfoEditComponent,
    ContributeSeanceComponent,
    ContributeSeanceCautionComponent
  ]
})
export class TontineDetailPageModule {}
