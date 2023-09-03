
import  { CartContext } from "../../context/context";
import React ,{ useContext } from "react";
import './CartItem.css'

const CartItem = ({products })=>{
    const {removeItem } = useContext(CartContext)
    return( 
        <div>
            <div className="a">
                <h2 className="descripcion-carrito">{products.name}</h2>
                
                <p className="descripcion-carrito">cantidad : {products.quantity}</p>
                <p className="descripcion-carrito">subtotal : {products.quantity * products.price}</p>
                <button className="descripcion-carrito" onClick={()=> removeItem (products.id)}>eliminar</button>
            </div>
        </div>
    )
}
export default CartItem