import CartItem from './CartItem';
import { useCart } from '../context/CartContext';

const CartList = () => {
  const { cart, deleteProduct } = useCart();

  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onDelete={deleteProduct} />
      ))}
    </div>
  );
};

export default CartList;
