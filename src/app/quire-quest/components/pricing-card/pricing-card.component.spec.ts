import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardComponent } from './pricing-card.component';

describe('PricingCardComponent', () => {
  let component: PricingCardComponent;
  let fixture: ComponentFixture<PricingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingCardComponent]
    });
    fixture = TestBed.createComponent(PricingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
