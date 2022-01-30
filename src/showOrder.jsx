import UserOrder from './userorder'

const ShowOrder = (props) => {
    const show = data => {
    
        const userData = data
        props.userOrder(userData)
    } 
    return(
        <div>
            <UserOrder show={show} />
        </div>
    )
}

export default ShowOrder