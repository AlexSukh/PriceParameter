import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { getCurrentPriceParameterName } from '../../price-parameter-store/price-parameter/price-parameter.selectors';

@Component({
  selector: 'app-price-parameter-table-title',
  templateUrl: './price-parameter-table-title.component.html',
  styleUrls: ['./price-parameter-table-title.component.scss'],
})
export class PriceParameterTableTitleComponent {
  @Select(getCurrentPriceParameterName)
  priceParameterDisplayName$!: Observable<string>;
  constructor() {}
}
