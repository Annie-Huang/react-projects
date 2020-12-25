import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  //  show-modal was the class to control whether we see it or not.
  return (
    // <div className={`modal-overlay show-modal`}>
    <div className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
