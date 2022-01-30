import { useContext } from 'react'

import cartContext from './cart-context'

const MealItem = (props) => {
    const cartCtx = useContext(cartContext)
    const price = `${props.price.toFixed(2)}`
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount: props.amount,
            price: props.price
        })
    }
    return(
        <div>
            <li>
                <div>
                    <h3>
                        {props.name}
                    </h3>
                    <div> {props.description} </div>
                    <div> {price} </div>
                    <MealItemForm id={props.id}
                    onAddToCart={addToCartHandler}/>
                </div>
            </li>
        </div>
    ) 
}