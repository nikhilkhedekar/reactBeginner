import ProductDate from './date'

const Product = (props) => {
    
    return(
        <div>
            <div><ProductDate date={props.date} /></div>
            <div>
                <span>{props.name}</span>
                <span>{props.price}</span>
            </div>
        </div>
    )
}

export default Product