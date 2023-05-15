import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../components/Firebase/Firebase'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList.js'
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        const productsRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(productsRef)
        .then(snapshot => {
           
            const productsAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
              throw error    })
        .finally(() => {
            setLoading(false)
        })
       
    }, [categoryId])

    
    if(loading) {
        return (
            <div>
                <Loader/>
           </div>
        )
    }


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
