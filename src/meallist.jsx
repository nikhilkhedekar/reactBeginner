import { useContext } from 'react'

import InputForm from './inputform'
import CartContext from './cartcontext'

const MealList = (props) => {
    const CartCtx = useContext(CartContext)
    const onAdd = quantity => {
        CartCtx.onAdd({
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price,
        })
        console.log(quantity)
    }
    
    return(
        <div>
            <h1>{props.name}</h1>
            <span>{props.description}</span>
            <h3>{props.price}</h3>
           <InputForm id={props.id} onAdd={onAdd} />
        </div>
    )
}

export default MealList