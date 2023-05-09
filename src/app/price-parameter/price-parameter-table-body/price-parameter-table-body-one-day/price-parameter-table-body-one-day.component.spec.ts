import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableBodyOneDayComponent } from './price-parameter-table-body-one-day.component';

describe('PriceParameterTableBodyOneDayComponent', () => {
  let component: PriceParameterTableBodyOneDayComponent;
  let fixture: ComponentFixture<PriceParameterTableBodyOneDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableBodyOneDayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableBodyOneDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
