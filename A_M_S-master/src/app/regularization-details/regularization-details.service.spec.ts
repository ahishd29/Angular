import { TestBed } from '@angular/core/testing';

import { RegularizationDetailsService } from './regularization-details.service';

describe('RegularizationDetailsService', () => {
  let service: RegularizationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegularizationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
