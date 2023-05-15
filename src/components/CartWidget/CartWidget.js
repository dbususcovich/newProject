import cart from '../../assets/Cart.svg'
import './CartWidget.css'
import { useCart } from '../../context/CartContext';



const CartWidget = () => {

    const { totalCantidad } = useCart()
    return(
        <div to='/cart' className="contenedorWidget">
<img src={cart} alt='cart-widget' className='CartImg'/>
{totalCantidad}
        </div>
    );
}

export default CartWidget