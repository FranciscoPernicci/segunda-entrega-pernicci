// src/context/CartProvider.jsx
import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some(prod => prod.id === id);

  const addProduct = (product) => {
    if (!product.quantity || product.quantity <= 0) return;

    const formattedProduct = {
      ...product,
      quantity: Number(product.quantity) || 1,
      price: Number(product.price) || 0,
    };

    if (isInCart(formattedProduct.id)) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === formattedProduct.id
            ? { ...item, quantity: item.quantity + formattedProduct.quantity }
            : item
        )
      );
    } else {
      setCart(prev => [...prev, formattedProduct]);
    }
  };

  const deleteProduct = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const getProductsQuantity = () => {
    return cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const price = Number(item.price);
      return acc + (isNaN(price) ? 0 : (item.quantity || 0) * price);
    }, 0);
  };

  const values = {
    cart,
    addToCart: addProduct,
    deleteProduct,
    clearCart,
    totalUnidades: getProductsQuantity,
    getTotal,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
