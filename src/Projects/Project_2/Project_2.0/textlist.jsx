import Text from './text'

const TextList  = (props) => {
    
    

    return(
        <div>
            {props.arr.map((newData) => {
                return(
                    <Text id={newData.id} onDeleteHandler={props.onDeleteHandler} > {newData.text} </Text>
                )
            })}
        </div>
    )
}

export default TextList