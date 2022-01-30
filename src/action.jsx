import { useReducer } from 'react'

import initialState from './store'
import formReducer from './reducer'

const useInput = (validate) => {
    const [formState, dispatchForm] = useReducer(formReducer, initialState);
    
    const validateInput = validate(formState.value)
    const formValidate = formState.isClicked && !validateInput

    const inputHandler = (e) => {
        dispatchForm({
            type: 'INPUT',
            val: e.target.value,
        })
    }

    const blurHandler = () => {
        dispatchForm({
            type: 'BLUR',
        })
    }

    const resetHandler = () => {
        dispatchForm({
            type: 'RESET',
        })
    }
    return{
        value: formState.value,
        isValid: validateInput,
        hasError: formValidate,
        inputHandler,
        blurHandler,
        resetHandler,
    }
}

export default useInput