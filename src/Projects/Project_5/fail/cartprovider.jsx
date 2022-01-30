import { useReducer } from 'react'

import CartContext from "./cartcontext";

const initialState = {
    items: [],
    totalPrice: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotalPrice = state.totalPrice + action.item.quantity * action.item.price; 
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems;
        if(existingItem){
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity,
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }else{
            updatedItems = state.items.concat(action.item)
        }
        return{
            items: updatedItems,
            totalPrice: updatedTotalPrice,
        }
    }
    if(action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingItemIndex]
        const updatedTotalPrice = state.totalPrice - existingItem.price;
        let updatedItems;
        if(existingItem === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id)
        }else{
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem

        }
        return{
            items: updatedItems,
            totalPrice: updatedTotalPrice,
        }
    }
    return initialState
}

const CartProvider = (props) => {
    const [cartState, cartDispAction] = useReducer(cartReducer, initialState);

    const addHandler = (item) => {
        cartDispAction({
            type: 'ADD',
            item: item,
        })
    }

    const removeHandler = (id) => {
        cartDispAction({
            type: ' REMOVE',
            id: id,
        })
    }

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        onAdd: addHandler,
        onRemove: removeHandler,
    }

    return(
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider