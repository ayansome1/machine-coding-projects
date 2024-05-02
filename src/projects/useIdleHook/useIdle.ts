import { useEffect, useRef, useState } from 'react';

const useIdle = (time) => {
  const [isIdle, setIsIdle] = useState(true);
  const ref = useRef();

  const fn = () => {
    setIsIdle(false);
    clearTimeout(ref.current);
    console.log('mouse moving');
    ref.current = setTimeout(() => {
      setIsIdle(true);
    }, time);
  };

  useEffect(() => {
    window.addEventListener('mousemove', fn);
    return () => {
      window.removeEventListener('mousemove', fn);
    };
  }, []);

  return isIdle;
};

export default useIdle;
