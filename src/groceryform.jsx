import { useState } from 'react'

const GroceryForm = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.date)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const inputGrocery = {
            name,
            price: +price,
            date: new Date(date),
        }
        props.addedGrocery(inputGrocery)
        setName('');
        setPrice('');
        setDate('');
    }
    
    return(
        <div>
            <form onSubmit={submitHandler} >
                <input type='text' onChange={nameHandler} value={name} />
                <input type='number' min='100' step='100' onChange={priceHandler} value={price} />
                <input type='date' min='2019-0-1' max='2021-4-16' onChange={dateHandler} value={date} />
                <button> Add </button>
            </form>
        </div>
    )
}

export default GroceryForm