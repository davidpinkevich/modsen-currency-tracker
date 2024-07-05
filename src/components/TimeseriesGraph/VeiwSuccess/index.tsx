import { Component } from "react";

import styles from "./styles.module.scss";

class VeiwSuccess extends Component {
  render() {
    return (
      <div className={styles.success}>The graph was built successfully</div>
    );
  }
}

export { VeiwSuccess };
