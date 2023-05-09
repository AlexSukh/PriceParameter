import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  PriceParameterCancel,
  PriceParameterCreate,
  PriceParameterEdit,
} from '../../price-parameter-store/price-parameter/price-parameter.actions';
import { Observable } from 'rxjs';
import {
  getAvailableVersions,
  getLoading,
  getMode,
} from '../../price-parameter-store/price-parameter/price-parameter.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price-parameter-table-actions',
  templateUrl: './price-parameter-table-actions.component.html',
  styleUrls: ['./price-parameter-table-actions.component.scss'],
})
export class PriceParameterTableActionsComponent implements OnInit {
  @Select(getLoading) loading$!: Observable<string>;
  @Select(getAvailableVersions) versions$!: Observable<string[]>;
  mode: string = '';
  priceParameterId: string = '';
  constructor(private store: Store, private route: ActivatedRoute) {
    this.store.select(getMode).subscribe((mode) => (this.mode = mode));
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.priceParameterId = id;
      }
    });
  }
  createPriceParameter() {
    if (this.mode === 'create') this.store.dispatch(new PriceParameterCreate());
    if (this.mode === 'edit')
      this.store.dispatch(
        new PriceParameterEdit('newVersion', +this.priceParameterId),
      );
  }

  updateVersion() {
    this.store.dispatch(
      new PriceParameterEdit('update', +this.priceParameterId),
    );
  }

  onCancel() {
    this.store.dispatch(new PriceParameterCancel());
  }
}
