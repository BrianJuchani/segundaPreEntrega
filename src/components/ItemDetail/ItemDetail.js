import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css'
import'./ItemDetail.css'

const ItemDetail = ({id,name,img,Category,description,price,stock})=>{
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agrega',quantity)}/>
            </footer>
        </div>

    )
}
 export default ItemDetail
