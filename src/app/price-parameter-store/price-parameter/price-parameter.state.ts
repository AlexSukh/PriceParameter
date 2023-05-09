import { Action, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DefaultService } from 'price-parameter-connect';
import { GetPriceParameter } from 'price-parameter-connect/model/getPriceParameter';
import { ResetForm, UpdateFormValue } from '@ngxs/form-plugin';
import { Navigate } from '@ngxs/router-plugin';

import {
  PriceParameterCancel,
  PriceParameterChangeMode,
  PriceParameterCreate,
  PriceParameterEdit,
  PriceParameterFetch,
  PriceParameterSetCurrentTypeSaved,
  PriceParameterSetDates,
  PriceParameterSetInputValues,
  SetPeriodRange,
} from './price-parameter.actions';
import { priceParameterDefaults } from './price-parameter.defaults';
import { PriceParameterStateModel } from './price-parameter.model';
import { messages } from '../../messages';
import { EditPriceParameter } from 'price-parameter-connect/model/editPriceParameter';
import { CreatePriceParameterPriceParameterDetailsInner } from 'price-parameter-connect/model/createPriceParameterPriceParameterDetailsInner';

@State<PriceParameterStateModel>({
  name: 'priceParameterCreate',
  defaults: priceParameterDefaults,
})
@Injectable()
export class PriceParameterState {
  constructor(
    private readonly store: Store,
    private readonly service: DefaultService,
    private readonly modalService: NzModalService,
  ) {}

  @Action(PriceParameterChangeMode)
  priceParameterChangeMode(
    ctx: StateContext<PriceParameterStateModel>,
    action: PriceParameterChangeMode,
  ) {
    ctx.patchState({ mode: action.mode });
  }
  @Action(PriceParameterCreate)
  priceParameterCreate(ctx: StateContext<PriceParameterStateModel>) {
    const state = ctx.getState();
    if (state.inputForm.status === 'VALID') {
      this.savePriceParameter(state, ctx);
    } else {
      this.handleInvalidInputs();
    }
  }

  @Action(PriceParameterEdit)
  priceParameterEdit(
    ctx: StateContext<PriceParameterStateModel>,
    action: PriceParameterEdit,
  ) {
    const state = ctx.getState();
    let updatePriceParameters: EditPriceParameter = {
      name: state.inputForm.model.name,
      periodType: state.inputForm.model.periodType,
      priceParameterDetails: this.inputValuesToCreateParameters(
        state.inputValues,
      ),
      newVersion: action.editType === 'newVersion',
    };
    ctx.patchState({ creating: true });
    this.service
      .priceParameterIdPut(action.id, updatePriceParameters)
      .subscribe(() => {
        ctx.patchState({ creating: false });
        this.store.dispatch(new Navigate(['/price-parameter/preview/1110']));
      });
  }

  @Action(PriceParameterFetch)
  priceParameterFetch(
    ctx: StateContext<PriceParameterStateModel>,
    action: PriceParameterFetch,
  ) {
    this.getPriceParameter(+action.id, ctx);
  }

  @Action(PriceParameterCancel)
  priceParameterCancel(ctx: StateContext<PriceParameterStateModel>) {
    this.modalService.confirm({
      nzTitle: 'Cancel',
      nzContent: messages.cancel,
      nzOkText: 'Yes',
      nzCancelText: 'No',
      nzOnOk: () => {
        this.store.dispatch(
          new ResetForm({
            path: 'priceParameterCreate.inputForm',
            value: {
              periodType: 'FIFTEEN_MINUTES',
            },
          }),
        );
        ctx.patchState({ inputValues: {} });
      },
      nzOnCancel: () => {},
    });
  }

  @Action(SetPeriodRange)
  setPeriodRange() {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1);
    const lastMonthYearAgo = new Date(
      today.getFullYear() - 1,
      today.getMonth() - 1,
    );
    const firstDayLastMonthYearAgo = new Date(
      lastMonthYearAgo.getFullYear(),
      lastMonthYearAgo.getMonth(),
      1,
    );
    const lastDayLastMonth = new Date(
      lastMonth.getFullYear(),
      lastMonth.getMonth() + 1,
      0,
    );

