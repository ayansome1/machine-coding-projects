import { useEffect, useState } from 'react';
import styles from './ProgressBarSequential.module.scss';

const ProgressBarSequential = () => {
  const [bars, setBars] = useState([]);
  const [count, setCount] = useState(0);
  const [isRendering, setIsRendering] = useState(false);

  const handleBtnClick = () => {
    setCount((val) => val + 1);
  };

  useEffect(() => {
    if (count <= 0) {
      return;
    }
    if (isRendering === false) {
      setBars((arr) => [...arr, true]);
      setCount((val) => val - 1);
      setIsRendering(true);
    }
    // if()
  }, [count, isRendering]);
  const handleOnaminationStart = () => {
    setIsRendering(true);
  };
  const handleOnaminationend = () => {
    setIsRendering(false);
    console.log('animation end');
  };
  return (
    <div>
      <button onClick={handleBtnClick}>Add new bar</button>
      {bars.map((val) => (
        <div
          onAnimationStart={handleOnaminationStart}
          onAnimationEnd={handleOnaminationend}
          className={`${styles.bar} ${
            val === true ? styles['bar--active'] : ''
          }`}
        >
          bar
        </div>
      ))}
    </div>
  );
};

export default ProgressBarSequential;
