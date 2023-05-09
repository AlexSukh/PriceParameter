import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableBodyFifteenMinutesComponent } from './price-parameter-table-body-fifteen-minutes.component';

describe('PriceParameterTableBodyFifteenMinutesComponent', () => {
  let component: PriceParameterTableBodyFifteenMinutesComponent;
  let fixture: ComponentFixture<PriceParameterTableBodyFifteenMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableBodyFifteenMinutesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PriceParameterTableBodyFifteenMinutesComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
