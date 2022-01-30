import Date from './date'

const FoodItem = (props) => {
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>{props.price}</div>
            <Date date={props.date} /> 
        </div>
    )
}

export default FoodItem