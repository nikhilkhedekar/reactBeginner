const FeedBackShow = (props) => {
    const removeHandler = () => {
        props.removeFeedback(props.id)
    }
    return(
        <div onClick={removeHandler} >
            {props.children}
        </div>
    )
}

export default FeedBackShow