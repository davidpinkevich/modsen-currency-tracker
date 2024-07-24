import { type ChangeEvent, Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { DATE_INFO, DirectionOptions } from "@constants/index";
import { ThemeMode } from "@constants/themeMode";
import { getCurrentDate } from "@utils/helpers/getDate";
import {
  changeParamsTimeseriesEnd,
  changeParamsTimeseriesStart
} from "@redux/slices/sliceTracker";
import { type AppDispatch, type RootState } from "@redux/store";
import { type PropsInputDate } from "@src/types";

import styles from "./styles.module.scss";

class DateInput extends Component<PropsInputDate> {
  min = DATE_INFO.MIN;
  max = getCurrentDate();

  handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { type, changeParamsTimeseriesEnd, changeParamsTimeseriesStart } =
      this.props;

    const newDate = event.target.value;

    if (type === DirectionOptions.START) {
      changeParamsTimeseriesStart(newDate);
    } else {
      changeParamsTimeseriesEnd(newDate);
    }
  };

  render() {
    const { paramsTimeseries, type, theme, loading } = this.props;

    const classDateInput =
      theme === ThemeMode.DARK
        ? styles.date
        : classNames(styles.date, styles.date_white);

    return (
      <div className={classDateInput}>
        <h2>{type === DirectionOptions.START ? "Start" : "End"} period:</h2>
        <input
          disabled={loading}
          type="date"
          value={paramsTimeseries[type]}
          onChange={this.handleDateChange}
          min={this.min}
          max={this.max}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ sliceTracker, sliceMemory }: RootState) => ({
  paramsTimeseries: sliceTracker.paramsTimeseries,
  loading: sliceTracker.loading,
  theme: sliceMemory.theme
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeParamsTimeseriesStart: (value: string) =>
    dispatch(changeParamsTimeseriesStart(value)),
  changeParamsTimeseriesEnd: (value: string) =>
    dispatch(changeParamsTimeseriesEnd(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(DateInput);
