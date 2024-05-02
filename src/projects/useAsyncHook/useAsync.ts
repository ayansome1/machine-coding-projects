import { useEffect, useRef, useState } from 'react';

const useAsync = (asyncFn, immediate) => {
  const refetch = () => {
    console.log('refetch');
  };
  const [obj, setObj] = useState({
    state: 'idle',
    value: undefined,
    error: undefined,
    refetch,
  });

  return obj;
};

export default useAsync;
