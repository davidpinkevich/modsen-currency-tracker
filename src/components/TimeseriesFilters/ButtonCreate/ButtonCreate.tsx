import { Component } from "react";
import { connect, shallowEqual } from "react-redux";
import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { fetchTimeseries } from "@redux/slices/sliceTracker";
import { type AppDispatch, type RootState } from "@redux/store";
import {
  type PropsTimelineBtnCreate,
  type TypeParamsTimeseries
} from "@src/types";

import styles from "./styles.module.scss";

class ButtonCreate extends Component<PropsTimelineBtnCreate> {
  previousParamsTimeseries: TypeParamsTimeseries | null = null;

  componentDidMount() {
    const { paramsTimeseries } = this.props;
    this.previousParamsTimeseries = paramsTimeseries;
  }

  handleClick = () => {
    const { paramsTimeseries, fetchTimeseries } = this.props;
    if (!shallowEqual(paramsTimeseries, this.previousParamsTimeseries)) {
      fetchTimeseries(paramsTimeseries);

      this.previousParamsTimeseries = paramsTimeseries;
    }
  };

  render() {
    const { theme } = this.props;

    const classButtonCreate =
      theme === ThemeMode.DARK
        ? styles.date
        : classNames(styles.button, styles.button_white);
    return (
      <button
        data-testcy="create"
        className={classButtonCreate}
        onClick={this.handleClick}>
        Create Graph
      </button>
    );
  }
}

const mapStateToProps = ({ sliceTracker, sliceMemory }: RootState) => ({
  dataTimeseries: sliceTracker.dataTimeseries,
  paramsTimeseries: sliceTracker.paramsTimeseries,
  theme: sliceMemory.theme
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchTimeseries: async (params: {
    from: string;
    to: string;
    start: string;
    end: string;
  }) => await dispatch(fetchTimeseries(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCreate);
