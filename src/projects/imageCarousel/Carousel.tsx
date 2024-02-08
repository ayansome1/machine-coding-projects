import { useState } from 'react';
import styles from './Carousel.module.scss';
interface ImageType {
  src: string;
  alt?: string;
}

interface CarouselProps {
  images: Array<ImageType>;
  height?: string;
  width?: string;
}

const Carousel = ({
  images,
  height = '600px',
  width = '700px',
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((val) => val - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((val) => val + 1);
  };
  return (
    <div style={{ height: height, width: width }} className={styles.container}>
      <button
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
        className={styles.btnContainer}
      >
        {'<'}
      </button>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={styles.image}
          loading='lazy'
        />
      </div>
      <button
        onClick={handleNextClick}
        disabled={currentIndex === images.length - 1}
        className={styles.btnContainer}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
