interface IndicatorModel {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}

export interface IndicatorsModel {
  version: string;
  autor: string;
  fecha: string;
  uf: IndicatorModel;
  ivp: IndicatorModel;
  dolar: IndicatorModel;
  dolar_intercambio: IndicatorModel;
  euro: IndicatorModel;
  ipc: IndicatorModel;
  utm: IndicatorModel;
  imacec: IndicatorModel;
  tpm: IndicatorModel;
  libra_cobre: IndicatorModel;
  tasa_desempleo: IndicatorModel;
  bitcoin: IndicatorModel;
}
