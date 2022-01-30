const CartOrder = (props) => {
    console.log(props.name)
    
    return(
        <div>
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>{props.price}</div>
        </div>
    )
}

export default CartOrder