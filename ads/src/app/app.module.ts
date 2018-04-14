import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdComponent } from './ad/ad.component';
import { AdService } from './ad.service';


@NgModule({
  declarations: [
    AppComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
