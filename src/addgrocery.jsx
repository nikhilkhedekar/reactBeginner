import GroceryForm from './groceryform'

const AddGrocery = props => {
    const addedGrocery = inputGrocery => {
        const addToGrocery = {
            id: Math.ceil(Math.random() * 100) + 1,
            ...inputGrocery,
        }
        props.addToGrocery(addToGrocery);
    }
    
    return(
        <div>
            <GroceryForm addedGrocery={addedGrocery} />
        </div>
    )
}

export default AddGrocery