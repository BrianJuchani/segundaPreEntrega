import carts from '../../img/carts.avif'
import { useContext } from "react";
import { CartContext } from "../../context/context";
import {  Link } from "react-router-dom";
import './CartWidget.css'




const CartWidget = () =>{
    const {totalQuantity} = useContext ( CartContext);
    return(
        <Link  to='/cart' n>
            <img className="carrito"  src={carts}alt='carrito' />
            <span className='num'>({totalQuantity})</span>
        </Link>
    )
}
export  default CartWidget
