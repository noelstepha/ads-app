import { TestBed, inject } from '@angular/core/testing';

import { AdService } from './ad.service';
import { Ads } from './ads.model';

describe('AdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdService]
    });
  });

  it('should be created', inject([AdService], (service: AdService) => {
    expect(service).toBeTruthy();
  }));

  it('#getAds should return ads from api', inject([AdService], (service: AdService) => {
    service.getAds().forEach(ads => {
      expect(ads).toBeTruthy('The ads should be returned');
      expect(ads.contents.length).toBeGreaterThan(0, 'It should return a list of ads.');
    });
  }));
});
