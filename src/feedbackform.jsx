import { useState } from 'react'

const FeedBackForm = (props) => {
    const [feedback, setFeedback] = useState('')
    const changeHandler = (e) => {
        setFeedback(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.addFeedback(feedback)
        setFeedback('');
    }
    return(
        <div>
            <form onSubmit={submitHandler} >
            <input onChange={changeHandler} value={feedback} />
            <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default FeedBackForm