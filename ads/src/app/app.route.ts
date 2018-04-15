import { AppComponent } from "./app.component";
import { Routes } from '@angular/router';
import { AdComponent } from './ad/ad.component';
import { AdsComponent } from "./ads/ads.component";
import { AdsResolver } from "./ads/ads.resolver";

export const appRoutes: Routes = [
    {
        path: 'ads',
        component: AdsComponent,
        resolve: {
            ads: AdsResolver
        }
    },
    {
        path: 'ad/:id',
        component: AdComponent
    },
    {
        path: '',
        redirectTo: '/ads',
        pathMatch: 'full'
    }
];