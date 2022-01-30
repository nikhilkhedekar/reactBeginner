const Remove = (props) => {
    const removeItem = () => {
        props.removeHandler(props.id)
    }
    return(
        <div onClick={removeItem} >
            {props.children}
        </div>
    )
}

export default Remove