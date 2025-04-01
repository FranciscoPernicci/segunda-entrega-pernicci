import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { productsData } from '../js/data'; // Importa los datos

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filteredProducts = category
      ? productsData.filter(product => product.category === category)
      : productsData;
    setProducts(filteredProducts);
    setLoading(false);
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;

  return <ProductList products={products} />;
};

export default ItemListContainer;

