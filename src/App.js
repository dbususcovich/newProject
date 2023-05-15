import './App.css';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.js'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import { NotificationProvider } from './notification/NotificationService';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
<NotificationProvider>
<CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Si alguien pregunta, estabas  en la floreria ;)'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Aca esta lo que estabas buscando'}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/contact" element={<h1>Contacto</h1>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App;