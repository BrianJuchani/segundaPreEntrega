import { NavLink,Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () =>{
    return(
        <nav  className="NavBar" > 
            <Link to="/">
                <h3 className="logo">BJfit</h3>
            </Link>
            <NavLink  to={`/category/Remera`}className={({isActive})=> isActive? 'ActiveOption':'Option'} >Remera</NavLink>
            <NavLink  to={`/category/Pantalon`}className={({isActive})=> isActive? 'ActiveOption':'Option'}>Pantalon</NavLink>
            <NavLink to={`/category/asesorios`}className={({isActive})=> isActive? 'ActiveOption':'Option'}>asesorios</NavLink>
        </nav>
     
    )

}

export default NavBar