const signInReducer = (state, action) => {
    if(action.type === 'CHANGE'){
        return{
            value: action.val,
            isValid: state.isValid,
        }
    }
    if(action.type === 'BLUR'){
        return{
            value: state.value,
            isValid: true,
        }
    }
    if(action.type === 'RESET'){
        return{
            value: '',
            isValid: false,
        }
    }
    return signInReducer
}

export default signInReducer