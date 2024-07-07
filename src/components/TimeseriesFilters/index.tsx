import { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { DirectionOptions } from "@constants/directionOptions";
import { ThemeMode } from "@constants/themeMode";
import { type RootState } from "@redux/store";
import { type PropsTimeseriesFilters } from "@src/types";

import ButtonCreate from "./ButtonCreate/ButtonCreate";
import DateInput from "./DateInput";
import SelectCurrency from "./SelectCurrency";

import styles from "./styles.module.scss";

class TimeseriesFilters extends Component<PropsTimeseriesFilters> {
  render() {
    const { theme } = this.props;

    const classTimeseriesFilters =
      theme === ThemeMode.DARK
        ? styles.filters
        : classNames(styles.filters, styles.filters_white);

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
        <ButtonCreate />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  theme: state.sliceMemory.theme
});

export default connect(mapStateToProps)(TimeseriesFilters);
