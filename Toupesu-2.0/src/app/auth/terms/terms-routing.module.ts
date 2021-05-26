import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsPage } from './terms.page';

const routes: Routes = [
    {
        path: '',
        component: TermsPage
    },
    {
        path: 'about',
        loadChildren: () => import('./terms-about/terms-about.module').then(m => m.TermsAboutPageModule) 
    },
    {
        path: 'terms-conditions',
        loadChildren: () => import('./terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'delivery-policy',
        loadChildren: () => import('./delivery-policy/delivery-policy.module').then(m => m.DeliveryPolicyPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'cancellation',
        loadChildren: () => import('./cancellation/cancellation.module').then(m => m.CancellationPageModule)
    },
    {
        path: 'country-home',
        loadChildren: () => import('./country-home/country-home.module').then(m => m.CountryHomePageModule)
    },
  {     path: 'terms-about', 
        loadChildren: () => import('./terms-about/terms-about.module').then(m => m.TermsAboutPageModule) 
  }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TermsRoutingModule {

}
