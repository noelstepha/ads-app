import { AdService } from "./../ads/ad.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Ads } from "./../ads/ads.model";
import { Ad } from "./ad.model";
import { map } from "rxjs/operators";

@Injectable()
export class AdResolver implements Resolve<Ad> {
  constructor(private adService: AdService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Ad> {
    let id = parseInt(route.paramMap.get('id'));

    return this.adService.getAds()
        .pipe(map((ads :Ads) => ads.contents.find((ad : Ad) => ad.id == id)));
  }
}