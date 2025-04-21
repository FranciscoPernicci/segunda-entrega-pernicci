import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: '200px' }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount product={product} />
    </div>
  );
};

export default ItemDetail;
