import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../Firebase/Firebase"
import { useState } from 'react'
import { useNotification } from "../../notification/NotificationService"

import { useNavigate } from "react-router-dom"

import ContactForm from "../ContactForm/ContactForm"
import Loader from "../Loader/Loader"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const [orderId, setOrderId] = useState('')


    const { setNotification } = useNotification()

    const navigate = useNavigate()

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const { docs } = await getDocs(productsRef)

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (outOfStock.length === 0) {
                batch.commit()

                const ordersRef = collection(db, 'orders')

                const orderAdded = await addDoc(ordersRef, objOrder)

                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                setNotification('error', 'No hay stock de ese producto', 10)
            }
        } catch (error) {
            setNotification('error', 'Hubo un error con la orden', 10)
        } finally {
            setLoading(false)
        } }
    if (loading) {
        return (
            <div>
               <Loader/>
            </div>
        )
    }

    if (orderId) {
   return (
    <div>
    <h1>El id de su compra es: {orderId}</h1>
    </div>
        ) }

    return (
        <div>
            <h1>Ya casi...</h1>
            <h2>Ingresa tus datos</h2>
            <ContactForm onConfirm={createOrder} />

        </div>
    )
}

export default Checkout