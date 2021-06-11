import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyTontinesPage } from './my-tontines.page';
import { MyTontinesMenuComponent } from './my-tontines-menu/my-tontines-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchiveTontineComponent } from './archive-tontine/archive-tontine.component';

const routes: Routes = [
  {
    path: '',
    component: MyTontinesPage
  },

  {
    path: 'new-demo',
    loadChildren: () => import('./tontine-new-demo/tontine-new-demo.module').then(m => m.TontineNewDemoPageModule)
  },
{
  path: 'new',
  loadChildren: () => import('./tontine-new/tontine-new.module').then(m => m.TontineNewPageModule)
},
{
    path: ':tontineId',
    loadChildren: () => import('./tontine-detail/tontine-detail.module').then(m => m.TontineDetailPageModule)
}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MyTontinesPage,
    MyTontinesMenuComponent,
    ArchiveTontineComponent
  ],
  entryComponents: [
    MyTontinesMenuComponent,
    ArchiveTontineComponent
  ]
})
export class MyTontinesPageModule {}
