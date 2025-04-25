const CartItem = ({ item, onDelete }) => (
    <div className="border p-2 mb-2">
      <h5>{item.name}</h5>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio total: ${item.price * item.quantity}</p>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
  
  export default CartItem;
  