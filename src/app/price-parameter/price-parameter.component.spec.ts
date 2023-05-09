import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterComponent } from './price-parameter.component';

describe('PriceParameterComponent', () => {
  let component: PriceParameterComponent;
  let fixture: ComponentFixture<PriceParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
