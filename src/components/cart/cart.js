import { useContext } from "react"
import { CartContext } from "../../context/context"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './cart.css'

const Cart = () =>{
    const{cart,clearCart,totalQuantity,total}= useContext(CartContext);

    if(totalQuantity === 0){
        return(
            <div>
                <h1>no hay items en el carrito</h1>
                <Link to={'/'}>productos</Link>
            </div>
        )
    }
    return(
        <div className="fondo-cart">
            {cart.map(products => <CartItem key={products.id}products={products}/>)}

            <div>
                <p>total: ${total()}
                </p>
                <div>
                    <Link className="finalizar" to={'/checkout'}>Finalizar la compra</Link>
                </div>     
                <div className="vaciar" >
                    <button className="button-vaciar" onClick={()=>clearCart()}>vaciar carrito</button>
                </div>
            </div>

        </div>
    )
}
export default Cart;