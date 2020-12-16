import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []); // Whenever input property change, the whole component will re-render so you can keep [] in useEffect

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
