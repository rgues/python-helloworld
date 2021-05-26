
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage
    },
    {
        path: 'terms',
        loadChildren: () => import('./terms/terms.module').then(m => m.TermsPageModule)
    },
    {
        path: 'register-phone',
        loadChildren: () => import('./register-phone/register-phone.module').then(m => m.RegisterPhonePageModule)
    },
    {
        path: 'verify-phone',
        loadChildren: () => import('./verify-phone/verify-phone.module').then(m => m.VerifyPhonePageModule)
    },
    { 
        path: 'verify-email', 
        loadChildren: () => import('./verify-email/verify-email.module').then(m => m.VerifyEmailPageModule) 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}
