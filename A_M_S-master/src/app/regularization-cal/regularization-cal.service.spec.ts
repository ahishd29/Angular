import { TestBed } from '@angular/core/testing';

import { RegularizationCalService } from './regularization-cal.service';

describe('RegularizationCalService', () => {
  let service: RegularizationCalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegularizationCalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
