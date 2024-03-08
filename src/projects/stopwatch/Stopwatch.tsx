import { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setTime((val) => val + 10);
    }, 10);
    if (isPaused) {
      clearInterval(t);
    }
    if (isReset) {
      clearInterval(t);
      setTime(0);
      setIsReset(false);
    }

    return () => {
      clearInterval(t);
    };
  }, [isPaused, isReset]);

  const handleStartStopClick = () => {
    setIsPaused((val) => !val);
  };

  const handleResetClick = () => {
    setIsReset(true);
    setIsPaused(true);
  };

  return (
    <div>
      {time / 1000} sec
      <div>
        <button onClick={handleStartStopClick}>
          {isPaused ? 'Start' : 'Stop'}
        </button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
