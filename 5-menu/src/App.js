import React, {useEffect, useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Both method work:
    // const newCategories = menuItems.map(item => item.category)
    //   .filter((value, index, self) => self.indexOf(value) === index)
    const newCategories = [...new Set( menuItems.map(item => item.category))];
    setCategories(newCategories);
  }, [])

  console.log('categories=', categories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
