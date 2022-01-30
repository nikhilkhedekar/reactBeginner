import { useState, useCallback } from 'react'


//need to add promise.all(resolve, reject) 
const App = () => {
    const [data, setData] = useState();
    const httpRequest = new XMLHttpRequest();
    const sendGetRequest = useCallback(
        () => {
            httpRequest.onreadystatechange = writeContent;
            httpRequest.open('GET', 'https://reqres.in/api/users?page=2')
            httpRequest.send()
        },
        [],
    )
    const writeContent = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            const response = httpRequest.responseText;

            setData(response);

        } else {
            alert('problem')
        }
    }


    return (
        <div>
            <span>{data}</span>
            <button onClick={sendGetRequest} > Get </button>
        </div>
    )
}

export default App