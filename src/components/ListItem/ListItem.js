import React, {useState} from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";
import styles from "./ListItem.module.scss"

const ListItem = (props) => {

  const {key, id, elem, removeItem} = props;

  const [done, setDone] = useState(false);

  function onClickRemove() {
    removeItem(id);
  }

  function handlerCheckBox() {
    setDone(!done);
    console.log(done);
  }

  return (
    <li className={styles.containerItem} key={key} id={id}>
      <div className={done ? styles.done : styles.unDone}>
        <input type={"checkbox"} onChange={handlerCheckBox} checked={done}/>
        {elem}
      </div>
      <Button size={"small"} onClick={() => onClickRemove()} iconType={iconTypes.cross}/>
    </li>
  )

};

export default ListItem;
