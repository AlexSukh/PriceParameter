export class PriceParameterCreate {
  static readonly type = '[PriceParameter] Create';
  constructor() {}
}

export class PriceParameterChangeMode {
  static readonly type = '[PriceParameter] Change Mode';
  constructor(public mode: 'create' | 'edit' | 'preview') {}
}

export class PriceParameterEdit {
  static readonly type = '[PriceParameter] Edit';
  constructor(public editType: 'newVersion' | 'update', public id: number) {}
}

export class PriceParameterFetch {
  static readonly type = '[PriceParameter] Fetch';
  constructor(public id: string) {}
}

export class SetPeriodRange {
  static readonly type = '[PriceParameter] Set Period Range';
}

export class PriceParameterSetDates {
  static readonly type = '[PriceParameter] Set Dates';
  constructor(public payload: any) {}
}

export class PriceParameterSetCurrentTypeSaved {
  static readonly type = '[PriceParameter] Set Current type save';
  constructor(public payload: boolean) {}
}

export class PriceParameterSetInputValues {
  static readonly type = '[PriceParameter] Set current input values';
  constructor(public key: string, public value: number) {}
}

export class PriceParameterCancel {
  static readonly type = '[PriceParameter] Cancel';
  constructor() {}
}
