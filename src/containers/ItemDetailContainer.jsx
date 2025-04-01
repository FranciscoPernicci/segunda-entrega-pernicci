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
    const selectedProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
    setLoading(false);
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
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={handleContinueShopping}>Seguir Comprando</button>
      <button onClick={handleCheckout}>Finalizar la compra</button>
    </div>
  );
};

export default ItemDetailContainer;
