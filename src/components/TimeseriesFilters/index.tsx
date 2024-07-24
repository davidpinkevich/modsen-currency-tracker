import { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { DirectionOptions } from "@constants/directionOptions";
import { ThemeMode } from "@constants/themeMode";
import { isDateInRange } from "@utils/helpers/isDateInRange";
import { type RootState } from "@redux/store";
import { type PropsTimeseriesFilters } from "@src/types";

import ButtonCreate from "./ButtonCreate/ButtonCreate";
import DateInput from "./DateInput";
import SelectCurrency from "./SelectCurrency";

import styles from "./styles.module.scss";

class TimeseriesFilters extends Component<PropsTimeseriesFilters> {
  render() {
    const { paramsTimeseries, dataTimeseries, theme } = this.props;

    const classTimeseriesFilters =
      theme === ThemeMode.DARK
        ? styles.filters
        : classNames(styles.filters, styles.filters_white);

    const classWarning =
      theme === ThemeMode.DARK
        ? styles.warning
        : classNames(styles.warning, styles.warning_white);

    return (
      <div className={classTimeseriesFilters}>
        <h2>Select the exchange rate to another:</h2>
        <div className={styles.filters_select}>
          <SelectCurrency type={DirectionOptions.FROM} />
          <SelectCurrency type={DirectionOptions.TO} />
        </div>
        <h2>Select the period of interest:</h2>
        <div className={styles.filters_date}>
          <DateInput type={DirectionOptions.START} />
          <DateInput type={DirectionOptions.END} />
        </div>
        {!isDateInRange(paramsTimeseries.start, paramsTimeseries.end) && (
          <h2 className={classWarning}>
            Please specify the end period no later than today and the start
            value should not be greater than the end value
          </h2>
        )}
        {dataTimeseries && dataTimeseries.length < 30 && (
          <h2 className={classWarning}>Indicate a period of 30 days</h2>
        )}
        <ButtonCreate />
      </div>
    );
  }
}

const mapStateToProps = ({ sliceTracker, sliceMemory }: RootState) => ({
  theme: sliceMemory.theme,
  paramsTimeseries: sliceTracker.paramsTimeseries,
  dataTimeseries: sliceTracker.dataTimeseries
});

export default connect(mapStateToProps)(TimeseriesFilters);
