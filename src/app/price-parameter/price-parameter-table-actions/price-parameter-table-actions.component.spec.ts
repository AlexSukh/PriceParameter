import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableActionsComponent } from './price-parameter-table-actions.component';

describe('PriceParameterTableActionsComponent', () => {
  let component: PriceParameterTableActionsComponent;
  let fixture: ComponentFixture<PriceParameterTableActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
