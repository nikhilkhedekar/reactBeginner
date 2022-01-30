import { createContext } from 'react'

const CartContext = createContext({
items: [],
totalAmont: 0,
onAdd: (item) => {},
onRemove: (id) => {},
})

export default CartContext