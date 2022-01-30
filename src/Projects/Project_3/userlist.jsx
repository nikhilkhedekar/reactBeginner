

const UserList = (props) => {
    return (
        <div>
            {
                props.arr.map((list) => {
                    return(
                        <ul key={list.uName} >
                            <li>{list.uName}</li>
                            <li>{list.uAge}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default UserList