    this.store.dispatch(
      new UpdateFormValue({
        value: {
          periodFrom: firstDayLastMonthYearAgo.toISOString(),
          periodTo: lastDayLastMonth.toISOString(),
        },
        path: 'priceParameterCreate.filterForm',
      }),
    );
  }

  @Action(PriceParameterSetDates)
  priceParameterSetDates(
    ctx: StateContext<PriceParameterStateModel>,
    action: PriceParameterSetDates,
  ) {
    const state = ctx.getState(); // Get the current state

    ctx.patchState({ dates: action.payload });
    ctx.patchState({
      months: this.generateMonthsArray(
        state.filterForm.model.periodFrom,
        state.filterForm.model.periodTo,
      ),
    });
  }

  @Action(PriceParameterSetCurrentTypeSaved)
  priceParameterSetCurrentTypeSaved(
    ctx: StateContext<PriceParameterStateModel>,
    action: PriceParameterSetCurrentTypeSaved,
  ) {
    ctx.patchState({ currentTypeSaved: action.payload });
  }

  @Action(PriceParameterSetInputValues)
  priceParameterSetInputValues(
    ctx: StateContext<PriceParameterStateModel>,
    action: PriceParameterSetInputValues,
  ) {
    const currentState = ctx.getState();
    const updatedInputValues = {
      ...currentState.inputValues,
      [action.key]: action.value,
    };
    ctx.patchState({ inputValues: updatedInputValues });
  }
  private savePriceParameter(
    state: PriceParameterStateModel,
    ctx: StateContext<PriceParameterStateModel>,
  ) {
    let createPriceParameters = {
      name: state.inputForm.model.name,
      periodType: state.inputForm.model.periodType,
      timeZone: state.inputForm.model.timeZone,
      priceParameterDetails: this.inputValuesToCreateParameters(
        state.inputValues,
      ),
    };

    ctx.patchState({ creating: true });
    this.service.priceParameterPost(createPriceParameters).subscribe(() => {
      this.store
        .dispatch(new Navigate(['/price-parameter/edit/1110']))
        .subscribe(() => {
          ctx.patchState({ mode: 'edit' });
          ctx.patchState({ creating: false });
        });
    });
  }

  private handleInvalidInputs() {
    this.modalService.warning({
      nzTitle: 'Invalid Form',
      nzContent: messages.invalidForm,
      nzOkText: 'OK',
    });
  }

  private getPriceParameter(
    id: number,
    ctx: StateContext<PriceParameterStateModel>,
  ) {
    this.service
      .priceParameterIdGet(id)
      .subscribe((response: GetPriceParameter) => {
        let inputValues: { [key: string]: number } = {};
        response.priceParameterDetailInfos?.forEach((priceParameterDetails) => {
          let date = priceParameterDetails.periodFrom! + '.000Z';
          inputValues[date] = priceParameterDetails.price!;
        });
        ctx.patchState({
          inputValues,
          currentPriceParameterName: response.priceParameterPreviewDisplayName,
          currentPriceParameterVersion: response.version,
          availableVersions: response.priceParameterDetailsVersionInfos?.map(
            (v) => v.priceParameterPreviewDisplayName,
          ),
        });

        this.store.dispatch(
          new UpdateFormValue({
            value: {
              name: response.name,
              timezone: response.timeZone,
              periodType: response.periodType,
            },
            path: 'priceParameterCreate.inputForm',
          }),
        );
      });
  }
  private generateMonthsArray(
    startDateUTC: string,
    endDateUTC: string,
  ): string[] {
    const monthsArray: string[] = [];
    const startDate = new Date(startDateUTC);
    startDate.setHours(4);
    const endDate = new Date(endDateUTC);
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
      const year = String(currentDate.getUTCFullYear());
      const monthYearString = `01/${month}/${year}`;

      if (!monthsArray.includes(monthYearString)) {
        monthsArray.push(monthYearString);
      }
      currentDate.setUTCMonth(currentDate.getUTCMonth() + 1);
    }

    return monthsArray;
  }

  private inputValuesToCreateParameters(inputValues: {
    [key: string]: number;
  }): CreatePriceParameterPriceParameterDetailsInner[] {
    let priceParameterDetails = [];
    for (const key in inputValues) {
      if (inputValues.hasOwnProperty(key)) {
        const periodFrom = key;
        const price = inputValues[key];
        priceParameterDetails?.push({ periodFrom, price, shiftedHour: false });
      }
    }

    return priceParameterDetails;
  }
}
