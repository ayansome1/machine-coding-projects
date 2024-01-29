import { useState } from 'react';
import styles from './Trello.module.scss';
import { mockTasks } from './mock';
import NewTask from './NewTask';
import { Draggable, Droppable } from 'react-drag-and-drop';

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
  const handleDrop = (e, dropState) => {
    const draggedTaskId = e.task;
    console.log('draggedTaskId', draggedTaskId);
    console.log(e, dropState);
    setTasks((oldArr) => {
      const filteredTasks = oldArr.filter((val) => val.id != draggedTaskId);
      const draggedTask = oldArr.find((val) => val.id == draggedTaskId);
      console.log(draggedTask);
      return [...filteredTasks, { ...draggedTask, state: dropState }];
    });
  };
  return (
    <>
      <NewTask handleNewTaskAdd={handleNewTaskAdd} />
      <div className={styles.boardParent}>
        {config.map((val) => (
          <Droppable
            types={['task']} // <= allowed drop types
            onDrop={(e) => handleDrop(e, val.state)}
            key={val.state}
          >
            <div>
              <h2 className={styles.boardTitle}>{val.boardName}</h2>
              {getTasks(val.state).map((val) => (
                <Draggable data={val.id} type='task' key={val.id}>
                  <div className={styles.task}>{val.content}</div>
                </Draggable>
              ))}
            </div>
          </Droppable>
        ))}
      </div>
    </>
  );
};

export default Trello;
