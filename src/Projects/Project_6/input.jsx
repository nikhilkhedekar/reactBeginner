import { useReducer } from 'react'

const ipState = {
    value: '',
    isTouched: false
}
 
const inputReducer = (state, action) => {
    if(action.type === 'input'){
        return{
            value: action.value,
            isTouched: state.isTouched
        }
    }
    if(action.type === 'blur'){
        return{
            value: state.value,
            isTouched: true
        }
    }
    if(action.type === 'reset'){
        return{
            value: '',
            isTouched: false
        }
    }
    return inputReducer
}

const useInput = (validate) => {

    const [inputState, dispatchInput] = useReducer(inputReducer, ipState);

    const isValidValue = validate(inputState.value)
    const hasError = inputState.isTouched && !isValidValue
    console.log(inputState.isTouched)
    console.log(isValidValue)
    const onChangeHandler = (e) =>{
        dispatchInput({
            type: 'input',
            value: e.target.value
        })
    }
    const OnBlurHandler = () => {
        dispatchInput({
            type: 'blur',
        })
    }
    const resetHandler = () => {
        dispatchInput({
            type: 'reset'
        })
    }
    return{
        value: inputState.value,
        isValid: isValidValue,
        hasError,
        onChangeHandler,
        OnBlurHandler,
        resetHandler,
    }
}

export default useInput