import { useState } from "react";
import './ItemCount.css'



const ItemCount=({stock,initial,onAdd})=>{
    const [quantity,setQuantity]= useState(initial);
    
    const increment=()=>{
        if(quantity<stock){
            setQuantity(quantity+ 1)
        }
    }
    const descrement=()=>{
        if(quantity> 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div >
            <div className="div_ItemCount" >
                <button className="div_ItemCount_masomenos" onClick={descrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="div_ItemCount_masomenos" onClick={increment}>+</button>
            </div>
            <div className="button_ItemCount" > 
                <button className="button_carrito" onClick={()=> onAdd(quantity)} disabled={!stock}>agregar el carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;
