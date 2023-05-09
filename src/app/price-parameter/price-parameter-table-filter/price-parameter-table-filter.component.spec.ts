import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableFilterComponent } from './price-parameter-table-filter.component';

describe('PriceParameterTableFilterComponent', () => {
  let component: PriceParameterTableFilterComponent;
  let fixture: ComponentFixture<PriceParameterTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
