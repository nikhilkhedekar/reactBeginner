import Order from './order'

const OrderList = (props) => {
    
    return(
        <div>
            {props.order.map((orderList) => {
                return(
                    <Order id={orderList.id}
                    name={orderList.name}
                    price={orderList.price}
                    data={orderList.date} />
                )
            })}
        </div>
    )
}

export default OrderList