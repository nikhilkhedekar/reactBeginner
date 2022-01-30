const formReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return{
            value: action.val,
            isClicked: state.value
        }
    }
    if(action.type === 'BLUR'){
        return{
            value: state.value,
            isClicked: true,
        }
    }
    if(action.type === 'RESET'){
        return{
            value: '',
            isClicked: false
        }
    }
    return formReducer
}

export default formReducer