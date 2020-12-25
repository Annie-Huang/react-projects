import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  //  show-modal was the class to control whether we see it or not.
  return (
    // <div className={`modal-overlay show-modal`}>
    <div className={`modal-overlay`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn'>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
