import Header from "../Header/Header";
import {useState} from "react";
import styles from "./App.module.scss"
import MainBoardToDoFunction from "../MainBoardToDoFunction/MainBoardToDoFunction";


function App() {
  const [task1] = useState({
    name: "React: Домашнє завдання 7. Завдання 3",
    description: "Створіть свій компонент «TODO list», він має містити: \n1. поле введення; \n2. кнопку додавання пункту (кнопка для додавання пункту має містити компонент «Icon», який приймає тип потрібної вам іконки у вигляді рядка (іконка формату .svg)); \n3. кнопку біля кожного пункту для його видалення; \n4. кнопку біля кожного пункту для позначки «Зроблено» (має з'явитися іконка – галочка зліва від пункту)."
  });

  return (
    <div className={styles.app}>
      <Header nameTask={task1.name} descriptionTask={task1.description}/>
      <div className={styles.containerAnswer}>
        <MainBoardToDoFunction/>

      </div>

    </div>
  );
}

export default App;
