import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const { addItem, isInCart } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        if(stock !== 0){
            addItem(productToAdd)
            setNotification('success', `Se agrego correctamente ${quantity} ${name}`, 20)
        } else {
            setNotification('error', `El producto ${name} no encuentra en stock `, 20)
        }    }

    return (
        
        <article className="cardDetailContainer">
                <h3 className="ItemHeader">
                    {name}
                </h3>
                <img src={img} alt={name} className="ItemImg"/>
            <section>
                <p >
                    Categoria: {category}
                </p>
                <p >
                    Descripción: {description}
                </p>
                <p >
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    isInCart(id) ? (
                       <Link to='/cart' className='Option'>Ver carrito</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
