import { useEffect, useRef, useState } from 'react';
import styles from './InfiniteScroll.module.scss';
import { useInfiniteScroll } from './useInfiniteScroll';

const limit = 6;

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);

  const fetchData = async () => {
		console.log("rendered")
    setIsLoading(true);
    let response = await fetch(
      // `https://dummyjson.com/todos?limit=${limit}&skip=${skip}&delay=3000`
      `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
    );
    response = await response.json();
    setData((prevValue) => {
      return [...prevValue, ...response.todos];
    });
    setSkip((val) => val + limit);
    setIsLoading(false);
  };

  useInfiniteScroll(isLoading, fetchData, ref);

  return (
    <div>
      {data.map((val) => {
        return (
          <div className={styles.todo}>
            {val.id} - {val.todo}
          </div>
        );
      })}
      {!isLoading && <div ref={ref}></div>}
      {isLoading && 'Loading'}
    </div>
  );
};

export default InfiniteScroll;
