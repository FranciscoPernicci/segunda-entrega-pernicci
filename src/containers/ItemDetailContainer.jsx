import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <ItemDetail product={product} />
      <button onClick={() => navigate('/')}>Seguir comprando</button>
    </div>
  );
};

export default ItemDetailContainer;
