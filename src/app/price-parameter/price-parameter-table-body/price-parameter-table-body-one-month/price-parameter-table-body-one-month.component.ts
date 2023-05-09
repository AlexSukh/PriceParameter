import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PriceParameterSetInputValues } from '../../../price-parameter-store/price-parameter/price-parameter.actions';
import {
  getSelectInputValues,
  getSelectMonths,
} from '../../../price-parameter-store/price-parameter/price-parameter.selectors';
import { PriceParameterTableBodyBase } from '../PriceParameterTableBodyBase';

@Component({
  selector: 'app-price-parameter-table-body-one-month',
  templateUrl: './price-parameter-table-body-one-month.component.html',
  styleUrls: ['./price-parameter-table-body-one-month.component.scss'],
})
export class PriceParameterTableBodyOneMonthComponent extends PriceParameterTableBodyBase {
  @Select(getSelectMonths) months$!: Observable<string[]>;
  @Input() hours!: number[];
  @Input() dates: string[] = [];
  @Select(getSelectInputValues) inputValues$!: Observable<{
    [key: string]: number;
  }>;
  enableEdit: { [key: string]: boolean } = {};

  constructor(private store: Store) {
    super();
  }
  onInputChange(key: string, event: any): void {
    const value = event.target?.value;
    this.store.dispatch(new PriceParameterSetInputValues(key, value));
  }
}
