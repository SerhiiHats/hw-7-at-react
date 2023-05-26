import styles from "./ToDoListImprove.module.scss"
import React, {useEffect, useState} from 'react';

import ListFunctionForComposition from "../ListFunctionForComposition/ListFunctionForComposition";
import HeaderForMUI from "../HeaderForMUI/HeaderForMUI";

const ToDoListImprove = () => {
  const [toDoComp, setToDoComp] = useState([]);

  function addItem(item) {
    setToDoComp([item, ...toDoComp]);
  }

  // читаем сохраненный To Do в localStorage если он есть, массив зависимостей [] говорит что выполнение только при didMount
  useEffect(()=>{
    const tempToDoFromLocalStorage = localStorage.getItem("toDoFromMaterialUIInHW7") || [];
    if (tempToDoFromLocalStorage.length !== 0){
      setToDoComp(JSON.parse(tempToDoFromLocalStorage));
    }
  },[]);

  //устанавливаем To Do из localStorage если он был, массив зависимостей [toDoComp] говорит что выполнение, каждый раз при изменении toDoComp
  useEffect(()=>{
    localStorage.setItem("toDoFromMaterialUIInHW7", JSON.stringify(toDoComp));
    console.log("toDoFromMaterialUIInHW7")
  },[toDoComp]);

  function removeItem(id) {
    const tempArr = toDoComp.filter(item => id !== item.id)
    setToDoComp(tempArr);
  }


  function setDone(id){
    const tempArr = [...toDoComp]
    tempArr.forEach(item=>{
      if (item.id===id){
        item.done = !item.done;
      }
    });
    setToDoComp(tempArr);
  }


  return (
    <div className={styles.containerToDo}>
      <HeaderForMUI addItem={(v) => addItem(v)}/>
      <ListFunctionForComposition items={toDoComp} setDone={(val)=>setDone(val)} removeItem={(v) => removeItem(v)}/>
    </div>
  );
};

export default ToDoListImprove;