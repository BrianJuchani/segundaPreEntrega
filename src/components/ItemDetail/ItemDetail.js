import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css'
import'./ItemDetail.css'

import { Link } from "react-router-dom";
import { CartContext } from "../../context/context";

import { useContext, useState } from "react";

const ItemDetail = ({id,name,img,Category,description,price,stock})=>{
    const  [quantityadded, setQuantityAdded]= useState (0)

    const {addItem}=useContext(CartContext)
    
    const handleOnAdd=(quantity)=>{
        setQuantityAdded(quantity)
        const item={
            id,name,price
        }
        addItem(item,quantity)
    }
    return(
        <div className="div_Datail card">
            <img src={img} className="img card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <p>stock disponible : {stock}</p>
                <p>{description}</p>
                <h6>{Category}</h6>
            </div>
            <footer >
                {
                    quantityadded > 0 ? (
                        <Link className="button-terminar" to= '/cart'>terminar comprar</Link>
                        

                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                    
                }
                
            </footer>
        </div>

    )
}
 export default ItemDetail
