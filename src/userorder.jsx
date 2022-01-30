import OrderForm from './orderform'

const UserOrder = (props) => {
    const userOrdered = userdata => {
        const usrodr = {
            id: Math.ceil(Math.random() * 10) + 1,
            ...userdata
        }
        props.show(usrodr)
    }
    
    return(
        <div>
            <OrderForm userOrdered={userOrdered} />
        </div>
    )
}

export default UserOrder