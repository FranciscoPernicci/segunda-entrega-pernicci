import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    addToCart({ ...product, quantity: count });
  };

  return (
    <div>
      <div>
        <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
