import { createSelector } from '@ngxs/store';
import { PriceParameterState } from './price-parameter.state';
import { PriceParameterStateModel } from './price-parameter.model'; // Assuming PriceParameterState is the state class

export const getMode = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.mode,
);

export const getLoading = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.creating,
);

export const getCurrentPriceParameterName = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.currentPriceParameterName,
);

export const getAvailableVersions = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.availableVersions,
);

export const getCurrentTypeSaved = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.currentTypeSaved,
);

export const getSelectPeriodType = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.inputForm.model.periodType,
);

export const getSelectMonths = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.months,
);

export const getSelectInputValues = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.inputValues,
);

export const getHours = createSelector(
  [PriceParameterState],
  (state: PriceParameterStateModel) => state.hours,
);
