import CartContext from "./cartcontext"

const defaultState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotalamount = state.totalAmount + action.item.price * action.item.amount
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingItem = state.items[existingItemIndex]
        let updatedItems;
        if(existingItem){
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem 
        }else{
            updatedItems = state.items.concat(action.item)
        }
    }return{
        item: updatedItems,
        totalAmount: updatedTotalamount
    }
    if(action.type === 'REMOVE'){
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingItemIndex]
        const updatedTotalamount = state.totalAmount - existingItem.price
        let updatedItems
        if(existingItem.amount === 1){
            updatedItems = state.items.filter((item) => item.id !== action.id)
        }else{
            const updatedItem = {...existingItem,
            amount: existingItem.amount -1}
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }return{
            items: updatedItems,
            totalAmount: updatedTotalamount
        }
    }
    return defaultState
}

const CartProvider = () => {
    const [cart, dispCart] = useReducer(cartReducer, defaultState)
    const onAddCartHandler = (item) => {
        dispCart({
            type: 'ADD',
            item: item,
        })
    }
    const onRemoveCartHandler = (id) => {
        dispCart({
            type: 'REMOVE',
            id: id,
        })
    }
    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        onAdd: onAddCartHandler,
        onRemove: onRemoveCartHandler
    }
    return(
        <CartContext.Provider value={cartContext} > {props.children} </CartContext.Provider>
    )
}

export default CartContext