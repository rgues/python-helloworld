import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'due', 
        pathMatch: 'full'
    },
    { 
        path: 'due', 
        loadChildren: () => import('./due/due.module').then(m => m.DuePageModule)
    },
    { 
        path: ':id/in-progress',
        loadChildren: () => import('./in-progress/in-progress.module').then(m => m.InProgressPageModule)
    },
    { 
        path: 'in-progress-list', 
        loadChildren: () => import('./in-progress-list/in-progress-list.module').then(m => m.InProgressListPageModule)
    },
    { 
        path: 'in-progress-paiement', 
        loadChildren: () => import('./in-progress-paiement/in-progress-paiement.module').then(m => m.InProgressPaiementPageModule)
    },
    { 
        path: 'in-approval', 
        loadChildren: () => import('./in-approval/in-approval.module').then(m => m.InApprovalPageModule)
    },
    { 
        path: ':id/in-approval-detail', 
        loadChildren: () => import('./in-approval-detail/in-approval-detail.module').then(m => m.InApprovalDetailPageModule)
    },
    { 
        path: 'in-approval-user', 
        loadChildren: () => import('./in-approval-user/in-approval-user.module').then(m => m.InApprovalUserPageModule)
    },
    { 
        path: ':id/in-approval-detail-user', 
        loadChildren: () => import('./in-approval-detail-user/in-approval-detail-user.module').then(m => m.InApprovalDetailUserPageModule)
    },
    { 
        path: 'approved', 
        loadChildren: () => import('./approved/approved.module').then(m => m.ApprovedPageModule)
    },
    { 
        path: ':id/approved-detail', 
        loadChildren: () => import('./approved-detail/approved-detail.module').then(m => m.ApprovedDetailPageModule)
    },
    { 
        path: 'approved-user', 
        loadChildren: () => import('./approved-user/approved-user.module').then(m => m.ApprovedUserPageModule)
    },
    { 
        path: ':id/approved-detail-user', 
        loadChildren: () => import('./approved-detail-user/approved-detail-user.module').then(m => m.ApprovedDetailUserPageModule)
    },
    { 
        path: 'rejected', 
        loadChildren: () => import('./rejected/rejected.module').then(m => m.RejectedPageModule)
    },
    { 
        path: ':id/rejected-detail', 
        loadChildren: () => import('./rejected-detail/rejected-detail.module').then(m => m.RejectedDetailPageModule)
    },
    { 
        path: 'user-rejected', 
        loadChildren: () => import('./rejected-user/rejected-user.module').then(m => m.RejectedUserPageModule)
    },
    { 
        path: ':id/rejected-detail-user', 
        loadChildren: () => import('./rejected-detail-user/rejected-detail-user.module').then(m => m.RejectedDetailUserPageModule)
    }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DebtsRouting {

}