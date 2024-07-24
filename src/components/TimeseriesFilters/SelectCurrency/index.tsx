import { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { DirectionOptions, SELECT_QUOTES } from "@constants/index";
import { ThemeMode } from "@constants/themeMode";
import { findCurrentSelect } from "@utils/helpers/findCurrentSelect";
import arrow from "@assets/icons/arrow-select.svg";
import {
  changeParamsTimeseriesFrom,
  changeParamsTimeseriesTo
} from "@redux/slices/sliceTracker";
import { type AppDispatch, type RootState } from "@redux/store";
import { type PropsSelectCurrency } from "@src/types";

import styles from "./styles.module.scss";

class SelectCurrency extends Component<
  PropsSelectCurrency,
  { isOpen: boolean }
> {
  constructor(props: PropsSelectCurrency) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange = (value: string) => {
    this.setState({ isOpen: !this.state.isOpen });
    const { type, changeParamsTimeseriesFrom, changeParamsTimeseriesTo } =
      this.props;
    if (type === DirectionOptions.FROM) {
      changeParamsTimeseriesFrom(value);
    } else {
      changeParamsTimeseriesTo(value);
    }
  };

  render() {
    const { paramsTimeseries, type, theme } = this.props;

    const filter =
      type === DirectionOptions.FROM
        ? DirectionOptions.TO
        : DirectionOptions.FROM;

    const classSelectCurrency =
      theme === ThemeMode.DARK
        ? styles.select
        : classNames(styles.select, styles.select_white);

    return (
      <div data-testcy="select" className={classSelectCurrency}>
        <button className={styles.select_btn} onClick={this.toggleDropdown}>
          <p>{findCurrentSelect(SELECT_QUOTES, paramsTimeseries[type])}</p>
          <img
            className={
              this.state.isOpen
                ? styles.select_img
                : classNames(styles.select_img, styles.select_img_active)
            }
            src={arrow}
            alt="arrow-select"
          />
        </button>
        {this.state.isOpen && (
          <ul className={styles.select_dropdown}>
            {SELECT_QUOTES.filter(
              (item) => item.iso !== paramsTimeseries[filter]
            ).map((currency) => (
              <li
                key={currency.iso}
                onClick={() => this.handleChange(currency.iso)}>
                {currency.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  paramsTimeseries: state.sliceTracker.paramsTimeseries,
  loading: state.sliceTracker.loading,
  theme: state.sliceMemory.theme
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeParamsTimeseriesFrom: (value: string) =>
    dispatch(changeParamsTimeseriesFrom(value)),
  changeParamsTimeseriesTo: (value: string) =>
    dispatch(changeParamsTimeseriesTo(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
