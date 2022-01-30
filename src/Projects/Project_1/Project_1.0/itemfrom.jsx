import { useState } from 'react'


const ItemForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const titleChange = (e) => {
        setTitle(e.target.value)
    }
    const priceChange = (e) => {
        setPrice(e.target.value)
    }
    const dateChange = (e) => {
        setDate(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const submitData = {
            title: title,
            price: price,
            date: new Date(date)
        }
        console.log(title)
        console.log(price)
        console.log(date)
        props.submittedData(submitData);
        
        setTitle('')
        setPrice('')
        setDate('')
    }
    return(
        <div>
            <form onSubmit={submitHandler} > 
            <div>
                <input onChange={titleChange} value={title} />
            </div>
            <div>
                <input type='number' min='2500' step='2500' onChange={priceChange} value={price} />
            </div>
            <div>
                <input type='date' min='2019-1-1' max='2021-5-5' onChange={dateChange} value={date} />
            </div>
            <button> submit </button>
            </form>
        </div>
    )
}

export default ItemForm