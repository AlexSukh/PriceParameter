import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceParameterTableTitleComponent } from './price-parameter-table-title.component';

describe('PriceParameterTableTitleComponent', () => {
  let component: PriceParameterTableTitleComponent;
  let fixture: ComponentFixture<PriceParameterTableTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceParameterTableTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceParameterTableTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
