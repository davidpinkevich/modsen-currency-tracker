import { Component } from "react";
import { Map } from "react-map-gl";

import {
  filterUpdateDataBanks,
  updateDataBanks
} from "@utils/helpers/updateDataBanks";
import { serviceMapbox } from "@utils/services/mapboxApi";
import { type StateBankMap } from "@src/types";

import { BankMarker } from "./BankMarker";
import BankSearch from "./BankSearch";

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./styles.module.scss";

class BankMap extends Component {
  state: StateBankMap = {
    view: {
      longitude: 0,
      latitude: 0,
      zoom: 10
    },
    bankID: null,
    data: [],
    filter: ""
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (coords) => {
      this.setState({
        view: {
          ...this.state.view,
          longitude: coords.coords.longitude,
          latitude: coords.coords.latitude
        }
      });

      const data = await serviceMapbox.getBanks([
        coords.coords.longitude,
        coords.coords.latitude
      ]);
      this.setState({ data: updateDataBanks(data) });
    });
  }

  handleClickOpen = (id: number) => {
    this.setState({ bankID: id });
  };

  handleClickClose = () => {
    this.setState({ bankID: null });
  };

  handleChangeFilter = (value: string) => {
    this.setState({ filter: value });
  };

  render() {
    const { data, bankID, filter } = this.state;

    return (
      <div className={styles.map}>
        <BankSearch
          value={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <Map
          mapboxAccessToken={process.env.APIKEY_MAP}
          {...this.state.view}
          onMove={(evt) => {
            this.setState({ view: evt.viewState });
          }}
          style={{ width: "100vw", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9">
          {data &&
            filterUpdateDataBanks(data, filter).map((item, index) => {
              return (
                <BankMarker
                  key={index}
                  bankID={bankID}
                  handleClickOpen={this.handleClickOpen}
                  handleClickClose={this.handleClickClose}
                  item={item}
                />
              );
            })}
        </Map>
      </div>
    );
  }
}

export { BankMap };
