import { useState } from 'react'

const OrderForm = (props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    const nameHandle = (e) => {
        setName(e.target.value)
    }
    const priceHandle = (e) => {
        setPrice(e.target.value)
    }
    const dateHandle = (e) => {
        setDate(e.target.value)
    }
 
    const submitHandle = (e) => {
        e.preventDefault();
        const userOrder = {
            name: name,
            price: +price,
            date: new Date(date)
        }

        props.userOrdered(userOrder)
        setName('')
        setPrice('')
        setDate('')
    }


    return(
        <div>
            <form onSubmit={submitHandle} >
            <input onChange={nameHandle} value={name} />
            <input type='number' min='50' step='50' onChange={priceHandle} value={price} />
            <input type='date' min='2020-0-1' max='2021-4-12' onChange={dateHandle} value={date} />
            <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default OrderForm