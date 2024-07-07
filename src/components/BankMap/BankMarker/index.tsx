import { Component, Fragment } from "react";
import { Marker, Popup } from "react-map-gl";

import { type PropsMarker } from "@src/types";

import styles from "./styles.module.scss";

class BankMarker extends Component<PropsMarker> {
  render() {
    const { item, bankID, handleClickOpen, handleClickClose } = this.props;

    return (
      <Fragment>
        <Marker
          longitude={item.properties.coordinates.longitude}
          latitude={item.properties.coordinates.latitude}
          anchor="bottom"
          onClick={() => handleClickOpen(item.id)}
        />
        {bankID === item.id && (
          <Popup
            longitude={item.properties.coordinates.longitude}
            latitude={item.properties.coordinates.latitude}
            closeButton={true}
            closeOnClick={false}
            offset={55}
            anchor="bottom"
            onClose={handleClickClose}>
            <div className={styles.popup}>
              <h2>{item.properties.name}</h2>
              <p>Address: {item.properties?.full_address}</p>
              {item.properties.metadata.phone && (
                <p>Phone: {item.properties.metadata.phone}</p>
              )}
            </div>
          </Popup>
        )}
      </Fragment>
    );
  }
}

export { BankMarker };
