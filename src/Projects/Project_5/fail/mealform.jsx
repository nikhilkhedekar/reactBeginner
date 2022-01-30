import { useState, useRef } from 'react'



const MealForm = (props) => {
    const enterQuantity = useRef()
    const [validQuantity, setValidQauntity] = useState(true)
 
    const submitHandler = (e) => {
        e.preventDefault();
        const quantity = enterQuantity.current.value;
        const enteredQuantity = +quantity;
        if( enteredQuantity < 1
        || enteredQuantity > 5){
            setValidQauntity(false)
            return;
        }
        props.onAdd(quantity)

    }
    return(
        <div>
            <form onSubmit={submitHandler} >
            <label htmlFor={'quantity_' + props.id} > Quantity </label>
            <input ref={enterQuantity} type = 'number' min = '1' max = '5' defaultValue = '1' step = '1'  />
            <button>Add</button> 
            </form>
            
        </div>
    )
}

export default MealForm