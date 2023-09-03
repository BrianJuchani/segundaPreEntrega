import { NavLink,Link } from "react-router-dom";
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return(
        <nav  className="NavBar" > 
            <Link to="/">
                <h3 className="logo">BJfit</h3>
            </Link>
            <NavLink  to={`/category/Remera`}className={({isActive})=> isActive? 'ActiveOption':'Option'} >Remera</NavLink>
            <NavLink  to={`/category/Pantalon`}className={({isActive})=> isActive? 'ActiveOption':'Option'}>Pantalon</NavLink>
            <NavLink to={`/category/asesorios`}className={({isActive})=> isActive? 'ActiveOption':'Option'}>asesorios</NavLink>
            <div>
            <CartWidget/>
            </div>

        </nav>
     
    )

}

export default NavBar