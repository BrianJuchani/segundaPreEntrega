import { useState,useEffect } from "react";
// import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'

 import {getDoc,doc} from 'firebase/firestore'
 import { db } from "../../services/firebase/firebaseConfing";

const ItemDetailContainer= () =>{
    const [product,setProduct]= useState(null)
    const {itemId}=useParams()
    useEffect(()=>{

        const docRef = doc (db, 'products',itemId)
        getDoc(docRef)
            .then(response=>{
                setProduct(
                    {...response.data(),id:response.id}
                )
            })
            .catch(error=>{
                console.error(error)
            })
    },[itemId])
    return(
        <div className="conteiner_ItemDetailContainer">
            <ItemDetail {...product}/>

        </div>
    )
}
export default ItemDetailContainer