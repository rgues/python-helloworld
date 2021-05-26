import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { MembersPage } from './members.page';
import { MemberMenuComponent } from './member-menu/member-menu.component';
import { UpdateShareComponent } from './update-share/update-share.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { DeleteComponent } from './delete/delete.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ReduceShareComponent } from './reduce-share/reduce-share.component';
import { EnableMemberComponent } from './enable-member/enable-member.component';

const routes: Routes = [
  {
    path: '',
    component: MembersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MembersPage,
    MemberMenuComponent,
    UpdateShareComponent,
    UpdateRoleComponent,
    EnableMemberComponent,
    DeleteComponent,
    ReduceShareComponent,
    AddMemberComponent
  ],
  entryComponents: [
    MemberMenuComponent,
    UpdateShareComponent,
    EnableMemberComponent,
    UpdateRoleComponent,
    ReduceShareComponent,
    DeleteComponent,
    AddMemberComponent
  ]
})
export class MembersPageModule {}
