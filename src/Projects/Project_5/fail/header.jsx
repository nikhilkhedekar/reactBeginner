import CartButton from './cartbutton'

const Header = (props) => {
    
    return(
        <div>
            <h1>Header</h1>
            <CartButton showCartHandler={props.showCartHandler} />
        </div>
    )
}

export default Header