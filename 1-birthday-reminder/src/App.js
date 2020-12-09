import React, { useState } from 'react';

// Because in data.js, it has:
// export default [..]
// You can name it whatever name you want (the first word data), don't have to be 'data'
import data from './data';

import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => console.log('you clicked me')}>clear all</button>
    </section>
  </main>;
}

export default App;
