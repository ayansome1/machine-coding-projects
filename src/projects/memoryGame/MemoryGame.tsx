import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './MemoryGame.module.scss';

const rows = 4;
const emojis = [
  '🐵',
  '🐶',
  '🦊',
  '🐱',
  '🦁',
  '🐯',
  '🐴',
  '🦄',
  '🦓',
  '🦌',
  '🐮',
  '🐷',
  '🐭',
  '🐹',
  '🐻',
  '🐨',
  '🐼',
  '🐽',
  '🐸',
  '🐰',
  '🐙',
];

const MemoryGame = () => {
  const ref = useRef(null);
  const shuffledArray = useMemo(() => {
    const totalBoxes = rows * rows;
    const arr = emojis.slice(0, totalBoxes / 2);
    const newArr = [...arr, ...arr];
    const shuffledArr = newArr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffledArr;
  }, []);
  const [count, setCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState({});
  const [selectedEmojiIndexFirst, setSelectedEmojiIndexFirst] = useState(null);
  const [isWon, setIsWon] = useState(false);
  const [selectedEmojiIndexSecond, setSelectedEmojiIndexSecond] =
    useState(null);

  const resetLastTwoSelection = (index) => {
    setIsRevealed((obj) => ({
      ...obj,
      [selectedEmojiIndexFirst]: false,
      [index]: false,
    }));
    setSelectedEmojiIndexFirst(null);
    setSelectedEmojiIndexSecond(null);
  };

  const handleClick = (index) => {
    if (ref.current !== null) {
      clearTimeout(ref.current);
      ref.current = null;
      // return;
    }
    setCount((val) => val + 1);
    if (selectedEmojiIndexFirst === null) {
      setSelectedEmojiIndexFirst(index);
      setIsRevealed((obj) => ({
        ...obj,
        [index]: true,
      }));
      return;
    }
    if (
      isRevealed[index] === true
      // index === selectedEmojiIndexFirst ||
      // index === selectedEmojiIndexSecond
    ) {
      return;
    }
    if (selectedEmojiIndexSecond === null) {
      setSelectedEmojiIndexSecond(index);
      setIsRevealed((obj) => ({
        ...obj,
        [index]: true,
      }));

      if (shuffledArray[selectedEmojiIndexFirst] !== shuffledArray[index]) {
        const t = setTimeout(() => {
          resetLastTwoSelection(index);
          ref.current = null;
        }, 2000);
        ref.current = t;
      }

      return;
    }
    if (
      shuffledArray[selectedEmojiIndexFirst] !==
      shuffledArray[selectedEmojiIndexSecond]
    ) {
      setIsRevealed((obj) => ({
        ...obj,
        [selectedEmojiIndexFirst]: false,
        [selectedEmojiIndexSecond]: false,
        [index]: true,
      }));
      setSelectedEmojiIndexFirst(index);
      setSelectedEmojiIndexSecond(null);
      // resetLastTwoSelection(index);
      return;
    }
    if (
      shuffledArray[selectedEmojiIndexFirst] ===
      shuffledArray[selectedEmojiIndexSecond]
    ) {
      setIsRevealed((obj) => ({
        ...obj,
        [index]: true,
      }));
      setSelectedEmojiIndexFirst(index);
      setSelectedEmojiIndexSecond(null);
    }
  };

  useEffect(() => {
    if (
      Object.values(isRevealed).filter((val) => val === true).length ===
      rows * rows
    ) {
      setIsWon(true);
    }
  }, [isRevealed]);

  // useEffect(() => {
  // 	const t = setTimeout(() => {

  // 	})
  // }, [count])

  return (
    <div>
      <div
        className={styles.wrapper}
        style={{ gridTemplateColumns: `repeat(${rows}, 120px)` }}
      >
        {shuffledArray.map((val, index) => (
          <button className={styles.card} onClick={() => handleClick(index)}>
            {isRevealed[index] ? val : ''}
          </button>
        ))}
        {/* {count} */}
      </div>
      {isWon && <h1>You won</h1>}
    </div>
  );
};

export default MemoryGame;
