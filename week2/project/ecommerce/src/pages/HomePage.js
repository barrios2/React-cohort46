import { useState } from 'react';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

export default function Homepage({ setActiveProductInfo }) {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <>
      <CategoryList setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
      <ProductList activeCategory={activeCategory} setActiveProductInfo={setActiveProductInfo}/>
    </>
  )
};
