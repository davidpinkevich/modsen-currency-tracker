import { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { createGraphConfig } from "@utils/helpers/createGraphConfig";
import { type RootState } from "@redux/store";
import { type PropsTimeseriesGraph } from "@src/types";

import "chartjs-adapter-date-fns";

import { VeiwSuccess } from "./VeiwSuccess";

import styles from "./styles.module.scss";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  TimeSeriesScale,
  Title,
  Tooltip
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeSeriesScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class TimeseriesGraph extends Component<PropsTimeseriesGraph> {
  render() {
    const { dataTimeseries, theme } = this.props;

    const classTimeseriesGraph =
      theme === ThemeMode.DARK
        ? styles.graph
        : classNames(styles.graph, styles.graph_white);

    if (dataTimeseries?.length) {
      const { data, options, plugins } = createGraphConfig(dataTimeseries);
      return (
        <div className={classTimeseriesGraph}>
          {dataTimeseries.length >= 30 ? (
            <Bar options={options} data={data} plugins={plugins} />
          ) : (
            <p>Please indicate a period of 30 days</p>
          )}
          {dataTimeseries.length >= 30 && <VeiwSuccess />}
        </div>
      );
    }
  }
}

const mapStateToProps = (state: RootState) => ({
  theme: state.sliceMemory.theme
});

export default connect(mapStateToProps)(TimeseriesGraph);
