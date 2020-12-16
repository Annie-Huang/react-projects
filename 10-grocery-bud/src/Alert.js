import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);

    // watch against the list change, otherwise the 3 seconds only apply on the first 3 seconds interval call.
    // e.g if user add an item, wait for 2s and then clear all items, the 2nd alert msg will only appear for 1s, rather than resetting the 3s clock again.
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
