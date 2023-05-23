import React, {useState} from 'react';
import styles from "./AreaButton.module.scss"
import {iconTypes} from "../../constants/icons";
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {INC, incrementAC} from "./areaButtonActions";

const AreaButton = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <p className={styles.label}>click for increment comp.B</p>
      <Button onClick={() => {
        dispatch(incrementAC(INC))
      }} iconType={iconTypes.plus} className={"test3"} color={"#07d507"}> INC</Button>
    </div>
  );
};

export default AreaButton;