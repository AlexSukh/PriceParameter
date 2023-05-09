import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import {
  PriceParameterChangeMode,
  PriceParameterFetch,
} from '../price-parameter-store/price-parameter/price-parameter.actions';
import { getHours } from '../price-parameter-store/price-parameter/price-parameter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-price-parameter',
  templateUrl: './price-parameter.component.html',
  styleUrls: ['./price-parameter.component.scss'],
})
export class PriceParameterComponent implements OnInit {
  @Select(getHours) hours$!: Observable<number[]>;

  constructor(private route: ActivatedRoute, private store: Store) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.store.dispatch(new PriceParameterFetch(id)).subscribe(() => {
          this.store.dispatch(new PriceParameterChangeMode('edit'));
        });
        this.route.url.subscribe((url) => {
          if (url[1].path === 'preview') {
            this.store.dispatch(new PriceParameterChangeMode('preview'));
          }
        });
      }
    });
  }
}
