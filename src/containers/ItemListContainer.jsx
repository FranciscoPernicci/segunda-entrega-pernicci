import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { getProducts, filterByCategory } from '../firebase/db';

const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const { id } = useParams()
  

  useEffect(() => {
    if (id) {
      filterByCategory(id)
      .then(data => setProducts(data))
    } else {
      getProducts()
      .then(data => setProducts(data));
    }
  }, [id]);


  return <ItemList products={products} />
 
  
};

export default ItemListContainer
