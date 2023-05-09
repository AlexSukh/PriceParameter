import { NgxsConfig } from '@ngxs/store/src/symbols';
import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin/src/symbols';
import { NgxsLoggerPluginOptions } from '@ngxs/logger-plugin/src/symbols';
import { PriceParameterState } from './price-parameter/price-parameter.state';

export const STATES_MODULES = [PriceParameterState];

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  developmentMode: true,
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  disabled: false,
};

export const LOGGER_CONFIG: NgxsLoggerPluginOptions = {
  disabled: false,
};
