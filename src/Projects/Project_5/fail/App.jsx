import { useState } from 'react'

import Header from './header'
import Meals from './meals'
import Cart from './cart'
import CartProvider from './cartprovider'

const App = () => {
    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }
    return (
        <div>
            <CartProvider>
                {showCart && <Cart hideCartHandler={hideCartHandler} />}
                <Header showCartHandler={showCartHandler} />
                <Meals />
            </CartProvider>
        </div>
    )
}

export default App