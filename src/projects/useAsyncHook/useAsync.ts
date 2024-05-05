import { useEffect, useRef, useState } from 'react';

const useAsync = (asyncFn, immediate) => {
  const refetch = () => {
    fetchFn();
  };
  const [obj, setObj] = useState({
    state: 'idle',
    value: undefined,
    error: undefined,
    refetch,
  });

  const fetchFn = () => {
    setObj((obj) => ({
      ...obj,
      state: 'pending',
    }));
    asyncFn()
      .then((val) => {
        setObj((obj) => {
          return {
            ...obj,
            state: 'success',
            value: val,
            error: undefined,
          };
        });
      })
      .catch((err) => {
        setObj((obj) => {
          return {
            ...obj,
            state: 'error',
            value: undefined,
            error: err,
          };
        });
      });
  };
  useEffect(() => {
    fetchFn();
  }, []);

  return obj;
};

export default useAsync;
