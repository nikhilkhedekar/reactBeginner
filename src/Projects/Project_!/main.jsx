
import { useState } from 'react'

import Header from './header'
import Item from './item'
import Cart from './cart'
import SignIn from './signin'
import Nav from './navigation'


//cart pending
const App = () => {
    const [showCart, setShowCart] = useState(false);
    const [status, setStatus] = useState(false);
    const [interCom, setInterCom] = useState(false);

    const signInHandler = () => {
        setStatus(true)
    }

    const homePageHandler = () => {
        setStatus(false)
    }

    const interComHandler = () => {
        setInterCom(true)
    }

    const showCartHandler = () => {
        setShowCart(true);
    }

    const cancelHandler = () => {
        setShowCart(false)
    }

    const rootHome = () => {
        setShowCart(false)
        setInterCom(false)
    }

    return (
        <div>
            <div>
                <Header status={status}
                homePageHandler={homePageHandler}  
                interCom={interCom} 
                interComHandler={interComHandler} 
                showCart={showCart} 
                showCartHandler={showCartHandler}
                cancelHandler={cancelHandler} />
            </div><hr />
            {!status ? <SignIn signInHandler={signInHandler} status={status} /> : null}
            {status ? <Nav rootHome={rootHome} /> : null}
            {status && interCom && !showCart && <Item showCartHandler={showCartHandler}  />}
            {status && interCom && showCart && <Cart showCart={showCart}   cancelHandler={cancelHandler} /> }
        </div>
    )
}

export default App