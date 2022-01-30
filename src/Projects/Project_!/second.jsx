import { useState } from 'react'
import './itemcontent.css'

const Second = (props) => {
    const [svalue, setsvalue] = useState();
    const addValue = () => {
        setsvalue(props.svalue);
    }
    const removeValue = () => {
        setsvalue('');
    }
    return (

        <div className='item-add' >
            <span className='show-item' >{svalue}</span>
            <button className='btn-item' onClick={addValue} > Add </button>
            <button className='btn-item' onClick={removeValue} > Remove </button>
        </div>

    )
}


export default Second