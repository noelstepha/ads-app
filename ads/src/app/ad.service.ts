import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ads } from './ads.model';

@Injectable()
export class AdService {
  apiUrl : string = "http://demo.joomprod.com/adsclarity/index.php?option=com_jmobapp&view=list";

  constructor(private http: HttpClient) { }

  getAds () : Observable<Ads> {
    return this.http.get<Ads>(this.apiUrl);
  }

}
