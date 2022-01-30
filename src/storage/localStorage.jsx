import React, { useState } from 'react'

const App = () => {
    const [val, setVal] = useState('')
    const [input, setInput] = useState('')
    const onChangeHandler = (e) => {
        setVal(e.target.value)
        
    }
    const onBlurHandler = () => {
        localStorage.setItem('username', val)
    }
    const onClickHandler = () => {
        setInput(val)
        const data = localStorage.getItem('username')
        console.log(data)
    }
    return (
        <div>
            <label>
                <input value={val} onChange={onChangeHandler} onBlur={onBlurHandler} placeholder="username" />
            </label>

            <button onClick={onClickHandler} > SignIn </button>
            <span> {input} </span>
        </div>
    )
}

export default App