import styles from "./Header.module.scss";
import React from 'react';

const Header = (props) => {
  const {nameTask, descriptionTask} = props;
  return (
    <header className={styles.AppHeader}>
      <h1>{nameTask}</h1>
      <p>{descriptionTask}</p>
    </header>
  );
};

export default Header;