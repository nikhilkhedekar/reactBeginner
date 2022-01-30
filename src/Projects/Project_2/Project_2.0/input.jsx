import { useState } from 'react'

const Input = (props) => {
    const [line, setLine] = useState('')
    

    const inputHandler = (e) => {
        setLine(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.arrHandler(line)
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler} >
                <input onChange={inputHandler} value={line} />
                <input type='submit' value='submit' />            
            </form>
        </div>
    )
}

export default Input