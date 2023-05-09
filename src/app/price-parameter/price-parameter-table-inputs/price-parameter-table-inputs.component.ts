import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { messages } from '../../messages';
import {
  getCurrentTypeSaved,
  getMode,
  getSelectPeriodType,
} from '../../price-parameter-store/price-parameter/price-parameter.selectors';

@Component({
  selector: 'app-price-parameter-table-inputs',
  templateUrl: './price-parameter-table-inputs.component.html',
  styleUrls: ['./price-parameter-table-inputs.component.scss'],
})
export class PriceParameterTableInputsComponent {
  form: FormGroup;
  valueTypeOptions = [
    { key: 'FIFTEEN_MINUTES', label: 'Value for 15 minutes' },
    {
      key: 'ONE_HOUR',
      label: 'Value for 1 hour',
    },
    { key: 'ONE_DAY', label: 'Value for 1 day' },
    { key: 'ONE_MONTH', label: 'Value for 1 month' },
  ];
  timeZones = ['EET', 'CET'];
  ignoreWarning: boolean = false;
  @Select(getSelectPeriodType) valueType$!: Observable<string>;
  @Select(getMode) mode$!: Observable<string>;
  @Select(getCurrentTypeSaved)
  currentTypeSaved$!: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private modalService: NzModalService,
  ) {
    this.form = this.fb.group({
      name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1024),
          this.trimValidator,
        ],
      }),
      periodType: ['', Validators.required],
      timeZone: ['', Validators.required],
    });
  }

  trimValidator(control: any) {
    const value = control.value;
    if (value && value.trim() === '') {
      return { required: true };
    }
    return null;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form?.controls[fieldName];
    return field?.invalid && (field?.touched || field?.dirty);
  }

  displayWarning(event: Event) {
    if (this.ignoreWarning) return;
    event.preventDefault();
    event.stopPropagation();
    this.currentTypeSaved$.subscribe((saved) => {
      if (!saved) {
        this.modalService.warning({
          nzTitle: 'Warning',
          nzContent: messages.proceedUnsaved,
          nzOnOk: () => {
            this.ignoreWarning = true;
          },
          nzOnCancel: () => {},
        });
      }
    });
  }
}
