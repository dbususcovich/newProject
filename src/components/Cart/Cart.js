import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, total } = useCart()

    return (
    <div>
    <h3>Carrito</h3>
    <div>
     { cart.map(prod => {
       return (
        <div className="cartContainer">
            <div key={prod.id} >
            <h2>{prod.name}</h2>
            <h2>${prod.price} x Unidad</h2>
            <h2>Cantidad: {prod.quantity}</h2>
          </div>
          </div>
   )
  })  }
  </div >
  <div className="priceContainer">
    <h1>Total ${total}</h1>
   <Link to='/checkout' className="Option">Finalizar compra</Link>
      </div> 
       </div>
    )
}

export default Cart