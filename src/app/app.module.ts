import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, BASE_PATH } from 'price-parameter-connect';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PriceParameterComponent } from './price-parameter/price-parameter.component';
import { PriceParameterTableTitleComponent } from './price-parameter/price-parameter-table-title/price-parameter-table-title.component';
import { PriceParameterTableInputsComponent } from './price-parameter/price-parameter-table-inputs/price-parameter-table-inputs.component';
import { PriceParameterTableBodyComponent } from './price-parameter/price-parameter-table-body/price-parameter-table-body.component';
import { PriceParameterTableFilterComponent } from './price-parameter/price-parameter-table-filter/price-parameter-table-filter.component';
import { PriceParameterTableActionsComponent } from './price-parameter/price-parameter-table-actions/price-parameter-table-actions.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { PriceParameterTableBodyFifteenMinutesComponent } from './price-parameter/price-parameter-table-body/price-parameter-table-body-fifteen-minutes/price-parameter-table-body-fifteen-minutes.component';
import { PriceParameterTableBodyOneHourComponent } from './price-parameter/price-parameter-table-body/price-parameter-table-body-one-hour/price-parameter-table-body-one-hour.component';
import { PriceParameterTableBodyOneDayComponent } from './price-parameter/price-parameter-table-body/price-parameter-table-body-one-day/price-parameter-table-body-one-day.component';
import { PriceParameterTableBodyOneMonthComponent } from './price-parameter/price-parameter-table-body/price-parameter-table-body-one-month/price-parameter-table-body-one-month.component';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { PriceParameterStoreModule } from './price-parameter-store/price-parameter-store.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PriceParameterComponent,
    PriceParameterTableTitleComponent,
    PriceParameterTableInputsComponent,
    PriceParameterTableBodyComponent,
    PriceParameterTableFilterComponent,
    PriceParameterTableActionsComponent,
    PriceParameterTableBodyFifteenMinutesComponent,
    PriceParameterTableBodyOneHourComponent,
    PriceParameterTableBodyOneDayComponent,
    PriceParameterTableBodyOneMonthComponent,
  ],
  imports: [
    PriceParameterStoreModule,
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ApiModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    NzDatePickerModule,
    NzIconModule,
    NzModalModule,
    NzSpinModule,
  ],
  providers: [
    {
      provide: BASE_PATH,
      useValue:
        'https://virtserver.swaggerhub.com/Alex-600/create-price_parameter/1.0.0-oas3-oas3.1',
    },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
