import { Component } from "react";

import { BankMap } from "@components/BankMap";

import styles from "./styles.module.scss";

class BankCard extends Component {
  render() {
    return (
      <div>
        <h2>BankCard</h2>
        <BankMap />
      </div>
    );
  }
}

export { BankCard };
