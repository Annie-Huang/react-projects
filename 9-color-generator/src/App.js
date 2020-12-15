import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  // This is only setting the default list, not the color, so the place holder of the input will remain there.
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);

    try {
      // 10 means 10 lighter than current value and 10 darker than current value. So colors.length = 21;
      // you can do 20 as well.
      let colors = new Values(color).all(10); // e.g. #222
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true); // e.g. 222
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => (
          // For some reason cannot directly pass hex to the child.
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </section>
    </>
  );
}

export default App;
