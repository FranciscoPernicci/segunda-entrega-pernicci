import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../Navbar.css";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">Electronica, Moda y Más!</h1>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        {categories.map((cat) => (
        <li key={cat.name}>
        <Link to={`/category/${cat.name}`}>
        {cat.name.charAt(0).toUpperCase() + cat.name.slice(1).replace("-", " ")}
    </Link>
  </li>
))}

      </ul>

      <div className="cart-icon">
        <span>Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)}) 🛒</span>
        <FaShoppingCart size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
