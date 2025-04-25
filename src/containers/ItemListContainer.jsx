import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { getProducts, filterByCategory } from '../firebase/db';

const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const { category } = useParams()
  

  useEffect(() => {
    if (category) {
      filterByCategory(category)
      .then(data => setProducts(data))
    } else {
      getProducts()
      .then(data => setProducts(data));
    }
  }, [category]);


  return <ItemList products={products} />
 
  
};

export default ItemListContainer
