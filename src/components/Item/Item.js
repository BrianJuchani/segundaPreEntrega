import "bootstrap/dist/css/bootstrap.min.css"
import './Item.css'
import { Link } from "react-router-dom"


const Item=({id,name,img,price,stock})=>{
    return(
        <span >
        <div className="product card img">
            <img src={img} className=" card-img-top" alt={name}/>
            <div className="div_Item card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> ${price}</p>
                <p>stock disponible : {stock}</p>
                <Link to={`/item/${id}`}className="option">ver detalles</Link>
            </div>
        </div>
        </span>
    )
}
export default Item