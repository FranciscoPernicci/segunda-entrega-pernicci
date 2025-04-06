import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { productsData } from '../js/data'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    setLoading(true);
  
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  const handleContinueShopping = () => {
    navigate('/'); 
  };

  const handleCheckout = () => {
    navigate('/cart'); 
  };

  if (loading) return <p>Cargando detalles...</p>;

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.thumbnail} alt={product.title} />
      <button onClick={handleContinueShopping}>Seguir Comprando</button>
      <button onClick={handleCheckout}>Finalizar la compra</button>
    </div>
  );
};

export default ItemDetailContainer;
