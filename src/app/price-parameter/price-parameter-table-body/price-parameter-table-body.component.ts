import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetPeriodRange } from '../../price-parameter-store/price-parameter/price-parameter.actions';
import { getSelectPeriodType } from '../../price-parameter-store/price-parameter/price-parameter.selectors';

@Component({
  selector: 'app-price-parameter-table-body',
  templateUrl: './price-parameter-table-body.component.html',
  styleUrls: ['./price-parameter-table-body.component.scss'],
})
export class PriceParameterTableBodyComponent {
  @Input() hours!: number[];
  dates: string[] = [];
  @Select(getSelectPeriodType) valueType$!: Observable<string>;
  constructor(private store: Store) {
    this.store.dispatch(new SetPeriodRange());
    this.store
      .select((state) => state.priceParameterCreate.dates)
      .subscribe((dates) => {
        this.dates = dates;
      });
  }
}
