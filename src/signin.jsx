import { useState, useEffect, useRef } from 'react'
 
import useSignIn from './signinaction'
import Input from './signininput'
import Header from './header'

const SignIn = () => {

    const [validateForm, setValidateForm] = useState(false)
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    const validateUsername = val => val.trim().length > 8 && val.includes('@')
    const validatePassword = val => val.trim().length > 8

    const {
        value: usernameHandler,
        isValid: usernameIsValid,
        hasError: erroredUsername,
        changeHandler: usernameChange,
        blurHandler: usernameBlur,
        resetHandler: usernameReset,
    } = useSignIn(validateUsername);

    const {
        value: passwordHandler,
        isValid: passwordIsValid,
        hasError: erroredPassword,
        changeHandler: passwordChange,
        blurHandler: passwordBlur,
        resetHandler: passwordReset,
    } = useSignIn(validatePassword);
 
    useEffect(() => {
        if(usernameIsValid && passwordIsValid){
            setValidateForm(true)
        }
    }, [usernameIsValid, passwordIsValid])

    const submitHandler = (e) =>{
        e.preventDefault();
        if(!validateForm){
            return;
        }
        
        usernameReset();
        passwordReset();
    }
    return(
        <div>
            <Header />
            <form onSubmit={submitHandler} >
            <Input onChange={usernameChange} onBlur={usernameBlur} value={usernameHandler} id='username' hasError={erroredUsername} ref={usernameRef} /> 
            <Input onChange={passwordChange} onBlur={passwordBlur} value={passwordHandler} id='password' hasError={erroredPassword} ref={passwordRef} />
            <div>
                {erroredUsername && <div>Wrong Username</div>}
                {erroredPassword && <div>Wrong Password</div>}
            </div>
            <button disabled={!validateForm} > SignIn </button>
            </form>
        </div>
    )
}

export default SignIn