const CartItem = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <span>{price}</span>
            <span>x {rpops.amount}</span>
            <div>
                <button onClick={props.cartItemRemoveHandler} > - </button>
                <button onClick={props.cartItemAddHandler} > + </button>
            </div>
        </div>
    )
}

export default CartItem