import { useState } from 'react';

const options = ['TODO', 'IN_PROGRESS', 'CLOSED'];
const NewTask = ({ handleNewTaskAdd }) => {
  const [task, setTask] = useState('');
  const [taskState, setTaskState] = useState('');
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleOptionChange = (e) => {
    setTaskState(e.target.value);
  };

  const handleAddTask = () => {
    if (!task.length) {
      alert("Task can't be empty");
      return;
    }
    if (!taskState) {
      alert("Task state can't be empty");
      return;
    }
    handleNewTaskAdd({
      id: Date.now(),
      state: taskState,
      content: task,
    });
    setTask('');
    setTaskState('');
  };
  return (
    <div>
      <input autoFocus onChange={handleChange} value={task} />
      <select onChange={handleOptionChange} value={taskState}>
        <option>Please choose one option</option>
        {options.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
};

export default NewTask;
