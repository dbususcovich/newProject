import logo from '../../assets/Logo.png'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'


const Navbar = () => {
    

return(
     <nav className='Navbar'>
  <Link to='/' className="nav__link"><img src={logo} alt = 'Logo-Navbar'/> </Link>

  <NavLink to='/category/Destilados' className={({ isActive }) => isActive ? 'botonbarraactivo' : 'botonbarra'}>Destilados</NavLink>
 
  <NavLink to='/category/Cervezas' className={({ isActive }) => isActive ? 'botonbarraactivo' : 'botonbarra'}>Cervezas</NavLink>

   <NavLink to='/category/Vinos' className={({ isActive }) => isActive ? 'botonbarraactivo' : 'botonbarra'}>Vinos</NavLink>
  
        <div className='widgetcontainer'><CartWidget /></div>
        
        
        
        </nav>
    )
}
export default Navbar
