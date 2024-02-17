import { createContext, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

import styles from './Menu.module.scss';

interface MenuProps {
  children: React.ReactNode;
}

export const MainContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });
  return (
    <MainContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      <div className={styles.menuContainer} ref={ref}>{children}</div>
    </MainContext.Provider>
  );
};

export default Menu;
