import { useEffect, useState } from 'react';
import useThrottle from './useThrottle';

const UseThrottleHookContainer = () => {
  const [inputData, setInputData] = useState('');

  const logData = (val) => {
    console.log(val);
  };

  const throttledFn = useThrottle(logData, 5000);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    throttledFn(inputData);
  }, [inputData]);

  return (
    <>
      <input onChange={handleChange} value={inputData} />
    </>
  );
};

export default UseThrottleHookContainer;
