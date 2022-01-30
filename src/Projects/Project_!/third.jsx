import { useState } from 'react'
import './itemcontent.css'

const Third = (props) => {
    const [tvalue, settvalue] = useState();
    const addValue = () => {
        settvalue(props.tvalue);
    }
    const removeValue = () => {
        settvalue('');
    }
    return (

        <div className='item-add' >
            <span className='show-item' >{tvalue}</span>
            <button className='btn-item' onClick={addValue} > Add </button>
            <button className='btn-item' onClick={removeValue} > Remove </button>
        </div>

    )
}


export default Third