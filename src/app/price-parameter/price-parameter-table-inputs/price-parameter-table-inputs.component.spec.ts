import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableInputsComponent } from './price-parameter-table-inputs.component';

describe('PriceParameterTableInputsComponent', () => {
  let component: PriceParameterTableInputsComponent;
  let fixture: ComponentFixture<PriceParameterTableInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableInputsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
