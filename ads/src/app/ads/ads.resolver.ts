import { AdService } from "./ad.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Ads } from "./ads.model";

@Injectable()
export class AdsResolver implements Resolve<Ads> {
  constructor(private adService: AdService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Ads> {
    return this.adService.getAds();
  }
}