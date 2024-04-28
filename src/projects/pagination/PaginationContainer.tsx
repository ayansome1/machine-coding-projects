import { useState } from 'react';
import Pagination from './Pagination';

const PaginationContainer = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    setCurrent(page);
  };
  return (
    <div>
      <Pagination current={current} total={8} onChange={onChange} />
    </div>
  );
};

export default PaginationContainer;
