import  { useEffect, useState } from 'react'

import useInput from './input'

const InputForm = () => {
    const [validateForm, setValidateForm] = useState(false)
    const isEmpty = value => {
        console.log(value)
        return value.trim().length >  8;
    }
    
    
    const isEmail = value => {
        return value.includes('@')
    }
    
    const {
        value: userNameValue,
        isValid: userNameValid,
        hasError: userNameError,
        onChangeHandler: userNameChange,
        OnBlurHandler: userNameBlur,
        resetHandler: resetUserName
    } = useInput(isEmpty)

 
    const {
        value: emailValue,
        isValid:emailValid,
        hasError: emailError,
        onChangeHandler: emailChange,
        OnBlurHandler: emailBlur,
        resetHandler: emailReset
    } = useInput(isEmail)

  
    useEffect(() => {
        
    if(userNameValid && emailValid){
        setValidateForm(true)
    }
    }, [userNameValid, emailValid])
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(!validateForm){
            return;
        }
        console.log(validateForm)
        resetUserName();
        emailReset();
    }
    
    return(
        <div>
            <form onSubmit={onSubmitHandler} >
                <input onChange={userNameChange} onBlur={userNameBlur} value={userNameValue} />
                {userNameError && <div>UserName Wrong</div>}
                <input onChange={emailChange} onBlur={emailBlur} value={emailValue} />
                {emailError && <div>Email Wrong</div>}
                <button disabled={!validateForm} > SignIn </button>
            </form>
        </div>
    )
}

export default InputForm