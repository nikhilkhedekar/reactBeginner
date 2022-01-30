import { useState, useCallback } from 'react'


//need to add promise.all(resolve, reject) 
const App = () => {
    //const [data, setData] = useState();
    //const [user, setUser] = useState();
    //const [passcode, setPasscode] = useState();
    const [resp, setResp] = useState();
    const [loading, setLoading] = useState(false)
    //setUser('Nikhil');
    //setPasscode(123);
    //const list = {
    //    user: user,
    //    passcode: passcode,
    //};
    //setData(JSON.stringify(list));
    const httpRequest = new XMLHttpRequest();
    const sendPostRequest = useCallback(
        () => {
            setLoading(true)
            httpRequest.onreadystatechange = writeContent;
            httpRequest.open('POST', 'https://react-fetch-req-default-rtdb.firebaseio.com/')
            httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            httpRequest.send('username = Nikhil & passcode = 123')
        },
        [],
    )
    //console.log(data);
    const writeContent = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            const response = httpRequest.responseText;
            setResp(response);
            console.log(resp)
        } else {
            alert('problem')
        }
    }
    setLoading(false)

    return (
        <div>
            <span>{loading ? resp : null}</span>
            <button onClick={sendPostRequest} > Post </button>
        </div>
    )
}

export default App