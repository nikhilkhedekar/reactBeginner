import { useState, useCallback, useEffect } from 'react';

const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [postData, setPostData] = useState(false);
    setUsername('Nikhil')
    setPassword(123)
    const data = {
        username: username,
        password: password
    }

    const sendMovieList = useCallback(async () => {
        const response = await fetch('https://react-fetch-req-default-rtdb.firebaseio.com/nikhil.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset = utf-8'
            },
            body: JSON.stringify(data),
        })
        //const list = await response.json();
        setPostData(true)
        //console.log(list);
        
    },
        [],
    )

    setPostData(false)

    return (
        <div>
            <button onClick={sendMovieList} > POST </button>
        </div>
    )
}


export default App;