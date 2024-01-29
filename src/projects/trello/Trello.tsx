import { useState } from 'react';
import styles from './Trello.module.scss';
import { mockTasks } from './mock';
import NewTask from './NewTask';

const config = [
  {
    boardName: 'To do',
    state: 'TODO',
  },
  {
    boardName: 'In progress',
    state: 'IN_PROGRESS',
  },
  {
    boardName: 'Closed',
    state: 'CLOSED',
  },
];

const Trello = () => {
  const [tasks, setTasks] = useState<any>([]);
  const getTasks = (state) => {
    return tasks.filter((val) => val.state === state);
  };
  const handleNewTaskAdd = (newTask) => {
    setTasks((val) => [...val, newTask]);
  };
  return (
    <>
      <NewTask handleNewTaskAdd={handleNewTaskAdd} />
      <div className={styles.boardParent}>
        {config.map((val) => (
          <div className={styles.board}>
            <h2 className={styles.boardTitle}>{val.boardName}</h2>
            {getTasks(val.state).map((val) => (
              <div className={styles.task}>{val.content}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Trello;
