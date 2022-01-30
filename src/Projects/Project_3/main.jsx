import { useState } from 'react'

import AddUser from './adduser'
import UserList from './userlist'

const App = () => {
    const [arr, setArr] = useState([]);

    const addUserHandler = (user, age) => {
        setArr(prevArr => {
            return [
                {
                    uName: user,
                    uAge: age,
                }, ...prevArr
            ]
        }
    )}


    return (
        <div>
            <AddUser addUserHandler={addUserHandler} />
            <UserList arr={arr} />
        </div>
    )
}

export default App