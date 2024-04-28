import { useEffect, useRef, useState } from 'react';

const TypingEffect = ({ content = '' }) => {
  const ref = useRef();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    ref.current = setTimeout(() => {
      console.log(content.length - 1, index);
      if (index > content.length - 1) {
        clearTimeout(ref.current);
      } else {
        setIndex((val) => val + 1);
      }
    }, 100);

    return () => clearTimeout(ref.current);
  }, [index]);
  return <div>{content.substring(0, index)}</div>;
};

export default TypingEffect;
