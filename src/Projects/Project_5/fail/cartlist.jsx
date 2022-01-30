const CartList = (props) => {
    return(
        <div>
            <div>
                <h3>{props.name}</h3>
                <span>{props.quantity}</span>
                <span>{props.price}</span>

            </div>
            <div>
                <button onClick={props.onAdd} > + </button>
                <button onClick={props.onRemove} > - </button>
            </div>
        </div>
    )
}

export default CartList