import FoodForm from './foodform'

const FoodOrder = (props) => {
    
    const foodFormHandler = data => {
        const foodFormData = {
            id: Math.ceil(Math.random() * 10 ) + 1,
            ...data
        }
        console.log(foodFormData)
        props.foodListHandler(foodFormData)
    }
    
    return(
        <div>
            <FoodForm foodFormHandler={foodFormHandler} />
        </div>
    )
}

export default FoodOrder