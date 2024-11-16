import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function CartModal({ closeCart, cartItems, quantities, updateQuantity, removeFromCart, removeItem }) {





    cartItems.reduce = () => {
        let totalAmount = 0;
        cartItems.forEach((item) => {
            totalAmount += item.price;
        });
        return totalAmount;
    };



    return (

        <div className='fixed inset-0 flex w-full border px-4 py-4 bg-black bg-opacity-50  justify-center items-center'>
            <div className='bg-white p-6 rounded-lg  shadow-xl'>
                <h2 className='text-xl font-bold text-gray-700 mb-4'>Your Cart</h2>
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className='flex w-full border px-4 py-4'>
                                <img src={item.image} alt={item.title} className='w-12 h-12' />
                                <div className='text-gray-700'>{item.title}</div>

                                <div className='py-3 text-xl font-bold text-violet-900'>{item.price}$</div>

                                <div className='mt-2 flex w-full items-center justify-between'>

                                    <div className='flex items-center justify-center'>
                                        <button className='flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500' style={{ margin: "1%" }}

                                            onClick={() => updateQuantity(item.id, quantities[item.id] - 1)}

                                        >-</button>

                                        <button className='flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500'
                                            onClick={() => updateQuantity(item.id, Math.max, quantities[item.id] + 1)}
                                        >+</button>

                                    </div>

                                    <FaTrashAlt
                                        onClick={() => removeFromCart(item.id)}
                                        className="m-0 h-5 w-5 cursor-pointer"
                                    />



                                </div>
                            </div>
                        ))}
                        <div className='checkout-section'>
                            <div className='total-price'>
                                <p className='total-price-text'>Total Price:$
                                    {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                                </p>
                            </div>
                            <button>


                            </button>


                        </div>
                    </div>
                ) : (<p className='text-gray-60'>Your cart is empty.</p>)}
                <button onClick={closeCart} className='mt-4 dark:bg-gray-700 text-white w-full py-2 rounded-full'>Close</button>
                <button onClick={closeCart} className='mt-4 dark:bg-gray-700 text-white w-full py-2 rounded-full'>Checkout</button>


            </div>
        </div>
    )
}

export default CartModal