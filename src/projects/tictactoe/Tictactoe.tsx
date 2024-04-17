import { useEffect, useState } from 'react';
import styles from './Tictactoe.module.scss';

enum User {
  USER1 = 'USER1',
  USER2 = 'USER2',
}

const Tictactoe = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const [user, setUser] = useState(User.USER1);
  const handleClick = (index: number) => {
    setData((val) => {
      const newArray = [...val];
      newArray[index] = user;
      return newArray;
    });
    setUser((val) => {
      return val === User.USER1 ? User.USER2 : User.USER1;
    });
  };

  useEffect(() => {
    let winner;
    if (
      equals(data[0], data[1], data[2]) ||
      equals(data[0], data[4], data[8]) ||
      equals(data[0], data[3], data[6])
    ) {
      winner = data[0];
    } else if (
      equals(data[1], data[4], data[7]) ||
      equals(data[2], data[4], data[6]) ||
      equals(data[3], data[4], data[5])
    ) {
      winner = data[4];
    } else if (
      equals(data[2], data[5], data[8]) ||
      equals(data[6], data[7], data[8])
    ) {
      winner = data[8];
    }
    if (winner) {
      alert(winner === User.USER1 ? 'X' : 'o' + ' won');
    }
  }, [data]);

  const getSymbol = (val) => {
    if (val === User.USER1) {
      return 'X';
    }
    if (val === User.USER2) {
      return 'o';
    }
    return '';
  };

  const equals = (a: number, b: number, c: number) => {
    return a === b && b === c && b !== null;
  };

  return (
    <div className={styles.wrapper}>
      {data.map((val, index) => {
        return (
          <button
            className={styles.gridCell}
            disabled={val !== null}
            onClick={() => handleClick(index)}
          >
            {getSymbol(val)}
          </button>
        );
      })}
    </div>
  );
};

export default Tictactoe;
