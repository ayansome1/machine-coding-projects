import { useContext } from 'react';

import { MainContext } from './Menu';
import styles from './Menu.module.scss';

interface MenuListProps {
  children: React.ReactNode;
}

const MenuList = ({ children }: MenuListProps) => {
  const { isOpen } = useContext(MainContext);

  if (isOpen) {
    return <div className={styles.menuListContainer}>{children}</div>;
  }

  return null;
};

export default MenuList;
