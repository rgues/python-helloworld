import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansPage } from './loans.page';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoansPage
    },
    { 
        path: 'all-loans', 
        loadChildren: () => import('./loans-list/loans-list.module').then(m => m.LoansListPageModule)
    },
    { 
        path: 'loans-my-list', 
        loadChildren: () => import('./loans-my-list/loans-my-list.module').then(m => m.LoansMyListPageModule) 
    },
    { 
        path: 'my-loans/:cycleId/:seanceId', 
        loadChildren: () => import('./loans-my/loans-my.module').then(m => m.LoansMyPageModule) 
    },
    { 
        path: 'refund-loans', 
        loadChildren: () => import('./loans-refund/loans-refund.module').then(m => m.LoansRefundPageModule) 
    },
    { 
        path: 'loans-interests/:cycleId/:seanceId', 
        loadChildren: () => import('./loans-interests/loans-interests.module').then(m => m.LoansInterestsPageModule)
    },  
    { 
        path: 'loans-history/:cycleId/:seanceId', 
        loadChildren: () => import('./loans-history/loans-history.module').then(m => m.LoansHistoryPageModule) 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoansRouting {

}