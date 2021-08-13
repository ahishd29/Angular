import { TestBed } from '@angular/core/testing';

import { AttendanceBarchartService } from './attendance-barchart.service';

describe('AttendanceBarchartService', () => {
  let service: AttendanceBarchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceBarchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
