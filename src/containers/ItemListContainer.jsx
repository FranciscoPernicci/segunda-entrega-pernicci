import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';


const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const endpoint = category
          ? `https://dummyjson.com/products/category/${category}`
          : `https://dummyjson.com/products`;
        const res = await fetch(endpoint);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;

  return <ItemList products={products} />;

};

export default ItemListContainer;
