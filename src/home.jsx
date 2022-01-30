import { useState } from 'react'

import Meals from './meals'
import Header from './header'
import Cart from './cart'
import CartProvider from './cartprovider'


const Home = () => {
    const [showCart, setShowCart] = useState(false)
    const showCartHandler = () => {
        setShowCart(true)
    }
    const hideCartHandler = () => {
        setShowCart(false)
    }
    return(
        <div>
            <CartProvider>
            <Header showCartHandler={showCartHandler} />
            {showCart && <Cart hideCartHandler={hideCartHandler} />}
            <Meals />
            </CartProvider>
        </div>
    )
}

export default Home