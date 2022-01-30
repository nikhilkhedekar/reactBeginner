import Remove from './remove'

const Show = (props) => {
    return(
        <div>
            {
                props.arr.map((data) => {
                    return(
                        <Remove key={data.id} id={data.id} removeHandler={props.removeHandler} >
                        {data.id}
                        {data.name}
                    </Remove>
                    )
                })
            }
        </div>
    )
}

export default Show