import React, { useEffect } from 'react';

const Alert = ({ type, msg }) => <p className={`alert alert-${type}`}>{msg}</p>;

export default Alert;
