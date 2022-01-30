import { createContext } from 'react'

const CartContext = createContext({
    items: [],
    totalPrice: 0,
    onAdd: () => {},
    onRemove: () => {},
})

export default CartContext