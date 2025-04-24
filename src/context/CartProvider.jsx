import { useState } from "react";
import { toast } from 'react-toastify';

function CartProvider ({children}) {
    const [cart, setCart] = useState ([])

    const isInCart = id => cart.some(prod => prod.id === id)

    const clearCart  = () => setCart([])

    const deleteProduct = id => {

    }

    const addProduct = product =>{

    }

    const getProductsQuantity = () => {

    }

    const getTotal = ()=>{

    } 

    const values = {
        clearCart,
        addProduct,
        deleteProduct,
        getProductsQuantity,
        getTotal,
        cart
    }


}
export default CartProvider

