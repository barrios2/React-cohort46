import React, { useState } from 'react';

export default function Category({ category, setActiveCategory }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActiveCategory(category.substring(6));
    setActive(prevState => prevState ? false : true);
  };

  return (
    <li className={'category-item'}>
      <button className={`${active ? 'active' : ''}`} onClick={handleClick}>{category.substring(6)}</button>
    </li>
  );
}
