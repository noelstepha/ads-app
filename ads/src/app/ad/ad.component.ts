import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ad } from './ad.model';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  ad : Ad;
  imgSrc : string = null;

  constructor(private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { ad: Ad }) => {
      this.ad = data.ad;
      if (this.ad.images.length > 0) {
        let imageName = this.ad.images[0].image;
        this.imgSrc = 'http://demo.joomprod.com/adsclarity/images/com_adsmanager/contents/'+imageName;
      }
    });
  }

  onClickOkBtn () : void {
    this.router.navigate(['/ads']);
  }

}
