import { useEffect, useRef, useState } from 'react';
import styles from './ImageAutoCarousel.module.scss';

const images = [
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/300/300',
  'https://picsum.photos/id/3/400/300',
  'https://picsum.photos/id/4/500/800',
];

const ImageAutoCarousel = () => {
  const [index, setImageIndex] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      console.log(ref.current);

      handleNext();
    }, 2000);

    return () => clearInterval(ref.current);
  }, [index]);

  const handlePrevious = () => {
    setImageIndex((val) => {
      if (val === 0) {
        return images.length - 1;
      }
      return val - 1;
    });
  };

  const handleNext = () => {
    clearInterval(ref.current);
    setImageIndex((val) => {
      if (val === images.length - 1) {
        return 0;
      }
      return val + 1;
    });
  };

  return (
    <div>
      <div className={styles.imageWrapper}>
        <img src={images[index]} className={styles.image} />
        {images[index]}
      </div>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ImageAutoCarousel;
