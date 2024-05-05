import { useCallback, useRef } from 'react';

const useDebounce = (fn, delay) => {
  const ref = useRef();
  return useCallback(
    function (...args) {
      clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );
};

export default useDebounce;
