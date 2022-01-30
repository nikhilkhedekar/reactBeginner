

const Order = (props) => {
    
    return(
        <div>
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>{props.price}</div>
            <div>{props.date}</div>
        </div>
    )
}

export default Order