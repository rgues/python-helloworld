import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage
    },
    {
        path: 'my-tontines',
        loadChildren: () => import('./my-tontines/my-tontines.module').then(m => m.MyTontinesPageModule)
    },
    {
        path: 'tontines-events',
        loadChildren: () => import('./tontines-events/tontines-events.module').then(m => m.TontinesEventsPageModule)
    },
    {
        path: 'join-tontine',
        loadChildren:  () => import('./join-tontine/join-tontine.module').then(m => m.JoinTontinePageModule)
    },
    {
        path: 'invitations',
        loadChildren: () => import('./invitations/invitations.module').then(m => m.InvitationsPageModule)
    },
    {
        path: 'my-wallet',
        loadChildren: () => import('./my-wallet/my-wallet.module').then(m => m.MyWalletPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)
    },
    {
        path: 'my-invitations',
        loadChildren: () => import('./my-invitations/my-invitations.module').then(m => m.MyInvitationsPageModule)
    },
    {   path: 'contact-us',
        loadChildren: () => import('./contact/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
    },
    {   path: 'feedback',
        loadChildren: () => import('./contact/feedback/feedback.module').then(m => m.FeedbackPageModule)
    },
    {
        path: 'pesuswap',
        loadChildren: () => import('./pesuswap/pesuswap.module').then(m => m.PesuswapPageModule)
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
