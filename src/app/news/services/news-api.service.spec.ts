import { TestBed } from '@angular/core/testing';

import { NewsApiService } from './news-api.service';

describe('NewsApiServiceService', () => {
  let service: NewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
