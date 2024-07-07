import { type DirectionOptions } from "@constants/directionOptions";
import { type TypeItemTimeseries } from "@src/types";

export interface TypeParamsTimeseries {
  from: string;
  to: string;
  start: string;
  end: string;
}
export interface PropsTimeline {
  dataTimeseries: TypeItemTimeseries[] | undefined;
  paramsTimeseries: TypeParamsTimeseries;
  loading: boolean;
  fetchTimeseries: (params: TypeParamsTimeseries) => void;
}

export interface PropsTimelineBtnCreate {
  dataTimeseries: TypeItemTimeseries[] | undefined;
  paramsTimeseries: TypeParamsTimeseries;
  theme: string;
  fetchTimeseries: (params: TypeParamsTimeseries) => void;
}

export interface PropsSelectCurrency {
  paramsTimeseries: TypeParamsTimeseries;
  loading: boolean;
  theme: string;
  type: DirectionOptions.FROM | DirectionOptions.TO;
  changeParamsTimeseriesFrom: (value: string) => void;
  changeParamsTimeseriesTo: (value: string) => void;
}

export interface PropsTimeseriesFilters {
  theme: string;
}

export interface PropsInputDate {
  paramsTimeseries: TypeParamsTimeseries;
  theme: string;
  loading: boolean;
  type: DirectionOptions.START | DirectionOptions.END;
  changeParamsTimeseriesStart: (value: string) => void;
  changeParamsTimeseriesEnd: (value: string) => void;
}

export interface PropsTimeseriesGraph {
  dataTimeseries: TypeItemTimeseries[] | undefined;
  theme: string;
}
