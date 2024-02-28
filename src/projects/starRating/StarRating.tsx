import { useEffect, useState } from 'react';
import { Star } from './Star';
import styles from './Star.module.scss';

interface StarRatingProps {
  max?: number;
  onClick?: (idx: number) => void;
}

const StarRating = ({ max = 5, onClick }: StarRatingProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ratingIndex, setRatingIndex] = useState(null);
  const handleOnMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const getStar = (index: number) => {
    if (ratingIndex !== null && index <= ratingIndex) {
      return <Star filled={true} />;
    }
    if (hoveredIndex !== null && index <= hoveredIndex) {
      return <Star filled={true} />;
    }
    return <Star />;
  };

  const handleClick = (index: number) => {
    setRatingIndex(index);
    if (onClick) {
      onClick(index);
    }
  };

  useEffect(() => {
    console.log('hoveredIndex: ', hoveredIndex, ' ratingIndex: ', ratingIndex);
  });
  return (
    <>
      {Array(max)
        .fill(undefined)
        .map((val, index) => {
          return (
            <div
              onMouseOver={() => handleOnMouseOver(index)}
              onMouseOut={() => setHoveredIndex(null)}
              className={styles['star-container']}
              onClick={() => handleClick(index)}
              key={index}
            >
              {getStar(index)}
            </div>
          );
        })}
    </>
  );
};

export default StarRating;
