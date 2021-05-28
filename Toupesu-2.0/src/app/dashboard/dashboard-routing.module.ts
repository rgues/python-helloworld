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
        children: [
            {
                path: '',
                loadChildren: () => import('./my-tontines/my-tontines.module').then(m => m.MyTontinesPageModule)
            },
            {
                path: 'new',
                loadChildren: () => import('./my-tontines/tontine-new/tontine-new.module').then(m => m.TontineNewPageModule)
            },
            {
                path: ':tontineId',
                loadChildren: () => import('./my-tontines/tontine-detail/tontine-detail.module').then(m => m.TontineDetailPageModule)
            }
        ]
    },
    {
        path: 'tontines-events',
        children: [
            {
                path: '',
                loadChildren: () => import('./tontines-events/tontines-events.module').then(m => m.TontinesEventsPageModule)
            },
            {
                path: 'new',
                loadChildren: () => import('./tontines-events/new-event/new-event.module').then(m => m.NewEventPageModule)
            },
            {
                path: 'invitations',
                loadChildren: () => import('./tontines-events/invite-event/invite-event.module').then(m => m.InviteEventPageModule)
            },
            {
                path: ':eventID',
                loadChildren: () => import('./tontines-events/event-detail/event-detail.module').then(m => m.EventDetailPageModule)
            },
            {
                path: ':eventID/my-tickets',
                loadChildren: () => import('./tontines-events/event-detail/events-tickets/events-tickets.module').then(m => m.EventsTicketsPageModule) 
            }
        ]
    },
    {
        path: 'join-tontine',
        loadChildren:  () => import('./join-tontine/join-tontine.module').then(m => m.JoinTontinePageModule)
    },
    {
        path: 'invitations',
        children: [
            {
                path: '',
                loadChildren: () => import('./invitations/invitations.module').then(m => m.InvitationsPageModule)
            }
        ]
    },
    {
        path: 'my-wallet',
        children: [
            {
                path: '',
                loadChildren: () => import('./my-wallet/my-wallet.module').then(m => m.MyWalletPageModule)
            },
            {
                path: 'history',
                loadChildren: () => import('./my-wallet/history/history.module').then(m => m.HistoryPageModule) 
            },
            {
                path: 'withdrawal',
                loadChildren: () => import('./my-wallet/withdrawal/withdrawal.module').then(m => m.WithdrawalPageModule)
            }
        ]
    },
    {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
    },
    {
        path: 'user',
        children: [
            {
                path: '',
                loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)
            },
            {
                path: 'profil',
                loadChildren: () => import('./user/user-profil/user-profil.module').then(m => m.UserProfilPageModule)
            },
            {
                path: 'security',
                loadChildren: () => import('./user/user-security/user-security.module').then(m => m.UserSecurityPageModule)
            },
            {
                path: 'pay-method',
                loadChildren:  () => import('./user/user-pay-method/user-pay-method.module').then(m => m.UserPayMethodPageModule)
            },
            {
                path: 'auto-pay-tontine',
                loadChildren: () => import('./user/auto-pay-tontine/auto-pay-tontine.module').then(m => m.AutoPayTontinePageModule) 
            }
        ]
    },
    { 
      path: 'my-invitations', loadChildren: () => import('./my-invitations/my-invitations.module').then(m => m.MyInvitationsPageModule) 
    },
    { path: 'contact-us', loadChildren: () => import('./contact/contact-us/contact-us.module').then(m => m.ContactUsPageModule) },
    { path: 'feedback', loadChildren: () => import('./contact/feedback/feedback.module').then(m => m.FeedbackPageModule) },
    { 
        path: 'pesuswap',  loadChildren: () => import('./pesuswap/pesuswap.module').then(m => m.PesuswapPageModule) 
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
