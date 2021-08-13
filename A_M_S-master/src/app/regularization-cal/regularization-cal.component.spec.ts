import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularizationCalComponent } from './regularization-cal.component';

describe('RegularizationCalComponent', () => {
  let component: RegularizationCalComponent;
  let fixture: ComponentFixture<RegularizationCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularizationCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularizationCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
