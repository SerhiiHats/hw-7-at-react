import styles from "./ToDoListImprove.module.scss"
import React, {useState} from 'react';

import ListFunctionForComposition from "../ListFunctionForComposition/ListFunctionForComposition";
import HeaderForMUI from "../HeaderForMUI/HeaderForMUI";

const ToDoListImprove = () => {
  const [toDoComp, setToDoComp] = useState([]);

  function addItem(item) {
    setToDoComp([item, ...toDoComp]);

  }

  function removeItem(id) {

    const tempArr = toDoComp.filter(item => id !== item.id)
    setToDoComp(tempArr);
  }

  return (
    <div className={styles.containerToDo}>
      <HeaderForMUI addItem={(v) => addItem(v)}/>
      <ListFunctionForComposition items={toDoComp} removeItem={(v) => removeItem(v)}/>
    </div>
  );
};

export default ToDoListImprove;