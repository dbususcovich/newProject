import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail.js";
import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../Firebase/Firebase.js'
import Loader from '../Loader/Loader.js';


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    useEffect( () => {
        setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProducts(productAdapted)
            })
            .catch(error => {
                throw error
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    
    if(loading) {
        return (
            <div>
                <Loader/>
            </div>
        )
    }

    return(
        <div className="itemdetailContainer">
           
            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer