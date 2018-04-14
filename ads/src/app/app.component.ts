import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { Ads } from './ads.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads : Ads;

  constructor(private adService : AdService) {}
  
  ngOnInit() {
      this.adService.getAds().subscribe((ads : Ads) => {
        this.ads = ads;
      });
  }
}
