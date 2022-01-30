import { useState } from 'react'

const UserForm = (props) => {
    const [name, setName] = useState('')
    const nameChange = (e) => {
        setName(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.addToList(name)
        setName('')
    } 
    
    return(
        <form onSubmit={onSubmitHandler} >
            <input onChange={nameChange} value={name} />
            <input type='submit' />
        </form>
    )
}

export default UserForm