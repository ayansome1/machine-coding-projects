import { useEffect, useRef, useState } from 'react';

const useDebounce = (fn, delay) => {
  const ref = useRef();
  return function () {
    clearTimeout(ref.current);
    ref.current = setTimeout(fn, delay);
  };
};

const SearchWithAutocomplete = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((arr) => {
        const data = arr.filter((obj) => obj.title.includes(value));
        setData(data);
      });
  };

  const debouncedFn = useDebounce(fetchData, 2000);

  useEffect(() => {
    if (!value) {
      return;
    }
    // fetch(`https:mock?value=${value}`);
    debouncedFn();
  }, [value]);
  return (
    <>
      <input value={value} onChange={handleChange} />
      {data.map((obj) => (
        <div>{obj.title}</div>
      ))}
    </>
  );
};

export default SearchWithAutocomplete;
