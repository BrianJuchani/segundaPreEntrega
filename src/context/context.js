import { createContext , useState } from "react";

export const CartContext=createContext ({
    cart: []
})

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    console.log(cart)


            //agregar item
    const addItem= (item,quantity)=>{ 
        if(!isInCart(item.id)){
            setCart(prev=>[...prev,{...item,quantity}])
        }else{
            console.error('el producto fue agregado')
        }
    }

            //remover item
    const removeItem =(itemId)=>{ 
        const cartUpdated=cart.filter(prod=> prod.id !== itemId)
        setCart(cartUpdated)
    }

          //eliminar los items
    const clearCart=()=>{ 
        setCart([])
    }

            //verificador si el producto fue agregado
    const isInCart=(itemId)=>{ 
        return cart.some (prod=> prod.id ===itemId)
    }
    const total = () => {
        let price = 0
        if (cart.length > 0) {
            for (const item of cart) {
                price += item.price * item.quantity
            }
        }
        return price
    }
    const totalQuantity = () => {
        let quantity = 0

        for (const item of cart) {
            quantity += item.quantity
        }

        return quantity
    }
    return(
        <CartContext.Provider value={{totalQuantity, clearCart,removeItem,addItem,cart,total}}>
            {children}
        </CartContext.Provider>
    )
}
  