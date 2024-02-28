import { useEffect, useState } from 'react';
import styles from './TrafficLight.module.scss';

interface Light {
  color: 'red' | 'green' | 'yellow';
  duration: number;
}

interface TrafficLightProps {
  config: Array<Light>;
}

const TrafficLight = ({ config }: TrafficLightProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setActiveIndex((val) => val + 1);
    }, config[activeIndex % 3].duration);

    return () => {
      clearTimeout(t);
    };
  }, [activeIndex]);
  return (
    <>
      {config.map((val, index) => {
        return (
          <div
            key={index}
            className={`${styles.light} ${
              index === activeIndex % 3 ? styles[config[index].color] : ''
            }`}
          ></div>
        );
      })}
    </>
  );
};

export default TrafficLight;
