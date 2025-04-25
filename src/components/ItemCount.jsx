import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ItemCount = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    const item = { ...product, quantity: count };
    addToCart(item);

    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 2000,
      background: '#fff',
    });
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
