import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventDetailPage } from './event-detail.page';
import { ExpandableHeaderDirective } from './directives/expandable-header.directive';
import { EventDetailMenuComponent } from './event-detail-menu/event-detail-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContributeComponent } from './contribute/contribute.component';
import { EventInfoEditComponent } from './event-info-edit/event-info-edit.component';
import { CommaDumperPipe } from 'src/app/shared/pipes/comma-dumper.pipe';

const routes: Routes = [
  {
    path: '',
    component: EventDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    EventDetailPage,
    ExpandableHeaderDirective,
    EventDetailMenuComponent,
    ContributeComponent,
    EventInfoEditComponent
  ],
  entryComponents: [
    EventDetailMenuComponent,
    ContributeComponent,
    EventInfoEditComponent
  ]
})
export class EventDetailPageModule {}
