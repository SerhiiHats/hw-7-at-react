import React from 'react';
import FormFunc from "../FormFunc/FormFunc";
import styles from "./HeaderFunc.module.scss";

const HeaderFunc = ({...rest}) => {
  return (
    <div className={styles.containerHeader}>
      <h1>Todo List With <span>State</span></h1>
      <FormFunc {...rest}/>
    </div>
  );

};

export default HeaderFunc;