import React from 'react';
import styles from "./Panel.module.scss"
import AreaButton from "../AreaButton/AreaButton";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/configStore";

const Panel = () => {
  const count = useSelector((store) => store.countFR);
  return (
    <div className={styles.containerPanel}>
      <p>counter comp.A</p>
      <section>
        <AreaButton/>
        <div className={styles.count}>{count}</div>
      </section>

    </div>
  );
};

export default Panel;