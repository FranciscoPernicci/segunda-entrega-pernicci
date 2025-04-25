import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext);  
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
      🛒 <span>{totalUnidades()}</span> {/* Muestra el número total de unidades */}
    </div>
  );
};

export default CartWidget;

