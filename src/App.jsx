import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);




  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };





  return (
    <div>
      <Navbar cartCount={cartItems.length} openCart={openCart} />
      <ProductList cartItems={cartItems} setCartItems={setCartItems} />
      {
        isCartOpen && (
          <CartModal cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} />
        )
      }
      <Footer />
      </div>


  )
}

export default App