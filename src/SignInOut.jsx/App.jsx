import React, { useState } from 'react';


const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChangeHandler(e) {
        setEmail(e.target.value)
    }

    function onPasswordChangeHandler(e) {
        setPassword(e.target.value)
    }

    return (
        <div>
            <label>
                Email:
                <input onChange={onEmailChangeHandler} value={email} autoFocus required />
            </label>
            <label>
                Password:
                <input onChange={onPasswordChangeHandler} value={password} autoFocus required />
            </label>
            <List email={email} password={password} />
        </div>
    );
}

export default App;