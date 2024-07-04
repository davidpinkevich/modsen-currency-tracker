import { Component } from "react";
import { connect, shallowEqual } from "react-redux";

import { fetchTimeseries } from "@redux/slices/sliceTracker";
import { type AppDispatch, type RootState } from "@redux/store";
import { type PropsTimeline } from "@src/types";

import { Loading } from "@components/Loading";
import TimeseriesFilters from "@components/TimeseriesFilters";
import TimeseriesGraph from "@components/TimeseriesGraph";

import styles from "./styles.module.scss";

class Timeline extends Component<PropsTimeline> {
  componentDidMount() {
    const { paramsTimeseries, fetchTimeseries } = this.props;
    fetchTimeseries(paramsTimeseries);
  }

  componentDidUpdate(prevProps: PropsTimeline) {
    const { paramsTimeseries, fetchTimeseries } = this.props;

    if (!shallowEqual(prevProps.paramsTimeseries, paramsTimeseries)) {
      fetchTimeseries(paramsTimeseries);
    }
  }

  render() {
    const { dataTimeseries, loading } = this.props;

    return (
      <div className={styles.timeline}>
        <TimeseriesFilters />
        {loading ? (
          <Loading value="Loading" />
        ) : (
          <TimeseriesGraph dataTimeseries={dataTimeseries} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ sliceTracker }: RootState) => ({
  dataTimeseries: sliceTracker.dataTimeseries,
  paramsTimeseries: sliceTracker.paramsTimeseries,
  loading: sliceTracker.loading
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchTimeseries: async (params: {
    from: string;
    to: string;
    start: string;
    end: string;
  }) => await dispatch(fetchTimeseries(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
