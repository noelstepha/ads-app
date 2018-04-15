import { AppComponent } from "./app.component";
import { Routes } from '@angular/router';
import { AdComponent } from './ad/ad.component';
import { AdsComponent } from "./ads/ads.component";
import { AdsResolver } from "./ads/ads.resolver";
import { AdResolver } from "./ad/ad.resolver";

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
        component: AdComponent,
        resolve: {
            ad: AdResolver
        }
    },
    {
        path: '',
        redirectTo: '/ads',
        pathMatch: 'full'
    }
];