import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [] = useState(false);
  const bcg = rgb.join(',');
  console.log(bcg);

  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      {/* <p className='color-value'>{hex}</p> */}

      {/* <p className='color-value'>`#${hexColor}`</p> // this one will not work */}
      <p className='color-value'>{hexValue}</p>
    </article>
  );
};

export default SingleColor;
