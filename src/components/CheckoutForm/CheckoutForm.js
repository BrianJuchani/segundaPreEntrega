import './checkoutForm.css'
import { useState } from "react"


const CheckoutForm = ({onConfirm})=>{
    const [name,setName]= useState ('')
    const [phone,setPhone]= useState('')
    const [email,setEmail]= useState('')
    const handleConfirm = (event)=>{
        event.preventDefault()
        const userData={
            name,phone,email
        };
        onConfirm(userData)
    }  
    return(
        <div >
            <form className="colums" onSubmit={handleConfirm}>
                <label className='subtitulos'>
                    Nombre:
                    <input className='input' value={name} type="text" onChange={({target})=>setName(target.value)}/>
                </label>
                <label className='subtitulos'> 
                    Telefono:
                    <input className='input' value={phone} type="text" onChange={({target})=>setPhone(target.value)}/>
                </label>
                <label className='subtitulos'>
                    Email:
                    <input className='input' value={email} type="text" onChange={({target})=>setEmail(target.value)} />
                </label >
                <div className='buttom-crear' >
                    <button className='buttom-e' type="submit">crear orden</button>
                </div>

            </form>
        </div>
         
         
    )   
                         



}

export default CheckoutForm