import { useContext } from 'react'

import CartContext from './cartcontext'
import CartList from './cartlist' 

const Cart = (props) => {
    const CartCtx = useContext(CartContext)
    const totalPrice = CartCtx.totalPrice
    const hasItem = CartCtx.items.length > 0
    const onAdd = (item) => {
        CartCtx.onAdd({...item, quantity: 1})
    }
    const onRemove = (id) => {
        CartCtx.onRemove(id)
    }
    const cartList = CartCtx.items.map((item) => (
        <CartList key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        onAdd={onAdd.bind(null, item)}
        onRemove={onRemove.bind(null, item.id)} />
    ))
    return(
        <div>
            <div> {cartList} </div>
            <div><span>Total Price: </span> {totalPrice} </div>
            <div>
            <button onClick={props.hideCartHandler} > Close </button>
            {hasItem && <button> Confirm </button>}
            </div>
            
        </div>
    )
}

export default Cart