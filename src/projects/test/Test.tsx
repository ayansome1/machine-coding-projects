import { useCallback, useState } from 'react';
import Child from './Child';

const Test = () => {
  const [res, setRes] = useState(0);
  const [randomValue, setRandomValue] = useState<number | null>(null);
  const handleClick = () => {
    setRes((val) => val + 1);
  };

  const handleRandomClick = () => {
    setRandomValue(Date.now());
  };

  const handleMultipler = useCallback(
    (val) => {
      return (
        <div>
          {res} Multipled by {val} is {res * val}
        </div>
      );
    },
    [res]
  );
  // const handleMultipler = (val) => {
  //   return (
  //     <div>
  //       {res} Multipled by {val} is {res * val}
  //     </div>
  //   );
  // };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleRandomClick}>click me for random value</button>
      {randomValue}

      <Child fn={handleMultipler} />
    </div>
  );
};

export default Test;
