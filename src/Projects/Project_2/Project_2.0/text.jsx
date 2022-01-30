

const Text = (props) => {
    
    const deleteText = () => {
        props.onDeleteHandler(props.id)
    }
    return(
        <ul onClick={deleteText} >
            {props.children}
        </ul>
    )
}

export default Text