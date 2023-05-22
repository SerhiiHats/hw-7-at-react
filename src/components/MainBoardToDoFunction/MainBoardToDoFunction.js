import React, {useState} from 'react';


import styles from "./MainBoardToDoFunction.module.scss"
import HeaderFunc from "../HeaderFunc/HeaderFunc";
import ListFunctionForComposition from "../ListFunctionForComposition/ListFunctionForComposition";

const MainBoardToDoFunction = () => {
  const [toDoComp, setToDoComp] = useState([]);

  function addItem(item){
    setToDoComp([item, ...toDoComp]);

  }

  function removeItem(id){

    const tempArr = toDoComp.filter( item => id !== item.id )
    setToDoComp(tempArr);
  }

  return (
    <div className={styles.containerToDo}>
      <HeaderFunc addItem={(v)=>addItem(v)}/>
      <ListFunctionForComposition items={toDoComp} removeItem={(v)=>removeItem(v)}/>
    </div>
  );
};

export default MainBoardToDoFunction;