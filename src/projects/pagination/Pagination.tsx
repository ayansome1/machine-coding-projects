import styles from './Pagination.module.scss';
import cx from 'classnames';

const Pagination = ({ current, total, onChange }) => {
  const getBtnClass = (index: number) => {
    if (index === current - 1) {
      return styles.active;
    }
    return '';
  };

  const handleChange = (idx) => {
    onChange(idx);
  };

  const handlePrev = () => {
    onChange(current - 1);
  };

  const handleNext = () => {
    onChange(current + 1);
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={current === 1}>
        {'<'}
      </button>
      {Array(total)
        .fill(null)
        .map((val, index) => (
          <button
            key={index}
            className={cx(getBtnClass(index), styles.btn)}
            onClick={() => handleChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      <button onClick={handleNext} disabled={current === total}>{'>'}</button>
    </div>
  );
};

export default Pagination;
