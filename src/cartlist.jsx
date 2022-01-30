const CartList = (props) => {
console.log(props.quantity)
    return(
        <div>
            {props.name}
            {props.quantity}
            {props.price}
            <button onClick={props.onAdd}>+</button>
            <button onClick={props.onRemove}>-</button>
        </div>
    )
}

export default CartList