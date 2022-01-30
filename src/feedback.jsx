import { useState } from 'react'

import FeedBackList from './feedbacklist'
import FeedBackForm from './feedbackform'

const FeedBack = () => {
    const [feedback, setFeedback] = useState([]);
    const addFeedback = (FB) => {
        setFeedback(prevFB => {
            const newFeedback = [...prevFB];
        newFeedback.unshift({id: Math.random(), fb: FB,});
        return newFeedback;
        })
    }
    const removeFeedback = (removeID) => {
        setFeedback(prevFB => prevFB.filter((data) => data.id !== removeID))
    }
    return(
        <div>
            <FeedBackForm addFeedback={addFeedback} />
            <FeedBackList feedback={feedback} removeFeedback={removeFeedback} />
            
        </div>
    )
}

export default FeedBack