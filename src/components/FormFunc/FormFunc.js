import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";
import styles from "./FormFunc.module.scss";

const FormFunc = (props) => {

  const [valueInput, setvalueInput] = useState("");

  useEffect(() => {
    document.forms.listTask.elements[0].focus();
  })

  function handlerValue(e) {
    setvalueInput(e.target.value)
  }

  function handlerSubmit(e) {
    e.preventDefault();
    const {addItem} = props;
    if (!valueInput) {
      return;
    }
    const tempValueInput = valueInput.trim();
    if (tempValueInput.length) {
      addItem({value: tempValueInput, id: Date.now()})
      setvalueInput("");
    }
  }


  return (
    <form className={styles.containerForm} id={"toDoListForm"} name={"listTask"} onSubmit={(e) => handlerSubmit(e)}>
      <div className={styles.rowForm}>
        <input type={"text"} placeholder={"add new task"} className={"test2"} onChange={(e) => handlerValue(e)}
               value={valueInput}/>
        <Button type={"submit"} iconType={iconTypes.plus} className={"test3"}>Add</Button>
      </div>
    </form>
  );
};

export default FormFunc;