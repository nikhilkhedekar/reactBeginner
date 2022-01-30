import User from './user'
import UserForm from './userform'

const UserList = (props) => {

    return(
        <div>

            <div>
                <UserForm addToList={props.addToList} />
            </div>
            <div>
            {props.arr.map((data) => (
                <User key={data.id} removeFromList={props.removeFromList} id={data.id} > {data.name} </User> 
            ))}
            </div>
            
        </div>
    )
}

export default UserList