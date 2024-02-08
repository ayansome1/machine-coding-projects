import { useEffect, useState } from 'react';
import styles from './Light.module.scss';

const arr = [...Array(9).keys()];

const Light = () => {
  const [enabledLights, setEnabledLights] = useState<Array<number>>([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  useEffect(() => {
    if (enabledLights.length === 9) {
      setIsDeactivating(true);
      const id = setInterval(() => {
        console.log('*');
        setEnabledLights((prevValues) => {
          if (prevValues.length === 1) {
            clearInterval(id);
          }
          const arr = [...prevValues];
          arr.pop();
          return arr;
        });
      }, 2000);
    } else if (enabledLights.length === 0) {
      setIsDeactivating(false);
    }
  }, [enabledLights.length]);

  const isButtonDisabled = (val) => {
    if (enabledLights.indexOf(val) > -1 || isDeactivating) {
      return true;
    }
  };

  const handleClick = (val: number) => {
    if (isDeactivating) {
      return;
    }
    setEnabledLights((prevValues) => {
      return [...prevValues, val];
    });
  };

  const getClassName = (val: number) => {
    if (enabledLights.indexOf(val) > -1) {
      return styles.enabled;
    }
  };
  return (
    <div>
      <div className={styles.wrapper}>
        {arr.map((val) => (
          <button
            className={styles.box + ' ' + getClassName(val)}
            key={val}
            onClick={() => handleClick(val)}
            disabled={isButtonDisabled(val)}
          ></button>
        ))}
        {enabledLights}
      </div>
    </div>
  );
};

export default Light;
