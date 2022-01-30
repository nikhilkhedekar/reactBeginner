import GroceryItem from './groceryitem'

const GroceryList = (props) => {
    const groceryList = props.grocery.map((item) => (
        <GroceryItem key={item.id}
        name={item.name}
        price={item.price}
        date={item.date} />
    ))
    return(
        <div>
            {groceryList}
        </div>
    )
}

export default GroceryList