import { useState,useEffect } from "react";
import { getProductos,getProductosByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting})=>{
    const [products,setProducts]=useState([])

    const{categoryId}=useParams()
    useEffect(()=>{
        const asyncFunc = categoryId? getProductosByCategory: getProductos
        asyncFunc(categoryId)
            .then(Response => {
                setProducts(Response)
            })
            .catch(error =>{
                console.error(error)
            })


    },[categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer