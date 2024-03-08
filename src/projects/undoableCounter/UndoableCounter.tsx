import { useState } from 'react';
import styles from './UndoableCounter.module.scss';

const operatorConfig = {
  '/2': '/2',
  '-1': '-1',
  '+1': '+1',
  x2: 'x2',
};

const UndoableCounter = () => {
  const [result, setResult] = useState(0);
  const [operations, setOperations] = useState([]);
  const [undoArr, setUndoArr] = useState([]);

  const handleOperatorClick = (operation) => {
    let operationObj;
    switch (operation) {
      case operatorConfig['/2']:
        operationObj = {
          operation: operation,
          oldVal: result,
          newVal: result / 2,
        };
        break;
      case operatorConfig['-1']:
        operationObj = {
          operation: operation,
          oldVal: result,
          newVal: result - 1,
        };
        break;
      case operatorConfig['+1']:
        operationObj = {
          operation: operation,
          oldVal: result,
          newVal: result + 1,
        };
        break;
      case operatorConfig['x2']:
        operationObj = {
          operation: operation,
          oldVal: result,
          newVal: result * 2,
        };
        break;
    }
    setResult(operationObj.newVal);
    setOperations((arr) => [...arr, operationObj]);
    setUndoArr([]);
  };

  const handleUndo = () => {
    const undoObj = operations[operations.length - 1];
    setOperations((previousArr) => previousArr.slice(0, -1));
    setResult(undoObj.oldVal);
    setUndoArr((prevArr) => [...prevArr, undoObj]);
  };

  const handleRedo = () => {
    const redoObj = undoArr[undoArr.length - 1];
    setUndoArr((arr) => arr.slice(0, -1));
    setOperations((arr) => [...arr, redoObj]);
    setResult(redoObj.newVal);
  };

  const handleReset = () => {
    setOperations([]);
    setUndoArr([]);
    setResult(0);
  };
  return (
    <div className={styles.parent}>
      <div className={styles['operation-container']}>
        <button onClick={handleUndo} disabled={operations.length === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={undoArr.length === 0}>
          Redo
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={styles['operation-container']}>
        <button onClick={() => handleOperatorClick(operatorConfig['/2'])}>
          /2
        </button>
        <button onClick={() => handleOperatorClick(operatorConfig['-1'])}>
          -1
        </button>
        {result}
        <button onClick={() => handleOperatorClick(operatorConfig['+1'])}>
          +1
        </button>
        <button onClick={() => handleOperatorClick(operatorConfig.x2)}>
          x2
        </button>
      </div>
      <div>
        <div className={styles.stack}>
          <h2>operation</h2>
          <h2>Old</h2>
          <h2>New</h2>
        </div>
        {operations.map((val) => (
          <div className={styles.stack}>
            <span>{val.operation}</span>
            <span>{val.oldVal}</span>
            <span>{val.newVal}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UndoableCounter;
