import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableBodyComponent } from './price-parameter-table-body.component';

describe('PriceParameterTableBodyComponent', () => {
  let component: PriceParameterTableBodyComponent;
  let fixture: ComponentFixture<PriceParameterTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
