import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <h1 className="logo">Tienda de Electrónica y Moda </h1>
      <div>
      <span>Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)}) 🛒</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/electronics">Electrónica</Link></li>
        <li><Link to="/category/clothing">Ropa</Link></li>
      </ul>
      <div className="cart-icon">
        <FaShoppingCart size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
