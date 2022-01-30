import { useState } from 'react'


import './signin.css'


const SignIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userVal, setUserVal] = useState('');
    const [passVal, setPassVal] = useState('');
    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }
    const usernameValid = () => {
        if (username.length < 8) {
            setUserVal('Invalid Uername')
        } else {
            setUserVal('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const passwordValid = () => {
        if (password.length < 8 ) {
            setPassVal('Invalid Password')
        } else {
            setPassVal('')
        }
    }
    return (
        <div className='signin'>
            
            <div className='input-label' >
                <label> Username:
                    <input
                        type='text'
                        className='input'
                        placeholder='abc123'
                        onChange={usernameHandler}
                        value={username}
                        onBlur={usernameValid} />
                </label> <br />
                <label> Password: 
                    <input 
                    type='password'
                    className='input' 
                    onChange={passwordHandler} 
                    vlaue={password} 
                    onBlur={passwordValid}/> </label>
            </div>
            <div>
            <span className='msg' >{userVal}{passVal}</span><br />
            </div>
            <div>
                <button className='btn' onClick={props.signInHandler} > SignIn </button>
            </div>
        </div>
    )
}

export default SignIn