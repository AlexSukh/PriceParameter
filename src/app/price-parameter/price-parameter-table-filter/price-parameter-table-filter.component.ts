import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PriceParameterSetDates } from '../../price-parameter-store/price-parameter/price-parameter.actions';
import { Observable } from 'rxjs';
import {
  getSelectMonths,
  getSelectPeriodType,
} from '../../price-parameter-store/price-parameter/price-parameter.selectors';

@Component({
  selector: 'app-price-parameter-table-filter',
  templateUrl: './price-parameter-table-filter.component.html',
  styleUrls: ['./price-parameter-table-filter.component.scss'],
})
export class PriceParameterTableFilterComponent {
  @Select(getSelectPeriodType) valueType$!: Observable<string>;
  @Select(getSelectMonths) months$!: Observable<string>;

  form: FormGroup;
  currentPage: number = 1;
  dates: string[] = [];
  totalPages: number = 0;
  constructor(private store: Store, private fb: FormBuilder) {
    this.form = this.fb.group({
      periodFrom: '',
      periodTo: '',
      pageViewsNumber: 25,
      goToPage: 1,
    });

    this.form.valueChanges.subscribe((value) => {
      this.dates = this.generateDatesArray(value.periodFrom, value.periodTo);
      this.getCurrentPageSlice(this.currentPage);
    });

    this.form.get('goToPage')?.valueChanges.subscribe((value) => {
      this.currentPage = value;
    });
  }
  generateDatesArray(startDateUTC: string, endDateUTC: string): string[] {
    const datesArray: string[] = [];
    const startDate = new Date(startDateUTC);
    const endDate = new Date(endDateUTC);
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesArray.push(currentDate.toLocaleDateString('en-GB'));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesArray;
  }

  getCurrentPageSlice(currentPage: number) {
    let dateSlice = this.getPaginatedDates(
      this.dates,
      this.form.value.pageViewsNumber,
      currentPage,
    );
    this.totalPages = this.getTotalPages(
      this.dates.length,
      this.form.value.pageViewsNumber,
    );
    this.store.dispatch(new PriceParameterSetDates(dateSlice));
  }

  getPaginatedDates(
    dates: string[],
    pageSize: number,
    currentPage: number,
  ): string[] {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return dates.slice(startIndex, endIndex);
  }

  getTotalPages(totalItems: number, pageSize: number): number {
    return Math.ceil(totalItems / pageSize);
  }
}
