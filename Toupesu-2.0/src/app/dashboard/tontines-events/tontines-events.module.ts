import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TontinesEventsPage } from './tontines-events.page';
import { TontinesEventsMenuComponent } from './tontines-events-menu/tontines-events-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDateObjPipe } from './pipes/to-date-obj.pipe';
import { FilterdataPipe } from './pipes/filterdata.pipe';
import { CommaDumperPipe } from './pipes/comma-dumper.pipe';


const routes: Routes = [
  {
    path: '',
    component: TontinesEventsPage
  },
  {
    path: 'join/:hasTitle',
    loadChildren:  () => import('./join-tontine-event/join-tontine-event.module').then(m => m.JoinTontineEventPageModule)
}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TontinesEventsPage,
    TontinesEventsMenuComponent,
    ToDateObjPipe,
    FilterdataPipe,
    CommaDumperPipe
  ],
  entryComponents: [
    TontinesEventsMenuComponent
  ]
})
export class TontinesEventsPageModule {}
