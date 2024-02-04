import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({ content, isOpen, onClose }) => {
  if (isOpen) {
    return createPortal(
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.close} onClick={onClose}>
            X
          </div>
          {content}
        </div>
      </div>,
      document.body
    );
  } else {
    return <></>;
  }
};

export default Modal;
