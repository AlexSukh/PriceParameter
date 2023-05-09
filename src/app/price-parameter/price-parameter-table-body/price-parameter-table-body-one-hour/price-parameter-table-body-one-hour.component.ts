import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CreatePriceParameterPriceParameterDetailsInner } from 'price-parameter-connect/model/createPriceParameterPriceParameterDetailsInner';
import { PriceParameterSetInputValues } from '../../../price-parameter-store/price-parameter/price-parameter.actions';
import { getSelectInputValues } from '../../../price-parameter-store/price-parameter/price-parameter.selectors';
import { PriceParameterTableBodyBase } from '../PriceParameterTableBodyBase';

@Component({
  selector: 'app-price-parameter-table-body-one-hour',
  templateUrl: './price-parameter-table-body-one-hour.component.html',
  styleUrls: ['./price-parameter-table-body-one-hour.component.scss'],
})
export class PriceParameterTableBodyOneHourComponent extends PriceParameterTableBodyBase {
  @Input() hours!: number[];
  @Input() dates: string[] = [];
  @Select(getSelectInputValues) inputValues$!: Observable<{
    [key: string]: number;
  }>; // Object to store input values
  enableEdit: { [key: string]: boolean } = {};
  priceParameterDetails?: Array<CreatePriceParameterPriceParameterDetailsInner> =
    [];

  constructor(private store: Store) {
    super();
  }
  onInputChange(key: string, event: any): void {
    const value = event.target?.value;
    this.store.dispatch(new PriceParameterSetInputValues(key, value));
  }
}
