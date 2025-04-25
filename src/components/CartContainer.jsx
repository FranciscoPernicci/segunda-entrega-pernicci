import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartList from "./CartList";
import Button from "react-bootstrap/Button";

function CartContainer() {
  const { cart, getTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <h2 className="mt-5 text-center">No tienes productos en el carrito.</h2>;
  }

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <CartList cart={cart} />

      <div className="text-center mt-4">
        <h2>Total: ${getTotal()}</h2>
      </div>

      <Button
        className="w-50 mt-3"
        variant="success"
        onClick={() => navigate("/checkout")}
      >
        Finalizar la compra!
      </Button>
    </div>
  );
}

export default CartContainer;
