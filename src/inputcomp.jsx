import { useState, useEffect } from 'react'

import useInput from './action'

const InputComponent = () => {

    const [validateForm, setValidateForm] = useState(false);

    const validateUserName = value => {
        return value.trim().length > 8 && value.includes('@');
    }
    const validatePassword = value => {
        return value.trim().length > 8
    }

    const {
        value: userName,
        isValid: isValidUserName,
        hasError: erroredUserName,
        inputHandler: userNameHandler,
        blurHandler: blurUserName,
        resetHandler: resetUserName,
    } = useInput(validateUserName)

    const {
        value: passWord,
        isValid: isValidPassWord,
        hasError: erroredPassWord,
        inputHandler: passWordHandler,
        blurHandler: blurPassWordHandler,
        resetHandler: resetPassWord,
    } = useInput(validatePassword)

    useEffect(() => {
        if(isValidPassWord && isValidUserName){
            setValidateForm(true)
        }
    }, [isValidUserName, isValidPassWord])

    const onSubmitHandler = (r) => {
        r.preventDefault();
        if(!validateForm){
            return;
        }
        resetPassWord();
        resetUserName();
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler} >
                <input onChange={userNameHandler} onBlur={blurUserName} value={userName} />
                <input onChange={passWordHandler} onBlur={blurPassWordHandler} value={passWord} />
                <span> {erroredUserName && <span> Wrong UserName </span>} </span>
                <span> {erroredPassWord && <span> Wrong PassWord </span>} </span>
                <button disabled={!validateForm} > SignIn </button>
            </form>
        </div>
    )
}

export default InputComponent