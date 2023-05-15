import { useState } from "react"
import './ContactForm.css'

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }

        
        onConfirm(userData)
    }

    return (
        <section className="section_form">
        <form onSubmit={handleSubmit}  className="feed-form"  >
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Nombre' required/>
        <input type='tel' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Telefono' required/>
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='E-mail' required/>
        <button  className="button_submit" type='submit' >Generar Orden</button>
    </form>
    </section>
    )
}

export default ContactForm