import { TestBed } from '@angular/core/testing';

import { AttendanceBarcart.ServiceService } from './attendance-barcart.service.service';

describe('AttendanceBarcart.ServiceService', () => {
  let service: AttendanceBarcart.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceBarcart.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
