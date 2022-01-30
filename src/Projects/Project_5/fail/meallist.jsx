import { useContext } from 'react'

import CartContext from './cartcontext'
import MealForm from './mealform'

const MealList = (props) => {
    const CartCtx = useContext(CartContext)
    const onAdd = quantity => {
        CartCtx.onAdd({
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price,
        })
    }
    return(
        <div>
            <h2> {props.name} </h2>
            <span> {props.description} </span>
            <span> {props.price} </span>
            <MealForm id={props.id} onAdd={onAdd}  />
        </div>
    )
}

export default MealList