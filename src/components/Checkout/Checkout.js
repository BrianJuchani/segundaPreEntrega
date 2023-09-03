import { useContext, useState } from "react";
import './CheCkout.css'
import { db } from "../../services/firebase/firebaseConfing";
import { CartContext } from "../../context/context";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { collection,query,where,getDocs,addDoc,writeBatch,Timestamp,documentId , } from "firebase/firestore";





const Checkout= () =>{
    const [loading,setLoading] = useState ( false)
    const [orderId,setOrderId] = useState ('')

    const {cart,total,clearCart} = useContext ( CartContext);
    const createOrder = async ( { name , phone , email})=>{
        setLoading(true);

        try{
            const objOrder = {
                buyer:{
                    name,phone,email
                },
                items:cart,
                total:total(),
                date:Timestamp.fromDate(new Date ())
            }
            const batch = writeBatch(db)

            const outOfStock= []
            const ids=cart.map(items=>items.id)
            const productsRef=collection(db,'products')
            const productsAddedFromFirestore=await getDocs(query(productsRef,where(documentId(),'in',ids)))
            const {docs}= productsAddedFromFirestore;

            docs.forEach(doc=>{
                const dataDoc=doc.data()
                const stockDb= dataDoc.stock;
                
                const productAddedToCart=cart.find(items=>items.id===doc.id)
                const prodQuantity = productAddedToCart?.quantity;

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref,{stock: stockDb - prodQuantity});
                }else{
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            });
            if ( outOfStock.length === 0){

                await batch.commit()
                const orderRef = collection(db,'orders')
                const orderAdded = await addDoc(orderRef,objOrder)
                setOrderId(orderAdded.id)
                clearCart();
            }else{
                console.error('no hay productos en el stock')
            }

        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    if(loading){
        return<h1 className="fondo-fin">se esta generando tu orden</h1>
    }
    if(orderId){
        return <h1 className="fondo-fin" >el id de su orden es : {orderId}</h1>
    }
    return(
        <div className="fondo-check">
            <h1 className="titulo-check">Checkout</h1>
            <CheckoutForm onConfirm ={createOrder}/>
            
        </div>

    )
}
export default Checkout
