import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { Ads } from './ads.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads : Ads;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.data
      .subscribe((data: { ads: Ads }) => {
        this.ads = data.ads;
      });
  }

}
