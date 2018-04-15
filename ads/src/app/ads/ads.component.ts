import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { Ads } from './ads.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Ad } from '../ad/ad.model';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads : Ads;

  constructor(private route: ActivatedRoute,
              private router : Router) {}
  
  ngOnInit() {
    this.route.data
      .subscribe((data: { ads: Ads }) => {
        this.ads = data.ads;
      });
  }

  onClickAd(ad : Ad) : void {
    this.router.navigate(['/ad/' + ad.id]);
  }

}
