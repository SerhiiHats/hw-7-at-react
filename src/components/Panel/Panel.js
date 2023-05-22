import React from 'react';
import styles from "./Panel.module.scss"
import AreaButton from "../AreaButton/AreaButton";

const Panel = () => {
  return (
    <div className={styles.containerPanel}>
      <p>counter</p>
      <AreaButton/>

    </div>
  );
};

export default Panel;