import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdComponent } from './ad/ad.component';
import { AdService } from './ads/ad.service';
import { appRoutes } from './app.route';
import { AdsComponent } from './ads/ads.component';
import { AdsResolver } from './ads/ads.resolver';



@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatCardModule
  ],
  providers: [
    AdService,
    AdsResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
