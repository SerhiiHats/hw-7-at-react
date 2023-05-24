import styles from "../HeaderFunc/HeaderFunc.module.scss"
import React from 'react';
import FormDialog from "../FormDialog/FormDialog";

const HeaderForMui = ({...rest}) => {
  return (
    <div className={styles.containerHeader}>
      <h1>Todo List With <span>Material UI</span></h1>
      <FormDialog {...rest}/>
    </div>
  );
};

export default HeaderForMui;