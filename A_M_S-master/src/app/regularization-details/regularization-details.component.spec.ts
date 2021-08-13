import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularizationDetailsComponent } from './regularization-details.component';

describe('RegularizationDetailsComponent', () => {
  let component: RegularizationDetailsComponent;
  let fixture: ComponentFixture<RegularizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularizationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
