import { useRef } from 'react'

import Input from './input'

const InputForm = (props) => {
    const inputRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault();
        const inputQuantity = inputRef.current.value;
        const quantity = +inputQuantity;
        console.log(quantity)
        if(quantity < 1 || quantity > 5){
            return;
        }
        props.onAdd(quantity)
    }
    
    return(
        <div>
            <form onSubmit={submitHandler} >
            <Input ref={inputRef} label='Quantity' input={{id: 'quantity_' + props.id, min: '1', max: '5', type: 'number', defaultValue: '1' }} />
            <button>Add</button>
            </form>
        </div>
    )
}

export default InputForm 