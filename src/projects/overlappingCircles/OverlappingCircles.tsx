import { useEffect, useRef, useState } from 'react';
import styles from './OverlappingCircles.module.scss';

const radius = 100;
const OverlappingCircles = () => {
  const [locations, setLocations] = useState([]);
  const canvasRef = useRef(null);

  const isOverlapping = (x, y) => {
    const newLocations = locations.slice(0, locations.length - 1);

    const res = newLocations.some((val) => {
      const distance = Math.sqrt(
        Math.pow(val.x - x, 2) + Math.pow(val.y - y, 2)
      );
      if (distance <= radius + radius) {
        return true;
      }
      return false;
    });
    return res;
  };

  useEffect(() => {
    if (!locations.length) {
      return;
    }
    const { x, y } = locations[locations.length - 1];
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = isOverlapping(x, y) ? 'red' : 'green';
    context.fill();
  }, [locations]);

  const handleMouseEvent = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setLocations((arr) => [...arr, { x, y }]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', handleMouseEvent);

    // Clean up function
    return () => {
      canvas.removeEventListener('mousedown', handleMouseEvent);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      width={2000}
      height={1000}
    />
  );
};

export default OverlappingCircles;
