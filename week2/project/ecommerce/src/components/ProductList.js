import Product from './Product';
import { useEffect, useState } from 'react';

export default function ProductList({ activeCategory, setActiveProductInfo }) {
  const [productList, setProductList] = useState([]); // to store productList from API call
  const [filteredProducts, setFilteredProducts] = useState([]); // to store the products from filtered API call /products/category/:selectedCategory 
  const [isLoading, setIsLoading] = useState(false);
  const PRODUCTS_URL = 'https://fakestoreapi.com/products';

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(PRODUCTS_URL);
      const result = await response.json();
      setProductList(result); // change productList state to have all products 
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally{
      setIsLoading(false);
    }
  }

  const getFilteredProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${PRODUCTS_URL}/category/${activeCategory}`); // activeCategory changes depending on category selection (in Category component)
      const result = await response.json();
      setFilteredProducts(result); // change filteredProducts state to have only filtered product by category
    } catch (error) {
      console.error('Error fetching filtered product data:', error);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    if(activeCategory === ''){ // only fetch products when activeCategory is empty
      getProducts();
    } else {
      getFilteredProducts(); 
    }
  }, [activeCategory]); // fire useEffect when the activeCategory changes

  const getProductCard = (products) => {
    return products?.map((product) => <Product product={product} key={product.id} setActiveProductInfo={setActiveProductInfo}/>);
  }

  const children = activeCategory === '' ? getProductCard(productList) : getProductCard(filteredProducts);

  return (
    isLoading ? <p>{'Loading...'}</p> : <ul className='product-card-list'>{children}</ul>
  );
}
