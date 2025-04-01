import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No hay productos para mostrar</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-link">
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
