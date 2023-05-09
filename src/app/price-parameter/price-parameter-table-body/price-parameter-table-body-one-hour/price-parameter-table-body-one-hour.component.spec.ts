import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableBodyOneHourComponent } from './price-parameter-table-body-one-hour.component';

describe('PriceParameterTableBodyOneHourComponent', () => {
  let component: PriceParameterTableBodyOneHourComponent;
  let fixture: ComponentFixture<PriceParameterTableBodyOneHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableBodyOneHourComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableBodyOneHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
