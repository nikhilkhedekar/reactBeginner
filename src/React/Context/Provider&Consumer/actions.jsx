export const reducerEmail = (state, action) => {
    if(action.type === 'EMAIL_CHANGE'){
        return{
            value: action.emailValue,
            validEmail: action.emailValue.includes('@') && action.emailValue.length > 8
        }
    }
    if(action.type === 'EMAIL_BLUR'){
        return{
            value: state.value,
            validEmail: state.value.includes('@') && state.value.length > 8
        }
    }
    return{
        value: '',
        validEmail: false
    }
}

export const reducerPassword = (state, action) => {
    if(action.type === 'PASSWORD_CHANGE'){
        return{
            value: action.passwordValue,
            validPassword: action.passwordValue.length > 8
        }
    }
    if(action.type === 'PASSWORD_BLUR'){
        return{
            value: state.value,
            validPassword: state.value.length > 8
        }
    }
    return{
        value: '',
        validPassword: false
    }
}
