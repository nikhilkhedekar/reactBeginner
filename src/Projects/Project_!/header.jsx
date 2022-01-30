import './header.css'

const Header = (props) => {
  
    return (
        <div className='header'>
            {!props.status ? <h1>Hello User!</h1> : 
            (props.status && !props.interCom && !props.showCart)? 
            <div>
                <h1>Hello User!</h1>
                <button className='btn-header' onClick={props.interComHandler} > Shoppings </button><br />
                <button className='btn-header' onClick={props.homePageHandler} > SignOut </button>
            </div> :
            (props.status && props.interCom && !props.showCart) ? 
            <div>
                <h1>Order</h1>
                <button className='btn-header' onClick={props.showCartHandler} >Cart</button><br />
                <button className='btn-header' onClick={props.homePageHandler} > SignOut </button>
            </div> : 
            (props.status && props.interCom && props.showCart) ? 
            <div>
                <h1>Cart</h1>
                <button className='btn-header' onClick={props.cancelHandler} > Cancel </button><br />
                <button className='btn-header' onClick={props.homePageHandler} > SignOut </button>
            </div> : 
            null}
        </div>
    )
}
export default Header