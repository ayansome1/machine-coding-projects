import styles from './Pagination.module.scss';
import cx from 'classnames';

const Pagination = ({ current, total, onChange, perPage = 10 }) => {
  let start = Math.max(0, current - Math.floor(perPage / 2));
  const end = Math.min(start + perPage - 1, total - 1);
  if (end - start + 1 < perPage) {
    start = end - perPage + 1;
  }

  const getBtnClass = (pageIndex: number) => {
    if (pageIndex === current) {
      return styles.active;
    }
    return '';
  };

  const handleChange = (idx: number) => {
    onChange(idx);
  };

  const handlePrev = () => {
    onChange(current - 1);
  };

  const handleNext = () => {
    onChange(current + 1);
  };

  const getArray = () => {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={current === 0}>
        {'<'}
      </button>
      {getArray().map((pageIndex) => (
        <button
          key={pageIndex}
          className={cx(getBtnClass(pageIndex), styles.btn)}
          onClick={() => handleChange(pageIndex)}
        >
          {pageIndex}
        </button>
      ))}
      <button onClick={handleNext} disabled={current === total - 1}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
