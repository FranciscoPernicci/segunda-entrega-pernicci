import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./components/NotFound"; 
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            {/* Ruta 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
