import { Component } from "react";
import { Map } from "react-map-gl";

import { updateDataBanks } from "@utils/helpers/updateDataBanks";
import { serviceMapbox } from "@utils/services/mapboxApi";
import { type PropsBankMap } from "@src/types";

import { BankMarker } from "./BankMarker";

import "mapbox-gl/dist/mapbox-gl.css";

class BankMap extends Component<{}, PropsBankMap> {
  constructor(props: {}) {
    super(props);
    this.state = {
      view: {
        longitude: 0,
        latitude: 0,
        zoom: 10
      },
      bankID: null,
      data: []
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (coords) => {
      this.setState({
        view: {
          ...this.state.view,
          longitude: coords.coords.longitude,
          latitude: coords.coords.latitude
        }
      });

      const data = await serviceMapbox.getBanks("en", 25, [
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

  render() {
    const { data, bankID } = this.state;

    return (
      <div>
        <Map
          mapboxAccessToken={process.env.APIKEY_MAP}
          {...this.state.view}
          onMove={(evt) => {
            this.setState({ view: evt.viewState });
          }}
          style={{ width: "100vw", height: 600 }}
          mapStyle="mapbox://styles/mapbox/streets-v9">
          {data?.map((item, index) => {
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
        <p>{this.state.view.latitude}</p>
      </div>
    );
  }
}

export { BankMap };
