import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title}className="product-image" />
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
