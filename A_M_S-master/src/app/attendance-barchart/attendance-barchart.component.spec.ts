import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceBarchartComponent } from './attendance-barchart.component';

describe('AttendanceBarchartComponent', () => {
  let component: AttendanceBarchartComponent;
  let fixture: ComponentFixture<AttendanceBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceBarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
