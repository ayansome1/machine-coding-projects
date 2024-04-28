import { useState } from 'react';
import Pagination from './Pagination';

const PaginationContainer = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    setCurrent(page);
  };
  return (
    <div>
      <Pagination current={current} total={20} onChange={onChange} perPage={5}/>
    </div>
  );
};

export default PaginationContainer;
