import { useReducer } from 'react'

import defaultState from './signinstore'
import signInReducer from './signinreducer'


const useSignIn = (data) => {
    const [inputState, dispInput] = useReducer(signInReducer, defaultState);



    const validateInput = data(inputState.value);
    const hasError = !validateInput && inputState.isValid

    const changeHandler = (e) => {
        dispInput({
            type: 'CHANGE',
            val: e.target.value,
        })
    }
    const blurHandler = () => {
        dispInput({
            type: 'BLUR',
        })
    }
    const resetHandler = () => {
        dispInput({
            type: 'RESET'
        })
    }



    return {
        value: inputState.value,
        isValid: inputState.isValid,
        hasError,
        changeHandler,
        blurHandler,
        resetHandler,
    }
}

export default useSignIn