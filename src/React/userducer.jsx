import React, { useState, useReducer } from 'react';

const validUsername = (state, action) => {
    if (action.type === 'ON_CHANGE') {
        return {
            value: action.val,
            isValid: action.val.includes('&')
        }
    }
    if (action.type === 'ON_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('&')
        }
    }
    return {
        value: '',
        isValid: false 
    }
}

const App = () => {
    const [username, setUsername] = useReducer(validUsername, {
        value: '',
        isValid: null
    });
    

    function onChangeHandler(e) {
        setUsername({
            type: 'ON_CHANGE',
            val: e.target.value
        })
        
    }

    function onBlurHandler() {
        setUsername({
            type: 'ON_BLUR'
        })
    }

    
    
    return (
        <div>
            <input value={username.value} onChange={onChangeHandler} onBlur={onBlurHandler}  />
            {/*<IsUsernameValid />*/}
            { username.isValid === false ? 'username invalid' : null }
            { username.isValid === true ? 'username valid' : null }
        </div>
    );
}

export default App;