import React from 'react';
import ReactDOM from 'react-dom/client'; // Aquí está la corrección
import App from './App';
import '../src/index.css';
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);