import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count); // string display as black color in chrome dev tool
    console.log(typeof count);
    let amount = parseInt(count); // change it to int
    console.log(amount); // number display as blue color in chrome dev tool

    if (count <= 0) {
      amount = 1;
    }
    // if count is 9, display [0, 8)
    // Not sure why it choose 8, the data.js got 9 string, should be compare with 9.
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>

      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
