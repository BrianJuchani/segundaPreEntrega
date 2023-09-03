import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({products})=>{
    return(
        <div className="product">
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
        //los "..." son para recibir todo los parametros ej: name,price,etc
    )
}
export default ItemList