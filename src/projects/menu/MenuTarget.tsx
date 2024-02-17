import { useContext } from 'react';

import { MainContext } from './Menu';

interface MenuTargetProps {
  children: React.ReactNode;
}

const MenuTarget = ({ children }: MenuTargetProps) => {
  const { setIsOpen } = useContext(MainContext);

  const handleClick = () => {
    setIsOpen((val) => !val);
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default MenuTarget;
