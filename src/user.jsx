const User = (props) => {
    const onClickRemove = () => {
        props.removeFromList(props.id)
    }
    
    return(
        <ul onClick={onClickRemove} > 
            {props.children}
        </ul>
    )
}

export default User