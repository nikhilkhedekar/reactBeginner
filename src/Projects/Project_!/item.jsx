import { useState } from 'react'

import First from './first'
import Second from './second'
import Third from './third'
import './item.css'

const App = (props) => {

    const [items, setItems] = useState([]);
    const [item, setItem] = useState('');

    const inputHandler = (e) => {
        setItem(e.target.value);
    }

    const addHandler = () => {
        setItems([...items, item]);
    }

    const clearHandler = () => {
        setItem('');
    }



    return (
        <div>
            <section className='item-add'>
                <input className='input-item' onChange={inputHandler} value={item} />
                <button className='btn-item' onClick={addHandler} > Add </button>
                <button className='btn-item' onClick={clearHandler} > Clear </button>
            </section>
            <section>
                <First fvalue={items[0]} />
                <Second svalue={items[1]} />
                <Third tvalue={items[2]} />
            </section>
            
        </div>
    )
}

export default App