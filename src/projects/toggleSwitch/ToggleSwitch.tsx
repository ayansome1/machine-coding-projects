import { useState } from 'react';
import styles from './ToggleSwitch.module.scss';
import cx from 'classnames';

const ToggleSwitch = ({ defaultChecked = false, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleClick = () => {
    setChecked((val) => {
      onChange(!val);
      return !val;
    });
  };

  return (
    <>
      <span
        role='checkbox'
        aria-checked={checked}
        className={`${styles.switch} ${checked ? styles.switchOn : ''}`}
        onClick={handleClick}
      >
        <span className={styles.dot}></span>
      </span>
    </>
  );
};

export default ToggleSwitch;
