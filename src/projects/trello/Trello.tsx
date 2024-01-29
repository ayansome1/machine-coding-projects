import { useState } from 'react';
import styles from './Trello.module.scss';
import { mockTasks } from './mock';

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
  const [tasks, setTasks] = useState(mockTasks);
  const getTasks = (state) => {
    return tasks.filter((val) => val.state === state);
  };
  return (
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
  );
};

export default Trello;
