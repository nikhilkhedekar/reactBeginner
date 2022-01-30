import { useState } from 'react'

const FoodForm = (props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.price)
    }
    const dateHandler = (e) => {
        setDate(e.target.date)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const foodFormData = {
            name: name,
            price: +price,
            date: new Date(date)
        }
        console.log(+price)
        console.log(new Date(date))
        props.foodFormHandler(foodFormData);

        setName('')
        setPrice('')
        setDate('')

    }

    return(
        <div>
            <form onSubmit={submitHandler} > 
                <input type='text' onChange={nameHandler} value={name} />
                <input type='number' min='50' step='50' onChange={priceHandler} value={price} />
                <input type='date' min='2019-0-1' max='2021-4-12' onChange={dateHandler} value={date} />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default FoodForm