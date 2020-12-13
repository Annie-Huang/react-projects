import React, {useEffect, useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  // I thought we will have to come up with the categories names ourselves.
  useEffect(() => {
    // Both method work:
    // const newCategories = menuItems.map(item => item.category)
    //   .filter((value, index, self) => self.indexOf(value) === index)
    const newCategories = [...new Set( menuItems.map(item => item.category))];
    setCategories(newCategories);
  }, [])

  const filterItems = (category) => {
    // filter through original list, not the menuItems, which may have set to another list.
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
