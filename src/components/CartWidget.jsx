// CartWidget.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext);

  return (
    <div>
      🛒
      <span>{totalUnidades()}</span>
    </div>
  );
};

export default CartWidget;
