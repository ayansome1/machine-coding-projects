import styles from './Menu.module.scss';

interface MenuItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
const MenuItem = ({ children, disabled, ...props }: MenuItemProps) => {
  return (
    <div
      className={`
        ${styles.menuItemContainer}
        ${disabled ? styles.menuItemDisabled : ''}
        `}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </div>
  );
};

export default MenuItem;
