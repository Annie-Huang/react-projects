import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' }); // the object will contain color and text

  return (
    <section className='section-center'>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear items</button>
      </div>
    </section>
  );
}

export default App;