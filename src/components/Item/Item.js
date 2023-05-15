import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({id, name, img, price }) => {

    
    return (
        <div className="Card">
            
                <h3 className="ItemHeader">
                    {name}
                </h3>
           
            <div>
                <img src={img} alt={name} className="ItemImg"/>
            </div>
            
                <p className="Info">
                    Precio: ${price}
                </p>
                     
            <footer >
               <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>

            </footer>
        </div>
    )
}

export default Item
