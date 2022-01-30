import Date from './date'

const GroceryItem = (props) => {
    return(
        <div>
            <h1> {props.name} </h1>
            <h3> {props.price} </h3>
            <Date date={props.date} />
        </div>
    )
}

export default GroceryItem