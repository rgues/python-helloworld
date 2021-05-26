import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'profil',
    loadChildren: () => import('./user-profil/user-profil.module').then(m => m.UserProfilPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./user-security/user-security.module').then(m => m.UserSecurityPageModule)
  },
  {
    path: 'pay-method',
    loadChildren: () => import('./user-pay-method/user-pay-method.module').then(m => m.UserPayMethodPageModule)
  },
  {
    path: 'auto-pay-tontine',
    loadChildren: () => import('./auto-pay-tontine/auto-pay-tontine.module').then(m => m.AutoPayTontinePageModule)
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
    UserPage
  ],
  providers: [

  ]
})
export class UserPageModule {}
