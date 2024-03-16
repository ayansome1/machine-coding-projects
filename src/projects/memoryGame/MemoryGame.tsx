import { useEffect, useMemo, useState } from 'react';
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
  // const shuffledArray = useRandomArray({ rows: rows, emojis: emojis });
  const [count, setCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState({});
  const [selectedEmojiIndexFirst, setSelectedEmojiIndexFirst] = useState(null);
  const [isWon, setIsWon] = useState(false);
  const [selectedEmojiIndexSecond, setSelectedEmojiIndexSecond] =
    useState(null);

  const handleClick = (index) => {
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
