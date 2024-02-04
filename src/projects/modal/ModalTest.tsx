import { useState } from 'react';
import Modal from './Modal';

const ModalTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal
        content={'i am a modal'}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ModalTest;
