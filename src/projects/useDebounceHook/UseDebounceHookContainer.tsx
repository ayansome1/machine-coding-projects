import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const UseDebounceHookContainer = () => {
  const [inputData, setInputData] = useState('');

  const logData = (val) => {
    console.log(val);
  };

  const debouncedFn = useDebounce(logData, 1000);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    debouncedFn(inputData);
  }, [inputData]);

  return (
    <>
      <input onChange={handleChange} value={inputData} />
    </>
  );
};

export default UseDebounceHookContainer;
