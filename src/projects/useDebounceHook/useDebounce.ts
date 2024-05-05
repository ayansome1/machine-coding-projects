import { useRef } from 'react';

const useDebounce = (fn, delay) => {
  const ref = useRef();
  return function (...args) {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default useDebounce;
