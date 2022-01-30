import { useState } from 'react'

import './itemcontent.css'

const First = (props) => {
    const [fvalue, setfvalue] = useState();
    const addValue = () => {
        setfvalue(props.fvalue);
    }
    const removeValue = () => {
        setfvalue('');
    }
    return (

        <div className='item-add' >
            <span className='show-item' >{fvalue}</span>
            <button className='btn-item' onClick={addValue} > Add </button>
            <button className='btn-item' onClick={removeValue} > Remove </button>
        </div>


    )
}


export default First