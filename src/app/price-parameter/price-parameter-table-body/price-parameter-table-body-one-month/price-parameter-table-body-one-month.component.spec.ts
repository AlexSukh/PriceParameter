import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableBodyOneMonthComponent } from './price-parameter-table-body-one-month.component';

describe('PriceParameterTableBodyOneMonthComponent', () => {
  let component: PriceParameterTableBodyOneMonthComponent;
  let fixture: ComponentFixture<PriceParameterTableBodyOneMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableBodyOneMonthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableBodyOneMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
