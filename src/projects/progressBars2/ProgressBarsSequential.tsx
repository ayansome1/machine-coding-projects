import { useEffect, useState } from 'react';
import styles from './ProgressBarsSequential.module.scss';

const Bar = ({ handleTransitionEnd, status, index }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    if (index === 0 || (index > 0 && status === true)) {
      setIsEnabled(true);
    }
  }, [status, index]);

  return (
    <div
      className={`${styles.bar} ${isEnabled ? styles.active : ''}`}
      onTransitionEnd={handleTransitionEnd}
    ></div>
  );
};

const ProgressBarsSequential = () => {
  const [bars, setBars] = useState([]);
  const [status, setStatus] = useState([false]);

  const handleAddBar = () => {
    setBars((val) => [...val, 1]);
  };
  const handleTransitionEnd = () => {
    setStatus((val) => [...val, true]);
  };
  return (
    <>
      <button onClick={handleAddBar}>Add bar</button>
      {bars.map((val, index) => (
        <Bar
          key={index}
          index={index}
          handleTransitionEnd={handleTransitionEnd}
          status={status[index]}
        />
      ))}
    </>
  );
};

export default ProgressBarsSequential;
