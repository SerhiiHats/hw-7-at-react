import React, {useState} from 'react';
import styles from "./AreaButton.module.scss"
import {iconTypes} from "../../constants/icons";
import {Button} from "../Button/Button";

const AreaButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className={styles.label}>click for increment</p>
      <Button onClick={()=>setCount(count + 1)} iconType={iconTypes.plus} className={"test3"} color={"#94b21b"}> INC</Button>
      <div className={styles.count}>{count}</div>

    </div>
  );
};

export default AreaButton;