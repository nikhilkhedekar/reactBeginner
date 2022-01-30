import FeedBackShow from './feedbackshow'

const FeedBackList = (props) => {
    const feedbackList = props.feedback.map((user) => (
        <FeedBackShow key={user.id} id={user.id} removeFeedback={props.removeFeedback} >{user.fb}</FeedBackShow> 
    ))
    return(
        <div>
            {feedbackList}
        </div>
    )
}

export default FeedBackList