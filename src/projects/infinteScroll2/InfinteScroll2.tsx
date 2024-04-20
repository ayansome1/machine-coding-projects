import { useEffect, useRef, useState } from 'react';
import styles from './InfinteScroll2.module.scss';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

const limit = 4;

const InfinteScroll2 = () => {
  const containerRef = useRef(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (shouldFetch) {
      fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((res) => res.json())
        .then((res) => {
          const newArr = res?.products || [];
          setData((arr) => [...arr, ...newArr]);
          setSkip((val) => val + limit);
          setShouldFetch(false);
        });
    }
  }, [shouldFetch]);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setShouldFetch(true);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);
  return (
    <div className={styles.container}>
      {data.map((val) => (
        <div className={styles.item}>{val.id + ' ' + val.title}</div>
      ))}
      {<div ref={containerRef}></div>}
    </div>
  );
};

export default InfinteScroll2;
