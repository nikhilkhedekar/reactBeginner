import { useRef,useState } from 'react'

import MealInput from './mealinput'

const MealInputForm = (props) => {
    const mealInputRef = useRef()
    const [validateForm, setValidateForm] = useState(true) 
    const submitHandler = (e) => {
        e.preventDefault()
        const inputQuantity = mealInputRef.current.value;
        const quantity = +inputQuantity
        if(quantity < 1 || quantity > 5){
            setValidateForm(false)
        }
        props.onAdd(quantity)
    }
    return(
        <div onSubmit={submitHandler} >
            <form>
            <MealInput ref={mealInputRef} label='Quantity' input={{ id: 'quantity_' + props.id, step: '1', min: '1', max: '5', defaultValue: '1', }} />
           <button>Add</button>
            </form>
        </div>
    )
} 

export default MealInputForm