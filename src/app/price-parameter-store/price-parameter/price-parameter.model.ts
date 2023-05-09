import { CreatePriceParameter } from 'price-parameter-connect/model/createPriceParameter';
import { EditPriceParameter } from 'price-parameter-connect/model/editPriceParameter';
import { GetPriceParameter } from 'price-parameter-connect/model/getPriceParameter';

export interface PriceParameterStateModel {
  creating: boolean;
  inputForm: {
    model: {
      name: string;
      periodType: string;
      timeZone: string;
    };
    dirty: boolean;
    status: string;
    errors: object;
  };
  timeZones: string[];
  currentPriceParameterName: string;
  currentPriceParameterVersion: number;
  availableVersions: string[];
  currentPriceParameterId: number | null;
  mode: 'create' | 'edit' | 'preview';
  currentTypeSaved: boolean;
  dates: string[];
  currentDateSlice: string[];
  months: string[];
  hours: number[];
  inputValues: { [key: string]: number };
  createPriceParameter: CreatePriceParameter;
  editPriceParameter: EditPriceParameter;
  periodRange: { periodFrom?: string; periodTo?: string };
  priceParameterPreview: GetPriceParameter;
  currentPageNumber: number;
  goToPageNumber: number;
  filterForm: {
    model: {
      periodFrom: string;
      periodTo: string;
      pageViewsNumber: number;
      goToPage: number;
    };
    dirty: boolean;
    status: string;
    errors: object;
  };
}
