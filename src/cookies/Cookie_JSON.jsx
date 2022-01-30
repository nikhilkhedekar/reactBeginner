import { useState } from 'react';

const App = () => {
    const [cookies, setCookies] = useState('')
    const [data, setData] = useState('')
    const [parsedData, setParsedData] = useState()
    const setCookie = () => {
        const timeout = setTimeout(() => {
            setCookies(document.cookie = "username = Tony; password = 123123;")
            setData(JSON.stringify(cookies))
            console.log(cookies)
        }, 100)
    }
    const getCookie = () => {
        const timeout = setTimeout(() => {
            setParsedData(JSON.parse(data))
            console.log(parsedData)
        })
    }
    return (
        <div>
            <button onClick={setCookie} > Set Cookie </button>
            <span> {cookies} </span>
            <button onClick={getCookie} > Get Cookie </button>
            <span> {parsedData} </span>
        </div>
    )
}

export default App;