import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TontineDetailPage } from './tontine-detail.page';

const routes: Routes = [
    {
        path: '',
        component: TontineDetailPage
    },
    {
        path: 'session',
        loadChildren: () => import('./session/session.module').then(m => m.SessionPageModule)
    },
    {
        path: 'members',
        loadChildren: () => import('./members/members.module').then(m => m.MembersPageModule)
    },
    {
        path: 'shares',
        loadChildren: () => import('./shares/shares.module').then(m => m.SharesPageModule)
    }
    ,
    {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesPageModule)
    },
    {
        path: 'penalities',
        loadChildren: () => import('./penalities/penalities.module').then(m => m.PenalitiesPageModule)
    },
    {
        path: 'stat/pools/:id',
        loadChildren: () => import('./stat-pool-detail/stat-pool-detail.module').then(m => m.StatPoolDetailPageModule)
    },
    {
        path: 'stat/pools-session/:id',
        loadChildren: () => import('./stat-pool-detail-session/stat-pool-detail-session.module').then(m => m.StatPoolDetailSessionPageModule)
    },
    {
        path: 'stat/pools',
        loadChildren: () => import('./stat-pools/stat-pools.module').then(m => m.StatPoolsPageModule)
    },
    {
        path: 'stat',
        loadChildren: () => import('./stat/stat.module').then(m => m.StatPageModule)
    },
    {
        path: 'history',
        loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
    },
    {
        path: 'bid',
        loadChildren: () => import('./bid/bid.module').then(m => m.BidPageModule)
    },
    { 
        path: 'debts', 
        loadChildren: () => import('./debts/debts.module').then(m => m.DebtsPageModule)
    },
    { 
        path: 'session-no-paid', 
        loadChildren: () => import('./session-no-paid/session-no-paid.module').then(m => m.SessionNoPaidPageModule)
    },
    
    { 
        path: 'wallet/top-up', 
        loadChildren: () => import( './wallet/top-up/top-up.module').then(m => m.TopUpPageModule) 
    },
    { 
        path: 'wallet/withdrawal', 
        loadChildren: () => import( './wallet/withdrawal/withdrawal.module').then(m => m.WithdrawalPageModule)
    },
    { 
        path: 'wallet/history', 
        loadChildren: () => import( './wallet/history/history.module').then(m => m.HistoryPageModule)
    },
    { 
        path: 'wallet', 
        loadChildren: () => import( './wallet/wallet.module').then(m => m.WalletPageModule)
    },
    { 
        path: 'jackpot-order', 
        loadChildren: () => import( './jackpot-order/jackpot-order.module').then(m => m.JackpotOrderPageModule)
    },
    { 
        path: 'loans', 
        loadChildren: () => import('./loans/loans.module').then(m => m.LoansPageModule)
    },
    { 
        path: 'contrib-not-paid', 
        loadChildren: () => import('./contribution-not-paid/contribution-not-paid.module').then(m => m.ContributionNotPaidPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TontineDetailRouting {

}
