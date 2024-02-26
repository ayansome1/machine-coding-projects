import { useEffect, useState } from 'react';
import styles from './ProgressBars.module.scss';

const Bar = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    setIsEnabled(true);
  }, []);
  return (
    <div className={styles.default}>
      <div
        className={`${styles.default} ${styles.progress} ${
          isEnabled ? styles['progress-1'] : ''
        }`}
      ></div>
    </div>
  );
};

const ProgressBars = () => {
  const [bars, setBars] = useState([]);

  const addBar = () => {
    setBars((val) => [...val, 1]);
  };
  return (
    <>
      <button onClick={addBar}>Add bar</button>

      {bars.map(() => {
        return <Bar />;
      })}
    </>
  );
};

export default ProgressBars;
