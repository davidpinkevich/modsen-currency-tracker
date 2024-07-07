import { Component, Fragment } from "react";
import { Marker, Popup } from "react-map-gl";

import { type PropsMarker } from "@src/types";

import styles from "./styles.module.scss";

class BankMarker extends Component<PropsMarker> {
  render() {
    const { item, bankID, handleClickOpen, handleClickClose } = this.props;
    const { coordinates, name, full_address, metadata } = item.properties;

    return (
      <Fragment>
        <Marker
          longitude={coordinates.longitude}
          latitude={coordinates.latitude}
          anchor="bottom"
          onClick={() => handleClickOpen(item.id)}
        />
        {bankID === item.id && (
          <Popup
            longitude={coordinates.longitude}
            latitude={coordinates.latitude}
            closeButton={true}
            closeOnClick={false}
            offset={55}
            anchor="bottom"
            onClose={handleClickClose}>
            <div className={styles.popup}>
              <h2>{name}</h2>
              {full_address && <p>Address: {full_address}</p>}
              {metadata.phone && <p>Phone: {metadata.phone}</p>}
            </div>
          </Popup>
        )}
      </Fragment>
    );
  }
}

export { BankMarker };
