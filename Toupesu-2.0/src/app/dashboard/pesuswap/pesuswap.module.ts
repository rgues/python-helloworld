import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PesuswapPage } from './pesuswap.page';
import { ScrollVanishDirective } from './directives/scroll-vanish.directive';
import { SwapMenuComponent } from './swap-menu/swap-menu.component';
import { SendSwapRequestComponent } from './send-swap-request/send-swap-request.component';
import { SwapComponent } from './swap/swap.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteComponent } from './delete/delete.component';
import { SwapEditComponent } from './swap-edit/swap-edit.component';
import { SwapNotPaidPage } from './swap-not-paid/swap-not-paid.page';
import { PaidModalComponent } from './paid-modal/paid-modal.component';
import { SwapMenuOptionComponent } from './swap-menu-option/swap-menu-option.component';
import { SwapNotificationsPage } from './swap-notifications/swap-notifications.page';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveSwapComponent } from './archive-swap/archive-swap.component';

const routes: Routes = [
  {
    path: '',
    component: PesuswapPage
  },
  {
    path: 'swap-not-paid',
    component: SwapNotPaidPage
  },
  {
    path: 'notifs',
    component: SwapNotificationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PesuswapPage,
    ScrollVanishDirective,
    SwapMenuComponent,
    SwapMenuOptionComponent,
    ArchiveSwapComponent,
    SendSwapRequestComponent,
    SwapNotificationsPage,
    SwapComponent,
    DeleteComponent,
    ArchiveComponent,
    SwapNotPaidPage,
    SwapEditComponent,
    PaidModalComponent
  ],
  entryComponents: [
    SwapMenuComponent,
    SwapMenuOptionComponent,
    SendSwapRequestComponent,
    ArchiveSwapComponent,
    SwapComponent,
    DeleteComponent,
    ArchiveComponent,
    SwapEditComponent,
    PaidModalComponent
  ]
})
export class PesuswapPageModule {}
