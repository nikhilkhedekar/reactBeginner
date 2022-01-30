import React, { useState } from 'react';


//to check if cookie is created or not go to devtool application select cookies dropdown select add 
const App = () => {
    const [cookies, setCookies] = useState('');

    const setCookie = () => {
        setCookies(document.cookie = "username = James Bond" )
    }
    
    const getCookie = () => {
        return(
            <div>
                { cookies !== '' ? console.log(cookies) : "no cookies found" }
            </div>
        );
    }
    return(
        <div>
            <button onClick={setCookie} > Set Cookie </button>
            <button onClick={getCookie} > Get Cookie </button>
        </div>
    );
}

export default App;