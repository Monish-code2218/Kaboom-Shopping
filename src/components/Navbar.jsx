import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Navbar({ openCart, cartCount }) {
    return (
        <Router>
            
            <nav class=" bg-cyan-600 ">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a  class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="icon/icon.png" class="h-8" alt="Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kaboom Shopping</span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <button onClick={openCart} className=' dark:bg-gray-700 text-white px-4 py-2 rounded-full'>
                             {cartCount}<Link to="/cart"> Cart</Link>
                        </button>
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-50 dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-3 mx-auto">
                    <div class="flex items-center">
                        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li class="text-gray-900 dark:text-white hover:underline">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="text-gray-900 dark:text-white hover:underline">
                                <Link to="/products">Products</Link>
                            </li>
                            <li class="text-gray-900 dark:text-white hover:underline">
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Router>
    )
}

export default Navbar