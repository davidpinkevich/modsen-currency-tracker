import { Component } from "react";
import { Bar } from "react-chartjs-2";

import { createGraphConfig } from "@utils/helpers/createGraphConfig";
import { type PropsTimeseriesGraph } from "@src/types";

import "chartjs-adapter-date-fns";

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
    const { dataTimeseries } = this.props;

    if (dataTimeseries?.length) {
      const { data, options, plugins } = createGraphConfig(dataTimeseries);
      return (
        <div className={styles.graph}>
          <Bar options={options} data={data} plugins={plugins} />
        </div>
      );
    }
  }
}

export { TimeseriesGraph };
