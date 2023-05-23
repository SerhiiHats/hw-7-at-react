import Header from "../Header/Header";
import {useState} from "react";
import styles from "./App.module.scss"
import MainBoardToDoFunction from "../MainBoardToDoFunction/MainBoardToDoFunction";
import Panel from "../Panel/Panel";


function App() {
  const [task1] = useState({
    name: "React: Домашнє завдання 7. Завдання 3",
    description: "Створіть свій компонент «TODO list», він має містити: \n1. поле введення; \n2. кнопку додавання пункту (кнопка для додавання пункту має містити компонент «Icon», який приймає тип потрібної вам іконки у вигляді рядка (іконка формату .svg)); \n3. кнопку біля кожного пункту для його видалення; \n4. кнопку біля кожного пункту для позначки «Зроблено» (має з'явитися іконка – галочка зліва від пункту)."
  });
  const [task2] = useState({
    name: "React: Домашнє завдання 7. Завдання 4",
    description: "Компонент А рендерить компонент В. Усередині компонента В рендериться кнопка, натиском на яку збільшується число. Число потрібно передати до батьківського компонента за допомогою Redux і зобразити це число поряд із компонентом В."
  });

  return (
    <div className={styles.app}>
      <Header nameTask={task1.name} descriptionTask={task1.description}/>
      <div className={styles.containerAnswer}>
        <MainBoardToDoFunction/>
      </div>
      <Header nameTask={task2.name} descriptionTask={task2.description}/>
      <div className={styles.containerAnswer}>
        <Panel/>
      </div>
      <Header nameTask={task2.name} descriptionTask={task2.description}/>
    </div>
  );
}

export default App;
