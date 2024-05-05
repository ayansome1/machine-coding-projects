import { useRef } from 'react';

const useThrottle = (fn, delay) => {
  const ref = useRef();
  return function (...args) {
    if (ref.current) {
      return;
    } else {
      fn(...args);
      ref.current = setTimeout(() => {
        ref.current = undefined;
      }, delay);
    }
  };
};

export default useThrottle;
